# History Mode ルーティング設計書

**日付**: 2026-04-23  
**スコープ**: ハッシュルーティング（`#/...`）をHistory mode（`/onsen/...`）に移行し、GitHub Pages の 404.html リダイレクトトリックで直URLアクセス・リロードに対応する

## 前提条件

- ホスティング: GitHub Pages（プロジェクトページ）
- ベースURL: `https://japanesehotsprings.github.io/onsen`
- ベースパス: `/onsen`
- フレームワーク: バニラJS + Vite（フレームワークなし）
- 外部公開済みの `#/` 形式URL: なし（移行によるリンク切れリスクなし）

## URL 変換対応表

| 変更前 | 変更後 |
|---|---|
| `/#/` | `/onsen/` |
| `/#/prefectures` | `/onsen/prefectures` |
| `/#/prefecture/:id` | `/onsen/prefecture/:id` |
| `/#/onsens` | `/onsen/onsens` |
| `/#/onsen/:id` | `/onsen/onsen/:id` |
| `/#/hotels` | `/onsen/hotels` |
| `/#/hotel/:id` | `/onsen/hotel/:id` |
| `/#/search` | `/onsen/search` |

## アーキテクチャ

GitHub Pages の仕様（存在しないパスは `404.html` にフォールバック）を利用し、以下のフローで動作する：

```
ユーザーが /onsen/prefecture/hokkaido を直接開く
  → GitHub Pages が 404.html を返す
  → 404.html JS がパスを ?p= にエンコードして /onsen/ にリダイレクト
  → index.html 先頭のスクリプトが ?p= を読み取り history.replaceState で元パスに復元
  → SPA が /onsen/prefecture/hokkaido として起動・ルーティング
```

通常のリンクナビゲーション（SPA内遷移）はクリックインターセプターが処理するため 404.html を経由しない。

## 実装詳細

### 1. public/404.html（新規作成）

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

`l.pathname.split('/').slice(0, 2).join('/')` は `/onsen/prefecture/hokkaido` から `/onsen` を取り出す。

### 2. index.html の変更

#### 2-1. `<head>` 先頭にパス復元スクリプトを追加（`<meta charset>` の直後）

```html
<script>
  (function() {
    var p = new URLSearchParams(window.location.search).get('p');
    if (p) history.replaceState({}, '', '/onsen' + p);
  })();
</script>
```

#### 2-2. nav・footer の `href` を更新

```html
<!-- Before -->
<a href="#/" class="logo">
<a href="#/">ホーム</a>
<a href="#/prefectures">都道府県一覧</a>
<a href="#/onsens">温泉地一覧</a>
<a href="#/hotels">温泉宿一覧</a>

<!-- After -->
<a href="/onsen/" class="logo">
<a href="/onsen/">ホーム</a>
<a href="/onsen/prefectures">都道府県一覧</a>
<a href="/onsen/onsens">温泉地一覧</a>
<a href="/onsen/hotels">温泉宿一覧</a>
```

### 3. src/router.js の変更

`hashchange` → `popstate`、`window.location.hash` → `window.location.pathname` に変更。ベースパス `/onsen` を除去するロジックを追加。`matchRoute()`・`parseQuery()`・`addRoute()` は変更なし。

```js
const BASE = '/onsen';

function getCurrentPath() {
    const path = window.location.pathname;
    return path.startsWith(BASE) ? path.slice(BASE.length) || '/' : '/';
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

### 4. src/main.js にクリックインターセプターを追加

`DOMContentLoaded` イベントハンドラ内、`initRouter()` の直前に追加：

```js
document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href && href.startsWith('/onsen/')) {
        e.preventDefault();
        navigateTo(href.slice('/onsen'.length) || '/');
    }
});
```

これにより `<a href="/onsen/prefecture/hokkaido">` クリックは `history.pushState` で処理され、ページリロードが発生しない。

### 5. src/pages/*.js の href 一括置換

対象ファイル（7ファイル）内の全 `href="#/` を `href="/onsen/` に置換：

- `src/pages/home.js`
- `src/pages/hotelDetail.js`
- `src/pages/hotelList.js`
- `src/pages/onsenDetail.js`
- `src/pages/onsenList.js`
- `src/pages/prefectureDetail.js`
- `src/pages/searchResults.js`

置換ルール: `href="#/` → `href="/onsen/`（正規表現不要、単純文字列置換）

### 6. scripts/seo-build.mjs の sitemap URL 修正

`#` を除去してクリーンなURLに変更：

```js
// Before
urlEntry(`${BASE_URL}/#/prefectures`, '1.0'),
urlEntry(`${BASE_URL}/#/prefecture/${p.id}`, '0.8'),
urlEntry(`${BASE_URL}/#/onsen/${o.id}`, '0.7'),
urlEntry(`${BASE_URL}/#/hotel/${h.id}`, '0.6'),

// After
urlEntry(`${BASE_URL}/prefectures`, '1.0'),
urlEntry(`${BASE_URL}/prefecture/${p.id}`, '0.8'),
urlEntry(`${BASE_URL}/onsen/${o.id}`, '0.7'),
urlEntry(`${BASE_URL}/hotel/${h.id}`, '0.6'),
```

固定ページの `/` エントリはそのまま。

## 変更ファイル一覧

| ファイル | 変更種別 |
|---|---|
| `public/404.html` | 新規作成 |
| `index.html` | パス復元スクリプト追加・nav/footerリンク更新 |
| `src/router.js` | history API に切り替え |
| `src/main.js` | クリックインターセプター追加・import 追加 |
| `src/pages/home.js` | href 一括置換 |
| `src/pages/hotelDetail.js` | href 一括置換 |
| `src/pages/hotelList.js` | href 一括置換 |
| `src/pages/onsenDetail.js` | href 一括置換 |
| `src/pages/onsenList.js` | href 一括置換 |
| `src/pages/prefectureDetail.js` | href 一括置換 |
| `src/pages/searchResults.js` | href 一括置換 |
| `scripts/seo-build.mjs` | sitemap URL から `#` 除去 |

## 制約・注意事項

- 検索機能の `navigateTo('/search?q=...')` はそのまま動作する（`getCurrentPath()` の `parseQuery()` がクエリ文字列を処理するため）
- `href="#/"` → `href="/onsen/"` の末尾スラッシュに注意（ルーターの `/` マッチに対応）
- GitHub Pages の 404.html は `dist/` にコピーされる必要があるため `public/404.html` として配置
- ビルド後に `npm run build` で sitemap の URL が `#` なしになることを確認する
