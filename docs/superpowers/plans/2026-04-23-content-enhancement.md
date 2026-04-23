# コンテンツ強化 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 温泉メディアに泉質・効能・源泉・日帰り・特集・モデルコース・記事など15項目を追加し、コンテンツの深さと専門性を大幅に向上させる。

**Architecture:** 3フェーズ構成。フェーズ1は既存データファイル（onsen.js/hotels.js）へのフィールド追加と表示更新のみ。フェーズ2は新データファイル（springTypes.js）と新ページ。フェーズ3は特集・記事・モデルコースという編集コンテンツ種別の追加とナビゲーション整備。すべてのページは既存の `addRoute` + `renderXxx` パターンに従う。

**Tech Stack:** Vanilla JS, Vite, SPA（カスタムルーター）、CSS カスタムプロパティ

---

## ファイル構成

**新規作成:**
- `src/data/springTypes.js` — 泉質データ
- `src/data/specials.js` — 特集データ（季節・シーン別）
- `src/data/courses.js` — モデルコースデータ
- `src/data/articles.js` — 特集記事データ
- `src/pages/springTypeList.js` — 泉質一覧ページ
- `src/pages/springTypeDetail.js` — 泉質詳細ページ
- `src/pages/specialList.js` — 特集一覧ページ
- `src/pages/specialDetail.js` — 特集詳細ページ
- `src/pages/courseList.js` — モデルコース一覧ページ
- `src/pages/courseDetail.js` — モデルコース詳細ページ
- `src/pages/articleList.js` — 記事一覧ページ
- `src/pages/articleDetail.js` — 記事詳細ページ
- `src/pages/guide.js` — 初めての温泉旅行ガイドページ

**変更:**
- `src/data/onsen.js` — effects, day_trip, access, drinkable, footbath, history フィールド追加
- `src/data/hotels.js` — source_type, features, meals, scenes フィールド追加
- `src/pages/onsenDetail.js` — 新フィールドの表示追加
- `src/pages/hotelDetail.js` — 新フィールドの表示追加
- `src/pages/home.js` — 特集・記事セクション追加
- `src/main.js` — 新ルート登録
- `index.html` — ナビゲーションリンク追加

---

## Task 1: onsen.js に新フィールドを追加

**Files:**
- Modify: `src/data/onsen.js`

- [ ] **Step 1: 代表的な温泉地エントリに新フィールドを追加する**

`src/data/onsen.js` を開き、各エントリに以下フィールドを追加する。表示側でオプショナル扱いにするので、未入力エントリはそのままでよい。まず登別・洞爺湖・草津・箱根・有馬・別府・由布院の7件を更新する。

```js
// 登別温泉 (o-hokkaido-1) の例
{
    id: 'o-hokkaido-1',
    name: '登別温泉',
    prefecture: 'hokkaido',
    category: '硫黄泉',
    spring_type: '硫黄泉・食塩泉など9種',
    description: '日本屈指の温泉地。地獄谷の迫力ある噴気孔と多様な泉質が魅力。クマ牧場でも有名。',
    image: './onsen/noboribetsu.png',
    tags: ['硫黄泉', '地獄谷', '名湯', '北海道'],
    // ↓ 新規追加フィールド
    effects: ['疲労回復', '慢性皮膚病', '神経痛', '関節痛'],
    history: '明治元年（1868年）に温泉宿が開かれた。アイヌの人々が「ヌプルペツ」（色彩のある川）と呼んでいた地で、古くから薬湯として知られていた。',
    day_trip: { available: true, price: '1,500円〜', hours: '10:00-16:00' },
    access: {
        nearest_station: '登別駅（JR室蘭本線）',
        by_train: '登別駅からバス約13分',
        by_car: '道央道・登別東ICから約10分',
        parking: true
    },
    drinkable: false,
    footbath: { available: true, location: '地獄谷周辺', free: true }
},
```

残りの主要温泉地（洞爺湖・草津・箱根・有馬・別府・由布院）にも同様のフィールドを追加する。各温泉地の情報は以下を参考にする:

**洞爺湖温泉 (o-hokkaido-2):**
```js
effects: ['疲労回復', '神経痛', '筋肉痛'],
history: '明治31年（1898年）の有珠山噴火後に温泉が湧出。昭和の時代に観光地として発展し、2008年にはG8洞爺湖サミットの舞台となった。',
day_trip: { available: true, price: '800円〜', hours: '11:00-21:00' },
access: { nearest_station: '洞爺駅（JR室蘭本線）', by_train: '洞爺駅からバス約20分', by_car: '道央道・虻田洞爺湖ICから約5分', parking: true },
drinkable: false,
footbath: { available: true, location: '湖畔公園', free: true }
```

**草津温泉（群馬県エントリ）:**
```js
effects: ['疲労回復', '慢性皮膚病', '糖尿病', '高血圧', '動脈硬化'],
history: '源頼朝が発見したと伝えられる日本三名泉のひとつ。江戸時代から湯治場として栄え、年間300万人超が訪れる日本最大級の温泉地。',
day_trip: { available: true, price: '無料〜', hours: '終日（公共浴場）' },
access: { nearest_station: '長野原草津口駅（JR吾妻線）', by_train: '長野原草津口駅からバス約25分', by_car: '関越道・渋川伊香保ICから約60分', parking: true },
drinkable: false,
footbath: { available: true, location: '湯畑周辺', free: true }
```

**箱根温泉（神奈川県エントリ）:**
```js
effects: ['疲労回復', '神経痛', '筋肉痛', '美肌'],
history: '奈良時代から知られる古湯。江戸時代の東海道・箱根関所の宿場町として栄え、明治以降は外国人旅行者にも親しまれた国際的リゾート温泉地。',
day_trip: { available: true, price: '1,000円〜', hours: '施設により異なる' },
access: { nearest_station: '箱根湯本駅（箱根登山鉄道）', by_train: '新宿から小田急ロマンスカーで約85分', by_car: '東名高速・厚木ICから約60分', parking: true },
drinkable: false,
footbath: { available: true, location: '箱根湯本駅周辺', free: false }
```

**有馬温泉（兵庫県エントリ）:**
```js
effects: ['疲労回復', '皮膚病', '神経痛', '関節炎', '美肌'],
history: '日本書紀にも登場する日本最古の温泉地のひとつ。豊臣秀吉が愛した「太閤の湯」として有名。鉄分を含む赤褐色の「金泉」と無色透明の「銀泉」の2種が名物。',
day_trip: { available: true, price: '650〜800円', hours: '8:00-22:00' },
access: { nearest_station: '有馬温泉駅（神戸電鉄有馬線）', by_train: '三宮から神戸電鉄で約30分', by_car: '阪神高速・北神戸線・有馬口ICから約10分', parking: true },
drinkable: false,
footbath: { available: true, location: '太閤通周辺', free: true }
```

**別府温泉（大分県エントリ）:**
```js
effects: ['疲労回復', '神経痛', '筋肉痛', '慢性皮膚病', '慢性消化器病'],
history: '大正時代に油屋熊八が「地獄めぐり」を観光資源として整備し発展。8つの地獄を持つ「地獄蒸し」文化や多様な泉質（8種）で世界的に知られる日本最大の温泉地。',
day_trip: { available: true, price: '100〜400円（市営温泉）', hours: '6:30-22:30（施設により異なる）' },
access: { nearest_station: '別府駅（JR日豊本線）', by_train: '大分空港から車約60分、大分駅から特急で約15分', by_car: '大分道・別府ICから約10分', parking: true },
drinkable: false,
footbath: { available: true, location: '竹瓦温泉前・駅前', free: true }
```

**由布院温泉（大分県エントリ）:**
```js
effects: ['疲労回復', '美肌', '神経痛', '筋肉疲労'],
history: '江戸時代から湯治場として知られていたが、昭和50年代に「由布院モデル」として地域主導の観光まちづくりを推進。温泉だけでなく文化・芸術・食も楽しめる洗練されたリゾートとして全国区の人気を誇る。',
day_trip: { available: true, price: '500〜800円', hours: '施設により異なる' },
access: { nearest_station: '由布院駅（JR久大本線）', by_train: '博多から「ゆふいんの森」で約2時間', by_car: '大分道・由布ICから約10分', parking: true },
drinkable: false,
footbath: { available: true, location: '由布院駅前', free: true }
```

