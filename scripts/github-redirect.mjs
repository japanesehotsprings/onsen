/**
 * 旧サイト（japanesehotsprings.github.io/onsen/）を新サイトへの転送ページに置き換える
 * - 各ページに canonical（新URL）＋即時リダイレクトを置き、検索の評価を新URLへ引き継ぐ
 * - 一覧にないURL（旧 ?p= 形式・画像など）は 404.html から新サイトの同じパスへ送る
 * GitHub Actions（.github/workflows/deploy.yml）がこれを実行して dist-github/ を公開する
 */
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SITE_URL } from '../src/config.js';
import { page_paths } from '../src/page_list.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '..', 'dist-github');
rmSync(out, { recursive: true, force: true });

function redirect_html(to) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>日本温泉は移転しました</title>
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.hash);</script>
</head>
<body>
<p>日本温泉は <a href="${to}">${to}</a> に移転しました。</p>
</body>
</html>
`;
}

let count = 0;
for (const path of page_paths()) {
  const file = path === '/' ? resolve(out, 'index.html') : resolve(out, path.slice(1) + '.html');
  mkdirSync(dirname(file), { recursive: true });
  // トップは旧SPAの ?p=/xxx 形式のURLも新しいパスへ送る
  if (path === '/') {
    writeFileSync(file, redirect_html(SITE_URL + '/').replace(
      '<script>location.replace(',
      `<script>var p = new URLSearchParams(location.search).get('p'); if (p) { location.replace(${JSON.stringify(SITE_URL)} + p); } else location.replace(`
    ), 'utf-8');
  } else {
    writeFileSync(file, redirect_html(SITE_URL + path), 'utf-8');
  }
  count++;
}

// 一覧にないURLは /onsen を外して新サイトの同じパスへ
writeFileSync(resolve(out, '404.html'), `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><title>日本温泉は移転しました</title>
<meta name="robots" content="noindex">
<script>
var path = location.pathname.replace(/^\\/onsen(?=\\/|$)/, '') || '/';
location.replace(${JSON.stringify(SITE_URL)} + path + location.search + location.hash);
</script></head>
<body><p>日本温泉は <a href="${SITE_URL}/">${SITE_URL}/</a> に移転しました。</p></body></html>
`, 'utf-8');

console.log(`✓ 旧サイト用の転送ページ ${count} 件＋404.html を dist-github/ に書き出しました`);
