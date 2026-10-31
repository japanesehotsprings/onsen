# 家で入る名湯（温泉地×入浴剤コーナー）実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 日本温泉Webに、温泉地名の入浴剤・湯の花を3段階（①本物の成分／②公認の再現／③名前と香り）で整理するコーナー `/nyuyokuzai/` を足し、温泉地ページに「家で味わうなら」枠を、サイト全体に広告表記を付ける。

**Architecture:** 商品は手書きの正本 `src/data/bath_salts.js`（裏取り済みの事実だけ）に持たせる。楽天APIの結果（画像・アフィリエイトURL）は、ビルドの最初に `scripts/fetch_bath_salts.mjs` が取得して生成ファイル `src/data/bath_salts_resolved.js` に書き出し、コミットする。ページはこの2つを読むだけなので、APIが落ちていても前回の結果でビルドできる。描画は既存と同じく `innerHTML` の文字列で組み、prerender（jsdom）で静的HTMLにする。

**Tech Stack:** Vite 7 / 素のJS（ESM）/ jsdom（prerender・テスト）/ Node 26 の `node --test`（新しい依存は入れない）/ 楽天市場商品検索API 2026-07-01

**Spec:** `docs/superpowers/specs/2026-10-31-home-onsen-bath-salt-design.md`

## Global Constraints

- コメントは日本語、関数・変数名は英語の snake_case（CEOリポの規約。既存の `renderXxx` 系のページ関数名だけは既存に合わせて camelCase）
- 価格は表示しない。代わりに「最新の価格は楽天で確認してください」
- 効能の表現（「◯◯に効く」「本物の温泉と同じ効果」）、ランキング・点数、口コミは書かない
- 区分の根拠を裏取りできない商品は載せない。商品のない温泉地に枠を出さない
- 広告表記の文言：コーナーの各ページの冒頭「このページには広告（楽天アフィリエイト）を含みます」、温泉地ページの枠の見出し横「PR」
- API：`https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701`、`applicationId` はクエリ、`accessKey` はヘッダー、`Origin: https://japan-onsen-web.pages.dev`。キーは `.env` の `RAKUTEN_APP_ID` / `RAKUTEN_ACCESS_KEY` / `RAKUTEN_AFFILIATE_ID`。キーの値をログ・ファイル・コミットに出さない
- APIは1秒に1回まで（予想QPS=1で登録）
- 楽天のクレジット表示は、求められたらフッターに足す（今は付けない）
- **公開（`bash deploy.sh`）は、Task 6 の対応表をCEOが確認してから**。それまではコミットまで
- git：`git add -A` は使わず、ファイルを名指しで add する

## Review Focus

1. **区分の取り違え**：tier 1 なのに根拠の出典がない商品が紛れ込む → `validate_salts` がエラーにし、ビルドが止まる（Task 2 のテスト `tier1_requires_source`）
2. **販売終了・出品停止**：候補の itemCode が全部見つからない → その商品は表示されず、カードも枠も出ない（Task 3 の `resolve_salt_all_missing` ＋ Task 4 の `card_hidden_when_unresolved`）
3. **APIが落ちている・キーがない**：ネットワークエラーや `.env` なしでもビルドは止まらず、前回の生成ファイルを使う（Task 3 の `fetch_failure_keeps_previous`、`missing_env_skips_fetch`）
4. **温泉地idの打ち間違い**：`onsen_ids` に存在しない id → `validate_salts` がエラー（Task 2 の `unknown_onsen_id`）
5. **商品名・根拠に `<` や `&` が入る**：表示が崩れない（Task 4 のテスト `card_escapes_html`。既存の `esc()` を使う）

---

### Task 1: テストの仕組みとサイト全体の広告表記

**Files:**
- Modify: `package.json`（`"test": "node --test tests/"` を足す）
- Create: `tests/helpers/dom.mjs`
- Create: `src/components/ad_notice.js`
- Modify: `index.html:89-129`（フッター）
- Modify: `src/pages/hotelDetail.js:149-170`（予約カード）
- Test: `tests/ad_notice.test.mjs`

