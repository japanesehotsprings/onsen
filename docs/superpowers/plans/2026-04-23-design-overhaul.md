# デザインリニューアル Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `src/style.css` の色値を全面更新し、ダーク和モダンテーマから「白×琥珀ナチュラル温泉」テーマへ刷新する。

**Architecture:** 変更は `src/style.css` 1ファイルのみ。CSS Custom Properties（`:root`）を新パレットに置き換え、各セレクタの色値を琥珀・白・温かいニュートラルへ更新する。HTML・JS・データファイルは一切触らない。

**Tech Stack:** バニラCSS、Vite、Noto Serif/Sans JP（Google Fonts）

---

## ファイル構成

| ファイル | 変更内容 |
|---|---|
| `src/style.css` | CSS変数・セレクタの色値を全面更新（唯一の変更ファイル） |

---

## Task 1: CSS Custom Properties を新パレットに置き換え

**Files:**
- Modify: `src/style.css`（`:root` ブロック、行 9〜59）

- [ ] **Step 1: devサーバーを起動する**

```bash
cd /Users/nozaki/Downloads/MyBusiness/japanese_hot_springs
npm run dev
```

ブラウザで `http://localhost:5173/onsen/` を開いておく。

- [ ] **Step 2: `:root` ブロック全体を置き換える**

`src/style.css` の `:root { ... }` ブロック（現在の行9〜59）を以下に置き換える：

```css
:root {
  /* カラーパレット - 白×琥珀ナチュラル温泉 */
  --color-bg: #ffffff;
  --color-bg-alt: #fffcf7;
  --color-bg-footer: #2a1e14;
  --color-surface: #fdf5ec;
  --color-surface-hover: #f5e8d4;
  --color-border: #f0e4d4;
  --color-border-hover: #d4a87a;

  --color-text: #1a1a1a;
  --color-text-muted: #6b5c50;
  --color-text-dim: #a89080;

  /* 温泉テーマ：琥珀 */
  --color-primary: #b5703a;
  --color-primary-light: #d4956a;
  --color-primary-dark: #8a4f24;

  /* フォント */
  --font-heading: 'Noto Serif JP', serif;
  --font-body: 'Noto Sans JP', sans-serif;

  /* スペーシング */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 3rem;
  --spacing-xl: 5rem;

  /* トランジション */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.4s ease;
  --transition-slow: 0.6s ease;

  /* ボーダー半径 */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 999px;
}
```

削除された変数（`--color-bg-alt` の旧値、`--color-accent`、`--color-red`、`--color-onsen`、`--color-spot`、`--color-gourmet`、`--color-hotel`）はこれ以降 Task で個別に参照箇所も書き換える。

- [ ] **Step 3: ブラウザで確認**

ページ全体が白背景になっていることを確認。ヘッダー・カード・フッターがまだ正しくないのは後続タスクで修正するので問題なし。コンソールエラーがないことだけ確認する。

- [ ] **Step 4: コミット**

```bash
git add src/style.css
git commit -m "feat: replace CSS custom properties with amber-white palette"
```

---

## Task 2: グローバルベース + スクロールバー

**Files:**
- Modify: `src/style.css`（`html`/`body`/`h1-h6`/`scrollbar` セクション）

- [ ] **Step 1: `html` セレクタを更新する**

現在：
```css
html {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-size: 16px;
}
```

`var(--color-bg)` は新しい変数で `#ffffff` になったので自動反映される。変更なし。

- [ ] **Step 2: `h1〜h6` の `color` を確認する**

現在：
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text);
}
```

`var(--color-text)` は `#1a1a1a` に変わったので自動反映される。変更なし。

- [ ] **Step 3: スクロールバーを更新する**

ファイル末尾付近のスクロールバーセクション（現在 `background: var(--color-bg)` / `var(--color-border)` / `var(--color-text-dim)` を参照）を以下に書き換える：

現在：
```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-dim);
}
```

変更後：
```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f7f3ee;
}

::-webkit-scrollbar-thumb {
  background: #e0d0c0;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
```

- [ ] **Step 4: ブラウザでスクロールバーを確認**

長いページ（`http://localhost:5173/onsen/onsens`）でスクロールバーが温かいベージュ〜琥珀色になっていることを確認。

