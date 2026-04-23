# コンテンツ強化 設計ドキュメント

**日付:** 2026-04-23  
**対象:** 日本温泉メディアサイト（`/Users/nozaki/Downloads/MyBusiness/japanese_hot_springs`）

---

## 概要

温泉メディアの主な課題は「コンテンツの深さ不足」。旅行計画中の国内旅行者と温泉マニアの両方に刺さる情報量・専門性を持たせるため、全15項目を3フェーズで追加する。

---

## ターゲットユーザー

- **国内旅行計画層**: 行き先・宿を具体的に探している人。実用情報（アクセス・日帰り・食事）が刺さる
- **温泉マニア・リピーター**: 泉質・源泉かけ流しなど専門情報にこだわる層

---

## フェーズ1 — データフィールド追加（工数:小・効果:大）

既存の `onsen.js` / `hotels.js` にフィールドを追加し、既存の詳細ページに表示を追加する。新ページ不要。

### A2: 効能バッジ（onsen.js）

```js
effects: ['美肌', '疲労回復', '神経痛', '冷え性改善', '高血圧', 'リウマチ']
```

- 温泉地カード・詳細ページにバッジ表示
- 検索・フィルター機能にも活用

### B1: 源泉情報（hotels.js）

```js
source_type: '源泉かけ流し' // '加水あり' | '循環式' | '源泉かけ流し'
```

- 宿カード・詳細ページに明示表示
- マニア層が最重視する情報

### B2: 日帰り入浴情報（onsen.js）

```js
day_trip: {
  available: true,
  price: '800円〜',
  hours: '10:00-15:00',
  note: '毎週火曜定休'
}
```

- 温泉地詳細ページに「日帰り入浴」セクションとして表示

### B3: こだわりバッジ（hotels.js）

```js
features: ['露天付き客室', '貸切風呂', '展望風呂', '24時間入浴可', '女性専用時間あり', '部屋食']
```

- 宿カードにアイコン付きバッジ表示

### B6: アクセス情報（onsen.js）

```js
access: {
  nearest_station: '長野原草津口駅',
  by_train: '新幹線+バス 約2時間30分（東京から）',
  by_car: '関越道・渋川伊香保ICから約1時間30分',
  parking: true
}
```

- 温泉地詳細ページに「アクセス」セクションとして表示

---

## フェーズ2 — 新ページ・データ拡張（工数:中・効果:大）

新しいデータファイルとページコンポーネントを追加する。

### A1: 泉質詳細ページ

- **新規ファイル**: `src/data/springTypes.js`
- **新規ページ**: `src/pages/springTypeDetail.js`
- **URL**: `/spring-type/:id`（例: `/spring-type/sulfur`）

```js
// springTypes.js のデータ構造
{
  id: 'sulfur',
  name: '硫黄泉',
  description: '硫黄の独特な香りが特徴的な温泉...',
  effects: ['疲労回復', '慢性皮膚病', '高血圧'],
  caution: '金属アレルギーの方は注意',
  famous_onsen: ['o-hokkaido-1', 'o-gunma-1'] // onsenListのidを参照
}
```

- ページ内容: 泉質の説明・効能・適した人・注意点・代表温泉地一覧

### A3: 泉質別おすすめ一覧

- 既存データの `spring_type` / `effects` フィールドでフィルタリング
- 泉質詳細ページ内に「この泉質の温泉地一覧」として表示（新規ページ不要）

### A4: 飲泉・足湯情報（onsen.js に追加）

```js
drinkable: true,        // 飲泉可否
footbath: {
  available: true,
  location: '駅前広場',
  free: true
}
```

### B4: 食事情報（hotels.js に追加）

```js
meals: {
  dinner: '地産地消の会席料理',
  breakfast: '和朝食',
  room_service: true
}
```

### B5: 温泉地の歴史・由来（onsen.js に追加）

```js
history: '開湯は奈良時代とされ、行基が発見したと伝えられる...'
```