**Interfaces:**
- Produces: `render_with_dom(handler: Function, params?: object) => Document`（`tests/helpers/dom.mjs`。`scripts/prerender.mjs` の `setup_dom` と同じグローバルを立て、`<head></head><body><div id="app"></div></body>` に描画して document を返す）
- Produces: `AD_NOTICE_PAGE: string` = `'このページには広告（楽天アフィリエイト）を含みます'`、`pr_label() => string`（`<span class="pr-label">PR</span>`）、`AD_NOTICE_SITE: string` = `'当サイトはアフィリエイト広告（楽天アフィリエイト・A8.net 等）を利用しています。'`

- [ ] **Step 1: 失敗するテストを書く**（`tests/ad_notice.test.mjs`）
  - `ad_notice_constants`：`AD_NOTICE_PAGE` と `AD_NOTICE_SITE` が上の文言と一致、`pr_label()` が `PR` を含む
  - `footer_has_site_notice`：`index.html` を読み、`AD_NOTICE_SITE` の文言を含む
  - `hotel_page_has_notice`：`render_with_dom(renderHotelDetail, { id: hotelList[0].id })` の `.booking-card` の textContent に「広告」を含む
- [ ] **Step 2: `npm test` で失敗を確認**（モジュールが無いエラー）
- [ ] **Step 3: 実装**：`ad_notice.js` を作り、フッターの `footer-copy` の直前に `<p class="footer-ad-notice">` で `AD_NOTICE_SITE` を入れる（index.html は静的なので文言を直接書く）。予約カードの `booking-notice` に「リンクの一部は広告（アフィリエイト）です。」を足す
- [ ] **Step 4: `npm test` で成功を確認**
- [ ] **Step 5: コミット**

```bash
git add package.json tests/helpers/dom.mjs tests/ad_notice.test.mjs src/components/ad_notice.js index.html src/pages/hotelDetail.js
git commit -m "サイト全体に広告表記を追加（フッター・宿ページの予約カード）、node --test の仕組みを用意"
```

### Task 2: 商品データの型と検証

**Files:**
- Create: `src/data/bath_salts.js`（この時点では見本1件だけ。本番データは Task 6）
- Create: `src/data/bath_salts_lib.js`
- Modify: `scripts/prerender.mjs`（最初に `validate_salts` を呼び、エラーがあれば一覧を出して `process.exit(1)`）
- Test: `tests/bath_salts_lib.test.mjs`

**Interfaces:**
- Produces: `bathSaltList: Salt[]`（`bath_salts.js`）。`Salt` = `{ id: string, name: string, maker: string, onsen_ids: string[], district?: string, tier: 1|2|3, tier_basis: string, ingredients_note: string, tags: string[], jan?: string, rakuten_item_codes: string[], is_gift: boolean, sources: {title: string, url: string}[], checked_at: 'YYYY-MM-DD' }`
- Produces: `validate_salts(salts: Salt[], onsen_ids: Set<string>) => string[]`（エラー文の配列。空なら正常）
- Produces: `get_salts_by_onsen(onsen_id: string, salts: Salt[]) => Salt[]`（tier の小さい順→ `id` 順）
- Produces: `TIER_LABELS = { 1: '本物の温泉成分', 2: '温泉地公認の再現', 3: '名前と香り・色' }`
- Produces: `PREF_TAGS = ['にごり湯', '美肌系', '硫黄の香り', '炭酸']`（好みから探すの選択肢。Task 6 で増減してよい）

- [ ] **Step 1: 失敗するテストを書く**
  - `valid_salt_passes`：正しい1件 → `[]`
  - `tier1_requires_source`：tier 1 で `sources: []` → エラー1件（`id` を含む）
  - `tier_out_of_range`：`tier: 4` → エラー
  - `unknown_onsen_id`：`onsen_ids: ['o-xxx-9']` → エラー（その id を含む）
  - `requires_item_code`：`rakuten_item_codes: []` → エラー
  - `duplicate_id`：同じ id 2件 → エラー
  - `sorted_by_tier`：tier 3・1・2 の3件 → `get_salts_by_onsen` が 1・2・3 の順