- [ ] **Step 5: コミット**

```bash
git add src/style.css
git commit -m "feat: update scrollbar to warm amber palette"
```

---

## Task 3: ヘッダー（デスクトップ + モバイルメニュー）

**Files:**
- Modify: `src/style.css`（`#header`〜`.menu-toggle` セクション、モバイル `@media (max-width: 768px)` の `.nav-links`）

- [ ] **Step 1: `#header` と `.scrolled` を更新する**

現在：
```css
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--spacing-sm) 0;
  transition: background-color var(--transition-medium), padding var(--transition-medium),
    box-shadow var(--transition-medium), backdrop-filter var(--transition-medium);
}

#header.scrolled {
  background-color: rgba(17, 14, 11, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: var(--spacing-xs) 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}
```

変更後：
```css
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--spacing-sm) 0;
  background-color: #ffffff;
  border-bottom: 1px solid var(--color-border);
  transition: background-color var(--transition-medium), padding var(--transition-medium),
    box-shadow var(--transition-medium), border-color var(--transition-medium);
}

#header.scrolled {
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: var(--spacing-xs) 0;
  box-shadow: 0 2px 16px rgba(181, 112, 58, 0.1);
  border-bottom-color: transparent;
}
```

- [ ] **Step 2: ヘッダー検索バーを更新する**

現在：
```css
.header-search {
  display: flex;
  align-items: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.35rem 0.25rem 0.8rem;
  width: 220px;
  transition: all var(--transition-fast);
}

.header-search:focus-within {
  border-color: var(--color-primary);
  background: var(--color-surface-hover);
  width: 280px;
}

.header-search-input::placeholder {
  color: var(--color-text-dim);
}

.header-search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-bg);
  flex-shrink: 0;
  transition: var(--transition-fast);
}

.header-search-btn:hover {
  background: var(--color-primary-light);
}
```

`.header-search` の `background` と `border` を書き換える（`color` / `btn` 部分は変数で自動反映）：

```css
.header-search {
  display: flex;
  align-items: center;
  background: #fdf9f5;
  border: 1.5px solid #e8d8c4;
  border-radius: var(--radius-full);
  padding: 0.25rem 0.35rem 0.25rem 0.8rem;
  width: 220px;
  transition: all var(--transition-fast);
}

.header-search:focus-within {
  border-color: var(--color-primary);
  background: var(--color-surface);
  width: 280px;
}
```

`header-search-btn` の `color: var(--color-bg)` は `#ffffff` になるので `color: #ffffff` に変更：

```css
.header-search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #ffffff;
  flex-shrink: 0;
  transition: var(--transition-fast);
}
```

- [ ] **Step 3: モバイルメニュー背景を更新する**

`@media (max-width: 768px)` 内の `.nav-links` を更新する：

現在：
```css
  .nav-links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(17, 14, 11, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg);
    z-index: 999;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 1.3rem;
  }
```

変更後：
```css
  .nav-links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    border-right: 1px solid var(--color-border);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg);
    z-index: 999;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 1.2rem;
    color: var(--color-text);
  }
```

- [ ] **Step 4: ブラウザで確認**

`http://localhost:5173/onsen/` でヘッダーが白・琥珀ボーダー表示されることを確認。スクロールすると薄いシャドウが現れることを確認。モバイル幅（DevTools の 375px）でハンバーガーメニューを開いて白いメニューになることを確認。

- [ ] **Step 5: コミット**

```bash
git add src/style.css
git commit -m "feat: redesign header to white with amber accents"
```

---

## Task 4: ヒーローセクション

**Files:**
- Modify: `src/style.css`（`.hero-overlay`、`.hero-title-sub`、`.hero-subtitle`、`.hero-tag`）

- [ ] **Step 1: `.hero-overlay` を茶系グラデーションに更新する**

現在：
```css
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(17, 14, 11, 0.88) 0%,
      rgba(17, 14, 11, 0.72) 50%,
      rgba(17, 14, 11, 0.88) 100%);
  z-index: -1;
}
```

