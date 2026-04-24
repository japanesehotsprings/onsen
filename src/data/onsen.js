/**
 * 47都道府県の温泉データ
 * 各温泉地の詳細情報を管理するモジュール
 */

export const onsenList = [
    // ===== 北海道 =====
    {
        id: 'o-hokkaido-1',
        name: '登別温泉',
        prefecture: 'hokkaido',
        category: '硫黄泉',
        spring_type: '硫黄泉・食塩泉など9種',
        description: '日本屈指の温泉地。地獄谷の迫力ある噴気孔と多様な泉質が魅力。クマ牧場でも有名。',
        image: './onsen/noboribetsu.png',
        tags: ['硫黄泉', '地獄谷', '名湯', '北海道'],
        effects: ['疲労回復', '慢性皮膚病', '神経痛', '関節痛'],
        history: '明治元年（1868年）に温泉宿が開かれた。アイヌの人々が「ヌプルペツ」（色彩のある川）と呼んでいた地で、古くから薬湯として知られていた。',
        day_trip: { available: true, price: '1,500円〜', hours: '10:00-16:00' },
        access: { nearest_station: '登別駅（JR室蘭本線）', by_train: '登別駅からバス約13分', by_car: '道央道・登別東ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '地獄谷周辺', free: true }
    },
    {
        id: 'o-hokkaido-2',
        name: '洞爺湖温泉',
        prefecture: 'hokkaido',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '洞爺湖畔に広がるリゾート温泉。湖面に映る有珠山と花火大会が絵になる景勝地。',
        image: './onsen/toyako.png',
        tags: ['湖畔', '花火', 'リゾート', '北海道'],
        effects: ['疲労回復', '神経痛', '筋肉痛'],
        history: '明治31年（1898年）の有珠山噴火後に温泉が湧出。昭和の時代に観光地として発展し、2008年にはG8洞爺湖サミットの舞台となった。',
        day_trip: { available: true, price: '800円〜', hours: '11:00-21:00' },
        access: { nearest_station: '洞爺駅（JR室蘭本線）', by_train: '洞爺駅からバス約20分', by_car: '道央道・虻田洞爺湖ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湖畔公園', free: true }
    },
    {
        id: 'o-hokkaido-3',
        name: '定山渓温泉',
        prefecture: 'hokkaido',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '札幌から約1時間の秘境温泉。豊平川渓谷沿いに旅館が立ち並ぶ「札幌の奥座敷」。',
        image: './onsen/zyozankei.png',
        tags: ['渓谷', '秘境', '札幌近郊', '北海道']
        history: '明治30年（1897年）に美泉定山という僧侶が発見したと伝えられる。「札幌の奥座敷」として長く市民に愛されてきた歴史ある温泉地。',
        day_trip: { available: true, price: '1,000円〜', hours: '10:00-21:00' },
        access: { nearest_station: '真駒内駅（地下鉄南北線）', by_train: '真駒内駅からバス約40分', by_car: '道央道・札幌南ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '二見公園', free: true }
    },
    {
        id: 'o-hokkaido-4',
        name: '阿寒湖温泉',
        prefecture: 'hokkaido',
        category: '硫黄泉',
        spring_type: '硫黄泉・重曹泉',
        description: 'マリモで有名な阿寒湖畔の温泉。アイヌ文化に触れられる民芸品の街も魅力。',
        image: './onsen/akan.png',
        tags: ['湖畔', 'アイヌ', 'マリモ', '北海道']
        history: '明治時代にアイヌの人々が「スルク・コタン」（温泉の村）と呼んでいた地。昭和29年（1954年）に阿寒国立公園に指定され観光地として発展した。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '釧路駅（JR根室本線）', by_train: '釧路駅からバス約1時間50分', by_car': '釧路道・阿寒ICから約35分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街中心部', free: true }
    },
    {
        id: 'o-hokkaido-5',
        name: '層雲峡温泉',
        prefecture: 'hokkaido',
        category: '単純泉',
        spring_type: '単純温泉・塩化物泉など',
        description: '大雪山国立公園の峡谷に広がる温泉地。断崖絶壁と滝、紅葉・氷瀑の景色が名物。',
        image: './onsen/sounkyo.png',
        tags: ['峡谷', '大雪山', '紅葉', '北海道']
        history: '明治26年（1893年）に層雲峡の景観が発見され、大正時代に温泉地として開発が進んだ。柱状節理の断崖絶壁と滝が国の天然記念物に指定されている。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-20:00' },
        access: { nearest_station: '上川駅（JR石北本線）', by_train: '上川駅からバス約30分', by_car: '旭川紋別道・愛別ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: 'ビジターセンター前', free: true }
    },
    {
        id: 'o-hokkaido-6',
        name: '十勝川温泉',
        prefecture: 'hokkaido',
        category: '重曹泉',
        spring_type: '植物性モール泉（ナトリウム-塩化物・炭酸水素塩泉）',
        description: '植物由来のモール泉で有名。とろみのある湯と広い空、十勝の食がセットで楽しめる。',
        image: './onsen/tokachigawa.png',
        tags: ['モール泉', '美肌', '十勝', '北海道']
        history: '大正時代に農地開発と同時に温泉が発見された。日本唯一の植物性モール泉として昭和以降に注目され、「美人の湯」として広く知られるようになった。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '十勝川温泉駅（帯広バスターミナルより）', by_train: '帯広駅からバス約40分', by_car: '道東道・音更帯広ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '白鳥公園', free: true }
    },
    {
        id: 'o-hokkaido-7',
        name: '支笏湖温泉',
        prefecture: 'hokkaido',
        category: '炭酸水素塩泉',
        spring_type: '炭酸水素塩泉',
        description: '透明度の高い支笏湖畔の温泉。湖と森の静けさに包まれる大人のリゾート。',
        image: './onsen/shikotsu.png',
        tags: ['湖畔', '静寂', '森林', '北海道']
        history: '支笏湖の湖畔に昭和初期から温泉が湧出していたが、観光地として本格整備されたのは昭和30年代以降。湖の透明度の高さとともに自然保護が重視された温泉地。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-20:00' },
        access: { nearest_station: '千歳駅（JR千歳線）', by_train: '千歳駅からバス約40分', by_car: '道央道・千歳ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-hokkaido-8',
        name: '川湯温泉',
        prefecture: 'hokkaido',
        category: '酸性泉',
        spring_type: '酸性明礬泉',
        description: '硫黄山の麓に広がる強めの酸性泉。湯治文化と摩周・屈斜路観光の拠点。',
        image: './onsen/kawayu.png',
        tags: ['硫黄山', '湯治', '道東', '北海道']
        history: 'アイヌの人々が古くから霊場として崇めた硫黄山の麓に湧く酸性泉。明治時代に湯治場として開かれ、屈斜路・摩周観光の拠点として発展した。',
        day_trip: { available: true, price: '400円〜', hours: '08:00-20:00' },
        access: { nearest_station: '川湯温泉駅（JR釧網本線）', by_train: '川湯温泉駅から徒歩約20分またはタクシー', by_car: '国道391号線沿い、弟子屈ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: 'オヤコツ地獄周辺', free: true }
    },
    {
        id: 'o-hokkaido-9',
        name: 'ニセコ温泉郷',
        prefecture: 'hokkaido',
        category: '硫黄泉',
        spring_type: '硫黄泉・塩化物泉など',
        description: '世界的スキーリゾートの温泉。羊蹄山を望む露天風呂や秘湯感のある野湯が点在。',
        image: './onsen/niseko.png',
        tags: ['スキー', '羊蹄山', 'リゾート', '北海道']
        history: 'ニセコ連峰の豊富な雪と温泉が組み合わさった地として古くから知られる。昭和後期にスキーリゾートとして開発が進み、2000年代以降は外国人客に人気の国際リゾートとなった。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-20:00' },
        access: { nearest_station: 'ニセコ駅（JR函館本線）', by_train: 'ニセコ駅からバスまたはタクシー約15分', by_car: '道央道・黒松内ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '五色温泉周辺', free: true }
    },

    // ===== 青森県 =====
    {
        id: 'o-aomori-1',
        name: '酸ヶ湯温泉',
        prefecture: 'aomori',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉',
        description: '八甲田山の秘湯。千人風呂と呼ばれる巨大な混浴ヒバ千人風呂が有名。国民保養温泉。',
        image: './onsen/sukayu.png',
        tags: ['秘湯', '混浴', 'ヒバ千人風呂', '青森']
        history: '江戸時代から湯治場として知られ、南部藩の御用湯として重宝された。明治時代に国民保養温泉地に指定。「千人風呂」と呼ばれる混浴大浴場は400年以上の歴史を持つ。',
        day_trip: { available: true, price: '1,000円〜', hours: '07:00-18:00' },
        access: { nearest_station: '酸ヶ湯温泉（路線バス）', by_train: 'JR青森駅からバス約70分（JRバス）', by_car: '東北道・青森ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-aomori-2',
        name: '浅虫温泉',
        prefecture: 'aomori',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '陸奥湾を望む温泉地。新鮮な海の幸と温泉を一緒に楽しめる「津軽の奥座敷」。',
        image: './onsen/asamushi.png',
        tags: ['海の幸', '海岸', '青森']
        history: '平安時代に発見されたと伝わる青森県内最古の温泉地のひとつ。江戸時代から津軽藩の湯治場として栄え、明治以降は陸奥湾を望む海浜温泉として発展した。',
        day_trip: { available: true, price: '400円〜', hours: '07:00-20:00' },
        access: { nearest_station: '浅虫温泉駅（JR青い森鉄道）', by_train: '浅虫温泉駅から徒歩約5分', by_car: '東北道・青森東ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前広場', free: true }
    },
    {
        id: 'o-aomori-3',
        name: '大鰐温泉',
        prefecture: 'aomori',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '弘前近郊の温泉地。長い歴史をもち、津軽観光の宿泊拠点として人気。',
        image: './onsen/oowani.png',
        tags: ['津軽', '弘前', '歴史', '青森']
        history: '鎌倉時代に発見されたと伝えられる古湯。弘前城下の湯治場として津軽藩から庇護を受け、近代にはスキーリゾートとして脚光を浴びた。',
        day_trip: { available: true, price: '350円〜', hours: '06:00-22:00' },
        access: { nearest_station: '大鰐温泉駅（JR奥羽本線・弘南鉄道）', by_train: '大鰐温泉駅から徒歩約5分', by_car: '東北道・大鰐弘前ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前', free: true }
    },
    {
        id: 'o-aomori-4',
        name: '不老ふ死温泉',
        prefecture: 'aomori',
        category: '塩化物泉',
        spring_type: 'ナトリウム-塩化物強塩泉',
        description: '日本海を目の前に望む露天風呂が名物。夕日と波音を浴びるように楽しめる。',
        image: './onsen/hurouhushi.png',
        tags: ['日本海', '夕日', '絶景露天', '青森']
        history: '昭和35年（1960年）に発見された比較的新しい温泉地だが、日本海に沈む夕陽を眺めながら入る露天風呂で一躍有名になった。「不老不死」の名が示す通り、長寿・健康を願う旅人が全国から訪れる。',
        day_trip: { available: true, price: '600円〜', hours: '08:00-20:00' },
        access: { nearest_station: '五所川原駅（JR五能線）', by_train': 'JR五能線・艫作駅から徒歩約15分', by_car: '東北道・大鰐弘前ICから約100分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-aomori-5',
        name: '嶽温泉',
        prefecture: 'aomori',
        category: '酸性泉',
        spring_type: '酸性硫黄泉',
        description: '岩木山の麓に湧く湯治場風情の温泉。素朴な宿と山の空気が心地いい。',
        image: './onsen/dake.png',
        tags: ['岩木山', '湯治', '素朴', '青森']
        history: '岩木山の麓に古くから湧く硫黄泉。津軽藩の湯治場として利用された歴史を持ち、近年は岩木山登山の拠点温泉としても知られる。',
        day_trip: { available: true, price: '300円〜', hours: '09:00-17:00' },
        access: { nearest_station: '弘前駅（JR奥羽本線）', by_train: '弘前駅からバス約65分', by_car: '東北道・大鰐弘前ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 岩手県 =====
    {
        id: 'o-iwate-1',
        name: '花巻温泉郷',
        prefecture: 'iwate',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '宮沢賢治ゆかりの温泉地。大沢温泉・鉛温泉など趣の異なる名湯が点在する温泉天国。',
        image: './onsen/hanamaki.png',
        tags: ['秘湯', '宮沢賢治', '名湯', '岩手']
        history: '宮沢賢治が愛した岩手を代表する温泉郷。大沢・台・鉛・志戸平・渡り・金矢など複数の温泉群からなり、明治時代から文人墨客が訪れる湯治の地として知られる。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '花巻温泉駅（JR釜石線）', by_train: '花巻温泉駅からバス約15分', by_car: '東北道・花巻ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '花巻温泉バラ園', free: true }
    },
    {
        id: 'o-iwate-2',
        name: '松川温泉',
        prefecture: 'iwate',
        category: '硫黄泉',
        spring_type: '含硫黄単純泉',
        description: '岩手山麓に位置する自噴する硫黄泉の秘湯。こけし作りの里としても知られる。',
        image: './onsen/matsukawa.png',
        tags: ['硫黄泉', '秘湯', '自噴', '岩手']
        history: '標高1,000mの高地に湧く秘湯で、江戸時代から湯治場として知られた。携帯電話が圏外となるほどの山奥に位置し、完全に俗世から離れられる秘湯として名高い。',
        day_trip: { available: true, price: '600円〜', hours: '08:00-18:00' },
        access: { nearest_station: '松尾八幡平駅（IGRいわて銀河鉄道）', by_train: '盛岡駅からバス約80分（岩手県北バス）', by_car: '東北道・松尾八幡平ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-iwate-3',
        name: 'つなぎ温泉',
        prefecture: 'iwate',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '御所湖のほとりの温泉地。盛岡から近く、湖畔の景色と合わせて楽しめる。',
        image: './onsen/tsunagi.png',
        tags: ['湖畔', '盛岡近郊', '岩手']
        history: '奈良時代の僧・行基が発見したと伝わる古湯。盛岡城下の御用湯として南部藩に重用され、現在も盛岡市民の身近な湯として親しまれている。',
        day_trip: { available: true, price: '400円〜', hours: '10:00-21:00' },
        access: { nearest_station: '盛岡駅（JR東北新幹線・東北本線）', by_train: '盛岡駅からバス約30分', by_car: '東北道・盛岡ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '網張温泉周辺', free: true }
    },
    {
        id: 'o-iwate-4',
        name: '夏油温泉',
        prefecture: 'iwate',
        category: '硫黄泉',
        spring_type: '硫黄泉・塩化物泉など',
        description: '山深い秘湯で、川沿いの露天風呂が有名。湯量豊富で温泉好きの聖地。',
        image: './onsen/getou.png',
        tags: ['秘湯', '露天風呂', '湯量', '岩手']
        history: '古くから「霊湯」として知られ、木地山修験道の行者たちが入湯した記録が残る。原始の森に囲まれた秘境の温泉地で、「奥州の薬湯」とも称される。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-15:00' },
        access: { nearest_station: '北上駅（JR東北新幹線・東北本線）', by_train: '北上駅からタクシー約50分', by_car: '東北道・北上江釣子ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-iwate-5',
        name: '八幡平温泉郷',
        prefecture: 'iwate',
        category: '硫黄泉',
        spring_type: '硫黄泉・単純泉など',
        description: '八幡平の高原に点在する温泉群。トレッキングや紅葉、雪景色と相性抜群。',
        image: './onsen/hachimantai.png',
        tags: ['高原', '紅葉', '自然', '岩手']
        history: '八幡平の山麓に点在する温泉郷で、明治時代から開湯した各宿が独自の源泉を持つ。十和田八幡平国立公園内に位置し、高山植物と温泉が織りなす絶景が楽しめる。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-20:00' },
        access: { nearest_station: '盛岡駅（JR東北新幹線）', by_train: '盛岡駅からバス約80分（岩手県北バス）', by_car: '東北道・松尾八幡平ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '八幡平ビジターセンター', free: true }
    },

    // ===== 宮城県 =====
    {
        id: 'o-miyagi-1',
        name: '鳴子温泉郷',
        prefecture: 'miyagi',
        category: '硫黄泉',
        spring_type: '硫黄泉・重曹泉など9種',
        description: '日本の泉質11種のうち9種が集まる「温泉の宝庫」。こけしの発祥地としても有名。',
        image: './onsen/naruko.png',
        tags: ['9種の泉質', 'こけし', '秘湯', '宮城']
        history: '江戸時代初期から湯治場として栄え、「奥の細道」で松尾芭蕉も立ち寄ったと伝わる。9種類の泉質が集まる「泉質の宝庫」として近代に全国区の名湯となった。',
        day_trip: { available: true, price: '500円〜', hours: '09:00-21:00' },
        access: { nearest_station: '鳴子温泉駅（JR陸羽東線）', by_train: '鳴子温泉駅から徒歩圏内', by_car: '東北道・古川ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前・温泉街各所', free: true }
    },
    {
        id: 'o-miyagi-2',
        name: '作並温泉',
        prefecture: 'miyagi',
        category: '単純泉',
        spring_type: '単純泉',
        description: '広瀬川渓谷沿いの温泉地。仙台から近く「仙台の奥座敷」として親しまれる。',
        image: './onsen/sakunami.png',
        tags: ['渓谷', '仙台近郊', '宮城']
        history: '江戸時代に仙台藩主・伊達政宗が入湯したと伝わる「仙台の奥座敷」。明治以降は文人が逗留した温泉として知られ、正岡子規も訪れたとされる。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '作並駅（JR仙山線）', by_train: '作並駅からバス約5分', by_car: '東北道・仙台宮城ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-miyagi-3',
        name: '秋保温泉',
        prefecture: 'miyagi',
        category: '塩化物泉',
        spring_type: 'ナトリウム-カルシウム塩化物泉',
        description: '仙台近郊の人気温泉地。名取川渓谷や滝の景観と合わせて楽しめる「仙台の奥座敷」。',
        image: './onsen/akiu.png',
        tags: ['仙台近郊', '渓谷', '滝', '宮城']
        history: '平安時代の武将・坂上田村麻呂が発見したと伝えられる古湯。「杜の都・仙台」の奥座敷として長く市民に親しまれ、伊達政宗も愛したと伝わる名湯。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '愛子駅（JR仙山線）', by_train: '愛子駅からバス約15分', by_car: '東北道・仙台宮城ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '秋保大滝遊歩道', free: true }
    },
    {
        id: 'o-miyagi-4',
        name: '松島温泉',
        prefecture: 'miyagi',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '日本三景・松島エリアで楽しめる温泉。島々の景色と海の幸が魅力。',
        image: './onsen/matsushima.png',
        tags: ['日本三景', '海の幸', '観光', '宮城']
        history: '昭和初期に松島湾の海底から温泉が湧出したことで開発が始まった。日本三景「松島」の絶景とセットで楽しめる観光温泉地として全国に知られる。',
        day_trip: { available: true, price: '600円〜', hours: '11:00-20:00' },
        access: { nearest_station: '松島海岸駅（JR仙石線）', by_train: '松島海岸駅から徒歩約15分', by_car: '三陸道・松島大郷ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '松島公園内', free: true }
    },
    {
        id: 'o-miyagi-5',
        name: '遠刈田温泉',
        prefecture: 'miyagi',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉・塩化物泉など',
        description: '蔵王連峰の麓にある温泉地。蔵王観光の拠点として人気で、落ち着いた温泉街が広がる。',
        image: './onsen/toogatta.png',
        tags: ['蔵王', '山麓', '温泉街', '宮城']
        history: '江戸時代から伊達藩の湯治場として知られる硫酸塩泉。「遠刈田こけし」の産地でもあり、温泉とこけし工芸が結びついた独特の文化を持つ。',
        day_trip: { available: true, price: '460円〜', hours: '08:30-21:00' },
        access: { nearest_station: '白石蔵王駅（JR東北新幹線）', by_train: '白石蔵王駅からバス約45分', by_car: '東北道・村田ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '神の湯前', free: true }
    },

    // ===== 秋田県 =====
    {
        id: 'o-akita-1',
        name: '乳頭温泉郷',
        prefecture: 'akita',
        category: '硫黄泉',
        spring_type: '硫黄泉・重曹泉など各宿異なる',
        description: '秘湯の宝庫。7つの温泉宿からなる山奥の温泉郷。鶴の湯の茅葺き旅館と露天風呂は絶景。',
        image: './onsen/nyuto.png',
        tags: ['秘湯', '鶴の湯', '露天風呂', '秋田']
        history: '江戸時代から湯治場として知られ、明治時代に秋田県の名湯として脚光を浴びた。7つの秘湯一軒宿が点在し、鶴の湯温泉は江戸初期創業という歴史を誇る。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-15:00' },
        access: { nearest_station: '田沢湖駅（JR秋田新幹線）', by_train: '田沢湖駅からバス約50分', by_car: '秋田道・西仙北スマートICから約60分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-akita-2',
        name: '玉川温泉',
        prefecture: 'akita',
        category: '酸性泉',
        spring_type: '強酸性含二酸化炭素塩化物泉',
        description: '日本一の酸性度を誇る温泉。pH1.2の強酸性の湯は難病にも効くと言われ全国から湯治客が訪れる。',
        image: './onsen/tamagawa.png',
        tags: ['強酸性', '湯治', '秘湯', '秋田']
        history: '江戸時代末期に発見された強酸性の温泉。湯治文化が今も息づき、長期滞在型の「湯治棟」を備えた全国唯一の国民保養温泉地。ラジウムを含む「ラジウム泉」としても有名。',
        day_trip: { available: true, price: '1,000円〜', hours: '06:00-20:00' },
        access: { nearest_station: '田沢湖駅（JR秋田新幹線）', by_train: '田沢湖駅からバス約60分', by_car': '秋田道・西仙北スマートICから約80分', parking: true },
        drinkable: true,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-akita-3',
        name: '男鹿温泉郷',
        prefecture: 'akita',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '男鹿半島の温泉。なまはげ文化と日本海の景色、海の幸がセットで楽しめる。',
        image: './onsen/oga.png',
        tags: ['日本海', 'なまはげ', '海の幸', '秋田']
        history: '男鹿半島の付け根に点在する温泉郷。昭和時代にリゾート開発が進み、なまはげ伝説の里・男鹿観光と合わせて楽しめる温泉地として人気を博す。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '男鹿駅（JR男鹿線）', by_train: '男鹿駅からバスまたはタクシー約15分', by_car: '秋田道・昭和男鹿半島ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '戸賀温泉近辺', free: true }
    },
    {
        id: 'o-akita-4',
        name: '大湯温泉',
        prefecture: 'akita',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉',
        description: '十和田エリアの温泉。渓流沿いの景色と落ち着いた湯治場の雰囲気が魅力。',
        image: './onsen/oyu.png',
        tags: ['渓流', '湯治', '静けさ', '秋田']
        history: '縄文時代から湯が湧いていたとされる古湯。江戸時代には南部藩の御用湯として栄え、「大湯環状列石」など縄文遺跡と合わせて訪れる歴史観光の地でもある。',
        day_trip: { available: true, price: '400円〜', hours: '10:00-20:00' },
        access: { nearest_station: '鹿角花輪駅（JR花輪線）', by_train: '鹿角花輪駅からバス約25分', by_car: '東北道・鹿角ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '大湯温泉街', free: true }
    },
    {
        id: 'o-akita-5',
        name: '田沢湖高原温泉郷',
        prefecture: 'akita',
        category: '単純泉',
        spring_type: '単純温泉・硫黄泉など',
        description: '田沢湖やスキー場に近い高原の温泉。四季のアクティビティと相性がいい。',
        image: './onsen/tazawako.png',
        tags: ['高原', '田沢湖', 'スキー', '秋田']
        history: '秋田駒ヶ岳の麓に広がる高原温泉郷。田沢湖に隣接し、高山植物と雄大な山岳景観の中で温泉を楽しめる。秋田新幹線開業後に観光客が増加した。',
        day_trip: { available: true, price: '600円〜', hours: '09:00-17:00' },
        access: { nearest_station: '田沢湖駅（JR秋田新幹線）', by_train: '田沢湖駅からバス約20分', by_car: '秋田道・田沢湖ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 山形県 =====
    {
        id: 'o-yamagata-1',
        name: '銀山温泉',
        prefecture: 'yamagata',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '大正ロマン漂う温泉街。ガス灯に照らされた木造多層建築の旅館が立ち並ぶ幻想的な夜景が有名。',
        image: './onsen/ginzan.png',
        tags: ['大正ロマン', '木造旅館', '冬景色', '山形']
        history: '大正時代の銀山採掘が衰退した後、温泉街として整備された。大正ロマンの洋風建築が川沿いに立ち並ぶ景観は国の重要伝統的建造物群保存地区に選定されている。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-15:00' },
        access: { nearest_station: '大石田駅（JR奥羽本線）', by_train: '大石田駅からバス約30分', by_car: '東北道・村田ICから約80分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '銀山川沿い', free: true }
    },
    {
        id: 'o-yamagata-2',
        name: '蔵王温泉',
        prefecture: 'yamagata',
        category: '硫黄泉',
        spring_type: '強酸性硫黄泉',
        description: '国内有数の強酸性硫黄泉。冬のスキーと温泉を同時に楽しめるリゾート。樹氷鑑賞の拠点にも。',
        image: './onsen/zao.png',
        tags: ['硫黄泉', 'スキー', '樹氷', '山形']
        history: '平安時代の開湯伝説を持つ古湯。強酸性の硫黄泉で知られ、スキーリゾートとしても有名。「蔵王の樹氷」観光と温泉を組み合わせた冬の観光地として全国区。',
        day_trip: { available: true, price: '550円〜', hours: '06:00-22:00' },
        access: { nearest_station: '山形駅（JR山形新幹線）', by_train: '山形駅からバス約40分（山交バス）', by_car: '東北道・山形蔵王ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: 'ゆ～チェリー前', free: true }
    },
    {
        id: 'o-yamagata-3',
        name: 'かみのやま温泉',
        prefecture: 'yamagata',
        category: '塩化物泉',
        spring_type: '塩化物泉・硫酸塩泉など',
        description: '城下町の風情が残る温泉地。武家屋敷やワイナリー観光と合わせて楽しめる。',
        image: './onsen/kaminoyama.png',
        tags: ['城下町', '歴史', '山形']
        history: '江戸時代に上山城（月岡城）の城下町に湧いた温泉。「かみのやまこけし」の産地でもあり、江戸期から藩主の保養地として重宝された歴史を持つ。',
        day_trip: { available: true, price: '400円〜', hours: '06:00-22:00' },
        access: { nearest_station: 'かみのやま温泉駅（JR山形新幹線）', by_train: 'かみのやま温泉駅から徒歩圏内', by_car: '東北道・山形上山ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前・城址公園', free: true }
    },
    {
        id: 'o-yamagata-4',
        name: '天童温泉',
        prefecture: 'yamagata',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '将棋駒の産地で知られる天童の温泉。さくらんぼ観光の拠点としても便利。',
        image: './onsen/tendou.png',
        tags: ['将棋', 'さくらんぼ', '山形']
        history: '江戸時代に天童織田藩の城下町に栄えた温泉。将棋の駒生産地として知られる天童市の観光と温泉を組み合わせた近代的な温泉地として発展した。',
        day_trip: { available: true, price: '400円〜', hours: '10:00-21:00' },
        access: { nearest_station: '天童駅（JR奥羽本線）', by_train: '天童駅から徒歩約10分', by_car: '東北道・山形北ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: 'まちなか将棋公園', free: true }
    },
    {
        id: 'o-yamagata-5',
        name: '赤湯温泉',
        prefecture: 'yamagata',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉',
        description: '開湯伝説が残る古湯。ぶどう畑やワイン文化と合わせて楽しめる落ち着いた温泉地。',
        image: './onsen/akayu.png',
        tags: ['古湯', 'ワイン', '山形']
        history: '奈良時代に開湯したと伝わる古湯。平安末期には源頼朝の家臣が湯治したとの記録も残る。ぶどうとワインの産地・南陽市に位置し、温泉とワインが楽しめる。',
        day_trip: { available: true, price: '300円〜', hours: '10:00-21:00' },
        access: { nearest_station: '赤湯駅（JR山形新幹線）', by_train: '赤湯駅から徒歩約5分', by_car: '東北道・山形上山ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '烏帽子山公園', free: true }
    },
    {
        id: 'o-yamagata-6',
        name: 'あつみ温泉',
        prefecture: 'yamagata',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '日本海側に近い温泉地。川沿いの温泉街と海の幸が魅力。',
        image: './onsen/atsumi.png',
        tags: ['温泉街', '海の幸', '山形']
        history: '平安時代の武将・源頼義が発見したと伝わる古湯。庄内地方の日本海に面した温泉地で、「あつみ温泉こけし」でも知られ、江戸期から湯治場として親しまれてきた。',
        day_trip: { available: true, price: '500円〜', hours: '07:00-21:00' },
        access: { nearest_station: '温海温泉駅（JR羽越本線）', by_train: '温海温泉駅から徒歩約10分', by_car: '日本海東北道・温海ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯の沢公園', free: true }
    },

    // ===== 福島県 =====
    {
        id: 'o-fukushima-1',
        name: '東山温泉',
        prefecture: 'fukushima',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '会津若松の奥座敷。七日町通りや鶴ヶ城観光の後に訪れる温泉地として人気。',
        image: './onsen/higashiyama.png',
        tags: ['会津', '歴史', '福島']
        history: '江戸時代に会津藩の湯治場として栄えた温泉郷。柳津の岩山に囲まれた渓谷の温泉で、会津若松の奥座敷として長く親しまれてきた。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '会津若松駅（JR磐越西線）', by_train: '会津若松駅からバス約25分', by_car: '磐越道・会津若松ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街中心部', free: true }
    },
    {
        id: 'o-fukushima-2',
        name: '磐梯熱海温泉',
        prefecture: 'fukushima',
        category: '重曹泉',
        spring_type: 'ナトリウム-カルシウム塩化物泉',
        description: '安積山麓の温泉地。五色沼や磐梯山観光の宿泊拠点。アルカリ性のとろみある湯が特徴。',
        image: './onsen/bandaiatami.png',
        tags: ['磐梯山', '紅葉', '福島']
        history: '磐梯山の麓に位置し、明治27年（1894年）の磐梯山噴火後に新たな温泉が湧出した。「会津のまほろば」とも呼ばれ、猪苗代湖観光とセットで楽しむ温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '磐梯熱海駅（JR磐越西線）', by_train: '磐梯熱海駅から徒歩約5分', by_car: '磐越道・磐梯熱海ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前', free: true }
    },
    {
        id: 'o-fukushima-3',
        name: '飯坂温泉',
        prefecture: 'fukushima',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '松尾芭蕉も訪れたとされる歴史ある温泉。共同浴場めぐりが楽しい温泉街。',
        image: './onsen/iizaka.png',
        tags: ['共同浴場', '温泉街', '歴史', '福島']
        history: '奈良時代に行基が発見したと伝わる東北最古の温泉地のひとつ。かつては「奥州三名湯」にも数えられ、江戸時代から多くの文人が訪れた歴史ある温泉。',
        day_trip: { available: true, price: '350円〜', hours: '06:00-23:00' },
        access: { nearest_station: '飯坂温泉駅（福島交通飯坂線）', by_train: '飯坂温泉駅から徒歩約5分', by_car: '東北道・福島西ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '共同浴場前', free: true }
    },
    {
        id: 'o-fukushima-4',
        name: '土湯温泉',
        prefecture: 'fukushima',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉・炭酸水素塩泉など',
        description: '荒川沿いの渓谷温泉。こけし文化でも知られ、落ち着いた湯の町。',
        image: './onsen/tsuchiyu.png',
        tags: ['渓谷', 'こけし', '福島']
        history: '平安時代に弘法大師が発見したと伝わる古湯。吾妻山の麓の高地に湧く温泉で、福島盆地を見下ろす絶景と合わせて「福島の奥座敷」として親しまれてきた。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-19:00' },
        access: { nearest_station: '福島駅（JR東北新幹線）', by_train: '福島駅からバス約40分', by_car: '東北道・福島西ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-fukushima-5',
        name: '芦ノ牧温泉',
        prefecture: 'fukushima',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '会津の渓谷沿いに広がる温泉地。絶景の露天風呂と鉄道旅の相性が良い。',
        image: './onsen/ashinomaki.png',
        tags: ['渓谷', '露天風呂', '会津', '福島']
        history: '江戸時代から会津藩の湯治場として栄え、阿賀川（大川）渓谷の景勝地に旅館が立ち並ぶ。会津の奥座敷として昭和以降に観光温泉地として発展した。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '会津若松駅（JR磐越西線）', by_train: '会津若松駅からバス約45分', by_car: '磐越道・会津若松ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '大川渓谷遊歩道', free: true }
    },
    {
        id: 'o-fukushima-6',
        name: '高湯温泉',
        prefecture: 'fukushima',
        category: '硫黄泉',
        spring_type: '硫黄泉',
        description: '吾妻連峰の山中にある白濁の硫黄泉。雪景色の露天風呂が人気の秘湯。',
        image: './onsen/takayu.png',
        tags: ['白濁', '秘湯', '山中', '福島']
        history: '吾妻連峰の南麓、標高750mに位置する硫黄泉。「吾妻の秘湯」として知られ、乳白色の湯が湧き出す野趣あふれる露天風呂が魅力。近代に国民保養温泉地に指定された。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-14:00' },
        access: { nearest_station: '福島駅（JR東北新幹線）', by_train: '福島駅からバス約60分（福島交通）', by_car: '東北道・福島西ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 茨城県 =====
    {
        id: 'o-ibaraki-1',
        name: '袋田温泉',
        prefecture: 'ibaraki',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '日本三名瀑・袋田の滝のそばに湧く温泉。紅葉と氷瀑の季節は特に人気が高い。',
        image: './onsen/fukuroda.png',
        tags: ['袋田の滝', '紅葉', '茨城']
        history: '袋田の滝の近くに湧く温泉地で、明治時代から行楽客が訪れるようになった。日本三名瀑「袋田の滝」観光の拠点として知られ、周辺の自然と合わせて楽しめる。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '袋田駅（JR水郡線）', by_train: '袋田駅からバス約15分', by_car: '常磐道・那珂ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '袋田の滝入口', free: true }
    },
    {
        id: 'o-ibaraki-2',
        name: '五浦温泉',
        prefecture: 'ibaraki',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '太平洋を望む海辺の温泉。絶景と海の幸を楽しめる北茨城の名湯。',
        image: './onsen/itsura.png',
        tags: ['太平洋', '海の幸', '絶景', '茨城']
        history: '茨城県の北茨城市に位置し、岡倉天心ゆかりの五浦海岸に隣接した温泉地。太平洋を望む断崖絶壁の景観と文人の足跡が色濃く残る文化的な温泉地。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-20:00' },
        access: { nearest_station: '大津港駅（JR常磐線）', by_train: '大津港駅からタクシー約10分', by_car: '常磐道・北茨城ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-ibaraki-3',
        name: '大子温泉',
        prefecture: 'ibaraki',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '奥久慈の自然に囲まれた温泉地。川沿いの景色と里山の空気が魅力。',
        image: './onsen/daigo.png',
        tags: ['奥久慈', '里山', '渓流', '茨城']
        history: '奥久慈の山あいに湧く温泉。大子は蕎麦とりんごの産地としても有名で、袋田の滝と合わせた観光地として茨城県内有数の温泉地に成長した。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '常陸大子駅（JR水郡線）', by_train: '常陸大子駅から徒歩約15分', by_car: '常磐道・那珂ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前', free: true }
    },
    {
        id: 'o-ibaraki-4',
        name: '筑波山温泉',
        prefecture: 'ibaraki',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '筑波山の麓にある温泉。関東平野の夜景を望む展望風呂が人気。',
        image: './onsen/tsukubasan.png',
        tags: ['夜景', '山麓', '茨城']
        history: '霊峰・筑波山の麓に湧く温泉。近代に筑波山観光と合わせて整備が進んだ。ケーブルカーで山頂へのアクセスも良く、関東平野を一望できる展望温泉として人気。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-20:00' },
        access: { nearest_station: 'つくば駅（つくばエクスプレス）', by_train: 'つくば駅からバス約40分', by_car: '常磐道・土浦北ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '筑波山神社参道', free: true }
    },

    // ===== 栃木県 =====
    {
        id: 'o-tochigi-1',
        name: '那須温泉郷',
        prefecture: 'tochigi',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉・単純泉など',
        description: '御用邸でも知られる那須高原の温泉群。那須岳山麓に大小多数の旅館・ホテルが点在。',
        image: './onsen/nasu.png',
        tags: ['那須高原', '御用邸', '栃木']
        history: '奈良時代から湯が湧いていたとされる歴史ある温泉郷。那須高原の豊かな自然の中に複数の温泉地が点在し、江戸時代には徳川将軍家の御用湯として栄えた。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-20:00' },
        access: { nearest_station: '那須塩原駅（JR東北新幹線）', by_train: '那須塩原駅からバス約50分', by_car: '東北道・那須ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '那須湯本温泉街', free: true }
    },
    {
        id: 'o-tochigi-2',
        name: '日光湯元温泉',
        prefecture: 'tochigi',
        category: '硫黄泉',
        spring_type: '含硫黄カルシウム炭酸水素塩泉',
        description: '奥日光の温泉地。中禅寺湖や戦場ヶ原の自然と世界遺産観光の拠点として知られる。',
        image: './onsen/nikko.png',
        tags: ['奥日光', '世界遺産', '栃木']
        history: '日光東照宮の奥に位置する温泉地で、江戸時代から徳川家ゆかりの地として保護された。奥日光の自然の中で湯が湧き、戦国時代から湯治場として利用されてきた。',
        day_trip: { available: true, price: '1,000円〜', hours: '11:00-18:00' },
        access: { nearest_station: '日光駅（JR日光線・東武日光線）', by_train: '日光駅からバス約55分（東武バス）', by_car': '日光道・日光ICから約45分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-tochigi-3',
        name: '鬼怒川温泉',
        prefecture: 'tochigi',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '鬼怒川渓谷沿いの大型温泉地。テーマパークや日光観光と相性が良い。',
        image: './onsen/kinugawa.png',
        tags: ['渓谷', '観光拠点', '栃木']
        history: '鬼怒川に沿って温泉旅館が立ち並ぶ観光温泉地。明治時代に皇族・華族の保養地として開かれ、大正昭和に庶民の温泉地として急速に発展した関東屈指の人気温泉。',
        day_trip: { available: true, price: '800円〜', hours: '11:00-20:00' },
        access: { nearest_station: '鬼怒川温泉駅（東武鬼怒川線）', by_train: '浅草から東武特急スペーシアで約2時間', by_car: '日光道・今市ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '鬼怒川河畔', free: true }
    },
    {
        id: 'o-tochigi-4',
        name: '塩原温泉郷',
        prefecture: 'tochigi',
        category: '塩化物泉',
        spring_type: '塩化物泉・炭酸水素塩泉など',
        description: '渓谷美が魅力の温泉郷。紅葉シーズンの散策と温泉が定番。',
        image: './onsen/shiobara.png',
        tags: ['渓谷', '紅葉', '温泉郷', '栃木']
        history: '奈良時代に発見されたと伝わる塩原温泉は、11の温泉地が集まる温泉郷。明治時代に与謝野晶子ら文人が訪れた文学の温泉地でもある。関東近郊の名湯として長く親しまれている。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '西那須野駅（JR東北本線）', by_train: '西那須野駅からバス約40分', by_car: '東北道・西那須野塩原ICから約25分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '塩原温泉街各所', free: true }
    },
    {
        id: 'o-tochigi-5',
        name: '湯西川温泉',
        prefecture: 'tochigi',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '平家落人伝説が残る山里の温泉。かまくら祭りなど冬の風情も人気。',
        image: './onsen/yunishigawa.png',
        tags: ['山里', '雪景色', '秘湯', '栃木']
        history: '平家の落人伝説が残る山深い秘湯。平安時代末期に平家の残党が隠れ住んだとされ、その子孫が守り続けてきたとされる歴史ある温泉地。一人旅歓迎の宿が多い。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-16:00' },
        access: { nearest_station: '川治湯元駅（野岩鉄道）', by_train: '鬼怒川温泉駅から野岩鉄道で約30分', by_car: '日光道・今市ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯西川河畔', free: true }
    },

    // ===== 群馬県 =====
    {
        id: 'o-gunma-1',
        name: '草津温泉',
        prefecture: 'gunma',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉（含石膏）',
        description: '日本を代表する名湯。街の中心にある湯畑と時間湯が草津のシンボル。日本三名泉の一つ。',
        image: './onsen/kusatsu.png',
        tags: ['湯畑', '時間湯', '日本三名泉', '群馬'],
        effects: ['疲労回復', '慢性皮膚病', '糖尿病', '高血圧', '動脈硬化'],
        history: '源頼朝が発見したと伝えられる日本三名泉のひとつ。江戸時代から湯治場として栄え、年間300万人超が訪れる日本最大級の温泉地。',
        day_trip: { available: true, price: '無料〜', hours: '終日（公共浴場）' },
        access: { nearest_station: '長野原草津口駅（JR吾妻線）', by_train: '長野原草津口駅からバス約25分', by_car: '関越道・渋川伊香保ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯畑周辺', free: true }
    },
    {
        id: 'o-gunma-2',
        name: '伊香保温泉',
        prefecture: 'gunma',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉（黄金の湯）・単純泉（白銀の湯）',
        description: '365段の石段が名物のレトロな温泉街。黄金の湯と白銀の湯の2種を楽しめる人気温泉。',
        image: './onsen/ikaho.png',
        tags: ['石段街', '昭和レトロ', '黄金の湯', '群馬']
        history: '徳川家康の側近・前田利家が発見したとも伝わる温泉地。石段街で知られ、「水上温泉と伊香保」として関東近郊の温泉地として明治以降に発展した名湯。',
        day_trip: { available: true, price: '700円〜', hours: '09:00-21:00' },
        access: { nearest_station: '伊香保温泉（バス停）', by_train: '渋川駅からバス約25分', by_car: '関越道・渋川伊香保ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '石段街', free: true }
    },
    {
        id: 'o-gunma-3',
        name: '万座温泉',
        prefecture: 'gunma',
        category: '硫黄泉',
        spring_type: '含硫黄マグネシウム硫酸塩泉',
        description: '標高1,800mに位置する高地温泉。白濁した硫黄泉の露天風呂からの眺望が絶品。',
        image: './onsen/manza.png',
        tags: ['高山温泉', '白濁', '露天風呂', '群馬']
        history: '標高1,800mの高地に湧く硫黄泉。万座は江戸時代から高山の秘湯として知られ、近代には草津と並ぶ群馬の名湯として整備された。日本最高標高の温泉地のひとつ。',
        day_trip: { available: true, price: '1,500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '長野原草津口駅（JR吾妻線）', by_train: '長野原草津口駅からバス約60分（万座・鹿沢口行き）', by_car: '上信越道・碓氷軽井沢ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-gunma-4',
        name: '四万温泉',
        prefecture: 'gunma',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉・塩化物泉など',
        description: '「四万の病を癒す」と伝わる湯治の里。川沿いの静けさと積善館の雰囲気が人気。',
        image: './onsen/shiman.png',
        tags: ['湯治', 'レトロ', '川沿い', '群馬']
        history: '永禄年間（1558〜70年）に発見されたと伝わる名湯。清流・四万川の渓谷に旅館が立ち並ぶ風情ある温泉地で、国民保養温泉地第1号に指定された歴史を持つ。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '中之条駅（JR吾妻線）', by_train: '中之条駅からバス約40分', by_car: '関越道・渋川伊香保ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街・四万川河畔', free: true }
    },
    {
        id: 'o-gunma-5',
        name: 'みなかみ温泉郷',
        prefecture: 'gunma',
        category: '単純泉',
        spring_type: '単純温泉・塩化物泉など',
        description: '利根川上流の自然に囲まれた温泉郷。ラフティングやスキーと一緒に楽しめる。',
        image: './onsen/minakami.png',
        tags: ['自然', 'アクティビティ', '温泉郷', '群馬']
        history: '利根川の源流域に点在する温泉郷。谷川岳・一ノ倉沢など絶景登山地に隣接し、江戸時代から温泉宿が営まれてきた。ラフティングなどアウトドアとの組み合わせも人気。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-20:00' },
        access: { nearest_station: '水上駅（JR上越線）', by_train: '水上駅から徒歩約20分またはバス', by_car: '関越道・水上ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '水上温泉街', free: true }
    },
    {
        id: 'o-gunma-6',
        name: '老神温泉',
        prefecture: 'gunma',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '尾瀬観光の拠点として便利な温泉地。山の景色と静かな温泉街が魅力。',
        image: './onsen/oigami.png',
        tags: ['尾瀬', '温泉街', '群馬']
        history: '赤城山南麓の片品川渓谷に湧く温泉。江戸時代から沼田城下の湯治場として利用されてきた歴史を持ち、吹割の滝など周辺の観光資源と合わせて楽しめる。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '沼田駅（JR上越線）', by_train: '沼田駅からバス約30分', by_car: '関越道・沼田ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 埼玉県 =====
    {
        id: 'o-saitama-1',
        name: '寄居温泉',
        prefecture: 'saitama',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '荒川沿いの温泉地。関東平野を見渡せる高台の露天風呂が人気の日帰り温泉施設。',
        image: './onsen/yorii.png',
        tags: ['日帰り温泉', '露天風呂', '埼玉']
        history: '荒川の支流・寄居に湧く温泉地。近代に整備された比較的新しい温泉地だが、秩父長瀞の自然観光と合わせたアクセスの良さで関東から日帰り客に人気。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '寄居駅（東武東上線・JR八高線）', by_train: '寄居駅から徒歩約15分', by_car: '関越道・花園ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-saitama-2',
        name: '秩父温泉',
        prefecture: 'saitama',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '秩父の自然と祭り文化を楽しめる温泉エリア。渓谷や神社巡りと相性が良い。',
        image: './onsen/chichibu.png',
        tags: ['秩父', '自然', '観光', '埼玉']
        history: '秩父山中に湧く温泉地。秩父三十四か所観音霊場の巡礼地として古くから旅人が訪れた地に近代温泉施設が整備された。秩父神社・羊山公園など観光と合わせて楽しめる。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-21:00' },
        access: { nearest_station: '西武秩父駅（西武秩父線）', by_train: '西武秩父駅からバスまたは徒歩圏内', by_car: '関越道・花園ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '西武秩父駅前祭の湯', free: false }
    },
    {
        id: 'o-saitama-3',
        name: '長瀞温泉',
        prefecture: 'saitama',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '長瀞渓谷のライン下りと合わせて楽しめる温泉。川と岩畳の景観が魅力。',
        image: './onsen/nagatoro.png',
        tags: ['渓谷', '岩畳', '川', '埼玉']
        history: '長瀞の岩畳で知られる荒川沿いに湧く温泉。ライン下りで有名な長瀞の自然景観に隣接し、関東近郊の日帰り温泉として多くの観光客に親しまれている。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '長瀞駅（秩父鉄道）', by_train: '長瀞駅から徒歩圏内', by_car: '関越道・花園ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 千葉県 =====
    {
        id: 'o-chiba-1',
        name: '犬吠埼温泉',
        prefecture: 'chiba',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '日本で最も早く初日の出が見られる犬吠埼周辺の温泉。太平洋の絶景を望む露天風呂が自慢。',
        image: './onsen/inubosaki.png',
        tags: ['初日の出', '太平洋', '海岸', '千葉']
        history: '犬吠埼灯台近くの太平洋沿岸に湧く温泉。明治時代から海水浴場として発展した銚子の観光と合わせて楽しめる関東最東端の温泉地。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-21:00' },
        access: { nearest_station: '犬吠駅（銚子電鉄）', by_train: '犬吠駅から徒歩約5分', by_car: '東関東道・大栄ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-chiba-2',
        name: '鴨川温泉',
        prefecture: 'chiba',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '房総の海を楽しむ温泉地。海辺のリゾート感と新鮮な海の幸が魅力。',
        image: './onsen/kamogawa.png',
        tags: ['房総', '海の幸', 'リゾート', '千葉']
        history: '外房の海沿いに湧く温泉地。鴨川シーワールドや南房総の自然観光とのアクセスが良く、東京近郊の週末リゾートとして整備が進んだ比較的新しい温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '11:00-21:00' },
        access: { nearest_station: '安房鴨川駅（JR外房線・内房線）', by_train: '安房鴨川駅からバスまたはタクシー約10分', by_car: '館山道・君津ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-chiba-3',
        name: '勝浦温泉',
        prefecture: 'chiba',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '太平洋に面した温泉。朝市や港町の雰囲気とセットで楽しめる。',
        image: './onsen/katsuura.png',
        tags: ['港町', '朝市', '太平洋', '千葉']
        history: '外房・勝浦の海岸線に広がる温泉地。遠洋漁業の基地として栄えた勝浦の海の幸と合わせて楽しめる。朝市が有名で、週末には多くの観光客が訪れる。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '勝浦駅（JR外房線）', by_train: '勝浦駅から徒歩またはバス', by_car: '館山道・市原ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-chiba-4',
        name: '館山温泉',
        prefecture: 'chiba',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '南房総の海辺温泉。夕日と海の景色を満喫できるリゾート感が人気。',
        image: './onsen/tateyama.png',
        tags: ['南房総', '夕日', '海', '千葉']
        history: '南房総の最南端・館山に湧く温泉。温暖な気候と太平洋・東京湾を望む景観が魅力で、花摘みや海水浴など南房総観光の拠点として知られる。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '館山駅（JR内房線）', by_train: '館山駅からバスまたはタクシー約10分', by_car: '館山道・富浦ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 東京都 =====
    {
        id: 'o-tokyo-1',
        name: '奥多摩温泉',
        prefecture: 'tokyo',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '東京唯一の村・奥多摩町の温泉。秋川渓谷や多摩川上流の自然に囲まれた都会の秘湯。',
        image: './onsen/okutama.png',
        tags: ['都会の秘湯', '渓谷', 'おこもり', '東京']
        history: '奥多摩の山中に湧くアルカリ性単純泉。多摩川の清流沿いに位置し、昭和時代に東京都の日帰り温泉地として整備された。ハイキングや登山の後の立ち寄り湯として人気。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-20:00' },
        access: { nearest_station: '奥多摩駅（JR青梅線）', by_train: '奥多摩駅から徒歩またはバス約10分', by_car: '圏央道・青梅ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-tokyo-2',
        name: '大島温泉',
        prefecture: 'tokyo',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '伊豆大島で楽しめる島の温泉。火山島ならではの景色と合わせて楽しめる。',
        image: './onsen/oshima.png',
        tags: ['島', '火山', 'リゾート', '東京']
        history: '伊豆大島の火山活動によって生まれた温泉地。三原山の噴火と共に歴史が刻まれ、東京から船または飛行機でアクセスできる離島温泉として独自の文化を持つ。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '元町港（東海汽船）', by_train: '竹芝桟橋から高速ジェット船約1時間45分', by_car: 'フェリー利用（車の持ち込み可）', parking: true },
        drinkable: false,
        footbath: { available: true, location: '三原山温泉周辺', free: true }
    },
    {
        id: 'o-tokyo-3',
        name: '八丈島温泉',
        prefecture: 'tokyo',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '南国ムードの八丈島で楽しめる温泉。海と緑に囲まれた開放感が魅力。',
        image: './onsen/hachijojima.png',
        tags: ['島', '南国', '海', '東京']
        history: '八丈島の活火山・八丈富士と三原山の地熱により湧く温泉。東京から飛行機で約55分という離島でありながら、複数の公共浴場を持つ充実した温泉地として知られる。',
        day_trip: { available: true, price: '200円〜', hours: '10:00-22:00' },
        access: { nearest_station: '八丈島空港', by_train: '羽田空港から飛行機約55分', by_car: 'フェリー利用（竹芝桟橋から約10時間）', parking: true },
        drinkable: false,
        footbath: { available: true, location: '洞輪沢温泉周辺', free: true }
    },

    // ===== 神奈川県 =====
    {
        id: 'o-kanagawa-1',
        name: '箱根温泉',
        prefecture: 'kanagawa',
        category: '硫黄泉',
        spring_type: '硫黄泉・塩化物泉など多様',
        description: '富士山を望む日本最大級の温泉リゾート。17の温泉地からなり泉質も多様。芦ノ湖や大涌谷も楽しめる。',
        image: './onsen/hakone.png',
        tags: ['リゾート', '富士山', '芦ノ湖', '神奈川'],
        effects: ['疲労回復', '神経痛', '筋肉痛', '美肌'],
        history: '奈良時代から知られる古湯。江戸時代の東海道・箱根関所の宿場町として栄え、明治以降は外国人旅行者にも親しまれた国際的リゾート温泉地。',
        day_trip: { available: true, price: '1,000円〜', hours: '施設により異なる' },
        access: { nearest_station: '箱根湯本駅（箱根登山鉄道）', by_train: '新宿から小田急ロマンスカーで約85分', by_car: '東名高速・厚木ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '箱根湯本駅周辺', free: false }
    },
    {
        id: 'o-kanagawa-2',
        name: '湯河原温泉',
        prefecture: 'kanagawa',
        category: '塩化物泉',
        spring_type: 'カルシウム・ナトリウム塩化物泉',
        description: '万葉集にも詠まれた歴史ある温泉地。文豪や政財界人に愛された「癒やしの里」。',
        image: './onsen/yugawara.png',
        tags: ['歴史', '文豪', '万葉集', '神奈川']
        history: '奈良時代に行基が発見したと伝わる古湯。江戸時代の「東海道」の宿場町として栄え、夏目漱石など多くの文人墨客が逗留した文学の温泉地。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-20:00' },
        access: { nearest_station: '湯河原駅（JR東海道本線）', by_train: '湯河原駅からバス約10分', by_car: '西湘バイパス・真鶴道路・湯河原ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '万葉公園', free: true }
    },
    {
        id: 'o-kanagawa-3',
        name: '強羅温泉',
        prefecture: 'kanagawa',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉・塩化物泉など',
        description: '箱根の高台に広がる温泉地。美術館巡りやケーブルカー観光と相性が良い。',
        image: './onsen/gora.png',
        tags: ['箱根', '美術館', '高台', '神奈川']
        history: '箱根の山の上に湧く硫酸塩泉。旧東海道・箱根宿の歴史と共に発展し、明治時代に富士屋ホテルが開業してから国際的な温泉リゾートとして知られるようになった。',
        day_trip: { available: true, price: '1,200円〜', hours: '10:00-18:00' },
        access: { nearest_station: '強羅駅（箱根登山ケーブルカー）', by_train: '箱根湯本駅から登山鉄道・ケーブルカーで約40分', by_car: '東名道・御殿場ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '強羅公園', free: false }
    },
    {
        id: 'o-kanagawa-4',
        name: '鶴巻温泉',
        prefecture: 'kanagawa',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '都心からアクセスしやすい温泉。とろみのある湯で日帰り利用にも人気。',
        image: './onsen/tsurumaki.png',
        tags: ['日帰り', '美肌', '神奈川']
        history: '小田急沿線に位置する炭酸水素塩泉。大正時代に開業した温泉地で、東京・横浜から日帰りできる近郊温泉として昭和以降に庶民の湯として親しまれてきた。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '鶴巻温泉駅（小田急小田原線）', by_train: '鶴巻温泉駅から徒歩約5分', by_car: '東名道・秦野中井ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 新潟県 =====
    {
        id: 'o-niigata-1',
        name: '越後湯沢温泉',
        prefecture: 'niigata',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '川端康成「雪国」の舞台。豪雪地帯のスキーリゾートと温泉、日本酒を一度に楽しめる。',
        image: './onsen/echigoyuzawa.png',
        tags: ['スキー', '雪国', '日本酒', '新潟']
        history: '越後湯沢は江戸時代から湯治場として知られていた。川端康成の小説「雪国」の舞台として有名になり、昭和以降はスキーリゾートとして急速に発展した。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '越後湯沢駅（JR上越新幹線）', by_train: '越後湯沢駅から徒歩圏内', by_car: '関越道・湯沢ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前・温泉街', free: true }
    },
    {
        id: 'o-niigata-2',
        name: '月岡温泉',
        prefecture: 'niigata',
        category: '硫黄泉',
        spring_type: '含硫黄ナトリウム塩化物泉',
        description: '美肌の湯として知られる硫黄泉。エメラルドグリーンの湯色が特徴で県内屈指の温泉地。',
        image: './onsen/tsukioka.png',
        tags: ['美肌の湯', '硫黄泉', '新潟']
        history: '明治時代に硫黄泉が発見された比較的新しい温泉地だが、質の高い硫黄泉と美肌効果で「美人の湯」として広く知られるようになった新潟県内有数の温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station': '月岡駅（JR羽越本線）', by_train: '豊栄駅からバス約30分（新潟交通）', by_car: '日本海東北道・豊栄新潟東港ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街', free: true }
    },
    {
        id: 'o-niigata-3',
        name: '瀬波温泉',
        prefecture: 'niigata',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '日本海に沈む夕日が名物の海辺温泉。海の幸と温泉を満喫できる。',
        image: './onsen/sewa.png',
        tags: ['日本海', '夕日', '海の幸', '新潟']
        history: '日本海に面した瀬波海岸に湧く高温の塩化物泉。明治時代の石油掘削中に湧出が確認された油臭のある温泉で、夕陽と海の絶景が楽しめる海辺の温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '村上駅（JR羽越本線）', by_train: '村上駅からバス約15分', by_car: '日本海東北道・村上瀬波温泉ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '瀬波海岸', free: true }
    },
    {
        id: 'o-niigata-4',
        name: '岩室温泉',
        prefecture: 'niigata',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉',
        description: '弥彦山の麓の温泉地。寺社巡りやワイナリー観光と合わせて楽しめる。',
        image: './onsen/iwafuro.png',
        tags: ['弥彦', '山麓', '新潟']
        history: '弥彦山の麓に湧く温泉地。弥彦神社の門前町として古くから旅人が訪れ、明治以降は温泉地としても整備が進んだ。越後平野を一望できる景観が魅力。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '岩室駅（JR越後線）', by_train: '岩室駅からバス約10分', by_car: '北陸道・三条燕ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '弥彦公園', free: true }
    },
    {
        id: 'o-niigata-5',
        name: '妙高温泉',
        prefecture: 'niigata',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉など',
        description: '妙高山麓の温泉。スキーや高原散策と相性がよく、四季で楽しめる。',
        image: './onsen/myoko.png',
        tags: ['高原', 'スキー', '妙高', '新潟']
        history: '妙高山麓の火山性温泉地。江戸時代から「妙高の湯」として知られ、スキーリゾートとして昭和以降に発展した。上越新幹線開業後は首都圏からのアクセスも向上した。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '妙高高原駅（しなの鉄道北しなの線）', by_train: '妙高高原駅からバスまたはタクシー約15分', by_car: '上信越道・妙高高原ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '燕温泉周辺', free: true }
    },

    // ===== 富山県 =====
    {
        id: 'o-toyama-1',
        name: '宇奈月温泉',
        prefecture: 'toyama',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '黒部峡谷の入口に広がる温泉地。トロッコ列車で渓谷美を楽しめる北陸随一のリゾート。',
        image: './onsen/unazuki.png',
        tags: ['黒部峡谷', 'トロッコ列車', 'リゾート', '富山']
        history: '黒部峡谷の奥地に湧く温泉地で、大正時代の黒部川電源開発に伴い整備が進んだ。日本一深い峡谷を走るトロッコ電車で訪れる秘境の温泉として全国的に有名。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-20:00' },
        access: { nearest_station: '宇奈月温泉駅（富山地方鉄道本線）', by_train: '富山駅から富山地鉄で約1時間20分', by_car: '北陸道・黒部ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '宇奈月ダム周辺', free: true }
    },
    {
        id: 'o-toyama-2',
        name: '庄川温泉郷',
        prefecture: 'toyama',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '庄川沿いに点在する温泉郷。渓谷の景色と落ち着いた旅館が魅力。',
        image: './onsen/shogawa.png',
        tags: ['渓谷', '温泉郷', '富山']
        history: '五箇山合掌造り集落に近い庄川渓谷沿いに広がる温泉郷。世界遺産「五箇山」観光の拠点として整備が進み、砺波平野のチューリップ畑とも合わせて楽しめる。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '砺波駅（JR城端線）', by_train: '砺波駅からバス約30分', by_car: '東海北陸道・砺波ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-toyama-3',
        name: '氷見温泉郷',
        prefecture: 'toyama',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '富山湾の海の幸が魅力の温泉。寒ブリの季節は特に人気。',
        image: './onsen/himi.png',
        tags: ['富山湾', '海の幸', '氷見', '富山']
        history: '能登半島の付け根・氷見に湧く温泉。ブリの産地として有名な氷見漁港に近く、日本海の新鮮な魚介と温泉を組み合わせた「食と温泉」の旅が楽しめる。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '氷見駅（JR氷見線）', by_train: '氷見駅からバスまたはタクシー約10分', by_car: '能越道・氷見北ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '海浜公園', free: true }
    },

    // ===== 石川県 =====
    {
        id: 'o-ishikawa-1',
        name: '山代温泉',
        prefecture: 'ishikawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム・カルシウム塩化物泉',
        description: '1,300年の歴史を誇る加賀温泉郷の雄。独自の総湯文化が今も息づく名湯の里。',
        image: './onsen/yamashiro.png',
        tags: ['1300年の歴史', '総湯', '加賀', '石川']
        history: '奈良時代に行基が発見したと伝わる加賀温泉郷の中核。江戸時代には加賀藩主・前田家の御用湯として庇護され、明治以降は「古総湯」を中心に温泉文化が花開いた。',
        day_trip: { available: true, price: '500円〜', hours: '06:00-22:00' },
        access: { nearest_station: '加賀温泉駅（JR北陸新幹線・ハピラインふくい）', by_train: '加賀温泉駅からバス約15分', by_car: '北陸道・加賀ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街・服部神社前', free: true }
    },
    {
        id: 'o-ishikawa-2',
        name: '和倉温泉',
        prefecture: 'ishikawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム・カルシウム塩化物泉',
        description: '能登半島の七尾湾に面した海の温泉。金沢の名旅館「加賀屋」が道内随一の豪華旅館として有名。',
        image: './onsen/wakura.png',
        tags: ['海の温泉', '能登', '加賀屋', '石川']
        history: '能登半島の付け根に位置し、万葉集にも詠まれた日本最古級の温泉地のひとつ。和倉温泉は海底から湧く塩化物泉で、能登の海の幸と合わせて楽しむ北陸随一の名湯。',
        day_trip: { available: true, price: '550円〜', hours: '08:00-21:00' },
        access: { nearest_station: '和倉温泉駅（のと鉄道七尾線）', by_train: '金沢駅から特急で約1時間', by_car: '能越道・七尾城山ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '弁天崎源泉公園', free: true }
    },
    {
        id: 'o-ishikawa-3',
        name: '山中温泉',
        prefecture: 'ishikawa',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉',
        description: '鶴仙渓の渓谷美が名物。温泉街の散策と総湯文化を楽しめる。',
        image: './onsen/yamanaka.png',
        tags: ['渓谷', '温泉街', '加賀', '石川']
        history: '松尾芭蕉が「奥の細道」で訪れ「山中や 菊はたおらじ 湯の匂ひ」と詠んだ名湯。鶴仙渓の渓谷美と合わせて加賀温泉郷の中でも風雅な文化が息づく温泉地。',
        day_trip: { available: true, price: '480円〜', hours: '06:30-22:00' },
        access: { nearest_station: '加賀温泉駅（JR北陸新幹線）', by_train: '加賀温泉駅からバス約25分', by_car: '北陸道・加賀ICから約25分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '鶴仙渓あやとり橋', free: true }
    },
    {
        id: 'o-ishikawa-4',
        name: '片山津温泉',
        prefecture: 'ishikawa',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '柴山潟の湖畔温泉。湖と白山の景色、夜のライトアップが映える。',
        image: './onsen/katayamazu.png',
        tags: ['湖畔', '白山', '加賀', '石川']
        history: '柴山潟に面した湖畔の温泉地で、加賀温泉郷の中で最も新しく整備された。湖上に湯煙が立ち上る幻想的な景観が名物で、「湖面からの朝日」が絶景と評される。',
        day_trip: { available: true, price: '500円〜', hours: '06:00-22:00' },
        access: { nearest_station: '加賀温泉駅（JR北陸新幹線）', by_train: '加賀温泉駅からバス約20分', by_car: '北陸道・加賀ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '柴山潟湖畔', free: true }
    },

    // ===== 福井県 =====
    {
        id: 'o-fukui-1',
        name: 'あわら温泉',
        prefecture: 'fukui',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '「北陸の奥座敷」と呼ばれる福井最大の温泉地。松尾芭蕉も訪れた歴史ある名湯。',
        image: './onsen/awara.png',
        tags: ['北陸の奥座敷', '芭蕉', '福井']
        history: '明治時代に油田掘削中に温泉が湧出したのが始まり。竹田川沿いに旅館が立ち並び、北陸新幹線開業（2024年）後は福井観光の拠点温泉として急速に注目を集めている。',
        day_trip: { available: true, price: '650円〜', hours: '09:00-21:00' },
        access: { nearest_station: 'あわら湯のまち駅（えちぜん鉄道）', by_train: 'あわら湯のまち駅から徒歩圏内', by_car: '北陸道・金津ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街・グランディア芳泉前', free: true }
    },
    {
        id: 'o-fukui-2',
        name: '越前温泉',
        prefecture: 'fukui',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '越前海岸沿いの温泉。越前ガニの季節は特に人気で、海の景色も最高。',
        image: './onsen/echizen.png',
        tags: ['越前海岸', '越前ガニ', '海', '福井']
        history: '越前海岸に近い山あいに湧く温泉地。越前ガニの産地・越前町に位置し、冬は松葉蟹・越前ガニと温泉の組み合わせが楽しめる北陸ならではの温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '鯖江駅（JR北陸本線・ハピラインふくい）', by_train: '鯖江駅からバス約30分', by_car: '北陸道・鯖江ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-fukui-3',
        name: '三国温泉',
        prefecture: 'fukui',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '東尋坊近くの海辺温泉。夕日と断崖の景色が旅情を高める。',
        image: './onsen/mikuni.png',
        tags: ['東尋坊', '夕日', '海辺', '福井']
        history: '日本海に面した三国港近くに湧く温泉地。北前船の寄港地として栄えた三国の歴史と、東尋坊の断崖絶壁を合わせて楽しめる越前海岸の温泉リゾート。',
        day_trip: { available: true, price: '600円〜', hours: '11:00-21:00' },
        access: { nearest_station: '三国港駅（えちぜん鉄道三国芦原線）', by_train: '三国港駅から徒歩約10分', by_car: '北陸道・金津ICから約25分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 山梨県 =====
    {
        id: 'o-yamanashi-1',
        name: '石和温泉',
        prefecture: 'yamanashi',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '富士山麓と甲府盆地に広がる温泉地。ほうとう料理と温泉、ワイナリー観光がセットで楽しめる。',
        image: './onsen/isawa.png',
        tags: ['富士山', 'ワイン', '甲府', '山梨']
        history: '昭和32年（1957年）に農地改良の掘削中に温泉が湧出した。笛吹川沿いの扇状地に広がり、甲州ワイン・桃・ぶどうの産地として有名な笛吹市の観光温泉地。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '石和温泉駅（JR中央本線）', by_train: '石和温泉駅から徒歩約10分', by_car: '中央道・一宮御坂ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '石和温泉駅前', free: true }
    },
    {
        id: 'o-yamanashi-2',
        name: '下部温泉',
        prefecture: 'yamanashi',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '山あいの湯治場として知られる温泉。静かな環境でのんびり滞在したい人向け。',
        image: './onsen/shimo.png',
        tags: ['湯治', '山あい', '山梨']
        history: '武田信玄が傷兵の治療に使ったと伝わる歴史ある温泉地。「信玄の隠し湯」のひとつとして知られ、ラジウムを含む放射能泉が湧く山梨県南部の名湯。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '甲斐岩間駅（JR身延線）', by_train: '甲斐岩間駅からバス約10分', by_car: '中央道・南アルプスICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-yamanashi-3',
        name: '西山温泉',
        prefecture: 'yamanashi',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '山深い秘湯として知られる温泉。渓谷の景色と静寂が魅力。',
        image: './onsen/nishiyama.png',
        tags: ['秘湯', '渓谷', '山梨']
        history: '南アルプス山中、標高823mに位置し、江戸時代の「慶長3年（1598年）」に武田氏家臣が発見したとも伝わる。ギネス認定の「世界最古の旅館・西山温泉慶雲館」が有名。',
        day_trip: { available: true, price: '1,500円〜', hours: '11:00-15:00' },
        access: { nearest_station: '身延駅（JR身延線）', by_train: '身延駅からバス約1時間', by_car: '中央道・南アルプスICから約80分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 長野県 =====
    {
        id: 'o-nagano-1',
        name: '別所温泉',
        prefecture: 'nagano',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '「信州の鎌倉」と呼ばれる長野最古の温泉。安楽寺の八角三重塔など歴史遺産が点在。',
        image: './onsen/bessho.png',
        tags: ['信州最古', '歴史遺産', '長野']
        history: '奈良時代の737年に行基が発見したと伝わる信州最古の温泉。北向観音・安楽寺などの古刹が立ち並び、「歴史と文化の温泉地」として多くの巡礼者・旅人が訪れてきた。',
        day_trip: { available: true, price: '150円〜', hours: '06:00-22:00' },
        access: { nearest_station: '別所温泉駅（上田電鉄別所線）', by_train: '上田駅から上田電鉄で約30分', by_car: '上信越道・上田菅平ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '大師湯前', free: true }
    },
    {
        id: 'o-nagano-2',
        name: '野沢温泉',
        prefecture: 'nagano',
        category: '硫黄泉',
        spring_type: '含石膏硫黄泉',
        description: '13の外湯を巡る温泉文化が残る村。野沢菜発祥の地としても有名で、スキーリゾートも充実。',
        image: './onsen/nozawa.png',
        tags: ['外湯めぐり', 'スキー', '野沢菜', '長野']
        history: '江戸時代に飯山藩の御用湯として栄えた名湯。13か所の外湯をめぐる文化が今も続き、スキー発祥の地でもある野沢菜の里として信州の温泉文化を代表する存在。',
        day_trip: { available: true, price: '無料〜', hours: '終日（共同浴場）' },
        access: { nearest_station: '飯山駅（JR北陸新幹線）', by_train: '飯山駅からバス約20分', by_car: '上信越道・豊田飯山ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街各所', free: true }
    },
    {
        id: 'o-nagano-3',
        name: '渋温泉',
        prefecture: 'nagano',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '地獄谷野猿公苑に近い温泉地。石畳の路地に9つの外湯が並ぶレトロな温泉街が人気。',
        image: './onsen/shibu.png',
        tags: ['外湯めぐり', '温泉猿', 'レトロ', '長野']
        history: '江戸時代から湯治場として発展した温泉地で、9つの外湯を湯めぐりする文化が根付く。志賀直哉の小説「城の崎にて」と並ぶ文学温泉地として知られ、スタンプラリーが人気。',
        day_trip: { available: true, price: '250円〜', hours: '06:00-22:00' },
        access: { nearest_station: '湯田中駅（長野電鉄長野線）', by_train: '長野駅から長野電鉄で約50分', by_car: '上信越道・信州中野ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街各所', free: true }
    },
    {
        id: 'o-nagano-4',
        name: '白骨温泉',
        prefecture: 'nagano',
        category: '炭酸水素塩泉',
        spring_type: '炭酸水素塩泉',
        description: '乳白色の湯が魅力の山の秘湯。乗鞍・上高地観光の拠点にも。',
        image: './onsen/shirahone.png',
        tags: ['白濁', '秘湯', '山中', '長野']
        history: '安土桃山時代（16世紀頃）から知られる乳白色の秘湯。上高地・乗鞍岳に近い山岳地帯に湧き、「信州の秘湯」として全国的に有名。炭酸水素塩泉の美肌効果も高い。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-14:00' },
        access: { nearest_station: '新島々駅（松本電鉄上高地線）', by_train: '松本駅からバス約90分（アルピコ交通）', by_car: '長野道・松本ICから約70分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-nagano-5',
        name: '上諏訪温泉',
        prefecture: 'nagano',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '諏訪湖畔に広がる温泉地。花火や湖の景色と合わせて楽しめる。',
        image: './onsen/kamisuwa.png',
        tags: ['湖畔', '花火', '温泉街', '長野']
        history: '諏訪湖畔に湧く温泉地で、諏訪大社の門前町として古代から栄えた地に位置する。明治時代に製糸業が盛んになるとともに温泉地としての整備が進み、現在は諏訪観光の拠点となっている。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '上諏訪駅（JR中央本線）', by_train: '上諏訪駅から徒歩圏内', by_car: '中央道・諏訪ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '上諏訪駅ホーム（日本唯一の駅構内足湯）', free: false }
    },
    {
        id: 'o-nagano-6',
        name: '白馬姫川温泉',
        prefecture: 'nagano',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '白馬のスキーリゾートで楽しめる温泉。北アルプスの景色が圧巻。',
        image: './onsen/hakuba.png',
        tags: ['北アルプス', 'スキー', '白馬', '長野']
        history: '北アルプス・白馬連峰の麓を流れる姫川沿いに湧く温泉郷。スキーリゾートとして国際的に有名な白馬村に位置し、山岳景観と温泉を組み合わせた四季の楽しみがある。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '白馬駅（JR大糸線）', by_train: '白馬駅からバスまたはタクシー約10分', by_car: '長野道・安曇野ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '白馬村内各所', free: true }
    },

    // ===== 岐阜県 =====
    {
        id: 'o-gifu-1',
        name: '下呂温泉',
        prefecture: 'gifu',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '日本三名泉の一つ。美肌の湯として名高い無色透明の温泉。飛騨川沿いの温泉街は風情がある。',
        image: './onsen/gero.png',
        tags: ['日本三名泉', '美肌の湯', '飛騨川', '岐阜']
        history: '室町時代の正長年間（1428〜29年）に発見されたと伝わる。江戸時代に飛騨幕府代官所の支配下に置かれ、「天下の三名泉」として江戸庶民にも名が知れた日本三名泉のひとつ。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-21:00' },
        access: { nearest_station: '下呂駅（JR高山本線）', by_train: '名古屋駅から特急「ひだ」で約1時間45分', by_car: '東海北陸道・飛騨清見ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '噴泉池（浅井田川河原）', free: true }
    },
    {
        id: 'o-gifu-2',
        name: '奥飛騨温泉郷',
        prefecture: 'gifu',
        category: '単純泉',
        spring_type: '単純泉・硫黄泉',
        description: '北アルプス山麓の秘境温泉郷。新穂高・福地・新平湯など5つの温泉地からなる。露天風呂の数は日本一。',
        image: './onsen/okuhida.png',
        tags: ['北アルプス', '秘境', '露天風呂日本一', '岐阜']
        history: '飛騨山脈の深部、蒲田川流域に点在する6つの温泉地（新平湯・平湯・福地・栃尾・新穂高・岐阜）からなる温泉郷。昭和時代に観光開発が進み、北アルプス登山の拠点として全国区に。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '高山駅（JR高山本線）', by_train: '高山駅からバス約1時間（濃飛バス）', by_car: '東海北陸道・飛騨清見ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '新穂高温泉・深山荘前', free: true }
    },
    {
        id: 'o-gifu-3',
        name: '平湯温泉',
        prefecture: 'gifu',
        category: '硫黄泉',
        spring_type: '硫黄泉',
        description: '奥飛騨の玄関口の温泉。雪見露天が人気で、上高地方面の拠点にも便利。',
        image: './onsen/hirayu.png',
        tags: ['雪見', '露天風呂', '奥飛騨', '岐阜']
        history: '飛騨山脈の玄関口・平湯峠に位置する温泉地。安土桃山時代に武田信玄の家臣が発見したと伝わる。乗鞍・上高地への交通の要衝として多くの旅人に利用されてきた。',
        day_trip: { available: true, price: '600円〜', hours: '08:00-21:00' },
        access: { nearest_station: '高山駅（JR高山本線）', by_train: '高山駅からバス約50分（濃飛バス）', by_car: '東海北陸道・高山ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '平湯民俗村', free: true }
    },
    {
        id: 'o-gifu-4',
        name: '長良川温泉',
        prefecture: 'gifu',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '岐阜市内で楽しめる温泉。長良川の鵜飼や城下町観光と相性が良い。',
        image: './onsen/nagaragawa.png',
        tags: ['鵜飼', '城下町', '岐阜']
        history: '鵜飼で名高い長良川沿いに湧く温泉地。岐阜城を見上げながら入る温泉と、夏の鵜飼観覧を組み合わせた観光が名物。岐阜市街に近い利便性の高い温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '11:00-21:00' },
        access: { nearest_station: '岐阜駅（JR東海道本線・名鉄名古屋本線）', by_train: '岐阜駅からバス約20分', by_car: '東海北陸道・岐阜各務原ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '長良川河畔', free: true }
    },

    // ===== 静岡県 =====
    {
        id: 'o-shizuoka-1',
        name: '熱海温泉',
        prefecture: 'shizuoka',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '東京から最も近い温泉リゾート。相模湾を望む景観と花火大会が人気。昭和レトロと現代が共存。',
        image: './onsen/atami.png',
        tags: ['リゾート', '花火', '海の温泉', '静岡']
        history: '奈良時代から知られる関東近郊の名湯。徳川家康も愛した「天下の湯」として江戸時代に発展し、日本有数の海浜温泉地として長く繁栄してきた。相模湾に沈む夕陽が絶景。',
        day_trip: { available: true, price: '1,000円〜', hours: '11:00-21:00' },
        access: { nearest_station: '熱海駅（JR東海道新幹線・東海道本線）', by_train: '東京駅から新幹線こだまで約45分', by_car: '西湘バイパス・熱海ビーチライン終点', parking: true },
        drinkable: false,
        footbath: { available: true, location: '熱海駅前・平和通り', free: true }
    },
    {
        id: 'o-shizuoka-2',
        name: '伊豆下田温泉',
        prefecture: 'shizuoka',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '黒船来航で知られる下田の温泉。澄んだ青い海とペリーロードの歴史的街並みと合わせて楽しめる。',
        image: './onsen/shimoda.png',
        tags: ['黒船', '歴史', 'リゾート', '静岡']
        history: '伊豆半島南端に位置する温泉地。幕末にペリーが来航した下田港に近く、吉田松陰が密航を試みた歴史の地でもある。太平洋を望む海辺の温泉地として人気が高い。',
        day_trip: { available: true, price: '700円〜', hours: '11:00-21:00' },
        access: { nearest_station: '伊豆急下田駅（伊豆急行線）', by_train: '東京駅から「踊り子」で約2時間30分', by_car: '伊豆縦貫道・河津ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '下田駅前', free: true }
    },
    {
        id: 'o-shizuoka-3',
        name: '修善寺温泉',
        prefecture: 'shizuoka',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '伊豆の小京都と呼ばれる温泉街。竹林の小径や川沿いの散策が楽しい。',
        image: './onsen/shuzenji.png',
        tags: ['温泉街', '散策', '伊豆', '静岡']
        history: '平安時代から知られる伊豆の古湯。源頼朝ゆかりの地で、修善寺物語で有名な独鈷の湯は弘法大師が湧かせたとされる伊豆最古の温泉。竹林の道の散策が人気。',
        day_trip: { available: true, price: '400円〜', hours: '07:30-21:00' },
        access: { nearest_station: '修善寺駅（伊豆箱根鉄道）', by_train: '三島駅から伊豆箱根鉄道で約35分', by_car: '東名道・沼津ICから約45分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '独鈷の湯（足湯・見学）', free: true }
    },
    {
        id: 'o-shizuoka-4',
        name: '伊東温泉',
        prefecture: 'shizuoka',
        category: '単純泉',
        spring_type: '単純温泉・塩化物泉など',
        description: '伊豆屈指の温泉地。海沿いの街並みと観光のしやすさが魅力。',
        image: './onsen/ito.png',
        tags: ['伊豆', '海辺', '温泉地', '静岡']
        history: '富士山麓の朝霧高原近くに湧く温泉地。昭和時代に整備が進み、富士山の絶景と溶岩洞窟・鍾乳洞観光と合わせて楽しめる。富士五湖観光の拠点としても機能する。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '富士宮駅（JR身延線）', by_train: '富士宮駅からバス約30分', by_car: '東名道・富士ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-shizuoka-5',
        name: '伊豆長岡温泉',
        prefecture: 'shizuoka',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '狩野川流域の温泉。富士山や伊豆観光の中継地点として便利。',
        image: './onsen/izunagaoka.png',
        tags: ['伊豆', '観光拠点', '静岡']
        history: '浜名湖湖畔に湧く温泉地で、江戸時代の東海道・舞阪宿に近い。浜名湖のウナギ・カキなど海の幸と温泉を組み合わせた「食の温泉地」として愛されてきた。',
        day_trip: { available: true, price: '800円〜', hours: '11:00-21:00' },
        access: { nearest_station: '弁天島駅（JR東海道本線）', by_train: '浜松駅から東海道本線で約15分', by_car: '東名道・浜松西ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '弁天島海浜公園', free: true }
    },

    // ===== 愛知県 =====
    {
        id: 'o-aichi-1',
        name: '湯谷温泉',
        prefecture: 'aichi',
        category: '重曹泉',
        spring_type: '炭酸水素塩泉',
        description: '宇連川沿いの渓谷温泉。川のせせらぎを聞きながら楽しめる露天風呂が人気の秘境温泉。',
        image: './onsen/yutani.png',
        tags: ['渓谷', '秘境', '愛知']
        history: '名古屋近郊の山里に湧く重曹泉。江戸時代から「肌に良い湯」として知られ、明治以降は名古屋市民の近郊温泉として整備が進んだ。紅葉の名所・香嵐渓に近い温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '東岡崎駅（名鉄名古屋本線）', by_train: '東岡崎駅からバス約40分', by_car: '東名道・豊田ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '香嵐渓・足助温泉', free: false }
    },
    {
        id: 'o-aichi-2',
        name: '蒲郡温泉',
        prefecture: 'aichi',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '三河湾を望む海辺の温泉。島々の景色と海の幸、リゾート感が魅力。',
        image: './onsen/gamagori.png',
        tags: ['三河湾', '海の幸', 'リゾート', '愛知']
        history: '三河湾に面した蒲郡市の海辺に湧く温泉。明治時代に保養地として整備が進み、橘湾の景観と新鮮な魚介類が楽しめる三河随一の海浜温泉地として発展した。',
        day_trip: { available: true, price: '600円〜', hours: '11:00-21:00' },
        access: { nearest_station: '蒲郡駅（JR東海道本線・名鉄蒲郡線）', by_train: '名古屋駅からJRで約50分', by_car: '東名道・音羽蒲郡ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '蒲郡海岸', free: true }
    },

    // ===== 三重県 =====
    {
        id: 'o-mie-1',
        name: '長島温泉',
        prefecture: 'mie',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: 'ナガシマリゾートと一体化した大型温泉施設。東海随一のエンターテインメント温泉地。',
        image: './onsen/nagashima.png',
        tags: ['リゾート', 'テーマパーク', '家族', '三重']
        history: '木曽三川の河口に位置する温泉地。昭和時代に「長島スパーランド」とともに総合レジャー施設として整備され、家族連れに人気の観光型温泉地として全国区になった。',
        day_trip: { available: true, price: '1,000円〜', hours: '10:00-22:00' },
        access: { nearest_station: '桑名駅（JR関西本線・近鉄名古屋線）', by_train: '桑名駅からバスまたはタクシー約10分', by_car: '東名阪道・長島ICから約3分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '長島温泉周辺', free: false }
    },
    {
        id: 'o-mie-2',
        name: '湯の山温泉',
        prefecture: 'mie',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '御在所岳の麓の温泉。ロープウェイや登山と合わせて楽しめる。',
        image: './onsen/yunoyama.png',
        tags: ['山麓', 'ロープウェイ', '三重']
        history: '鈴鹿山脈の麓、御在所岳の南麓に湧く温泉地。江戸時代から湯治場として知られ、近代には御在所ロープウェイとのセット観光で三重県を代表する温泉地に発展した。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '湯の山温泉駅（近鉄湯の山線）', by_train: '近鉄四日市駅から近鉄湯の山線で約30分', by_car: '東名阪道・四日市ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '蒼滝周辺', free: true }
    },
    {
        id: 'o-mie-3',
        name: '志摩温泉',
        prefecture: 'mie',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '英虞湾の景色と海の幸が魅力の温泉。リゾート滞在に向く。',
        image: './onsen/shima.png',
        tags: ['英虞湾', 'リゾート', '海の幸', '三重']
        history: '英虞湾を望む志摩の温泉地。伊勢神宮と志摩の海に近く、明治時代から皇室ゆかりの地として保養温泉が整備された。真珠の産地・英虞湾の景観が美しい高級リゾート。',
        day_trip: { available: true, price: '800円〜', hours: '11:00-21:00' },
        access: { nearest_station: '賢島駅（近鉄志摩線）', by_train: '大阪難波駅から特急「しまかぜ」で約2時間', by_car: '伊勢道・伊勢ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 滋賀県 =====
    {
        id: 'o-shiga-1',
        name: '雄琴温泉',
        prefecture: 'shiga',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '琵琶湖の西岸に位置する温泉地。「京の奥座敷」として古くから京都の人々に愛されてきた名湯。',
        image: './onsen/ogoto.png',
        tags: ['琵琶湖', '京の奥座敷', '滋賀']
        history: '比叡山の麓、琵琶湖西岸に湧く温泉地。江戸時代には近江商人の保養地として栄え、現在は京都・大阪から近い利便性と琵琶湖の景観が人気の「近江の名湯」。',
        day_trip: { available: true, price: '700円〜', hours: '11:00-21:00' },
        access: { nearest_station: '雄琴温泉駅（JR湖西線）', by_train: '京都駅からJR湖西線で約20分', by_car: '名神道・京都東ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '比叡山坂本周辺', free: true }
    },

    // ===== 京都府 =====
    {
        id: 'o-kyoto-1',
        name: '嵐山温泉',
        prefecture: 'kyoto',
        category: '単純温泉',
        spring_type: '単純温泉（低張性・弱アルカリ性・低温泉）',
        description: '渡月橋を望む絶景と竹林の小径に癒やされる京都屈指の観光地。とろみのあるお湯が肌に優しい。',
        image: './onsen/arashiyama.png',
        tags: ['渡月橋', '竹林', '美肌の湯', '京都']
        history: '世界遺産・天龍寺を擁する嵐山に湧く温泉地。京都の観光名所と温泉の組み合わせは近年整備が進み、渡月橋を眺めながら入れる露天風呂が人気を集めている。',
        day_trip: { available: true, price: '1,500円〜', hours: '11:00-21:00' },
        access: { nearest_station: '嵐山駅（阪急嵐山線・嵯峨野観光鉄道）', by_train: '京都駅からバス約40分', by_car: '名神道・京都南ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: 'JR嵯峨嵐山駅前・駅の足湯', free: false }
    },
    {
        id: 'o-kyoto-2',
        name: '天橋立温泉',
        prefecture: 'kyoto',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '日本三景・天橋立エリアの温泉。絶景と海の幸、観光をまとめて楽しめる。',
        image: './onsen/amanohashidate.png',
        tags: ['日本三景', '海の幸', '観光', '京都']
        history: '日本三景「天橋立」の近くに湧く温泉地。江戸時代から丹後の観光地として旅人が訪れた天橋立と宮津湾の絶景が楽しめる、京都府北部・丹後の代表的な温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '11:00-21:00' },
        access: { nearest_station: '天橋立駅（京都丹後鉄道宮津線）', by_train: '京都駅から特急「はしだて」で約2時間', by_car: '舞鶴若狭道・福知山ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '天橋立内', free: true }
    },
    {
        id: 'o-kyoto-3',
        name: '夕日ヶ浦温泉',
        prefecture: 'kyoto',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '日本海に沈む夕日が名物の温泉。海辺の散歩と温泉が最高の組み合わせ。',
        image: './onsen/yuhigaura.png',
        tags: ['日本海', '夕日', '海辺', '京都']
        history: '京丹後市の日本海沿岸に湧く温泉地。夕日の絶景で知られる夕日ヶ浦海岸に隣接し、波の音を聞きながら入る露天風呂が魅力。丹後半島の旬の海の幸も楽しめる。',
        day_trip: { available: true, price: '700円〜', hours: '11:00-21:00' },
        access: { nearest_station: '網野駅（京都丹後鉄道宮豊線）', by_train: '網野駅からタクシー約10分', by_car: '山陰近畿道・網野ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '夕日ヶ浦海岸', free: true }
    },

    // ===== 大阪府 =====
    {
        id: 'o-osaka-1',
        name: '天見温泉',
        prefecture: 'osaka',
        category: '重曹泉',
        spring_type: '重曹泉',
        description: '南河内の山あいにある秘湯。大阪府内で数少ない天然温泉の一つで、緑豊かな渓谷の景色が楽しめる。',
        image: './onsen/amami.png',
        tags: ['秘湯', '渓谷', '大阪府内', '大阪']
        history: '南河内の山中に湧く重曹泉。江戸時代から大坂商人の保養地として利用され、棋士・阪田三吉ゆかりの地としても知られる。大阪から60分圏内の秘境感ある温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '天見駅（南海高野線）', by_train: '天見駅から徒歩約10分', by_car': '阪和道・美原南ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-osaka-2',
        name: '犬鳴山温泉',
        prefecture: 'osaka',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '山あいの温泉地。ハイキングと合わせて楽しめる、落ち着いた雰囲気が魅力。',
        image: './onsen/inunaki.png',
        tags: ['山あい', '自然', '日帰り', '大阪']
        history: '犬鳴山の修験道の霊地に湧く温泉地。泉質は硫黄泉で、古来から修験者が身を清めるための湯として利用されてきた。大阪から約1時間でアクセスできる秘湯的な温泉地。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '日根野駅（JR阪和線）', by_train: '日根野駅からバス約20分', by_car: '阪和道・岸和田和泉ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 兵庫県 =====
    {
        id: 'o-hyogo-1',
        name: '有馬温泉',
        prefecture: 'hyogo',
        category: '塩化物泉',
        spring_type: '含鉄ナトリウム塩化物泉（金泉）・含炭酸ラジウム泉（銀泉）',
        description: '日本三名泉の一つ。金泉・銀泉の2種の湯が楽しめる名湯。豊臣秀吉も愛した日本最古の温泉の一つ。',
        image: './onsen/arima.png',
        tags: ['日本三名泉', '金泉', '銀泉', '兵庫'],
        effects: ['疲労回復', '皮膚病', '神経痛', '関節炎', '美肌'],
        history: '日本書紀にも登場する日本最古の温泉地のひとつ。豊臣秀吉が愛した「太閤の湯」として有名。鉄分を含む赤褐色の「金泉」と無色透明の「銀泉」の2種が名物。',
        day_trip: { available: true, price: '650〜800円', hours: '8:00-22:00' },
        access: { nearest_station: '有馬温泉駅（神戸電鉄有馬線）', by_train: '三宮から神戸電鉄で約30分', by_car: '阪神高速・北神戸線・有馬口ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '太閤通周辺', free: true }
    },
    {
        id: 'o-hyogo-2',
        name: '湯村温泉',
        prefecture: 'hyogo',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩塩化物泉',
        description: '奈良時代に開湯された古湯。98度の源泉「荒湯」は地元食材の温泉料理に活用され名物になっている。',
        image: './onsen/yumura.png',
        tags: ['荒湯', '古湯', '温泉料理', '兵庫']
        history: '但馬の小京都・村岡に近い温泉地で、平安時代から「但馬の薬湯」として知られる。映画「千と千尋の神隠し」のモデルになったとも言われる温泉地として近年脚光を浴びている。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '八鹿駅（JR山陰本線）', by_train: '八鹿駅からバス約30分', by_car: '播但連絡道・和田山ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯村温泉街', free: true }
    },
    {
        id: 'o-hyogo-3',
        name: '城崎温泉',
        prefecture: 'hyogo',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '外湯めぐりで有名な温泉街。浴衣で歩ける町並みと川沿いの景色が魅力。',
        image: './onsen/kinosaki.png',
        tags: ['外湯めぐり', '温泉街', '風情', '兵庫']
        history: '奈良時代の718年に道智上人が開いたと伝わる歴史ある温泉地。7か所の外湯をめぐる文化が1,300年以上続き、志賀直哉の小説「城の崎にて」の舞台として全国に名が知れた。',
        day_trip: { available: true, price: '800円〜', hours: '07:00-23:00' },
        access: { nearest_station: '城崎温泉駅（JR山陰本線）', by_train: '大阪駅から特急「こうのとり」で約2時間30分', by_car: '播但連絡道・和田山ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '温泉街各所', free: true }
    },
    {
        id: 'o-hyogo-4',
        name: '洲本温泉',
        prefecture: 'hyogo',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '淡路島の海辺温泉。夕日と海の幸、リゾート滞在が楽しめる。',
        image: './onsen/sumoto.png',
        tags: ['淡路島', '夕日', '海の幸', '兵庫']
        history: '淡路島南部に湧く温泉地。平成時代に本格的な温泉施設が整備され、鳴門海峡と太平洋を望む絶景と、淡路島ブランドの食材を組み合わせた観光地として発展した。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-21:00' },
        access: { nearest_station: '洲本バスセンター（高速バス）', by_train: '神戸三宮から高速バスで約70分', by_car: '神戸淡路鳴門道・洲本ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '洲本温泉公園', free: true }
    },

    // ===== 奈良県 =====
    {
        id: 'o-nara-1',
        name: '洞川温泉',
        prefecture: 'nara',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '大峯山修験道の聖地・洞川の温泉。吉野熊野国立公園の奥深くにある幽玄な秘湯。',
        image: './onsen/dorogawa.png',
        tags: ['修験道', '秘湯', '吉野', '奈良']
        history: '大峯山の麓、吉野川の源流域に湧く山岳温泉地。修験道の聖地・大峯山への入口として古くから行者たちが立ち寄り、山の霊気と温泉が融合した神秘的な温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '07:00-21:00' },
        access: { nearest_station: '下市口駅（近鉄吉野線）', by_train: '下市口駅からバス約50分', by_car: '西名阪道・郡山ICから約70分', parking: true },
        drinkable: true,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-nara-2',
        name: '十津川温泉郷',
        prefecture: 'nara',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '日本有数の源泉かけ流し文化が残る温泉郷。吊り橋や山里の景色も魅力。',
        image: './onsen/totsukawa.png',
        tags: ['温泉郷', '山里', '秘湯', '奈良']
        history: '日本最深の谷・十津川に湧く温泉郷。日本書紀にも記された最古級の温泉地のひとつで、明治22年（1889年）の大水害後に住民が集団移住して北海道「新十津川」を開拓した歴史を持つ。',
        day_trip: { available: true, price: '500円〜', hours: '07:00-21:00' },
        access: { nearest_station: '五条駅（JR和歌山線）', by_train: '五条駅からバス約2時間30分（奈良交通）', by_car: '西名阪道・郡山ICから約120分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '十津川温泉街', free: true }
    },

    // ===== 和歌山県 =====
    {
        id: 'o-wakayama-1',
        name: '白浜温泉',
        prefecture: 'wakayama',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '日本三古湯の一つ。白い砂浜と青い海、そして6世紀から続く歴史ある温泉が揃うリゾート地。',
        image: './onsen/shirahama.png',
        tags: ['日本三古湯', '海の温泉', 'リゾート', '和歌山']
        history: '奈良時代の孝謙天皇も入湯したと伝わる歴史ある温泉地。江戸時代には紀州藩の藩湯として栄え、太平洋を一望する白砂青松の景観と合わせて「南紀の名湯」として名高い。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-22:00' },
        access: { nearest_station: '白浜駅（JR紀勢本線）', by_train: '大阪駅から特急「くろしお」で約2時間', by_car: '阪和道・南紀白浜ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯崎温泉・崎の湯付近', free: true }
    },
    {
        id: 'o-wakayama-2',
        name: '熊野本宮温泉郷',
        prefecture: 'wakayama',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '世界遺産・熊野古道の聖地に湧く温泉。川湯温泉の仙人風呂（冬季限定の河原露天風呂）が圧巻。',
        image: './onsen/hongu.png',
        tags: ['世界遺産', '熊野古道', '仙人風呂', '和歌山']
        history: '熊野三山（熊野本宮・熊野速玉・熊野那智）の参詣道「熊野古道」沿いに湧く温泉郷。平安時代から熊野詣の旅人が立ち寄った「蘇りの湯」として世界遺産・熊野古道と共に有名。',
        day_trip: { available: true, price: '500円〜', hours: '06:00-21:30' },
        access: { nearest_station: '本宮大社前（路線バス）', by_train: '新宮駅からバス約1時間15分', by_car: '阪和道・南紀白浜ICから約80分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '大斎原・川湯仙人風呂（冬季）', free: true }
    },
    {
        id: 'o-wakayama-3',
        name: '南紀勝浦温泉',
        prefecture: 'wakayama',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '那智の滝や熊野観光の拠点。港町の活気と温泉、マグロが名物。',
        image: './onsen/nankikatsuura.png',
        tags: ['那智', '港町', 'マグロ', '和歌山']
        history: '那智の滝・熊野那智大社に近い温泉地。熊野三山参詣の拠点として中世から旅人が集まり、近代にはカツオ漁業と温泉が組み合わさった南紀勝浦の魚市場が有名。',
        day_trip: { available: true, price: '500円〜', hours: '06:00-20:00' },
        access: { nearest_station: '紀伊勝浦駅（JR紀勢本線）', by_train: '大阪駅から特急「くろしお」で約3時間', by_car: '阪和道・南紀白浜ICから約90分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '駅前', free: true }
    },
    {
        id: 'o-wakayama-4',
        name: '龍神温泉',
        prefecture: 'wakayama',
        category: '重曹泉',
        spring_type: '炭酸水素塩泉',
        description: '山深い美肌の湯として知られる温泉。川沿いの静けさと湯のやわらかさが魅力。',
        image: './onsen/ryujin.png',
        tags: ['美肌', '山中', '静寂', '和歌山']
        history: '奈良時代に発見されたと伝わる古湯で、弘法大師も入湯したとされる。高野山へと続く山中に位置し、日本三大美人の湯のひとつとして重曹泉の美肌効果が名高い。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '龍神温泉（路線バス）', by_train: '御坊駅からバス約90分（龍神バス）', by_car: '阪和道・南紀白浜ICから約80分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 鳥取県 =====
    {
        id: 'o-tottori-1',
        name: '三朝温泉',
        prefecture: 'tottori',
        category: '放射能泉',
        spring_type: '放射能泉（ラジウム泉）',
        description: 'ラジウムの含有量が世界有数の温泉。三徳川沿いの風情ある温泉街は国の重要文化的景観に指定。',
        image: './onsen/misasa.png',
        tags: ['ラジウム泉', '世界有数', '鳥取']
        history: '三朝川沿いに湧く温泉地で、鎌倉時代の1179年に武士が傷ついた白狼に導かれて発見したと伝わる。世界最高水準のラドン濃度を誇り、日本を代表する放射能泉として国際的にも知られる。',
        day_trip: { available: true, price: '450円〜', hours: '07:00-22:00' },
        access: { nearest_station: '倉吉駅（JR山陰本線）', by_train: '倉吉駅からバス約25分', by_car: '米子道・湯原ICから約60分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '三朝温泉街・株湯', free: true }
    },
    {
        id: 'o-tottori-2',
        name: '皆生温泉',
        prefecture: 'tottori',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '海辺に広がる温泉地。大山の景色と海の幸、温泉を楽しめる。',
        image: './onsen/kaike.png',
        tags: ['海辺', '大山', '海の幸', '鳥取']
        history: '大正時代に海水浴場として整備され、昭和初期に温泉が湧出した。大山の雄姿と日本海を望む温泉リゾートで、米子・境港観光の拠点として鳥取県西部の代表的な温泉地。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '米子駅（JR山陰本線・伯備線）', by_train: '米子駅からバス約20分', by_car: '米子道・米子ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '皆生温泉海岸', free: true }
    },

    // ===== 島根県 =====
    {
        id: 'o-shimane-1',
        name: '玉造温泉',
        prefecture: 'shimane',
        category: '塩化物泉',
        spring_type: '塩化物泉・硫酸塩泉',
        description: '日本書紀にも記される美肌の湯。玉湯川沿いに旅館が並ぶ出雲観光の拠点温泉地。',
        image: './onsen/tamatsukuri.png',
        tags: ['美肌の湯', '出雲', '日本書紀', '島根']
        history: '1,300年以上の歴史を持つ出雲国の名湯。「神代の昔、神々が玉造に集い傷を癒したのが玉造温泉の起源」とも伝わる縁結びの地で、日本最古の美肌の湯として名高い。',
        day_trip: { available: true, price: '300円〜', hours: '06:00-22:00' },
        access: { nearest_station: '玉造温泉駅（JR山陰本線）', by_train: '玉造温泉駅から徒歩約10分', by_car: '山陰道・松江玉造ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '玉湯川沿い・姫神広場', free: true }
    },
    {
        id: 'o-shimane-2',
        name: '松江しんじ湖温泉',
        prefecture: 'shimane',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '宍道湖畔の温泉。夕日が有名で、城下町観光とも相性抜群。',
        image: './onsen/shinji.png',
        tags: ['宍道湖', '夕日', '城下町', '島根']
        history: '宍道湖と中海に挟まれた松江市に湧く温泉。明治時代に松江城下の湯治場として整備が始まり、ラフカディオ・ハーン（小泉八雲）が愛した松江の文化と合わせて楽しめる温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '06:00-22:00' },
        access: { nearest_station: '松江駅（JR山陰本線）', by_train: '松江駅からバス約10分', by_car: '山陰道・松江中央ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '宍道湖湖岸', free: true }
    },
    {
        id: 'o-shimane-3',
        name: '温泉津温泉',
        prefecture: 'shimane',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '石見銀山近くの温泉街。レトロな町並みと湯治場の雰囲気が魅力。',
        image: './onsen/yunotsu.png',
        tags: ['温泉街', 'レトロ', '湯治', '島根']
        history: '江戸時代から石見銀山の近くに湧く温泉地として栄えた。昔ながらの温泉街の町並みが国の重要伝統的建造物群保存地区に選定されており、「日本の原風景」を感じさせる温泉地。',
        day_trip: { available: true, price: '300円〜', hours: '06:00-21:00' },
        access: { nearest_station: '温泉津駅（JR山陰本線）', by_train: '温泉津駅から徒歩約15分', by_car: '江津道路・江津ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 岡山県 =====
    {
        id: 'o-okayama-1',
        name: '湯原温泉',
        prefecture: 'okayama',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '旭川渓谷に沿った温泉地。砂湯は日本一の露天風呂として知られ、日の丸旅館などの老舗宿が揃う。',
        image: './onsen/yubara.png',
        tags: ['砂湯', '日本一の露天風呂', '渓谷', '岡山']
        history: '旭川の源流に近い中国山地の山中に湧く温泉地。江戸時代から津山藩の湯治場として利用され、日本三大美人の湯のひとつに数えられる炭酸水素塩泉の「美肌の湯」として知られる。',
        day_trip: { available: true, price: '500円〜', hours: '07:00-21:00' },
        access: { nearest_station: '中国勝山駅（JR姫新線）', by_train: '中国勝山駅からバス約40分', by_car: '中国道・落合ICから約40分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯原ダム下の砂湯（無料混浴露天）', free: true }
    },
    {
        id: 'o-okayama-2',
        name: '奥津温泉',
        prefecture: 'okayama',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '吉井川上流の静かな温泉地。落ち着いた湯治場の雰囲気が残る。',
        image: './onsen/okutsu.png',
        tags: ['湯治', '静寂', '岡山']
        history: '吉井川の源流域・奥津峡に湧く温泉地。江戸時代から湯治場として知られ、「足踏み洗濯」（川の流れを利用した洗濯）の光景が今も名物として受け継がれている。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-20:00' },
        access: { nearest_station: '津山駅（JR津山線）', by_train: '津山駅からバス約50分', by_car: '中国道・津山ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '奥津峡遊歩道', free: true }
    },

    // ===== 広島県 =====
    {
        id: 'o-hiroshima-1',
        name: '宮島温泉',
        prefecture: 'hiroshima',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '世界遺産・厳島神社がある宮島にある温泉。海に浮かぶ大鳥居を眺めながら入れる露天風呂が夢の体験。',
        image: './onsen/miyajimaimperialhotel.png',
        tags: ['世界遺産', '厳島神社', '宮島', '広島']
        history: '世界遺産・厳島神社を擁する宮島に湧く温泉地。平清盛が整備した宮島の歴史と朱の大鳥居を眺めながら入れる温泉として、広島観光と組み合わせた人気スポット。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '宮島口駅（JR山陽本線・広電宮島線）', by_train: '広島駅から電車・フェリーで約1時間', by_car: '山陽道・廿日市ICから約10分（フェリー利用）', parking: true },
        drinkable: false,
        footbath: { available: true, location: '宮島桟橋付近', free: true }
    },
    {
        id: 'o-hiroshima-2',
        name: '湯来温泉',
        prefecture: 'hiroshima',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '広島市近郊の渓谷温泉。川沿いの自然と日帰り利用のしやすさが魅力。',
        image: './onsen/yuki.png',
        tags: ['渓谷', '日帰り', '広島']
        history: '広島市の西、太田川の支流・水内川沿いに湧く温泉地。江戸時代から広島城下の湯治場として知られ、現在は広島市民の近郊温泉として手軽に楽しめる。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '広島駅（JR山陽新幹線）', by_train: '広島バスセンターからバス約50分', by_car: '山陽道・広島ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 山口県 =====
    {
        id: 'o-yamaguchi-1',
        name: '湯田温泉',
        prefecture: 'yamaguchi',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '山口市中心部にある温泉。白狐伝説が残り中原中也ゆかりの地でもある，都市型の便利な温泉地。',
        image: './onsen/yuda.png',
        tags: ['都市型温泉', '白狐伝説', '山口']
        history: '江戸時代から山口藩の藩湯として栄えた温泉地。中原中也・松下村塾ゆかりの文化人も訪れた「西の京・山口」の奥座敷として長く親しまれてきた単純アルカリ泉。',
        day_trip: { available: true, price: '450円〜', hours: '06:30-22:00' },
        access: { nearest_station: '湯田温泉駅（JR山口線）', by_train: '湯田温泉駅から徒歩圏内', by_car: '中国道・山口ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '湯田温泉駅前・温泉街各所', free: true }
    },
    {
        id: 'o-yamaguchi-2',
        name: '長門湯本温泉',
        prefecture: 'yamaguchi',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '川沿いの温泉街が魅力。そぞろ歩きが楽しい、雰囲気のよい温泉地。',
        image: './onsen/nagato.png',
        tags: ['温泉街', '川沿い', '山口']
        history: '昭和天皇も入湯された長門市の温泉地。音信川沿いの温泉街は日本最大級のSNS映えスポットとして近年急速に注目が高まり、外湯「恩湯」の再建で全国区の人気になった。',
        day_trip: { available: true, price: '500円〜', hours: '07:00-21:00' },
        access: { nearest_station: '長門湯本駅（JR美祢線）', by_train: '長門湯本駅から徒歩約5分', by_car: '中国道・美祢ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '音信川沿い', free: true }
    },

    // ===== 徳島県 =====
    {
        id: 'o-tokushima-1',
        name: '祖谷温泉',
        prefecture: 'tokushima',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '日本三大秘境・祖谷渓谷の急斜面にあるケーブルカーで下る秘湯。かずら橋から近い絶景温泉。',
        image: './onsen/iya.png',
        tags: ['秘境', 'ケーブルカー', '渓谷', '徳島']
        history: '四国山地の秘境・大歩危峡の奥に湧く温泉地。平家の落人伝説が残る祖谷地方に位置し、かずら橋や剣山登山と合わせて訪れる四国屈指の秘境温泉として知られる。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '大歩危駅（JR土讃線）', by_train: '大歩危駅からバス約30分（四国交通）', by_car: '高松道・脇町ICから約90分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 香川県 =====
    {
        id: 'o-kagawa-1',
        name: '塩江温泉',
        prefecture: 'kagawa',
        category: '硫酸塩泉',
        spring_type: 'カルシウム硫酸塩泉',
        description: '讃岐山脈の山中に湧く温泉。四国最古の温泉のひとつで、行基が発見したと伝わる古湯。',
        image: './onsen/shioe.png',
        tags: ['四国最古', '山中温泉', '香川']
        history: '平安時代から知られる四国最古の温泉地のひとつ。高松市の奥座敷として長く親しまれ、塩江渓谷の紅葉と合わせた秋の温泉旅が人気。水質はアルカリ性で肌にやさしい。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '高松駅（JR予讃線）', by_train: '高松駅からバス約50分（琴電バス）', by_car: '高松道・高松西ICから約35分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '塩江渓谷沿い', free: true }
    },
    {
        id: 'o-kagawa-2',
        name: 'こんぴら温泉郷',
        prefecture: 'kagawa',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '金刀比羅宮参拝の拠点で楽しめる温泉。門前町の散策と相性が良い。',
        image: './onsen/konpira.png',
        tags: ['金刀比羅宮', '門前町', '香川']
        history: '金刀比羅宮（こんぴらさん）の門前町に湧く温泉地。江戸時代から「こんぴら詣」の旅人が立ち寄った温泉で、1,368段の石段参拝と温泉の組み合わせは今も人気の定番コース。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '琴平駅（JR土讃線・琴電琴平線）', by_train: '高松駅からJRで約60分', by_car: '高松道・善通寺ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '琴平温泉街・こんぴら門前', free: true }
    },

    // ===== 愛媛県 =====
    {
        id: 'o-ehime-1',
        name: '道後温泉',
        prefecture: 'ehime',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '日本最古の温泉の一つ。夏目漱石「坊っちゃん」の舞台になった道後温泉本館は国の重要文化財。',
        image: './onsen/dogo.png',
        tags: ['日本最古', '坊っちゃん', '国重要文化財', '愛媛']
        history: '日本最古の温泉とも言われる名湯。「古事記」「万葉集」にも登場し、聖徳太子・源頼朝・夏目漱石など歴史上の人物が入湯したと伝わる。「坊っちゃん」の舞台として全国に有名。',
        day_trip: { available: true, price: '460円〜', hours: '06:00-23:00' },
        access: { nearest_station: '道後温泉駅（伊予鉄市内電車）', by_train: '松山駅から市電で約20分', by_car: '松山道・松山ICから約15分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '道後温泉本館前・道後公園', free: true }
    },
    {
        id: 'o-ehime-2',
        name: '鈍川温泉',
        prefecture: 'ehime',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '森に囲まれた静かな温泉。ぬめりのある湯と自然の癒やしが魅力。',
        image: './onsen/otogo.png',
        tags: ['森林', '静寂', '愛媛']
        history: '今治市の山中に湧く温泉地。四国八十八か所霊場・石鎚山の登山道に近く、遍路巡礼の旅人が立ち寄った歴史を持つ。「美肌の湯」として知られる重曹泉が特徴。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '今治駅（JR予讃線）', by_train: '今治駅からバス約30分', by_car: '西瀬戸道・今治北ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 高知県 =====
    {
        id: 'o-kochi-2',
        name: 'あしずり温泉',
        prefecture: 'kochi',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '足摺岬エリアで楽しめる温泉。太平洋の景色と海風が最高。',
        image: './onsen/ashizuri.png',
        tags: ['太平洋', '岬', '絶景', '高知']
        history: '四国最南端・足摺岬の近くに湧く温泉地。土佐清水市の豊かな海の幸と太平洋の絶景が魅力で、足摺岬灯台や竜串海岸観光の拠点として高知県西部の温泉地として知られる。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '土佐清水バスターミナル', by_train: '高知駅から高速バスで約2時間30分', by_car: '高知道・四万十町中央ICから約70分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 福岡県 =====
    {
        id: 'o-fukuoka-1',
        name: '二日市温泉',
        prefecture: 'fukuoka',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '太宰府天満宮近くの温泉。博多のリゾート温泉として遠くからも多くの湯治客が通う九州最古の温泉。',
        image: './onsen/futsukaichi.png',
        tags: ['太宰府', '九州最古', '福岡']
        history: '大宰府天満宮に近い筑紫野市に湧く温泉地。奈良時代から「筑後の白湯」として知られ、太宰府観光の帰りに立ち寄れる利便性の高い福岡県内有数の温泉地。',
        day_trip: { available: true, price: '400円〜', hours: '06:00-24:00' },
        access: { nearest_station: '二日市駅（JR鹿児島本線・西鉄天神大牟田線）', by_train: '二日市駅から徒歩約10分', by_car: '九州道・筑紫野ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '二日市温泉街', free: true }
    },
    {
        id: 'o-fukuoka-2',
        name: '原鶴温泉',
        prefecture: 'fukuoka',
        category: '重曹泉',
        spring_type: '炭酸水素塩泉',
        description: '筑後川沿いの温泉地。やわらかな湯と果物の里の雰囲気が魅力。',
        image: './onsen/harazuru.png',
        tags: ['筑後川', '美肌', '福岡']
        history: '筑後川沿いに湧く温泉地で、江戸時代から朝倉藩の御用湯として栄えた。夏の「鵜飼」と温泉の組み合わせが名物で、耳納連山を望む筑後の田園地帯に広がる温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '筑後吉井駅（JR久大本線）', by_train: '筑後吉井駅からバス約15分', by_car': '大分道・甘木ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '筑後川河畔', free: true }
    },
    {
        id: 'o-fukuoka-3',
        name: '脇田温泉',
        prefecture: 'fukuoka',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '犬鳴川の上流にある静かな温泉。自然の中で日帰りでも泊まりでも楽しめる。',
        image: './onsen/wakita.png',
        tags: ['自然', '静寂', '福岡']
        history: '福岡県北部・遠賀川源流域に湧く山中の温泉地。江戸時代から「秘湯」として知られ、近代に整備が進んだ。福岡市から車で約1時間の近さながら秘境感のある温泉地。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '飯塚駅（JR筑豊本線）', by_train: '飯塚駅からバス約40分', by_car: '九州道・若宮ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },

    // ===== 佐賀県 =====
    {
        id: 'o-saga-1',
        name: '嬉野温泉',
        prefecture: 'saga',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '日本三大美肌の湯の一つ。肌がつるつるになる美肌効果で有名で全国から女性客が訪れる。嬉野茶が名物。',
        image: './onsen/ureshino.png',
        tags: ['美肌の湯', '日本三大美肌', '嬉野茶', '佐賀']
        history: '奈良時代から知られる温泉地で、豊臣秀吉も入湯したとされる。「日本三大美肌の湯」のひとつに数えられるナトリウム炭酸水素塩泉で、とろみのある「美人の湯」として全国区の人気を誇る。',
        day_trip: { available: true, price: '440円〜', hours: '06:00-22:00' },
        access: { nearest_station: '嬉野温泉駅（西九州新幹線）', by_train: '長崎駅から西九州新幹線で約30分', by_car: '長崎道・嬉野ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '嬉野温泉街・シーボルトの湯前', free: true }
    },
    {
        id: 'o-saga-2',
        name: '武雄温泉',
        prefecture: 'saga',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '楼門がシンボルの歴史ある温泉。市街地に近く、観光と合わせやすい。',
        image: './onsen/takeo.png',
        tags: ['歴史', '楼門', '温泉街', '佐賀']
        history: '肥前国時代から知られる古湯で、鎌倉時代には武将が傷を癒した記録が残る。武雄温泉楼門は国の重要文化財に指定された美しい建築物で、佐賀県を代表する歴史温泉地。',
        day_trip: { available: true, price: '450円〜', hours: '06:30-24:00' },
        access: { nearest_station: '武雄温泉駅（JR佐世保線）', by_train: '博多駅から特急「みどり」で約1時間', by_car: '長崎道・武雄北ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '武雄温泉楼門前', free: true }
    },

    // ===== 長崎県 =====
    {
        id: 'o-nagasaki-1',
        name: '雲仙温泉',
        prefecture: 'nagasaki',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉',
        description: '雲仙岳の噴気地帯に湧く温泉。日本最初の国立公園に指定された地に広がる噴煙と温泉の幻想的な景観。',
        image: './onsen/unzen.png',
        tags: ['国立公園', '噴気地帯', '硫黄泉', '長崎']
        history: '明治時代から雲仙岳の地熱を利用した温泉地として開発が進んだ。昭和初期に雲仙国立公園（日本初の国立公園）に指定され、外国人旅行者にも人気の山岳温泉リゾートとして発展した。',
        day_trip: { available: true, price: '700円〜', hours: '10:00-21:00' },
        access: { nearest_station: '諫早駅（JR長崎本線）', by_train: '諫早駅からバス約60分', by_car: '長崎道・諫早ICから約50分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '雲仙地獄周辺', free: true }
    },
    {
        id: 'o-nagasaki-2',
        name: '小浜温泉',
        prefecture: 'nagasaki',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '海辺の温泉地。足湯や湯けむりの景色が楽しく、散策もおすすめ。',
        image: './onsen/obama.png',
        tags: ['海辺', '足湯', '湯けむり', '長崎']
        history: '橘湾に面した海辺の温泉地で、源泉温度が日本一高い温泉地のひとつ。高温の温泉を利用した「温泉熱による調理（地獄炊き）」が名物で、小浜ちゃんぽんも有名。',
        day_trip: { available: true, price: '400円〜', hours: '07:00-21:00' },
        access: { nearest_station: '諫早駅（JR長崎本線）', by_train: '諫早駅からバス約60分', by_car: '長崎道・諫早ICから約45分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '小浜海岸・日本一長い足湯', free: true }
    },
    {
        id: 'o-nagasaki-3',
        name: '島原温泉',
        prefecture: 'nagasaki',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '城下町の雰囲気が残る温泉。湧水のまち散策と合わせて楽しめる。',
        image: './onsen/shimabara.png',
        tags: ['城下町', '湧水', '長崎']
        history: '島原半島の付け根、雲仙岳の東麓に湧く温泉地。島原の乱（1637〜38年）の舞台となった島原城下に位置し、歴史ある武家屋敷と温泉を合わせて楽しめる文化温泉地。',
        day_trip: { available: true, price: '400円〜', hours: '07:00-21:00' },
        access: { nearest_station: '島原駅（島原鉄道）', by_train: '諫早駅から島原鉄道で約60分', by_car: '長崎道・諫早ICから約70分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '島原城前', free: true }
    },

    // ===== 熊本県 =====
    {
        id: 'o-kumamoto-1',
        name: '黒川温泉',
        prefecture: 'kumamoto',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉など',
        description: '九州中央山地の秘湯。入湯手形で30以上の旅館の露天風呂を巡れる。ミシュランガイド掲載の名湯。',
        image: './onsen/kurokawa.png',
        tags: ['露天風呂めぐり', '秘湯', 'ミシュラン', '熊本']
        history: '平成元年（1989年）に「旅人の宿」として整備が始まった比較的新しい温泉地だが、硫黄泉の質の高さと旅館主導のまちづくりで急成長。2000年代以降は日本を代表する「名湯」として全国区になった。',
        day_trip: { available: true, price: '600円〜', hours: '08:30-20:00' },
        access: { nearest_station: '黒川温泉（路線バス）', by_train: '熊本駅からバス約2時間30分（産交バス）', by_car: '九州道・熊本ICから約90分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-kumamoto-2',
        name: '人吉温泉',
        prefecture: 'kumamoto',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '球磨川のほとりに湧く温泉。城下町の風情と清流、温泉を合わせて楽しめる「日本のチロル」。',
        image: './onsen/hitoyoshi.png',
        tags: ['球磨川', '城下町', '熊本']
        history: '江戸時代から人吉藩の湯治場として栄えた温泉地。清流・球磨川のほとりに旅館が立ち並び、日本三急流「球磨川」のラフティングと温泉を組み合わせた観光が人気。',
        day_trip: { available: true, price: '500円〜', hours: '10:00-21:00' },
        access: { nearest_station: '人吉駅（JR肥薩線）', by_train: '熊本駅から特急「かわせみやませみ」で約1時間30分', by_car: '九州道・人吉ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '球磨川河畔', free: true }
    },
    {
        id: 'o-kumamoto-3',
        name: '杖立温泉',
        prefecture: 'kumamoto',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '谷あいに湯けむりが立ちのぼる温泉街。昭和レトロな雰囲気も魅力。',
        image: './onsen/tsuedate.png',
        tags: ['湯けむり', '温泉街', 'レトロ', '熊本']
        history: '江戸時代から湯治場として知られる杖立川沿いの温泉地。温泉の蒸気を利用した「蒸し湯」や、こいのぼりを温泉蒸気で竿揚げする「こいのぼり祭り」が有名。',
        day_trip: { available: true, price: '300円〜', hours: '09:00-21:00' },
        access: { nearest_station: '日田駅（JR久大本線）', by_train: '日田駅からバス約30分', by_car: '大分道・日田ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '杖立川沿い', free: true }
    },
    {
        id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉',
        prefecture: 'kumamoto',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '阿蘇観光の中心地にある温泉。広大なカルデラの景色と一緒に楽しめる。',
        image: './onsen/asou.png',
        tags: ['阿蘇', '観光拠点', '熊本']
        history: '阿蘇カルデラの内側に位置する温泉地で、江戸時代から肥後藩の御用湯として栄えた。阿蘇山の雄大な景観と草千里を望む高原の温泉地として、阿蘇観光の拠点となっている。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '阿蘇駅（JR豊肥本線）', by_train: '熊本駅から特急「あそ」で約1時間', by_car: '九州道・熊本ICから約70分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '阿蘇温泉公園', free: true }
    },

    // ===== 大分県 =====
    {
        id: 'o-oita-1',
        name: '別府温泉',
        prefecture: 'oita',
        category: '硫黄泉',
        spring_type: '硫黄泉・食塩泉・単純泉など多様',
        description: '日本一の源泉数と湧出量を誇る温泉都市。カラフルな地獄めぐりと多彩な泉質が楽しめる世界的温泉地。',
        image: './onsen/beppu.png',
        tags: ['日本一の源泉数', '地獄めぐり', '大分'],
        effects: ['疲労回復', '神経痛', '筋肉痛', '慢性皮膚病', '慢性消化器病'],
        history: '大正時代に油屋熊八が「地獄めぐり」を観光資源として整備し発展。8つの地獄を持つ「地獄蒸し」文化や多様な泉質（8種）で世界的に知られる日本最大の温泉地。',
        day_trip: { available: true, price: '100〜400円（市営温泉）', hours: '6:30-22:30（施設により異なる）' },
        access: { nearest_station: '別府駅（JR日豊本線）', by_train: '大分空港から車約60分、大分駅から特急で約15分', by_car: '大分道・別府ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '竹瓦温泉前・駅前', free: true }
    },
    {
        id: 'o-oita-2',
        name: '由布院温泉',
        prefecture: 'oita',
        category: '重曹泉',
        spring_type: '単純泉・炭酸水素塩泉',
        description: '由布岳を望む風光明媚な温泉地。アート・カフェ・おしゃれな雑貨店が立ち並び若い世代にも人気。',
        image: './onsen/yufuin.png',
        tags: ['由布岳', 'アート', 'おしゃれ', '大分'],
        effects: ['疲労回復', '美肌', '神経痛', '筋肉疲労'],
        history: '江戸時代から湯治場として知られていたが、昭和50年代に「由布院モデル」として地域主導の観光まちづくりを推進。温泉だけでなく文化・芸術・食も楽しめる洗練されたリゾートとして全国区の人気を誇る。',
        day_trip: { available: true, price: '500〜800円', hours: '施設により異なる' },
        access: { nearest_station: '由布院駅（JR久大本線）', by_train: '博多から「ゆふいんの森」で約2時間', by_car: '大分道・由布ICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '由布院駅前', free: true }
    },
    {
        id: 'o-oita-4',
        name: '長湯温泉',
        prefecture: 'oita',
        category: '炭酸泉',
        spring_type: '炭酸水素塩泉（炭酸泉）',
        description: '炭酸ガスが豊富な湯で知られる温泉。湯あがりのさっぱり感が特徴。',
        image: './onsen/nagayu.png',
        tags: ['炭酸泉', '湯治', '大分']
        history: '大正時代から知られる炭酸泉で、「炭酸ガスの湧出量日本一」を誇る。「心臓の湯」とも呼ばれるほど炭酸泉の効能が高く、全国の温泉ファンが湯治目的で訪れる大分県南部の名湯。',
        day_trip: { available: true, price: '300円〜', hours: '07:00-21:00' },
        access: { nearest_station: '豊後竹田駅（JR豊肥本線）', by_train: '大分駅から豊肥本線で約1時間', by_car: '中九州道・竹田ICから約15分', parking: true },
        drinkable: true,
        footbath: { available: true, location: 'ラムネ温泉館前', free: true }
    },

    // ===== 宮崎県 =====
    {
        id: 'o-miyazaki-1',
        name: '京町温泉',
        prefecture: 'miyazaki',
        category: '単純温泉',
        spring_type: '単純温泉',
        description: 'えびの市の川沿いに広がる、大正時代から続く情緒豊かな温泉郷。レトロな雰囲気と美肌効果のある湯が魅力。',
        image: './onsen/kyomachi.png',
        tags: ['レトロ', 'えびの', '美肌の湯', '宮崎']
        history: '江戸時代から「えびの高原の湯」として知られ、薩摩藩の湯治場として利用された。霧島連山の麓に湧く硫黄泉で、えびの高原・霧島観光の宮崎県側の拠点となっている。',
        day_trip: { available: true, price: '400円〜', hours: '10:00-20:00' },
        access: { nearest_station: '真幸駅（JR肥薩線）', by_train: '吉松駅からバス約30分', by_car: '九州道・えびのICから約10分', parking: true },
        drinkable: false,
        footbath: { available: true, location: 'えびの高原', free: true }
    },
    {
        id: 'o-miyazaki-2',
        name: '青島温泉',
        prefecture: 'miyazaki',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '海辺のリゾート温泉。南国の雰囲気と海の景色が魅力。',
        image: './onsen/aoshima.png',
        tags: ['南国', '海', 'リゾート', '宮崎']
        history: '日向灘に面した青島に隣接する温泉地。昭和時代のリゾート開発で発展し、「新婚旅行のメッカ」として昭和40〜50年代に全国的な人気を誇った宮崎を代表する海浜温泉地。',
        day_trip: { available: true, price: '600円〜', hours: '10:00-21:00' },
        access: { nearest_station: '青島駅（JR日南線）', by_train: '宮崎駅から日南線で約25分', by_car: '宮崎道・宮崎ICから約20分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '青島神社周辺', free: true }
    },

    // ===== 鹿児島県 =====
    {
        id: 'o-kagoshima-1',
        name: '指宿温泉',
        prefecture: 'kagoshima',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '世界的に珍しい天然の砂むし温泉が有名。温かい砂に全身を埋める砂蒸し体験は一生の思い出に。',
        image: './onsen/ibusuki.png',
        tags: ['砂むし温泉', '珍しい体験', 'リゾート', '鹿児島']
        history: '江戸時代から薩摩藩の御用湯として栄えた砂むし温泉の発祥地。明治維新の立役者・大久保利通・西郷隆盛らも愛したと伝わり、砂に埋まって入浴する「砂蒸し温泉」は日本唯一の体験として有名。',
        day_trip: { available: true, price: '1,080円〜', hours: '08:30-21:00' },
        access: { nearest_station: '指宿駅（JR指宿枕崎線）', by_train: '鹿児島中央駅から特急「指宿のたまて箱」で約50分', by_car: '南九州道・指宿ICから約5分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '山川砂むし温泉周辺', free: true }
    },
    {
        id: 'o-kagoshima-2',
        name: '霧島温泉',
        prefecture: 'kagoshima',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉',
        description: '霧島神宮のそばに湧く古湯。龍馬とお龍が訪れた日本最初の新婚旅行地として名高い歴史の温泉。',
        image: './onsen/kirishima.png',
        tags: ['霧島神宮', '坂本龍馬', '歴史', '鹿児島']
        history: '神代の時代から湧いていたとされる霧島山麓の温泉地。坂本龍馬とおりょうが日本初の新婚旅行をしたと言われる地で、天孫降臨の地「高千穂峰」への登山拠点でもある歴史深い温泉郷。',
        day_trip: { available: true, price: '400円〜', hours: '08:00-21:00' },
        access: { nearest_station: '霧島神宮駅（JR日豊本線）', by_train: '霧島神宮駅からバス約40分', by_car: '九州道・溝辺鹿児島空港ICから約30分', parking: true },
        drinkable: false,
        footbath: { available: true, location: '霧島神宮参道', free: true }
    },
    {
        id: 'o-kagoshima-3',
        name: '桜島温泉',
        prefecture: 'kagoshima',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '活火山を間近に望む温泉。ダイナミックな景色が非日常感たっぷり。',
        image: './onsen/sakurajima.png',
        tags: ['火山', '絶景', '鹿児島']
        history: '活火山・桜島の麓に湧く温泉地。桜島の噴火によって生まれた地熱が源泉となり、錦江湾を挟んで鹿児島市を望む絶景とともに「活火山と共存する温泉」として全国でも稀有な存在。',
        day_trip: { available: true, price: '200円〜', hours: '09:00-21:00' },
        access: { nearest_station: '桜島港（フェリー）', by_train: '鹿児島港からフェリーで約15分', by_car: 'フェリーで車ごと渡れる（鹿児島港〜桜島港）', parking: true },
        drinkable: false,
        footbath: { available: true, location: '黒神埋没鳥居周辺・桜島溶岩なぎさ公園', free: true }
    },
    {
        id: 'o-kagoshima-4',
        name: '屋久島温泉',
        prefecture: 'kagoshima',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '世界自然遺産の島で楽しめる温泉。森と海の空気に包まれる癒やし体験。',
        image: './onsen/yakushima.png',
        tags: ['世界自然遺産', '森', '島', '鹿児島']
        history: '世界自然遺産・屋久島に湧く温泉地。縄文杉・白谷雲水峡などのトレッキング後に入れる山中の野湯（一部無料）と、樹齢数千年の屋久杉の島の大自然と合わせて楽しめる稀有な温泉地。',
        day_trip: { available: true, price: '200円〜', hours: '終日（野湯は24時間）' },
        access: { nearest_station: '宮之浦港（フェリー・高速船）', by_train: '鹿児島港からジェットフォイルで約2時間', by_car: 'フェリーで車ごと渡れる', parking: true },
        drinkable: false,
        footbath: { available: true, location: '尾之間温泉周辺', free: true }
    },

    // ===== 沖縄県 =====
    {
        id: 'o-okinawa-1',
        name: 'シギラ黄金温泉',
        prefecture: 'okinawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '宮古島最南端の天然温泉。琥珀色の湯に包まれ、色鮮やかな花々と緑に囲まれた開放感あふれる絶景の中で寛げる南国リゾートの温泉。',
        image: './onsen/shigira.png',
        tags: ['南国リゾート', '海の温泉', '沖縄']
        history: '宮古島・来間島の近くに湧く沖縄県内有数の温泉地。亜熱帯の植物に囲まれた南国リゾートの中に温泉が湧くという珍しい組み合わせが魅力で、沖縄の海とのギャップが人気。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-21:00' },
        access: { nearest_station: '宮古空港', by_train: '宮古空港からタクシー約15分', by_car: '宮古空港から約15分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
    {
        id: 'o-okinawa-2',
        name: '琉球温泉',
        prefecture: 'okinawa',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '空港近くの海辺温泉。飛行機の離発着を眺めながら入れる展望風呂が人気。',
        image: './onsen/senagajima.png',
        tags: ['海', '展望', 'リゾート', '沖縄']
        history: '沖縄本島南部の豊見城市に湧く温泉地。沖縄では地下深くを掘削することで温泉が得られる。琉球王国の歴史と文化が色濃く残る那覇近郊の温泉リゾートとして整備されている。',
        day_trip: { available: true, price: '800円〜', hours: '10:00-22:00' },
        access: { nearest_station: 'ゆいレール・赤嶺駅', by_train: 'ゆいレール赤嶺駅からタクシー約10分', by_car: '那覇空港から約15分', parking: true },
        drinkable: false,
        footbath: { available: false, location: '', free: false }
    },
];

/**
 * 都道府県IDから温泉一覧を取得
 * @param {string} prefectureId - 都道府県ID
 * @returns {Array} 温泉データの配列
 */
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