- [ ] **Step 2: `npm test` で失敗を確認**
- [ ] **Step 3: 実装**（tier 1〜3 はすべて `sources` 1件以上・`tier_basis` 必須とする）
- [ ] **Step 4: `npm test` で成功を確認**
- [ ] **Step 5: コミット**（`src/data/bath_salts.js src/data/bath_salts_lib.js scripts/prerender.mjs tests/bath_salts_lib.test.mjs`）

### Task 3: 楽天APIの取得スクリプト

**Files:**
- Create: `scripts/fetch_bath_salts.mjs`
- Create: `src/data/bath_salts_resolved.js`（生成物。初回は `export const bathSaltResolved = {};`。コミットする）
- Modify: `package.json` の build を `node --env-file-if-exists=.env scripts/fetch_bath_salts.mjs && vite build && node scripts/prerender.mjs && node scripts/images.mjs` に
- Test: `tests/fetch_bath_salts.test.mjs`

**Interfaces:**
- Consumes: `bathSaltList`（Task 2）
- Produces: `bathSaltResolved: { [salt_id]: { item_code: string, image_url: string, affiliate_url: string, fetched_at: string } | null }`（`null` = 候補が全部見つからない）
- Produces（テスト用に export）：`resolve_salt(salt: Salt, fetch_item: (item_code) => Promise<Item|null>, previous?: Resolved) => Promise<Resolved|null>`、`Item = { itemCode, affiliateUrl, mediumImageUrls: string[], availability: number }`

- [ ] **Step 0: 画像の利用条件を確認**：楽天ウェブサービスの規約・ガイド（webservice.rakuten.co.jp の利用規約・クレジット表示・各APIのページ）で、APIの商品画像をアフィリエイトリンクと一緒に掲載してよいかを確かめ、結論と出典URLを設計書6章に追記する。使えない場合は、生成ファイルの `image_url` を常に `''` にする
- [ ] **Step 1: 失敗するテストを書く**（`fetch_item` はスタブ）
  - `resolve_salt_first_available`：候補 A は `null`、B は在庫あり → B の `item_code`・`affiliate_url`・画像の1枚目
  - `resolve_salt_skips_unavailable`：`availability: 0` の候補は飛ばす
  - `resolve_salt_all_missing`：全部 `null` → `null`
  - `fetch_failure_keeps_previous`：`fetch_item` が throw → `previous` をそのまま返す
  - `missing_env_skips_fetch`：`RAKUTEN_APP_ID` を空にしてスクリプトを子プロセスで実行 → 終了コード0、生成ファイルは変わらない、標準出力に「楽天APIのキーがないため取得を飛ばしました」
- [ ] **Step 2: `npm test` で失敗を確認**
- [ ] **Step 3: 実装**
  - 1件の取得は `itemCode=<code>&hits=1&formatVersion=2&affiliateId=…&applicationId=…`、ヘッダー `accessKey`・`Origin`。リクエストの間は1.1秒あける
  - 全候補が見つからない商品に `jan` があれば、`keyword=<jan>` で検索し、見つかった itemCode をログに「差し替え候補」として出す（データは書き換えない）
  - 画像URLは `?_ex=128x128` を `?_ex=300x300` に置き換える
  - 生成ファイルは `id` 順に並べ、内容が変わらなければ書き直さない
  - 最後に「取得 n件／見つからない n件（id 一覧）」を出す
- [ ] **Step 4: `npm test` で成功を確認。`node --env-file=.env scripts/fetch_bath_salts.mjs` を実行し、見本1件が解決されることを確認**
- [ ] **Step 5: コミット**（`scripts/fetch_bath_salts.mjs src/data/bath_salts_resolved.js package.json tests/fetch_bath_salts.test.mjs`。`.env` は add しない）

### Task 4: コーナーのページ（トップ・温泉地ごとの比較）

