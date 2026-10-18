/**
 * 全ページを「中身の入った静的HTML」として dist/ に書き出す
 * - 検索エンジンやAIのクローラーがJavaScriptを実行しなくても本文・タイトル・構造化データを読めるようにする
 * - 画面の組み立ては src/pages/*.js をそのまま使う（ブラウザと同じ見た目になる）
 * - sitemap.xml / robots.txt / 404.html もここで作る
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

const { SITE_URL, SITE_NAME } = await import('../src/config.js');
const { route_table, renderNotFoundPage } = await import('../src/routes.js');
const { page_paths } = await import('../src/page_list.js');

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8');
const today = new Date().toISOString().split('T')[0];
const pages = page_paths();

function match_route(pattern, path) {
  const a = pattern.split('/');
  const b = path.split('/');
  if (a.length !== b.length) return null;
  const params = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) params[a[i].slice(1)] = decodeURIComponent(b[i]);
    else if (a[i] !== b[i]) return null;
  }
  return params;
}

// ブラウザの代わりに jsdom を用意し、ページの描画関数がそのまま動くようにする
function setup_dom(path) {
  const dom = new JSDOM(template, { url: SITE_URL + path });
  const w = dom.window;
  w.scrollTo = () => {};
  w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  globalThis.window = w;
  globalThis.document = w.document;
  globalThis.history = w.history;
  globalThis.location = w.location;
  globalThis.IntersectionObserver = w.IntersectionObserver;
  globalThis.HTMLElement = w.HTMLElement;
  globalThis.Node = w.Node;
  return dom;
}

// パンくず（nav.breadcrumb）から BreadcrumbList の構造化データを作る
function breadcrumb_ld(doc) {
  const nav = doc.querySelector('nav.breadcrumb');
  if (!nav) return null;
  const items = [];
  nav.childNodes.forEach(n => {
    if (n.nodeType !== 1 || n.classList.contains('breadcrumb-separator')) return;
    const name = n.textContent.trim();
    if (!name) return;
    const href = n.tagName === 'A' ? n.getAttribute('href') : null;
    items.push({ name, href });
  });
  if (items.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: SITE_URL + (it.href === '/' ? '/' : it.href) } : {}),
    })),
  };
}

function add_ld(doc, data, marker) {
  const s = doc.createElement('script');
  s.type = 'application/ld+json';
  s.setAttribute(marker, '');
  s.textContent = JSON.stringify(data);
  doc.head.appendChild(s);
}

// 描画後の後処理（アニメーション前の非表示状態を解除し、構造化データを足す）
function finalize(doc, path) {
  doc.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('visible'));
  doc.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
    el.style.removeProperty('opacity');
    el.style.removeProperty('transform');
    if (!el.getAttribute('style')) el.removeAttribute('style');
  });
  const bc = breadcrumb_ld(doc);
  if (bc) add_ld(doc, bc, 'data-breadcrumb');
  if (path === '/') {
    add_ld(doc, {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL + '/',
      inLanguage: 'ja',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }, 'data-site');
  }
}

function out_file(path) {
  return path === '/' ? resolve(dist, 'index.html') : resolve(dist, path.slice(1) + '.html');
}

function write_page(dom, file) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, dom.serialize(), 'utf-8');
}

const indexable = [];
let count = 0;
for (const path of pages) {
  const dom = setup_dom(path);
  let done = false;
  for (const r of route_table) {
    const params = match_route(r.path, path);
    if (params) {
      r.handler({ params, query: {} });
      done = true;
      break;
    }
  }
  if (!done) throw new Error(`ルートが見つかりません: ${path}`);
  const doc = dom.window.document;
  finalize(doc, path);
  write_page(dom, out_file(path));
  const robots = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
  if (!robots.includes('noindex')) indexable.push(path);
  count++;
}
console.log(`✓ 静的HTMLを書き出しました（${count} ページ）`);

// 404ページ（Cloudflare Pages は 404.html をステータス404で返す）
{
  const dom = setup_dom('/404');
  renderNotFoundPage();
  write_page(dom, resolve(dist, '404.html'));
  console.log('✓ 404.html を書き出しました');
}

// sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(p => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`✓ sitemap.xml（${indexable.length} URLs）`);

// robots.txt（検索・AIのクローラーとも許可）
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /search\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf-8');
console.log('✓ robots.txt');

process.exit(0);
