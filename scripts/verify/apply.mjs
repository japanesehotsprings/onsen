/**
 * corrections.json（裏取り結果）を src/data/onsen.js に反映する
 * - spring_type が null のものは「施設により異なります」として表示し、泉質の集計からは外す
 * - by_train が null のものは行き方を載せない
 * 使い方: node scripts/verify/apply.mjs
 */
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const data_path = resolve(__dirname, '../../src/data/onsen.js');
const corrections = JSON.parse(fs.readFileSync(resolve(__dirname, 'corrections.json'), 'utf-8'));
const { onsenList } = await import(data_path + '?t=' + Date.now());

// 裏取りできない言い切りや誤ったタグ（2026-10-19 点検）
const REMOVE_TAGS = new Set(['9種の泉質', '芭蕉', '信州最古', '露天風呂日本一', '雪見', '大阪府内', '世界有数', '日本書紀', '日本一の露天風呂', '四国最古', '山中温泉', '九州最古', 'ミシュラン', '京の奥座敷', '温泉地']);

const UNVERIFIED_SPRING = '施設により異なります（各施設の掲示をご確認ください）';
const out = onsenList.map(o => {
  const c = corrections[o.id] || {};
  const n = structuredClone(o);
  if ('spring_type' in c) {
    if (c.spring_type === null) {
      n.spring_type = UNVERIFIED_SPRING;
      n.category = '';
    } else {
      n.spring_type = c.spring_type;
    }
  }
  if (c.category !== undefined && c.spring_type !== null) n.category = c.category;
  if (c.description) n.description = c.description;
  if (c.nearest_station) n.access.nearest_station = c.nearest_station;
  if ('by_train' in c) {
    if (c.by_train === null) delete n.access.by_train;
    else n.access.by_train = c.by_train;
  }
  n.tags = n.tags.filter(t => !REMOVE_TAGS.has(t));
  n.source_note = c.src || '';
  return n;
});

const src = fs.readFileSync(data_path, 'utf-8');
const head = src.slice(0, src.indexOf('export const onsenList'));
const tail = src.slice(src.indexOf('export function getOnsenByPrefecture'));
fs.writeFileSync(data_path, head + 'export const onsenList = ' + JSON.stringify(out, null, 4).replace(/"(\w+)":/g, '$1:') + ';\n\n' + tail);
console.log(`✓ ${out.length}件に反映（泉質未確認 ${out.filter(o => o.category === '').length}件）`);
