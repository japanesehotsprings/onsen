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
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format',
        tags: ['硫黄泉', '地獄谷', '名湯', '北海道']
    },
    {
        id: 'o-hokkaido-2',
        name: '洞爺湖温泉',
        prefecture: 'hokkaido',
        category: '単純泉',
        spring_type: '単純温泉',
        description: '洞爺湖畔に広がるリゾート温泉。湖面に映る有珠山と花火大会が絵になる景勝地。',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format',
        tags: ['湖畔', '花火', 'リゾート', '北海道']
    },
    {
        id: 'o-hokkaido-3',
        name: '定山渓温泉',
        prefecture: 'hokkaido',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '札幌から約1時間の秘境温泉。豊平川渓谷沿いに旅館が立ち並ぶ「札幌の奥座敷」。',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format',
        tags: ['渓谷', '秘境', '札幌近郊', '北海道']
    },
    {
        id: 'o-hokkaido-4',
        name: '阿寒湖温泉',
        prefecture: 'hokkaido',
        category: '硫黄泉',
        spring_type: '硫黄泉・重曹泉',
        description: 'マリモで有名な阿寒湖畔の温泉。アイヌ文化に触れられる民芸品の街も魅力。',
        image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format',
        tags: ['湖畔', 'アイヌ', 'マリモ', '北海道']
    },

    // ===== 青森県 =====
    {
        id: 'o-aomori-1',
        name: '酸ヶ湯温泉',
        prefecture: 'aomori',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉',
        description: '八甲田山の秘湯。千人風呂と呼ばれる巨大な混浴ヒバ千人風呂が有名。国民保養温泉。',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format',
        tags: ['秘湯', '混浴', 'ヒバ千人風呂', '青森']
    },
    {
        id: 'o-aomori-2',
        name: '浅虫温泉',
        prefecture: 'aomori',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '陸奥湾を望む温泉地。新鮮な海の幸と温泉を一緒に楽しめる「津軽の奥座敷」。',
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format',
        tags: ['海の幸', '海岸', '青森']
    },

    // ===== 岩手県 =====
    {
        id: 'o-iwate-1',
        name: '花巻温泉郷',
        prefecture: 'iwate',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '宮沢賢治ゆかりの温泉地。大沢温泉・鉛温泉など趣の異なる名湯が点在する温泉天国。',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format',
        tags: ['秘湯', '宮沢賢治', '名湯', '岩手']
    },
    {
        id: 'o-iwate-2',
        name: '松川温泉',
        prefecture: 'iwate',
        category: '硫黄泉',
        spring_type: '含硫黄単純泉',
        description: '岩手山麓に位置する自噴する硫黄泉の秘湯。こけし作りの里としても知られる。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format',
        tags: ['硫黄泉', '秘湯', '自噴', '岩手']
    },

    // ===== 宮城県 =====
    {
        id: 'o-miyagi-1',
        name: '鳴子温泉郷',
        prefecture: 'miyagi',
        category: '硫黄泉',
        spring_type: '硫黄泉・重曹泉など9種',
        description: '日本の泉質11種のうち9種が集まる「温泉の宝庫」。こけしの発祥地としても有名。',
        image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&auto=format',
        tags: ['9種の泉質', 'こけし', '秘湯', '宮城']
    },
    {
        id: 'o-miyagi-2',
        name: '作並温泉',
        prefecture: 'miyagi',
        category: 'single',
        spring_type: '単純泉',
        description: '広瀬川渓谷沿いの温泉地。仙台から近く「仙台の奥座敷」として親しまれる。',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format',
        tags: ['渓谷', '仙台近郊', '宮城']
    },

    // ===== 秋田県 =====
    {
        id: 'o-akita-1',
        name: '乳頭温泉郷',
        prefecture: 'akita',
        category: '硫黄泉',
        spring_type: '硫黄泉・重曹泉など各宿異なる',
        description: '秘湯の宝庫。7つの温泉宿からなる山奥の温泉郷。鶴の湯の茅葺き旅館と露天風呂は絶景。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['秘湯', '鶴の湯', '露天風呂', '秋田']
    },
    {
        id: 'o-akita-2',
        name: '玉川温泉',
        prefecture: 'akita',
        category: '酸性泉',
        spring_type: '強酸性含二酸化炭素塩化物泉',
        description: '日本一の酸性度を誇る温泉。pH1.2の強酸性の湯は難病にも効くと言われ全国から湯治客が訪れる。',
        image: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=600&auto=format',
        tags: ['強酸性', '湯治', '秘湯', '秋田']
    },

    // ===== 山形県 =====
    {
        id: 'o-yamagata-1',
        name: '銀山温泉',
        prefecture: 'yamagata',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '大正ロマン漂う温泉街。ガス灯に照らされた木造多層建築の旅館が立ち並ぶ幻想的な夜景が有名。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['大正ロマン', '木造旅館', '冬景色', '山形']
    },
    {
        id: 'o-yamagata-2',
        name: '蔵王温泉',
        prefecture: 'yamagata',
        category: '硫黄泉',
        spring_type: '強酸性硫黄泉',
        description: '国内有数の強酸性硫黄泉。冬のスキーと温泉を同時に楽しめるリゾート。樹氷鑑賞の拠点にも。',
        image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format',
        tags: ['硫黄泉', 'スキー', '樹氷', '山形']
    },

    // ===== 福島県 =====
    {
        id: 'o-fukushima-1',
        name: '東山温泉',
        prefecture: 'fukushima',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '会津若松の奥座敷。七日町通りや鶴ヶ城観光の後に訪れる温泉地として人気。',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format',
        tags: ['会津', '歴史', '福島']
    },
    {
        id: 'o-fukushima-2',
        name: '磐梯熱海温泉',
        prefecture: 'fukushima',
        category: '重曹泉',
        spring_type: 'ナトリウム-カルシウム塩化物泉',
        description: '安積山麓の温泉地。五色沼や磐梯山観光の宿泊拠点。アルカリ性のとろみある湯が特徴。',
        image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format',
        tags: ['磐梯山', '紅葉', '福島']
    },

    // ===== 茨城県 =====
    {
        id: 'o-ibaraki-1',
        name: '袋田温泉',
        prefecture: 'ibaraki',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '日本三名瀑・袋田の滝のそばに湧く温泉。紅葉と氷瀑の季節は特に人気が高い。',
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format',
        tags: ['袋田の滝', '紅葉', '茨城']
    },

    // ===== 栃木県 =====
    {
        id: 'o-tochigi-1',
        name: '那須温泉郷',
        prefecture: 'tochigi',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉・単純泉など',
        description: '御用邸でも知られる那須高原の温泉群。那須岳山麓に大小多数の旅館・ホテルが点在。',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format',
        tags: ['那須高原', '御用邸', '栃木']
    },
    {
        id: 'o-tochigi-2',
        name: '日光湯元温泉',
        prefecture: 'tochigi',
        category: '硫黄泉',
        spring_type: '含硫黄カルシウム炭酸水素塩泉',
        description: '奥日光の温泉地。中禅寺湖や戦場ヶ原の自然と世界遺産観光の拠点として知られる。',
        image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format',
        tags: ['奥日光', '世界遺産', '栃木']
    },

    // ===== 群馬県 =====
    {
        id: 'o-gunma-1',
        name: '草津温泉',
        prefecture: 'gunma',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉（含石膏）',
        description: '日本を代表する名湯。街の中心にある湯畑と時間湯が草津のシンボル。日本三名泉の一つ。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['湯畑', '時間湯', '日本三名泉', '群馬']
    },
    {
        id: 'o-gunma-2',
        name: '伊香保温泉',
        prefecture: 'gunma',
        category: '硫酸塩泉',
        spring_type: '硫酸塩泉（黄金の湯）・単純泉（白銀の湯）',
        description: '365段の石段が名物のレトロな温泉街。黄金の湯と白銀の湯の2種を楽しめる人気温泉。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['石段街', '昭和レトロ', '黄金の湯', '群馬']
    },
    {
        id: 'o-gunma-3',
        name: '万座温泉',
        prefecture: 'gunma',
        category: '硫黄泉',
        spring_type: '含硫黄マグネシウム硫酸塩泉',
        description: '標高1,800mに位置する高地温泉。白濁した硫黄泉の露天風呂からの眺望が絶品。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format',
        tags: ['高山温泉', '白濁', '露天風呂', '群馬']
    },

    // ===== 埼玉県 =====
    {
        id: 'o-saitama-1',
        name: '寄居温泉',
        prefecture: 'saitama',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '荒川沿いの温泉地。関東平野を見渡せる高台の露天風呂が人気の日帰り温泉施設。',
        image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format',
        tags: ['日帰り温泉', '露天風呂', '埼玉']
    },

    // ===== 千葉県 =====
    {
        id: 'o-chiba-1',
        name: '犬吠埼温泉',
        prefecture: 'chiba',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '日本で最も早く初日の出が見られる犬吠埼周辺の温泉。太平洋の絶景を望む露天風呂が自慢。',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format',
        tags: ['初日の出', '太平洋', '海岸', '千葉']
    },

    // ===== 東京都 =====
    {
        id: 'o-tokyo-1',
        name: '奥多摩温泉',
        prefecture: 'tokyo',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '東京唯一の村・奥多摩町の温泉。秋川渓谷や多摩川上流の自然に囲まれた都会の秘湯。',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format',
        tags: ['都会の秘湯', '渓谷', 'おこもり', '東京']
    },

    // ===== 神奈川県 =====
    {
        id: 'o-kanagawa-1',
        name: '箱根温泉',
        prefecture: 'kanagawa',
        category: '硫黄泉',
        spring_type: '硫黄泉・塩化物泉など多様',
        description: '富士山を望む日本最大級の温泉リゾート。17の温泉地からなり泉質も多様。芦ノ湖や大涌谷も楽しめる。',
        image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format',
        tags: ['リゾート', '富士山', '芦ノ湖', '神奈川']
    },
    {
        id: 'o-kanagawa-2',
        name: '湯河原温泉',
        prefecture: 'kanagawa',
        category: '塩化物泉',
        spring_type: 'カルシウム・ナトリウム塩化物泉',
        description: '万葉集にも詠まれた歴史ある温泉地。文豪や政財界人に愛された「癒やしの里」。',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format',
        tags: ['歴史', '文豪', '万葉集', '神奈川']
    },

    // ===== 新潟県 =====
    {
        id: 'o-niigata-1',
        name: '越後湯沢温泉',
        prefecture: 'niigata',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '川端康成「雪国」の舞台。豪雪地帯のスキーリゾートと温泉、日本酒を一度に楽しめる。',
        image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&auto=format',
        tags: ['スキー', '雪国', '日本酒', '新潟']
    },
    {
        id: 'o-niigata-2',
        name: '月岡温泉',
        prefecture: 'niigata',
        category: '硫黄泉',
        spring_type: '含硫黄ナトリウム塩化物泉',
        description: '美肌の湯として知られる硫黄泉。エメラルドグリーンの湯色が特徴で県内屈指の温泉地。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['美肌の湯', '硫黄泉', '新潟']
    },

    // ===== 富山県 =====
    {
        id: 'o-toyama-1',
        name: '宇奈月温泉',
        prefecture: 'toyama',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '黒部峡谷の入口に広がる温泉地。トロッコ列車で渓谷美を楽しめる北陸随一のリゾート。',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format',
        tags: ['黒部峡谷', 'トロッコ列車', 'リゾート', '富山']
    },

    // ===== 石川県 =====
    {
        id: 'o-ishikawa-1',
        name: '山代温泉',
        prefecture: 'ishikawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム・カルシウム塩化物泉',
        description: '1,300年の歴史を誇る加賀温泉郷の雄。独自の総湯文化が今も息づく名湯の里。',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format',
        tags: ['1300年の歴史', '総湯', '加賀', '石川']
    },
    {
        id: 'o-ishikawa-2',
        name: '和倉温泉',
        prefecture: 'ishikawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム・カルシウム塩化物泉',
        description: '能登半島の七尾湾に面した海の温泉。金沢の名旅館「加賀屋」が道内随一の豪華旅館として有名。',
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format',
        tags: ['海の温泉', '能登', '加賀屋', '石川']
    },

    // ===== 福井県 =====
    {
        id: 'o-fukui-1',
        name: 'あわら温泉',
        prefecture: 'fukui',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '「北陸の奥座敷」と呼ばれる福井最大の温泉地。松尾芭蕉も訪れた歴史ある名湯。',
        image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format',
        tags: ['北陸の奥座敷', '芭蕉', '福井']
    },

    // ===== 山梨県 =====
    {
        id: 'o-yamanashi-1',
        name: '石和温泉',
        prefecture: 'yamanashi',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '富士山麓と甲府盆地に広がる温泉地。ほうとう料理と温泉、ワイナリー観光がセットで楽しめる。',
        image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format',
        tags: ['富士山', 'ワイン', '甲府', '山梨']
    },

    // ===== 長野県 =====
    {
        id: 'o-nagano-1',
        name: '別所温泉',
        prefecture: 'nagano',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '「信州の鎌倉」と呼ばれる長野最古の温泉。安楽寺の八角三重塔など歴史遺産が点在。',
        image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&auto=format',
        tags: ['信州最古', '歴史遺産', '長野']
    },
    {
        id: 'o-nagano-2',
        name: '野沢温泉',
        prefecture: 'nagano',
        category: '硫黄泉',
        spring_type: '含石膏硫黄泉',
        description: '13の外湯を巡る温泉文化が残る村。野沢菜発祥の地としても有名で、スキーリゾートも充実。',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format',
        tags: ['外湯めぐり', 'スキー', '野沢菜', '長野']
    },
    {
        id: 'o-nagano-3',
        name: '渋温泉',
        prefecture: 'nagano',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '地獄谷野猿公苑に近い温泉地。石畳の路地に9つの外湯が並ぶレトロな温泉街が人気。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['外湯めぐり', '温泉猿', 'レトロ', '長野']
    },

    // ===== 岐阜県 =====
    {
        id: 'o-gifu-1',
        name: '下呂温泉',
        prefecture: 'gifu',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '日本三名泉の一つ。美肌の湯として名高い無色透明の温泉。飛騨川沿いの温泉街は風情がある。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['日本三名泉', '美肌の湯', '飛騨川', '岐阜']
    },
    {
        id: 'o-gifu-2',
        name: '奥飛騨温泉郷',
        prefecture: 'gifu',
        category: '単純泉',
        spring_type: '単純泉・硫黄泉',
        description: '北アルプス山麓の秘境温泉郷。新穂高・福地・新平湯など5つの温泉地からなる。露天風呂の数は日本一。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format',
        tags: ['北アルプス', '秘境', '露天風呂日本一', '岐阜']
    },

    // ===== 静岡県 =====
    {
        id: 'o-shizuoka-1',
        name: '熱海温泉',
        prefecture: 'shizuoka',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '東京から最も近い温泉リゾート。相模湾を望む景観と花火大会が人気。昭和レトロと現代が共存。',
        image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format',
        tags: ['リゾート', '花火', '海の温泉', '静岡']
    },
    {
        id: 'o-shizuoka-2',
        name: '伊豆下田温泉',
        prefecture: 'shizuoka',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '黒船来航で知られる下田の温泉。澄んだ青い海とペリーロードの歴史的街並みと合わせて楽しめる。',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format',
        tags: ['黒船', '歴史', 'リゾート', '静岡']
    },

    // ===== 愛知県 =====
    {
        id: 'o-aichi-1',
        name: '湯谷温泉',
        prefecture: 'aichi',
        category: '重曹泉',
        spring_type: '炭酸水素塩泉',
        description: '宇連川沿いの渓谷温泉。川のせせらぎを聞きながら楽しめる露天風呂が人気の秘境温泉。',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format',
        tags: ['渓谷', '秘境', '愛知']
    },

    // ===== 三重県 =====
    {
        id: 'o-mie-1',
        name: '長島温泉',
        prefecture: 'mie',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: 'ナガシマリゾートと一体化した大型温泉施設。東海随一のエンターテインメント温泉地。',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format',
        tags: ['リゾート', 'テーマパーク', '家族', '三重']
    },

    // ===== 滋賀県 =====
    {
        id: 'o-shiga-1',
        name: '雄琴温泉',
        prefecture: 'shiga',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '琵琶湖の西岸に位置する温泉地。「京の奥座敷」として古くから京都の人々に愛されてきた名湯。',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format',
        tags: ['琵琶湖', '京の奥座敷', '滋賀']
    },

    // ===== 京都府 =====
    {
        id: 'o-kyoto-1',
        name: '城崎温泉',
        prefecture: 'kyoto',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '7つの外湯を浴衣で巡る風情ある温泉街。柳並木と太鼓橋が美しい。日本有数の名湯。',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format',
        tags: ['外湯めぐり', '浴衣', '柳並木', '京都']
    },

    // ===== 大阪府 =====
    {
        id: 'o-osaka-1',
        name: '天見温泉',
        prefecture: 'osaka',
        category: '重曹泉',
        spring_type: '重曹泉',
        description: '南河内の山あいにある秘湯。大阪府内で数少ない天然温泉の一つで、緑豊かな渓谷の景色が楽しめる。',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format',
        tags: ['秘湯', '渓谷', '大阪府内', '大阪']
    },

    // ===== 兵庫県 =====
    {
        id: 'o-hyogo-1',
        name: '有馬温泉',
        prefecture: 'hyogo',
        category: '塩化物泉',
        spring_type: '含鉄ナトリウム塩化物泉（金泉）・含炭酸ラジウム泉（銀泉）',
        description: '日本三古湯の一つ。金泉・銀泉の2種の湯が楽しめる名湯。豊臣秀吉も愛した日本最古の温泉の一つ。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['日本三古湯', '金泉', '銀泉', '兵庫']
    },
    {
        id: 'o-hyogo-2',
        name: '湯村温泉',
        prefecture: 'hyogo',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩塩化物泉',
        description: '奈良時代に開湯された古湯。98度の源泉「荒湯」は地元食材の温泉料理に活用され名物になっている。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['荒湯', '古湯', '温泉料理', '兵庫']
    },

    // ===== 奈良県 =====
    {
        id: 'o-nara-1',
        name: '洞川温泉',
        prefecture: 'nara',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '大峯山修験道の聖地・洞川の温泉。吉野熊野国立公園の奥深くにある幽玄な秘湯。',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format',
        tags: ['修験道', '秘湯', '吉野', '奈良']
    },

    // ===== 和歌山県 =====
    {
        id: 'o-wakayama-1',
        name: '白浜温泉',
        prefecture: 'wakayama',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '日本三古湯の一つ。白い砂浜と青い海、そして6世紀から続く歴史ある温泉が揃うリゾート地。',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format',
        tags: ['日本三古湯', '海の温泉', 'リゾート', '和歌山']
    },
    {
        id: 'o-wakayama-2',
        name: '熊野本宮温泉郷',
        prefecture: 'wakayama',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '世界遺産・熊野古道の聖地に湧く温泉。川湯温泉の仙人風呂（冬季限定の河原露天風呂）が圧巻。',
        image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&auto=format',
        tags: ['世界遺産', '熊野古道', '仙人風呂', '和歌山']
    },

    // ===== 鳥取県 =====
    {
        id: 'o-tottori-1',
        name: '三朝温泉',
        prefecture: 'tottori',
        category: '放射能泉',
        spring_type: '放射能泉（ラジウム泉）',
        description: 'ラジウムの含有量が世界有数の温泉。三徳川沿いの風情ある温泉街は国の重要文化的景観に指定。',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format',
        tags: ['ラジウム泉', '世界有数', '鳥取']
    },

    // ===== 島根県 =====
    {
        id: 'o-shimane-1',
        name: '玉造温泉',
        prefecture: 'shimane',
        category: '塩化物泉',
        spring_type: '塩化物泉・硫酸塩泉',
        description: '日本書紀にも記される美肌の湯。玉湯川沿いに旅館が並ぶ出雲観光の拠点温泉地。',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format',
        tags: ['美肌の湯', '出雲/', '日本書紀', '島根']
    },

    // ===== 岡山県 =====
    {
        id: 'o-okayama-1',
        name: '湯原温泉',
        prefecture: 'okayama',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '旭川渓谷に沿った温泉地。砂湯は日本一の露天風呂として知られ、日の丸旅館などの老舗宿が揃う。',
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format',
        tags: ['砂湯', '日本一の露天風呂', '渓谷', '岡山']
    },

    // ===== 広島県 =====
    {
        id: 'o-hiroshima-1',
        name: '宮島温泉',
        prefecture: 'hiroshima',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '世界遺産・厳島神社がある宮島にある温泉。海に浮かぶ大鳥居を眺めながら入れる露天風呂が夢の体験。',
        image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format',
        tags: ['世界遺産', '厳島神社', '宮島', '広島']
    },

    // ===== 山口県 =====
    {
        id: 'o-yamaguchi-1',
        name: '湯田温泉',
        prefecture: 'yamaguchi',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '山口市中心部にある温泉。白狐伝説が残り中原中也ゆかりの地でもある，都市型の便利な温泉地。',
        image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format',
        tags: ['都市型温泉', '白狐伝説', '山口']
    },

    // ===== 徳島県 =====
    {
        id: 'o-tokushima-1',
        name: '祖谷温泉',
        prefecture: 'tokushima',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '日本三大秘境・祖谷渓谷の急斜面にあるケーブルカーで下る秘湯。かずら橋から近い絶景温泉。',
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format',
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
        image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&auto=format',
        tags: ['四国最古', '山中温泉', '香川']
    },

    // ===== 愛媛県 =====
    {
        id: 'o-ehime-1',
        name: '道後温泉',
        prefecture: 'ehime',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '日本最古の温泉の一つ。夏目漱石「坊っちゃん」の舞台になった道後温泉本館は国の重要文化財。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['日本最古', '坊っちゃん', '国重要文化財', '愛媛']
    },

    // ===== 高知県 =====
    {
        id: 'o-kochi-1',
        name: '四万十温泉',
        prefecture: 'kochi',
        category: 'single',
        spring_type: '単純泉',
        description: '日本最後の清流・四万十川近くの温泉。川漁師文化と大自然の中でのんびりと湯に浸かれる秘湯。',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format',
        tags: ['四万十川', '清流', '秘湯', '高知']
    },

    // ===== 福岡県 =====
    {
        id: 'o-fukuoka-1',
        name: '二日市温泉',
        prefecture: 'fukuoka',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '太宰府天満宮近くの温泉。博多のリゾート温泉として遠くからも多くの湯治客が通う九州最古の温泉。',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format',
        tags: ['太宰府', '九州最古', '福岡']
    },

    // ===== 佐賀県 =====
    {
        id: 'o-saga-1',
        name: '嬉野温泉',
        prefecture: 'saga',
        category: '重曹泉',
        spring_type: 'ナトリウム炭酸水素塩泉',
        description: '日本三大美肌の湯の一つ。肌がつるつるになる美肌効果で有名で全国から女性客が訪れる。嬉野茶が名物。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['美肌の湯', '日本三大美肌', '嬉野茶', '佐賀']
    },

    // ===== 長崎県 =====
    {
        id: 'o-nagasaki-1',
        name: '雲仙温泉',
        prefecture: 'nagasaki',
        category: '硫黄泉',
        spring_type: '酸性硫黄泉',
        description: '雲仙岳の噴気地帯に湧く温泉。日本最初の国立公園に指定された地に広がる噴煙と温泉の幻想的な景観。',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format',
        tags: ['国立公園', '噴気地帯', '硫黄泉', '長崎']
    },

    // ===== 熊本県 =====
    {
        id: 'o-kumamoto-1',
        name: '黒川温泉',
        prefecture: 'kumamoto',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉など',
        description: '九州中央山地の秘湯。入湯手形で30以上の旅館の露天風呂を巡れる。ミシュランガイド掲載の名湯。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['露天風呂めぐり', '秘湯', 'ミシュラン', '熊本']
    },
    {
        id: 'o-kumamoto-2',
        name: '人吉温泉',
        prefecture: 'kumamoto',
        category: '単純泉',
        spring_type: 'アルカリ性単純泉',
        description: '球磨川のほとりに湧く温泉。城下町の風情と清流、温泉を合わせて楽しめる「日本のチロル」。',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format',
        tags: ['球磨川', '城下町', '熊本']
    },

    // ===== 大分県 =====
    {
        id: 'o-oita-1',
        name: '別府温泉',
        prefecture: 'oita',
        category: '硫黄泉',
        spring_type: '硫黄泉・食塩泉・単純泉など多様',
        description: '日本一の源泉数と湧出量を誇る温泉都市。カラフルな地獄めぐりと多彩な泉質が楽しめる世界的温泉地。',
        image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format',
        tags: ['日本一の源泉数', '地獄めぐり', '大分']
    },
    {
        id: 'o-oita-2',
        name: '由布院温泉',
        prefecture: 'oita',
        category: '重曹泉',
        spring_type: '単純泉・炭酸水素塩泉',
        description: '由布岳を望む風光明媚な温泉地。アート・カフェ・おしゃれな雑貨店が立ち並び若い世代にも人気。',
        image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format',
        tags: ['由布岳', 'アート', 'おしゃれ', '大分']
    },

    // ===== 宮崎県 =====
    {
        id: 'o-miyazaki-1',
        name: '霧島温泉郷',
        prefecture: 'miyazaki',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉・硫酸塩泉',
        description: '霧島山麓に点在する温泉群。多様な泉質と豊かな自然が魅力で、坂本龍馬が新婚旅行で訪れた地として知られる。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format',
        tags: ['霧島山麓', '坂本龍馬', '新婚旅行', '宮崎']
    },

    // ===== 鹿児島県 =====
    {
        id: 'o-kagoshima-1',
        name: '指宿温泉',
        prefecture: 'kagoshima',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '世界的に珍しい天然の砂むし温泉が有名。温かい砂に全身を埋める砂蒸し体験は一生の思い出に。',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format',
        tags: ['砂むし温泉', '珍しい体験', 'リゾート', '鹿児島']
    },
    {
        id: 'o-kagoshima-2',
        name: '霧島温泉',
        prefecture: 'kagoshima',
        category: '硫黄泉',
        spring_type: '硫黄泉・炭酸水素塩泉',
        description: '霧島神宮のそばに湧く古湯。龍馬とお龍が訪れた日本最初の新婚旅行地として名高い歴史の温泉。',
        image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&auto=format',
        tags: ['霧島神宮', '坂本龍馬', '歴史', '鹿児島']
    },

    // ===== 沖縄県 =====
    {
        id: 'o-okinawa-1',
        name: 'コスタビスタ沖縄温泉',
        prefecture: 'okinawa',
        category: '塩化物泉',
        spring_type: 'ナトリウム塩化物泉',
        description: '沖縄本島中部の天然温泉。エメラルドグリーンの海を望みながら天然温泉に浸かれる南国リゾートの温泉。',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format',
        tags: ['南国リゾート', '海の温泉', '沖縄']
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