**Files:**
- Create: `src/components/salt_card.js`
- Create: `src/components/salt_tiers_svg.js`（3段階の図。インラインSVG、色は既存の CSS 変数）
- Create: `src/pages/bathSaltList.js`（`/nyuyokuzai`）
- Create: `src/pages/bathSaltDetail.js`（`/nyuyokuzai/:id`、`:id` は温泉地id）
- Modify: `src/routes.js`、`src/page_list.js`（`/nyuyokuzai` と、商品がある温泉地の `/nyuyokuzai/<onsen_id>`）、`index.html` のフッターに「家で入る名湯」リンク
- Modify: `src/style.css`（カード・バッジ・PR表記）
- Test: `tests/bath_salt_pages.test.mjs`

**Interfaces:**
- Consumes: `bathSaltList`・`get_salts_by_onsen`・`TIER_LABELS`・`PREF_TAGS`（Task 2）、`bathSaltResolved`（Task 3）、`AD_NOTICE_PAGE`（Task 1）、`esc`・`faq_section`・`faq_ld`（`src/components/answer.js`）
- Produces: `salt_card(salt: Salt, resolved: Resolved|null) => string`（`resolved` が null なら `''`）、`visible_salts(salts: Salt[], resolved) => Salt[]`（解決済みだけ）、`renderBathSaltList`、`renderBathSaltDetail`、`salt_tiers_svg() => string`

- [ ] **Step 1: 失敗するテストを書く**
  - `card_shows_tier_badge`：tier 1 のカードに `本物の温泉成分`、`tier_basis`、画像、`affiliate_url` へのリンク（`rel="sponsored noopener"`, `target="_blank"`）
  - `card_hidden_when_unresolved`：`resolved` が null → `''`
  - `card_without_image`：`image_url: ''` → `<img` を含まず、区分のバッジとリンクは出る（規約で画像が使えない場合の形）
  - `card_escapes_html`：`name: 'A<b>&'` → `A&lt;b&gt;&amp;` を含み `<b>` を含まない
  - `card_has_no_price`：カードの文字列に「円」「¥」を含まない
  - `list_page_has_notice_and_tiers`：`/nyuyokuzai` の描画に `AD_NOTICE_PAGE`、3つの区分名、温泉地へのリンクを含む
  - `detail_page_order`：比較ページで「本物の湯」→商品一覧→「本物に行くなら」（`/onsen/<id>` へのリンク）→出典の順
  - `detail_unknown_or_empty_is_404`：商品のない温泉地id → 「ページが見つかりません」かつ noindex
  - `page_list_includes_corner`：`page_paths()` に `/nyuyokuzai` を含み、商品のない温泉地の比較ページは含まない
- [ ] **Step 2: `npm test` で失敗を確認**
- [ ] **Step 3: 実装**
  - トップ：冒頭に広告表記→3段階の図と説明→温泉地から探す（都道府県ごと。`prefectures.js` の順）→好みから探す（`PREF_TAGS` ごとに該当商品の温泉地へのリンク。JSでの絞り込みはしない＝静的HTMLで全部出す）→贈り物向け（`is_gift`）
  - 比較ページ：パンくず「トップ › 家で入る名湯 › ◯◯温泉」、冒頭に広告表記、本物の湯（`onsen.spring_type`・`onsen.intro || onsen.description`）、商品カード（`district` があれば「◯◯地区」）、「最新の価格は楽天で確認してください」、本物に行くなら（温泉地ページと宿一覧への誘導）、出典（各商品の `sources` を重複を除いてまとめる）、FAQ（「◯◯温泉の入浴剤は本物の温泉と同じ？」など2〜3問。区分の事実だけで答える）
  - SEO：title「◯◯温泉の入浴剤・湯の花｜家で入る名湯」、`faq_ld` を付ける
- [ ] **Step 4: `npm test` で成功を確認**
- [ ] **Step 5: コミット**

### Task 5: 温泉地ページの「家で味わうなら」枠