変更後：
```css
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(160deg,
      rgba(30, 15, 5, 0.72) 0%,
      rgba(30, 15, 5, 0.45) 50%,
      rgba(30, 15, 5, 0.72) 100%);
  z-index: -1;
}
```

- [ ] **Step 2: `.hero-title-sub` を琥珀ゴールドに更新する**

現在：
```css
.hero-title-sub {
  display: block;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 400;
  color: var(--color-primary);
  letter-spacing: 0.3em;
  margin-bottom: 0.5rem;
}
```

`var(--color-primary)` は `#b5703a` になったが、ヒーロー上では `rgba(244,200,130,0.9)` の琥珀ゴールドが映える：

```css
.hero-title-sub {
  display: block;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 400;
  color: rgba(244, 200, 130, 0.9);
  letter-spacing: 0.3em;
  margin-bottom: 0.5rem;
}
```

- [ ] **Step 3: `.hero-subtitle` を更新する**

現在：
```css
.hero-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  color: var(--color-text-muted);
  ...
}
```

ヒーロー上では白系が必要：

```css
.hero-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}
```

- [ ] **Step 4: ヒーロー検索ボックスを更新する**

現在：
```css
.search-box {
  display: flex;
  gap: 0;
  max-width: 560px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  padding: 0.4rem;
  backdrop-filter: blur(8px);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.search-box:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(212, 132, 90, 0.18);
}

.search-input {
  background: none;
  border: none;
  outline: none;
  color: var(--color-text);
  font-size: 1rem;
  width: 100%;
  padding: 0.6rem 0;
}

.search-input::placeholder {
  color: var(--color-text-dim);
}

.search-btn {
  background: var(--color-primary);
  color: var(--color-bg);
  border: none;
  border-radius: var(--radius-full);
  padding: 0.7rem 1.8rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition-fast);
  white-space: nowrap;
}

.search-btn:hover {
  background: var(--color-primary-light);
  transform: translateY(-1px);
}
```

変更後：
```css
.search-box {
  display: flex;
  gap: 0;
  max-width: 560px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.97);
  border: 1.5px solid rgba(224, 212, 196, 0.8);
  border-radius: var(--radius-full);
  padding: 0.4rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.search-box:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(181, 112, 58, 0.12);
}

.search-input {
  background: none;
  border: none;
  outline: none;
  color: var(--color-text);
  font-size: 1rem;
  width: 100%;
  padding: 0.6rem 0;
}

.search-input::placeholder {
  color: var(--color-text-dim);
}

.search-btn {
  background: var(--color-primary);
  color: #ffffff;
  border: none;
  border-radius: var(--radius-full);
  padding: 0.7rem 1.8rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition-fast);
  white-space: nowrap;
}

.search-btn:hover {
  background: var(--color-primary-light);
  transform: translateY(-1px);
}
```

- [ ] **Step 5: ヒーロータグを更新する**

現在：
```css
.hero-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(212, 132, 90, 0.12);
  border: 1px solid rgba(212, 132, 90, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  color: var(--color-primary-light);
  cursor: pointer;
  transition: all var(--transition-fast);
  user-select: none;
}

.hero-tag:hover {
  background: rgba(212, 132, 90, 0.22);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}
```

変更後（ヒーロー暗背景上で読める琥珀ゴールドに）：
```css
.hero-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(244, 200, 130, 0.08);
  border: 1px solid rgba(244, 200, 130, 0.45);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  color: rgba(244, 200, 130, 0.85);
  cursor: pointer;
  transition: all var(--transition-fast);
  user-select: none;
}

.hero-tag:hover {
  background: rgba(244, 200, 130, 0.18);
  border-color: rgba(244, 200, 130, 0.7);
  color: rgba(244, 200, 130, 0.95);
  transform: translateY(-2px);
}
```

- [ ] **Step 6: ブラウザで確認**

`http://localhost:5173/onsen/` を開き、ヒーローの写真上に琥珀ゴールドのタグ・検索ボックスが白く浮かんで表示されることを確認。

- [ ] **Step 7: コミット**

```bash
git add src/style.css
git commit -m "feat: update hero overlay and search to warm amber tones"
```

---

## Task 5: カード・バッジ・タグ（温泉地カード）

