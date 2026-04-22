# SEO改善 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ビルド時のOGPタグ注入・sitemap.xml/robots.txt自動生成・クライアント側JSON-LD注入を実装してSEOを改善する。

**Architecture:** `npm run build` 実行時に Vite ビルド後 `scripts/seo-build.mjs` が走り、dist/index.htmlへのOGPタグ注入・sitemap.xml生成・robots.txt生成を行う。JSON-LDはクライアント側で `src/seo.js` の `updateSEO()` が `<head>` に動的挿入する。

**Tech Stack:** Node.js ESM、Vite、バニラJS

---

## ファイル構成

| ファイル | 変更 | 内容 |
|---|---|---|
| `scripts/seo-build.mjs` | 新規作成 | OGP注入・sitemap生成・robots.txt生成 |
| `package.json` | 修正 | buildコマンド変更 |
| `src/seo.js` | 修正 | updateSEO()にjsonLd第3引数追加 |
| `src/pages/onsenDetail.js` | 修正 | TouristAttraction JSON-LD追加 |
| `src/pages/hotelDetail.js` | 修正 | LodgingBusiness JSON-LD追加 |

---

## Task 1: src/seo.js を拡張してJSON-LD注入を実装

**Files:**
- Modify: `src/seo.js`

- [ ] **Step 1: `src/seo.js` を以下の内容に置き換える**

```js
const baseTitle = '日本温泉';

export function updateSEO(title, description, jsonLd = null) {
  const newTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} - 全国47都道府県の温泉地を探そう`;
  document.title = newTitle;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description || '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる温泉専門メディア。泉質・地域・特徴から全国の名湯・秘湯を探そう。');
  }

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', newTitle);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description || '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる専門サイト。地域、泉質からお気に入りの温泉を見つけよう。');
  }

  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) existing.remove();

  if (jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
```

- [ ] **Step 2: 動作確認（ブラウザで開発サーバー起動）**

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開き、コンソールエラーがないことを確認する。

- [ ] **Step 3: コミット**

```bash
git add src/seo.js
git commit -m "feat: add JSON-LD injection to updateSEO()"
```

---

## Task 2: onsenDetail.js に TouristAttraction JSON-LD を追加

**Files:**
- Modify: `src/pages/onsenDetail.js`

- [ ] **Step 1: `src/pages/onsenDetail.js` の `updateSEO` 呼び出し箇所を変更**

変更前（35行目付近）:
```js
  updateSEO(`${onsen.name}（${prefecture?.name || ''}）の温泉宿・詳細情報`, onsen.description);
```

変更後:
```js
  updateSEO(`${onsen.name}（${prefecture?.name || ''}）の温泉宿・詳細情報`, onsen.description, {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    'name': onsen.name,
    'description': onsen.description,
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': prefecture?.name || '',
      'addressCountry': 'JP'
    },
    'touristType': '温泉'
  });
```

- [ ] **Step 2: ブラウザで温泉地詳細ページを確認**

`npm run dev` が起動中の状態で `http://localhost:5173/#/onsen/o-hokkaido-1` を開く。

Chrome DevTools → Elements → `<head>` 内に `<script type="application/ld+json">` が存在し、`TouristAttraction` スキーマが含まれることを確認する。

- [ ] **Step 3: コミット**

```bash
git add src/pages/onsenDetail.js
git commit -m "feat: add TouristAttraction JSON-LD to onsen detail page"
```

---

## Task 3: hotelDetail.js に LodgingBusiness JSON-LD を追加

**Files:**
- Modify: `src/pages/hotelDetail.js`

- [ ] **Step 1: `src/pages/hotelDetail.js` の `updateSEO` 呼び出し箇所を変更**

変更前（76行目付近）:
```js
  updateSEO(`${hotel.name}（${onsen?.name || '温泉宿'}）の宿泊情報・予約`, hotel.description);
```

変更後:
```js
  updateSEO(`${hotel.name}（${onsen?.name || '温泉宿'}）の宿泊情報・予約`, hotel.description, {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    'name': hotel.name,
    'description': hotel.description,
    'priceRange': hotel.price,
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': prefecture?.name || '',
      'addressCountry': 'JP'
    }
  });
```

- [ ] **Step 2: ブラウザで宿詳細ページを確認**

`http://localhost:5173/#/hotel/h-hokkaido-1-1` を開く。

Chrome DevTools → Elements → `<head>` 内に `<script type="application/ld+json">` が存在し、`LodgingBusiness` スキーマが含まれることを確認する。

