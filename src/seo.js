/**
 * ページのSEO関連要素（タイトル、description）を更新するユーティリティ
 */

const baseTitle = '日本温泉';

/**
 * @param {string} title - ページ固有のタイトル。未指定の場合はデフォルトを使用
 * @param {string} description - ページ固有の説明文。未指定の場合はデフォルトを使用
 */
export function updateSEO(title, description) {
  // 1. タイトルの更新
  const newTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} - 全国47都道府県の温泉地を探そう`;
  document.title = newTitle;

  // 2. meta description の更新
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    if (description) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc.setAttribute('content', '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる温泉専門メディア。泉質・地域・特徴から全国の名湯・秘湯を探そう。');
    }
  }

  // 3. OGPタイトルの更新 (必要な場合)
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', newTitle);
  }

  // 4. OGP desc の更新 (必要な場合)
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    if (description) {
      ogDesc.setAttribute('content', description);
    } else {
      ogDesc.setAttribute('content', '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる専門サイト。地域、泉質からお気に入りの温泉を見つけよう。');
    }
  }
}
