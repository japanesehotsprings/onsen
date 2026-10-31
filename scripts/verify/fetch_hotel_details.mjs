/**
 * 掲載中の宿の詳細を楽天トラベルAPI（HotelDetailSearch）から取り、rakuten_hotel_details.jsonl に書き出す
 * 使い方: node --env-file=.env scripts/verify/fetch_hotel_details.mjs [--retry-missing]
 *
 * - 宿番号は rakuten_results.jsonl（予約リンクの転送先）から取る
 * - 取得済みの宿は飛ばすので、途中で止まっても続きから走る
 * - キーの値はログにもファイルにも出さない
 */
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IN_FILE = resolve(__dirname, 'rakuten_results.jsonl');
const OUT_FILE = resolve(__dirname, 'rakuten_hotel_details.jsonl');
const API_URL = 'https://openapi.rakuten.co.jp/engine/api/Travel/HotelDetailSearch/20170426';
const ORIGIN = 'https://japan-onsen-web.pages.dev';
const WAIT_MS = 1100; // 1秒に1回まで

const sleep = ms => new Promise(r => setTimeout(r, ms));
const read_jsonl = f => readFileSync(f, 'utf-8').trim().split('\n').map(l => JSON.parse(l));

// 予約リンクの転送先URLから宿番号を取り出す
function hotel_no_of(row) {
  const m = (row.final || '').match(/\/(?:HOTEL|hinfo|hotelinfo\/plan)\/(\d+)/);
  return m ? m[1] : null;
}

async function fetch_detail(hotel_no) {
  const q = new URLSearchParams({
    format: 'json', formatVersion: '2', hotelNo: hotel_no, responseType: 'large',
    applicationId: process.env.RAKUTEN_APP_ID,
    accessKey: process.env.RAKUTEN_ACCESS_KEY,
  });
  const res = await fetch(`${API_URL}?${q}`, {
    headers: { accessKey: process.env.RAKUTEN_ACCESS_KEY, Origin: ORIGIN, Referer: `${ORIGIN}/` },
  });
  if (res.status === 404) return { status: 404 };
  if (!res.ok) return { status: res.status };
  const j = await res.json();
  // 配列の配列で返るので1つにまとめる
  const merged = Object.assign({}, ...(j.hotels?.[0] || []));
  return { status: 200, ...merged };
}

const done = new Set(existsSync(OUT_FILE) ? read_jsonl(OUT_FILE).filter(r => r.status === 200).map(r => r.id) : []);
const rows = read_jsonl(IN_FILE).filter(r => !done.has(r.id));
console.log(`対象 ${rows.length} 件`);
let n = 0;
for (const row of rows) {
  const no = hotel_no_of(row);
  if (!no) { console.log(`宿番号なし: ${row.id}`); continue; }
  await sleep(WAIT_MS);
  let detail;
  try { detail = await fetch_detail(no); } catch (e) { detail = { status: 0, err: e.message }; }
  appendFileSync(OUT_FILE, JSON.stringify({ id: row.id, hotel_no: no, ...detail }) + '\n');
  if (++n % 50 === 0) console.log(`${n} 件`);
}
console.log('完了');
