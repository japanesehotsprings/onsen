/**
 * 入浴剤・湯の花の正本（家で入る名湯コーナー）
 *
 * 書いてよいのは、メーカー公式・製造元で裏取りできた事実だけ。区分の根拠の出典は sources に必ず残す。
 * 区分 tier: 1=本物の温泉成分 / 2=温泉地公認の再現 / 3=名前と香り・色（設計書 2章）
 * 項目: id / name / maker / onsen_ids / district（温泉地の中の地区） / tier / tier_basis / ingredients_note /
 *       tags（PREF_TAGS の言葉） / jan / rakuten_item_codes（出品の候補。上から順に使う） / is_gift / sources / checked_at
 * 価格・効能は書かない。画像とリンクは scripts/fetch_bath_salts.mjs が楽天APIから取る
 */
// メーカー公式の出典（2026-11-01 確認）
const MEITO_ONSEN = { title: 'アース製薬「日本の名湯」公認していただいた温泉地（共同企画先の一覧）', url: 'https://www.earth.jp/meito/onsen/' };
const meito_page = (slug, name) => ({ title: `アース製薬 製品情報「${name}」（温泉地公認の説明・有効成分）`, url: `https://www.earth.jp/products/${slug}/index.html` });
const iiyu_page = (path, name) => ({ title: `白元アース 商品情報「${name}」（収録の温泉地名・「本品は、温泉の湯を再現したものではありません」）`, url: `https://www.hakugen-earth.co.jp/products/bathlab/${path}` });

// 区分の根拠の決まり文句
const MEITO_BASIS = '温泉地の自治体・団体（共同企画先）が、コンセプト・湯ざわり・色・香りを品質確認した「温泉地公認」の入浴剤です。メーカーは「本品は温泉と全く同一というわけではありません」としています。';
const IIYU_BASIS = '温泉地名は香りと湯色のテーマです。メーカーの商品情報に「本品は、温泉の湯を再現したものではありません」と書かれています。';

// 白元アース「いい湯旅立ち」（4種入り）を1件にする
const iiyu = (id, name, path, onsen_ids, jan, codes, tags) => ({
  id, name: `いい湯旅立ち ${name}`, maker: '白元アース', onsen_ids, tier: 3, tier_basis: IIYU_BASIS,
  ingredients_note: '4種類の香りと湯色の詰め合わせ（医薬部外品）。', tags, jan, rakuten_item_codes: codes, is_gift: false,
  sources: [iiyu_page(path, `いい湯旅立ち ${name}`)], checked_at: '2026-11-01',
});