**Files:**
- Modify: `src/style.css`（`.card`〜`.tag` セクション、`.spring-type-badge`、`.hotel-count-badge`）

- [ ] **Step 1: `.card` ホバー shadow を更新する**

現在：
```css
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
  border-color: var(--color-border-hover);
}
```

変更後：
```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(181, 112, 58, 0.14);
  border-color: var(--color-border-hover);
}
```

- [ ] **Step 2: カードバッジを琥珀系に統一する**

現在（4種類それぞれ異なる色）：
```css
.card-badge.onsen {
  background: rgba(212, 132, 90, 0.25);
  color: var(--color-primary-light);
  border: 1px solid rgba(212, 132, 90, 0.35);
}

.card-badge.spot {
  background: rgba(125, 191, 181, 0.25);
  color: var(--color-spot);
  border: 1px solid rgba(125, 191, 181, 0.3);
}

.card-badge.gourmet {
  background: rgba(212, 132, 90, 0.25);
  color: var(--color-gourmet);
  border: 1px solid rgba(212, 132, 90, 0.3);
}

.card-badge.hotel {
  background: rgba(196, 149, 110, 0.25);
  color: var(--color-hotel);
  border: 1px solid rgba(196, 149, 110, 0.3);
}
```

変更後（`.card-badge` 基底スタイルと全バリアントを統一）：

まず `.card-badge` の基底を更新：
```css
.card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(181, 112, 58, 0.88);
  color: #ffffff;
  border: none;
  backdrop-filter: blur(8px);
}
```

バリアント（`.card-badge.onsen` 等）は全て同じスタイルで上書き：
```css
.card-badge.onsen,
.card-badge.spot,
.card-badge.gourmet,
.card-badge.hotel {
  background: rgba(181, 112, 58, 0.88);
  color: #ffffff;
  border: none;
}
```

- [ ] **Step 3: `.card-content` 内のテキスト色を更新する**

現在：
```css
.card-category {
  color: var(--color-primary);
  font-weight: 500;
}

.card-prefecture {
  color: var(--color-text-dim);
}

.card-prefecture a {
  color: var(--color-text-dim);
}

.card-prefecture a:hover {
  color: var(--color-primary);
}

.card-title {
  font-size: 1.15rem;
  font-family: var(--font-heading);
  margin-bottom: 0.4rem;
  color: var(--color-text);
}

.card-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  ...
}
```

`var(--color-primary)` が `#b5703a`、`var(--color-text-dim)` が `#a89080` に変わったので基本的に自動反映される。`card-prefecture` だけ琥珀色に変更：

```css
.card-prefecture {
  color: var(--color-primary);
}

.card-prefecture a {
  color: var(--color-primary);
}

.card-prefecture a:hover {
  color: var(--color-primary-dark);
}
```

- [ ] **Step 4: `.spring-type-badge` と `.spring-type` を青緑から変更する**

現在：
```css
.spring-type-badge {
  display: inline-block;
  font-size: 0.72rem;
  color: var(--color-accent);
  font-weight: 500;
  ...
}

.spring-type {
  color: var(--color-accent);
  ...
}
```

変更後：
```css
.spring-type-badge {
  display: inline-block;
  font-size: 0.72rem;
  color: var(--color-text-muted);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.spring-type {
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
```

- [ ] **Step 5: `.hotel-count-badge` を更新する**

現在：
```css
.hotel-count-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(125, 191, 181, 0.3);
  color: var(--color-accent);
  border: 1px solid rgba(125, 191, 181, 0.4);
  backdrop-filter: blur(8px);
}
```

変更後：
```css
.hotel-count-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.92);
  color: var(--color-primary);
  border: 1px solid rgba(181, 112, 58, 0.3);
  backdrop-filter: blur(8px);
}
```

- [ ] **Step 6: `.tag` を更新する**

現在：
```css
.tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-dim);
}
```

変更後：
```css
.tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  background: var(--color-surface);
  border: 1px solid #f0dfc8;
  border-radius: var(--radius-full);
  color: #9a7055;
}
```

- [ ] **Step 7: `.onsen-card:hover` の shadow を更新する**

現在：
```css
.onsen-card:hover {
  border-color: rgba(212, 132, 90, 0.4);
  box-shadow: 0 16px 40px rgba(212, 132, 90, 0.08);
}
```

