/**
 * 記事・特集のサムネイルを描いて public/thumbs/<キー>.png に書き出す
 * 使い方: node scripts/thumbs/make.mjs [キー...]   （キー省略で全部）
 *        --sheet で一覧画像（scratch 確認用）も作る: node scripts/thumbs/make.mjs --sheet <出力先.png>
 * 書き出したPNGはビルド時に WebP に変換される（scripts/images.mjs）
 */
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { scenes } from './scenes.mjs';
import { make_ctx, svg, finish } from './parts.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const out_dir = resolve(root, 'public/thumbs');
mkdirSync(out_dir, { recursive: true });

const args = process.argv.slice(2);
const sheet_i = args.indexOf('--sheet');
const sheet = sheet_i >= 0 ? args.splice(sheet_i, 2)[1] : null;
const keys = args.length ? args : Object.keys(scenes);

const done = [];
let seed = 1;
for (const key of keys) {
  if (!scenes[key]) throw new Error(`絵がありません: ${key}`);
  const ctx = make_ctx(seed++);
  const body = scenes[key](ctx) + finish(ctx);
  const file = resolve(out_dir, `${key}.png`);
  await sharp(Buffer.from(svg(ctx, body))).png({ compressionLevel: 9 }).toFile(file);
  done.push(file);
  console.log(`✓ thumbs/${key}.png`);
}

// 確認用の一覧（4列・各400×250）
if (sheet) {
  const cols = 4, tw = 400, th = 250;
  const rows = Math.ceil(done.length / cols);
  const tiles = await Promise.all(done.map(f => sharp(f).resize(tw, th).toBuffer()));
  await sharp({ create: { width: cols * tw, height: rows * th, channels: 3, background: '#ffffff' } })
    .composite(tiles.map((input, i) => ({ input, left: (i % cols) * tw, top: Math.floor(i / cols) * th })))
    .png().toFile(sheet);
  console.log(`✓ 一覧: ${sheet}`);
}
