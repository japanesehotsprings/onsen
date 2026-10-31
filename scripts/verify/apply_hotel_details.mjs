/**
 * 楽天トラベルAPIの取得結果（rakuten_hotel_details.jsonl）から src/data/hotel_details.js を作る
 * 使い方: node scripts/verify/apply_hotel_details.mjs
 *
 * 料金・口コミ点数・効能は載せない（変わりやすい、または掲示基準で裏取りできないため）。
 * インクルーシブの区分は下の INCLUSIVE に宿ごとに書く。宿の掲載文で確認したものと、
 * 楽天の「インクルーシブ」検索にだけ該当するもの（プラン単位）を分けて表現する。
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IN_FILE = resolve(__dirname, 'rakuten_hotel_details.jsonl');
const KW_FILE = resolve(__dirname, 'rakuten_inclusive_keyword.json');
const OUT_FILE = resolve(__dirname, '../../src/data/hotel_details.js');
const FETCHED_AT = '2026-10-31';

// hotels.js は生成物を読み込むので、いったん空にして元データの状態で読む
writeFileSync(OUT_FILE, 'export const hotelDetails = {};\n');
const { hotelList } = await import(resolve(__dirname, '../../src/data/hotels.js'));
const { onsenList } = await import(resolve(__dirname, '../../src/data/onsen.js'));
const { prefectures } = await import(resolve(__dirname, '../../src/data/prefectures.js'));

// 宿の掲載文で確認した区分（2026-10-31）
const FULL = 'オールインクルーシブ';
const DRINK = 'ドリンクインクルーシブ';
const PARTIAL = 'インクルーシブ（一部）';
const INCLUSIVE = {
  'h-hokkaido-5-3': [FULL, 'ラウンジの飲み物や軽食を楽しめるオールインクルーシブの宿です。特典は宿泊プランによって異なります。'],
  'h-miyagi-1-4': [FULL, 'オールインクルーシブスタイルの温泉宿です。'],
  'h-miyagi-2-1': [FULL, 'オールインクルーシブで過ごす、里山の滞在を打ち出す宿です。'],
  'h-miyagi-3-1': [FULL, 'ラウンジでオールインクルーシブを楽しめる宿です。'],
  'h-miyagi-3-2': [FULL, 'オールインクルーシブと湯めぐり、ビュッフェを楽しめる宿です。'],
  'h-miyagi-4-3': [FULL, 'アクティビティやドリンク、スイーツを楽しめるオールインクルーシブの温泉リゾートです。'],
  'h-miyagi-5-6': [FULL, 'オールインクルーシブスタイルの温泉宿です。'],
  'h-ibaraki-1-1': [FULL, 'オールインクルーシブの宿で、バイキングと天然温泉を楽しめます。'],
  'h-gunma-3-2': [FULL, 'オールインクルーシブで温泉滞在を楽しめる宿です。'],
  'h-saitama-3-2': [FULL, '全室オールインクルーシブの大人限定の宿です。'],
  'h-chiba-4-2': [FULL, 'オールインクルーシブのビュッフェを楽しめる宿です。'],
  'h-kanagawa-2-3': [FULL, 'オールインクルーシブの宿で、全室かけ流し温泉と貸切サウナがあります。'],
  'h-yamanashi-2-2': [FULL, '子どもも楽しめる体験型のオールインクルーシブリゾートです。'],
  'h-nagasaki-3-1': [FULL, 'オールインクルーシブの宿で、サウナやスパを楽しめます。'],
  'h-kumamoto-4-2': [FULL, '食べ放題・飲み放題のバイキングを楽しめるオールインクルーシブの宿です。'],
  'h-iwate-3-4': [DRINK, 'ドリンクインクルーシブを打ち出す宿です。対象の飲み物は宿の案内でご確認ください。'],
  'h-fukui-1-2': [DRINK, 'ドリンクインクルーシブを打ち出す宿です。対象の飲み物は宿の案内でご確認ください。'],
  'h-kumamoto-3-3': [DRINK, 'ラウンジやお食事時の飲み物などがインクルーシブの宿です。'],
  'h-tochigi-1-1': [PARTIAL, 'オールインクルーシブの対象は「フォレストヴィラ館」の対象プランです。ほかの館は対象が異なります。'],
  'h-hokkaido-7-6': [PARTIAL, '露天風呂付き特別室の宿泊で、夕食時の飲み物がインクルーシブになります。'],
  'h-fukui-3-1': [PARTIAL, '客室内の冷蔵庫の飲み物がインクルーシブの対象です。'],
};
const KEYWORD_ONLY = ['インクルーシブプラン', '楽天トラベルの検索で「インクルーシブ」に該当する宿です。プランによって内容が異なるため、含まれる範囲は予約時にご確認ください。'];

const BATH_NAMES = { '天然温泉': '天然温泉', '大浴場': '大浴場', '露天風呂': '露天風呂', '家族風呂': '貸切風呂（家族風呂）', 'サウナ': 'サウナ', '水風呂': '水風呂', 'ジャグジー': 'ジャグジー', '岩盤浴': '岩盤浴' };
const FACILITY_NAMES = ['レストラン', 'ラウンジ', 'バー', 'ティーラウンジ', '湯上がりサロン', '夜食コーナー', '居酒屋コーナー', '売店', 'エステサロン', 'マッサージサービス', 'ルームサービス', 'カラオケルーム', '卓球', 'ゲームコーナー', '貸自転車', '屋外プール', 'プール(通年)', 'プール(夏期のみ)', 'スポーツジム', 'フィットネスクラブ', 'コインランドリー(有料)', 'ペット同宿可', '禁煙ルーム', '児童遊園施設'];
const ROOM_NAMES = { 'インターネット接続(無線LAN形式)': 'Wi-Fi', '冷蔵庫': '冷蔵庫', '洗浄機付トイレ': '洗浄機付きトイレ', 'ドライヤー': 'ドライヤー', '浴衣': '浴衣', '金庫': '金庫', '個別空調': '個別空調', 'ハミガキセット': '歯みがきセット', 'シャンプー': 'シャンプー', 'タオル': 'タオル', 'バスタオル': 'バスタオル' };
const BARRIER_NAMES = ['バリアフリールーム', '車椅子利用者用客室あり', 'バリアフリー用トイレ', '館内に車椅子利用可能なトイレあり', '貸出用車椅子', '大浴場浴槽に手すりあり', '大浴場での介助入浴可能', '施設スタッフによる介助・補助対応が可能', 'アレルギーに配慮した料理への対応可能', '高齢者用料理への対応可能', '館内の点字案内', '手話可'];

const clean = s => (s || '').normalize('NFKC').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const items = (list, key = 'item') => (list || []).map(x => x[key]).filter(Boolean);
const uniq = a => [...new Set(a)];

// 宿の紹介文から、期間限定の案内・受賞歴・装飾を除く
const PROMO = /\d+[\/月]\d*|\d{4}年|迄|まで|受賞|アワード|楽天|OPEN|オープン|リニューアル|キャンペーン|フェア|円|%|％|無料|半額|衛生|消毒|クーポン|クチコミ|口コミ|配布|限定プラン|プラン|★認定/i;
function hotel_quote(text) {
  const parts = clean(text).replace(/[★☆◆◇■□●○◎※♪～〜]/g, ' ').split(/[。!！?？\/／|｜【】≪≫《》<>]/).map(s => s.trim()).filter(s => s.length >= 8);
  const kept = parts.filter(s => !PROMO.test(s));
  const joined = kept.join('。');
  return joined.length >= 12 ? `${joined.slice(0, 90)}${joined.length > 90 ? '…' : ''}` : '';
}

function parse_access(text) {
  return clean(text).split(/[\/／]| ?・(?=[A-Z一-龥]{2,}.{0,6}(?:駅|IC|空港))|\n/).map(s => s.trim()).filter(s => s.length >= 4).slice(0, 3);
}

function hotel_type_label(hotel, code) {
  if (/ホテル|hotel|リゾート|resort|ルートイン/i.test(hotel.name)) return 'ホテル';
  return { RYOKAN: '旅館', HOTEL: 'ホテル', PENSION: 'ペンション・民宿' }[code] || '宿';
}

const join_words = a => a.join('・');
const MEAL_NAMES = { '部屋': 'お部屋', 'レストラン(バイキング)': 'レストラン（バイキング）' };
const meal_list = (list, key) => {
  const names = uniq(items(list, key).map(m => MEAL_NAMES[m] || m));
  return names.includes('レストラン（バイキング）') ? names.filter(x => x !== 'レストラン') : names;
};

function build(hotel, row, keyword_nos) {
  const b = row.hotelBasicInfo, d = row.hotelDetailInfo || {}, f = row.hotelFacilitiesInfo || {}, o = row.hotelOtherInfo || {};
  const onsen = onsenList.find(x => x.id === hotel.onsen_id);
  const pref = prefectures.find(p => p.id === hotel.prefecture)?.name || '';
  const place = onsen ? `${pref}の${onsen.name}${hotel.near ? 'の周辺' : ''}` : pref;
  const type = hotel_type_label(hotel, d.hotelClassCode);

  const baths = uniq(items(f.aboutBath, 'bathType').map(x => BATH_NAMES[x]).filter(Boolean));
  const has_onsen = items(f.aboutBath, 'bathType').some(x => x === '温泉' || x === '天然温泉');
  if (has_onsen && !baths.includes('天然温泉')) baths.unshift('温泉');
  const breakfast = meal_list(f.aboutMealPlace, 'breakfastPlace');
  const dinner = meal_list(f.aboutMealPlace, 'dinnerPlace');
  const raw_facilities = items(f.hotelFacilities);
  const facilities = FACILITY_NAMES.filter(x => raw_facilities.includes(x)).map(x => x.replace('(通年)', '（通年）').replace('(夏期のみ)', '（夏期のみ）').replace('(有料)', '（有料）'));
  const room_raw = items(f.roomFacilities);
  const room_items = Object.keys(ROOM_NAMES).filter(k => room_raw.includes(k)).map(k => ROOM_NAMES[k]);
  const barrier_raw = items(f.handicappedFacilities);
  const barrier = BARRIER_NAMES.filter(x => barrier_raw.includes(x));

  const incl = INCLUSIVE[hotel.id] || (keyword_nos[row.hotel_no] ? KEYWORD_ONLY : null);
  const tags = [];
  if (incl) tags.push(incl[0]);
  if (baths.includes('貸切風呂（家族風呂）')) tags.push('貸切風呂');
  if (baths.includes('露天風呂')) tags.push('露天風呂');
  if (baths.includes('サウナ')) tags.push('サウナ');
  if (raw_facilities.includes('送迎バス')) tags.push('送迎あり');
  if (raw_facilities.includes('ペット同宿可')) tags.push('ペット同宿可');
  if (barrier.includes('バリアフリールーム')) tags.push('バリアフリールーム');

  const rooms = f.hotelRoomNum ? `全${f.hotelRoomNum}室の` : '';
  const bath_words = baths.filter(x => !['水風呂', '温泉', '天然温泉'].includes(x)).slice(0, 4);
  const bath_sentence = bath_words.length ? `お風呂は${join_words(bath_words)}があります。` : '';
  const dinner_sentence = dinner.length ? `夕食の場所は${join_words(dinner.slice(0, 3))}です。` : '';
  const description = `${hotel.name}は${place}にある${rooms}${type}です。${incl ? (incl === KEYWORD_ONLY ? 'インクルーシブプランの検索に該当する宿です。' : incl[1]) : ''}${bath_sentence}${dinner_sentence}`;

  return {
    type,
    description,
    tags,
    ...(hotel.address ? {} : { address: `${b.address1}${clean(b.address2)}` }),
    rooms: f.hotelRoomNum || 0,
    quote: hotel_quote(b.hotelSpecial),
    checkin: d.checkinTime || '',
    last_checkin: d.lastCheckinTime || '',
    checkout: d.checkoutTime || '',
    access: parse_access(b.access),
    parking: clean(b.parkingInformation).slice(0, 80),
    shuttle: raw_facilities.includes('送迎バス'),
    baths, breakfast, dinner, facilities, room_items, barrier,
    language: clean(f.linguisticLevel),
    privilege: clean(o.privilege).replace(/,/g, '、').slice(0, 80),
    inclusive: incl ? incl[0] : '',
    inclusive_note: incl ? incl[1] : '',
  };
}

const rows = new Map();
for (const line of readFileSync(IN_FILE, 'utf-8').trim().split('\n')) {
  const r = JSON.parse(line);
  if (r.status === 200) rows.set(r.id, r);
}
const keyword_nos = JSON.parse(readFileSync(KW_FILE, 'utf-8'));

const out = {};
for (const hotel of hotelList) {
  const row = rows.get(hotel.id);
  if (row) out[hotel.id] = build(hotel, row, keyword_nos);
}
const js = `/**
 * 宿の詳細情報（hotels.js の同じ id の宿に足される）
 * 楽天トラベルAPIの掲載情報（${FETCHED_AT} 取得）から scripts/verify/apply_hotel_details.mjs で生成。手で編集しない。
 */
export const HOTEL_DETAILS_FETCHED_AT = '${FETCHED_AT}';
export const hotelDetails = ${JSON.stringify(out)};
`;
writeFileSync(OUT_FILE, js);
console.log(`${Object.keys(out).length} / ${hotelList.length} 件`);
