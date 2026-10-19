/**
 * 泉質ページ（src/data/springTypes.js）を、一次資料にもとづく内容に置き換える
 * - 定義: 環境省「鉱泉分析法指針（平成26年改訂）」の療養泉の分類と特殊成分の限界値
 * - 適応症・禁忌症: 平成26年改訂の掲示基準（浴用の泉質別適応症／泉質別禁忌症）
 * - 掲載温泉地: 裏取り済みの src/data/onsen.js の泉質から自動で割り当てる
 * 使い方: node scripts/verify/spring_types.mjs
 */
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(__dirname, '../../src/data/springTypes.js');
const { springTypeList } = await import(path + '?t=' + Date.now());
const { onsenList } = await import(resolve(__dirname, '../../src/data/onsen.js') + '?t=' + Date.now());

const COMMON = '体調に不安がある方や持病のある方は、入浴前に医師に相談してください。';
const SKIN = '皮膚や粘膜が敏感な人、高齢者の皮膚乾燥症には向きません（掲示基準の泉質別禁忌症）。';

const content = {
  simple: {
    name: '単純温泉',
    description: '温泉1kgに溶けている成分が1,000mg未満で、源泉の温度が25℃以上の温泉。成分の濃さの基準を満たさないものの、温度で療養泉にあたる。',
    effects: ['自律神経不安定症', '不眠症', 'うつ状態'],
    caution: COMMON,
    suitable_for: '自律神経の乱れや眠りの浅さが気になる方',
    match: s => /単純温泉|単純泉/.test(s) && !/単純硫黄|単純弱放射能|単純鉄|単純二酸化炭素/.test(s),
  },
  alkaline: {
    name: 'アルカリ性単純温泉',
    description: '単純温泉のうち、湧き出た場所で測ったpHが8.5以上のもの。泉質の分類としては単純温泉に含まれる。',
    effects: ['自律神経不安定症', '不眠症', 'うつ状態'],
    caution: COMMON,
    suitable_for: '自律神経の乱れや眠りの浅さが気になる方',
    match: s => /アルカリ性単純/.test(s),
  },
  chloride: {
    name: '塩化物泉',
    description: '温泉1kgに溶けている成分が1,000mg以上で、陰イオンの主成分が塩化物イオンの温泉。ナトリウム-塩化物泉、カルシウム-塩化物泉などがある。',
    effects: ['きりきず', '末梢循環障害', '冷え性', 'うつ状態', '皮膚乾燥症'],
    caution: COMMON,
    suitable_for: '冷え性が気になる方',
    match: s => /塩化物/.test(s),
  },
  bicarbonate: {
    name: '炭酸水素塩泉',
    description: '温泉1kgに溶けている成分が1,000mg以上で、陰イオンの主成分が炭酸水素イオンの温泉。ナトリウム-炭酸水素塩泉（重曹泉）などがある。',
    effects: ['きりきず', '末梢循環障害', '冷え性', '皮膚乾燥症'],
    caution: COMMON,
    suitable_for: '冷え性や肌の乾燥が気になる方',
    match: s => /炭酸水素塩|重曹/.test(s),
  },
  sulfate: {
    name: '硫酸塩泉',
    description: '温泉1kgに溶けている成分が1,000mg以上で、陰イオンの主成分が硫酸イオンの温泉。ナトリウム-硫酸塩泉、カルシウム-硫酸塩泉などがある。',
    effects: ['きりきず', '末梢循環障害', '冷え性', 'うつ状態', '皮膚乾燥症'],
    caution: COMMON,
    suitable_for: '冷え性が気になる方',
    match: s => /硫酸塩/.test(s) && !/酸性硫酸塩/.test(s),
  },
  carbonated: {
    name: '二酸化炭素泉',
    description: '遊離二酸化炭素（炭酸ガス）を温泉1kgあたり1,000mg以上含む温泉。',
    effects: ['きりきず', '末梢循環障害', '冷え性', '自律神経不安定症'],
    caution: COMMON,
    suitable_for: '冷え性が気になる方',
    match: s => /二酸化炭素|炭酸ガス|炭酸泉/.test(s),
  },
  iron: {
    name: '含鉄泉',
    description: '総鉄イオンを温泉1kgあたり20mg以上含む温泉。空気に触れると色が変わることがある。',
    effects: ['（浴用の泉質別適応症はなし）', '飲用：鉄欠乏性貧血'],
    caution: COMMON + '飲用する場合は、施設の掲示に従ってください。',
    suitable_for: '湯の色や個性を楽しみたい方',
    match: s => /含鉄|鉄冷鉱泉|単純鉄|鉄分/.test(s),
  },
  acid: {
    name: '酸性泉',
    description: '水素イオンを温泉1kgあたり1mg以上含む温泉。',
    effects: ['アトピー性皮膚炎', '尋常性乾癬', '耐糖能異常（糖尿病）', '表皮化膿症'],
    caution: SKIN + COMMON,
    suitable_for: '刺激の強い湯を好む方（肌が敏感な方は避ける）',
    match: s => /酸性/.test(s) && !/弱酸性/.test(s),
  },
  sulfur: {
    name: '硫黄泉',
    description: '総硫黄を温泉1kgあたり2mg以上含む温泉。硫化水素を含むものは硫化水素型とされる。',
    effects: ['アトピー性皮膚炎', '尋常性乾癬', '慢性湿疹', '表皮化膿症', '（硫化水素型）末梢循環障害'],
    caution: SKIN + COMMON,
    suitable_for: 'においや白濁など湯の個性を楽しみたい方（肌が敏感な方は注意）',
    match: s => /硫黄/.test(s),
  },
  radon: {
    name: '放射能泉',
    description: 'ラドンを温泉1kgあたり111Bq（8.25マッヘ単位）以上含む温泉。',
    effects: ['高尿酸血症（痛風）', '関節リウマチ', '強直性脊椎炎など'],
    caution: COMMON,
    suitable_for: '関節の痛みなどで湯治をしたい方（医師に相談のうえ）',
    match: s => /放射能|ラドン|ラジウム/.test(s),
  },
};

const out = springTypeList.map(st => {
  const c = content[st.id];
  if (!c) return st;
  const ids = onsenList.filter(o => o.category && c.match(o.spring_type)).map(o => o.id);
  const notable = onsenList.filter(o => ids.includes(o.id)).slice(0, 4).map(o => o.name);
  const { match, ...rest } = c;
  return { ...st, ...rest, notable_onsen: notable, onsen_ids: ids };
});

const src = fs.readFileSync(path, 'utf-8');
const tail = src.slice(src.indexOf('export function getSpringTypeById'));
const head = '/**\n * 泉質データ\n * 定義は環境省「鉱泉分析法指針（平成26年改訂）」、適応症・禁忌症は平成26年改訂の掲示基準にもとづく。\n * 掲載温泉地は scripts/verify/spring_types.mjs で onsen.js の泉質から自動割り当て。\n */\n';
fs.writeFileSync(path, head + 'export const springTypeList = ' + JSON.stringify(out, null, 4).replace(/"(\w+)":/g, '$1:') + ';\n\n' + tail);
out.forEach(s => console.log(s.id, s.onsen_ids.length, s.notable_onsen.join('、')));