export const bathSaltList = [
  // ① 本物の温泉成分
  {
    id: 's-myoban-yunohana', name: '別府明礬温泉 薬用湯の花（10g×25包）', maker: 'みょうばん湯の里', onsen_ids: ['o-oita-1'], district: '明礬',
    tier: 1,
    tier_basis: '明礬温泉の湯の花小屋で、地表から噴き出す温泉ガスを結晶にして採った湯の花です（製造元の商品説明）。この湯の花の製造技術は、国の重要無形民俗文化財に指定されています。',
    ingredients_note: '有効成分は湯の花（医薬部外品）。成分表示：硫酸イオン30.0％以上、アルミニウム6.0％以上、鉄2.0％以上。',
    tags: [], jan: '4580313540036', rakuten_item_codes: ['rakuten24:10096624', 'kenkocom:11025964', 'onsenken-oita:10000101'], is_gift: false,
    sources: [
      { title: '文化遺産オンライン「別府明礬温泉の湯の花製造技術」（重要無形民俗文化財）', url: 'https://online.bunka.go.jp/heritages/region/44/44202' },
      { title: '製造元の商品説明（楽天市場「おんせん県おおいた online」掲載・温泉ガスから採取した結晶）', url: 'https://item.rakuten.co.jp/onsenken-oita/j4580313540036/' },
    ],
    checked_at: '2026-11-01',
  },

  // ② 温泉地公認の再現（アース製薬「日本の名湯」）
  {
    id: 's-meito-atami', name: '日本の名湯 熱海 450g', maker: 'アース製薬', onsen_ids: ['o-shizuoka-1'], tier: 2,
    tier_basis: `${MEITO_BASIS}共同企画先は熱海市観光協会です。`,
    ingredients_note: '含食塩芒硝湯タイプ。赤橙色の透明湯（医薬部外品）。',
    tags: [], rakuten_item_codes: ['rakuten24:11050560'], is_gift: false,
    sources: [meito_page('meito-atami-450', '日本の名湯 熱海 450g'), MEITO_ONSEN], checked_at: '2026-11-01',
  },
  {
    id: 's-meito-beppu', name: '日本の名湯 別府 450g', maker: 'アース製薬', onsen_ids: ['o-oita-1'], tier: 2,
    tier_basis: `${MEITO_BASIS}共同企画先は別府市旅館ホテル組合連合会です。`,
    ingredients_note: '重曹湯タイプ。薄鈍色（うすにびいろ）のにごり湯（医薬部外品）。',
    tags: ['にごり湯'], rakuten_item_codes: ['rakuten24:11050562'], is_gift: false,
    sources: [meito_page('meito-beppu-450', '日本の名湯 別府 450g'), MEITO_ONSEN], checked_at: '2026-11-01',
  },
  {
    id: 's-meito-nyuto', name: '日本の名湯 乳頭 450g', maker: 'アース製薬', onsen_ids: ['o-akita-1'], tier: 2,
    tier_basis: `${MEITO_BASIS}共同企画先は乳頭温泉郷協同組合です。`,
    ingredients_note: '含マグネシウム重曹湯タイプ。乳白色のにごり湯（医薬部外品）。',
    tags: ['にごり湯'], rakuten_item_codes: ['rakuten24:10527024', 'sundrug:10085128', 'at-life:10318043'], is_gift: false,
    sources: [meito_page('meito-nyuto-450', '日本の名湯 乳頭 450g'), MEITO_ONSEN], checked_at: '2026-11-01',
  },
  {
    id: 's-meito-nagayu', name: '日本の名湯 夢ごこち 大分長湯 40g', maker: 'アース製薬', onsen_ids: ['o-oita-4'], tier: 2,
    tier_basis: `${MEITO_BASIS}公認は九州アルプス商工会・長湯温泉観光協会です。`,
    ingredients_note: '微発泡の炭酸タイプ。空色の透明湯（医薬部外品）。',
    tags: ['炭酸'], rakuten_item_codes: ['sundrug:10109527', 'cosmecomonline:10154556', 'at-life:12492225'], is_gift: false,
    sources: [meito_page('meito-yumegocochi-nagayu', '日本の名湯 夢ごこち 大分長湯 40g'), MEITO_ONSEN], checked_at: '2026-11-01',
  },
  {
    id: 's-meito-nigori-daigomi', name: '日本の名湯 にごり湯の醍醐味（8種・14包）', maker: 'アース製薬',
    onsen_ids: ['o-akita-1', 'o-ishikawa-1', 'o-wakayama-4', 'o-oita-1', 'o-kumamoto-1'], tier: 2,
    tier_basis: `${MEITO_BASIS}登別カルルス・十和田蔦・乳頭・山代・濁河・龍神・別府・黒川の8種入りです。`,
    ingredients_note: 'にごり湯タイプ8種の詰め合わせ（医薬部外品）。',
    tags: ['にごり湯'], rakuten_item_codes: ['rakuten24:10989661', 'sundrug:10077865'], is_gift: true,
    sources: [meito_page('meito-nigoriyu', '日本の名湯 にごり湯の醍醐味'), MEITO_ONSEN], checked_at: '2026-11-01',
  },
  {
    id: 's-meito-shifuku', name: '日本の名湯 至福の贅沢（10種・14包）', maker: 'アース製薬',
    onsen_ids: ['o-akita-1', 'o-ishikawa-1', 'o-kumamoto-1', 'o-miyagi-1', 'o-tochigi-4', 'o-nagano-2', 'o-gifu-2', 'o-okayama-1', 'o-ehime-1'], tier: 2,
    tier_basis: `${MEITO_BASIS}登別カルルス・乳頭・山代・黒川・鳴子・那須塩原（共同企画先は塩原温泉観光協会）・野沢・奥飛騨新穂高・湯原・道後の10種入りです。`,
    ingredients_note: 'にごり湯4種・透明湯6種の詰め合わせ（医薬部外品）。',
    tags: ['にごり湯'], rakuten_item_codes: ['rakuten24:10926545'], is_gift: true,
    sources: [meito_page('meito-shifuku', '日本の名湯 至福の贅沢'), MEITO_ONSEN], checked_at: '2026-11-01',
  },
  {
    id: 's-meito-totonou', name: '日本の名湯 ととのう湯旅（8種・10包）', maker: 'アース製薬',
    onsen_ids: ['o-hokkaido-6', 'o-shizuoka-1', 'o-shizuoka-3', 'o-saga-1', 'o-ishikawa-1', 'o-wakayama-4', 'o-oita-4'], tier: 2,
    tier_basis: `${MEITO_BASIS}十勝川モール・熱海・修善寺・嬉野・山代・龍神・奥会津金山・大分長湯の8種入りです。`,
    ingredients_note: '炭酸湯2種・にごり湯2種・透明湯4種の詰め合わせ（医薬部外品）。',
    tags: ['炭酸'], rakuten_item_codes: ['rakuten24:11292927', 'sundrug:10127831'], is_gift: true,
    sources: [meito_page('meito-totonou', '日本の名湯 ととのう湯旅'), MEITO_ONSEN], checked_at: '2026-11-01',
  },

  // ③ 名前と香り・色（白元アース「いい湯旅立ち」）
  iiyu('s-iiyu-yukimi', '雪見にごり湯の宿 12包', 'iiyu/12.html', ['o-yamagata-1', 'o-gunma-3', 'o-yamanashi-1', 'o-kanagawa-1'], '4901559215227', ['sundrug:10188228', 'at-life:12603607', 'cosmedefun:10019281'], ['にごり湯']),
  iiyu('s-iiyu-nigori', 'にごり湯の宿 12包', 'iiyu/_12.html', ['o-hokkaido-1', 'o-gunma-1', 'o-hyogo-1', 'o-oita-1'], '4901559215166', ['matsukiyo:10550185'], ['にごり湯']),
  iiyu('s-iiyu-roten', 'にごり露天湯の宿 12包', 'iiyu/_12_2.html', ['o-miyagi-3', 'o-gunma-2', 'o-wakayama-3', 'o-kumamoto-1'], '4901559215333', ['matsukiyo:10550194', 'sokunou:10042226', 'at-life:12603594'], ['にごり湯']),
  iiyu('s-iiyu-nagomi', 'なごみにごり湯の宿 12包', 'iiyu/_12_3.html', ['o-yamagata-2', 'o-kanagawa-1', 'o-ehime-1', 'o-oita-2'], '4901559215272', ['sundrug:10188229', 'cosmedefun:10019285'], ['にごり湯']),
  iiyu('s-iiyu-momiji', '紅葉にごり湯の宿 12包', 'iiyu/_12_6.html', ['o-gunma-1', 'o-saitama-2', 'o-kyoto-1', 'o-ehime-1'], '4901559215388', ['sundrug:10188232', 'fines-f:10051176'], ['にごり湯']),
  iiyu('s-iiyu-fujimi', '富士見にごり湯の宿 12包', 'iiyu/post_192.html', ['o-tochigi-3', 'o-kanagawa-2', 'o-nagano-2', 'o-shizuoka-2'], '4901559215449', ['jism:14322163', 'r-kojima:11647930', 'at-life:12603615'], ['にごり湯']),
  iiyu('s-iiyu-nukumori', 'にごり炭酸湯 ぬくもりの宿 16錠', 'iiyunigori/post_300.html', ['o-hokkaido-1', 'o-gunma-1', 'o-ehime-1', 'o-oita-2'], '4901559213667', ['sundrug:10136186', 'tsuruha:10098971', 'matsukiyo:10565021'], ['にごり湯', '炭酸']),
  iiyu('s-iiyu-yasuragi', 'にごり炭酸湯 やすらぎの宿 16錠', 'iiyunigori/post_301.html', ['o-yamagata-2', 'o-kanagawa-1', 'o-hyogo-3', 'o-oita-1'], '4901559213612', ['sundrug:10136194', 'tsuruha:10098984', 'rakutensokuhaimart:10027092'], ['にごり湯', '炭酸']),
  iiyu('s-iiyu-uruwashi', 'にごり炭酸湯 うるわしの宿 16錠', 'iiyunigori/post_302.html', ['o-tochigi-1', 'o-nagano-1', 'o-shizuoka-4', 'o-wakayama-1'], '4901559213728', ['sundrug:10136185', 'rakutensokuhaimart:10026958'], ['にごり湯', '炭酸']),
  iiyu('s-iiyu-yukiakari', 'にごり炭酸湯 雪灯りの宿 16錠', 'iiyunigori/post_303.html', ['o-akita-1', 'o-niigata-1', 'o-shizuoka-3'], '4901559213889', ['tsuruha:10098979', 'jetprice:10640644'], ['にごり湯', '炭酸']),
  iiyu('s-iiyu-ikoi', 'にごり炭酸湯 いこいの宿 16錠', 'iiyunigori/post_304.html', ['o-miyagi-3', 'o-shizuoka-1', 'o-wakayama-3', 'o-kyoto-1'], '4901559213834', ['r-kojima:11567432', 'matinozakka:10019758'], ['にごり湯', '炭酸']),
  iiyu('s-iiyu-natsukashi', 'にごり炭酸湯 なつかしの宿 16錠', 'iiyunigori/post_305.html', ['o-yamagata-1', 'o-yamanashi-1', 'o-ehime-1', 'o-kumamoto-1'], '4901559213773', ['sundrug:10136184', 'tsuruha:10098969'], ['にごり湯', '炭酸']),
];