- [ ] **Step 2: ビルドが通ることを確認**

```bash
npm run build
```

エラーがなければ OK。

- [ ] **Step 3: コミット**

```bash
git add src/data/onsen.js
git commit -m "feat: add effects/history/day_trip/access/drinkable/footbath fields to major onsen entries"
```

---

## Task 2: hotels.js に新フィールドを追加

**Files:**
- Modify: `src/data/hotels.js`

- [ ] **Step 1: 代表的な宿エントリに新フィールドを追加する**

`src/data/hotels.js` の各エントリに以下フィールドを追加する。まず登別・洞爺湖の宿（h-hokkaido-1-1〜h-hokkaido-2-1）を更新する。

```js
// 第一滝本館 (h-hokkaido-1-1) の例
{
    id: 'h-hokkaido-1-1',
    onsen_id: 'o-hokkaido-1',
    name: '第一滝本館',
    // ... 既存フィールド ...
    // ↓ 新規追加フィールド
    source_type: '源泉かけ流し',
    features: ['展望露天風呂', '24時間入浴可', '貸切風呂'],
    meals: { dinner: '北海道産食材を使った和洋バイキング', breakfast: '和洋バイキング' },
    scenes: ['家族', 'カップル']
},

// 登別グランドホテル (h-hokkaido-1-2) の例
{
    id: 'h-hokkaido-1-2',
    // ... 既存フィールド ...
    source_type: '源泉かけ流し',
    features: ['展望露天風呂', '5種の湯', '大浴場'],
    meals: { dinner: '北海道の恵みを活かした会席料理', breakfast: '和朝食' },
    scenes: ['カップル', '一人旅']
},

// 滝乃家 (h-hokkaido-1-3) の例
{
    id: 'h-hokkaido-1-3',
    // ... 既存フィールド ...
    source_type: '源泉かけ流し',
    features: ['源泉かけ流し', '部屋食', '露天風呂'],
    meals: { dinner: '北海道の旬食材を使った懐石料理', breakfast: '和朝食（部屋食）' },
    scenes: ['カップル', '一人旅', '女子旅']
},

// ザ・ウィンザーホテル洞爺 (h-hokkaido-2-1) の例
{
    id: 'h-hokkaido-2-1',
    // ... 既存フィールド ...
    source_type: '加水あり',
    features: ['展望露天風呂', '露天付き客室', 'スパ'],
    meals: { dinner: 'フレンチ・和食など複数レストラン', breakfast: 'ブッフェ' },
    scenes: ['カップル', '女子旅']
},
```

他の宿エントリにも同様のパターンで追加する（`source_type` は '源泉かけ流し' / '加水あり' / '循環式' のいずれか）。

- [ ] **Step 2: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add src/data/hotels.js
git commit -m "feat: add source_type/features/meals/scenes fields to hotel entries"
```

---

## Task 3: onsenDetail.js に新フィールドの表示を追加

**Files:**
- Modify: `src/pages/onsenDetail.js`

- [ ] **Step 1: 新フィールドの表示セクションを追加する**

`src/pages/onsenDetail.js` の `app.innerHTML` 内、`.onsen-info-section` の閉じタグの直後（`</section>` の後）に以下のセクションを追加する。

`onsen-info-section` の `.onsen-info-meta` 部分を以下のように拡張する（既存の `onsen-meta-item` の後に追記）:

```js
// onsen-info-meta div の中、既存の「宿泊施設数」の後に追加
${onsen.effects ? `
<div class="onsen-meta-item">
  <span class="onsen-meta-label">主な効能</span>
  <span class="onsen-meta-value">${onsen.effects.join(' / ')}</span>
</div>
` : ''}
```

そして `.onsen-info-section` の終わり `</section>` の直後に以下のセクション群を追加する:

```js
${onsen.history ? `
<section class="section">
  <div class="container">
    <h2 class="section-title">歴史・由来</h2>
    <p style="line-height:1.9;color:var(--color-text-muted);max-width:800px">${onsen.history}</p>
  </div>
</section>
` : ''}

${onsen.day_trip ? `
<section class="section">
  <div class="container">
    <h2 class="section-title">日帰り入浴</h2>
    <div class="onsen-info-card" style="max-width:600px">
      <div class="onsen-info-meta">
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">日帰り入浴</span>
          <span class="onsen-meta-value">${onsen.day_trip.available ? '可能' : '不可'}</span>
        </div>
        ${onsen.day_trip.price ? `
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">料金</span>
          <span class="onsen-meta-value">${onsen.day_trip.price}</span>
        </div>` : ''}
        ${onsen.day_trip.hours ? `
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">営業時間</span>
          <span class="onsen-meta-value">${onsen.day_trip.hours}</span>
        </div>` : ''}
      </div>
    </div>
  </div>
</section>
` : ''}

${onsen.footbath?.available ? `
<section class="section">
  <div class="container">
    <h2 class="section-title">足湯</h2>
    <div class="onsen-info-card" style="max-width:600px">
      <div class="onsen-info-meta">
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">場所</span>
          <span class="onsen-meta-value">${onsen.footbath.location}</span>
        </div>
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">料金</span>
          <span class="onsen-meta-value">${onsen.footbath.free ? '無料' : '有料'}</span>
        </div>
      </div>
    </div>
  </div>
</section>
` : ''}

${onsen.access ? `
<section class="section">
  <div class="container">
    <h2 class="section-title">アクセス</h2>
    <div class="onsen-info-card" style="max-width:700px">
      <div class="onsen-info-meta">
        ${onsen.access.nearest_station ? `
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">最寄り駅</span>
          <span class="onsen-meta-value">${onsen.access.nearest_station}</span>
        </div>` : ''}
        ${onsen.access.by_train ? `
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">電車でのアクセス</span>
          <span class="onsen-meta-value">${onsen.access.by_train}</span>
        </div>` : ''}
        ${onsen.access.by_car ? `
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">車でのアクセス</span>
          <span class="onsen-meta-value">${onsen.access.by_car}</span>
        </div>` : ''}
        <div class="onsen-meta-item">
          <span class="onsen-meta-label">駐車場</span>
          <span class="onsen-meta-value">${onsen.access.parking ? 'あり' : 'なし'}</span>
        </div>
      </div>
    </div>
  </div>
</section>
` : ''}
```

- [ ] **Step 2: ビルドして確認**

```bash
npm run build
```

開発サーバーで登別温泉の詳細ページを開き、歴史・日帰り・足湯・アクセスセクションが表示されることを確認する:

```bash
npm run dev
# http://localhost:5173/onsen/onsen/o-hokkaido-1 を開く
```

- [ ] **Step 3: コミット**

```bash
git add src/pages/onsenDetail.js
git commit -m "feat: display effects/history/day_trip/footbath/access in onsenDetail page"
```

---

## Task 4: hotelDetail.js に新フィールドの表示を追加

**Files:**
- Modify: `src/pages/hotelDetail.js`

- [ ] **Step 1: 宿詳細ページに新フィールドを追加する**

`src/pages/hotelDetail.js` を開き、予約ボタンセクションの前（`<!-- 予約 -->` 相当の箇所）に以下セクションを追加する。既存の宿詳細表示（価格、タグなど）の直後に追記する。

```js
// hotel の表示セクションに追加（既存の hotel.tags 表示の後）
${hotel.source_type ? `
<div class="onsen-meta-item">
  <span class="onsen-meta-label">源泉情報</span>
  <span class="onsen-meta-value">${hotel.source_type === '源泉かけ流し' ? '♨ ' : ''}${hotel.source_type}</span>
</div>
` : ''}

${hotel.features?.length ? `
<div class="onsen-meta-item">
  <span class="onsen-meta-label">こだわり・設備</span>
  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.25rem">
    ${hotel.features.map(f => `<span class="tag">${f}</span>`).join('')}
  </div>
</div>
` : ''}

