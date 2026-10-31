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
const PROMO = /\d+[\/月]\d*|\d{4}年|迄|まで|受賞|アワード|楽天|OPEN|オープン|リニューアル|キャンペーン|フェア|円|%|％|無料|半額|衛生|消毒|効果|効能|美白|クーポン|クチコミ|口コミ|配布|限定プラン|プラン|★認定/i;
function hotel_quote(text) {
  const parts = clean(text).replace(/[★☆◆◇■□●○◎※♪～〜]/g, ' ').split(/[。!！?？\/／|｜【】≪≫《》<>]/).map(s => s.trim()).filter(s => s.length >= 8);
  // 文の途中で切れた断片（助詞で始まる・句読点で終わる）も除く
  const kept = parts.filter(s => !PROMO.test(s) && !/^[のをにがはでと、,:]/.test(s)).map(s => s.replace(/^[・\s]+/, '').replace(/[、,:\s]+$/, ''));
  let joined = '';
  for (const part of kept) {
    if ((joined + part).length > 80) break;
    joined += (joined ? '。' : '') + part;
  }
  return joined.length >= 12 ? joined : '';
}

// 宿の掲載文に書かれている特徴。上から順に2つまで使う（s=文、m=名詞の前に置く形）
const FEATURES = [
  [/全(?:客)?室.{0,14}露天|全室に?.{0,8}半露天/, { s: '全室に露天風呂が付いていて、部屋にいながら湯を楽しめます。', m: '全室に露天風呂が付いた' }],
  [/全(?:客)?室.{0,6}源泉/, { s: '全室で源泉かけ流しの湯を楽しめます。', m: '全室で源泉かけ流しの湯を楽しめる' }],
  [/全室(?:が)?離れ|離れ(?:宿|の客室|\d+室)/, { s: '離れの客室で、周りを気にせず過ごせます。', m: '離れの客室で過ごす' }],
  [/登録有形|文化財/, { s: '文化財にも登録された建物に泊まれるのが、この宿ならではの魅力です。', m: '文化財の建物に泊まれる' }],
  [/オーシャン|海を(?:望|一望|眺)|海一望|波打ち際|海辺|海まで|全室海側/, { s: '海がすぐそばにあり、景色も楽しみのひとつです。', m: '海の景色を楽しめる' }],
  [/湖畔|湖を(?:望|一望|眺)|湖一望|湖のほとり/, { s: '湖のほとりの景色も、この宿の楽しみです。', m: '湖の景色を楽しめる' }],
  [/渓流|川沿い|清流|せせらぎ|渓谷/, { s: '川や渓谷のそばにあり、水の音を感じながら過ごせます。', m: '川のそばで過ごす' }],
  [/森の|高原|ブナ林|大自然/, { s: '自然に囲まれた環境で、静かな時間を過ごせます。', m: '自然に囲まれた' }],
  [/自家源泉/, { s: '自家源泉を持つのも特徴です。', m: '自家源泉を持つ' }],
  [/源泉.{0,3}(?:かけ|掛)/, { s: '源泉かけ流しの湯が自慢の宿です。', m: '源泉かけ流しの湯を楽しめる' }],
  [/老舗|創業/, { s: '長い歴史を持つ宿で、年月を重ねた雰囲気も魅力です。', m: '長い歴史を持つ' }],
  [/露天風呂付/, { s: '露天風呂付きの客室もあり、部屋で湯を楽しむ滞在もできます。', m: '露天風呂付きの客室がある' }],
  [/かに料理|蟹|カニ/, { s: 'かに料理も楽しみのひとつです。', m: 'かに料理を楽しめる' }],
  [/海鮮|海の幸|魚介|地魚/, { s: '海の幸を使った料理が楽しみのひとつです。', m: '海の幸を味わえる' }],
  [/和牛|米沢牛|飛騨牛|山形牛|佐賀牛/, { s: '地元の牛肉を使った料理も楽しみのひとつです。', m: '地元の牛肉を味わえる' }],
  [/会席|懐石|料理自慢|料理宿|美食/, { s: '料理に力を入れていて、食事を目当てに選ぶのも良さそうです。', m: '料理に力を入れた' }],
  [/絶景|眺望|一望/, { s: '眺めの良さも、この宿の魅力です。', m: '眺めの良さが魅力の' }],
];

function hotel_features(text) {
  const t = clean(text);
  return FEATURES.filter(([re]) => re.test(t)).map(([, f]) => f);
}

function scale_phrase(rooms, type) {
  if (!rooms) return type;
  if (rooms <= 15) return `全${rooms}室の小さな${type === '旅館' ? '宿' : type}`;
  if (rooms >= 150) return `全${rooms}室の大きな${type}`;
  return `全${rooms}室の${type}`;
}

function bath_sentence(baths) {
  const others = ['露天風呂', '大浴場', 'サウナ', 'ジャグジー', '岩盤浴'].filter(x => baths.includes(x));
  const private_bath = baths.includes('貸切風呂（家族風呂）');
  if (private_bath) return others.length ? `お風呂は${others.slice(0, 3).join('、')}に加えて貸切風呂もあり、家族や二人だけで湯に浸かれます。` : '貸切風呂があり、家族や二人だけで湯に浸かれます。';
  return others.length ? `お風呂は${others.slice(0, 3).join('、')}を楽しめます。` : '';
}

