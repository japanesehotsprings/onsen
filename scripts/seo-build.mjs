import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const BASE_URL = 'https://japanesehotsprings.github.io/onsen';
const today = new Date().toISOString().split('T')[0];

// 1. OGPタグを dist/index.html に注入
const indexPath = resolve(root, 'dist/index.html');
let html = readFileSync(indexPath, 'utf-8');

const ogpTags = `
  <meta property="og:title" content="日本温泉 - 全国47都道府県の温泉地を探そう" />
  <meta property="og:description" content="日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる専門サイト。地域、泉質からお気に入りの温泉を見つけよう。" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${BASE_URL}/" />
  <meta property="og:image" content="${BASE_URL}/ogp.png" />
  <meta property="og:site_name" content="日本温泉" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${BASE_URL}/ogp.png" />`;

html = html.replace(/<meta\s+property="og:[^"]*"[^>]*\/?>\s*/g, '');
html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>\s*/g, '');
html = html.replace('</head>', `${ogpTags}\n</head>`);
writeFileSync(indexPath, html, 'utf-8');
console.log('✓ OGPタグを dist/index.html に注入しました');

// 2. sitemap.xml 生成
const { prefectures } = await import('../src/data/prefectures.js');
const { onsenList } = await import('../src/data/onsen.js');
const { hotelList } = await import('../src/data/hotels.js');

function urlEntry(loc, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
}

const urls = [
  urlEntry(`${BASE_URL}/`, '1.0'),
  urlEntry(`${BASE_URL}/#/prefectures`, '1.0'),
  urlEntry(`${BASE_URL}/#/onsens`, '1.0'),
  urlEntry(`${BASE_URL}/#/hotels`, '1.0'),
  ...prefectures.map(p => urlEntry(`${BASE_URL}/#/prefecture/${p.id}`, '0.8')),
  ...onsenList.map(o => urlEntry(`${BASE_URL}/#/onsen/${o.id}`, '0.7')),
  ...hotelList.map(h => urlEntry(`${BASE_URL}/#/hotel/${h.id}`, '0.6')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap, 'utf-8');
console.log(`✓ sitemap.xml を生成しました（${urls.length} URLs）`);

// 3. robots.txt 生成
const robots = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;

writeFileSync(resolve(root, 'dist/robots.txt'), robots, 'utf-8');
console.log('✓ robots.txt を生成しました');
