# History Mode ルーティング移行 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ハッシュルーティング（`#/...`）を History mode（`/onsen/...`）に移行し、GitHub Pages の 404.html リダイレクトトリックで直URL・リロードに対応する。

**Architecture:** `public/404.html` がパスを `?p=` にエンコードして `index.html` にリダイレクト。`index.html` 先頭スクリプトが `history.replaceState` でパスを復元。`router.js` を `popstate` + `pathname` ベースに切り替え、`main.js` のグローバルクリックインターセプターが SPA 内リンクをページリロードなしに処理する。

**Tech Stack:** バニラJS、Vite、GitHub Pages

---

## ファイル構成

| ファイル | 変更 | 内容 |
|---|---|---|
| `public/404.html` | 新規 | パスを `?p=` にエンコードして `/onsen/` にリダイレクト |
| `index.html` | 修正 | パス復元スクリプト追加・nav/footer の `href="#/..."` を `/onsen/...` に更新 |
| `src/router.js` | 修正 | `hashchange`→`popstate`、`hash`→`pathname` ベースに全面切り替え |
| `src/main.js` | 修正 | クリックインターセプター追加 |
| `src/pages/home.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `src/pages/hotelDetail.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `src/pages/hotelList.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `src/pages/onsenDetail.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `src/pages/onsenList.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `src/pages/prefectureDetail.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `src/pages/searchResults.js` | 修正 | `href="#/..."` → `href="/onsen/..."` |
| `scripts/seo-build.mjs` | 修正 | sitemap URL から `#` を除去 |

---

## Task 1: public/404.html を作成

**Files:**
- Create: `public/404.html`

- [ ] **Step 1: `public/404.html` を作成**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script>
    var l = window.location;
    var base = l.pathname.split('/').slice(0, 2).join('/');
    l.replace(
      l.origin + base + '/?p=' +
      encodeURIComponent(l.pathname.slice(base.length) + l.search) +
      (l.hash ? '&h=' + encodeURIComponent(l.hash) : '')
    );
  </script>
</head>
</html>
```

動作原理:
- `l.pathname` = `/onsen/prefecture/hokkaido`
- `base` = `/onsen`（先頭2セグメント: `['', 'onsen'].join('/')` ）
- リダイレクト先: `https://japanesehotsprings.github.io/onsen/?p=%2Fprefecture%2Fhokkaido`

- [ ] **Step 2: ビルドして dist/404.html が存在することを確認**

```bash
npm run build && ls dist/404.html
```

期待: `dist/404.html` が表示される

- [ ] **Step 3: コミット**

```bash
git add public/404.html
git commit -m "feat: add 404.html redirect for GitHub Pages history mode"
```

---

## Task 2: index.html を更新

**Files:**
- Modify: `index.html`

- [ ] **Step 1: `<meta charset="UTF-8" />` の直後にパス復元スクリプトを追加**

変更前（4行目付近）:
```html
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="./src/style.css" />
```

変更後:
```html
  <meta charset="UTF-8" />
  <script>
    (function() {
      var p = new URLSearchParams(window.location.search).get('p');
      if (p) history.replaceState({}, '', '/onsen' + p);
    })();
  </script>
  <link rel="stylesheet" href="./src/style.css" />
```

- [ ] **Step 2: nav の `href="#/..."` を `/onsen/...` に更新**

変更前:
```html
      <a href="#/" class="logo">日本温泉<span class="logo-dot">♨</span></a>
```
変更後:
```html
      <a href="/onsen/" class="logo">日本温泉<span class="logo-dot">♨</span></a>
```

変更前:
```html
        <li><a href="#/">ホーム</a></li>
        <li><a href="#/prefectures">都道府県一覧</a></li>
        <li><a href="#/onsens">温泉地一覧</a></li>
        <li><a href="#/hotels">温泉宿一覧</a></li>
```
変更後:
```html
        <li><a href="/onsen/">ホーム</a></li>
        <li><a href="/onsen/prefectures">都道府県一覧</a></li>
        <li><a href="/onsen/onsens">温泉地一覧</a></li>
        <li><a href="/onsen/hotels">温泉宿一覧</a></li>
```

- [ ] **Step 3: footer の `href="#/..."` を `/onsen/...` に更新**

変更前:
```html
        <a href="#/" class="logo-footer">日本温泉<span class="logo-dot">♨</span></a>
```
変更後:
```html
        <a href="/onsen/" class="logo-footer">日本温泉<span class="logo-dot">♨</span></a>
```