**Files:**
- Modify: `src/pages/onsenDetail.js`（`faq_section(...)` の直前に枠を差し込む）
- Test: `tests/onsen_detail_salt_box.test.mjs`

**Interfaces:**
- Consumes: `get_salts_by_onsen`（Task 2）、`visible_salts`・`salt_card`（Task 4）、`pr_label`（Task 1）
- Produces: `salt_box(onsen) => string`（`onsenDetail.js` 内の関数。商品がなければ `''`）

- [ ] **Step 1: 失敗するテストを書く**
  - `box_shown_with_salts`：商品のある温泉地のページに見出し「家で味わうなら」と `PR`、カード2枚まで、`/nyuyokuzai/<id>` へのリンク
  - `box_hidden_without_salts`：商品のない温泉地のページに「家で味わうなら」が無い
  - `box_before_faq`：枠が FAQ の見出しより前にある
- [ ] **Step 2: `npm test` で失敗を確認**
- [ ] **Step 3: 実装**（表示はtierの上位2件）
- [ ] **Step 4: `npm test` で成功を確認**
- [ ] **Step 5: コミット**

### Task 6: 第1弾の商品データ（裏取り）とCEO確認用の対応表

コンテンツ作業。TDDではなく、検証スクリプトと出典で確かめる。

**Files:**
- Modify: `src/data/bath_salts.js`（見本を消して本番データ）
- Create: `docs/bath_salts_review_2026-11-XX.md`（CEO確認用の対応表）

- [ ] **Step 1: シリーズの収録温泉地を一次資料で確定**：バスクリン「日本の名湯」（公認17か所の具体名）、白元アース「いい湯旅立ち」（各商品の収録地）、天然湯の花（別府・明礬ほか、`onsen.js` にある温泉地のもの）。メーカー公式・製造元のページを出典にする
- [ ] **Step 2: 区分を判定**：①は製造元・成分表示で温泉由来の成分を確認できたものだけ。「天然」の表記だけでは①にしない。②はメーカー公式に公認・共同開発の記載があるもの。③は再現品でないと明記されたもの、または公認の記載がないもの
- [ ] **Step 3: 楽天の itemCode を集める**：1商品につき出品の候補を2〜3件（公式ショップ・大手ドラッグストアを優先）、JANが分かれば入れる
- [ ] **Step 4: `src/data/bath_salts.js` に書き、`npm run build` を通す**（`validate_salts` のエラー0、取得の「見つからない」0）
- [ ] **Step 5: 対応表を作る**：列＝温泉地／商品名／区分／区分の根拠（1文）／出典URL／楽天リンク。①②は上に並べる。日本温泉Webにない温泉地の商品で見送ったものは末尾に「今回は載せないもの」として並べる
- [ ] **Step 6: コミット**（`src/data/bath_salts.js src/data/bath_salts_resolved.js docs/bath_salts_review_2026-11-XX.md`）
- [ ] **Step 7: CEOに対応表を見せて確認を受ける**（直しがあれば反映してコミット）

### Task 7: ビルド確認・見た目の確認・公開

- [ ] **Step 1: `npm test` と `npm run build` が通る**。ログに「静的HTMLを書き出しました（n ページ）」が出て、n が以前より（1＋比較ページの数）増えている
- [ ] **Step 2: `dist/sitemap.xml` に `/nyuyokuzai` と比較ページが入っている**
- [ ] **Step 3: 見た目を確認**：`npx vite preview` で、`/nyuyokuzai`・比較ページ1つ・枠のある温泉地ページ・宿ページのフッターを、幅375px と 1280px でスクショして目視する（文字の被り・画像の比率・PR表記の位置）
- [ ] **Step 4: 楽天リンクの確認**：比較ページのリンクを数件 curl し、楽天の商品ページへ飛ぶことを確かめる
- [ ] **Step 5: CEOの確認（Task 6 Step 7）が済んでいれば `bash deploy.sh` で公開**し、公開URLで `/nyuyokuzai` を開いて確認。済んでいなければここで止める
- [ ] **Step 6: 公開後にコミットを push**（このリポは push 実績あり）
