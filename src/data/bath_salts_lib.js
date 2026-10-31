/**
 * 入浴剤コーナーの共通処理（区分の名前・並べ方・データの検証）
 */

// 3段階の区分（設計書 2章）
export const TIER_LABELS = { 1: '本物の温泉成分', 2: '温泉地公認の再現', 3: '名前と香り・色' };

// 「好みから探す」の選択肢（商品の tags と同じ言葉を使う）
export const PREF_TAGS = ['にごり湯', '美肌系', '硫黄の香り', '炭酸'];

// その温泉地の商品を、区分の小さい順（本物に近い順）→ id 順で返す
export function get_salts_by_onsen(onsen_id, salts) {
  return salts
    .filter(s => s.onsen_ids.includes(onsen_id))
    .sort((a, b) => a.tier - b.tier || a.id.localeCompare(b.id));
}

// データの誤りを文の配列で返す（空なら正常）。prerender の最初に呼び、誤りがあればビルドを止める
export function validate_salts(salts, onsen_ids) {
  const errors = [];
  const seen = new Set();
  for (const s of salts) {
    const at = `入浴剤 ${s.id || '(idなし)'}`;
    if (!s.id) errors.push(`${at}: id がありません`);
    if (seen.has(s.id)) errors.push(`${at}: id が重複しています`);
    seen.add(s.id);
    if (!s.name || !s.maker) errors.push(`${at}: name と maker は必須です`);
    if (![1, 2, 3].includes(s.tier)) errors.push(`${at}: tier は 1・2・3 のどれかです（${s.tier}）`);
    if (!s.tier_basis) errors.push(`${at}: 区分の根拠（tier_basis）がありません`);
    if (!s.sources?.length) errors.push(`${at}: 区分の根拠になる出典（sources）がありません`);
    if (!s.onsen_ids?.length) errors.push(`${at}: onsen_ids が空です`);
    for (const id of s.onsen_ids || []) {
      if (!onsen_ids.has(id)) errors.push(`${at}: 温泉地 ${id} は onsen.js にありません`);
    }
    if (!s.rakuten_item_codes?.length) errors.push(`${at}: rakuten_item_codes が空です`);
  }
  return errors;
}