変更前:
```html
          <a href="#/">ホーム</a>
          <a href="#/prefectures">都道府県一覧</a>
          <a href="#/onsens">温泉地一覧</a>
          <a href="#/hotels">温泉宿一覧</a>
```
変更後:
```html
          <a href="/onsen/">ホーム</a>
          <a href="/onsen/prefectures">都道府県一覧</a>
          <a href="/onsen/onsens">温泉地一覧</a>
          <a href="/onsen/hotels">温泉宿一覧</a>
```

- [ ] **Step 4: 変更確認**

```bash
grep -c 'href="#/' index.html
```

期待: `0`（残りゼロ）

- [ ] **Step 5: コミット**

```bash
git add index.html
git commit -m "feat: add path restore script and update nav links for history mode"
```

---

## Task 3: src/router.js を History mode に切り替え

**Files:**
- Modify: `src/router.js`

- [ ] **Step 1: `src/router.js` を以下の内容に完全置き換え**

```js
const routes = [];

export function addRoute(path, handler) {
    routes.push({ path, handler });
}

const BASE = '/onsen';

function getCurrentPath() {
    const path = window.location.pathname;
    const stripped = path.startsWith(BASE) ? path.slice(BASE.length) || '/' : '/';
    return stripped + window.location.search;
}

function matchRoute(pattern, path) {
    const patternParts = pattern.split('/');
    const pathParts = path.split('?')[0].split('/');

    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
            params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
        } else if (patternParts[i] !== pathParts[i]) {
            return null;
        }
    }
    return params;
}

function parseQuery(path) {
    const queryString = path.split('?')[1];
    if (!queryString) return {};
    const params = {};
    queryString.split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return params;
}

export function resolveRoute() {
    const path = getCurrentPath();
    const query = parseQuery(path);

    for (const route of routes) {
        const params = matchRoute(route.path, path);
        if (params !== null) {
            route.handler({ params, query });
            return;
        }
    }

    navigateTo('/');
}

export function navigateTo(path) {
    history.pushState({}, '', BASE + path);
    resolveRoute();
}

export function initRouter() {
    window.addEventListener('popstate', resolveRoute);
    resolveRoute();
}
```

変更点の確認:
- `getCurrentPath()`: `window.location.hash` → `window.location.pathname`（BASE を除去）+ `window.location.search`
- `navigateTo()`: `window.location.hash = path` → `history.pushState({}, '', BASE + path)`
- `initRouter()`: `hashchange` → `popstate`

- [ ] **Step 2: コミット**

```bash
git add src/router.js
git commit -m "feat: switch router from hash mode to history mode"
```

---

## Task 4: src/main.js にクリックインターセプターを追加

**Files:**
- Modify: `src/main.js`

- [ ] **Step 1: `DOMContentLoaded` ハンドラ内の `initRouter()` 呼び出しの直前にインターセプターを追加**

変更前（`initRouter()` 付近）:
```js
    // ルーター初期化
    initRouter();
```

変更後:
```js
    // 内部リンクのクリックをインターセプトしてSPA遷移
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a) return;
        const href = a.getAttribute('href');
        if (href && href.startsWith('/onsen/')) {
            e.preventDefault();
            navigateTo(href.slice('/onsen'.length) || '/');
        }
    });

    // ルーター初期化
    initRouter();
```

`href.slice('/onsen'.length)` = `href.slice(6)` の動作例:
- `href="/onsen/"` → `"/"` → `navigateTo('/')` ✓
- `href="/onsen/prefecture/hokkaido"` → `"/prefecture/hokkaido"` ✓
- `href="/onsen/onsen/o-hokkaido-1"` → `"/onsen/o-hokkaido-1"` ✓

- [ ] **Step 2: コミット**

```bash
git add src/main.js
git commit -m "feat: add click interceptor for SPA navigation in history mode"
```

---

## Task 5: src/pages/*.js の href を一括置換

**Files:**
- Modify: `src/pages/home.js`, `src/pages/hotelDetail.js`, `src/pages/hotelList.js`, `src/pages/onsenDetail.js`, `src/pages/onsenList.js`, `src/pages/prefectureDetail.js`, `src/pages/searchResults.js`

- [ ] **Step 1: 7ファイルの `href="#/` を `href="/onsen/` に一括置換**

```bash
cd /Users/nozaki/Downloads/MyBusiness/japanese_hot_springs
sed -i '' 's|href="#/|href="/onsen/|g' \
  src/pages/home.js \
  src/pages/hotelDetail.js \
  src/pages/hotelList.js \
  src/pages/onsenDetail.js \
  src/pages/onsenList.js \
  src/pages/prefectureDetail.js \
  src/pages/searchResults.js
```

