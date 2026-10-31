/**
 * 広告表記（ステマ規制への対応）
 * 文言は設計書 docs/superpowers/specs/2026-10-31-home-onsen-bath-salt-design.md 4-4 で決めたもの
 */

// 楽天リンクのあるページの冒頭に出す
export const AD_NOTICE_PAGE = 'このページには広告（楽天アフィリエイト）を含みます';

// サイト全体（フッター）に出す。index.html は静的なので同じ文言を直接書いている
export const AD_NOTICE_SITE = '当サイトはアフィリエイト広告（楽天アフィリエイト・A8.net 等）を利用しています。';

// 枠の見出し横に付ける「PR」
export function pr_label() {
  return '<span class="pr-label">PR</span>';
}
