# デザインリニューアル Implementation Spec

## Goal

現行の「湯けむり和モダンダーク」（黒背景 `#110e0b`）から「ナチュラル湯 × ミニマル湯気」リミックスへ刷新する。白背景・琥珀アクセント・温かみのある余白重視デザイン。

---

## Design Direction

**コンセプト:** ナチュラル湯（B）× ミニマル湯気（C）リミックス

- 白背景ベース。ダークモードは廃止。
- 琥珀（湯の色・温泉石）をメインアクセントに据える。
- Noto Serif JP の見出しで温泉らしい格調を維持しつつ、余白とシャドウで現代的な軽さを出す。
- ヒーローは写真背景（`/top.png`）を維持。オーバーレイを従来の黒から茶系ウォームトーンに変更。

---

## Color Palette

| Variable | Value | 用途 |
|---|---|---|
| `--color-bg` | `#ffffff` | ページ背景 |
| `--color-bg-alt` | `#fffcf7` | セクション交互背景（ごく薄い温泉乳白） |
| `--color-bg-footer` | `#2a1e14` | フッター背景（深茶） |
| `--color-surface` | `#fdf5ec` | タグ・チップ背景 |
| `--color-surface-hover` | `#f5e8d4` | ホバー面 |
| `--color-border` | `#f0e4d4` | カード・入力枠ボーダー |
| `--color-border-hover` | `#d4a87a` | ホバー時ボーダー |
| `--color-primary` | `#b5703a` | 琥珀アクセント（ボタン・バッジ・ラベル） |
| `--color-primary-light` | `#d4956a` | 琥珀ライト |
| `--color-primary-dark` | `#8a4f24` | 琥珀ダーク |
| `--color-text` | `#1a1a1a` | 本文・見出し |
| `--color-text-muted` | `#6b5c50` | サブテキスト |
| `--color-text-dim` | `#a89080` | プレースホルダー・補足 |

**削除:** `--color-accent`（青緑）、`--color-red`、ダークサーフェス系変数すべて

---

## Typography

変更なし（フォント自体は維持）:
- 見出し: `'Noto Serif JP', serif`
- 本文: `'Noto Sans JP', sans-serif`

---

## Header

- 常時白背景 `#ffffff`
- ボーダー: `border-bottom: 1px solid #f0e4d4`（琥珀薄め）
- スクロール後 `.scrolled` クラス: `box-shadow: 0 2px 16px rgba(181,112,58,0.1)` のみ追加（背景色変更なし）
- ロゴ `♨` は `--color-primary`
- ヘッダー検索: `background: #fdf9f5`、`border: 1.5px solid #e8d8c4`
- 検索ボタン: `background: #b5703a`
- ナビリンク: `color: #6b5c50` → hover `#b5703a`
- モバイルメニュー: 白背景 `#ffffff`（黒背景から変更）

---

## Hero Section

- 背景: `/top.png` center/cover（変更なし）
- オーバーレイ: `linear-gradient(160deg, rgba(30,15,5,0.72) 0%, rgba(30,15,5,0.45) 50%, rgba(30,15,5,0.72) 100%)`（従来の `rgba(17,14,11,0.88)` より薄め・茶みがかった色）
- eyebrow ラベル: `border: 1px solid rgba(244,200,130,0.5); color: rgba(244,200,130,0.9)`
- `h1` メインコピー: white、サブカラー `#f4c882`（琥珀ゴールド）
- 検索バー: `background: rgba(255,255,255,0.97)`、`box-shadow: 0 6px 30px rgba(0,0,0,0.25)`
- 検索ボタン: `background: #b5703a; color: #fff; border-radius: 40px`
- ヒーロータグ: `border: 1px solid rgba(244,200,130,0.45); color: rgba(244,200,130,0.85)`
- ホバー: `background: rgba(244,200,130,0.15)`

---

## Cards（温泉地・温泉宿共通）

```
background: #ffffff
border: 1px solid #f0e4d4
border-radius: 10px
box-shadow: none（通常時）
transition: all 0.25s
```

