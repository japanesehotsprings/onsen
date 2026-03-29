#!/usr/bin/env node
/**
 * 温泉宿データ生成ツール（手動入力版）
 *
 * 使い方:
 *   1. node tools/generate-hotel.js
 *   2. 質問に答えると hotels.js にペーストできる形式で出力される
 */

import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = q => new Promise(resolve => rl.question(q, resolve));

// ===== アフィリエイトURL生成 =====
// ※ a8mat部分はアカウント固有の値。変更する場合は下記3行を更新
const A8_JALAN  = '3N8796+1GE6SA+14CS+BW8O2';
const A8_IKYU   = '3N8796+1KK80Q+1OK+BW0YB';
const A8_YAHOO  = '4AZ9C4+7JHPEI+4ZCO+BW0YB';

function jalanUrl(hotelId) {
  const dest = encodeURIComponent(`https://www.jalan.net/yad${hotelId}/`);
  return `https://px.a8.net/svt/ejp?a8mat=${A8_JALAN}&a8ejpredirect=${dest}`;
}

function ikyuUrl(hotelId) {
  const inner = encodeURIComponent(`https://www.ikyu.com/${hotelId}/`);
  const dest = encodeURIComponent(`https://www.ikyu.com/ikCo.ashx?cosid=a8ikyu&surl=${inner}`);
  return `https://px.a8.net/svt/ejp?a8mat=${A8_IKYU}&a8ejpredirect=${dest}`;
}

function yahooUrl(hotelId) {
  const inner = encodeURIComponent(`https://travel.yahoo.co.jp/${hotelId}/`);
  const dest = encodeURIComponent(`https://travel.yahoo.co.jp/ikCo.ashx?cosid=y_a8net&surl=${inner}`);
  return `https://px.a8.net/svt/ejp?a8mat=${A8_YAHOO}&a8ejpredirect=${dest}`;
}

// ===== 説明文・タグを手動入力 =====
async function inputDescriptionAndTags() {
  console.log('\n📝 説明文・タグを手動で入力してください');
  console.log('  description: 60〜80文字。体言止め or「〜が魅力」「〜が人気」で締める');
  console.log('  tags: カンマ区切りで3〜5個（例: 源泉掛け流し,絶景露天,老舗旅館）\n');

  const description = (await ask('説明文: ')).trim();
  const tagsInput   = (await ask('タグ (カンマ区切り): ')).trim();
  const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

  return { description, tags };
}

// ===== ホテルIDの採番 =====
function buildHotelId(onsenId, hotelNum) {
  // onsenId例: o-hokkaido-1 → h-hokkaido-1-{hotelNum}
  const parts = onsenId.replace(/^o-/, '').split('-'); // ['hokkaido', '1']
  return `h-${parts.join('-')}-${hotelNum}`;
}

// ===== 画像ファイル名の推定 =====
function toImageName(name) {
  // カタカナ→ローマ字は簡易変換（手動確認推奨）
  return name
    .replace(/[　\s]/g, '')
    .replace(/[^\x00-\x7F]/g, c => c) // 日本語はそのまま残す
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') || 'hotel';
}

// ===== メイン =====
async function main() {
  console.log('\n🏨 温泉宿データ自動生成ツール\n');
  console.log('─'.repeat(50));

  // 入力受付
  const onsenId   = (await ask('温泉ID       (例: o-hokkaido-1) : ')).trim();
  const onsenName = (await ask('温泉地名     (例: 登別温泉)     : ')).trim();
  const hotelNum  = (await ask('宿の番号     (例: 4 ← 既存が3つなら4): ')).trim();
  const name      = (await ask('宿名                            : ')).trim();
  const type      = (await ask('タイプ       (例: 純和風旅館)   : ')).trim();
  const price     = (await ask('料金         (例: 2食付き 25,000円〜): ')).trim();
  const jalanId    = (await ask('じゃらんID   (URLのyad以降の数字 / なければEnter): ')).trim();
  const ikyuId     = (await ask('一休ID       (URLの8桁数字 / なければEnter): ')).trim();
  const yahooId    = (await ask('Yahoo ID     (一休と同じ場合はそのまま入力 / なければEnter): ')).trim();
  const rakutenUrl = (await ask('楽天アフィURL (なければEnter): ')).trim();

  const { description, tags } = await inputDescriptionAndTags();
  rl.close();

  // エントリ組み立て
  const id = buildHotelId(onsenId, hotelNum);
  const prefecture = onsenId.split('-')[1];
  const imageName = toImageName(name) + '.png';

  const bookingParts = [];
  if (jalanId)    bookingParts.push(`jalan: '${jalanUrl(jalanId)}'`);
  if (rakutenUrl) bookingParts.push(`rakuten: '${rakutenUrl}'`);
  if (ikyuId)     bookingParts.push(`ikyu: '${ikyuUrl(ikyuId)}'`);
  if (yahooId)    bookingParts.push(`yahoo: '${yahooUrl(yahooId)}'`);

  const tagsStr = JSON.stringify(tags);
  const bookingStr = bookingParts.join(', ');

  const entry = `    {
        id: '${id}',
        onsen_id: '${onsenId}',
        name: '${name}',
        prefecture: '${prefecture}',
        type: '${type}',
        description: '${description}',
        price: '${price}',
        image: './hotels/${imageName}',
        tags: ${tagsStr},
        bookingUrls: { ${bookingStr} }
    },`;

  console.log('✅ 完了！以下を hotels.js の該当温泉セクションにペーストしてください:\n');
  console.log('─'.repeat(60));
  console.log(entry);
  console.log('─'.repeat(60));
  console.log(`\n📸 画像ファイル名: ${imageName} （dist/hotels/ に配置）`);
  console.log('⚠️  説明文・タグは必要に応じて手動で微調整してください\n');
}

main().catch(err => {
  console.error('エラー:', err.message);
  process.exit(1);
});