変更後：
```css
.onsen-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: 0 10px 32px rgba(181, 112, 58, 0.14);
}
```

- [ ] **Step 8: ブラウザで確認**

`http://localhost:5173/onsen/onsens` で温泉地一覧を開き、カードが白背景・琥珀ラベル・温かいタグで表示されることを確認。バッジが全て琥珀色になっていることを確認。

- [ ] **Step 9: コミット**

```bash
git add src/style.css
git commit -m "feat: update card, badge, tag styles to amber palette"
```

---

## Task 6: ページヘッダー・セクション・地域コンポーネント

**Files:**
- Modify: `src/style.css`（`.page-header`、`.section-title`、`.region-card`、`.prefecture-chip`、`.prefecture-mini-card`）

- [ ] **Step 1: `.page-header` を更新する**

現在：
```css
.page-header {
  padding-top: calc(80px + var(--spacing-lg));
  padding-bottom: var(--spacing-lg);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--color-border);
}
```

`--color-bg-alt` が `#fffcf7` に変わったので自動反映される。変更なし。`.page-subtitle` の色も `var(--color-text-muted)` で自動反映。

- [ ] **Step 2: `.section-title::after` の下線を確認する**

現在：
```css
.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  margin: 0.6rem auto 0;
  border-radius: 2px;
}
```

`var(--color-primary)` が `#b5703a` になったので自動反映される。幅を `36px`、高さを `2px` に変更してより繊細に：

```css
.section-title::after {
  content: '';
  display: block;
  width: 36px;
  height: 2px;
  background: var(--color-primary);
  margin: 0.8rem auto 0;
  border-radius: 2px;
}
```

- [ ] **Step 3: `.region-section` を確認する**

現在：
```css
.region-section {
  background: var(--color-bg-alt);
}
```

`--color-bg-alt` が `#fffcf7` に変わったので自動反映。変更なし。

- [ ] **Step 4: `.region-card` を更新する**

現在：
```css
.region-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  ...
}

.region-card:hover {
  border-color: var(--color-primary);
  background: var(--color-surface-hover);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}
```

ホバーシャドウを琥珀系に：
```css
.region-card:hover {
  border-color: var(--color-primary);
  background: var(--color-surface-hover);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(181, 112, 58, 0.12);
}
```

`.region-count` の background を更新：
```css
.region-count {
  font-size: 0.75rem;
  color: var(--color-text-dim);
  background: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-full);
}
```

- [ ] **Step 5: `.prefecture-chip` を更新する**

現在：
```css
.prefecture-chip {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: rgba(232, 168, 124, 0.08);
  border: 1px solid rgba(232, 168, 124, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-primary-light);
  transition: all var(--transition-fast);
}

.prefecture-chip:hover {
  background: rgba(232, 168, 124, 0.2);
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

変更後：
```css
.prefecture-chip {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: rgba(181, 112, 58, 0.06);
  border: 1px solid rgba(181, 112, 58, 0.18);
  border-radius: var(--radius-full);
  color: var(--color-primary);
  transition: all var(--transition-fast);
}

.prefecture-chip:hover {
  background: rgba(181, 112, 58, 0.14);
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
}
```

- [ ] **Step 6: `.prefecture-mini-card` を更新する**

現在：
```css
.prefecture-mini-card {
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  transition: all var(--transition-fast);
}

.prefecture-mini-card:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}
```

変更後：
```css
.prefecture-mini-card {
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  background: #ffffff;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: #4a3828;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.prefecture-mini-card:hover {
  background: var(--color-surface);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}
```

- [ ] **Step 7: ブラウザで確認**

`http://localhost:5173/onsen/prefectures` で都道府県一覧を開き、地域カードと都道府県チップが白背景・琥珀アクセントで表示されることを確認。

- [ ] **Step 8: コミット**

```bash
git add src/style.css
git commit -m "feat: update page header, section titles, and prefecture chips"
```

---

## Task 7: 都道府県詳細ヒーロー・タブ・温泉地詳細

**Files:**
- Modify: `src/style.css`（`.prefecture-hero-overlay`、`.tab-btn`、`.onsen-info-*`、`.onsen-hero-badge`）

