import { onsenList } from './onsen.js';

/**
 * 特集の定義
 * - season / scene / theme のどれかで一覧ページの区分が決まる
 * - onsen_ids は掲載データ（onsen.js）から選ぶ。泉質でまとめる特集は泉質の文字列から自動で集める
 * - faqs は事実を足さない範囲で書く（出典が要る内容は sources に入れる）
 * - article_ids は関連コラム（内部リンク）
 */

// 泉質の文字列で温泉地を集める
const by_spring = re => onsenList.filter(o => re.test(o.spring_type || '')).map(o => o.id);

const SRC_HOYO = { name: '環境省「国民保養温泉地」', url: 'https://www.env.go.jp/nature/onsen/area/index.html' };
const SRC_GUIDELINE = { name: '環境省「鉱泉分析法指針（平成26年改訂）」', url: 'https://www.env.go.jp/nature/onsen/pdf/2-5_p_14.pdf' };

export const specialList = [
    {
        id: 'yukimi-roten',
        article_ids: ['yukimi-rotenburo-onsen', 'onsen-nyuyoku-kaisu-jikan'],
        title: '雪の季節に訪ねたい温泉地',
        subtitle: '冬の絶景温泉',
        season: 'winter',
        scene: null,
        icon: '❄️',
        color: '#7aaed4',
        image: './specials/winter.png',
        description: '雪の多い地域にある温泉地を集めました。雪見露天を楽しみたいときは、宿の露天風呂の有無と冬の道路・交通を事前に確認しましょう。',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-5', 'o-hokkaido-9', 'o-aomori-1', 'o-iwate-2', 'o-iwate-4', 'o-akita-1', 'o-yamagata-2', 'o-tochigi-2', 'o-gunma-1', 'o-gunma-3', 'o-nagano-2', 'o-nagano-4', 'o-niigata-2'],
        hotel_ids: []
    },
    {
        id: 'koyo-onsen',
        article_ids: ['zekke-rotenburo-guide', 'tohoku-meito-hito'],
        title: '紅葉×温泉 絶景スポット',
        subtitle: '秋の温泉旅行',
        season: 'autumn',
        scene: null,
        icon: '🍁',
        color: '#c47a3a',
        image: './specials/autumn.png',
        description: '山や渓谷に囲まれ、秋の紅葉とあわせて楽しめる温泉地を集めました。見頃は年や標高によって変わるので、現地の紅葉情報を確認してから出かけましょう。',
        onsen_ids: ['o-hokkaido-5', 'o-hokkaido-3', 'o-akita-1', 'o-yamagata-1', 'o-tochigi-1', 'o-tochigi-2', 'o-gunma-4', 'o-nagano-3', 'o-gifu-2', 'o-gifu-3', 'o-kanagawa-1', 'o-kumamoto-1'],
        hotel_ids: []
    },
    {
        id: 'sakura-onsen',
        article_ids: ['hajimete-onsen-guide'],
        title: '桜の季節に訪れたい温泉地',
        subtitle: '春の温泉旅行',
        season: 'spring',
        scene: null,
        icon: '🌸',
        color: '#e0a0be',
        image: './specials/spring.png',
        description: '春の花見とあわせて訪ねたい温泉地を集めました。桜の見頃は年や地域で大きく変わるので、開花情報を確認してから出かけましょう。',
        onsen_ids: ['o-hokkaido-2', 'o-yamagata-3', 'o-yamagata-4', 'o-tochigi-3', 'o-kanagawa-2', 'o-shizuoka-1', 'o-shizuoka-3', 'o-gifu-1', 'o-hyogo-3', 'o-hyogo-1'],
        hotel_ids: []
    },
    {
        id: 'summer-highland',
        article_ids: ['shinshu-nagano-onsen'],
        title: '夏に訪ねたい山と湖の温泉',
        subtitle: '涼しい夏の温泉',
        season: 'summer',
        scene: null,
        icon: '🌿',
        color: '#5aaa7a',
        image: './specials/summer.png',
        description: '山あいや湖のほとりにあり、夏の避暑とあわせて楽しめる温泉地を集めました。',
        onsen_ids: ['o-hokkaido-7', 'o-akita-5', 'o-iwate-5', 'o-tochigi-1', 'o-gunma-3', 'o-gunma-1', 'o-nagano-4', 'o-nagano-6', 'o-gifu-2', 'o-gifu-3', 'o-nagano-2'],
        hotel_ids: []
    },
    {
        id: 'solo-travel',
        article_ids: ['solo-travel-onsen'],
        title: '一人旅で訪ねたい温泉地',
        subtitle: '一人旅特集',
        season: null,
        scene: '一人旅',
        icon: '🧳',
        color: '#7a8abf',
        image: './specials/solo.png',
        description: '温泉街の散策や湯めぐりを、ひとりでゆっくり楽しめる温泉地を集めました。一人で泊まれるプランがあるかは、予約サイトや宿で確認しましょう。',
        onsen_ids: ['o-yamagata-1', 'o-hyogo-3', 'o-nagano-3', 'o-tochigi-5', 'o-iwate-2', 'o-akita-1', 'o-gifu-1', 'o-kanagawa-1', 'o-oita-2'],
        hotel_ids: []
    },
    {
        id: 'couple',
        article_ids: ['zekke-rotenburo-guide', 'tattoo-onsen-guide'],
        title: 'カップル旅行で訪ねたい温泉地',
        subtitle: 'カップル旅行特集',
        season: null,
        scene: 'カップル',
        icon: '💑',
        color: '#d4848a',
        image: './specials/couple.png',
        description: '温泉街の散策や景色を二人で楽しめる温泉地を集めました。露天風呂付き客室や貸切風呂の有無は、宿ごとに確認しましょう。',
        onsen_ids: ['o-shizuoka-3', 'o-kanagawa-1', 'o-hyogo-3', 'o-hyogo-1', 'o-gifu-1', 'o-oita-2', 'o-yamagata-1', 'o-nagano-4', 'o-kumamoto-1'],
        hotel_ids: []
    },
    {
        id: 'family',
        article_ids: ['kids-onsen-guide', 'onsen-nyuyoku-kaisu-jikan'],
        title: '家族旅行で訪ねたい温泉地',
        subtitle: 'ファミリー温泉特集',
        season: null,
        scene: '家族',
        icon: '👨‍👩‍👧‍👦',
        color: '#5abf8a',
        image: './specials/family.png',
        description: '観光やレジャーとあわせて家族で楽しめる温泉地を集めました。子ども向けの設備や混浴の年齢ルールは、宿や自治体の案内で確認しましょう。',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-2', 'o-tochigi-1', 'o-tochigi-3', 'o-kanagawa-1', 'o-shizuoka-1', 'o-gifu-1', 'o-oita-1', 'o-kagoshima-1'],
        hotel_ids: []
    },
    {
        id: 'womens-trip',
        article_ids: ['bijin-no-yu-guide', 'onsen-sensitsu-10-types'],
        title: '女子旅で訪ねたい温泉地',
        subtitle: '女子旅特集',
        season: null,
        scene: '女子旅',
        icon: '💆‍♀️',
        color: '#c88abf',
        image: './specials/zyoshi.png',
        description: '温泉街の散策やご当地グルメとあわせて楽しめる温泉地を集めました。泉質は各温泉地のページで確認できます。',
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7', 'o-gifu-1', 'o-saga-1', 'o-oita-2', 'o-kanagawa-1', 'o-yamagata-1', 'o-hyogo-3', 'o-nagano-4', 'o-kumamoto-2'],
        hotel_ids: []
    },
    {
        id: 'kokumin-hoyo-onsenchi',
        title: '国民保養温泉地に指定されている温泉地',
        subtitle: '国民保養温泉地',
        season: null,
        scene: null,
        theme: true,
        icon: '🏞️',
        color: '#4a8a7a',
        image: './onsen/sukayu.png',
        description: '国民保養温泉地は、温泉の効果が期待でき、健全な保養地として使える温泉地を、温泉法にもとづいて環境大臣が指定するものです。日本温泉で紹介している温泉地のうち、環境省の一覧に載っている温泉地を集めました。',
        onsen_ids: ['o-hokkaido-9', 'o-aomori-1', 'o-iwate-5', 'o-miyagi-1', 'o-akita-5', 'o-yamagata-1', 'o-yamagata-2', 'o-yamagata-6', 'o-fukushima-4', 'o-fukushima-6', 'o-tochigi-2', 'o-gunma-4', 'o-niigata-4', 'o-yamanashi-2', 'o-nagano-4', 'o-gifu-2', 'o-nara-2', 'o-wakayama-2', 'o-wakayama-4', 'o-okayama-1', 'o-okayama-2', 'o-hiroshima-2', 'o-kagawa-1', 'o-oita-2', 'o-oita-4', 'o-kagoshima-2'],
        hotel_ids: [],
        article_ids: ['kokumin-hoyo-onsenchi-guide', 'onsen-nyuyoku-kaisu-jikan'],
        note: '環境省の一覧では、複数の温泉地をまとめて1か所として指定している場合があります（例：土湯・高湯温泉郷、湯布院温泉郷）。ここでは、日本温泉に掲載している温泉地名で載せています。',
        sources: [SRC_HOYO],
        faqs: [
            { q: '国民保養温泉地とは何ですか？', a: '温泉の公共的な利用を進めるため、温泉利用の効果が十分に期待でき、健全な保養地として活用される温泉地を、温泉法にもとづいて環境大臣が指定するものです。昭和29年から指定が始まりました。' },
            { q: '国民保養温泉地は全国にいくつありますか？', a: '環境省のページでは、令和4年10月現在で全国79か所が指定されています。' },
            { q: '国民保養温泉地に選ばれる条件は？', a: '利用する源泉が療養泉であること、湧出量が豊富であること（目安は利用者1人あたり毎分0.5リットル以上）、保養地にふさわしい環境であること、医師と連携した入浴指導の体制や災害防止の取組があることなどが基準です。' },
        ],
    },
    {
        id: 'iousen-onsenchi',
        title: '硫黄泉が楽しめる温泉地',
        subtitle: '泉質で選ぶ・硫黄泉',
        season: null,
        scene: null,
        theme: true,
        icon: '♨️',
        color: '#a8a04a',
        image: './onsen/nyuto.png',
        description: '泉質に硫黄を含む温泉地を集めました。硫黄泉は、温泉1kgに総硫黄を2mg以上含む療養泉です。温泉地の中でも源泉や宿によって泉質が違うことがあるので、入る施設の掲示で確かめましょう。',
        onsen_ids: by_spring(/硫黄(?!成分)/),
        hotel_ids: [],
        article_ids: ['onsen-sensitsu-10-types', 'onsen-nyuyoku-kaisu-jikan'],
        spring_type_id: 'sulfur',
        sources: [SRC_GUIDELINE],
        faqs: [
            { q: '硫黄泉とはどんな温泉ですか？', a: '温泉1kgに総硫黄を2mg以上含む療養泉です。浴用の泉質別適応症として、アトピー性皮膚炎、尋常性乾癬、慢性湿疹、表皮化膿症が掲示基準に挙げられています。' },
            { q: '硫黄泉に入るときの注意は？', a: '皮膚や粘膜が敏感な人、高齢者の皮膚乾燥症の人には向かない（泉質別の禁忌症）とされています。肌の弱い人は、入浴後に温泉成分をお湯で洗い流したほうがよいとされています。' },
            { q: 'この特集の温泉地は、どこでも硫黄泉に入れますか？', a: '温泉地の中で源泉や宿ごとに泉質が違うことがあります。硫黄泉に入りたいときは、予約前に宿の泉質を確認し、現地では施設の掲示を見て確かめましょう。' },
        ],
    },
    {
        id: 'alkaline-simple-onsen',
        title: 'アルカリ性単純温泉の温泉地',
        subtitle: '泉質で選ぶ・アルカリ性単純温泉',
        season: null,
        scene: null,
        theme: true,
        icon: '💧',
        color: '#5a9ac4',
        image: './onsen/gero.png',
        description: '泉質にアルカリ性単純温泉を含む温泉地を集めました。アルカリ性単純温泉は、溶けている成分が1kgあたり1,000mg未満で25℃以上の単純温泉のうち、湧き出た場所で測ったpHが8.5以上のものです。',
        onsen_ids: by_spring(/(?<!弱)アルカリ性単純温泉/),
        hotel_ids: [],
        article_ids: ['onsen-sensitsu-10-types', 'bijin-no-yu-guide'],
        spring_type_id: 'alkaline',
        sources: [SRC_GUIDELINE],
        faqs: [
            { q: 'アルカリ性単純温泉とは何ですか？', a: '溶けている成分が1kgあたり1,000mg未満で、源泉の温度が25℃以上の単純温泉のうち、湧き出た場所で測ったpHが8.5以上のものです。' },
            { q: '単純温泉の適応症は？', a: '環境省の掲示基準では、単純温泉の浴用の泉質別適応症として、自律神経不安定症、不眠症、うつ状態が挙げられています。' },
            { q: '「弱アルカリ性単純温泉」とは違いますか？', a: 'pHの区分が違います。pH7.5以上8.5未満は弱アルカリ性、8.5以上はアルカリ性です。この特集では、泉質にアルカリ性単純温泉を含む温泉地を載せています。' },
        ],
    },
    {
        id: 'umibe-onsen',
        title: '海の近くにある温泉地',
        subtitle: '海辺の温泉',
        season: null,
        scene: null,
        theme: true,
        icon: '🌊',
        color: '#3a7ab4',
        image: './onsen/hurouhushi.png',
        description: '太平洋・日本海・瀬戸内などの海沿いにある温泉地を集めました。海の景色や海の幸とあわせて楽しめます。海を眺められるお風呂があるかは宿や施設ごとに違うので、予約前に確かめましょう。',
        onsen_ids: ['o-aomori-2', 'o-aomori-4', 'o-akita-3', 'o-miyagi-4', 'o-ibaraki-2', 'o-chiba-1', 'o-chiba-2', 'o-chiba-3', 'o-chiba-4', 'o-niigata-3', 'o-ishikawa-2', 'o-shizuoka-1', 'o-shizuoka-2', 'o-shizuoka-4', 'o-kyoto-2', 'o-kyoto-3', 'o-hyogo-4', 'o-wakayama-1', 'o-wakayama-3', 'o-tottori-2', 'o-kochi-2', 'o-nagasaki-2', 'o-miyazaki-2', 'o-kagoshima-1', 'o-okinawa-1', 'o-okinawa-2'],
        hotel_ids: [],
        article_ids: ['zekke-rotenburo-guide', 'onsen-gurume-travel'],
        faqs: [
            { q: '海辺の温泉は塩辛いですか？', a: '海の近くには塩化物泉の温泉地が多くありますが、泉質は源泉ごとに違います。各温泉地のページで泉質を確認できます。' },
            { q: '海が見える露天風呂に入るには？', a: '海を眺められるお風呂があるかは宿や施設ごとに違います。予約サイトや宿の公式サイトで、露天風呂や客室の眺めを確認してから選びましょう。' },
        ],
    }
];

export function getSpecialById(id) {
    return specialList.find(s => s.id === id);
}
