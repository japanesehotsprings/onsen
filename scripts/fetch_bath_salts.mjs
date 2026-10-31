/**
 * 入浴剤コーナーの商品画像・アフィリエイトURLを楽天APIから取って、src/data/bath_salts_resolved.js に書き出す
 * 使い方: node --env-file-if-exists=.env scripts/fetch_bath_salts.mjs（npm run build の最初に自動で走る）
 *
 * - キー（.env の RAKUTEN_APP_ID / RAKUTEN_ACCESS_KEY / RAKUTEN_AFFILIATE_ID）のどれかがなければ取得を飛ばし、前回の結果を使う
 * - APIが落ちていても止めない。その商品は前回の結果を使う
 * - 出品の候補（rakuten_item_codes）を上から順に引き、最初に買えるものを使う。全部だめなら null（ページに出さない）
 * - キーの値はログにもファイルにも出さない
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = resolve(__dirname, '../src/data/bath_salts_resolved.js');
const API_URL = 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701';
const ORIGIN = 'https://japan-onsen-web.pages.dev';
const WAIT_MS = 1100; // 1秒に1回まで（登録した予想QPS=1）

const sleep = ms => new Promise(r => setTimeout(r, ms));
const today = () => new Date().toISOString().slice(0, 10);

// 商品1件を解決する。fetch_item(item_code) は楽天の商品（なければ null）を返す
export async function resolve_salt(salt, fetch_item, previous = null) {
  try {
    for (const code of salt.rakuten_item_codes) {
      const item = await fetch_item(code);
      if (!item || item.availability === 0) continue;
      const image = (item.mediumImageUrls || [])[0] || '';
      return {
        item_code: item.itemCode,
        image_url: image.replace('_ex=128x128', '_ex=300x300'),
        affiliate_url: item.affiliateUrl || item.itemUrl,
        fetched_at: today(),
      };
    }
    return null;
  } catch (e) {
    console.warn(`  ! ${salt.id}: 取得に失敗したため前回の結果を使います（${e.message}）`);
    return previous;
  }
}

// 楽天APIを1回呼ぶ（keyword か itemCode）
async function call_api(params) {
  const q = new URLSearchParams({
    format: 'json', formatVersion: '2', hits: '5',
    applicationId: process.env.RAKUTEN_APP_ID,
    affiliateId: process.env.RAKUTEN_AFFILIATE_ID,
    ...params,
  });
  await sleep(WAIT_MS);
  const res = await fetch(`${API_URL}?${q}`, {
    headers: { accessKey: process.env.RAKUTEN_ACCESS_KEY, Origin: ORIGIN },
  });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const j = await res.json();
  return j.Items || [];
}

async function fetch_by_code(code) {
  const items = await call_api({ itemCode: code, hits: '1' });
  return items.find(i => i.itemCode === code) || null;
}

async function load_previous() {
  try {
    const { bathSaltResolved } = await import(OUT_FILE + `?t=${Date.now()}`);
    return bathSaltResolved || {};
  } catch {
    return {};
  }
}

function render_file(resolved) {
  const sorted = Object.fromEntries(Object.keys(resolved).sort().map(k => [k, resolved[k]]));
  return `/**
 * 自動生成ファイル（scripts/fetch_bath_salts.mjs が書き出す）。手で直さない
 * 入浴剤 id → 楽天の出品（画像・アフィリエイトURL）。null は候補が全部見つからない＝ページに出さない
 */
export const bathSaltResolved = ${JSON.stringify(sorted, null, 2)};
`;
}

async function main() {
  // アフィリエイトIDがないと成果の付かない普通のURLに置き換わるので、IDなしでも取得しない
  if (!process.env.RAKUTEN_APP_ID || !process.env.RAKUTEN_ACCESS_KEY || !process.env.RAKUTEN_AFFILIATE_ID) {
    console.log('楽天APIのキーがないため取得を飛ばしました（前回の結果を使います）');
    return;
  }
  const { bathSaltList } = await import('../src/data/bath_salts.js');
  const previous = await load_previous();
  const next = {};
  const missing = [];
  for (const salt of bathSaltList) {
    const prev = previous[salt.id] ?? null;
    let r = await resolve_salt(salt, fetch_by_code, prev);
    // 中身が前回と同じなら日付も前回のまま（毎日ファイルが変わらないように）
    if (r && prev && r.item_code === prev.item_code && r.image_url === prev.image_url && r.affiliate_url === prev.affiliate_url) r = prev;
    next[salt.id] = r;
    if (r) continue;
    missing.push(salt.id);
    // 全候補がだめなら、JANで探した出品を差し替え候補としてログに出す（データは書き換えない）
    if (salt.jan) {
      try {
        const alt = (await call_api({ keyword: salt.jan })).filter(i => i.availability !== 0).slice(0, 3);
        if (alt.length) console.log(`  差し替え候補 ${salt.id}: ${alt.map(i => i.itemCode).join(' / ')}`);
      } catch (e) {
        console.warn(`  ! ${salt.id}: JANでの検索に失敗しました（${e.message}）`);
      }
    }
  }
  const text = render_file(next);
  let before = '';
  try { before = readFileSync(OUT_FILE, 'utf-8'); } catch {}
  if (text !== before) writeFileSync(OUT_FILE, text, 'utf-8');
  const found = Object.values(next).filter(Boolean).length;
  console.log(`✓ 楽天API: 取得 ${found}件／見つからない ${missing.length}件${missing.length ? `（${missing.join(', ')}）` : ''}`);
}

if (import.meta.main) await main();