function meal_sentence(dinner) {
  if (dinner.includes('お部屋')) return '夕食はお部屋でゆっくり味わえるプランもあります。';
  if (dinner.includes('個室')) return '夕食は個室で落ち着いて味わえるプランもあります。';
  if (dinner.includes('レストラン（バイキング）')) return '夕食は好きなものを選べるバイキングがあります。';
  const places = dinner.filter(x => x !== 'コンベンションホール');
  return places.length ? `夕食は${places.slice(0, 2).join('や')}でいただきます。` : '';
}

function facility_sentence(raw) {
  const names = { '湯上がりサロン': '湯上がりサロン', 'ラウンジ': 'ラウンジ', 'バー': 'バー', '夜食コーナー': '夜食コーナー', 'エステサロン': 'エステ', '屋外プール': 'プール', 'プール(通年)': 'プール', '卓球': '卓球', '貸自転車': '貸自転車' };
  const found = uniq(Object.keys(names).filter(k => raw.includes(k)).map(k => names[k]));
  return found.length ? `館内には${found.slice(0, 3).join('、')}もあり、館内での時間も楽しめます。` : '';
}

// 駅から歩ける宿は、車がなくても行けることを伝える
function access_sentence(access, shuttle) {
  const m = clean(access).match(/([^\s、。,・/「」]{1,12}駅)[^。、/]{0,8}?徒歩(?:で)?約?(\d+)分/);
  if (m && Number(m[2]) <= 15) return `${m[1].split(/線|:|『|分|から|より|\(|】|★|◆|電鉄|私鉄|電車は|バス|終点/).pop().replace(/^JR/, '')}から徒歩${m[2]}分と、車がなくても行きやすい立地です。`;
  return shuttle ? '送迎バスもあります（条件は宿にご確認ください）。' : '';
}

function suits_sentence(baths, dinner, raw, barrier, rooms, text) {
  if (/大人(?:限定|専用|の|だけ)/.test(text)) return '大人だけで静かに過ごしたい旅に向いています。';
  if (/お子様|キッズ|ファミリー|赤ちゃん/.test(text) || raw.some(x => /プール|ゲームコーナー|児童遊園/.test(x))) return '家族旅行にも向いています。';
  if (barrier.includes('バリアフリールーム')) return '親子三世代の旅行にも選びやすい宿です。';
  if (rooms && rooms <= 15) return '少ない部屋数で、落ち着いて過ごしたい旅に向いています。';
  if (dinner.includes('お部屋') || dinner.includes('個室')) return '二人旅や記念日の旅行にも向いています。';
  return '';
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
  const bath_short = bath_words.length ? `お風呂は${join_words(bath_words)}があります。` : '';
  const dinner_sentence = dinner.length ? `夕食の場所は${join_words(dinner.slice(0, 3))}です。` : '';
  const description = `${hotel.name}は${place}にある${rooms}${type}です。${incl ? (incl === KEYWORD_ONLY ? 'インクルーシブプランの検索に該当する宿です。' : incl[1]) : ''}${bath_short}${dinner_sentence}`;

  // 要点の説明文。掲載文の特徴＋お風呂＋食事＋館内＋行きやすさ＋向いている旅の順
  const features = hotel_features(`${b.hotelSpecial} ${b.hotelName}`);
  const quote = hotel_quote(b.hotelSpecial);
  const intro = [
    `${hotel.name}は、${place}にある${scale_phrase(f.hotelRoomNum, type)}です。`,
    incl ? (incl === KEYWORD_ONLY ? 'インクルーシブのプランが見つかる宿です（含まれる範囲は予約時にご確認ください）。' : incl[1]) : '',
    ...features.slice(0, 2).map(x => x.s),
    bath_sentence(baths),
    meal_sentence(dinner),
    facility_sentence(raw_facilities),
    access_sentence(b.access, raw_facilities.includes('送迎バス')),
    suits_sentence(baths, dinner, raw_facilities, barrier, f.hotelRoomNum, clean(b.hotelSpecial)),
  ].join('');
  // 掲載文から一言が作れない宿は、特徴から一言を作る（出典表記は付けない）
  const tagline = quote || `${features[0]?.m || (baths.includes('貸切風呂（家族風呂）') ? '貸切風呂で湯に浸かれる' : '湯と食事を楽しむ')}、${onsen?.name || pref}の${type === '旅館' ? '宿' : type}`;

  return {
    indexable: true, // 詳細情報を足した宿は検索に出す（2026-10-31 CEO判断）
    type,
    description,
    tags,
    ...(hotel.address ? {} : { address: `${b.address1}${clean(b.address2)}` }),
    rooms: f.hotelRoomNum || 0,
    intro,
    tagline,
    tagline_is_quote: Boolean(quote),
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
