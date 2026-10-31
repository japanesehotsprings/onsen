/**
 * 入浴剤・湯の花の正本（家で入る名湯コーナー）
 *
 * 書いてよいのは、メーカー公式・製造元で裏取りできた事実だけ。区分の根拠の出典は sources に必ず残す。
 * 区分 tier: 1=本物の温泉成分 / 2=温泉地公認の再現 / 3=名前と香り・色（設計書 2章）
 * 項目: id / name / maker / onsen_ids / district（温泉地の中の地区） / tier / tier_basis / ingredients_note /
 *       tags（PREF_TAGS の言葉） / jan / rakuten_item_codes（出品の候補。上から順に使う） / is_gift / sources / checked_at
 * 価格・効能は書かない。画像とリンクは scripts/fetch_bath_salts.mjs が楽天APIから取る
 */
export const bathSaltList = [];