- [ ] **Step 1: `.prefecture-hero-overlay` を茶系に更新する**

現在：
```css
.prefecture-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 25, 35, 0.95) 0%, rgba(15, 25, 35, 0.3) 60%);
  z-index: -1;
}
```

変更後：
```css
.prefecture-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 10, 3, 0.92) 0%, rgba(20, 10, 3, 0.3) 60%);
  z-index: -1;
}
```

- [ ] **Step 2: タブナビゲーションを更新する**

現在：
```css
.tab-navigation {
  ...
  border-bottom: 1px solid var(--color-border);
  ...
}

.tab-btn.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-count {
  font-size: 0.72rem;
  background: var(--color-surface);
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-full);
  color: var(--color-text-dim);
}

.tab-btn.active .tab-count {
  background: rgba(212, 132, 90, 0.15);
  color: var(--color-primary);
}
```

`.tab-btn.active .tab-count` の rgba を新しい琥珀値に更新：
```css
.tab-btn.active .tab-count {
  background: rgba(181, 112, 58, 0.12);
  color: var(--color-primary);
}
```

他は `var(--color-primary)` / `var(--color-border)` で自動反映される。

- [ ] **Step 3: `.onsen-info-section` を更新する**

現在：
```css
.onsen-info-section {
  background: var(--color-bg-alt);
  ...
}
```

`--color-bg-alt` が `#fffcf7` に変わったので自動反映。変更なし。

- [ ] **Step 4: `.onsen-meta-item` を更新する**

現在：
```css
.onsen-meta-item {
  ...
  background: rgba(212, 132, 90, 0.06);
  border: 1px solid rgba(212, 132, 90, 0.12);
  border-radius: var(--radius-md);
}
```

変更後：
```css
.onsen-meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: var(--spacing-sm);
  background: rgba(181, 112, 58, 0.05);
  border: 1px solid rgba(181, 112, 58, 0.1);
  border-radius: var(--radius-md);
}
```

- [ ] **Step 5: `.onsen-hero-badge` を更新する**

現在：
```css
.onsen-hero-badge {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: rgba(212, 132, 90, 0.2);
  border: 1px solid rgba(212, 132, 90, 0.35);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: var(--color-primary-light);
  margin-bottom: 0.6rem;
  backdrop-filter: blur(8px);
}
```

変更後：
```css
.onsen-hero-badge {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: rgba(181, 112, 58, 0.18);
  border: 1px solid rgba(244, 200, 130, 0.4);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: #f4c882;
  margin-bottom: 0.6rem;
  backdrop-filter: blur(8px);
}
```

- [ ] **Step 6: ブラウザで確認**

任意の都道府県詳細ページ（例: `http://localhost:5173/onsen/prefecture/hokkaido`）と温泉地詳細ページを開き、ヒーローオーバーレイとタブが正しく表示されることを確認。

- [ ] **Step 7: コミット**

```bash
git add src/style.css
git commit -m "feat: update prefecture/onsen detail page colors"
```

---

## Task 8: 温泉宿カード・宿詳細ページ

**Files:**
- Modify: `src/style.css`（`.hotel-card`〜`.hotel-detail-*`、`.booking-card`）

- [ ] **Step 1: `.hotel-card:hover` を更新する**

現在：
```css
.hotel-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(212, 132, 90, 0.12);
  border-color: rgba(212, 132, 90, 0.35);
}
```

変更後：
```css
.hotel-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(181, 112, 58, 0.12);
  border-color: var(--color-border-hover);
}
```

- [ ] **Step 2: `.hotel-type-badge` を更新する**

現在：
```css
.hotel-type-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(212, 132, 90, 0.25);
  color: var(--color-primary-light);
  border: 1px solid rgba(212, 132, 90, 0.3);
  backdrop-filter: blur(8px);
}
```

変更後：
```css
.hotel-type-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(181, 112, 58, 0.88);
  color: #ffffff;
  border: none;
  backdrop-filter: blur(8px);
}
```

- [ ] **Step 3: `.hotel-onsen-name` を更新する**