${hotel.meals ? `
<div class="onsen-meta-item">
  <span class="onsen-meta-label">お食事</span>
  <div>
    ${hotel.meals.dinner ? `<div style="margin-bottom:0.25rem">夕食: ${hotel.meals.dinner}</div>` : ''}
    ${hotel.meals.breakfast ? `<div>朝食: ${hotel.meals.breakfast}</div>` : ''}
  </div>
</div>
` : ''}
```

- [ ] **Step 2: ビルドして確認**

```bash
npm run build && npm run dev
# http://localhost:5173/onsen/hotel/h-hokkaido-1-1 を開く
```

源泉情報・こだわり・食事が表示されることを確認する。

- [ ] **Step 3: コミット**

```bash
git add src/pages/hotelDetail.js
git commit -m "feat: display source_type/features/meals in hotelDetail page"
```

---

## Task 5: springTypes.js データファイルを作成

**Files:**
- Create: `src/data/springTypes.js`

- [ ] **Step 1: 泉質データファイルを作成する**

```js
// src/data/springTypes.js
export const springTypeList = [
    {
        id: 'sulfur',
        name: '硫黄泉',
        nameEn: 'Sulfur Spring',
        icon: '🌋',
        color: '#c8a84b',
        description: '硫化水素や硫黄化合物を含む温泉。独特の硫黄臭が特徴で、日本の温泉の中でも最も知名度が高い泉質のひとつ。白や乳白色に濁ることが多い。',
        effects: ['疲労回復', '慢性皮膚病', '神経痛', '関節痛', '高血圧', '動脈硬化'],
        caution: '心臓病・低血圧の方は長湯に注意。金属アクセサリーは変色する場合があります。',
        suitable_for: '疲れが溜まった方、皮膚のトラブルが気になる方',
        notable_onsen: ['登別温泉', '草津温泉', '蔵王温泉', '霧島温泉'],
        onsen_ids: ['o-hokkaido-1']
    },
    {
        id: 'chloride',
        name: '塩化物泉',
        nameEn: 'Chloride Spring',
        icon: '🌊',
        color: '#5a9abf',
        description: 'ナトリウムや塩素イオンを多く含む温泉。塩分が皮膚の水分蒸発を防ぎ「保温の湯」とも呼ばれる。入浴後も体がポカポカと温まり続けるのが特徴。',
        effects: ['冷え性改善', '疲労回復', '神経痛', '関節リウマチ', '切り傷', '婦人病'],
        caution: '高血圧・心臓病の方は医師に相談を。飲泉する場合は塩分摂取量に注意。',
        suitable_for: '冷え性の方、体が温まりにくい方、運動後のリカバリー',
        notable_onsen: ['熱海温泉', '伊豆温泉郷', '三朝温泉'],
        onsen_ids: []
    },
    {
        id: 'bicarbonate',
        name: '炭酸水素塩泉（重曹泉）',
        nameEn: 'Bicarbonate Spring',
        icon: '✨',
        color: '#7dbfb5',
        description: '重炭酸イオンを多く含む温泉。「美肌の湯」として知られ、肌の余分な皮脂や角質を溶かし、なめらかでしっとりした肌に整えてくれる。無色透明のものが多い。',
        effects: ['美肌', '疲労回復', '慢性皮膚病', '切り傷', '末梢循環障害'],
        caution: '特になし。肌が敏感な方は長湯を避けてください。',
        suitable_for: '美肌を目指す方、女性全般、肌荒れが気になる方',
        notable_onsen: ['十勝川温泉', '支笏湖温泉', '武雄温泉'],
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7']
    },
    {
        id: 'simple',
        name: '単純泉',
        nameEn: 'Simple Spring',
        icon: '💧',
        color: '#88aacc',
        description: '溶存物質が少なく無色透明・無味無臭の温泉。刺激が少ないため、子どもや高齢者、肌が弱い方でも入りやすい。「やさしい湯」として幅広い層に親しまれる。',
        effects: ['疲労回復', '自律神経不安定症', '不眠症', 'うつ状態'],
        caution: '特になし。刺激が少ないため長時間入浴しやすいが、のぼせに注意。',
        suitable_for: '温泉初心者、お子様連れ、肌の敏感な方、ゆっくり療養したい方',
        notable_onsen: ['洞爺湖温泉', '層雲峡温泉', '奥日光温泉'],
        onsen_ids: ['o-hokkaido-2', 'o-hokkaido-5']
    },
    {
        id: 'acid',
        name: '酸性泉',
        nameEn: 'Acidic Spring',
        icon: '⚡',
        color: '#c9a44e',
        description: 'pH3未満の酸性が強い温泉。殺菌力が高く、慢性皮膚病や水虫などに効果があるとされる。草津温泉など日本を代表する名湯に多い。',
        effects: ['慢性皮膚病', '水虫', '糖尿病', '高血圧', '動脈硬化'],
        caution: '肌への刺激が強いため、入浴後は真水でのシャワーを推奨。目への入浴に注意。乾燥肌の方は長湯を避けてください。',
        suitable_for: '皮膚トラブルが気になる方（医師への相談を推奨）',
        notable_onsen: ['草津温泉', '玉川温泉', '蔵王温泉'],
        onsen_ids: []
    },
    {
        id: 'iron',
        name: '鉄泉',
        nameEn: 'Iron Spring',
        icon: '🔶',
        color: '#c47a3a',
        description: '鉄分を多く含む温泉。空気に触れると酸化して赤褐色・黄褐色に変わるのが特徴。有馬温泉の「金泉」が代表的。貧血・婦人病への効果が期待される。',
        effects: ['貧血', '婦人病', '疲労回復', '関節リウマチ'],
        caution: '衣服や浴槽が着色することがある。',
        suitable_for: '貧血気味の方、生理不順が気になる女性',
        notable_onsen: ['有馬温泉', '増富温泉'],
        onsen_ids: []
    },
    {
        id: 'sulfate',
        name: '硫酸塩泉',
        nameEn: 'Sulfate Spring',
        icon: '🌿',
        color: '#6aaa88',
        description: 'カルシウムやナトリウムの硫酸塩を含む温泉。「傷の湯」「卒中の湯」とも呼ばれ、動脈硬化や脳卒中後のリハビリに有効とされる。肌がつるつるになる美肌効果も。',
        effects: ['高血圧', '動脈硬化', '糖尿病', '神経痛', '筋肉痛', '美肌'],
        caution: '特になし。',
        suitable_for: '生活習慣病が気になる方、血圧・血糖値が高めの方',
        notable_onsen: ['野沢温泉', '下呂温泉', '秋田の温泉地'],
        onsen_ids: []
    },
    {
        id: 'radon',
        name: '放射能泉（ラドン泉）',
        nameEn: 'Radon Spring',
        icon: '🔮',
        color: '#9a7abf',
        description: '微量の放射性物質（ラドン）を含む温泉。「ラジウム泉」とも呼ばれ、低線量放射線の刺激で身体の自然治癒力を高めるとされる。日本三大ラジウム温泉などが有名。',
        effects: ['痛風', '関節リウマチ', '動脈硬化', '高血圧', '慢性皮膚病'],
        caution: '妊婦・乳幼児は入浴を控えることを推奨。',
        suitable_for: '関節痛・リウマチが気になる方、慢性疾患の湯治目的',
        notable_onsen: ['三朝温泉（鳥取）', '増富温泉（山梨）', '日奈久温泉（熊本）'],
        onsen_ids: []
    },
    {
        id: 'carbonated',
        name: '二酸化炭素泉（炭酸泉）',
        nameEn: 'Carbonated Spring',
        icon: '🫧',
        color: '#5abfbf',
        description: '二酸化炭素（炭酸ガス）を1,000mg/L以上含む温泉。細かい気泡が全身を包み、血管を広げて血行を促進。「心臓の湯」とも呼ばれ欧州で古くから療養泉として使われてきた。',
        effects: ['高血圧', '末梢循環障害', '動脈硬化', '切り傷', '冷え性'],
        caution: '心臓・肺に疾患がある方は医師に相談を。長湯は心臓に負担がかかる場合がある。',
        suitable_for: '血行が悪い方、冷え性の方、高血圧が気になる方',
        notable_onsen: ['長湯温泉（大分）', '炭酸泉として知られる各地の温泉'],
        onsen_ids: []
    },
    {
        id: 'alkaline',
        name: 'アルカリ性単純泉',
        nameEn: 'Alkaline Simple Spring',
        icon: '🌸',
        color: '#d4a0c8',
        description: 'pH8.5以上のアルカリ性を示す単純泉。「美人の湯」として名高く、皮膚表面の古い角質を溶かしてつるつるとした肌に整える効果がある。無色透明でとろみがあるのが特徴。',
        effects: ['美肌', '疲労回復', '自律神経不安定症', '不眠症'],
        caution: '刺激が少ないが、アルカリが強いと肌への刺激になることも。',
        suitable_for: '美肌目的の方（特に女性）、肌荒れが気になる方',
        notable_onsen: ['嬉野温泉（佐賀）', '美人の湯として知られる各地の温泉'],
        onsen_ids: []
    }
];

