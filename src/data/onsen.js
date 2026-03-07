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
        tags: ['硫黄泉', '地獄谷', '名湯', '北海道']
    },
    {
        id: 'o-hokkaido-2',
        name: '洞爺湖温泉',
        prefecture: 'hokkaido',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '洞爺湖畔に広がるリゾート温泉。湖面に映る有珠山と花火大会が絵になる景勝地。',
        image: './onsen/toyako.png',
        tags: ['湖畔', '花火', 'リゾート', '北海道']
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
        tags: ['湯畑', '時間湯', '日本三名泉', '群馬']
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
        tags: ['リゾート', '富士山', '芦ノ湖', '神奈川']
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
    },

    // ===== 兵庫県 =====
    {
        id: 'o-hyogo-1',
        name: '有馬温泉',
        prefecture: 'hyogo',
        category: '塩化物泉',
        spring_type: '含鉄ナトリウム塩化物泉（金泉）・含炭酸ラジウム泉（銀泉）',
        description: '日本三古湯の一つ。金泉・銀泉の2種の湯が楽しめる名湯。豊臣秀吉も愛した日本最古の温泉の一つ。',
        image: './onsen/arima.png',
        tags: ['日本三古湯', '金泉', '銀泉', '兵庫']
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
    },

    // ===== 愛媛県 =====
    {
        id: 'o-ehime-1',
        name: '道後温泉',
        prefecture: 'ehime',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '日本最古の温泉の一つ。夏目漱石「坊っちゃん」の舞台になった道後温泉本館は国の重要文化財。',
        image: './onsen/otogo.png',
        tags: ['日本最古', '坊っちゃん', '国重要文化財', '愛媛']
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
    },

    // ===== 高知県 =====
    {
        id: 'o-kochi-1',
        name: '四万十温泉',
        prefecture: 'kochi',
        category: '単純泉',
        spring_type: '単純泉',
        description: '日本最後の清流・四万十川近くの温泉。川漁師文化と大自然の中でのんびりと湯に浸かれる秘湯。',
        image: './onsen/shimanto.png',
        tags: ['四万十川', '清流', '秘湯', '高知']
    },
    {
        id: 'o-kochi-2',
        name: 'あしずり温泉',
        prefecture: 'kochi',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '足摺岬エリアで楽しめる温泉。太平洋の景色と海風が最高。',
        image: './onsen/ashizuri.png',
        tags: ['太平洋', '岬', '絶景', '高知']
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
        tags: ['日本一の源泉数', '地獄めぐり', '大分']
    },
    {
        id: 'o-oita-2',
        name: '由布院温泉',
        prefecture: 'oita',
        category: '重曹泉',
        spring_type: '単純泉・炭酸水素塩泉',
        description: '由布岳を望む風光明媚な温泉地。アート・カフェ・おしゃれな雑貨店が立ち並び若い世代にも人気。',
        image: './onsen/yufuin.png',
        tags: ['由布岳', 'アート', 'おしゃれ', '大分']
    },
    {
        id: 'o-oita-3',
        name: '観海寺温泉',
        prefecture: 'oita',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '別府の高台にある温泉。市街と海を見下ろす眺望が魅力。',
        image: './onsen/kankaiji.png',
        tags: ['眺望', '高台', '別府', '大分']
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
    },

    // ===== 宮崎県 =====
    {
        id: 'o-miyazaki-1',
        name: '霧島温泉郷',
        prefecture: 'miyazaki',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉・硫酸塩泉',
        description: '霧島山麓に点在する温泉群。多様な泉質と豊かな自然が魅力で、坂本龍馬が新婚旅行で訪れた地として知られる。',
        image: './onsen/kirishima.png',
        tags: ['霧島山麓', '坂本龍馬', '新婚旅行', '宮崎']
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
    },

    // ===== 沖縄県 =====
    {
        id: 'o-okinawa-1',
        name: 'コスタビスタ沖縄温泉',
        prefecture: 'okinawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '沖縄本島中部の天然温泉。エメラルドグリーンの海を望みながら天然温泉に浸かれる南国リゾートの温泉。',
        image: './onsen/costa.png',
        tags: ['南国リゾート', '海の温泉', '沖縄']
    },
    {
        id: 'o-okinawa-2',
        name: '瀬長島温泉',
        prefecture: 'okinawa',
        category: '塩化物泉',
        spring_type: '塩化物泉',
        description: '空港近くの海辺温泉。飛行機の離発着を眺めながら入れる展望風呂が人気。',
        image: './onsen/senagajima.png',
        tags: ['海', '展望', 'リゾート', '沖縄']
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
        o.tags.some(t => t.toLowerCase().includes(q))
    );
}

/**
 * 泉質カテゴリ一覧を取得（重複除去）
 * @returns {Array} カテゴリ名の配列
 */
export function getOnsenCategories() {
    return [...new Set(onsenList.map(o => o.category))];
}