/**
 * 47都道府県の温泉データ
 * 各温泉地の詳細情報を管理するモジュール
 *
 * 2026-10-19: 裏取りできない項目（歴史・足湯・日帰り料金/時間・効能・飲泉・車/駐車場）は削除。
 * 載せるのは公式情報で確認できた泉質・最寄り駅・行き方だけ。項目を足すときは必ず出典で確認する。
 */

export const onsenList = [
    {
        id: "o-hokkaido-1",
        name: "登別温泉",
        prefecture: "hokkaido",
        category: "硫黄泉",
        spring_type: "硫黄泉・塩化物泉・含鉄泉など9種類",
        description: "日本屈指の温泉地。地獄谷の迫力ある噴気孔と多様な泉質が魅力。クマ牧場でも有名。",
        image: "./onsen/noboribetsu.png",
        tags: [
            "硫黄泉",
            "地獄谷",
            "名湯",
            "北海道"
        ],
        access: {
            nearest_station: "登別駅（JR室蘭本線）",
            by_train: "登別駅からバスで約15分"
        },
        source_note: "visit-hokkaido.jp detail_10614 / nippon.com"
    },
    {
        id: "o-hokkaido-2",
        name: "洞爺湖温泉",
        prefecture: "hokkaido",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉など",
        description: "洞爺湖畔に広がるリゾート温泉。湖面に映る有珠山と花火大会が絵になる景勝地。",
        image: "./onsen/toyako.png",
        tags: [
            "湖畔",
            "花火",
            "リゾート",
            "北海道"
        ],
        access: {
            nearest_station: "洞爺駅（JR室蘭本線）",
            by_train: "洞爺駅からバスで約20分"
        },
        source_note: "rurubu / onsen.nifty"
    },
    {
        id: "o-hokkaido-3",
        name: "定山渓温泉",
        prefecture: "hokkaido",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "札幌から約1時間の秘境温泉。豊平川渓谷沿いに旅館が立ち並ぶ「札幌の奥座敷」。",
        image: "./onsen/zyozankei.png",
        tags: [
            "渓谷",
            "秘境",
            "札幌近郊",
            "北海道"
        ],
        access: {
            nearest_station: "札幌駅（JR）",
            by_train: "札幌駅から直行バスで約1時間〜1時間40分（便により異なる）"
        },
        source_note: "nta.co.jp / airtrip"
    },
    {
        id: "o-hokkaido-4",
        name: "阿寒湖温泉",
        prefecture: "hokkaido",
        category: "単純泉",
        spring_type: "単純温泉・硫黄泉など",
        description: "マリモで有名な阿寒湖畔の温泉。アイヌ文化に触れられる民芸品の街も魅力。",
        image: "./onsen/akan.png",
        tags: [
            "湖畔",
            "アイヌ",
            "マリモ",
            "北海道"
        ],
        access: {
            nearest_station: "釧路駅（JR根室本線）",
            by_train: "釧路駅からバスで約2時間"
        },
        source_note: "jtb.co.jp akanko_onsen / jorudan"
    },
    {
        id: "o-hokkaido-5",
        name: "層雲峡温泉",
        prefecture: "hokkaido",
        category: "単純泉",
        spring_type: "単純温泉・硫黄泉など",
        description: "大雪山国立公園の峡谷に広がる温泉地。断崖絶壁と滝、紅葉・氷瀑の景色が名物。",
        image: "./onsen/sounkyo.png",
        tags: [
            "峡谷",
            "大雪山",
            "紅葉",
            "北海道"
        ],
        access: {
            nearest_station: "上川駅（JR石北本線）",
            by_train: "上川駅からバスで約30〜35分"
        },
        source_note: "visit-hokkaido detail_10611 / jtb"
    },
    {
        id: "o-hokkaido-6",
        name: "十勝川温泉",
        prefecture: "hokkaido",
        category: "重曹泉",
        spring_type: "ナトリウム-塩化物・炭酸水素塩泉（モール温泉）",
        description: "植物由来のモール泉で有名。とろみのある湯と広い空、十勝の食がセットで楽しめる。",
        image: "./onsen/tokachigawa.png",
        tags: [
            "モール泉",
            "美肌",
            "十勝",
            "北海道"
        ],
        access: {
            nearest_station: "帯広駅（JR根室本線）",
            by_train: "帯広駅からバスで約30分"
        },
        source_note: "nta.co.jp tokachigawa / onsen.nifty"
    },
    {
        id: "o-hokkaido-7",
        name: "支笏湖温泉",
        prefecture: "hokkaido",
        category: "炭酸水素塩泉",
        spring_type: "炭酸水素塩泉・塩化物泉など（宿により異なる）",
        description: "透明度の高い支笏湖畔の温泉。湖と森の静けさに包まれる大人のリゾート。",
        image: "./onsen/shikotsu.png",
        tags: [
            "湖畔",
            "静寂",
            "森林",
            "北海道"
        ],
        access: {
            nearest_station: "千歳駅（JR千歳線）",
            by_train: "千歳駅からバスで約40〜50分"
        },
        source_note: "visit-hokkaido detail_10607 / onsen.nifty"
    },
    {
        id: "o-hokkaido-8",
        name: "川湯温泉",
        prefecture: "hokkaido",
        category: "酸性泉",
        spring_type: "酸性・含硫黄・鉄(II)-ナトリウム-硫酸塩・塩化物泉など",
        description: "硫黄山の麓に広がる強めの酸性泉。湯治文化と摩周・屈斜路観光の拠点。",
        image: "./onsen/kawayu.png",
        tags: [
            "硫黄山",
            "湯治",
            "道東",
            "北海道"
        ],
        access: {
            nearest_station: "川湯温泉駅（JR釧網本線）",
            by_train: "川湯温泉駅からバスで約10分"
        },
        source_note: "jorudan 615 / rurubu"
    },
    {
        id: "o-hokkaido-9",
        name: "ニセコ温泉郷",
        prefecture: "hokkaido",
        category: "硫黄泉",
        spring_type: "硫黄泉・塩化物泉・炭酸水素塩泉など（源泉により異なる）",
        description: "世界的スキーリゾートの温泉。羊蹄山を望む露天風呂や秘湯感のある野湯が点在。",
        image: "./onsen/niseko.png",
        tags: [
            "スキー",
            "羊蹄山",
            "リゾート",
            "北海道"
        ],
        access: {
            nearest_station: "ニセコ駅・倶知安駅（JR函館本線）",
            by_train: "ニセコ駅または倶知安駅からバス・タクシー（行き先の温泉により異なる）"
        },
        source_note: "visit-hokkaido detail_10606 / onsen.nifty"
    },
    {
        id: "o-aomori-1",
        name: "酸ヶ湯温泉",
        prefecture: "aomori",
        category: "酸性泉",
        spring_type: "酸性・含鉄・硫黄-アルミニウム-硫酸塩・塩化物泉",
        description: "八甲田山の秘湯。千人風呂と呼ばれる巨大な混浴ヒバ千人風呂が有名。国民保養温泉。",
        image: "./onsen/sukayu.png",
        tags: [
            "秘湯",
            "混浴",
            "ヒバ千人風呂",
            "青森"
        ],
        access: {
            nearest_station: "青森駅（JR）",
            by_train: "青森駅からJRバスで約1時間〜1時間20分"
        },
        source_note: "rurubu 70001061 / onsen.nifty / travelist"
    },
    {
        id: "o-aomori-2",
        name: "浅虫温泉",
        prefecture: "aomori",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩・塩化物泉など",
        description: "陸奥湾を望む温泉地。新鮮な海の幸と温泉を一緒に楽しめる「青森の奥座敷」。",
        image: "./onsen/asamushi.png",
        tags: [
            "海の幸",
            "海岸",
            "青森"
        ],
        access: {
            nearest_station: "浅虫温泉駅（青い森鉄道）",
            by_train: "浅虫温泉駅から徒歩約3分〜"
        },
        source_note: "rurubu 70001075 / jtb / onsen.nifty"
    },
    {
        id: "o-aomori-3",
        name: "大鰐温泉",
        prefecture: "aomori",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "弘前近郊の温泉地。長い歴史をもち、津軽観光の宿泊拠点として人気。",
        image: "./onsen/oowani.png",
        tags: [
            "津軽",
            "弘前",
            "歴史",
            "青森"
        ],
        access: {
            nearest_station: "大鰐温泉駅（JR奥羽本線・弘南鉄道）",
            by_train: "大鰐温泉駅（JR奥羽本線）から徒歩圏内"
        },
        source_note: "onsen.nifty（施設と駅の距離）。泉質は一次情報で確認できず"
    },
    {
        id: "o-aomori-4",
        name: "不老ふ死温泉",
        prefecture: "aomori",
        category: "塩化物泉",
        spring_type: "含鉄-ナトリウム・マグネシウム-塩化物強塩泉",
        description: "日本海を目の前に望む露天風呂が名物。夕日と波音を浴びるように楽しめる。",
        image: "./onsen/hurouhushi.png",
        tags: [
            "日本海",
            "夕日",
            "絶景露天",
            "青森"
        ],
        access: {
            nearest_station: "ウェスパ椿山駅（JR五能線）",
            by_train: "ウェスパ椿山駅から送迎バスで約5分（艫作駅からは徒歩約20分）"
        },
        source_note: "rurubu 70001083 / yuru-to"
    },
    {
        id: "o-aomori-5",
        name: "嶽温泉",
        prefecture: "aomori",
        category: "硫黄泉",
        spring_type: "硫黄泉（酸性）",
        description: "岩木山の麓に湧く湯治場風情の温泉。素朴な宿と山の空気が心地いい。",
        image: "./onsen/dake.png",
        tags: [
            "岩木山",
            "湯治",
            "素朴",
            "青森"
        ],
        access: {
            nearest_station: "弘前駅（JR奥羽本線）",
            by_train: "弘前駅からバスで約50〜55分"
        },
        source_note: "rurubu 70001082 / tohokukanko"
    },
    {
        id: "o-iwate-1",
        name: "花巻温泉郷",
        prefecture: "iwate",
        category: "単純泉",
        spring_type: "単純温泉など（温泉地により異なる）",
        description: "宮沢賢治ゆかりの花巻の温泉郷。花巻温泉・大沢温泉・鉛温泉など、趣の異なる温泉地が北上川の支流沿いに点在する。",
        image: "./onsen/hanamaki.png",
        tags: [
            "秘湯",
            "宮沢賢治",
            "名湯",
            "岩手"
        ],
        access: {
            nearest_station: "花巻駅（JR東北本線）",
            by_train: "花巻駅からバスで約20〜30分（花巻温泉）"
        },
        source_note: "rurubu 70001120 / jorudan 1360"
    },
    {
        id: "o-iwate-2",
        name: "松川温泉",
        prefecture: "iwate",
        category: "硫黄泉",
        spring_type: "単純硫黄泉など（宿により異なる）",
        description: "岩手山の西側、八幡平の山中に湧く硫黄泉の秘湯。白濁した湯と山の静けさが魅力。",
        image: "./onsen/matsukawa.png",
        tags: [
            "硫黄泉",
            "秘湯",
            "自噴",
            "岩手"
        ],
        access: {
            nearest_station: "盛岡駅（JR）",
            by_train: "盛岡駅からバスで約1時間50分"
        },
        source_note: "onsen.nifty / rakuten"
    },
    {
        id: "o-iwate-3",
        name: "つなぎ温泉",
        prefecture: "iwate",
        category: "硫黄泉",
        spring_type: "単純硫黄泉・アルカリ性単純温泉",
        description: "御所湖のほとりの温泉地。盛岡から近く、湖畔の景色と合わせて楽しめる。",
        image: "./onsen/tsunagi.png",
        tags: [
            "湖畔",
            "盛岡近郊",
            "岩手"
        ],
        access: {
            nearest_station: "盛岡駅（JR東北新幹線・東北本線）",
            by_train: "盛岡駅からバスで約30〜35分"
        },
        source_note: "jtb tsunagi_onsen / rurubu 70001107"
    },
    {
        id: "o-iwate-4",
        name: "夏油温泉",
        prefecture: "iwate",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉など（源泉により異なる）",
        description: "山深い秘湯で、川沿いの露天風呂が有名。湯量豊富で温泉好きの聖地。",
        image: "./onsen/getou.png",
        tags: [
            "秘湯",
            "露天風呂",
            "湯量",
            "岩手"
        ],
        access: {
            nearest_station: "北上駅（JR東北新幹線・東北本線）",
            by_train: "北上駅からバスで約1時間（冬季は休業・運休）"
        },
        source_note: "jorudan 1380 / jreast the-onsen geto"
    },
    {
        id: "o-iwate-5",
        name: "八幡平温泉郷",
        prefecture: "iwate",
        category: "硫黄泉",
        spring_type: "単純硫黄泉・硫黄泉など",
        description: "八幡平の高原に点在する温泉群。トレッキングや紅葉、雪景色と相性抜群。",
        image: "./onsen/hachimantai.png",
        tags: [
            "高原",
            "紅葉",
            "自然",
            "岩手"
        ],
        access: {
            nearest_station: "盛岡駅（JR東北新幹線）",
            by_train: "盛岡駅からバスで約80〜90分"
        },
        source_note: "jtb hachimantai_onsen / rurubu 70001104"
    },
    {
        id: "o-miyagi-1",
        name: "鳴子温泉郷",
        prefecture: "miyagi",
        category: "硫黄泉",
        spring_type: "硫黄泉・炭酸水素塩泉など多様（旧分類で9種類）",
        description: "多彩な泉質が集まる「温泉の宝庫」。旧分類では9種類の泉質が湧くとされる。こけしの産地としても知られる。",
        image: "./onsen/naruko.png",
        tags: [
            "こけし",
            "秘湯",
            "宮城"
        ],
        access: {
            nearest_station: "鳴子温泉駅（JR陸羽東線）",
            by_train: "古川駅からJR陸羽東線で約45分"
        },
        source_note: "jreast otona naruko / rurubu 24681 / jtb"
    },
    {
        id: "o-miyagi-2",
        name: "作並温泉",
        prefecture: "miyagi",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩・塩化物泉など",
        description: "広瀬川渓谷沿いの温泉地。仙台から近く「仙台の奥座敷」として親しまれる。",
        image: "./onsen/sakunami.png",
        tags: [
            "渓谷",
            "仙台近郊",
            "宮城"
        ],
        access: {
            nearest_station: "作並駅（JR仙山線）",
            by_train: "仙台駅からJR仙山線で約40分の作並駅から、バスまたは宿の送迎。仙台駅からの直通バスもある"
        },
        source_note: "jtb sakunami_onsen / jorudan 1263"
    },
    {
        id: "o-miyagi-3",
        name: "秋保温泉",
        prefecture: "miyagi",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉など（施設により異なる）",
        description: "仙台近郊の人気温泉地。名取川渓谷や滝の景観と合わせて楽しめる「仙台の奥座敷」。",
        image: "./onsen/akiu.png",
        tags: [
            "仙台近郊",
            "渓谷",
            "滝",
            "宮城"
        ],
        access: {
            nearest_station: "仙台駅（JR）",
            by_train: "仙台駅からバスで約40〜60分"
        },
        source_note: "jtb akiu_onsen / rurubu 70001175"
    },
    {
        id: "o-miyagi-4",
        name: "松島温泉",
        prefecture: "miyagi",
        category: "塩化物泉",
        spring_type: "単純温泉・ナトリウム-塩化物泉など（源泉により異なる）",
        description: "日本三景・松島エリアの温泉。松島湾の島々の景色と海の幸が魅力。",
        image: "./onsen/matsushima.png",
        tags: [
            "日本三景",
            "海の幸",
            "観光",
            "宮城"
        ],
        access: {
            nearest_station: "松島海岸駅（JR仙石線）・松島駅（JR東北本線）",
            by_train: "宿により松島海岸駅から徒歩すぐ〜、松島駅から徒歩約15分など"
        },
        source_note: "jtb matsushima_onsen / wikid / jalan"
    },
    {
        id: "o-miyagi-5",
        name: "遠刈田温泉",
        prefecture: "miyagi",
        category: "硫酸塩泉",
        spring_type: "塩化物泉・硫酸塩泉など（施設により異なる）",
        description: "蔵王連峰の麓にある温泉地。蔵王観光の拠点として人気で、落ち着いた温泉街が広がる。",
        image: "./onsen/toogatta.png",
        tags: [
            "蔵王",
            "山麓",
            "温泉街",
            "宮城"
        ],
        access: {
            nearest_station: "白石蔵王駅（JR東北新幹線）",
            by_train: "白石蔵王駅からバスで約45〜50分"
        },
        source_note: "rurubu 70001178 / jalan"
    },
    {
        id: "o-akita-1",
        name: "乳頭温泉郷",
        prefecture: "akita",
        category: "硫黄泉",
        spring_type: "硫黄泉・炭酸水素塩泉など（宿により異なる）",
        description: "田沢湖の西、ブナの森に一軒宿が点在する秘湯の温泉郷。宿ごとに泉質が異なり、湯めぐりが楽しめる。",
        image: "./onsen/nyuto.png",
        tags: [
            "秘湯",
            "鶴の湯",
            "露天風呂",
            "秋田"
        ],
        access: {
            nearest_station: "田沢湖駅（JR秋田新幹線）",
            by_train: "田沢湖駅からバスで約40〜50分"
        },
        source_note: "jtb nyutou_onsen / rurubu 70001250"
    },
    {
        id: "o-akita-2",
        name: "玉川温泉",
        prefecture: "akita",
        category: "酸性泉",
        spring_type: "酸性泉（強酸性）",
        description: "強い酸性の湯で知られる温泉。湯治文化が今も息づき、長期滞在の湯治客が多い。",
        image: "./onsen/tamagawa.png",
        tags: [
            "強酸性",
            "湯治",
            "秘湯",
            "秋田"
        ],
        access: {
            nearest_station: "田沢湖駅（JR秋田新幹線）",
            by_train: "田沢湖駅からバスで約65〜80分（冬期は経路・運行が変わる）"
        },
        source_note: "onsen.nifty tamagawa / jorudan 655"
    },
    {
        id: "o-akita-3",
        name: "男鹿温泉郷",
        prefecture: "akita",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "男鹿半島の温泉。なまはげ文化と日本海の景色、海の幸がセットで楽しめる。",
        image: "./onsen/oga.png",
        tags: [
            "日本海",
            "なまはげ",
            "海の幸",
            "秋田"
        ],
        access: {
            nearest_station: "男鹿駅（JR男鹿線）",
            by_train: "男鹿駅からバスで約45〜50分"
        },
        source_note: "jtb oga_onsen / rurubu 70001151"
    },
    {
        id: "o-akita-4",
        name: "大湯温泉",
        prefecture: "akita",
        category: "塩化物泉",
        spring_type: "塩化物泉など（源泉により異なる）",
        description: "十和田エリアの温泉。渓流沿いの景色と落ち着いた湯治場の雰囲気が魅力。",
        image: "./onsen/oyu.png",
        tags: [
            "渓流",
            "湯治",
            "静けさ",
            "秋田"
        ],
        access: {
            nearest_station: "十和田南駅（JR花輪線）",
            by_train: "十和田南駅からバスで約20分"
        },
        source_note: "rurubu 70001093 / jtb ooyu_onsen_akita"
    },
    {
        id: "o-akita-5",
        name: "田沢湖高原温泉郷",
        prefecture: "akita",
        category: "硫黄泉",
        spring_type: "硫黄泉・硫酸塩泉・単純温泉など（施設により異なる）",
        description: "田沢湖やスキー場に近い高原の温泉。四季のアクティビティと相性がいい。",
        image: "./onsen/tazawako.png",
        tags: [
            "高原",
            "田沢湖",
            "スキー",
            "秋田"
        ],
        access: {
            nearest_station: "田沢湖駅（JR秋田新幹線）",
            by_train: "田沢湖駅からバスで約30〜40分"
        },
        source_note: "tohokukanko detail_1007145 / rurubu 70001143"
    },
    {
        id: "o-yamagata-1",
        name: "銀山温泉",
        prefecture: "yamagata",
        category: "塩化物泉",
        spring_type: "含硫黄-ナトリウム-塩化物・硫酸塩泉",
        description: "銀山川沿いに木造多層の旅館が立ち並ぶ温泉街。ガス灯がともる夜の景色で知られる。",
        image: "./onsen/ginzan.png",
        tags: [
            "大正ロマン",
            "木造旅館",
            "冬景色",
            "山形"
        ],
        access: {
            nearest_station: "大石田駅（JR奥羽本線）",
            by_train: "大石田駅からバスで約40〜45分"
        },
        source_note: "knt S060014 / jorudan 2131"
    },
    {
        id: "o-yamagata-2",
        name: "蔵王温泉",
        prefecture: "yamagata",
        category: "酸性泉",
        spring_type: "酸性・含硫黄-アルミニウム-硫酸塩・塩化物泉など（強酸性）",
        description: "国内有数の強酸性硫黄泉。冬のスキーと温泉を同時に楽しめるリゾート。樹氷鑑賞の拠点にも。",
        image: "./onsen/zao.png",
        tags: [
            "硫黄泉",
            "スキー",
            "樹氷",
            "山形"
        ],
        access: {
            nearest_station: "山形駅（JR山形新幹線）",
            by_train: "山形駅からバスで約40分"
        },
        source_note: "convention.or.jp umaibe / jalan / yuru-to"
    },
    {
        id: "o-yamagata-3",
        name: "かみのやま温泉",
        prefecture: "yamagata",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物・硫酸塩泉",
        description: "城下町の風情が残る温泉地。武家屋敷やワイナリー観光と合わせて楽しめる。",
        image: "./onsen/kaminoyama.png",
        tags: [
            "城下町",
            "歴史",
            "山形"
        ],
        access: {
            nearest_station: "かみのやま温泉駅（JR山形新幹線）",
            by_train: "かみのやま温泉駅から徒歩約15〜30分（宿により異なる）"
        },
        source_note: "jtb kaminoyama_onsen / rurubu 70001182"
    },
    {
        id: "o-yamagata-4",
        name: "天童温泉",
        prefecture: "yamagata",
        category: "硫酸塩泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩泉など",
        description: "将棋駒の産地で知られる天童の温泉。さくらんぼ観光の拠点としても便利。",
        image: "./onsen/tendou.png",
        tags: [
            "将棋",
            "さくらんぼ",
            "山形"
        ],
        access: {
            nearest_station: "天童駅（JR奥羽本線）",
            by_train: "天童駅から徒歩約15〜20分"
        },
        source_note: "rurubu 70001183 / jtb tendo_onsen"
    },
    {
        id: "o-yamagata-5",
        name: "赤湯温泉",
        prefecture: "yamagata",
        category: "塩化物泉",
        spring_type: "含硫黄-ナトリウム・カルシウム-塩化物泉",
        description: "南陽市の古湯。ぶどう畑やワイナリーが近く、落ち着いた温泉街が広がる。",
        image: "./onsen/akayu.png",
        tags: [
            "古湯",
            "ワイン",
            "山形"
        ],
        access: {
            nearest_station: "赤湯駅（JR山形新幹線）",
            by_train: "赤湯駅から車で約5〜10分"
        },
        source_note: "jtb akayu_onsen / rurubu 70001280"
    },
    {
        id: "o-yamagata-6",
        name: "あつみ温泉",
        prefecture: "yamagata",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物・硫酸塩泉など",
        description: "日本海側に近い温泉地。川沿いの温泉街と海の幸が魅力。",
        image: "./onsen/atsumi.png",
        tags: [
            "温泉街",
            "海の幸",
            "山形"
        ],
        access: {
            nearest_station: "あつみ温泉駅（JR羽越本線）",
            by_train: "あつみ温泉駅からバスで約5分"
        },
        source_note: "鶴岡市 あつみ温泉パンフ / yuru-to"
    },
    {
        id: "o-fukushima-1",
        name: "東山温泉",
        prefecture: "fukushima",
        category: "硫酸塩泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩・塩化物泉",
        description: "会津若松の奥座敷。七日町通りや鶴ヶ城観光の後に訪れる温泉地として人気。",
        image: "./onsen/higashiyama.png",
        tags: [
            "会津",
            "歴史",
            "福島"
        ],
        access: {
            nearest_station: "会津若松駅（JR磐越西線）",
            by_train: "会津若松駅からバスで約15〜20分"
        },
        source_note: "onsen.nifty higashiyama / knt"
    },
    {
        id: "o-fukushima-2",
        name: "磐梯熱海温泉",
        prefecture: "fukushima",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "郡山の奥座敷と呼ばれる温泉地。pHの高いアルカリ性単純温泉で、肌あたりのやわらかい湯が特徴。",
        image: "./onsen/bandaiatami.png",
        tags: [
            "磐梯山",
            "紅葉",
            "福島"
        ],
        access: {
            nearest_station: "磐梯熱海駅（JR磐越西線）",
            by_train: "磐梯熱海駅から徒歩約3〜5分"
        },
        source_note: "onsen.nifty banndaiatami / tohokukanko 1005567"
    },
    {
        id: "o-fukushima-3",
        name: "飯坂温泉",
        prefecture: "fukushima",
        category: "単純泉",
        spring_type: "単純温泉（アルカリ性単純温泉の源泉もある）",
        description: "福島市の奥座敷。共同浴場めぐりが楽しめる歴史ある温泉街で、松尾芭蕉も訪れたとされる。",
        image: "./onsen/iizaka.png",
        tags: [
            "共同浴場",
            "温泉街",
            "歴史",
            "福島"
        ],
        access: {
            nearest_station: "飯坂温泉駅（福島交通飯坂線）",
            by_train: "福島駅から福島交通飯坂線で約21〜25分"
        },
        source_note: "rurubu 70001203 / media.jreast 2965"
    },
    {
        id: "o-fukushima-4",
        name: "土湯温泉",
        prefecture: "fukushima",
        category: "単純泉",
        spring_type: "単純温泉・炭酸水素塩泉など（源泉により異なる）",
        description: "荒川沿いの渓谷温泉。こけし文化でも知られ、落ち着いた湯の町。",
        image: "./onsen/tsuchiyu.png",
        tags: [
            "渓谷",
            "こけし",
            "福島"
        ],
        access: {
            nearest_station: "福島駅（JR東北新幹線）",
            by_train: "福島駅からバスで約40分"
        },
        source_note: "onsen.nifty tsuchiyu / jorudan 1407"
    },
    {
        id: "o-fukushima-5",
        name: "芦ノ牧温泉",
        prefecture: "fukushima",
        category: "硫酸塩泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩・塩化物泉など",
        description: "会津の渓谷沿いに広がる温泉地。絶景の露天風呂と鉄道旅の相性が良い。",
        image: "./onsen/ashinomaki.png",
        tags: [
            "渓谷",
            "露天風呂",
            "会津",
            "福島"
        ],
        access: {
            nearest_station: "芦ノ牧温泉駅（会津鉄道）",
            by_train: "芦ノ牧温泉駅からタクシーで約5〜7分（宿の送迎がある場合も）"
        },
        source_note: "skyticket / onsen.nifty ashinomaki"
    },
    {
        id: "o-fukushima-6",
        name: "高湯温泉",
        prefecture: "fukushima",
        category: "硫黄泉",
        spring_type: "酸性・含硫黄-アルミニウム・カルシウム-硫酸塩泉など（硫黄泉）",
        description: "吾妻連峰の山中に湧く白濁の硫黄泉。濃い硫黄泉を源泉かけ流しで楽しめる宿が多い。",
        image: "./onsen/takayu.png",
        tags: [
            "白濁",
            "秘湯",
            "山中",
            "福島"
        ],
        access: {
            nearest_station: "福島駅（JR東北新幹線）",
            by_train: "福島駅からバスで約30〜40分"
        },
        source_note: "jorudan 684 / media.jreast 2965 / 環境省 hoyo_017"
    },
    {
        id: "o-ibaraki-1",
        name: "袋田温泉",
        prefecture: "ibaraki",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉など",
        description: "日本三名瀑・袋田の滝のそばに湧く温泉。紅葉と氷瀑の季節は特に人気が高い。",
        image: "./onsen/fukuroda.png",
        tags: [
            "袋田の滝",
            "紅葉",
            "茨城"
        ],
        access: {
            nearest_station: "袋田駅（JR水郡線）",
            by_train: "袋田駅からバスで約5〜8分"
        },
        source_note: "jtb ibaraki / onsen.nifty fukuroda"
    },
    {
        id: "o-ibaraki-2",
        name: "五浦温泉",
        prefecture: "ibaraki",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "太平洋を望む海辺の温泉。絶景と海の幸を楽しめる北茨城の名湯。",
        image: "./onsen/itsura.png",
        tags: [
            "太平洋",
            "海の幸",
            "絶景",
            "茨城"
        ],
        access: {
            nearest_station: "大津港駅（JR常磐線）",
            by_train: "大津港駅からタクシー・送迎で約5分"
        },
        source_note: "rurubu 70001421 / knt S080002"
    },
    {
        id: "o-ibaraki-3",
        name: "大子温泉",
        prefecture: "ibaraki",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉など（施設により異なる）",
        description: "奥久慈の自然に囲まれた温泉地。川沿いの景色と里山の空気が魅力。",
        image: "./onsen/daigo.png",
        tags: [
            "奥久慈",
            "里山",
            "渓流",
            "茨城"
        ],
        access: {
            nearest_station: "常陸大子駅（JR水郡線）",
            by_train: "常陸大子駅から徒歩すぐ〜車で約10分（施設により異なる）"
        },
        source_note: "rurubu 70001497 / onsen.nifty daigo"
    },
    {
        id: "o-ibaraki-4",
        name: "筑波山温泉",
        prefecture: "ibaraki",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉など",
        description: "筑波山の麓にある温泉。関東平野の夜景を望む展望風呂が人気。",
        image: "./onsen/tsukubasan.png",
        tags: [
            "夜景",
            "山麓",
            "茨城"
        ],
        access: {
            nearest_station: "つくば駅（つくばエクスプレス）",
            by_train: "つくば駅から筑波山シャトルバスで約40分"
        },
        source_note: "jtb tsukubasan_onsen / asoview"
    },
    {
        id: "o-tochigi-1",
        name: "那須温泉郷",
        prefecture: "tochigi",
        category: "硫黄泉",
        spring_type: "単純酸性硫黄泉・単純温泉など（温泉地により異なる）",
        description: "御用邸でも知られる那須高原の温泉群。那須岳山麓に大小多数の旅館・ホテルが点在。",
        image: "./onsen/nasu.png",
        tags: [
            "那須高原",
            "御用邸",
            "栃木"
        ],
        access: {
            nearest_station: "那須塩原駅（JR東北新幹線）",
            by_train: "那須塩原駅からバスで約45分〜1時間15分（行き先により異なる）"
        },
        source_note: "rurubu 70001407 / jalan yad339815"
    },
    {
        id: "o-tochigi-2",
        name: "日光湯元温泉",
        prefecture: "tochigi",
        category: "硫黄泉",
        spring_type: "含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩泉（硫化水素型）",
        description: "奥日光の温泉地。中禅寺湖や戦場ヶ原の自然と世界遺産観光の拠点として知られる。",
        image: "./onsen/nikko.png",
        tags: [
            "奥日光",
            "世界遺産",
            "栃木"
        ],
        access: {
            nearest_station: "東武日光駅・JR日光駅",
            by_train: "東武日光駅からバスで約70〜80分"
        },
        source_note: "jorudan 2600 / 環境省 hoyo_019 / jtb nikkoyumoto_onsen"
    },
    {
        id: "o-tochigi-3",
        name: "鬼怒川温泉",
        prefecture: "tochigi",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "鬼怒川渓谷沿いの大型温泉地。テーマパークや日光観光と相性が良い。",
        image: "./onsen/kinugawa.png",
        tags: [
            "渓谷",
            "観光拠点",
            "栃木"
        ],
        access: {
            nearest_station: "鬼怒川温泉駅（東武鬼怒川線）",
            by_train: "浅草駅から東武特急で約2時間"
        },
        source_note: "nta.co.jp kinugawa / rurubu 24504"
    },
    {
        id: "o-tochigi-4",
        name: "塩原温泉郷",
        prefecture: "tochigi",
        category: "塩化物泉",
        spring_type: "塩化物泉・炭酸水素塩泉・硫黄泉など（温泉地により異なる）",
        description: "箒川沿いに泉質の異なる温泉地が点在する温泉郷。「塩原十一湯」と呼ばれ、渓谷美と紅葉の散策が楽しめる。",
        image: "./onsen/shiobara.png",
        tags: [
            "渓谷",
            "紅葉",
            "温泉郷",
            "栃木"
        ],
        access: {
            nearest_station: "那須塩原駅（JR東北新幹線）",
            by_train: "那須塩原駅からJRバスで約1時間（塩原温泉バスターミナル）"
        },
        source_note: "nippon.com gu005008 / rurubu 70001465 70001460"
    },
    {
        id: "o-tochigi-5",
        name: "湯西川温泉",
        prefecture: "tochigi",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "平家落人伝説が残る山里の温泉。かまくら祭りなど冬の風情も人気。",
        image: "./onsen/yunishigawa.png",
        tags: [
            "山里",
            "雪景色",
            "秘湯",
            "栃木"
        ],
        access: {
            nearest_station: "湯西川温泉駅（野岩鉄道会津鬼怒川線）",
            by_train: "湯西川温泉駅からバスで約20〜25分"
        },
        source_note: "gltjp 15797 / knt S090052"
    },
    {
        id: "o-gunma-1",
        name: "草津温泉",
        prefecture: "gunma",
        category: "酸性泉",
        spring_type: "酸性・含硫黄-アルミニウム-硫酸塩・塩化物泉など（強酸性）",
        description: "日本を代表する名湯。街の中心にある湯畑と時間湯が草津のシンボル。日本三名泉の一つ。",
        image: "./onsen/kusatsu.png",
        tags: [
            "湯畑",
            "時間湯",
            "日本三名泉",
            "群馬"
        ],
        access: {
            nearest_station: "長野原草津口駅（JR吾妻線）",
            by_train: "長野原草津口駅からバスで約25分"
        },
        source_note: "群馬県資料 40545.pdf / nippon.com gu005002"
    },
    {
        id: "o-gunma-2",
        name: "伊香保温泉",
        prefecture: "gunma",
        category: "硫酸塩泉",
        spring_type: "硫酸塩泉（黄金の湯）など。無色透明の「白銀の湯」もある",
        description: "365段の石段が名物のレトロな温泉街。黄金の湯と白銀の湯の2種を楽しめる人気温泉。",
        image: "./onsen/ikaho.png",
        tags: [
            "石段街",
            "昭和レトロ",
            "黄金の湯",
            "群馬"
        ],
        access: {
            nearest_station: "伊香保温泉（バス停）",
            by_train: "渋川駅からバスで約20〜25分"
        },
        source_note: "nta.co.jp ikaho / knt S100111"
    },
    {
        id: "o-gunma-3",
        name: "万座温泉",
        prefecture: "gunma",
        category: "硫黄泉",
        spring_type: "酸性・含硫黄-マグネシウム・ナトリウム-硫酸塩泉、単純硫黄泉など",
        description: "標高1,800mに位置する高地温泉。白濁した硫黄泉の露天風呂からの眺望が絶品。",
        image: "./onsen/manza.png",
        tags: [
            "高山温泉",
            "白濁",
            "露天風呂",
            "群馬"
        ],
        access: {
            nearest_station: "万座・鹿沢口駅（JR吾妻線）",
            by_train: "万座・鹿沢口駅からバスで約40分"
        },
        source_note: "jtb manza_onsen / rurubu 70001386"
    },
    {
        id: "o-gunma-4",
        name: "四万温泉",
        prefecture: "gunma",
        category: "硫酸塩泉",
        spring_type: "ナトリウム・カルシウム-塩化物・硫酸塩泉",
        description: "「四万の病を癒す」と伝わる湯治の里。川沿いの静けさと積善館の雰囲気が人気。",
        image: "./onsen/shiman.png",
        tags: [
            "湯治",
            "レトロ",
            "川沿い",
            "群馬"
        ],
        access: {
            nearest_station: "中之条駅（JR吾妻線）",
            by_train: "中之条駅からバスで約40分"
        },
        source_note: "rurubu 24906 / jorudan 611"
    },
    {
        id: "o-gunma-5",
        name: "みなかみ温泉郷",
        prefecture: "gunma",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "利根川上流の自然に囲まれた温泉郷。ラフティングやスキーと一緒に楽しめる。",
        image: "./onsen/minakami.png",
        tags: [
            "自然",
            "アクティビティ",
            "温泉郷",
            "群馬"
        ],
        access: {
            nearest_station: "水上駅（JR上越線）"
        },
        source_note: "泉質・所要時間は一次情報で確認できず"
    },
    {
        id: "o-gunma-6",
        name: "老神温泉",
        prefecture: "gunma",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉・単純硫黄泉など",
        description: "尾瀬観光の拠点として便利な温泉地。山の景色と静かな温泉街が魅力。",
        image: "./onsen/oigami.png",
        tags: [
            "尾瀬",
            "温泉街",
            "群馬"
        ],
        access: {
            nearest_station: "沼田駅（JR上越線）",
            by_train: "沼田駅からバスで約45〜50分"
        },
        source_note: "rurubu 70001400 / jalan yad324185"
    },
    {
        id: "o-saitama-1",
        name: "寄居温泉",
        prefecture: "saitama",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "埼玉県寄居町、荒川沿いの温泉地。",
        image: "./onsen/yorii.png",
        tags: [
            "日帰り温泉",
            "露天風呂",
            "埼玉"
        ],
        access: {
            nearest_station: "寄居駅（東武東上線・JR八高線）"
        },
        source_note: "検索で該当する温泉地なし"
    },
    {
        id: "o-saitama-2",
        name: "秩父温泉",
        prefecture: "saitama",
        category: "単純泉",
        spring_type: "塩化物冷鉱泉・アルカリ性単純温泉など（施設により異なる）",
        description: "秩父の自然と祭り文化を楽しめる温泉エリア。渓谷や神社巡りと相性が良い。",
        image: "./onsen/chichibu.png",
        tags: [
            "秩父",
            "自然",
            "観光",
            "埼玉"
        ],
        access: {
            nearest_station: "西武秩父駅（西武秩父線）",
            by_train: "西武秩父駅に駅前温泉（祭の湯）が隣接"
        },
        source_note: "walkerplus 祭の湯 / jalan OSN_50913"
    },
    {
        id: "o-saitama-3",
        name: "長瀞温泉",
        prefecture: "saitama",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "長瀞渓谷のライン下りと合わせて楽しめる温泉。川と岩畳の景観が魅力。",
        image: "./onsen/nagatoro.png",
        tags: [
            "渓谷",
            "岩畳",
            "川",
            "埼玉"
        ],
        access: {
            nearest_station: "長瀞駅（秩父鉄道）",
            by_train: "長瀞駅から徒歩約3分の宿もある"
        },
        source_note: "knt S110016"
    },
    {
        id: "o-chiba-1",
        name: "犬吠埼温泉",
        prefecture: "chiba",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物強塩泉など（施設により異なる）",
        description: "犬吠埼灯台の近く、太平洋に面した温泉。山頂と離島を除くと日本でいちばん早く初日の出が見られる場所として知られる。",
        image: "./onsen/inubosaki.png",
        tags: [
            "初日の出",
            "太平洋",
            "海岸",
            "千葉"
        ],
        access: {
            nearest_station: "犬吠駅（銚子電鉄）",
            by_train: "犬吠駅から徒歩約7分（宿により異なる）"
        },
        source_note: "rurubu 70001427 / jorudan 1917"
    },
    {
        id: "o-chiba-2",
        name: "鴨川温泉",
        prefecture: "chiba",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉・炭酸水素塩泉など（宿により異なる）",
        description: "房総の海を楽しむ温泉地。海辺のリゾート感と新鮮な海の幸が魅力。",
        image: "./onsen/kamogawa.png",
        tags: [
            "房総",
            "海の幸",
            "リゾート",
            "千葉"
        ],
        access: {
            nearest_station: "安房鴨川駅（JR外房線・内房線）",
            by_train: "安房鴨川駅から徒歩約15分〜（宿により異なる）"
        },
        source_note: "rurubu 70001442 / tabiiro"
    },
    {
        id: "o-chiba-3",
        name: "勝浦温泉",
        prefecture: "chiba",
        category: "重曹泉",
        spring_type: "炭酸水素塩泉・塩化物泉など（施設により異なる）",
        description: "太平洋に面した温泉。朝市や港町の雰囲気とセットで楽しめる。",
        image: "./onsen/katsuura.png",
        tags: [
            "港町",
            "朝市",
            "太平洋",
            "千葉"
        ],
        access: {
            nearest_station: "勝浦駅（JR外房線）",
            by_train: "勝浦駅から徒歩約5分〜（施設により異なる）"
        },
        source_note: "rurubu 70002616 / jalan yad326499"
    },
    {
        id: "o-chiba-4",
        name: "館山温泉",
        prefecture: "chiba",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉など（施設により異なる）",
        description: "南房総の海辺温泉。夕日と海の景色を満喫できるリゾート感が人気。",
        image: "./onsen/tateyama.png",
        tags: [
            "南房総",
            "夕日",
            "海",
            "千葉"
        ],
        access: {
            nearest_station: "館山駅（JR内房線）"
        },
        source_note: "館山温泉組合パンフ（tateyamacity.com）/ onsen.nifty"
    },
    {
        id: "o-tokyo-1",
        name: "奥多摩温泉",
        prefecture: "tokyo",
        category: "その他",
        spring_type: "メタほう酸・ふっ素を含む温泉（もえぎの湯）",
        description: "東京都奥多摩町の温泉。多摩川上流の渓谷に近く、奥多摩駅から歩いて行ける日帰り温泉がある。",
        image: "./onsen/okutama.png",
        tags: [
            "都会の秘湯",
            "渓谷",
            "おこもり",
            "東京"
        ],
        access: {
            nearest_station: "奥多摩駅（JR青梅線）",
            by_train: "奥多摩駅から徒歩約10分（もえぎの湯）"
        },
        source_note: "gltjp 14132 / jorudan 1531"
    },
    {
        id: "o-tokyo-2",
        name: "大島温泉",
        prefecture: "tokyo",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉など",
        description: "伊豆大島で楽しめる島の温泉。火山島ならではの景色と合わせて楽しめる。",
        image: "./onsen/oshima.png",
        tags: [
            "島",
            "火山",
            "リゾート",
            "東京"
        ],
        access: {
            nearest_station: "元町港（東海汽船）",
            by_train: "元町港から徒歩圏内に日帰り温泉（浜の湯・御神火温泉）がある"
        },
        source_note: "rurubu 80012741 / tabi-mag tk0182"
    },
    {
        id: "o-tokyo-3",
        name: "八丈島温泉",
        prefecture: "tokyo",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物強塩泉など（施設により異なる）",
        description: "南国ムードの八丈島で楽しめる温泉。海と緑に囲まれた開放感が魅力。",
        image: "./onsen/hachijojima.png",
        tags: [
            "島",
            "南国",
            "海",
            "東京"
        ],
        access: {
            nearest_station: "八丈島空港"
        },
        source_note: "tabi-mag tk1522 tk1523"
    },
    {
        id: "o-kanagawa-1",
        name: "箱根温泉",
        prefecture: "kanagawa",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉・ナトリウム-塩化物泉など（約20種類）",
        description: "富士山を望む日本有数の温泉リゾート。多くの温泉地からなり、泉質も多彩。芦ノ湖や大涌谷の観光と合わせて楽しめる。",
        image: "./onsen/hakone.png",
        tags: [
            "リゾート",
            "富士山",
            "芦ノ湖",
            "神奈川"
        ],
        access: {
            nearest_station: "箱根湯本駅（箱根登山鉄道）",
            by_train: "新宿駅から小田急ロマンスカーで約85〜90分（箱根湯本駅）"
        },
        source_note: "rurubu 70001292 / nta hakone / hakonenavi"
    },
    {
        id: "o-kanagawa-2",
        name: "湯河原温泉",
        prefecture: "kanagawa",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物・硫酸塩泉（弱アルカリ性）",
        description: "万葉集にも詠まれた歴史ある温泉地。文豪や政財界人に愛された「癒やしの里」。",
        image: "./onsen/yugawara.png",
        tags: [
            "歴史",
            "文豪",
            "万葉集",
            "神奈川"
        ],
        access: {
            nearest_station: "湯河原駅（JR東海道本線）",
            by_train: "湯河原駅からバスで約10分"
        },
        source_note: "rurubu 70001306 / nta yugawara"
    },
    {
        id: "o-kanagawa-3",
        name: "強羅温泉",
        prefecture: "kanagawa",
        category: "硫酸塩泉",
        spring_type: "酸性硫酸塩泉・ナトリウム-塩化物泉・カルシウム硫酸塩泉・単純温泉（宿により異なる）",
        description: "箱根の高台に広がる温泉地。美術館巡りやケーブルカー観光と相性が良い。",
        image: "./onsen/gora.png",
        tags: [
            "箱根",
            "美術館",
            "高台",
            "神奈川"
        ],
        access: {
            nearest_station: "強羅駅（箱根登山ケーブルカー）",
            by_train: "箱根湯本駅から箱根登山電車で約45分（強羅駅）"
        },
        source_note: "jtb goura_onsen / rurubu 70001298"
    },
    {
        id: "o-kanagawa-4",
        name: "鶴巻温泉",
        prefecture: "kanagawa",
        category: "塩化物泉",
        spring_type: "カルシウム・ナトリウム-塩化物泉（弱アルカリ性）",
        description: "小田急線の駅から歩いて行ける温泉地。日帰り温泉「弘法の里湯」があり、都心からの日帰り利用にも便利。",
        image: "./onsen/tsurumaki.png",
        tags: [
            "日帰り",
            "美肌",
            "神奈川"
        ],
        access: {
            nearest_station: "鶴巻温泉駅（小田急小田原線）",
            by_train: "鶴巻温泉駅から徒歩約2分（弘法の里湯）"
        },
        source_note: "jorudan 2620 / 秦野市観光パンフ"
    },
    {
        id: "o-niigata-1",
        name: "越後湯沢温泉",
        prefecture: "niigata",
        category: "単純泉",
        spring_type: "単純温泉・ナトリウム・カルシウム-塩化物泉など（施設により異なる）",
        description: "川端康成「雪国」の舞台。豪雪地帯のスキーリゾートと温泉、日本酒を一度に楽しめる。",
        image: "./onsen/echigoyuzawa.png",
        tags: [
            "スキー",
            "雪国",
            "日本酒",
            "新潟"
        ],
        access: {
            nearest_station: "越後湯沢駅（JR上越新幹線）",
            by_train: "越後湯沢駅から徒歩圏内（施設により異なる）"
        },
        source_note: "rurubu 70001667 / jalan OSN_50217"
    },
    {
        id: "o-niigata-2",
        name: "月岡温泉",
        prefecture: "niigata",
        category: "硫黄泉",
        spring_type: "含硫黄-ナトリウム-塩化物泉",
        description: "美肌の湯として知られる硫黄泉。エメラルドグリーンの湯色が特徴で県内屈指の温泉地。",
        image: "./onsen/tsukioka.png",
        tags: [
            "美肌の湯",
            "硫黄泉",
            "新潟"
        ],
        access: {
            nearest_station: "豊栄駅（JR白新線）",
            by_train: "豊栄駅からシャトルバスで約20分"
        },
        source_note: "rurubu 70001653 / niigata-kankou 41807"
    },
    {
        id: "o-niigata-3",
        name: "瀬波温泉",
        prefecture: "niigata",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "日本海に沈む夕日が名物の海辺温泉。海の幸と温泉を満喫できる。",
        image: "./onsen/sewa.png",
        tags: [
            "日本海",
            "夕日",
            "海の幸",
            "新潟"
        ],
        access: {
            nearest_station: "村上駅（JR羽越本線）",
            by_train: "村上駅からバスで約10分"
        },
        source_note: "niigata-kankou 30977 / jtb senami_onsen"
    },
    {
        id: "o-niigata-4",
        name: "岩室温泉",
        prefecture: "niigata",
        category: "硫黄泉",
        spring_type: "含硫黄-ナトリウム・カルシウム-塩化物泉など",
        description: "弥彦山の麓の温泉地。寺社巡りやワイナリー観光と合わせて楽しめる。",
        image: "./onsen/iwafuro.png",
        tags: [
            "弥彦",
            "山麓",
            "新潟"
        ],
        access: {
            nearest_station: "岩室駅（JR越後線）",
            by_train: "岩室駅からバスで約10分"
        },
        source_note: "rurubu 70001661 / onsen.nifty iwamuro"
    },
    {
        id: "o-niigata-5",
        name: "妙高温泉",
        prefecture: "niigata",
        category: "硫黄泉",
        spring_type: "硫黄泉・単純温泉・炭酸水素塩泉など（温泉地により異なる）",
        description: "妙高山麓の温泉。スキーや高原散策と相性がよく、四季で楽しめる。",
        image: "./onsen/myoko.png",
        tags: [
            "高原",
            "スキー",
            "妙高",
            "新潟"
        ],
        access: {
            nearest_station: "妙高高原駅",
            by_train: "妙高高原駅からバスで約15〜20分（赤倉温泉など）"
        },
        source_note: "onsen.nifty myoukou / jtb akakura_onsen / niigata-kankou blog 687"
    },
    {
        id: "o-toyama-1",
        name: "宇奈月温泉",
        prefecture: "toyama",
        category: "単純泉",
        spring_type: "弱アルカリ性単純温泉",
        description: "黒部峡谷の入口に広がる温泉地。トロッコ電車で渓谷の景色を楽しめる。",
        image: "./onsen/unazuki.png",
        tags: [
            "黒部峡谷",
            "トロッコ列車",
            "リゾート",
            "富山"
        ],
        access: {
            nearest_station: "宇奈月温泉駅（富山地方鉄道本線）",
            by_train: "電鉄富山駅から富山地方鉄道で約70分〜（宇奈月温泉駅）"
        },
        source_note: "jtb unazuki_onsen / 富山県 温泉資料"
    },
    {
        id: "o-toyama-2",
        name: "庄川温泉郷",
        prefecture: "toyama",
        category: "重曹泉",
        spring_type: "炭酸水素塩泉など",
        description: "庄川沿いに点在する温泉郷。渓谷の景色と落ち着いた旅館が魅力。",
        image: "./onsen/shogawa.png",
        tags: [
            "渓谷",
            "温泉郷",
            "富山"
        ],
        access: {
            nearest_station: "砺波駅（JR城端線）",
            by_train: "砺波駅からバスで約30分"
        },
        source_note: "jorudan 1739"
    },
    {
        id: "o-toyama-3",
        name: "氷見温泉郷",
        prefecture: "toyama",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "富山湾の海の幸が魅力の温泉。寒ブリの季節は特に人気。",
        image: "./onsen/himi.png",
        tags: [
            "富山湾",
            "海の幸",
            "氷見",
            "富山"
        ],
        access: {
            nearest_station: "氷見駅（JR氷見線）",
            by_train: "氷見駅からバスで約15〜20分（温泉により異なる）"
        },
        source_note: "rurubu 70000482 / asoview 5796"
    },
    {
        id: "o-ishikawa-1",
        name: "山代温泉",
        prefecture: "ishikawa",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩・塩化物泉など",
        description: "1,300年の歴史を誇る加賀温泉郷の雄。独自の総湯文化が今も息づく名湯の里。",
        image: "./onsen/yamashiro.png",
        tags: [
            "1300年の歴史",
            "総湯",
            "加賀",
            "石川"
        ],
        access: {
            nearest_station: "加賀温泉駅（JR北陸新幹線・ハピラインふくい）",
            by_train: "加賀温泉駅からバスで約11〜15分"
        },
        source_note: "rurubu 70001697 / jorudan 1261"
    },
    {
        id: "o-ishikawa-2",
        name: "和倉温泉",
        prefecture: "ishikawa",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "能登半島の七尾湾に面した海の温泉。海から湧く温泉として知られる。2024年の能登半島地震の影響で、休業が続いている宿もある（2026年6月時点）。",
        image: "./onsen/wakura.png",
        tags: [
            "海の温泉",
            "能登",
            "加賀屋",
            "石川"
        ],
        access: {
            nearest_station: "和倉温泉駅（のと鉄道七尾線）",
            by_train: "金沢駅から特急で約1時間〜1時間20分（和倉温泉駅）"
        },
        source_note: "jtb wakura_onsen / rurubu 70001709"
    },
    {
        id: "o-ishikawa-3",
        name: "山中温泉",
        prefecture: "ishikawa",
        category: "硫酸塩泉",
        spring_type: "カルシウム・ナトリウム-硫酸塩泉",
        description: "鶴仙渓の渓谷美が名物。温泉街の散策と総湯文化を楽しめる。",
        image: "./onsen/yamanaka.png",
        tags: [
            "渓谷",
            "温泉街",
            "加賀",
            "石川"
        ],
        access: {
            nearest_station: "加賀温泉駅（JR北陸新幹線）",
            by_train: "加賀温泉駅からバスで約25〜30分"
        },
        source_note: "nta kaga / jorudan 1481"
    },
    {
        id: "o-ishikawa-4",
        name: "片山津温泉",
        prefecture: "ishikawa",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "柴山潟の湖畔温泉。湖と白山の景色、夜のライトアップが映える。",
        image: "./onsen/katayamazu.png",
        tags: [
            "湖畔",
            "白山",
            "加賀",
            "石川"
        ],
        access: {
            nearest_station: "加賀温泉駅（JR北陸新幹線）",
            by_train: "加賀温泉駅からバスで約10〜30分（路線により異なる）"
        },
        source_note: "jtb katayamazu_onsen / jorudan 2268"
    },
    {
        id: "o-fukui-1",
        name: "あわら温泉",
        prefecture: "fukui",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉など（旅館ごとに源泉が異なる）",
        description: "明治16年（1883年）、灌漑用の井戸を掘った際に湧いたのが始まりとされる温泉地。旅館ごとに自家源泉を持ち、北陸を代表する温泉街として知られる。",
        image: "./onsen/awara.png",
        tags: [
            "北陸の奥座敷",
            "福井"
        ],
        access: {
            nearest_station: "あわら湯のまち駅（えちぜん鉄道）",
            by_train: "芦原温泉駅からバスで約13〜19分"
        },
        source_note: "rurubu 70001713 / 福井県 幕末明治秘話55"
    },
    {
        id: "o-fukui-2",
        name: "越前温泉",
        prefecture: "fukui",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "越前海岸沿いの温泉。日本海に面した露天風呂があり、冬は越前がにの季節として人気が高い。",
        image: "./onsen/echizen.png",
        tags: [
            "越前海岸",
            "越前ガニ",
            "海",
            "福井"
        ],
        access: {
            nearest_station: "武生駅（ハピラインふくい）",
            by_train: "武生駅からバスで約1時間（道の駅越前）"
        },
        source_note: "tabi-mag hu0031。泉質は施設により異なり一次情報で確認できず"
    },
    {
        id: "o-fukui-3",
        name: "三国温泉",
        prefecture: "fukui",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "東尋坊近くの海辺温泉。夕日と断崖の景色が旅情を高める。",
        image: "./onsen/mikuni.png",
        tags: [
            "東尋坊",
            "夕日",
            "海辺",
            "福井"
        ],
        access: {
            nearest_station: "三国港駅（えちぜん鉄道三国芦原線）",
            by_train: "三国港駅から徒歩約5分（施設により異なる）"
        },
        source_note: "allabout 103680 / knt S180015。泉質名は確認できず"
    },
    {
        id: "o-yamanashi-1",
        name: "石和温泉",
        prefecture: "yamanashi",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "昭和36年（1961年）、ぶどう畑から高温の湯が湧いて誕生した温泉地。甲府盆地のワイナリーや果樹園の観光と合わせて楽しめる。",
        image: "./onsen/isawa.png",
        tags: [
            "富士山",
            "ワイン",
            "甲府",
            "山梨"
        ],
        access: {
            nearest_station: "石和温泉駅（JR中央本線）",
            by_train: "石和温泉駅の周辺に宿が集まる"
        },
        source_note: "山梨県企業局 県営温泉事業 / rurubu 70001339"
    },
    {
        id: "o-yamanashi-2",
        name: "下部温泉",
        prefecture: "yamanashi",
        category: "単純泉",
        spring_type: "単純温泉（高アルカリの源泉もある）",
        description: "武田信玄の隠し湯と伝わる温泉地。ぬるめの源泉と沸かし湯の2つの浴槽を備える宿が多く、静かに湯治気分で過ごせる。",
        image: "./onsen/shimo.png",
        tags: [
            "湯治",
            "山あい",
            "山梨"
        ],
        access: {
            nearest_station: "下部温泉駅（JR身延線）",
            by_train: "下部温泉駅から徒歩約5〜20分（宿により異なる）"
        },
        source_note: "jtb shimobe_onsen / rurubu 70001354 / onsen.nifty"
    },
    {
        id: "o-yamanashi-3",
        name: "西山温泉",
        prefecture: "yamanashi",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "山深い秘湯として知られる温泉。渓谷の景色と静寂が魅力。",
        image: "./onsen/nishiyama.png",
        tags: [
            "秘湯",
            "渓谷",
            "山梨"
        ],
        access: {
            nearest_station: "身延駅（JR身延線）",
            by_train: "身延駅からバスで約90分"
        },
        source_note: "jtb 4453001 / nta。泉質は温泉地として確認できず"
    },
    {
        id: "o-nagano-1",
        name: "別所温泉",
        prefecture: "nagano",
        category: "硫黄泉",
        spring_type: "単純硫黄泉",
        description: "「信州の鎌倉」と呼ばれる古湯。北向観音や安楽寺の八角三重塔など、歴史ある寺院が点在する。",
        image: "./onsen/bessho.png",
        tags: [
            "歴史遺産",
            "長野"
        ],
        access: {
            nearest_station: "別所温泉駅（上田電鉄別所線）",
            by_train: "上田駅から上田電鉄別所線で別所温泉駅へ"
        },
        source_note: "rurubu 70001376 / onsen.nifty bessho"
    },
    {
        id: "o-nagano-2",
        name: "野沢温泉",
        prefecture: "nagano",
        category: "硫黄泉",
        spring_type: "単純硫黄泉など（外湯ごとに異なる）",
        description: "13の外湯を巡る温泉文化が残る村。野沢菜発祥の地としても有名で、スキーリゾートも充実。",
        image: "./onsen/nozawa.png",
        tags: [
            "外湯めぐり",
            "スキー",
            "野沢菜",
            "長野"
        ],
        access: {
            nearest_station: "飯山駅（JR北陸新幹線・飯山線）",
            by_train: "飯山駅からバスで約25〜40分"
        },
        source_note: "nippon.com gu005005 / rurubu 70001565"
    },
    {
        id: "o-nagano-3",
        name: "渋温泉",
        prefecture: "nagano",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "地獄谷野猿公苑に近い温泉地。石畳の路地に9つの外湯が並ぶレトロな温泉街が人気。",
        image: "./onsen/shibu.png",
        tags: [
            "外湯めぐり",
            "温泉猿",
            "レトロ",
            "長野"
        ],
        access: {
            nearest_station: "湯田中駅（長野電鉄長野線）",
            by_train: "湯田中駅からバスで約5〜10分"
        },
        source_note: "onsen.nifty shibu / newt。泉質は源泉ごとに異なり確認できず"
    },
    {
        id: "o-nagano-4",
        name: "白骨温泉",
        prefecture: "nagano",
        category: "炭酸水素塩泉",
        spring_type: "炭酸水素塩泉（硫黄成分を含む白濁の湯）",
        description: "乳白色の湯が魅力の山の秘湯。乗鞍・上高地観光の拠点にも。",
        image: "./onsen/shirahone.png",
        tags: [
            "白濁",
            "秘湯",
            "山中",
            "長野"
        ],
        access: {
            nearest_station: "新島々駅（松本電鉄上高地線）",
            by_train: "新島々駅からバスで約40〜70分（便により異なる）"
        },
        source_note: "jtb shirahone_onsen / knt S200261"
    },
    {
        id: "o-nagano-5",
        name: "上諏訪温泉",
        prefecture: "nagano",
        category: "単純泉",
        spring_type: "単純温泉",
        description: "諏訪湖畔に広がる温泉地。花火や湖の景色と合わせて楽しめる。",
        image: "./onsen/kamisuwa.png",
        tags: [
            "湖畔",
            "花火",
            "温泉街",
            "長野"
        ],
        access: {
            nearest_station: "上諏訪駅（JR中央本線）",
            by_train: "上諏訪駅から徒歩約5〜10分（駅のホームに足湯もある）"
        },
        source_note: "nta kamisuwa / rurubu 70001857 / tabi-mag nn156"
    },
    {
        id: "o-nagano-6",
        name: "白馬姫川温泉",
        prefecture: "nagano",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "白馬のスキーリゾートで楽しめる温泉。北アルプスの景色が圧巻。",
        image: "./onsen/hakuba.png",
        tags: [
            "北アルプス",
            "スキー",
            "白馬",
            "長野"
        ],
        access: {
            nearest_station: "白馬駅（JR大糸線）"
        },
        source_note: "名称は白馬ハイランドホテルの源泉名として使われている。温泉地としての泉質・行き方は確認できず"
    },
    {
        id: "o-gifu-1",
        name: "下呂温泉",
        prefecture: "gifu",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "日本三名泉の一つ。美肌の湯として名高い無色透明の温泉。飛騨川沿いの温泉街は風情がある。",
        image: "./onsen/gero.png",
        tags: [
            "日本三名泉",
            "美肌の湯",
            "飛騨川",
            "岐阜"
        ],
        access: {
            nearest_station: "下呂駅（JR高山本線）",
            by_train: "名古屋駅から特急ひだで約1時間30〜40分"
        },
        source_note: "nta gero / kankou-gifu detail_295 / rurubu 24486"
    },
    {
        id: "o-gifu-2",
        name: "奥飛騨温泉郷",
        prefecture: "gifu",
        category: "単純泉",
        spring_type: "単純温泉など（宿により異なる）",
        description: "北アルプスの山麓にある、平湯・福地・新平湯・栃尾・新穂高の5つの温泉地からなる温泉郷。露天風呂の多さで知られる。",
        image: "./onsen/okuhida.png",
        tags: [
            "北アルプス",
            "秘境",
            "岐阜"
        ],
        access: {
            nearest_station: "高山駅（JR高山本線）",
            by_train: "高山駅からバスで約1時間（平湯温泉）"
        },
        source_note: "nippon.com gu005006 / jtb okuhida_onsen"
    },
    {
        id: "o-gifu-3",
        name: "平湯温泉",
        prefecture: "gifu",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "奥飛騨温泉郷の玄関口にある温泉地。上高地や乗鞍方面への拠点にもなる。",
        image: "./onsen/hirayu.png",
        tags: [
            "露天風呂",
            "奥飛騨",
            "岐阜"
        ],
        access: {
            nearest_station: "高山駅（JR高山本線）",
            by_train: "高山駅からバスで約1時間"
        },
        source_note: "nippon.com gu005006（アクセス）。平湯温泉単独の泉質は確認できず"
    },
    {
        id: "o-gifu-4",
        name: "長良川温泉",
        prefecture: "gifu",
        category: "含鉄泉",
        spring_type: "単純鉄冷鉱泉（含鉄泉）",
        description: "岐阜市内で楽しめる温泉。長良川の鵜飼や城下町観光と相性が良い。",
        image: "./onsen/nagaragawa.png",
        tags: [
            "鵜飼",
            "城下町",
            "岐阜"
        ],
        access: {
            nearest_station: "岐阜駅（JR東海道本線・名鉄名古屋本線）",
            by_train: "岐阜駅からバスで約15〜20分"
        },
        source_note: "jtb nagaragawa_onsen / kankou-gifu blog 397"
    },
    {
        id: "o-shizuoka-1",
        name: "熱海温泉",
        prefecture: "shizuoka",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉・硫酸塩泉・単純温泉など（源泉により異なる）",
        description: "東京から最も近い温泉リゾート。相模湾を望む景観と花火大会が人気。昭和レトロと現代が共存。",
        image: "./onsen/atami.png",
        tags: [
            "リゾート",
            "花火",
            "海の温泉",
            "静岡"
        ],
        access: {
            nearest_station: "熱海駅（JR東海道新幹線・東海道本線）",
            by_train: "東京駅から東海道新幹線で約40〜50分"
        },
        source_note: "rurubu 70001307 / allabout 103181"
    },
    {
        id: "o-shizuoka-2",
        name: "伊豆下田温泉",
        prefecture: "shizuoka",
        category: "単純泉",
        spring_type: "単純温泉など（施設により異なる）",
        description: "黒船来航で知られる下田の温泉。澄んだ青い海とペリーロードの歴史的街並みと合わせて楽しめる。",
        image: "./onsen/shimoda.png",
        tags: [
            "黒船",
            "歴史",
            "リゾート",
            "静岡"
        ],
        access: {
            nearest_station: "伊豆急下田駅（伊豆急行線）",
            by_train: "東京駅から特急踊り子で約2時間40〜45分（伊豆急下田駅）"
        },
        source_note: "jtb shimoda_onsen / nta 4130-102"
    },
    {
        id: "o-shizuoka-3",
        name: "修善寺温泉",
        prefecture: "shizuoka",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "伊豆の小京都と呼ばれる温泉街。竹林の小径や川沿いの散策が楽しい。",
        image: "./onsen/shuzenji.png",
        tags: [
            "温泉街",
            "散策",
            "伊豆",
            "静岡"
        ],
        access: {
            nearest_station: "修善寺駅（伊豆箱根鉄道）",
            by_train: "修善寺駅からバスで約8〜10分"
        },
        source_note: "rurubu 70001877 / jorudan 1274"
    },
    {
        id: "o-shizuoka-4",
        name: "伊東温泉",
        prefecture: "shizuoka",
        category: "単純泉",
        spring_type: "単純温泉・ナトリウム-塩化物泉など",
        description: "伊豆屈指の温泉地。海沿いの街並みと観光のしやすさが魅力。",
        image: "./onsen/ito.png",
        tags: [
            "伊豆",
            "海辺",
            "静岡"
        ],
        access: {
            nearest_station: "伊東駅（JR伊東線）",
            by_train: "東京駅から特急踊り子で約1時間45分（伊東駅）"
        },
        source_note: "jtb ito_onsen / media.jreast 5175"
    },
    {
        id: "o-shizuoka-5",
        name: "伊豆長岡温泉",
        prefecture: "shizuoka",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉など",
        description: "狩野川流域の温泉。富士山や伊豆観光の中継地点として便利。",
        image: "./onsen/izunagaoka.png",
        tags: [
            "伊豆",
            "観光拠点",
            "静岡"
        ],
        access: {
            nearest_station: "伊豆長岡駅（伊豆箱根鉄道駿豆線）",
            by_train: "三島駅から伊豆箱根鉄道で約20分。伊豆長岡駅からバスで約5〜10分"
        },
        source_note: "jtb izunagaoka_onsen / rurubu 70001324"
    },
    {
        id: "o-aichi-1",
        name: "湯谷温泉",
        prefecture: "aichi",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "宇連川沿いの渓谷温泉。川のせせらぎを聞きながら楽しめる露天風呂が人気の秘境温泉。",
        image: "./onsen/yutani.png",
        tags: [
            "渓谷",
            "秘境",
            "愛知"
        ],
        access: {
            nearest_station: "湯谷温泉駅（JR飯田線）",
            by_train: "豊橋駅でJR飯田線に乗り換え、湯谷温泉駅から徒歩すぐ"
        },
        source_note: "Aichi Now spots 189 / rurubu 70001739"
    },
    {
        id: "o-aichi-2",
        name: "蒲郡温泉",
        prefecture: "aichi",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉（蒲郡温泉）",
        description: "三河湾を望む海辺の温泉。島々の景色と海の幸、リゾート感が魅力。",
        image: "./onsen/gamagori.png",
        tags: [
            "三河湾",
            "海の幸",
            "リゾート",
            "愛知"
        ],
        access: {
            nearest_station: "蒲郡駅（JR東海道本線・名鉄蒲郡線）",
            by_train: "蒲郡駅から徒歩約15分"
        },
        source_note: "Aichi Now / jorudan 1446"
    },
    {
        id: "o-mie-1",
        name: "長島温泉",
        prefecture: "mie",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "ナガシマリゾートと一体化した大型温泉施設。東海随一のエンターテインメント温泉地。",
        image: "./onsen/nagashima.png",
        tags: [
            "リゾート",
            "テーマパーク",
            "家族",
            "三重"
        ],
        access: {
            nearest_station: "桑名駅（JR関西本線・近鉄名古屋線）",
            by_train: "桑名駅からバスで約25分（名鉄バスセンターから高速バスで約50分）"
        },
        source_note: "nta 6401-101 / rakuten。泉質は一次情報で確認できず"
    },
    {
        id: "o-mie-2",
        name: "湯の山温泉",
        prefecture: "mie",
        category: "放射能泉",
        spring_type: "アルカリ性のラジウム泉とされる",
        description: "御在所岳の麓の温泉。ロープウェイや登山と合わせて楽しめる。",
        image: "./onsen/yunoyama.png",
        tags: [
            "山麓",
            "ロープウェイ",
            "三重"
        ],
        access: {
            nearest_station: "湯の山温泉駅（近鉄湯の山線）",
            by_train: "近鉄四日市駅から近鉄湯の山線で約25分（湯の山温泉駅）"
        },
        source_note: "aumo 28213 / jalan yad332971"
    },
    {
        id: "o-mie-3",
        name: "志摩温泉",
        prefecture: "mie",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "英虞湾の景色と海の幸が魅力の温泉。リゾート滞在に向く。",
        image: "./onsen/shima.png",
        tags: [
            "英虞湾",
            "リゾート",
            "海の幸",
            "三重"
        ],
        access: {
            nearest_station: "賢島駅（近鉄志摩線）",
            by_train: "賢島駅から送迎で約3分（宿により異なる）"
        },
        source_note: "knt S240098。泉質は確認できず"
    },
    {
        id: "o-shiga-1",
        name: "雄琴温泉",
        prefecture: "shiga",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "琵琶湖の西岸に位置する温泉地（おごと温泉）。京都駅から電車で約20分と近く、湖を望む宿が多い。",
        image: "./onsen/ogoto.png",
        tags: [
            "琵琶湖",
            "滋賀"
        ],
        access: {
            nearest_station: "おごと温泉駅（JR湖西線）",
            by_train: "京都駅からJR湖西線で約20分（おごと温泉駅）"
        },
        source_note: "jalan OSN_50334 / onsen.nifty ogoto"
    },
    {
        id: "o-kyoto-1",
        name: "嵐山温泉",
        prefecture: "kyoto",
        category: "単純温泉",
        spring_type: "弱アルカリ性単純温泉",
        description: "渡月橋を望む絶景と竹林の小径に癒やされる京都屈指の観光地。とろみのあるお湯が肌に優しい。",
        image: "./onsen/arashiyama.png",
        tags: [
            "渡月橋",
            "竹林",
            "美肌の湯",
            "京都"
        ],
        access: {
            nearest_station: "嵐山駅（京福電鉄・阪急）",
            by_train: "嵐山駅から徒歩約5〜8分（施設により異なる）"
        },
        source_note: "rurubu 70001991 / jalan OSN_50490"
    },
    {
        id: "o-kyoto-2",
        name: "天橋立温泉",
        prefecture: "kyoto",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉など",
        description: "日本三景・天橋立エリアの温泉。絶景と海の幸、観光をまとめて楽しめる。",
        image: "./onsen/amanohashidate.png",
        tags: [
            "日本三景",
            "海の幸",
            "観光",
            "京都"
        ],
        access: {
            nearest_station: "天橋立駅（京都丹後鉄道宮津線）",
            by_train: "京都駅から特急はしだてで約2時間10〜20分（天橋立駅）"
        },
        source_note: "allabout 103885 / nap-camp 18097"
    },
    {
        id: "o-kyoto-3",
        name: "夕日ヶ浦温泉",
        prefecture: "kyoto",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "日本海に沈む夕日が名物の温泉。海辺の散歩と温泉が最高の組み合わせ。",
        image: "./onsen/yuhigaura.png",
        tags: [
            "日本海",
            "夕日",
            "海辺",
            "京都"
        ],
        access: {
            nearest_station: "夕日ヶ浦木津温泉駅（京都丹後鉄道）",
            by_train: "夕日ヶ浦木津温泉駅から宿の送迎で約5〜8分"
        },
        source_note: "knt S260230 S260632"
    },
    {
        id: "o-osaka-1",
        name: "天見温泉",
        prefecture: "osaka",
        category: "放射能泉",
        spring_type: "単純弱放射能冷鉱泉（ラドン）",
        description: "南河内の山あいにある温泉。天見駅のすぐそばに一軒宿（南天苑）が建つ。",
        image: "./onsen/amami.png",
        tags: [
            "秘湯",
            "渓谷",
            "大阪"
        ],
        access: {
            nearest_station: "天見駅（南海高野線）",
            by_train: "天見駅から徒歩約1〜2分（南天苑）"
        },
        source_note: "rurubu 70002009 / osaka-info amami-onsen-nanten-en"
    },
    {
        id: "o-osaka-2",
        name: "犬鳴山温泉",
        prefecture: "osaka",
        category: "硫黄泉",
        spring_type: "単純硫黄泉（冷鉱泉）",
        description: "山あいの温泉地。ハイキングと合わせて楽しめる、落ち着いた雰囲気が魅力。",
        image: "./onsen/inunaki.png",
        tags: [
            "山あい",
            "自然",
            "日帰り",
            "大阪"
        ],
        access: {
            nearest_station: "日根野駅（JR阪和線）",
            by_train: "日根野駅からバスで約15〜20分"
        },
        source_note: "rurubu 70002007 / 大阪府資料"
    },
    {
        id: "o-hyogo-1",
        name: "有馬温泉",
        prefecture: "hyogo",
        category: "塩化物泉",
        spring_type: "金泉（含鉄・塩化物泉）・銀泉（二酸化炭素泉・放射能泉）",
        description: "日本三名泉の一つ。金泉・銀泉の2種の湯が楽しめる名湯。豊臣秀吉も愛した日本最古の温泉の一つ。",
        image: "./onsen/arima.png",
        tags: [
            "日本三名泉",
            "金泉",
            "銀泉",
            "兵庫"
        ],
        access: {
            nearest_station: "有馬温泉駅（神戸電鉄有馬線）",
            by_train: "三宮から地下鉄・神戸電鉄で約30〜40分（有馬温泉駅）"
        },
        source_note: "nta arima / rurubu 24806"
    },
    {
        id: "o-hyogo-2",
        name: "湯村温泉",
        prefecture: "hyogo",
        category: "重曹泉",
        spring_type: "ナトリウム-炭酸水素塩・塩化物・硫酸塩泉など",
        description: "98℃の源泉「荒湯」で知られる温泉地。荒湯では卵や野菜をゆでることができ、慈覚大師が発見したと伝わる。",
        image: "./onsen/yumura.png",
        tags: [
            "荒湯",
            "古湯",
            "温泉料理",
            "兵庫"
        ],
        access: {
            nearest_station: "浜坂駅（JR山陰本線）",
            by_train: "浜坂駅からバスで約25分"
        },
        source_note: "hyogo-tourism / jtb yumura_onsen / rurubu 80031173"
    },
    {
        id: "o-hyogo-3",
        name: "城崎温泉",
        prefecture: "hyogo",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "外湯めぐりで有名な温泉街。浴衣で歩ける町並みと川沿いの景色が魅力。",
        image: "./onsen/kinosaki.png",
        tags: [
            "外湯めぐり",
            "温泉街",
            "風情",
            "兵庫"
        ],
        access: {
            nearest_station: "城崎温泉駅（JR山陰本線）",
            by_train: "大阪駅から特急こうのとりで約2時間40分（城崎温泉駅）"
        },
        source_note: "rurubu 70001962 / matcha 5887"
    },
    {
        id: "o-hyogo-4",
        name: "洲本温泉",
        prefecture: "hyogo",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉・ナトリウム-炭酸水素塩泉など（源泉により異なる）",
        description: "淡路島の海辺温泉。夕日と海の幸、リゾート滞在が楽しめる。",
        image: "./onsen/sumoto.png",
        tags: [
            "淡路島",
            "夕日",
            "海の幸",
            "兵庫"
        ],
        access: {
            nearest_station: "洲本バスセンター（高速バス）",
            by_train: "三宮から高速バスで約1時間35分（洲本バスセンター）"
        },
        source_note: "jtb sumoto_onsen / allabout 115103 / 兵庫県資料"
    },
    {
        id: "o-nara-1",
        name: "洞川温泉",
        prefecture: "nara",
        category: "単純泉",
        spring_type: "単純温泉",
        description: "大峯山修験道の聖地・洞川の温泉。吉野熊野国立公園の奥深くにある幽玄な秘湯。",
        image: "./onsen/dorogawa.png",
        tags: [
            "修験道",
            "秘湯",
            "吉野",
            "奈良"
        ],
        access: {
            nearest_station: "下市口駅（近鉄吉野線）",
            by_train: "下市口駅からバスで約70〜80分"
        },
        source_note: "jtb dorogawa_onsen / rurubu 70002023"
    },
    {
        id: "o-nara-2",
        name: "十津川温泉郷",
        prefecture: "nara",
        category: "重曹泉",
        spring_type: "ナトリウム-炭酸水素塩泉",
        description: "2004年に村内すべての温泉施設が「源泉かけ流し宣言」をした温泉郷。吊り橋や山里の景色も魅力。",
        image: "./onsen/totsukawa.png",
        tags: [
            "温泉郷",
            "山里",
            "秘湯",
            "奈良"
        ],
        access: {
            nearest_station: "五条駅（JR和歌山線）",
            by_train: "五条駅からバスで約2時間30分（十津川村役場）"
        },
        source_note: "環境省 hoyo_041 / rurubu 70000754"
    },
    {
        id: "o-wakayama-1",
        name: "白浜温泉",
        prefecture: "wakayama",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉・ナトリウム-炭酸水素塩・塩化物泉など（源泉により異なる）",
        description: "日本三古湯のひとつに数えられる温泉地。白い砂浜と青い海に面したリゾートで、源泉ごとに泉質が異なる。",
        image: "./onsen/shirahama.png",
        tags: [
            "日本三古湯",
            "海の温泉",
            "リゾート",
            "和歌山"
        ],
        access: {
            nearest_station: "白浜駅（JR紀勢本線）",
            by_train: "白浜駅からバスで約10〜15分"
        },
        source_note: "nta shirahama / mlit 観光ページ"
    },
    {
        id: "o-wakayama-2",
        name: "熊野本宮温泉郷",
        prefecture: "wakayama",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "熊野本宮大社の近く、湯の峰・川湯・渡瀬の3つの温泉からなる温泉郷。湯の峰温泉の「つぼ湯」は世界遺産の一部で、川湯温泉は川底から湯が湧く。",
        image: "./onsen/hongu.png",
        tags: [
            "世界遺産",
            "熊野古道",
            "仙人風呂",
            "和歌山"
        ],
        access: {
            nearest_station: "新宮駅（JR紀勢本線）",
            by_train: "新宮駅からバスで本宮温泉郷へ"
        },
        source_note: "livejapan a2000319 / 南海 260325.pdf"
    },
    {
        id: "o-wakayama-3",
        name: "南紀勝浦温泉",
        prefecture: "wakayama",
        category: "塩化物泉",
        spring_type: "含硫黄-ナトリウム・カルシウム-塩化物泉など（源泉により異なる）",
        description: "那智の滝や熊野観光の拠点。港町の活気と温泉、マグロが名物。",
        image: "./onsen/nankikatsuura.png",
        tags: [
            "那智",
            "港町",
            "マグロ",
            "和歌山"
        ],
        access: {
            nearest_station: "紀伊勝浦駅（JR紀勢本線）"
        },
        source_note: "rurubu 70002039 / jorudan 1431"
    },
    {
        id: "o-wakayama-4",
        name: "龍神温泉",
        prefecture: "wakayama",
        category: "重曹泉",
        spring_type: "ナトリウム-炭酸水素塩泉",
        description: "日本三美人の湯のひとつとして知られる、山あいの川沿いの温泉。とろりとした湯ざわりが特徴。",
        image: "./onsen/ryujin.png",
        tags: [
            "美肌",
            "山中",
            "静寂",
            "和歌山"
        ],
        access: {
            nearest_station: "紀伊田辺駅（JRきのくに線）",
            by_train: "紀伊田辺駅からバスで約75〜85分"
        },
        source_note: "rurubu 70002057 / allabout 114097"
    },
    {
        id: "o-tottori-1",
        name: "三朝温泉",
        prefecture: "tottori",
        category: "放射能泉",
        spring_type: "放射能泉（単純弱放射能泉・含放射能-ナトリウム-塩化物泉など）",
        description: "三徳川沿いに旅館が並ぶ、ラドンを含む放射能泉で知られる温泉地。開湯は800年以上前と伝わる。",
        image: "./onsen/misasa.png",
        tags: [
            "ラジウム泉",
            "鳥取"
        ],
        access: {
            nearest_station: "倉吉駅（JR山陰本線）",
            by_train: "倉吉駅からバスで約20〜25分"
        },
        source_note: "jtb misasa_onsen / rurubu 70002180"
    },
    {
        id: "o-tottori-2",
        name: "皆生温泉",
        prefecture: "tottori",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "海辺に広がる温泉地。大山の景色と海の幸、温泉を楽しめる。",
        image: "./onsen/kaike.png",
        tags: [
            "海辺",
            "大山",
            "海の幸",
            "鳥取"
        ],
        access: {
            nearest_station: "米子駅（JR山陰本線・伯備線）",
            by_train: "米子駅からバスで約20分"
        },
        source_note: "gltjp 16445 / rurubu 70002179"
    },
    {
        id: "o-shimane-1",
        name: "玉造温泉",
        prefecture: "shimane",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-硫酸塩・塩化物泉",
        description: "『出雲国風土記』で「神の湯」とたたえられた歴史ある温泉地。玉湯川沿いに旅館が並び、出雲観光の拠点にもなる。",
        image: "./onsen/tamatsukuri.png",
        tags: [
            "美肌の湯",
            "出雲",
            "島根"
        ],
        access: {
            nearest_station: "玉造温泉駅（JR山陰本線）",
            by_train: "玉造温泉駅からバスで約6分（徒歩約25分）"
        },
        source_note: "jtb tamatsukuri_onsen / rurubu 70002192"
    },
    {
        id: "o-shimane-2",
        name: "松江しんじ湖温泉",
        prefecture: "shimane",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物・硫酸塩泉など",
        description: "宍道湖畔の温泉。夕日が有名で、城下町観光とも相性抜群。",
        image: "./onsen/shinji.png",
        tags: [
            "宍道湖",
            "夕日",
            "城下町",
            "島根"
        ],
        access: {
            nearest_station: "松江しんじ湖温泉駅（一畑電車）",
            by_train: "松江しんじ湖温泉駅から徒歩約4分。松江駅からバスで約10〜15分"
        },
        source_note: "jorudan 1187 / knt S320007"
    },
    {
        id: "o-shimane-3",
        name: "温泉津温泉",
        prefecture: "shimane",
        category: "塩化物泉",
        spring_type: "ナトリウム・カルシウム-塩化物泉",
        description: "石見銀山近くの温泉街。レトロな町並みと湯治場の雰囲気が魅力。",
        image: "./onsen/yunotsu.png",
        tags: [
            "温泉街",
            "レトロ",
            "湯治",
            "島根"
        ],
        access: {
            nearest_station: "温泉津駅（JR山陰本線）",
            by_train: "温泉津駅からバスで約8分（徒歩約15〜20分）"
        },
        source_note: "tabi-mag sm0118 sm0280"
    },
    {
        id: "o-okayama-1",
        name: "湯原温泉",
        prefecture: "okayama",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "旭川沿いの温泉地。無料で入れる露天風呂「砂湯」は露天風呂番付で西の横綱に選ばれている。",
        image: "./onsen/yubara.png",
        tags: [
            "砂湯",
            "渓谷",
            "岡山"
        ],
        access: {
            nearest_station: "中国勝山駅（JR姫新線）",
            by_train: "中国勝山駅からバスで約30〜35分"
        },
        source_note: "rurubu 70002112 / okayama-kanko feature onsen 1"
    },
    {
        id: "o-okayama-2",
        name: "奥津温泉",
        prefecture: "okayama",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "吉井川の上流、奥津渓に近い温泉地。川の湯で布を足で踏んで洗う「足踏み洗濯」の風習が残る。",
        image: "./onsen/okutsu.png",
        tags: [
            "湯治",
            "静寂",
            "岡山"
        ],
        access: {
            nearest_station: "津山駅（JR津山線）",
            by_train: "津山駅からバスで約50〜60分"
        },
        source_note: "rurubu 70002114 / okayama-kanko feature onsen 3"
    },
    {
        id: "o-hiroshima-1",
        name: "宮島温泉",
        prefecture: "hiroshima",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "世界遺産・厳島神社がある宮島の温泉。島内には天然温泉を備えた宿がある。",
        image: "./onsen/miyajimaimperialhotel.png",
        tags: [
            "世界遺産",
            "厳島神社",
            "宮島",
            "広島"
        ],
        access: {
            nearest_station: "宮島口駅（JR山陽本線・広電宮島線）",
            by_train: "宮島口桟橋からフェリーで約10分（宮島桟橋）"
        },
        source_note: "jalan yad340781 / gltjp 14836。泉質は施設により記載が異なり確認できず"
    },
    {
        id: "o-hiroshima-2",
        name: "湯来温泉",
        prefecture: "hiroshima",
        category: "放射能泉",
        spring_type: "アルカリ性単純弱放射能温泉（ラドン）",
        description: "広島市近郊の渓谷温泉。川沿いの自然と日帰り利用のしやすさが魅力。",
        image: "./onsen/yuki.png",
        tags: [
            "渓谷",
            "日帰り",
            "広島"
        ],
        access: {
            nearest_station: "五日市駅（JR山陽本線）",
            by_train: "五日市駅からバスで約70分"
        },
        source_note: "osusume.mynavi 8364 / onsen.nifty yurai"
    },
    {
        id: "o-yamaguchi-1",
        name: "湯田温泉",
        prefecture: "yamaguchi",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "山口市中心部にある温泉。白狐伝説が残り中原中也ゆかりの地でもある，都市型の便利な温泉地。",
        image: "./onsen/yuda.png",
        tags: [
            "都市型温泉",
            "白狐伝説",
            "山口"
        ],
        access: {
            nearest_station: "湯田温泉駅（JR山口線）",
            by_train: "湯田温泉駅から徒歩約15分"
        },
        source_note: "rurubu 70002157 / jtb yuda_onsen / yamaguchi-tourism"
    },
    {
        id: "o-yamaguchi-2",
        name: "長門湯本温泉",
        prefecture: "yamaguchi",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "川沿いの温泉街が魅力。そぞろ歩きが楽しい、雰囲気のよい温泉地。",
        image: "./onsen/nagato.png",
        tags: [
            "温泉街",
            "川沿い",
            "山口"
        ],
        access: {
            nearest_station: "長門湯本駅（JR美祢線）",
            by_train: "長門湯本駅から徒歩約10分"
        },
        source_note: "rurubu 80035266 / jorudan 2398"
    },
    {
        id: "o-tokushima-1",
        name: "祖谷温泉",
        prefecture: "tokushima",
        category: "硫黄泉",
        spring_type: "アルカリ性単純硫黄泉",
        description: "祖谷渓の谷底にある露天風呂へ、宿のケーブルカーで下りて入る温泉（ホテル祖谷温泉）。",
        image: "./onsen/iya.png",
        tags: [
            "秘境",
            "ケーブルカー",
            "渓谷",
            "徳島"
        ],
        access: {
            nearest_station: "大歩危駅（JR土讃線）",
            by_train: "大歩危駅からバスで約35分（祖谷温泉前）"
        },
        source_note: "rurubu 70002262 / bepal 33997"
    },
    {
        id: "o-kagawa-1",
        name: "塩江温泉",
        prefecture: "kagawa",
        category: "単純泉",
        spring_type: "単純温泉・ナトリウム-炭酸水素塩泉など（施設により異なる）",
        description: "天平年間に行基が開き、弘法大師が広めたと伝わる温泉郷。高松市の山あいにあり、渓谷沿いの景色が楽しめる。",
        image: "./onsen/shioe.png",
        tags: [
            "香川"
        ],
        access: {
            nearest_station: "高松駅（JR予讃線）",
            by_train: "高松駅からバスで約60〜70分"
        },
        source_note: "jtb shionoe_onsen / tabiiro / jalan yad386576"
    },
    {
        id: "o-kagawa-2",
        name: "こんぴら温泉郷",
        prefecture: "kagawa",
        category: "塩化物泉",
        spring_type: "カルシウム・ナトリウム-炭酸水素塩・塩化物泉、単純弱放射能冷鉱泉など",
        description: "金刀比羅宮参拝の拠点で楽しめる温泉。門前町の散策と相性が良い。",
        image: "./onsen/konpira.png",
        tags: [
            "金刀比羅宮",
            "門前町",
            "香川"
        ],
        access: {
            nearest_station: "琴平駅（JR土讃線・琴電琴平線）",
            by_train: "琴平駅から徒歩約5分〜"
        },
        source_note: "jtb konpira_onsen / knt S370023"
    },
    {
        id: "o-ehime-1",
        name: "道後温泉",
        prefecture: "ehime",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉など",
        description: "日本最古の温泉の一つ。夏目漱石「坊っちゃん」の舞台になった道後温泉本館は国の重要文化財。",
        image: "./onsen/dogo.png",
        tags: [
            "日本最古",
            "坊っちゃん",
            "国重要文化財",
            "愛媛"
        ],
        access: {
            nearest_station: "道後温泉駅（伊予鉄市内電車）",
            by_train: "JR松山駅から伊予鉄道の路面電車で道後温泉駅へ"
        },
        source_note: "rurubu 70002230 / nta dogo"
    },
    {
        id: "o-ehime-2",
        name: "鈍川温泉",
        prefecture: "ehime",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉（冷鉱泉）",
        description: "森に囲まれた静かな温泉。ぬめりのある湯と自然の癒やしが魅力。",
        image: "./onsen/otogo.png",
        tags: [
            "森林",
            "静寂",
            "愛媛"
        ],
        access: {
            nearest_station: "今治駅（JR予讃線）",
            by_train: "今治駅からバスで約25〜30分"
        },
        source_note: "jorudan 1209 / knt S380007"
    },
    {
        id: "o-kochi-2",
        name: "あしずり温泉",
        prefecture: "kochi",
        category: "放射能泉",
        spring_type: "単純弱放射能泉",
        description: "足摺岬エリアで楽しめる温泉。太平洋の景色と海風が最高。",
        image: "./onsen/ashizuri.png",
        tags: [
            "太平洋",
            "岬",
            "絶景",
            "高知"
        ],
        access: {
            nearest_station: "中村駅（土佐くろしお鉄道）",
            by_train: "中村駅からバスで約1時間30〜45分（足摺岬）"
        },
        source_note: "rurubu 70002274 / knt S390024"
    },
    {
        id: "o-fukuoka-1",
        name: "二日市温泉",
        prefecture: "fukuoka",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "太宰府天満宮に近い筑紫野市の温泉。博多駅から電車で約20分とアクセスがよい。",
        image: "./onsen/futsukaichi.png",
        tags: [
            "太宰府",
            "福岡"
        ],
        access: {
            nearest_station: "二日市駅（JR鹿児島本線・西鉄天神大牟田線）",
            by_train: "二日市駅から徒歩約10〜15分（博多駅から電車で約20分）"
        },
        source_note: "crossroadfukuoka feature futsukaichi_onsen / rurubu 70002468"
    },
    {
        id: "o-fukuoka-2",
        name: "原鶴温泉",
        prefecture: "fukuoka",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉・硫黄泉",
        description: "筑後川沿いの温泉地。アルカリ性単純温泉と硫黄泉の2つの泉質があり「ダブル美肌の湯」と呼ばれる。",
        image: "./onsen/harazuru.png",
        tags: [
            "筑後川",
            "美肌",
            "福岡"
        ],
        access: {
            nearest_station: "筑後吉井駅（JR久大本線）",
            by_train: "筑後吉井駅からタクシー・送迎で約10分"
        },
        source_note: "onsen.nifty haraduru / knt yadolist"
    },
    {
        id: "o-fukuoka-3",
        name: "脇田温泉",
        prefecture: "fukuoka",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉",
        description: "犬鳴山の東麓、犬鳴川の清流沿いに数軒の宿が並ぶ温泉地。",
        image: "./onsen/wakita.png",
        tags: [
            "自然",
            "静寂",
            "福岡"
        ],
        access: {
            nearest_station: "博多駅（JR九州バス）",
            by_train: "博多駅からJR九州バス（直方行）で約50分〜1時間"
        },
        source_note: "rurubu 70002470 / crossroadfukuoka wakita_onsen"
    },
    {
        id: "o-saga-1",
        name: "嬉野温泉",
        prefecture: "saga",
        category: "重曹泉",
        spring_type: "ナトリウム-炭酸水素塩・塩化物泉など",
        description: "日本三大美肌の湯のひとつとして知られる、とろりとした湯の温泉地。温泉湯どうふや嬉野茶も名物。",
        image: "./onsen/ureshino.png",
        tags: [
            "美肌の湯",
            "日本三大美肌",
            "嬉野茶",
            "佐賀"
        ],
        access: {
            nearest_station: "嬉野温泉駅（西九州新幹線）",
            by_train: "嬉野温泉駅からタクシーで約5〜10分（武雄温泉駅からはバスで約30分）"
        },
        source_note: "rurubu 70002440 / jtb ureshino_onsen / allabout 115483"
    },
    {
        id: "o-saga-2",
        name: "武雄温泉",
        prefecture: "saga",
        category: "単純泉",
        spring_type: "弱アルカリ性単純温泉",
        description: "辰野金吾が設計した楼門（国の重要文化財）がシンボルの温泉。駅から歩いて行ける。",
        image: "./onsen/takeo.png",
        tags: [
            "歴史",
            "楼門",
            "温泉街",
            "佐賀"
        ],
        access: {
            nearest_station: "武雄温泉駅（JR佐世保線）",
            by_train: "武雄温泉駅から徒歩約10分（博多駅から特急で約1時間〜1時間10分）"
        },
        source_note: "jtb takeo_onsen / allabout 103865"
    },
    {
        id: "o-nagasaki-1",
        name: "雲仙温泉",
        prefecture: "nagasaki",
        category: "",
        spring_type: "施設により異なります（各施設の掲示をご確認ください）",
        description: "雲仙岳の噴気地帯「雲仙地獄」に近い温泉地。日本で最初に国立公園に指定された地域にある。",
        image: "./onsen/unzen.png",
        tags: [
            "国立公園",
            "噴気地帯",
            "硫黄泉",
            "長崎"
        ],
        access: {
            nearest_station: "諫早駅（JR長崎本線）",
            by_train: "諫早駅からバスで約60〜80分"
        },
        source_note: "travelist p1050 / jtb unzen_onsen。泉質は施設により異なり確認できず"
    },
    {
        id: "o-nagasaki-2",
        name: "小浜温泉",
        prefecture: "nagasaki",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉など",
        description: "橘湾に面した海辺の温泉地。源泉温度105℃にちなんだ長さ105mの足湯「ほっとふっと105」がある。",
        image: "./onsen/obama.png",
        tags: [
            "海辺",
            "足湯",
            "湯けむり",
            "長崎"
        ],
        access: {
            nearest_station: "諫早駅（JR長崎本線）",
            by_train: "諫早駅からバスで約50分〜1時間"
        },
        source_note: "jtb obama_onsen / onsen.nifty 019358"
    },
    {
        id: "o-nagasaki-3",
        name: "島原温泉",
        prefecture: "nagasaki",
        category: "重曹泉",
        spring_type: "炭酸水素塩泉など",
        description: "城下町の雰囲気が残る温泉。湧水のまち散策と合わせて楽しめる。",
        image: "./onsen/shimabara.png",
        tags: [
            "城下町",
            "湧水",
            "長崎"
        ],
        access: {
            nearest_station: "島原駅（島原鉄道）",
            by_train: "諫早駅から島原鉄道で約1時間20分（島原駅）"
        },
        source_note: "rurubu 80039475 / travelist p1059"
    },
    {
        id: "o-kumamoto-1",
        name: "黒川温泉",
        prefecture: "kumamoto",
        category: "硫黄泉",
        spring_type: "硫黄泉・単純温泉・塩化物泉・炭酸水素塩泉など7種類",
        description: "ひとつの温泉地で7種類の泉質が湧く山あいの温泉。宿の露天風呂を3か所めぐれる「入湯手形」を全国に先駆けて始めた。",
        image: "./onsen/kurokawa.png",
        tags: [
            "露天風呂めぐり",
            "秘湯",
            "熊本"
        ],
        access: {
            nearest_station: "熊本駅（九州横断バス）",
            by_train: "熊本駅から九州横断バスで黒川温泉へ"
        },
        source_note: "nippon.com gu005010 / kumanichi 692714"
    },
    {
        id: "o-kumamoto-2",
        name: "人吉温泉",
        prefecture: "kumamoto",
        category: "単純泉",
        spring_type: "弱アルカリ性単純温泉・ナトリウム-炭酸水素塩・塩化物泉など",
        description: "球磨川のほとりに湧く温泉。人吉城跡のある城下町の風情と、清流の景色をあわせて楽しめる。",
        image: "./onsen/hitoyoshi.png",
        tags: [
            "球磨川",
            "城下町",
            "熊本"
        ],
        access: {
            nearest_station: "人吉駅（JR肥薩線）",
            by_train: "人吉駅から徒歩約3〜15分（施設により異なる）"
        },
        source_note: "jtb hitoyoshi_onsen / gltjp 18712"
    },
    {
        id: "o-kumamoto-3",
        name: "杖立温泉",
        prefecture: "kumamoto",
        category: "塩化物泉",
        spring_type: "弱アルカリ性単純温泉・塩化物泉など",
        description: "杖立川沿いの谷あいに湯けむりが立ちのぼる温泉街。源泉が高温で、蒸し湯のある宿が多い。春は川の上を泳ぐ鯉のぼりが名物。",
        image: "./onsen/tsuedate.png",
        tags: [
            "湯けむり",
            "温泉街",
            "レトロ",
            "熊本"
        ],
        access: {
            nearest_station: "日田駅（JR久大本線）",
            by_train: "日田駅からバスで約40〜50分"
        },
        source_note: "jorudan 1228 / gltjp 14164 / mapple 83383"
    },
    {
        id: "o-kumamoto-4",
        name: "阿蘇内牧温泉",
        prefecture: "kumamoto",
        category: "硫酸塩泉",
        spring_type: "硫酸塩泉など（源泉により異なる）",
        description: "阿蘇観光の中心地にある温泉。広大なカルデラの景色と一緒に楽しめる。",
        image: "./onsen/asou.png",
        tags: [
            "阿蘇",
            "観光拠点",
            "熊本"
        ],
        access: {
            nearest_station: "阿蘇駅（JR豊肥本線）",
            by_train: "阿蘇駅からバスで約15〜20分"
        },
        source_note: "rurubu 70002371 / allabout 116614"
    },
    {
        id: "o-oita-1",
        name: "別府温泉",
        prefecture: "oita",
        category: "その他",
        spring_type: "単純温泉・塩化物泉・炭酸水素塩泉・硫黄泉など多様",
        description: "源泉数・湧出量ともに日本一とされる温泉地。地獄めぐりや市営温泉など、多彩な泉質と湯めぐりが楽しめる。",
        image: "./onsen/beppu.png",
        tags: [
            "日本一の源泉数",
            "地獄めぐり",
            "大分"
        ],
        access: {
            nearest_station: "別府駅（JR日豊本線）",
            by_train: "別府駅から市内各地の温泉へバスで移動"
        },
        source_note: "nta beppu / mlit 001543282 / tabi-mag ot0026"
    },
    {
        id: "o-oita-2",
        name: "由布院温泉",
        prefecture: "oita",
        category: "単純泉",
        spring_type: "単純温泉（アルカリ性単純温泉が中心）",
        description: "由布岳を望む風光明媚な温泉地。アート・カフェ・おしゃれな雑貨店が立ち並び若い世代にも人気。",
        image: "./onsen/yufuin.png",
        tags: [
            "由布岳",
            "アート",
            "おしゃれ",
            "大分"
        ],
        access: {
            nearest_station: "由布院駅（JR久大本線）",
            by_train: "別府駅から特急で約1時間5分（由布院駅）"
        },
        source_note: "onsen.nifty yufuin / gltjp 12815 / 大分県資料"
    },
    {
        id: "o-oita-4",
        name: "長湯温泉",
        prefecture: "oita",
        category: "炭酸泉",
        spring_type: "炭酸水素塩泉（炭酸ガスを多く含む）",
        description: "炭酸ガスを多く含む湯で知られる温泉。湯の中で肌に細かな泡がつく。",
        image: "./onsen/nagayu.png",
        tags: [
            "炭酸泉",
            "湯治",
            "大分"
        ],
        access: {
            nearest_station: "豊後竹田駅（JR豊肥本線）",
            by_train: "豊後竹田駅からバスで約40〜50分"
        },
        source_note: "rurubu 70002352 / nippon.com gu005011"
    },
    {
        id: "o-miyazaki-1",
        name: "京町温泉",
        prefecture: "miyazaki",
        category: "単純温泉",
        spring_type: "単純温泉など（源泉により異なる）",
        description: "えびの市の温泉地。駅の周辺に旅館や日帰り入浴施設が集まり、気軽に湯めぐりができる。",
        image: "./onsen/kyomachi.png",
        tags: [
            "レトロ",
            "えびの",
            "美肌の湯",
            "宮崎"
        ],
        access: {
            nearest_station: "京町温泉駅（JR吉都線）",
            by_train: "京町温泉駅から徒歩約5〜10分（施設により異なる）"
        },
        source_note: "rurubu 70002487 / onsen.nifty ebino"
    },
    {
        id: "o-miyazaki-2",
        name: "青島温泉",
        prefecture: "miyazaki",
        category: "単純泉",
        spring_type: "アルカリ性単純温泉など",
        description: "海辺のリゾート温泉。南国の雰囲気と海の景色が魅力。",
        image: "./onsen/aoshima.png",
        tags: [
            "南国",
            "海",
            "リゾート",
            "宮崎"
        ],
        access: {
            nearest_station: "青島駅（JR日南線）",
            by_train: "青島駅（JR日南線）から徒歩約3分の宿もある"
        },
        source_note: "onsen.nifty aoshima / knt S450045 / jalan yad324606"
    },
    {
        id: "o-kagoshima-1",
        name: "指宿温泉",
        prefecture: "kagoshima",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "海岸に湧く温泉で温めた砂に横たわる「砂むし」で知られる温泉地。日帰りで砂むしを体験できる施設もある。",
        image: "./onsen/ibusuki.png",
        tags: [
            "砂むし温泉",
            "珍しい体験",
            "リゾート",
            "鹿児島"
        ],
        access: {
            nearest_station: "指宿駅（JR指宿枕崎線）",
            by_train: "指宿駅からバスで約5分（徒歩約20分）"
        },
        source_note: "rurubu 70002530 / matcha 4310"
    },
    {
        id: "o-kagoshima-2",
        name: "霧島温泉",
        prefecture: "kagoshima",
        category: "硫黄泉",
        spring_type: "硫黄泉・単純温泉・炭酸水素塩泉など（温泉地により異なる）",
        description: "霧島連山の山腹に温泉地が点在する温泉郷。泉質が多彩で、飲める温泉もある。",
        image: "./onsen/kirishima.png",
        tags: [
            "霧島神宮",
            "坂本龍馬",
            "歴史",
            "鹿児島"
        ],
        access: {
            nearest_station: "霧島神宮駅（JR日豊本線）",
            by_train: "霧島神宮駅からバスで約30〜40分（丸尾）"
        },
        source_note: "rurubu 70002496 70000868 / nta kirishima"
    },
    {
        id: "o-kagoshima-3",
        name: "桜島温泉",
        prefecture: "kagoshima",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "活火山・桜島にある温泉。地下深くから湧く茶褐色のにごり湯で知られる。",
        image: "./onsen/sakurajima.png",
        tags: [
            "火山",
            "絶景",
            "鹿児島"
        ],
        access: {
            nearest_station: "桜島港（桜島フェリー）",
            by_train: "鹿児島港から桜島フェリーで約15分。桜島港から徒歩約8分"
        },
        source_note: "rurubu 70002507 / jalan yad304437 / jorudan 2235"
    },
    {
        id: "o-kagoshima-4",
        name: "屋久島温泉",
        prefecture: "kagoshima",
        category: "単純泉",
        spring_type: "単純硫黄泉など（尾之間温泉）",
        description: "世界自然遺産の島で楽しめる温泉。森と海の空気に包まれる癒やし体験。",
        image: "./onsen/yakushima.png",
        tags: [
            "世界自然遺産",
            "森",
            "島",
            "鹿児島"
        ],
        access: {
            nearest_station: "宮之浦港（フェリー・高速船）",
            by_train: "鹿児島港から高速船で約1時間50分（宮之浦港）。宮之浦港から尾之間温泉へは車で約50分"
        },
        source_note: "rurubu 70000874 / 鹿児島県 熊毛支庁 交通資料"
    },
    {
        id: "o-okinawa-1",
        name: "シギラ黄金温泉",
        prefecture: "okinawa",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物泉",
        description: "宮古島の南部、リゾート内にある天然温泉。地下1,250mから湧く湯を南国の緑に囲まれて楽しめる。",
        image: "./onsen/shigira.png",
        tags: [
            "南国リゾート",
            "海の温泉",
            "沖縄"
        ],
        access: {
            nearest_station: "宮古空港",
            by_train: "宮古空港から車で約15分"
        },
        source_note: "rurubu 70002577 / jorudan 71"
    },
    {
        id: "o-okinawa-2",
        name: "琉球温泉",
        prefecture: "okinawa",
        category: "塩化物泉",
        spring_type: "ナトリウム-塩化物強塩泉",
        description: "那覇空港近くの瀬長島にある天然温泉（琉球温泉 瀬長島ホテル）。地下1,000mから湧く高温の湯で、宿泊しなくても入浴できる。",
        image: "./onsen/senagajima.png",
        tags: [
            "海",
            "展望",
            "リゾート",
            "沖縄"
        ],
        access: {
            nearest_station: "那覇空港",
            by_train: "那覇空港から車で約15分（瀬長島）"
        },
        source_note: "jalan yad352977 / knt S470170"
    }
];

export function getOnsenByPrefecture(prefectureId) {
    return onsenList.filter(o => o.prefecture === prefectureId);
}

/**
 * カテゴリ（泉質）で温泉を絞り込み
 * @param {string} category - 泉質カテゴリ
 * @returns {Array} 温泉データの配列
 */
export function getOnsenByCategory(category) {
    return onsenList.filter(o => o.category === category);
}

/**
 * テキスト検索（温泉名・説明・タグ・泉質対応）
 * @param {string} query - 検索クエリ
 * @returns {Array} 検索結果の配列
 */
export function searchOnsen(query) {
    const q = query.toLowerCase();
    return onsenList.filter(o =>
        o.name.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q) ||
        o.spring_type.toLowerCase().includes(q) ||
        o.category.toLowerCase().includes(q) ||
        o.tags.some(t => t.toLowerCase() === q)
    );
}

/**
 * 泉質カテゴリ一覧を取得（重複除去）
 * @returns {Array} カテゴリ名の配列
 */
export function getOnsenCategories() {
    return [...new Set(onsenList.map(o => o.category))];
}