- 温泉地詳細ページに「歴史・由来」セクションとして表示

---

## フェーズ3 — 特集・編集コンテンツ（工数:大・差別化:最大）

新しいコンテンツ種別を設計し、サイトの独自性を高める。

### C1: 季節別特集ページ

- **新規ファイル**: `src/data/specials.js`
- **新規ページ**: `src/pages/specialDetail.js`, `src/pages/specialList.js`
- **URL**: `/special/:id`

```js
// specials.js のデータ構造
{
  id: 'yukimi-roten',
  title: '雪見露天ができる温泉',
  season: 'winter',
  description: '雪が舞う中、温かい露天風呂に浸かる至極の体験...',
  onsen_ids: ['o-niigata-1', 'o-nagano-2'],
  hotel_ids: ['h-niigata-1-1']
}
```

特集テーマ例:
- 「雪見露天ができる名湯」（冬）
- 「紅葉×温泉の絶景スポット」（秋）
- 「桜の季節に訪れたい温泉地」（春）
- 「夏の高原・避暑温泉」（夏）

### C2: シーン別おすすめ

- hotels.js に `scenes: ['一人旅', 'カップル', '家族', '女子旅']` フィールドを追加
- specials.js にシーン別特集データを追加（C1と同じ仕組み）

特集テーマ例:
- 「一人旅歓迎の温泉宿」
- 「カップルに人気の温泉宿」
- 「子連れOKの温泉宿」
- 「女子旅向け美肌温泉」

### C3: 初めての温泉旅行ガイド

- **新規ページ**: `src/pages/guide.js`
- **URL**: `/guide`
- 内容: 温泉の種類・入り方マナー・持ち物・泉質の選び方・予約のコツ

### C4: エリア別モデルコース

- **新規ファイル**: `src/data/courses.js`
- **新規ページ**: `src/pages/courseDetail.js`, `src/pages/courseList.js`
- **URL**: `/course/:id`
- 既存の `gourmet.js` / `spots.js` データと温泉地・宿データを組み合わせて構成

```js
// courses.js のデータ構造
{
  id: 'kusatsu-1night',
  title: '草津温泉 1泊2日モデルコース',
  prefecture: 'gunma',
  days: 2,
  onsen_id: 'o-gunma-1',
  spots: ['s-gunma-1'],
  gourmet: ['g-gunma-1'],
  hotel_id: 'h-gunma-1-1',
  itinerary: [
    { day: 1, schedule: '東京発 → 草津温泉着 → 湯畑散策 → 夕食・温泉' },
    { day: 2, schedule: '朝風呂 → 朝食 → 西の河原公園 → 帰路' }
  ]
}
```

### C5: 特集記事・ランキング

- **新規ファイル**: `src/data/articles.js`
- **新規ページ**: `src/pages/articleDetail.js`, `src/pages/articleList.js`
- **URL**: `/article/:id`

```js
// articles.js のデータ構造
{
  id: 'kanto-day-trip-top10',
  title: '関東から日帰りで行けるおすすめ温泉10選',
  category: 'ranking',
  published: '2026-04-23',
  description: '...',
  onsen_ids: ['o-kanagawa-1', 'o-gunma-1', ...],
  body: '...' // 記事本文（HTML or Markdown）
}
```

---

## ナビゲーション追加

フェーズ2・3で追加するコンテンツへのナビゲーションをヘッダー・トップページに追加する。

- ヘッダーメニューに「泉質から探す」「特集」「記事」を追加
- トップページに「季節の特集」「新着記事」セクションを追加

---

## 実装上の注意

- 既存データ（onsen.js / hotels.js）にフィールドを追加する際、**既存エントリに新フィールドがなくてもエラーにならない**よう、表示側でオプショナル扱いにする
- フェーズ1は各データファイルを全エントリ分更新する作業が必要（47都道府県分）
- フェーズ3の記事・モデルコースは、まず数件のサンプルデータで実装し、あとからデータを増やす方針でよい
