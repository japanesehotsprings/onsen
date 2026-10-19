/**
 * 宿データ（src/data/hotels.js）を、じゃらんの宿ページで確認した宿名・住所にもとづいて作り直す
 * - 入力: jalan_results.jsonl（取得結果）と hotel_decisions.json（要確認の宿の判断）
 * - 残す項目: 宿名・温泉地・所在地・画像・予約リンク
 * - 外す項目: 料金の目安・種類・紹介文・タグ・設備・食事（裏取りできないため）
 * 使い方: node scripts/verify/apply_hotels.mjs <jalan_results.jsonl...>
 */
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const data_path = resolve(__dirname, '../../src/data/hotels.js');
const { hotelList } = await import(data_path + '?t=' + Date.now());
const { onsenList } = await import(resolve(__dirname, '../../src/data/onsen.js'));
const decisions = JSON.parse(fs.readFileSync(resolve(__dirname, 'hotel_decisions.json'), 'utf-8'));

const jalan = {};
for (const f of process.argv.slice(2)) {
  for (const l of fs.readFileSync(f, 'utf-8').trim().split('\n')) {
    const r = JSON.parse(l);
    jalan[r.id] = r;
  }
}

// 住所から「◯◯市」「◯◯郡◯◯町」までを取り出す
function municipality(addr) {
  const m = (addr || '').match(/^(.+?[都道府県])(.+?郡.+?[町村]|.+?市|.+?[町村])/);
  return m ? m[2] : '';
}

const out = [];
let removed = 0;
const redirects = [];
for (const h of hotelList) {
  const d = decisions[h.id] || {};
  if (d.action === 'remove') { removed++; redirects.push(`/hotel/${h.id} /onsen/${h.onsen_id} 301`); continue; }
  const j = jalan[h.id] || {};
  const onsen_id = d.onsen_id || h.onsen_id;
  const onsen = onsenList.find(o => o.id === onsen_id);
  const address = d.address ?? (j.addr ? j.addr.normalize('NFKC') : '');
  const near = d.action === 'near';
  const city = municipality(address);
  const description = near
    ? `${onsen.name}の周辺${city ? `（${city}）` : ''}にある宿。`
    : `${onsen.name}${city ? `（${city}）` : ''}にある宿。`;
  out.push({
    id: h.id,
    onsen_id,
    name: d.name || h.name,
    prefecture: onsen.prefecture,
    type: '',
    description,
    price: '',
    image: h.image,
    tags: [],
    address,
    ...(near ? { near: true } : {}),
    ...(d.notice ? { notice: d.notice } : {}),
    bookingUrls: { ...h.bookingUrls, ...(d.drop_jalan ? { jalan: '' } : {}), ...(d.drop_rakuten ? { rakuten: '' } : {}) },
  });
}

const src = fs.readFileSync(data_path, 'utf-8');
const fn_at = src.indexOf('export function getPopularHotels');
const tail = src.slice(src.lastIndexOf('/**', fn_at));
const head = `/**
 * 温泉宿データ
 * 宿名と所在地はじゃらんの宿ページ（または検索）で確認したもの（2026-10-19 点検）。
 * 料金・種類・紹介文・設備などの裏取りできない項目は載せない。near: true は温泉地の周辺にある宿。
 * 作り直し: node scripts/verify/apply_hotels.mjs <じゃらん取得結果.jsonl>
 */

`;
fs.writeFileSync(data_path, head + 'export const hotelList = ' + JSON.stringify(out, null, 4).replace(/"(\w+)":/g, '$1:') + ';\n\n' + tail);
// 掲載から外した宿のURLは温泉地ページへ転送する（既存の転送に追記）
const red_path = resolve(__dirname, '../../public/_redirects');
const existing = fs.existsSync(red_path) ? fs.readFileSync(red_path, 'utf-8').split('\n').filter(Boolean) : [];
const merged = [...new Set([...existing, ...redirects])];
fs.writeFileSync(red_path, '# 掲載から外した宿のページ → 温泉地ページ\n' + merged.filter(l => !l.startsWith('#')).join('\n') + '\n');
console.log(`✓ 宿 ${out.length}件（削除 ${removed}件・周辺 ${out.filter(h => h.near).length}件）`);
