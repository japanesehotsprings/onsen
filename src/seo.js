/**
 * ページのSEO関連要素（タイトル、description、canonical、OGP、JSON-LD）を更新するユーティリティ
 * ブラウザでの画面切り替え時と、ビルド時の静的HTML書き出し（scripts/prerender.mjs）の両方で使う
 */
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from './config.js';

const DEFAULT_DESC = '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる温泉専門メディア。泉質・地域・特徴から全国の名湯・秘湯を探そう。';

// head 内の meta / link を取得し、無ければ作る
function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr, key, content) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute('content', content);
}

// 相対パスの画像を絶対URLにする
export function absolute_url(path) {
  if (!path) return SITE_URL + DEFAULT_OG_IMAGE;
  if (/^https?:\/\//.test(path)) return path;
  return SITE_URL + '/' + path.replace(/^\.?\//, '');
}

// 現在のパス（末尾スラッシュ・.html を除いた正規形）
function current_path() {
  let p = window.location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p || '/';
}

/**
 * @param {string} title - ページ固有のタイトル。未指定の場合はデフォルトを使用
 * @param {string} description - ページ固有の説明文。未指定の場合はデフォルトを使用
 * @param {object|object[]} jsonLd - JSON-LD。未指定またはnullの場合は既存のscriptタグを削除
 * @param {object} opts - { image: OGP画像パス, noindex: 検索結果に出さない, type: og:type }
 */
export function updateSEO(title, description, jsonLd = null, opts = {}) {
  const newTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - 全国47都道府県の温泉地を探そう`;
  const desc = description || DEFAULT_DESC;
  const url = SITE_URL + current_path();
  const noindex = opts.noindex || title === 'ページが見つかりません';

  document.title = newTitle;
  setMeta('name', 'description', desc);
  setMeta('name', 'robots', noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large');

  const canonical = upsert('link[rel="canonical"]', () => {
    const l = document.createElement('link');
    l.setAttribute('rel', 'canonical');
    return l;
  });
  canonical.setAttribute('href', url);

  setMeta('property', 'og:title', newTitle);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:type', opts.type || (current_path() === '/' ? 'website' : 'article'));
  setMeta('property', 'og:image', absolute_url(opts.image));
  setMeta('name', 'twitter:image', absolute_url(opts.image));

  // JSON-LD（ページ固有のもの）
  document.head.querySelectorAll('script[type="application/ld+json"][data-seo-detail]').forEach(s => s.remove());
  if (jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-detail', '');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