- [ ] **Step 2: 残存するハッシュリンクがないことを確認**

```bash
grep -rn 'href="#/' src/pages/
```

期待: 出力なし（マッチなし）

- [ ] **Step 3: 置換結果のサンプルを目視確認**

```bash
grep -n 'href="/onsen/' src/pages/hotelDetail.js | head -5
```

期待: `/onsen/` プレフィックス付きのリンクが表示される

- [ ] **Step 4: コミット**

```bash
git add src/pages/
git commit -m "feat: update all internal links from hash to history mode paths"
```

---

## Task 6: scripts/seo-build.mjs の sitemap URL を修正

**Files:**
- Modify: `scripts/seo-build.mjs`

- [ ] **Step 1: sitemap URL の `#/` を削除する**

変更前（39〜46行目）:
```js
const urls = [
  urlEntry(`${BASE_URL}/`, '1.0'),
  urlEntry(`${BASE_URL}/#/prefectures`, '1.0'),
  urlEntry(`${BASE_URL}/#/onsens`, '1.0'),
  urlEntry(`${BASE_URL}/#/hotels`, '1.0'),
  ...prefectures.map(p => urlEntry(`${BASE_URL}/#/prefecture/${p.id}`, '0.8')),
  ...onsenList.map(o => urlEntry(`${BASE_URL}/#/onsen/${o.id}`, '0.7')),
  ...hotelList.map(h => urlEntry(`${BASE_URL}/#/hotel/${h.id}`, '0.6')),
];
```

変更後:
```js
const urls = [
  urlEntry(`${BASE_URL}/`, '1.0'),
  urlEntry(`${BASE_URL}/prefectures`, '1.0'),
  urlEntry(`${BASE_URL}/onsens`, '1.0'),
  urlEntry(`${BASE_URL}/hotels`, '1.0'),
  ...prefectures.map(p => urlEntry(`${BASE_URL}/prefecture/${p.id}`, '0.8')),
  ...onsenList.map(o => urlEntry(`${BASE_URL}/onsen/${o.id}`, '0.7')),
  ...hotelList.map(h => urlEntry(`${BASE_URL}/hotel/${h.id}`, '0.6')),
];
```

- [ ] **Step 2: コミット**

```bash
git add scripts/seo-build.mjs
git commit -m "feat: remove hash fragments from sitemap URLs"
```

---

## Task 7: ビルド全体検証

**Files:** なし（検証のみ）

- [ ] **Step 1: フルビルドを実行**

```bash
npm run build
```

期待される最終3行:
```
✓ OGPタグを dist/index.html に注入しました
✓ sitemap.xml を生成しました（749 URLs）
✓ robots.txt を生成しました
```

- [ ] **Step 2: dist/404.html が存在することを確認**

```bash
ls dist/404.html
```

期待: `dist/404.html`

- [ ] **Step 3: sitemap にハッシュが含まれていないことを確認**

```bash
grep "#/" dist/sitemap.xml | head -3
```

期待: 出力なし（マッチなし）

- [ ] **Step 4: sitemap の URL 形式を確認**

```bash
grep "<loc>" dist/sitemap.xml | head -6
```

期待:
```xml
    <loc>https://japanesehotsprings.github.io/onsen/</loc>
    <loc>https://japanesehotsprings.github.io/onsen/prefectures</loc>
    <loc>https://japanesehotsprings.github.io/onsen/onsens</loc>
    <loc>https://japanesehotsprings.github.io/onsen/hotels</loc>
    <loc>https://japanesehotsprings.github.io/onsen/prefecture/aomori</loc>
    <loc>https://japanesehotsprings.github.io/onsen/prefecture/hokkaido</loc>
```

- [ ] **Step 5: dev サーバーでの動作確認**

```bash
npm run dev
```

ブラウザで以下を確認:
1. `http://localhost:5173/` → トップページが表示される
2. 都道府県リンクをクリック → URL が `http://localhost:5173/prefecture/hokkaido` に変わりページが切り替わる（リロードなし）
3. ブラウザの戻るボタン → 前のページに戻る
4. `http://localhost:5173/prefecture/hokkaido` を直接リロード → ページが正しく表示される（dev サーバーは404.htmlなしでも動作する場合あり）

- [ ] **Step 6: コミット（変更があれば）**

検証のみで変更なし。次は GitHub Pages へ push してデプロイ後に実際の直URL動作を確認する。
