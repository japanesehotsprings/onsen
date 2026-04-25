export const courseList = [
    {
        id: 'noboribetsu-1night',
        title: '登別温泉 1泊2日モデルコース',
        subtitle: '北海道の名湯を満喫',
        prefecture: 'hokkaido',
        days: 2,
        onsen_id: 'o-hokkaido-1',
        hotel_id: 'h-hokkaido-1-1',
        spot_ids: ['s-hokkaido-3'],
        gourmet_ids: ['g-hokkaido-1', 'g-hokkaido-2'],
        description: '日本屈指の温泉地・登別温泉でゆっくり過ごす1泊2日プラン。地獄谷散策と多彩な温泉を楽しもう。',
        image: './onsen/noboribetsu.png',
        itinerary: [
            { day: 1, items: [
                { time: '10:00', label: '登別駅着、バスで温泉街へ' },
                { time: '11:00', label: '地獄谷・大湯沼を散策' },
                { time: '13:00', label: 'ランチ（ジンギスカン）' },
                { time: '15:00', label: 'チェックイン・温泉三昧' },
                { time: '18:00', label: '夕食（北海道の恵み）' },
                { time: '20:00', label: '夜の露天風呂へ' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の温泉・朝食' },
                { time: '10:00', label: 'チェックアウト' },
                { time: '11:00', label: 'クマ牧場（オプション）' },
                { time: '13:00', label: '海鮮ランチ' },
                { time: '15:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'toyako-1night',
        title: '洞爺湖温泉 1泊2日モデルコース',
        subtitle: '湖畔リゾートで癒しの旅',
        prefecture: 'hokkaido',
        days: 2,
        onsen_id: 'o-hokkaido-2',
        hotel_id: 'h-hokkaido-2-1',
        spot_ids: [],
        gourmet_ids: ['g-hokkaido-2'],
        description: '洞爺湖畔に立つ絶景温泉リゾートで過ごす優雅な1泊2日。湖面に映る有珠山と花火の絶景。',
        image: './onsen/toyako.png',
        itinerary: [
            { day: 1, items: [
                { time: '12:00', label: '洞爺湖温泉着' },
                { time: '13:00', label: 'ランチ後チェックイン' },
                { time: '15:00', label: '湖畔散策・足湯体験' },
                { time: '18:00', label: '夕食（湖を眺めながら）' },
                { time: '20:45', label: '夜の定期花火大会（4〜10月）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の露天風呂（洞爺湖一望）' },
                { time: '9:00', label: '朝食後チェックアウト' },
                { time: '10:00', label: '有珠山ロープウェイ（オプション）' },
                { time: '13:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'kusatsu-2night',
        title: '草津温泉 2泊3日モデルコース',
        subtitle: '湯畑・外湯・時間湯を満喫',
        prefecture: 'gunma',
        days: 3,
        onsen_id: 'o-gunma-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '日本三名泉のひとつ、草津温泉を2泊3日でたっぷり楽しむプラン。外湯めぐり・時間湯体験・西の河原散策まで草津の魅力を余すことなく体験。',
        image: './onsen/kusatsu.png',
        itinerary: [
            { day: 1, items: [
                { time: '14:00', label: '草津温泉バスターミナル着' },
                { time: '14:30', label: '湯畑を見学・温泉街散策' },
                { time: '16:00', label: '外湯「白旗の湯」で一浴' },
                { time: '18:00', label: 'チェックイン・夕食' },
                { time: '20:00', label: '夜の湯畑ライトアップ散策' }
            ]},
            { day: 2, items: [
                { time: '9:00', label: '時間湯体験（要予約）' },
                { time: '11:00', label: '西の河原公園・露天風呂' },
                { time: '13:00', label: 'ランチ（舞茸そば・上州牛）' },
                { time: '15:00', label: '光泉寺・草津熱帯圏を散策' },
                { time: '18:00', label: '外湯「地蔵の湯」へ' },
                { time: '20:00', label: '宿の温泉でゆったり' }
            ]},
            { day: 3, items: [
                { time: '7:00', label: '朝の湯畑散策・朝風呂' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:00', label: 'お土産（湯の花・温泉まんじゅう）' },
                { time: '12:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'hakone-1night',
        title: '箱根温泉 1泊2日モデルコース',
        subtitle: '富士山と芦ノ湖の絶景湯旅',
        prefecture: 'kanagawa',
        days: 2,
        onsen_id: 'o-kanagawa-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '東京から約90分。富士山・芦ノ湖の絶景と多彩な泉質が楽しめる箱根の王道1泊2日プラン。ロープウェイ・美術館・温泉を組み合わせた充実コース。',
        image: './onsen/hakone.png',
        itinerary: [
            { day: 1, items: [
                { time: '10:00', label: '箱根湯本着（ロマンスカー）' },
                { time: '10:30', label: '箱根湯本で足湯・散策' },
                { time: '11:30', label: '登山鉄道→ケーブルカー→ロープウェイ' },
                { time: '13:00', label: '大涌谷見学・黒たまご' },
                { time: '14:30', label: '芦ノ湖遊覧船' },
                { time: '16:00', label: 'チェックイン・温泉三昧' },
                { time: '18:30', label: '夕食（相模の海鮮会席）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝風呂（富士山ビュー）' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:30', label: 'ポーラ美術館または箱根美術館' },
                { time: '13:00', label: '日帰り温泉「天山湯治郷」' },
                { time: '15:00', label: '箱根湯本でお土産購入' },
                { time: '16:30', label: '帰路（ロマンスカー）' }
            ]}
        ]
    },
    {
        id: 'arima-1night',
        title: '有馬温泉 1泊2日モデルコース',
        subtitle: '金泉・銀泉の二刀流と神戸観光',
        prefecture: 'hyogo',
        days: 2,
        onsen_id: 'o-hyogo-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '豊臣秀吉も愛した日本最古の名湯・有馬温泉。赤褐色の「金泉」と無色透明の「銀泉」、2種類の源泉を持つ稀有な温泉地を1泊2日で堪能するプラン。',
        image: './onsen/arima.png',
        itinerary: [
            { day: 1, items: [
                { time: '11:00', label: '有馬温泉着（神戸電鉄）' },
                { time: '11:30', label: '金の湯で赤褐色の金泉を体験' },
                { time: '13:00', label: '有馬温泉街ランチ（有馬サイダー・炭酸せんべい）' },
                { time: '14:00', label: '銀の湯で無色透明の銀泉を体験' },
                { time: '15:00', label: '温泉街・石畳散策' },
                { time: '16:00', label: 'チェックイン・夕食前に宿の温泉へ' },
                { time: '18:30', label: '夕食（但馬牛・松葉蟹）' }
            ]},
            { day: 2, items: [
                { time: '7:30', label: '朝風呂（金泉）' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:30', label: '神戸市街へ移動' },
                { time: '11:00', label: '北野異人館街散策' },
                { time: '13:00', label: '南京町でランチ' },
                { time: '15:00', label: 'ハーバーランド散策後、帰路' }
            ]}
        ]
    },
    {
        id: 'beppu-2night',
        title: '別府温泉 2泊3日モデルコース',
        subtitle: '地獄めぐりと8種の泉質を体験',
        prefecture: 'oita',
        days: 3,
        onsen_id: 'o-oita-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '日本最大の湧出量を誇る別府温泉を2泊3日でじっくり堪能。7つの地獄めぐり・共同浴場・砂湯・地獄蒸し料理など別府ならではの体験が満載。',
        image: './onsen/beppu.png',
        itinerary: [
            { day: 1, items: [
                { time: '12:00', label: '別府駅着（特急ソニック）' },
                { time: '13:00', label: '鉄輪温泉の湯けむり街歩き' },
                { time: '14:00', label: '地獄めぐり（海地獄・血の池地獄）' },
                { time: '17:00', label: 'チェックイン' },
                { time: '18:30', label: '夕食（地獄蒸し料理）' },
                { time: '20:00', label: '共同浴場めぐり（熱の湯）' }
            ]},
            { day: 2, items: [
                { time: '8:00', label: '竹瓦温泉で朝風呂・砂湯体験' },
                { time: '10:00', label: '地獄めぐり残り（龍巻地獄・白池地獄）' },
                { time: '12:00', label: 'ランチ（関サバ・関アジ定食）' },
                { time: '14:00', label: '別府タワー・市内観光' },
                { time: '16:00', label: '明礬温泉・湯の花小屋見学' },
                { time: '20:00', label: '宿の大浴場でゆったり' }
            ]},
            { day: 3, items: [
                { time: '7:30', label: '朝の共同浴場（浜脇温泉）' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:00', label: '由布院へ移動（JR約50分）' },
                { time: '11:00', label: '由布院温泉・金鱗湖散策' },
                { time: '14:00', label: '大分空港または博多へ帰路' }
            ]}
        ]
    },
    {
        id: 'yufuin-1night',
        title: '由布院温泉 1泊2日モデルコース',
        subtitle: '高原リゾートで過ごす静かな湯旅',
        prefecture: 'oita',
        days: 2,
        onsen_id: 'o-oita-2',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '由布岳を望む高原温泉リゾート・由布院。アートとカフェ、温泉が融合した洗練された温泉地で過ごす1泊2日。早朝の金鱗湖の霧が幻想的。',
        image: './onsen/yufuin.png',
        itinerary: [
            { day: 1, items: [
                { time: '11:00', label: '由布院駅着（ゆふいんの森）' },
                { time: '11:30', label: '湯の坪街道・雑貨・カフェ散策' },
                { time: '13:00', label: 'ランチ（地鶏・豊後牛バーガー）' },
                { time: '14:30', label: '金鱗湖畔散策' },
                { time: '15:30', label: '由布院アートギャラリー巡り' },
                { time: '16:00', label: 'チェックイン・貸切露天風呂' },
                { time: '18:30', label: '夕食（大分郷土料理・地鶏等）' }
            ]},
            { day: 2, items: [
                { time: '6:30', label: '早朝の金鱗湖（朝霧の絶景）' },
                { time: '8:00', label: '朝食・宿の温泉を堪能' },
                { time: '10:00', label: 'チェックアウト・お土産購入' },
                { time: '11:30', label: '由布院地ビール・柚子コショウ購入' },
                { time: '13:00', label: '帰路（大分・博多方面）' }
            ]}
        ]
    },
    {
        id: 'dogo-1night',
        title: '道後温泉 1泊2日モデルコース',
        subtitle: '日本最古の温泉と松山城を巡る',
        prefecture: 'ehime',
        days: 2,
        onsen_id: 'o-ehime-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '3,000年の歴史を持つ日本最古の温泉・道後温泉。重要文化財の本館での入浴・松山城・坊っちゃん列車など松山の文化を満喫する1泊2日プラン。',
        image: './onsen/dogo.png',
        itinerary: [
            { day: 1, items: [
                { time: '11:00', label: '松山着（飛行機・新幹線＋特急）' },
                { time: '12:00', label: '松山城見学（ロープウェイ）' },
                { time: '14:00', label: '坊っちゃん列車で道後温泉へ' },
                { time: '14:30', label: '道後温泉本館（重要文化財）に入浴' },
                { time: '16:00', label: '道後商店街・アーケード散策' },
                { time: '17:00', label: 'チェックイン' },
                { time: '19:00', label: '夕食（鯛めし・じゃこ天）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝風呂（椿の湯）' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:00', label: '道後温泉別館「飛鳥乃湯泉」' },
                { time: '12:00', label: '松山市内でランチ（鯛塩ラーメン）' },
                { time: '14:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'kinosaki-1night',
        title: '城崎温泉 1泊2日モデルコース',
        subtitle: '7つの外湯を浴衣・下駄でめぐる',
        prefecture: 'hyogo',
        days: 2,
        onsen_id: 'o-hyogo-3',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '浴衣と下駄で外湯7か所をはしごする1,300年の湯文化が今も息づく城崎温泉。志賀直哉の小説の舞台を歩き、但馬の食も堪能する王道プラン。',
        image: './onsen/kinosaki.png',
        itinerary: [
            { day: 1, items: [
                { time: '14:00', label: '城崎温泉駅着（特急こうのとり）' },
                { time: '14:30', label: 'チェックイン・浴衣に着替え' },
                { time: '15:30', label: '一の湯・まんだら湯を入浴' },
                { time: '17:30', label: '大谿川沿い・柳並木を散策' },
                { time: '18:30', label: '夕食（松葉蟹または但馬牛）' },
                { time: '20:30', label: '御所の湯・鴻の湯を夜に入浴' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: 'さとの湯で朝風呂（最大・最新の外湯）' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:00', label: '残りの外湯スタンプ完成を目指す' },
                { time: '11:30', label: '城崎みやげ（かに・但馬牛カレー）' },
                { time: '13:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'shirahone-1night',
        title: '白骨温泉 1泊2日モデルコース',
        subtitle: '上高地と信州の秘湯を組み合わせる',
        prefecture: 'nagano',
        days: 2,
        onsen_id: 'o-nagano-4',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '乳白色の湯が神秘的な信州の秘湯・白骨温泉と、日本屈指の山岳景勝地・上高地を組み合わせた贅沢な1泊2日プラン。',
        image: './onsen/shirahone.png',
        itinerary: [
            { day: 1, items: [
                { time: '10:00', label: '松本駅着（特急あずさ）' },
                { time: '11:00', label: 'アルピコバスで上高地へ' },
                { time: '12:30', label: '上高地・大正池〜河童橋散策' },
                { time: '15:00', label: 'バスで白骨温泉へ移動（約50分）' },
                { time: '16:00', label: 'チェックイン・乳白色の露天風呂' },
                { time: '18:30', label: '夕食（山の幸・岩魚料理）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の白骨・原生林の朝風呂' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:30', label: '乗鞍高原散策（オプション）' },
                { time: '13:00', label: '松本市内でランチ（信州そば）' },
                { time: '15:00', label: '松本城見学後、帰路' }
            ]}
        ]
    },
    {
        id: 'ginzan-1night',
        title: '銀山温泉 1泊2日モデルコース',
        subtitle: '大正浪漫の温泉街と山形の食',
        prefecture: 'yamagata',
        days: 2,
        onsen_id: 'o-yamagata-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '大正ロマンの洋風建築が川沿いに立ち並ぶ銀山温泉。ガス灯に照らされた夜の温泉街は幻想的で全国随一の景観を誇る。山形の食も楽しむ1泊2日プラン。',
        image: './onsen/ginzan.png',
        itinerary: [
            { day: 1, items: [
                { time: '12:00', label: '大石田駅着（山形新幹線）' },
                { time: '12:30', label: 'バスで銀山温泉へ（約30分）' },
                { time: '13:30', label: '銀山川沿いの洋館建築を散策' },
                { time: '14:30', label: '延沢銀山跡・白銀の滝を見学' },
                { time: '16:00', label: 'チェックイン・外湯「しろがね湯」' },
                { time: '18:30', label: '夕食（山形牛・山菜料理）' },
                { time: '20:00', label: 'ガス灯が灯る夜の温泉街を散策' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '早朝の川霧・朝風呂' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:00', label: '尾花沢でそば・玉こんにゃく' },
                { time: '12:00', label: '山形市へ移動（山形そば・芋煮ランチ）' },
                { time: '14:00', label: '帰路（山形新幹線）' }
            ]}
        ]
    },
    {
        id: 'nyuto-2night',
        title: '乳頭温泉郷 2泊3日モデルコース',
        subtitle: '秋田の秘湯7宿を湯めぐり手形で巡る',
        prefecture: 'akita',
        days: 3,
        onsen_id: 'o-akita-1',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '7つの秘湯一軒宿が点在する乳頭温泉郷を「湯めぐり手形」で3日間かけてじっくり巡るプラン。田沢湖・角館とも組み合わせた秋田の王道旅。',
        image: './onsen/nyuto.png',
        itinerary: [
            { day: 1, items: [
                { time: '11:00', label: '田沢湖駅着（秋田新幹線こまち）' },
                { time: '12:00', label: '田沢湖観光・たつこ像' },
                { time: '14:00', label: 'バスで乳頭温泉郷へ（約50分）' },
                { time: '15:00', label: '湯めぐり手形を購入' },
                { time: '16:00', label: '鶴の湯温泉（最古・最有名）入浴' },
                { time: '18:30', label: 'チェックイン・秘湯の夕食（山菜・きりたんぽ）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の混浴露天風呂（乳白色）' },
                { time: '9:00', label: '朝食後・孫六温泉へ徒歩移動' },
                { time: '10:00', label: '蟹場温泉・大釜温泉を入浴' },
                { time: '13:00', label: '乳頭山トレッキング（オプション）' },
                { time: '16:00', label: '休暇村乳頭温泉郷で入浴' },
                { time: '19:00', label: '夕食・地酒「新政」を味わう' }
            ]},
            { day: 3, items: [
                { time: '8:00', label: '妙の湯・黒湯温泉を制覇' },
                { time: '11:00', label: '田沢湖駅へ移動' },
                { time: '12:00', label: '角館へ（武家屋敷・さくら並木）' },
                { time: '14:00', label: '角館散策・稲庭うどんランチ' },
                { time: '16:00', label: '秋田新幹線で帰路' }
            ]}
        ]
    },
    {
        id: 'ikaho-1night',
        title: '伊香保温泉 1泊2日モデルコース',
        subtitle: '石段街と榛名湖・水沢うどんを堪能',
        prefecture: 'gunma',
        days: 2,
        onsen_id: 'o-gunma-2',
        hotel_id: null,
        spot_ids: [],
        gourmet_ids: [],
        description: '365段の石段街で知られる群馬の名湯・伊香保温泉。茶褐色の「黄金の湯」と無色透明の「白銀の湯」の2種が湧き出る温泉地を、榛名湖・水沢うどんと合わせて楽しむ。',
        image: './onsen/ikaho.png',
        itinerary: [
            { day: 1, items: [
                { time: '13:00', label: '渋川駅着（JR上越線）' },
                { time: '13:30', label: 'バスで伊香保温泉へ（約25分）' },
                { time: '14:00', label: '石段街を上りながら散策' },
                { time: '15:00', label: '石段の湯（黄金の湯）で入浴' },
                { time: '16:00', label: 'チェックイン・宿の温泉' },
                { time: '18:30', label: '夕食（上州牛・豚肉料理）' },
                { time: '20:00', label: '夜の石段・温泉ライトアップ散策' }
            ]},
            { day: 2, items: [
                { time: '7:30', label: '朝風呂（露天風呂）' },
                { time: '9:00', label: '朝食・チェックアウト' },
                { time: '10:00', label: '榛名湖・榛名神社観光' },
                { time: '12:30', label: '水沢観音・水沢うどんランチ' },
                { time: '14:00', label: '渋川駅へ・帰路' }
            ]}
        ]
    }
];

export function getCourseById(id) {
    return courseList.find(c => c.id === id);
}