現在：
```css
.hotel-onsen-name {
  font-size: 0.78rem;
  color: var(--color-accent);
  font-weight: 500;
  margin-bottom: 0.3rem;
}
```

変更後：
```css
.hotel-onsen-name {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  font-weight: 500;
  margin-bottom: 0.3rem;
}
```

- [ ] **Step 4: 宿詳細ページのオーバーレイを更新する**

現在：
```css
.hotel-detail-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(17, 14, 11, 0.4) 0%,
      rgba(17, 14, 11, 0.7) 50%,
      rgba(17, 14, 11, 0.95) 100%);
}
```

変更後：
```css
.hotel-detail-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(20, 10, 3, 0.3) 0%,
      rgba(20, 10, 3, 0.6) 50%,
      rgba(20, 10, 3, 0.95) 100%);
}
```

- [ ] **Step 5: 宿詳細情報セクションを更新する**

現在：
```css
.hotel-detail-info-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}
```

`--color-bg` が `#ffffff` に変わったので自動反映。変更なし。

- [ ] **Step 6: `.hotel-detail-card` と `.booking-card` を確認する**

現在：
```css
.hotel-detail-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  ...
}

.booking-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  ...
}

.booking-card-header {
  padding: var(--spacing-md);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--color-border);
}
```

`.hotel-detail-card` と `.booking-card` の background を白に変更：
```css
.hotel-detail-card {
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.booking-card {
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}
```

- [ ] **Step 7: `.booking-link-btn:hover` を更新する**

現在：
```css
.booking-link-btn:hover {
  background: rgba(255, 255, 255, 0.05);
}
```

変更後：
```css
.booking-link-btn:hover {
  background: var(--color-surface);
}
```

- [ ] **Step 8: `.spring-type-highlight` と `.hotel-onsen-spring` を更新する**

現在：
```css
.spring-type-highlight {
  color: var(--color-accent);
}
```

変更後：
```css
.spring-type-highlight {
  color: var(--color-text-muted);
}
```

宿詳細内 `.hotel-onsen-spring`：
```css
.hotel-onsen-spring {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 0.4rem;
}
```

- [ ] **Step 9: ブラウザで確認**

`http://localhost:5173/onsen/hotels` で宿一覧を開き、`http://localhost:5173/onsen/hotel/` で任意の宿詳細を開いて確認。バッジが琥珀色の塗りつぶし、宿詳細カードが白背景で表示されることを確認。

- [ ] **Step 10: コミット**

```bash
git add src/style.css
git commit -m "feat: update hotel cards and hotel detail page styles"
```

---

## Task 9: フッター・フィルター・検索ページ・広告枠

**Files:**
- Modify: `src/style.css`（`.footer`、`.filter-btn`、`.search-filter`、`.ad-banner-grid`、`.btn-primary`、`.social-icon`）

- [ ] **Step 1: `.footer` を深茶背景に更新する**

現在：
```css
.footer {
  padding: var(--spacing-lg) 0 var(--spacing-md);
  text-align: center;
  color: var(--color-text-dim);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);
}
```

変更後：
```css
.footer {
  padding: var(--spacing-lg) 0 var(--spacing-md);
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  border-top: none;
  background: #2a1e14;
}
```

- [ ] **Step 2: フッター内テキスト色を更新する**

現在：
```css
.logo-footer {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--color-text);
}

.footer-desc {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  max-width: 400px;
}

.footer-links a {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-copy {
  font-size: 0.75rem;
  color: var(--color-text-dim);
  margin-top: var(--spacing-xs);
}
```

変更後：
```css
.logo-footer {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: #f4e0c0;
}

.footer-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  max-width: 400px;
}

.footer-links a {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-copy {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  margin-top: var(--spacing-xs);
}
```

- [ ] **Step 3: `.social-icon` を更新する**

現在：
```css
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #333;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #ff6b6b;
}
```

変更後：
```css
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s;
}

.social-icon:hover {
  color: var(--color-primary);
}
```

- [ ] **Step 4: `.filter-btn` を更新する**

