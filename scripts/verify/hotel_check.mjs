/**
 * じゃらんの宿ページ（宿名・住所）と掲載データを照合し、要確認の宿を一覧にする
 * 使い方: node scripts/verify/hotel_check.mjs <jalan_results.jsonl>
 */
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const { hotelList } = await import(resolve(__dirname, '../../src/data/hotels.js'));
const { onsenList } = await import(resolve(__dirname, '../../src/data/onsen.js'));
const kw = JSON.parse(fs.readFileSync(resolve(__dirname, 'onsen_area_keywords.json'), 'utf-8'));
const rows = fs.readFileSync(process.argv[2], 'utf-8').trim().split('\n').map(l => JSON.parse(l));
const norm = s => (s || '').normalize('NFKC').replace(/\s+/g, '').replace(/[〜~～]/g, '');
let ok = 0;
for (const r of rows) {
  const h = hotelList.find(x => x.id === r.id);
  const o = onsenList.find(x => x.id === h.onsen_id);
  const issues = [];
  if (r.status !== 200 || !r.jname) issues.push(`取得不可(${r.status || r.err})`);
  else {
    const a = norm(h.name), b = norm(r.jname);
    if (!b.includes(a) && !a.includes(b)) issues.push(`宿名違い: じゃらん「${r.jname}」`);
    const keys = kw[h.onsen_id] || [];
    if (!keys.some(k => norm(r.addr).includes(norm(k)))) issues.push(`所在地: ${r.addr}`);
  }
  if (r.flags) issues.push('注記: ' + r.flags.join(' / '));
  if (issues.length) console.log(`${r.id} ${h.name} [${o?.name}] ${issues.join(' | ')}`);
  else ok++;
}
console.log(`--- 一致 ${ok} / ${rows.length}`);
