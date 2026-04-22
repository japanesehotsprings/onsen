/**
 * ページのSEO関連要素（タイトル、description）を更新するユーティリティ
 */

const baseTitle = '日本温泉';

/**
 * @param {string} title - ページ固有のタイトル。未指定の場合はデフォルトを使用
 * @param {string} description - ページ固有の説明文。未指定の場合はデフォルトを使用
 * @param {object} jsonLd - JSON-LD structured data。未指定またはnullの場合は既存のscriptタグを削除
 */
export function updateSEO(title, description, jsonLd = null) {
  // 1. タイトルの更新
  const newTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} - 全国47都道府県の温泉地を探そう`;
  document.title = newTitle;

  // 2. meta description の更新
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description || '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる温泉専門メディア。泉質・地域・特徴から全国の名湯・秘湯を探そう。');
  }

  // 3. OGPタイトルの更新 (必要な場合)
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', newTitle);
  }

  // 4. OGP desc の更新 (必要な場合)
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description || '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる専門サイト。地域、泉質からお気に入りの温泉を見つけよう。');
  }

  // 5. JSON-LD structured data の更新
  const existing = document.querySelector('script[type="application/ld+json"][data-seo-detail]');
  if (existing) existing.remove();

  if (jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-detail', '');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