export function getSpringTypeById(id) {
    return springTypeList.find(s => s.id === id);
}
```

- [ ] **Step 2: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add src/data/springTypes.js
git commit -m "feat: add springTypes.js with 10 spring type entries"
```

---

## Task 6: 泉質一覧・詳細ページを作成

**Files:**
- Create: `src/pages/springTypeList.js`
- Create: `src/pages/springTypeDetail.js`

- [ ] **Step 1: 泉質一覧ページを作成する**

```js
// src/pages/springTypeList.js
import { springTypeList } from '../data/springTypes.js';
import { updateSEO } from '../seo.js';

export function renderSpringTypeList() {
    updateSEO('泉質から温泉を探す', '硫黄泉・美肌の湯・炭酸泉など泉質の種類と効能を解説。自分に合った温泉を泉質から探せます。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>泉質から探す</span>
                </nav>
                <h1 class="page-title">泉質から温泉を探す</h1>
                <p class="page-desc">温泉の種類（泉質）と効能を解説。目的に合った温泉を見つけよう。</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="hotel-grid">
                    ${springTypeList.map(st => `
                        <a href="/onsen/spring-type/${st.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image" style="background:${st.color}22;display:flex;align-items:center;justify-content:center;min-height:160px">
                                <span style="font-size:4rem">${st.icon}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${st.name}</h3>
                                <p class="hotel-card-desc">${st.description.slice(0, 60)}…</p>
                                <div class="hotel-card-tags">
                                    ${st.effects.slice(0, 3).map(e => `<span class="tag">${e}</span>`).join('')}
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 2: 泉質詳細ページを作成する**