現在：
```css
.filter-btn {
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: rgba(212, 132, 90, 0.15);
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

変更後：
```css
.filter-btn {
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: #ffffff;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-surface);
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

- [ ] **Step 5: `.ad-banner-grid > span` を更新する**

現在：
```css
.ad-banner-grid > span {
  ...
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  ...
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  ...
}
```

変更後（`rgba` の shadow を弱める）：
```css
.ad-banner-grid > span {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: var(--spacing-sm);
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform var(--transition-medium);
}
```

- [ ] **Step 6: `.btn-primary` を確認する**

現在：
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-bg);
  border: 1px solid var(--color-primary);
}

.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 132, 90, 0.3);
}
```

`color: var(--color-bg)` が白になるので問題なし。shadow の rgba を更新：
```css
.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(181, 112, 58, 0.28);
}
```

- [ ] **Step 7: `.btn-back-onsen` を更新する**

現在：
```css
.btn-back-onsen {
  ...
  border: 1px solid var(--color-primary);
  color: var(--color-primary-light);
  ...
}

.btn-back-onsen:hover {
  background: rgba(212, 132, 90, 0.1);
  color: var(--color-primary);
}
```

変更後：
```css
.btn-back-onsen {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-medium);
}

.btn-back-onsen:hover {
  background: rgba(181, 112, 58, 0.08);
  color: var(--color-primary-dark);
}
```

- [ ] **Step 8: `.tag-highlight` を更新する**

現在：
```css
.tag-highlight {
  background: rgba(212, 132, 90, 0.1);
  color: var(--color-primary);
  border-color: rgba(212, 132, 90, 0.2);
}
```

変更後：
```css
.tag-highlight {
  background: rgba(181, 112, 58, 0.08);
  color: var(--color-primary);
  border-color: rgba(181, 112, 58, 0.18);
}
```

- [ ] **Step 9: ブラウザで確認**

フッターが深茶（`#2a1e14`）、ソーシャルアイコンが薄白、フィルターボタンが白枠で表示されることを確認。`http://localhost:5173/onsen/search?q=草津` で検索してフィルターが正しく表示されることを確認。

- [ ] **Step 10: コミット**

```bash
git add src/style.css
git commit -m "feat: update footer, filter buttons, and utility styles"
```

---

## Task 10: フルビルド検証

**Files:** なし（検証のみ）

- [ ] **Step 1: フルビルドを実行する**

```bash
npm run build
```

期待出力の末尾3行：
```
✓ OGPタグを dist/index.html に注入しました
✓ sitemap.xml を生成しました（749 URLs）
✓ robots.txt を生成しました
```

- [ ] **Step 2: 旧ダーク色の残留がないことを確認する**

```bash
grep -n '#110e0b\|#1a1410\|rgba(17, 14, 11\|rgba(17,14,11\|color-accent\|color-red\|color-spot\|color-gourmet\|color-hotel' src/style.css
```

期待: 出力なし（マッチなし）

- [ ] **Step 3: 琥珀カラー変数が正しく定義されていることを確認する**

```bash
grep -n 'color-primary\|color-bg\|color-border\|color-surface' src/style.css | head -20
```

期待: 全て新しい値（`#ffffff`、`#b5703a`、`#f0e4d4`、`#fdf5ec`）で定義されている

- [ ] **Step 4: 主要ページを全ページタイプで目視確認する**

dev サーバーが停止していれば再起動:
```bash
npm run dev
```

以下のURLを順番に開いて確認：

| URL | 確認ポイント |
|---|---|
| `http://localhost:5173/onsen/` | ヒーロー写真・白ヘッダー・琥珀バッジ・白カード・深茶フッター |
| `http://localhost:5173/onsen/prefectures` | 都道府県チップが琥珀枠、地域カードが白 |
| `http://localhost:5173/onsen/onsens` | 温泉地カード白背景、バッジ琥珀 |
| `http://localhost:5173/onsen/hotels` | 宿カード白背景、横並びレイアウト |
| `http://localhost:5173/onsen/prefecture/hokkaido` | 都道府県ヒーローオーバーレイが茶系、タブが琥珀 |
| `http://localhost:5173/onsen/search?q=草津` | 検索フィルターが白枠、カードが白 |

- [ ] **Step 5: 最終コミット**

```bash
git add src/style.css
git commit -m "feat: complete amber-white design overhaul for Japanese hot springs site"
```
