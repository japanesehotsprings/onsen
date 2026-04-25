# 温泉診断バナーセクション Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** トップページのヒーローセクション直下に、外部温泉診断アプリへ誘導するCTAバナーセクションを追加する。

**Architecture:** `src/style.css` にバナー用スタイルを追加し、`src/pages/home.js` の `renderHome()` が生成するHTMLにバナーセクションを挿入する。外部リンクは `target="_blank"` で新タブ開き。テストフレームワーク未導入のため、検証はブラウザ目視確認。

**Tech Stack:** Vanilla JS, Vite, CSS カスタムプロパティ（既存トークン流用）

---

### Task 1: バナーのCSSスタイルを追加

**Files:**
- Modify: `src/style.css`（末尾に追記）

- [ ] **Step 1: `src/style.css` の末尾に以下を追記する**

```css
/* ============ 温泉診断バナー ============ */
.diagnosis-banner-section {
  padding: var(--spacing-sm) 0;
}

.diagnosis-banner {
  background: var(--color-bg-alt);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

.diagnosis-banner-body {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.diagnosis-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  line-height: 1;
  flex-shrink: 0;
}

.diagnosis-label {
  display: block;
  font-size: 0.7rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.diagnosis-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-text);
  margin: 0 0 4px;
}

.diagnosis-desc {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin: 0;
}

.diagnosis-btn {
  display: inline-block;
  background: var(--color-primary);
  color: white;
  padding: 10px 22px;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--transition-fast);
  flex-shrink: 0;
}

.diagnosis-btn:hover {
  background: var(--color-primary-dark);
  color: white;
}

@media (max-width: 640px) {
  .diagnosis-banner {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-md);
  }

  .diagnosis-banner-body {
    flex-direction: column;
    text-align: center;
  }

  .diagnosis-btn {
    width: 100%;
    text-align: center;
  }
}
```

- [ ] **Step 2: コミット**

```bash
git add src/style.css
git commit -m "style: 温泉診断バナーセクションのCSSを追加"
```

---

### Task 2: バナーHTMLをトップページに挿入

**Files:**
- Modify: `src/pages/home.js`（`renderHome()` 内のHTML文字列）

- [ ] **Step 1: `src/pages/home.js` を開き、`renderHome()` 内の `app.innerHTML = \`` の直後のHTMLを確認する**

現在の構造:
```
<section class="hero" id="hero">...</section>
<section class="section region-section" id="regions">...</section>
```

- [ ] **Step 2: ヒーローセクションの閉じタグ `</section>` の直後、地域セクション `<section class="section region-section"` の直前に以下のHTMLを挿入する**

挿入位置は `src/pages/home.js` の約89行目付近（`</section>` と `<section class="section region-section"` の間）。

挿入するHTML:
```html

    <section class="section diagnosis-banner-section" id="diagnosis">
      <div class="container">
        <div class="diagnosis-banner">
          <div class="diagnosis-banner-body">
            <div class="diagnosis-icon">♨</div>
            <div class="diagnosis-text">
              <span class="diagnosis-label">温泉診断</span>
              <h2 class="diagnosis-title">あなたに合った温泉スタイルを診断</h2>
              <p class="diagnosis-desc">7問・約1分で、おすすめ温泉地タイプが分かります</p>
            </div>
          </div>
          <a href="https://onsen-diagnosis-app.vercel.app/" target="_blank" rel="noopener noreferrer" class="diagnosis-btn">診断する →</a>
        </div>
      </div>
    </section>
```

- [ ] **Step 3: 開発サーバーを起動して目視確認する**

```bash
npm run dev
```

ブラウザで `http://localhost:5173/onsen/` を開き、以下を確認:
- ヒーローセクションの直下に白地・琥珀ボーダーのバナーが表示される
- 左側に ♨ アイコン・タイトル・説明文が表示される
- 右側に琥珀色の「診断する →」ボタンが表示される
- ボタンクリックで `https://onsen-diagnosis-app.vercel.app/` が新しいタブで開く
- ブラウザ幅を 640px 以下に縮めると縦並びになる

- [ ] **Step 4: コミット**

```bash
git add src/pages/home.js
git commit -m "feat: トップページに温泉診断バナーセクションを追加"
```

---

## 完了チェックリスト

- [ ] PC表示でバナーが左右2カラムで表示される
- [ ] モバイル（640px以下）で縦並びになる
- [ ] 「診断する →」ボタンが新しいタブで診断アプリを開く
- [ ] 既存セクション（地域・温泉地・宿）の表示に影響がない
