# SEO改善設計書

**日付**: 2026-04-23  
**スコープ**: sitemap.xml・robots.txt生成、OGPタグ修正、OGP画像設定、JSON-LD構造化データ  
**除外**: Historyモード対応（別途フェーズ2で対応）

## 前提条件

- ホスティング: GitHub Pages
- ベースURL: `https://japanesehotsprings.github.io/onsen`
- フレームワーク: バニラJS + Vite（フレームワークなし）
- ルーター: ハッシュベース（`#/onsen/:id` 形式）
- データ規模: 温泉164件・宿534件・都道府県47件

## アーキテクチャ

`npm run build` を以下に変更：

```
vite build && node scripts/seo-build.mjs
```

`scripts/seo-build.mjs` がビルド後処理を担当：
1. `dist/index.html` にOGPタグを注入
2. `dist/sitemap.xml` を生成
3. `dist/robots.txt` を生成

JSON-LDはクライアント側で `src/seo.js` の `updateSEO()` が注入する。

## 実装詳細

### 1. scripts/seo-build.mjs（新規）

Node.js ESモジュール。以下3つの処理を順番に実行する。

#### 1-1. OGPタグ注入

`dist/index.html` の `<head>` 内に以下を追加：

```html
<meta property="og:title" content="日本温泉 - 全国47都道府県の温泉地を探そう" />
<meta property="og:description" content="日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる専門サイト。" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://japanesehotsprings.github.io/onsen/" />
<meta property="og:image" content="https://japanesehotsprings.github.io/onsen/ogp.png" />
<meta property="og:site_name" content="日本温泉" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://japanesehotsprings.github.io/onsen/ogp.png" />
```

既存の `</head>` タグの直前に挿入する。既存のタグを削除はしない（dist/index.htmlにはogタグが存在しないため）。

#### 1-2. sitemap.xml 生成

URL一覧（約755件）を `dist/sitemap.xml` として出力。

| ページ種別 | 件数 | priority | URL形式 |
|---|---|---|---|
| 固定ページ（/, /onsens, /hotels, /prefectures） | 4 | 1.0 | `ベースURL/#/` |
| 都道府県詳細 | 47 | 0.8 | `ベースURL/#/prefecture/:id` |
| 温泉地詳細 | 164 | 0.7 | `ベースURL/#/onsen/:id` |
| 宿詳細 | 534 | 0.6 | `ベースURL/#/hotel/:id` |

`lastmod` はビルド実行日（ISO 8601形式）。

データは `src/data/prefectures.js`・`src/data/onsen.js`・`src/data/hotels.js` から直接インポートする。

#### 1-3. robots.txt 生成

```
User-agent: *
Allow: /
Sitemap: https://japanesehotsprings.github.io/onsen/sitemap.xml
```

### 2. src/seo.js の拡張

`updateSEO(title, description, jsonLd)` に第3引数を追加。

- `jsonLd` が渡された場合、`<script type="application/ld+json">` タグを生成して `<head>` に挿入
- 再レンダリング時に既存のJSON-LDタグを削除してから新規挿入（重複防止）
- `jsonLd` が `null` の場合は既存タグを削除のみ行う

### 3. src/pages/onsenDetail.js の変更

`updateSEO()` 呼び出しに `TouristAttraction` スキーマを追加：

```js
updateSEO(title, description, {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": onsen.name,
  "description": onsen.description,
  "address": {
    "@type": "PostalAddress",
    "addressRegion": prefecture?.name || ""
  },
  "touristType": "温泉"
});
```

### 4. src/pages/hotelDetail.js の変更

`updateSEO()` 呼び出しに `LodgingBusiness` スキーマを追加：

```js
updateSEO(title, description, {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": hotel.name,
  "description": hotel.description,
  "priceRange": hotel.price,
  "address": {
    "@type": "PostalAddress",
    "addressRegion": prefecture?.name || ""
  }
});
```

## 変更ファイル一覧

| ファイル | 変更種別 |
|---|---|
| `scripts/seo-build.mjs` | 新規作成 |
| `package.json` | buildスクリプト変更 |
| `src/seo.js` | updateSEO()にjsonLd引数追加 |
| `src/pages/onsenDetail.js` | JSON-LD追加 |
| `src/pages/hotelDetail.js` | JSON-LD追加 |

## 制約・注意事項

- ハッシュルーティングのため sitemap の URL に `#` が含まれる。Historyモード移行後に再生成が必要。
- SNSのOGPクローラーは動的なメタタグ変更を読まないため、OGP画像は全ページ共通（`ogp.png`）になる。
- Google検索クローラーは JavaScript を実行するため、JSON-LDのクライアント側注入は有効。