- [ ] **Step 3: コミット**

```bash
git add src/pages/hotelDetail.js
git commit -m "feat: add LodgingBusiness JSON-LD to hotel detail page"
```

---

## Task 4: scripts/seo-build.mjs を作成

**Files:**
- Create: `scripts/seo-build.mjs`

- [ ] **Step 1: `scripts/seo-build.mjs` を以下の内容で作成**

```js
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const BASE_URL = 'https://japanesehotsprings.github.io/onsen';
const today = new Date().toISOString().split('T')[0];

// --- 1. OGPタグを dist/index.html に注入 ---
const indexPath = resolve(root, 'dist/index.html');
let html = readFileSync(indexPath, 'utf-8');

const ogpTags = `
  <meta property="og:title" content="日本温泉 - 全国47都道府県の温泉地を探そう" />
  <meta property="og:description" content="日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる専門サイト。地域、泉質からお気に入りの温泉を見つけよう。" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${BASE_URL}/" />
  <meta property="og:image" content="${BASE_URL}/ogp.png" />
  <meta property="og:site_name" content="日本温泉" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${BASE_URL}/ogp.png" />`;

html = html.replace('</head>', `${ogpTags}\n</head>`);
writeFileSync(indexPath, html, 'utf-8');
console.log('✓ OGPタグを dist/index.html に注入しました');

// --- 2. sitemap.xml 生成 ---
const { prefectures } = await import('../src/data/prefectures.js');
const { onsenList } = await import('../src/data/onsen.js');
const { hotelList } = await import('../src/data/hotels.js');

function url(loc, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
}

const urls = [
  url(`${BASE_URL}/`, '1.0'),
  url(`${BASE_URL}/#/prefectures`, '1.0'),
  url(`${BASE_URL}/#/onsens`, '1.0'),
  url(`${BASE_URL}/#/hotels`, '1.0'),
  ...prefectures.map(p => url(`${BASE_URL}/#/prefecture/${p.id}`, '0.8')),
  ...onsenList.map(o => url(`${BASE_URL}/#/onsen/${o.id}`, '0.7')),
  ...hotelList.map(h => url(`${BASE_URL}/#/hotel/${h.id}`, '0.6')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap, 'utf-8');
console.log(`✓ sitemap.xml を生成しました（${urls.length} URLs）`);

// --- 3. robots.txt 生成 ---
const robots = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;

writeFileSync(resolve(root, 'dist/robots.txt'), robots, 'utf-8');
console.log('✓ robots.txt を生成しました');
```

- [ ] **Step 2: スクリプト単体で動作確認（`vite build` 後に実行）**

```bash
npm run build
```

期待される出力:
```
✓ OGPタグを dist/index.html に注入しました
✓ sitemap.xml を生成しました（755 URLs）
✓ robots.txt を生成しました
```

- [ ] **Step 3: dist/index.html にOGPタグが入っていることを確認**

```bash
grep "og:image" dist/index.html
```

期待される出力:
```
  <meta property="og:image" content="https://japanesehotsprings.github.io/onsen/ogp.png" />
```

- [ ] **Step 4: sitemap.xml の件数を確認**

```bash
grep -c "<url>" dist/sitemap.xml
```

期待される出力: `755`（温泉164 + 宿534 + 都道府県47 + 固定4）

- [ ] **Step 5: robots.txt の内容を確認**

```bash
cat dist/robots.txt
```

期待される出力:
```
User-agent: *
Allow: /
Sitemap: https://japanesehotsprings.github.io/onsen/sitemap.xml
```

- [ ] **Step 6: コミット**

```bash
git add scripts/seo-build.mjs
git commit -m "feat: add seo-build script for OGP injection, sitemap, robots.txt"
```

---

## Task 5: package.json の build コマンドを更新

**Files:**
- Modify: `package.json`

- [ ] **Step 1: `package.json` の `build` スクリプトを変更**

変更前:
```json
"build": "vite build",
```

変更後:
```json
"build": "vite build && node scripts/seo-build.mjs",
```

- [ ] **Step 2: `npm run build` でエンドツーエンド確認**

```bash
npm run build
```

期待される出力（最後の3行）:
```
✓ OGPタグを dist/index.html に注入しました
✓ sitemap.xml を生成しました（755 URLs）
✓ robots.txt を生成しました
```

- [ ] **Step 3: コミット**

```bash
git add package.json
git commit -m "feat: integrate seo-build into npm run build"
```