ホバー:
```
transform: translateY(-4px)
box-shadow: 0 10px 32px rgba(181,112,58,0.14)
border-color: #d4a87a
```

カード内:
- `card-prefecture` / `card-pref`: `color: #b5703a`（琥珀）
- `spring-type-badge`: `color: #9a8070`（落ち着いたベージュグレー。従来の青緑から変更）
- `card-title`: Noto Serif JP
- `card-desc`: `color: #7a6a60`
- タグ: `background: #fdf5ec; border: 1px solid #f0dfc8; color: #9a7055`

### カードバッジ（.card-badge）

全種類を琥珀系に統一:
```
background: rgba(181,112,58,0.88)
color: #ffffff
```
onsen/hotel/spot の色分けは廃止。バッジ内テキスト（名湯・秘湯・旅館など）で区別する。

### 宿泊件数バッジ（.hotel-count-badge）

```
background: rgba(255,255,255,0.92)
color: #b5703a
border: 1px solid rgba(181,112,58,0.3)
```

---

## Section Backgrounds

奇数セクション（人気温泉地・都道府県）: `#ffffff`
偶数セクション（おすすめ温泉宿）: `#fffcf7`

セクションタイトル下線:
```
background: #b5703a
width: 36px; height: 2px
```

---

## Search / Filter

検索ページ `.search-box`:
```
background: #fff
border: 1.5px solid #e8d8c4
```

フィルターボタン `.filter-btn`:
```
color: #6b5c50
background: #fff
border: 1.5px solid #f0e4d4
```
active:
```
background: #fdf5ec
border-color: #b5703a
color: #b5703a
```

---

## Prefecture Chips（都道府県チップ）

```
padding: 8px 18px
background: #fff
border: 1.5px solid #f0e4d4
border-radius: 8px
color: #4a3828
font-weight: 500
```

ホバー:
```
background: #fdf5ec
border-color: #b5703a
color: #b5703a
```

---

## Page Header（内部ページ共通）

`.page-header`:
```
background: #fffcf7
border-bottom: 1px solid #f0e4d4
```

---

## Prefecture / Onsen Hero（詳細ページ）

オーバーレイ:
```
background: linear-gradient(to top, rgba(20,10,3,0.92) 0%, rgba(20,10,3,0.3) 60%)
```
（従来の `rgba(15,25,35,...)` 青みがかりを茶系に変更）

---

## Hotel Detail

`.hotel-detail-hero-overlay`:
```
background: linear-gradient(to bottom, rgba(20,10,3,0.3) 0%, rgba(20,10,3,0.6) 50%, rgba(20,10,3,0.95) 100%)
```

`.hotel-detail-info-section`:
```
background: #ffffff
```

カード類 (`.hotel-detail-card`, `.booking-card`):
```
background: #ffffff
border: 1px solid #f0e4d4
```

---

## Mobile Menu

```css
.nav-links {
  background: #ffffff;   /* 従来: rgba(17,14,11,0.97) */
  border-right: 1px solid #f0e4d4;
}
.nav-links a {
  color: #1a1a1a;
  font-size: 1.2rem;
}
```

---

## Footer

```
background: #2a1e14（深茶）
color: rgba(255,255,255,0.5)
```

ロゴ: `color: #f4e0c0`、`♨`: `#b5703a`
リンク hover: `#b5703a`

---

## Scrollbar

```css
::-webkit-scrollbar-track { background: #f7f3ee; }
::-webkit-scrollbar-thumb { background: #e0d0c0; }
::-webkit-scrollbar-thumb:hover { background: #b5703a; }
```

---

## What Does NOT Change

- レイアウト構造（グリッド・フレックスボックス）
- フォント種類・スペーシング変数
- アニメーション（fadeInUp、animate-on-scroll）
- レスポンシブブレークポイント
- コンポーネント構造（ヘッダー検索・フィルター・タブ等）
- JS ロジック一切

---

## Files

| ファイル | 変更 |
|---|---|
| `src/style.css` | CSS変数・セレクタの色値を全面更新（1ファイルのみ） |

HTML・JS・データファイルは変更なし。