```js
// src/pages/springTypeDetail.js
import { getSpringTypeById } from '../data/springTypes.js';
import { onsenList } from '../data/onsen.js';
import { updateSEO } from '../seo.js';

export function renderSpringTypeDetail({ params }) {
    const app = document.getElementById('app');
    const st = getSpringTypeById(params.id);

    if (!st) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/spring-types" class="btn btn-primary">泉質一覧へ</a></div></div>`;
        return;
    }

    updateSEO(`${st.name}とは？効能・特徴・おすすめ温泉地`, st.description);

    const relatedOnsen = onsenList.filter(o =>
        st.onsen_ids.includes(o.id) ||
        o.spring_type?.includes(st.name.split('（')[0]) ||
        o.category?.includes(st.name.split('（')[0])
    ).slice(0, 6);

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero" style="background:${st.color}33">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/spring-types">泉質から探す</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${st.name}</span>
                </nav>
                <div class="onsen-hero-badge">${st.icon} 泉質ガイド</div>
                <h1 class="prefecture-hero-title">${st.name}</h1>
                <p class="prefecture-hero-kana">${st.nameEn}</p>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container">
                <div class="onsen-info-card">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">${st.name}とは</h2>
                        <p class="onsen-info-desc">${st.description}</p>
                    </div>
                    <div class="onsen-info-meta">
                        <div class="onsen-meta-item">
                            <span class="onsen-meta-label">主な効能</span>
                            <span class="onsen-meta-value">${st.effects.join(' / ')}</span>
                        </div>
                        <div class="onsen-meta-item">
                            <span class="onsen-meta-label">こんな方におすすめ</span>
                            <span class="onsen-meta-value">${st.suitable_for}</span>
                        </div>
                        <div class="onsen-meta-item">
                            <span class="onsen-meta-label">注意事項</span>
                            <span class="onsen-meta-value">${st.caution}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${st.name}の代表的な温泉地</h2>
                    <p class="section-desc">${st.name}が楽しめる全国の温泉地</p>
                </div>
                <div class="hotel-grid">
                    ${relatedOnsen.map(o => `
                        <a href="/onsen/onsen/${o.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${o.image}" alt="${o.name}" loading="lazy">
                                <span class="hotel-type-badge">${o.category}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${o.name}</h3>
                                <p class="hotel-card-desc">${o.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 3: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 4: コミット**

```bash
git add src/pages/springTypeList.js src/pages/springTypeDetail.js
git commit -m "feat: add spring type list and detail pages"
```

---

## Task 7: specials.js データファイルを作成

**Files:**
- Create: `src/data/specials.js`

- [ ] **Step 1: 特集データファイルを作成する**

```js
// src/data/specials.js
export const specialList = [
    // ===== 季節別 =====
    {
        id: 'yukimi-roten',
        title: '雪見露天ができる名湯',
        subtitle: '冬の絶景温泉',
        season: 'winter',
        scene: null,
        icon: '❄️',
        color: '#7aaed4',
        description: '雪が静かに降り積もる中、温かい露天風呂に身を沈める。非日常の贅沢を味わえる、冬の温泉旅行の醍醐味。',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-5'],
        hotel_ids: []
    },
    {
        id: 'koyo-onsen',
        title: '紅葉×温泉 絶景スポット',
        subtitle: '秋の温泉旅行',
        season: 'autumn',
        scene: null,
        icon: '🍁',
        color: '#c47a3a',
        description: '山々が赤や黄色に染まる秋の温泉地。露天風呂から眺める紅葉は、一生の思い出になる絶景。',
        onsen_ids: ['o-hokkaido-5', 'o-hokkaido-3'],
        hotel_ids: []
    },
    {
        id: 'sakura-onsen',
        title: '桜の季節に訪れたい温泉地',
        subtitle: '春の温泉旅行',
        season: 'spring',
        scene: null,
        icon: '🌸',
        color: '#e0a0be',
        description: '桜満開の温泉地で過ごす春の一日。花見と温泉を一緒に楽しめる特別なスポットを厳選。',
        onsen_ids: ['o-hokkaido-2'],
        hotel_ids: []
    },
    {
        id: 'summer-highland',
        title: '夏の高原・避暑温泉',
        subtitle: '涼しい夏の温泉',
        season: 'summer',
        scene: null,
        icon: '🌿',
        color: '#5aaa7a',
        description: '標高の高い高原や山間の温泉地で、夏の暑さを忘れるひととき。清涼な空気と温泉が体をリフレッシュ。',
        onsen_ids: ['o-hokkaido-3', 'o-hokkaido-7'],
        hotel_ids: []
    },
    // ===== シーン別 =====
    {
        id: 'solo-travel',
        title: '一人旅歓迎の温泉宿',
        subtitle: '一人旅特集',
        season: null,
        scene: '一人旅',
        icon: '🧳',
        color: '#7a8abf',
        description: '一人旅を温かく迎えてくれる宿を厳選。ひとり部屋完備、一人でも充分楽しめる温泉宿。',
        onsen_ids: [],
        hotel_ids: ['h-hokkaido-1-3']
    },
    {
        id: 'couple',
        title: 'カップルに人気の温泉宿',
        subtitle: 'カップル旅行特集',
        season: null,
        scene: 'カップル',
        icon: '💑',
        color: '#d4848a',
        description: '二人きりで過ごす特別な時間。露天付き客室や貸切風呂など、カップルに人気の設備が充実した宿。',
        onsen_ids: [],
        hotel_ids: ['h-hokkaido-1-2', 'h-hokkaido-2-1']
    },
    {
        id: 'family',
        title: '子連れ・家族で楽しめる温泉宿',
        subtitle: 'ファミリー温泉特集',
        season: null,
        scene: '家族',
        icon: '👨‍👩‍👧‍👦',
        color: '#5abf8a',
        description: 'お子様連れでも安心・楽しめる設備が充実した温泉宿。家族の思い出になる温泉旅行を。',
        onsen_ids: [],
        hotel_ids: ['h-hokkaido-1-1']
    },
    {
        id: 'womens-trip',
        title: '女子旅向け 美肌の温泉宿',
        subtitle: '女子旅特集',
        season: null,
        scene: '女子旅',
        icon: '💆‍♀️',
        color: '#c88abf',
        description: '美肌効果の高い温泉と、おしゃれで居心地のいい宿。女子旅を盛り上げるスポットを紹介。',
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7'],
        hotel_ids: []
    }
];

export function getSpecialById(id) {
    return specialList.find(s => s.id === id);
}

export function getSpecialsBySeason(season) {
    return specialList.filter(s => s.season === season);
}

export function getSpecialsByScene(scene) {
    return specialList.filter(s => s.scene === scene);
}
```

- [ ] **Step 2: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add src/data/specials.js
git commit -m "feat: add specials.js with seasonal and scene-based special collections"
```

---

## Task 8: 特集一覧・詳細ページを作成

**Files:**
- Create: `src/pages/specialList.js`
- Create: `src/pages/specialDetail.js`

- [ ] **Step 1: 特集一覧ページを作成する**

```js
// src/pages/specialList.js
import { specialList } from '../data/specials.js';
import { updateSEO } from '../seo.js';

export function renderSpecialList() {
    updateSEO('特集・テーマ別温泉', '季節・シーン別の温泉特集。雪見露天・紅葉温泉・一人旅・カップル向けなど目的別に温泉地・温泉宿を紹介。');
    const app = document.getElementById('app');

    const seasonal = specialList.filter(s => s.season);
    const scene = specialList.filter(s => s.scene);

    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>特集</span>
                </nav>
                <h1 class="page-title">特集・テーマ別温泉</h1>
                <p class="page-desc">季節やシーンに合わせた、とっておきの温泉特集</p>
            </div>
        </div>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">季節の特集</h2>
                    <p class="section-desc">四季折々の温泉の楽しみ方</p>
                </div>
                <div class="hotel-grid">
                    ${seasonal.map(s => renderSpecialCard(s)).join('')}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">シーン・目的別特集</h2>
                    <p class="section-desc">旅のスタイルで選ぶ温泉</p>
                </div>
                <div class="hotel-grid">
                    ${scene.map(s => renderSpecialCard(s)).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function renderSpecialCard(s) {
    return `
        <a href="/onsen/special/${s.id}" class="hotel-card hotel-card-link">
            <div class="hotel-card-image" style="background:${s.color}33;display:flex;align-items:center;justify-content:center;min-height:160px">
                <span style="font-size:4rem">${s.icon}</span>
            </div>
            <div class="hotel-card-body">
                <span class="hotel-type-badge-inline" style="font-size:0.75rem;color:var(--color-text-muted)">${s.subtitle}</span>
                <h3 class="hotel-card-name">${s.title}</h3>
                <p class="hotel-card-desc">${s.description.slice(0, 60)}…</p>
            </div>
        </a>
    `;
}
```

- [ ] **Step 2: 特集詳細ページを作成する**

```js
// src/pages/specialDetail.js
import { getSpecialById } from '../data/specials.js';
import { onsenList } from '../data/onsen.js';
import { hotelList } from '../data/hotels.js';
import { updateSEO } from '../seo.js';

export function renderSpecialDetail({ params }) {
    const app = document.getElementById('app');
    const special = getSpecialById(params.id);

    if (!special) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/specials" class="btn btn-primary">特集一覧へ</a></div></div>`;
        return;
    }

    updateSEO(special.title, special.description);

    const relatedOnsen = onsenList.filter(o => special.onsen_ids.includes(o.id));
    const relatedHotels = hotelList.filter(h =>
        special.hotel_ids.includes(h.id) ||
        (special.scene && h.scenes?.includes(special.scene))
    ).slice(0, 6);

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero" style="background:${special.color}44">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/specials">特集</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${special.title}</span>
                </nav>
                <div class="onsen-hero-badge">${special.icon} ${special.subtitle}</div>
                <h1 class="prefecture-hero-title">${special.title}</h1>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container">
                <p style="font-size:1.1rem;line-height:1.9;max-width:800px;color:var(--color-text-muted)">${special.description}</p>
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">おすすめ温泉地</h2>
                </div>
                <div class="hotel-grid">
                    ${relatedOnsen.map(o => `
                        <a href="/onsen/onsen/${o.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${o.image}" alt="${o.name}" loading="lazy">
                                <span class="hotel-type-badge">${o.category}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${o.name}</h3>
                                <p class="hotel-card-desc">${o.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

        ${relatedHotels.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">おすすめ温泉宿</h2>
                </div>
                <div class="hotel-grid">
                    ${relatedHotels.map(h => `
                        <a href="/onsen/hotel/${h.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${h.image}" alt="${h.name}" loading="lazy">
                                <span class="hotel-type-badge">${h.type}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${h.name}</h3>
                                <p class="hotel-card-desc">${h.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 3: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 4: コミット**

```bash
git add src/pages/specialList.js src/pages/specialDetail.js
git commit -m "feat: add special list and detail pages for seasonal/scene collections"
```

---

## Task 9: guide.js ページを作成

**Files:**
- Create: `src/pages/guide.js`

- [ ] **Step 1: 初めての温泉旅行ガイドページを作成する**

```js
// src/pages/guide.js
import { updateSEO } from '../seo.js';

export function renderGuide() {
    updateSEO('初めての温泉旅行ガイド', '温泉の入り方・マナー・持ち物・泉質の選び方など、温泉旅行が初めての方に向けた完全ガイド。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>温泉旅行ガイド</span>
                </nav>
                <h1 class="page-title">♨ 初めての温泉旅行ガイド</h1>
                <p class="page-desc">温泉の入り方・マナー・持ち物・泉質の選び方を徹底解説</p>
            </div>
        </div>

        <section class="section">
            <div class="container" style="max-width:800px">

                <div class="onsen-info-card" style="margin-bottom:2rem">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">🛁 温泉の入り方・基本マナー</h2>
                        <ol style="line-height:2;padding-left:1.5rem;color:var(--color-text-muted)">
                            <li><strong>かけ湯をする</strong> — 浴槽に入る前に、洗い場のお湯を全身にかけて身体を慣らす。これは清潔のためでもあり、心臓への負担を減らすためでもある。</li>
                            <li><strong>タオルは浴槽に入れない</strong> — タオルは浴槽の外に置くか、頭の上に乗せる。湯の汚染を防ぐため。</li>
                            <li><strong>長湯しすぎない</strong> — 一般的に1回10〜15分が目安。のぼせを感じたらすぐに出る。</li>
                            <li><strong>入浴前後に水分補給</strong> — 温泉は発汗を促すため、入浴前後にコップ1杯の水を飲む。</li>
                            <li><strong>食事直後・飲酒後は避ける</strong> — 消化器官や心臓への負担になる。</li>
                            <li><strong>浴槽内での洗髪・石鹸使用はNG</strong> — 洗い場で行い、浴槽は温浴専用に。</li>
                        </ol>
                    </div>
                </div>

                <div class="onsen-info-card" style="margin-bottom:2rem">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">🎒 温泉旅行の持ち物リスト</h2>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;color:var(--color-text-muted)">
                            <div>
                                <strong>必需品</strong>
                                <ul style="line-height:2;padding-left:1.2rem;margin-top:0.5rem">
                                    <li>タオル（大・小）</li>
                                    <li>着替え</li>
                                    <li>洗面用具（シャンプー等）</li>
                                    <li>保険証</li>
                                </ul>
                            </div>
                            <div>
                                <strong>あると便利</strong>
                                <ul style="line-height:2;padding-left:1.2rem;margin-top:0.5rem">
                                    <li>ボディクリーム・乳液</li>
                                    <li>湯上がり用ドリンク</li>
                                    <li>防水バッグ</li>
                                    <li>スリッパ</li>
                                </ul>
                            </div>
                        </div>
                        <p style="margin-top:1rem;font-size:0.9rem;color:var(--color-text-muted)">※ 多くの温泉宿ではタオル・シャンプー・ドライヤーが備え付けられています。事前に宿へ確認を。</p>
                    </div>
                </div>

                <div class="onsen-info-card" style="margin-bottom:2rem">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">🌿 泉質の選び方</h2>
                        <p style="color:var(--color-text-muted);margin-bottom:1rem">温泉の種類（泉質）によって、効能や適した人が異なります。目的に合わせて選びましょう。</p>
                        <div style="display:grid;gap:0.75rem">
                            <div style="padding:0.75rem;border-left:3px solid var(--color-primary);background:rgba(255,255,255,0.03)">
                                <strong>美肌目的なら</strong> — 炭酸水素塩泉（重曹泉）・アルカリ性単純泉。肌をやわらかくしっとり整える。
                            </div>
                            <div style="padding:0.75rem;border-left:3px solid var(--color-accent);background:rgba(255,255,255,0.03)">
                                <strong>疲労回復・体を温めるなら</strong> — 塩化物泉。保温効果が高く、入浴後もポカポカが続く。
                            </div>
                            <div style="padding:0.75rem;border-left:3px solid #c8a84b;background:rgba(255,255,255,0.03)">
                                <strong>名湯・秘湯を楽しみたいなら</strong> — 硫黄泉。独特の香りと乳白色の湯が「いかにも温泉」な体験を。
                            </div>
                            <div style="padding:0.75rem;border-left:3px solid #88aacc;background:rgba(255,255,255,0.03)">
                                <strong>初心者・肌が弱いなら</strong> — 単純泉。刺激が少なく誰でも入りやすい。
                            </div>
                        </div>
                        <p style="margin-top:1rem">
                            <a href="/onsen/spring-types" style="color:var(--color-primary)">→ 泉質から温泉を探す</a>
                        </p>
                    </div>
                </div>

                <div class="onsen-info-card">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">📋 温泉宿の選び方ポイント</h2>
                        <ul style="line-height:2.2;padding-left:1.5rem;color:var(--color-text-muted)">
                            <li><strong>源泉かけ流しか確認する</strong> — 湯の新鮮さと成分の濃さが異なる。こだわるなら源泉かけ流し指定で検索。</li>
                            <li><strong>日帰り入浴で下見する</strong> — 泊まる前に日帰り入浴で宿の雰囲気を確認できる宿も多い。</li>
                            <li><strong>食事の内容を確認する</strong> — 地産地消・会席料理など食事に力を入れている宿は満足度が高い傾向。</li>
                            <li><strong>露天風呂の有無</strong> — 自然の景色を楽しみたいなら露天付き客室または展望露天風呂がある宿を。</li>
                            <li><strong>交通手段を確認する</strong> — 車がない場合、送迎サービスや公共交通機関へのアクセスを確認。</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 2: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add src/pages/guide.js
git commit -m "feat: add beginner's hot spring travel guide page"
```

---

## Task 10: courses.js データとページを作成

**Files:**
- Create: `src/data/courses.js`
- Create: `src/pages/courseList.js`
- Create: `src/pages/courseDetail.js`

- [ ] **Step 1: モデルコースデータを作成する**

```js
// src/data/courses.js
export const courseList = [
    {
        id: 'noboribetsu-1night',
        title: '登別温泉 1泊2日モデルコース',
        subtitle: '北海道の名湯を満喫',
        prefecture: 'hokkaido',
        days: 2,
        onsen_id: 'o-hokkaido-1',
        hotel_id: 'h-hokkaido-1-1',
        spot_ids: ['s-hokkaido-3'],
        gourmet_ids: ['g-hokkaido-1', 'g-hokkaido-2'],
        description: '日本屈指の温泉地・登別温泉でゆっくり過ごす1泊2日プラン。地獄谷散策と多彩な温泉を楽しもう。',
        image: './onsen/noboribetsu.png',
        itinerary: [
            { day: 1, items: [
                { time: '10:00', label: '登別駅着、バスで温泉街へ' },
                { time: '11:00', label: '地獄谷・大湯沼を散策' },
                { time: '13:00', label: 'ランチ（ジンギスカン）' },
                { time: '15:00', label: 'チェックイン・温泉三昧' },
                { time: '18:00', label: '夕食（北海道の恵み）' },
                { time: '20:00', label: '夜の露天風呂へ' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の温泉・朝食' },
                { time: '10:00', label: 'チェックアウト' },
                { time: '11:00', label: 'クマ牧場（オプション）' },
                { time: '13:00', label: '海鮮ランチ' },
                { time: '15:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'toyako-1night',
        title: '洞爺湖温泉 1泊2日モデルコース',
        subtitle: '湖畔リゾートで癒しの旅',
        prefecture: 'hokkaido',
        days: 2,
        onsen_id: 'o-hokkaido-2',
        hotel_id: 'h-hokkaido-2-1',
        spot_ids: [],
        gourmet_ids: ['g-hokkaido-2'],
        description: '洞爺湖畔に立つ絶景温泉リゾートで過ごす優雅な1泊2日。湖面に映る有珠山と花火の絶景。',
        image: './onsen/toyako.png',
        itinerary: [
            { day: 1, items: [
                { time: '12:00', label: '洞爺湖温泉着' },
                { time: '13:00', label: 'ランチ後チェックイン' },
                { time: '15:00', label: '湖畔散策・足湯体験' },
                { time: '18:00', label: '夕食（湖を眺めながら）' },
                { time: '20:45', label: '夜の定期花火大会（4〜10月）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の露天風呂（洞爺湖一望）' },
                { time: '9:00', label: '朝食後チェックアウト' },
                { time: '10:00', label: '有珠山ロープウェイ（オプション）' },
                { time: '13:00', label: '帰路' }
            ]}
        ]
    }
];

export function getCourseById(id) {
    return courseList.find(c => c.id === id);
}
```

- [ ] **Step 2: モデルコース一覧ページを作成する**

```js
// src/pages/courseList.js
import { courseList } from '../data/courses.js';
import { updateSEO } from '../seo.js';

export function renderCourseList() {
    updateSEO('エリア別モデルコース', '温泉地を起点にした1泊2日・日帰りのモデルコース。観光スポットやご当地グルメも一緒に楽しめるプランを紹介。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>モデルコース</span>
                </nav>
                <h1 class="page-title">エリア別モデルコース</h1>
                <p class="page-desc">温泉を起点にした旅行プランを紹介。観光・グルメもセットで楽しもう。</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="hotel-grid">
                    ${courseList.map(c => `
                        <a href="/onsen/course/${c.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${c.image}" alt="${c.title}" loading="lazy">
                                <span class="hotel-type-badge">${c.days}日間</span>
                            </div>
                            <div class="hotel-card-body">
                                <span style="font-size:0.75rem;color:var(--color-text-muted)">${c.subtitle}</span>
                                <h3 class="hotel-card-name">${c.title}</h3>
                                <p class="hotel-card-desc">${c.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 3: モデルコース詳細ページを作成する**

```js
// src/pages/courseDetail.js
import { getCourseById } from '../data/courses.js';
import { onsenList } from '../data/onsen.js';
import { getHotelById } from '../data/hotels.js';
import { spots } from '../data/spots.js';
import { gourmet } from '../data/gourmet.js';
import { updateSEO } from '../seo.js';

export function renderCourseDetail({ params }) {
    const app = document.getElementById('app');
    const course = getCourseById(params.id);

    if (!course) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/courses" class="btn btn-primary">コース一覧へ</a></div></div>`;
        return;
    }

    updateSEO(course.title, course.description);

    const onsen = onsenList.find(o => o.id === course.onsen_id);
    const hotel = getHotelById(course.hotel_id);
    const courseSpots = spots.filter(s => course.spot_ids.includes(s.id));
    const courseGourmet = gourmet.filter(g => course.gourmet_ids.includes(g.id));

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero">
            <img src="${course.image}" alt="${course.title}" class="prefecture-hero-bg">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/courses">モデルコース</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${course.title}</span>
                </nav>
                <div class="onsen-hero-badge">🗓 ${course.days}日間プラン</div>
                <h1 class="prefecture-hero-title">${course.title}</h1>
                <p class="prefecture-hero-kana">${course.subtitle}</p>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container">
                <p style="font-size:1.1rem;line-height:1.9;max-width:800px;color:var(--color-text-muted)">${course.description}</p>
            </div>
        </section>

        <section class="section">
            <div class="container" style="max-width:800px">
                <h2 class="section-title">スケジュール</h2>
                ${course.itinerary.map(day => `
                    <div style="margin-bottom:2rem">
                        <h3 style="color:var(--color-primary);margin-bottom:1rem">${day.day}日目</h3>
                        <div style="border-left:2px solid var(--color-primary);padding-left:1.5rem">
                            ${day.items.map(item => `
                                <div style="margin-bottom:1rem;display:flex;gap:1rem">
                                    <span style="min-width:3.5rem;color:var(--color-primary);font-weight:600">${item.time}</span>
                                    <span style="color:var(--color-text-muted)">${item.label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        ${onsen ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">温泉地</h2>
                <a href="/onsen/onsen/${onsen.id}" class="hotel-card hotel-card-link" style="max-width:400px;display:block">
                    <div class="hotel-card-image">
                        <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
                        <span class="hotel-type-badge">${onsen.category}</span>
                    </div>
                    <div class="hotel-card-body">
                        <h3 class="hotel-card-name">${onsen.name}</h3>
                        <p class="hotel-card-desc">${onsen.description.slice(0, 60)}…</p>
                    </div>
                </a>
            </div>
        </section>
        ` : ''}

        ${hotel ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">おすすめの宿</h2>
                <a href="/onsen/hotel/${hotel.id}" class="hotel-card hotel-card-link" style="max-width:400px;display:block">
                    <div class="hotel-card-image">
                        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
                        <span class="hotel-type-badge">${hotel.type}</span>
                    </div>
                    <div class="hotel-card-body">
                        <h3 class="hotel-card-name">${hotel.name}</h3>
                        <p class="hotel-card-desc">${hotel.description.slice(0, 60)}…</p>
                    </div>
                </a>
            </div>
        </section>
        ` : ''}

        ${courseGourmet.length > 0 ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">地元グルメ</h2>
                <div class="hotel-grid">
                    ${courseGourmet.map(g => `
                        <div class="hotel-card">
                            <div class="hotel-card-image">
                                <img src="${g.image}" alt="${g.name}" loading="lazy">
                                <span class="hotel-type-badge">${g.category}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${g.name}</h3>
                                <p class="hotel-card-desc">${g.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 4: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 5: コミット**

```bash
git add src/data/courses.js src/pages/courseList.js src/pages/courseDetail.js
git commit -m "feat: add model course data and list/detail pages"
```

---

## Task 11: articles.js データとページを作成

**Files:**
- Create: `src/data/articles.js`
- Create: `src/pages/articleList.js`
- Create: `src/pages/articleDetail.js`

- [ ] **Step 1: 記事データを作成する**

```js
// src/data/articles.js
export const articleList = [
    {
        id: 'hokkaido-day-trip-top5',
        title: '北海道のおすすめ温泉5選！絶景・秘湯から人気温泉地まで',
        category: 'ranking',
        categoryLabel: 'おすすめ特集',
        published: '2026-04-23',
        description: '北海道には登別・洞爺湖・定山渓など個性豊かな温泉地が揃う。泉質・景色・アクセスを総合評価したおすすめ5選を紹介。',
        image: './onsen/noboribetsu.png',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-2', 'o-hokkaido-3', 'o-hokkaido-4', 'o-hokkaido-5'],
        body: `
            <p>北海道は日本でも有数の温泉王国。硫黄泉から単純泉まで多様な泉質が揃い、雄大な自然の中で温泉を楽しめるのが最大の魅力だ。</p>
            <h3>1位：登別温泉</h3>
            <p>日本を代表する温泉地のひとつ。9種類もの泉質が湧き出す「温泉のデパート」とも呼ばれる。地獄谷の迫力ある噴気孔は温泉地の象徴で、観光としても見ごたえがある。硫黄の香りが漂う乳白色の湯は、慢性皮膚病や疲労回復に効果的とされる。</p>
            <h3>2位：洞爺湖温泉</h3>
            <p>洞爺湖畔に広がるリゾート温泉。有珠山と洞爺湖を一望できる露天風呂は絶景。4〜10月の期間中は毎夜花火大会が開催され、湯けむりの中から眺める花火は格別だ。</p>
            <h3>3位：定山渓温泉</h3>
            <p>札幌から車で約1時間。豊平川沿いの渓谷に旅館が立ち並ぶ「札幌の奥座敷」。紅葉シーズンの美しさは格別で、秋の旅行に特におすすめ。</p>
            <h3>4位：阿寒湖温泉</h3>
            <p>マリモで有名な阿寒湖のほとりに広がる温泉地。アイヌ文化の発信地でもあり、温泉と民芸品・郷土料理を合わせて楽しめる。</p>
            <h3>5位：層雲峡温泉</h3>
            <p>大雪山国立公園の峡谷に位置する秘境温泉。冬には氷瀑（氷の滝）が形成され、幻想的な雪景色の中で露天風呂に入れる。</p>
        `
    },
    {
        id: 'bijin-no-yu-top5',
        title: '美肌の湯として名高い温泉5選！泉質と効能を解説',
        category: 'ranking',
        categoryLabel: '泉質ガイド',
        published: '2026-04-23',
        description: '美肌効果が高いとされる泉質（重曹泉・アルカリ性単純泉など）の温泉地を厳選。温泉で肌をケアしたい方向け。',
        image: './onsen/tokachigawa.png',
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7'],
        body: `
            <p>温泉には「美肌の湯」と呼ばれる泉質がある。炭酸水素塩泉（重曹泉）やアルカリ性単純泉がその代表で、肌表面の余分な角質を溶かし、なめらかでしっとりとした肌に整えてくれる。</p>
            <h3>美肌に効く泉質とは？</h3>
            <p>主に以下の2種類が「美肌の湯」として知られる。</p>
            <ul>
                <li><strong>炭酸水素塩泉（重曹泉）</strong>：アルカリ性で肌の古い角質を溶かす。なめらかでしっとりした肌に。</li>
                <li><strong>アルカリ性単純泉</strong>：pH8.5以上の高アルカリ。とろみのある湯が肌をやさしく包む。</li>
            </ul>
            <h3>おすすめ温泉地</h3>
            <p><strong>十勝川温泉（北海道）</strong>：日本唯一のモール泉。植物由来の有機物を含み、とろみのある湯で肌がしっとりする。美肌効果は折り紙付き。</p>
            <p><strong>支笏湖温泉（北海道）</strong>：透明度の高い炭酸水素塩泉。湖と森の静けさの中でゆっくり肌ケアができる。</p>
        `
    }
];

export function getArticleById(id) {
    return articleList.find(a => a.id === id);
}
```

- [ ] **Step 2: 記事一覧ページを作成する**

```js
// src/pages/articleList.js
import { articleList } from '../data/articles.js';
import { updateSEO } from '../seo.js';

export function renderArticleList() {
    updateSEO('温泉コラム・特集記事', '温泉のランキング・泉質ガイド・旅行記など、温泉に関するコラム・特集記事一覧。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>コラム・記事</span>
                </nav>
                <h1 class="page-title">温泉コラム・特集記事</h1>
                <p class="page-desc">温泉ランキング・泉質ガイド・旅行記など</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="hotel-grid">
                    ${articleList.map(a => `
                        <a href="/onsen/article/${a.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${a.image}" alt="${a.title}" loading="lazy">
                                <span class="hotel-type-badge">${a.categoryLabel}</span>
                            </div>
                            <div class="hotel-card-body">
                                <span style="font-size:0.75rem;color:var(--color-text-muted)">${a.published}</span>
                                <h3 class="hotel-card-name" style="font-size:0.95rem">${a.title}</h3>
                                <p class="hotel-card-desc">${a.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 3: 記事詳細ページを作成する**

```js
// src/pages/articleDetail.js
import { getArticleById } from '../data/articles.js';
import { onsenList } from '../data/onsen.js';
import { updateSEO } from '../seo.js';

export function renderArticleDetail({ params }) {
    const app = document.getElementById('app');
    const article = getArticleById(params.id);

    if (!article) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/articles" class="btn btn-primary">記事一覧へ</a></div></div>`;
        return;
    }

    updateSEO(article.title, article.description);

    const relatedOnsen = onsenList.filter(o => article.onsen_ids.includes(o.id));

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero">
            <img src="${article.image}" alt="${article.title}" class="prefecture-hero-bg">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/articles">コラム・記事</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${article.categoryLabel}</span>
                </nav>
                <div class="onsen-hero-badge">📝 ${article.categoryLabel}</div>
                <h1 class="prefecture-hero-title" style="font-size:clamp(1.2rem,3vw,1.8rem)">${article.title}</h1>
                <p class="prefecture-hero-kana">${article.published}</p>
            </div>
        </div>

        <section class="section">
            <div class="container" style="max-width:800px">
                <div style="line-height:1.9;color:var(--color-text-muted)">
                    ${article.body}
                </div>
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">この記事で紹介した温泉地</h2>
                <div class="hotel-grid">
                    ${relatedOnsen.map(o => `
                        <a href="/onsen/onsen/${o.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${o.image}" alt="${o.name}" loading="lazy">
                                <span class="hotel-type-badge">${o.category}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${o.name}</h3>
                                <p class="hotel-card-desc">${o.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
    window.scrollTo(0, 0);
}
```

- [ ] **Step 4: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 5: コミット**

```bash
git add src/data/articles.js src/pages/articleList.js src/pages/articleDetail.js
git commit -m "feat: add article data and list/detail pages"
```

---

## Task 12: main.js に全新ルートを登録する

**Files:**
- Modify: `src/main.js`

- [ ] **Step 1: 新ページの import と route を追加する**

`src/main.js` を以下のように変更する（既存の import 群の後に追記し、`addRoute` 群にも追加する）:

```js
// 既存 import の後に追加
import { renderSpringTypeList } from './pages/springTypeList.js';
import { renderSpringTypeDetail } from './pages/springTypeDetail.js';
import { renderSpecialList } from './pages/specialList.js';
import { renderSpecialDetail } from './pages/specialDetail.js';
import { renderGuide } from './pages/guide.js';
import { renderCourseList } from './pages/courseList.js';
import { renderCourseDetail } from './pages/courseDetail.js';
import { renderArticleList } from './pages/articleList.js';
import { renderArticleDetail } from './pages/articleDetail.js';
```

```js
// 既存 addRoute 群の後に追加
addRoute('/spring-types', renderSpringTypeList);
addRoute('/spring-type/:id', renderSpringTypeDetail);
addRoute('/specials', renderSpecialList);
addRoute('/special/:id', renderSpecialDetail);
addRoute('/guide', renderGuide);
addRoute('/courses', renderCourseList);
addRoute('/course/:id', renderCourseDetail);
addRoute('/articles', renderArticleList);
addRoute('/article/:id', renderArticleDetail);
```

- [ ] **Step 2: ビルドが通ることを確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add src/main.js
git commit -m "feat: register all new page routes in main.js"
```

---

## Task 13: ナビゲーション・トップページ・フッターを更新する

**Files:**
- Modify: `index.html`
- Modify: `src/pages/home.js`

- [ ] **Step 1: index.html のヘッダーナビに新リンクを追加する**

`index.html` の `<ul class="nav-links">` 内に以下を追加する（既存の `<li>` の後）:

```html
<li><a href="/onsen/spring-types">泉質から探す</a></li>
<li><a href="/onsen/specials">特集</a></li>
<li><a href="/onsen/articles">コラム</a></li>
```

フッターの `<div class="footer-links">` にも同様のリンクを追加する:

```html
<a href="/onsen/spring-types">泉質から探す</a>
<a href="/onsen/specials">特集</a>
<a href="/onsen/guide">温泉ガイド</a>
<a href="/onsen/courses">モデルコース</a>
<a href="/onsen/articles">コラム</a>
```

- [ ] **Step 2: home.js のトップページに特集・記事セクションを追加する**

`src/pages/home.js` の import 群に以下を追加する:

```js
import { specialList } from '../data/specials.js';
import { articleList } from '../data/articles.js';
```

`renderHome` 関数内の `app.innerHTML` の末尾（最後の `</section>` の前）に以下のセクションを追加する:

```js
<section class="section" id="specials">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">特集・テーマ別温泉</h2>
      <p class="section-desc">季節やシーンで選ぶ、とっておきの温泉旅行</p>
    </div>
    <div class="hotel-grid">
      ${specialList.slice(0, 4).map(s => `
        <a href="/onsen/special/${s.id}" class="hotel-card hotel-card-link">
          <div class="hotel-card-image" style="background:${s.color}33;display:flex;align-items:center;justify-content:center;min-height:160px">
            <span style="font-size:3.5rem">${s.icon}</span>
          </div>
          <div class="hotel-card-body">
            <span style="font-size:0.75rem;color:var(--color-text-muted)">${s.subtitle}</span>
            <h3 class="hotel-card-name">${s.title}</h3>
          </div>
        </a>
      `).join('')}
    </div>
    <div style="text-align:center;margin-top:1.5rem">
      <a href="/onsen/specials" class="btn btn-outline">特集をもっと見る</a>
    </div>
  </div>
</section>

<section class="section" id="articles">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">温泉コラム・記事</h2>
      <p class="section-desc">温泉の楽しみ方をもっと深く知る</p>
    </div>
    <div class="hotel-grid">
      ${articleList.slice(0, 4).map(a => `
        <a href="/onsen/article/${a.id}" class="hotel-card hotel-card-link">
          <div class="hotel-card-image">
            <img src="${a.image}" alt="${a.title}" loading="lazy">
            <span class="hotel-type-badge">${a.categoryLabel}</span>
          </div>
          <div class="hotel-card-body">
            <span style="font-size:0.75rem;color:var(--color-text-muted)">${a.published}</span>
            <h3 class="hotel-card-name" style="font-size:0.9rem">${a.title}</h3>
          </div>
        </a>
      `).join('')}
    </div>
    <div style="text-align:center;margin-top:1.5rem">
      <a href="/onsen/articles" class="btn btn-outline">記事をもっと見る</a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: ビルドして最終確認**

```bash
npm run build
```

開発サーバーで以下のページを確認する:

```bash
npm run dev
```

確認項目:
- `http://localhost:5173/onsen/` — トップに特集・記事セクションが表示される
- `http://localhost:5173/onsen/spring-types` — 泉質一覧が表示される
- `http://localhost:5173/onsen/spring-type/sulfur` — 硫黄泉の詳細が表示される
- `http://localhost:5173/onsen/specials` — 特集一覧が表示される
- `http://localhost:5173/onsen/special/yukimi-roten` — 雪見露天特集が表示される
- `http://localhost:5173/onsen/guide` — ガイドページが表示される
- `http://localhost:5173/onsen/courses` — モデルコース一覧が表示される
- `http://localhost:5173/onsen/course/noboribetsu-1night` — コース詳細が表示される
- `http://localhost:5173/onsen/articles` — 記事一覧が表示される
- `http://localhost:5173/onsen/article/hokkaido-day-trip-top5` — 記事詳細が表示される
- `http://localhost:5173/onsen/onsen/o-hokkaido-1` — 登別温泉詳細に歴史・日帰り・アクセス等が表示される
- `http://localhost:5173/onsen/hotel/h-hokkaido-1-1` — 宿詳細に源泉・特徴・食事が表示される

- [ ] **Step 4: 最終コミット**

```bash
git add index.html src/pages/home.js
git commit -m "feat: update navigation and homepage with specials/articles sections"
```
