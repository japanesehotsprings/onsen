/**
 * 47都道府県のグルメデータ
 * 各県の代表的なご当地グルメを管理
 */

export const gourmet = [
    // ===== 北海道 =====
    { id: 'g-hokkaido-1', name: 'ジンギスカン', prefecture: 'hokkaido', category: '肉料理', description: '北海道名物の羊肉料理。特製のタレで味わうラム肉は絶品。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['肉', '名物', '北海道'] },
    { id: 'g-hokkaido-2', name: '海鮮丼', prefecture: 'hokkaido', category: '海鮮', description: '新鮮なウニ、イクラ、カニが盛りだくさん。朝市での海鮮丼は格別。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['海鮮', '丼', '朝市'] },
    { id: 'g-hokkaido-3', name: '札幌味噌ラーメン', prefecture: 'hokkaido', category: 'ラーメン', description: '濃厚な味噌スープにコシのある太麺。バターコーンのトッピングが定番。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '味噌', '札幌'] },

    // ===== 青森県 =====
    { id: 'g-aomori-1', name: '大間マグロ', prefecture: 'aomori', category: '海鮮', description: '津軽海峡で一本釣りされる最高級マグロ。脂の乗りと旨味が格別。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['マグロ', '海鮮', '高級'] },
    { id: 'g-aomori-2', name: 'せんべい汁', prefecture: 'aomori', category: '郷土料理', description: '南部せんべいを鍋に入れた八戸の郷土料理。もちもちの食感が楽しい。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['鍋', '郷土料理', '冬'] },

    // ===== 岩手県 =====
    { id: 'g-iwate-1', name: 'わんこそば', prefecture: 'iwate', category: '麺類', description: '何杯食べられるか挑戦する盛岡名物。給仕さんの掛け声が楽しい。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '体験', '盛岡'] },
    { id: 'g-iwate-2', name: '盛岡冷麺', prefecture: 'iwate', category: '麺類', description: 'コシの強い麺にピリ辛の冷たいスープ。夏の名物グルメ。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['冷麺', '夏', '盛岡'] },

    // ===== 宮城県 =====
    { id: 'g-miyagi-1', name: '牛タン', prefecture: 'miyagi', category: '肉料理', description: '仙台名物の厚切り牛タン焼き。炭火で焼いた香ばしさが食欲をそそる。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛タン', '仙台', '焼肉'] },
    { id: 'g-miyagi-2', name: 'ずんだ餅', prefecture: 'miyagi', category: 'スイーツ', description: '枝豆をすりつぶした鮮やかな緑のずんだ餡と柔らかい餅のハーモニー。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['餅', 'スイーツ', '枝豆'] },

    // ===== 秋田県 =====
    { id: 'g-akita-1', name: 'きりたんぽ鍋', prefecture: 'akita', category: '郷土料理', description: 'つぶしたご飯を棒に巻いて焼いたきりたんぽを鍋で煮込む秋田の名物料理。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['鍋', '郷土料理', '冬'] },
    { id: 'g-akita-2', name: '稲庭うどん', prefecture: 'akita', category: '麺類', description: '日本三大うどんの一つ。手延べの細麺は滑らかな喉越しが特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['うどん', '手延べ', '秋田'] },

    // ===== 山形県 =====
    { id: 'g-yamagata-1', name: '山形芋煮', prefecture: 'yamagata', category: '郷土料理', description: '里芋と牛肉を醤油味で煮込む秋の風物詩。川原での芋煮会が有名。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['芋煮', '秋', '郷土料理'] },
    { id: 'g-yamagata-2', name: 'さくらんぼ', prefecture: 'yamagata', category: 'フルーツ', description: '生産量日本一。佐藤錦を始めとする高級さくらんぼは初夏の味覚。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['フルーツ', 'さくらんぼ', '初夏'] },

    // ===== 福島県 =====
    { id: 'g-fukushima-1', name: '喜多方ラーメン', prefecture: 'fukushima', category: 'ラーメン', description: '日本三大ラーメンの一つ。あっさり醤油味に平打ち縮れ麺のハーモニー。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '醤油', '喜多方'] },
    { id: 'g-fukushima-2', name: 'ままどおる', prefecture: 'fukushima', category: 'スイーツ', description: 'ミルク風味の餡をバター生地で包んだ福島の定番土産菓子。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['お菓子', 'お土産', '福島'] },

    // ===== 茨城県 =====
    { id: 'g-ibaraki-1', name: '水戸納豆', prefecture: 'ibaraki', category: '郷土料理', description: '日本を代表する納豆の産地。藁に包まれた伝統的な納豆は風味豊か。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['納豆', '伝統', '水戸'] },
    { id: 'g-ibaraki-2', name: 'あんこう鍋', prefecture: 'ibaraki', category: '郷土料理', description: '冬の味覚の王様。コラーゲンたっぷりのあんこう鍋は美容にも◎。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['鍋', 'あんこう', '冬'] },

    // ===== 栃木県 =====
    { id: 'g-tochigi-1', name: '宇都宮餃子', prefecture: 'tochigi', category: '中華', description: '餃子消費量日本一の街。焼き・水・揚げの三種が楽しめる。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['餃子', '宇都宮', 'B級グルメ'] },
    { id: 'g-tochigi-2', name: 'とちおとめ', prefecture: 'tochigi', category: 'フルーツ', description: '栃木県が誇るブランドいちご。甘みと酸味のバランスが絶妙。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['いちご', 'フルーツ', '栃木'] },

    // ===== 群馬県 =====
    { id: 'g-gunma-1', name: '水沢うどん', prefecture: 'gunma', category: '麺類', description: '日本三大うどんの一つ。コシの強い麺を冷たいつけ汁でいただく。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['うどん', '群馬', '名物'] },
    { id: 'g-gunma-2', name: '焼きまんじゅう', prefecture: 'gunma', category: 'スイーツ', description: '味噌ダレをたっぷり塗って焼いた群馬のソウルフード。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['まんじゅう', 'B級グルメ', '群馬'] },

    // ===== 埼玉県 =====
    { id: 'g-saitama-1', name: '川越さつまいも料理', prefecture: 'saitama', category: 'スイーツ', description: '小江戸川越名物のさつまいも菓子。芋チップスや芋ようかんが人気。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['さつまいも', '川越', 'スイーツ'] },

    // ===== 千葉県 =====
    { id: 'g-chiba-1', name: '勝浦タンタンメン', prefecture: 'chiba', category: 'ラーメン', description: 'ご当地B級グルメ。ラー油ベースの辛旨スープが特徴のピリ辛ラーメン。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', 'B級グルメ', '辛い'] },
    { id: 'g-chiba-2', name: '房総海鮮', prefecture: 'chiba', category: '海鮮', description: '太平洋の新鮮な海の幸。アジフライや地魚の刺身が絶品。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['海鮮', '刺身', '房総'] },

    // ===== 東京都 =====
    { id: 'g-tokyo-1', name: '江戸前寿司', prefecture: 'tokyo', category: '海鮮', description: '職人の技が光る握り寿司の元祖。築地・豊洲で味わう本格寿司。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['寿司', '江戸前', '高級'] },
    { id: 'g-tokyo-2', name: 'もんじゃ焼き', prefecture: 'tokyo', category: '粉もの', description: '月島名物のもんじゃ焼き。ヘラで食べるスタイルが独特で楽しい。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['もんじゃ', '月島', '下町'] },
    { id: 'g-tokyo-3', name: '東京ラーメン', prefecture: 'tokyo', category: 'ラーメン', description: '醤油ベースの中華そばから創作系まで、激戦区のラーメン文化。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '醤油', '東京'] },

    // ===== 神奈川県 =====
    { id: 'g-kanagawa-1', name: '横浜中華街', prefecture: 'kanagawa', category: '中華', description: '日本最大の中華街。本格中華の食べ歩きが大人気。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['中華', '食べ歩き', '横浜'] },
    { id: 'g-kanagawa-2', name: '湘南しらす丼', prefecture: 'kanagawa', category: '海鮮', description: '湘南・江の島名物の生しらす丼。とれたての透き通るしらすが絶品。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['しらす', '丼', '湘南'] },

    // ===== 新潟県 =====
    { id: 'g-niigata-1', name: 'へぎそば', prefecture: 'niigata', category: '麺類', description: '布海苔をつなぎに使った新潟名物のそば。独特のコシと風味が特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '新潟', '名物'] },
    { id: 'g-niigata-2', name: 'コシヒカリ', prefecture: 'niigata', category: '郷土料理', description: '日本一のブランド米。魚沼産コシヒカリは甘みと粘りが最高級。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['米', 'コシヒカリ', '新潟'] },

    // ===== 富山県 =====
    { id: 'g-toyama-1', name: 'ます寿司', prefecture: 'toyama', category: '海鮮', description: '笹の葉で包んだ富山の押し寿司。桜色の鱒と酢飯のハーモニー。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['寿司', '富山', '駅弁'] },
    { id: 'g-toyama-2', name: '白えび', prefecture: 'toyama', category: '海鮮', description: '富山湾の宝石と呼ばれる白えび。かき揚げや刺身で楽しむ繊細な味わい。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['えび', '富山湾', '高級'] },

    // ===== 石川県 =====
    { id: 'g-ishikawa-1', name: '金沢カレー', prefecture: 'ishikawa', category: 'カレー', description: 'ステンレス皿にキャベツとカツを添えた濃厚カレー。ゴーゴーカレーが有名。', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format', tags: ['カレー', 'B級グルメ', '金沢'] },
    { id: 'g-ishikawa-2', name: '近江町市場の海鮮', prefecture: 'ishikawa', category: '海鮮', description: '金沢の台所。のどぐろや甘エビなど日本海の幸を堪能。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['海鮮', '市場', '金沢'] },

    // ===== 福井県 =====
    { id: 'g-fukui-1', name: '越前がに', prefecture: 'fukui', category: '海鮮', description: '冬の味覚の王様。茹でガニ、焼きガニ、刺身と多彩な食べ方で楽しむ。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['カニ', '冬', '高級'] },
    { id: 'g-fukui-2', name: 'ソースかつ丼', prefecture: 'fukui', category: '肉料理', description: '福井のB級グルメ。薄くサクサクのカツにウスターソースをたっぷり。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['カツ丼', 'B級グルメ', '福井'] },

    // ===== 山梨県 =====
    { id: 'g-yamanashi-1', name: 'ほうとう', prefecture: 'yamanashi', category: '麺類', description: '太い平打ち麺をかぼちゃや野菜と味噌で煮込む山梨の郷土料理。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['麺', '味噌', '郷土料理'] },
    { id: 'g-yamanashi-2', name: '甲州ワイン', prefecture: 'yamanashi', category: 'ドリンク', description: '日本ワインの聖地。甲州ぶどうで造る白ワインは世界的に評価が高い。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['ワイン', '甲州', 'ぶどう'] },

    // ===== 長野県 =====
    { id: 'g-nagano-1', name: '信州そば', prefecture: 'nagano', category: '麺類', description: '挽きたて・打ちたて・茹でたての三たて蕎麦。戸隠そばが特に有名。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '信州', '手打ち'] },
    { id: 'g-nagano-2', name: 'おやき', prefecture: 'nagano', category: '郷土料理', description: '野沢菜やなすなどの具材を包んで焼いた信州の郷土食。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['おやき', '信州', '郷土料理'] },

    // ===== 岐阜県 =====
    { id: 'g-gifu-1', name: '飛騨牛', prefecture: 'gifu', category: '肉料理', description: '日本を代表するブランド牛。きめ細かな霜降りと甘い脂が特徴。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '飛騨'] },
    { id: 'g-gifu-2', name: '鶏ちゃん焼き', prefecture: 'gifu', category: '肉料理', description: '味噌や醤油ダレに漬けた鶏肉をキャベツと炒める岐阜のソウルフード。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['鶏肉', 'B級グルメ', '岐阜'] },

    // ===== 静岡県 =====
    { id: 'g-shizuoka-1', name: 'うなぎ', prefecture: 'shizuoka', category: '海鮮', description: '浜名湖のうなぎは日本一。パリッと焼き上げた蒲焼は格別の味。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['うなぎ', '浜名湖', '蒲焼'] },
    { id: 'g-shizuoka-2', name: '静岡おでん', prefecture: 'shizuoka', category: '郷土料理', description: '黒はんぺんが入った黒いだし汁のおでん。だし粉と青のりをかけて食べる。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['おでん', 'B級グルメ', '静岡'] },

    // ===== 愛知県 =====
    { id: 'g-aichi-1', name: '味噌カツ', prefecture: 'aichi', category: '肉料理', description: '八丁味噌ベースの甘辛ダレをかけた名古屋名物。矢場とんが有名。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['カツ', '味噌', '名古屋めし'] },
    { id: 'g-aichi-2', name: 'ひつまぶし', prefecture: 'aichi', category: '海鮮', description: '三種の食べ方で楽しむ名古屋流うなぎ料理。最後はだし茶漬けで。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['うなぎ', '名古屋めし', 'ひつまぶし'] },
    { id: 'g-aichi-3', name: '手羽先', prefecture: 'aichi', category: '肉料理', description: 'カリカリに揚げたスパイシーな手羽先。風来坊と世界の山ちゃんが二大巨頭。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['手羽先', '名古屋めし', '居酒屋'] },

    // ===== 三重県 =====
    { id: 'g-mie-1', name: '伊勢うどん', prefecture: 'mie', category: '麺類', description: '極太の柔らかい麺にたまり醤油ダレを絡めるシンプルなうどん。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['うどん', '伊勢', '名物'] },
    { id: 'g-mie-2', name: '松阪牛', prefecture: 'mie', category: '肉料理', description: '日本三大和牛の一つ。とろけるような霜降りは世界最高クラスの牛肉。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '高級'] },

    // ===== 滋賀県 =====
    { id: 'g-shiga-1', name: '近江牛', prefecture: 'shiga', category: '肉料理', description: '日本三大和牛の一つ。400年の歴史を持つ日本最古のブランド牛。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '高級'] },
    { id: 'g-shiga-2', name: '鮒寿司', prefecture: 'shiga', category: '郷土料理', description: '琵琶湖固有のニゴロブナを使った日本最古の寿司。発酵食品の傑作。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['発酵', '郷土料理', '琵琶湖'] },

    // ===== 京都府 =====
    { id: 'g-kyoto-1', name: '京懐石', prefecture: 'kyoto', category: '和食', description: '旬の食材を繊細に調理した京都の伝統料理。器と盛り付けも芸術品。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['懐石', '和食', '高級'] },
    { id: 'g-kyoto-2', name: '抹茶スイーツ', prefecture: 'kyoto', category: 'スイーツ', description: '宇治抹茶を使ったパフェやわらび餅。老舗茶舗のスイーツは格別。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['抹茶', 'スイーツ', '宇治'] },
    { id: 'g-kyoto-3', name: '湯豆腐', prefecture: 'kyoto', category: '和食', description: '南禅寺周辺の名物。シンプルだからこそ豆腐の旨味が引き立つ一品。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['豆腐', '精進料理', '南禅寺'] },

    // ===== 大阪府 =====
    { id: 'g-osaka-1', name: 'たこ焼き', prefecture: 'osaka', category: '粉もの', description: '大阪が誇るソウルフード。外はカリッと中はトロッの食感が最高。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['たこ焼き', '粉もの', '大阪'] },
    { id: 'g-osaka-2', name: 'お好み焼き', prefecture: 'osaka', category: '粉もの', description: '「粉もんの街」大阪の定番。ふわふわの生地にソースとマヨネーズ。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['お好み焼き', '粉もの', '大阪'] },
    { id: 'g-osaka-3', name: '串カツ', prefecture: 'osaka', category: '揚げ物', description: '新世界の名物。ソースの二度漬け禁止のルールで知られるサクサクの串揚げ。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['串カツ', '新世界', '大阪'] },

    // ===== 兵庫県 =====
    { id: 'g-hyogo-1', name: '神戸牛', prefecture: 'hyogo', category: '肉料理', description: '世界的に有名なブランド牛。繊細な霜降りととろける食感は別格。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '神戸'] },
    { id: 'g-hyogo-2', name: '明石焼き', prefecture: 'hyogo', category: '粉もの', description: 'たこ焼きの元祖とも言われる明石名物。出汁に浸けて食べるふわとろ食感。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['明石焼き', '出汁', '明石'] },

    // ===== 奈良県 =====
    { id: 'g-nara-1', name: '柿の葉寿司', prefecture: 'nara', category: '和食', description: '柿の葉で包んだ押し寿司。サバや鮭の芳醇な味わいが柿の葉の香りと調和。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['寿司', '奈良', '伝統'] },
    { id: 'g-nara-2', name: '三輪そうめん', prefecture: 'nara', category: '麺類', description: 'そうめん発祥の地・三輪のそうめん。極細でコシのある麺は夏の定番。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そうめん', '三輪', '夏'] },

    // ===== 和歌山県 =====
    { id: 'g-wakayama-1', name: '和歌山ラーメン', prefecture: 'wakayama', category: 'ラーメン', description: '豚骨醤油ベースのこってり系ラーメン。寿司と一緒に食べるのが地元流。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '豚骨醤油', '和歌山'] },
    { id: 'g-wakayama-2', name: 'みかん', prefecture: 'wakayama', category: 'フルーツ', description: '有田みかんで有名な日本一の柑橘産地。甘くてジューシーな味わい。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['みかん', 'フルーツ', '有田'] },

    // ===== 鳥取県 =====
    { id: 'g-tottori-1', name: '松葉ガニ', prefecture: 'tottori', category: '海鮮', description: '山陰を代表する冬の味覚。茹でガニ・焼きガニ・カニ刺しで堪能。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['カニ', '冬', '海鮮'] },
    { id: 'g-tottori-2', name: '牛骨ラーメン', prefecture: 'tottori', category: 'ラーメン', description: '鳥取中部のご当地ラーメン。牛骨で取るまろやかなスープが特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '牛骨', 'ご当地'] },

    // ===== 島根県 =====
    { id: 'g-shimane-1', name: '出雲そば', prefecture: 'shimane', category: '麺類', description: '殻ごと挽いた香り高い黒いそば。三段の割子で食べるスタイルが特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '出雲', '割子'] },
    { id: 'g-shimane-2', name: 'しじみ', prefecture: 'shimane', category: '海鮮', description: '宍道湖の大和しじみは日本一。しじみ汁は島根の朝食の定番。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['しじみ', '宍道湖', '汁物'] },

    // ===== 岡山県 =====
    { id: 'g-okayama-1', name: 'デミカツ丼', prefecture: 'okayama', category: '肉料理', description: 'カツ丼にデミグラスソースをかけた岡山名物。濃厚ソースが病みつき。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['カツ丼', 'B級グルメ', '岡山'] },
    { id: 'g-okayama-2', name: '白桃', prefecture: 'okayama', category: 'フルーツ', description: '晴れの国おかやまが誇る高級フルーツ。上品な甘さと芳醇な香り。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['桃', 'フルーツ', '高級'] },

    // ===== 広島県 =====
    { id: 'g-hiroshima-1', name: '広島風お好み焼き', prefecture: 'hiroshima', category: '粉もの', description: '薄い生地に大量のキャベツと麺を重ねた広島スタイル。ヘラで食べるのが通。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['お好み焼き', '広島', '粉もの'] },
    { id: 'g-hiroshima-2', name: '牡蠣', prefecture: 'hiroshima', category: '海鮮', description: '生産量日本一の広島牡蠣。焼き牡蠣・フライ・土手鍋と食べ方も多彩。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['牡蠣', '冬', '海鮮'] },

    // ===== 山口県 =====
    { id: 'g-yamaguchi-1', name: 'ふぐ', prefecture: 'yamaguchi', category: '海鮮', description: '下関名物のふぐ料理。てっさ（刺身）・てっちり（鍋）を堪能。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['ふぐ', '下関', '高級'] },
    { id: 'g-yamaguchi-2', name: '瓦そば', prefecture: 'yamaguchi', category: '麺類', description: '熱した瓦の上で茶そばを焼く山口県の郷土料理。パリパリの食感が楽しい。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '瓦そば', '郷土料理'] },

    // ===== 徳島県 =====
    { id: 'g-tokushima-1', name: '徳島ラーメン', prefecture: 'tokushima', category: 'ラーメン', description: '豚骨醤油ベースに甘辛い豚バラ肉と生卵をトッピング。ご飯のおかず感覚。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '豚骨醤油', '徳島'] },

    // ===== 香川県 =====
    { id: 'g-kagawa-1', name: '讃岐うどん', prefecture: 'kagawa', category: '麺類', description: 'コシの強さが命の讃岐うどん。県内に数百のうどん店がひしめく「うどん県」。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['うどん', '讃岐', 'B級グルメ'] },
    { id: 'g-kagawa-2', name: '骨付鳥', prefecture: 'kagawa', category: '肉料理', description: '丸亀名物のスパイシーな骨付き鶏もも焼き。ビールとの相性は抜群。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['鶏肉', '丸亀', 'ビール'] },

    // ===== 愛媛県 =====
    { id: 'g-ehime-1', name: '鯛めし', prefecture: 'ehime', category: '海鮮', description: '宇和島風は生卵と刺身の漬け丼、松山風は鯛の炊き込みご飯。二種の味が楽しい。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['鯛', '郷土料理', '愛媛'] },
    { id: 'g-ehime-2', name: 'みかんジュース', prefecture: 'ehime', category: 'ドリンク', description: '蛇口からみかんジュースが出る県。100%搾りたてのジュースは格別。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['みかん', 'ジュース', '愛媛'] },

    // ===== 高知県 =====
    { id: 'g-kochi-1', name: 'カツオのたたき', prefecture: 'kochi', category: '海鮮', description: '藁焼きで香ばしく炙ったカツオのたたき。塩やポン酢でシンプルに味わう。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['カツオ', '藁焼き', '高知'] },

    // ===== 福岡県 =====
    { id: 'g-fukuoka-1', name: '博多ラーメン', prefecture: 'fukuoka', category: 'ラーメン', description: '豚骨白濁スープに極細麺。替え玉文化は博多ならでは。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '豚骨', '博多'] },
    { id: 'g-fukuoka-2', name: 'もつ鍋', prefecture: 'fukuoka', category: '郷土料理', description: 'プリプリのもつをニラやキャベツと一緒に煮込む博多の名物鍋。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['鍋', 'もつ', '博多'] },
    { id: 'g-fukuoka-3', name: '水炊き', prefecture: 'fukuoka', category: '郷土料理', description: '鶏のコラーゲンたっぷりの白濁スープで食べる上品な鍋料理。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['鍋', '鶏', '博多'] },

    // ===== 佐賀県 =====
    { id: 'g-saga-1', name: '佐賀牛', prefecture: 'saga', category: '肉料理', description: '全国でもトップレベルのブランド牛。柔らかな肉質と甘い脂が特徴。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '佐賀'] },
    { id: 'g-saga-2', name: '呼子のイカ', prefecture: 'saga', category: '海鮮', description: '呼子の活きイカは透き通る美しさ。コリコリの食感と甘みが絶品。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['イカ', '呼子', '海鮮'] },

    // ===== 長崎県 =====
    { id: 'g-nagasaki-1', name: 'ちゃんぽん', prefecture: 'nagasaki', category: '麺類', description: '豚骨ベースのスープに海鮮と野菜がたっぷり。リンガーハットでも全国展開。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ちゃんぽん', '長崎', '麺'] },
    { id: 'g-nagasaki-2', name: 'カステラ', prefecture: 'nagasaki', category: 'スイーツ', description: 'ポルトガル伝来の長崎名物。ふわふわのスポンジとザラメの食感が絶妙。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['カステラ', 'お土産', '長崎'] },

    // ===== 熊本県 =====
    { id: 'g-kumamoto-1', name: '馬刺し', prefecture: 'kumamoto', category: '肉料理', description: '日本一の消費量を誇る馬肉の刺身。赤身とたてがみの盛り合わせが定番。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['馬刺し', '熊本', '刺身'] },
    { id: 'g-kumamoto-2', name: '太平燕（タイピーエン）', prefecture: 'kumamoto', category: '麺類', description: '春雨入りのちゃんぽん風料理。ヘルシーで地元学校給食でも定番。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['春雨', '中華', '熊本'] },

    // ===== 大分県 =====
    { id: 'g-oita-1', name: 'とり天', prefecture: 'oita', category: '肉料理', description: '鶏肉の天ぷら。大分のソウルフードで、ポン酢やかぼすでさっぱり食べる。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['鶏肉', '天ぷら', '大分'] },
    { id: 'g-oita-2', name: '関あじ・関さば', prefecture: 'oita', category: '海鮮', description: '豊後水道で育った最高級のアジとサバ。一本釣りの活き締めが美味の秘密。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['アジ', 'サバ', '高級'] },

    // ===== 宮崎県 =====
    { id: 'g-miyazaki-1', name: 'チキン南蛮', prefecture: 'miyazaki', category: '肉料理', description: '鶏肉を甘酢に漬けてタルタルソースをかけた宮崎発祥のB級グルメ。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['鶏肉', 'チキン南蛮', '宮崎'] },
    { id: 'g-miyazaki-2', name: '宮崎マンゴー', prefecture: 'miyazaki', category: 'フルーツ', description: '太陽のタマゴの名で知られる高級完熟マンゴー。濃厚な甘さが特徴。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['マンゴー', 'フルーツ', '高級'] },

    // ===== 鹿児島県 =====
    { id: 'g-kagoshima-1', name: '黒豚しゃぶしゃぶ', prefecture: 'kagoshima', category: '肉料理', description: '鹿児島の黒豚はきめ細かく甘い脂身が特徴。しゃぶしゃぶがおすすめ。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['黒豚', 'しゃぶしゃぶ', '鹿児島'] },
    { id: 'g-kagoshima-2', name: 'さつま揚げ', prefecture: 'kagoshima', category: '郷土料理', description: '魚のすり身を揚げた鹿児島の郷土料理。「つけあげ」とも呼ばれる。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['さつま揚げ', '郷土料理', '鹿児島'] },

    // ===== 沖縄県 =====
    { id: 'g-okinawa-1', name: 'ソーキそば', prefecture: 'okinawa', category: '麺類', description: '豚のスペアリブがのった沖縄風そば。あっさりスープと太麺の組み合わせ。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', 'ソーキ', '沖縄'] },
    { id: 'g-okinawa-2', name: 'タコライス', prefecture: 'okinawa', category: '洋食', description: 'メキシコと沖縄の融合グルメ。タコスの具材をご飯に載せたB級グルメ。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['タコライス', 'B級グルメ', '沖縄'] },
    { id: 'g-okinawa-3', name: 'ちんすこう', prefecture: 'okinawa', category: 'スイーツ', description: '琉球王朝時代からの伝統菓子。さくほろ食感と素朴な甘さがお土産に最適。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['お菓子', 'お土産', '沖縄'] },

    // ===== 追加グルメ：北海道 =====
    { id: 'g-hokkaido-4', name: 'スープカレー', prefecture: 'hokkaido', category: 'カレー', description: '札幌発祥のスパイシーなスープカレー。大きな野菜とゴロゴロ具材が特徴。', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format', tags: ['カレー', 'スパイス', '札幌'] },
    { id: 'g-hokkaido-5', name: '旭川ラーメン', prefecture: 'hokkaido', category: 'ラーメン', description: '豚骨と魚介のWスープに中太縮れ麺。ラードで蓋をしたアツアツラーメン。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '旭川', '豚骨'] },
    { id: 'g-hokkaido-6', name: '函館塩ラーメン', prefecture: 'hokkaido', category: 'ラーメン', description: '澄んだ塩味スープに細ストレート麺。あっさりだが深い旨味のラーメン。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '塩', '函館'] },
    { id: 'g-hokkaido-7', name: 'ザンギ', prefecture: 'hokkaido', category: '肉料理', description: '北海道風の唐揚げ。しっかり味付けされた衣とジューシーな鶏肉が特徴。', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format', tags: ['唐揚げ', '鶏肉', '北海道'] },
    { id: 'g-hokkaido-8', name: '石狩鍋', prefecture: 'hokkaido', category: '郷土料理', description: '鮭と野菜を味噌仕立てで煮込む北海道の代表的な鍋料理。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['鍋', '鮭', '味噌'] },
    { id: 'g-hokkaido-9', name: '夕張メロン', prefecture: 'hokkaido', category: 'フルーツ', description: '赤肉メロンの最高峰。果汁がジュワッと溢れる極上の甘さは高級ギフトの定番。', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=600&auto=format', tags: ['メロン', 'フルーツ', '高級'] },

    // ===== 追加グルメ：青森県 =====
    { id: 'g-aomori-3', name: '津軽そば', prefecture: 'aomori', category: '麺類', description: '大豆をつなぎに使った独特の津軽のそば。独特の風味と柔らかな食感。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '津軽', '郷土料理'] },
    { id: 'g-aomori-4', name: 'りんご', prefecture: 'aomori', category: 'フルーツ', description: '生産量日本一の青森りんご。ふじ、つがる、王林など品種も豊富。', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&auto=format', tags: ['りんご', 'フルーツ', '青森'] },

    // ===== 追加グルメ：岩手県 =====
    { id: 'g-iwate-3', name: '盛岡じゃじゃ麺', prefecture: 'iwate', category: '麺類', description: '盛岡三大麺の一つ。肉味噌を絡めた平打ち麺。食後のチータンスープも楽しみ。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['じゃじゃ麺', '盛岡', '肉味噌'] },
    { id: 'g-iwate-4', name: '前沢牛', prefecture: 'iwate', category: '肉料理', description: '岩手が誇るブランド牛。きめ細やかな霜降りと甘い脂身が特徴。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '岩手'] },

    // ===== 追加グルメ：宮城県 =====
    { id: 'g-miyagi-3', name: '笹かまぼこ', prefecture: 'miyagi', category: '海鮮', description: '仙台名物の笹形のかまぼこ。焼きたては香ばしく弾力のある食感。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['かまぼこ', 'お土産', '仙台'] },
    { id: 'g-miyagi-4', name: '松島の牡蠣', prefecture: 'miyagi', category: '海鮮', description: '日本三景・松島の冬の味覚。焼き牡蠣食べ放題が人気。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['牡蠣', '松島', '冬'] },

    // ===== 追加グルメ：秋田県 =====
    { id: 'g-akita-3', name: 'ハタハタ', prefecture: 'akita', category: '海鮮', description: '秋田の県魚。しょっつる鍋やハタハタ寿司など独特の食文化。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['魚', '郷土料理', '冬'] },
    { id: 'g-akita-4', name: '比内地鶏', prefecture: 'akita', category: '肉料理', description: '日本三大美味鶏の一つ。濃厚な旨味ときりたんぽ鍋の組み合わせが絶品。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['鶏肉', '地鶏', '秋田'] },

    // ===== 追加グルメ：山形県 =====
    { id: 'g-yamagata-3', name: '冷やしラーメン', prefecture: 'yamagata', category: 'ラーメン', description: '山形発祥の冷たいラーメン。氷入りのスープが暑い夏にぴったり。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '冷やし', '夏'] },
    { id: 'g-yamagata-4', name: '米沢牛', prefecture: 'yamagata', category: '肉料理', description: '日本三大和牛の一つ。上質な霜降りと深い旨味が特徴の最高級ブランド牛。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'ブランド牛', '高級'] },

    // ===== 追加グルメ：福島県 =====
    { id: 'g-fukushima-3', name: 'ねぎそば（大内宿）', prefecture: 'fukushima', category: '麺類', description: '長ネギ一本で食べる大内宿名物のそば。箸の代わりにネギを使う独特のスタイル。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', 'ネギ', '大内宿'] },
    { id: 'g-fukushima-4', name: '円盤餃子', prefecture: 'fukushima', category: '中華', description: 'フライパンに円形に並べて焼く福島市名物の餃子。パリパリの羽根つき。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['餃子', '福島', 'B級グルメ'] },

    // ===== 追加グルメ：東京都 =====
    { id: 'g-tokyo-4', name: '深川めし', prefecture: 'tokyo', category: '和食', description: 'あさりを炊き込んだ江戸っ子の味。深川の漁師飯がルーツの下町グルメ。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['あさり', '丼', '下町'] },
    { id: 'g-tokyo-5', name: '人形焼き', prefecture: 'tokyo', category: 'スイーツ', description: '浅草・人形町名物のカステラ菓子。こし餡入りと餡なしの2種が人気。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['お菓子', '浅草', 'お土産'] },
    { id: 'g-tokyo-6', name: '天ぷら', prefecture: 'tokyo', category: '和食', description: '江戸前天ぷらの本場。ごま油でカラッと揚げたサクサクの天ぷらは絶品。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['天ぷら', '江戸前', '高級'] },

    // ===== 追加グルメ：神奈川県 =====
    { id: 'g-kanagawa-3', name: '横須賀海軍カレー', prefecture: 'kanagawa', category: 'カレー', description: '海軍のレシピを再現したご当地カレー。牛乳とサラダのセットが定番スタイル。', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format', tags: ['カレー', '横須賀', '海軍'] },
    { id: 'g-kanagawa-4', name: 'サンマーメン', prefecture: 'kanagawa', category: 'ラーメン', description: '横浜発祥のご当地ラーメン。もやし入り餡かけラーメンが寒い日にぴったり。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '横浜', '餡かけ'] },

    // ===== 追加グルメ：新潟県 =====
    { id: 'g-niigata-3', name: '新潟タレかつ丼', prefecture: 'niigata', category: '肉料理', description: '甘辛い醤油ダレにくぐらせた薄カツを丼に。卵でとじない新潟スタイル。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['カツ丼', '新潟', 'B級グルメ'] },
    { id: 'g-niigata-4', name: '日本酒', prefecture: 'niigata', category: 'ドリンク', description: '酒蔵数日本一の新潟。淡麗辛口の越乃寒梅や八海山などの銘酒が揃う。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['日本酒', '酒蔵', '新潟'] },

    // ===== 追加グルメ：富山県 =====
    { id: 'g-toyama-3', name: 'ホタルイカ', prefecture: 'toyama', category: '海鮮', description: '春の味覚。富山湾で幻想的に青く光るホタルイカの沖漬けや酢味噌和え。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['ホタルイカ', '春', '富山湾'] },
    { id: 'g-toyama-4', name: 'ブリしゃぶ', prefecture: 'toyama', category: '海鮮', description: '氷見の寒ブリをさっとしゃぶしゃぶで。脂の乗った冬の極上グルメ。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['ブリ', '冬', '氷見'] },

    // ===== 追加グルメ：石川県 =====
    { id: 'g-ishikawa-3', name: 'のどぐろ', prefecture: 'ishikawa', category: '海鮮', description: '「白身のトロ」と呼ばれる高級魚。塩焼きで脂の旨味を堪能。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['のどぐろ', '高級', '焼き魚'] },
    { id: 'g-ishikawa-4', name: '治部煮', prefecture: 'ishikawa', category: '郷土料理', description: '鴨肉やすだれ麩を使った金沢の伝統的な煮物。加賀料理の代表格。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['加賀料理', '鴨', '伝統'] },

    // ===== 追加グルメ：長野県 =====
    { id: 'g-nagano-3', name: '馬刺し（長野）', prefecture: 'nagano', category: '肉料理', description: '信州名物の桜肉。赤身が中心で、おろし生姜と醤油でさっぱりといただく。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['馬刺し', '信州', '刺身'] },
    { id: 'g-nagano-4', name: '野沢菜漬け', prefecture: 'nagano', category: '郷土料理', description: '信州を代表する漬物。シャキシャキの食感と乳酸発酵の酸味が美味。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['漬物', '信州', '発酵'] },

    // ===== 追加グルメ：静岡県 =====
    { id: 'g-shizuoka-3', name: '浜松餃子', prefecture: 'shizuoka', category: '中華', description: '円形に並べて中央にもやしを添えるスタイル。宇都宮と並ぶ餃子の街。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['餃子', '浜松', 'B級グルメ'] },
    { id: 'g-shizuoka-4', name: '富士宮やきそば', prefecture: 'shizuoka', category: '麺類', description: 'B-1グランプリ初代王者。もちもちの蒸し麺と肉かす、だし粉が特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['やきそば', 'B級グルメ', '富士宮'] },
    { id: 'g-shizuoka-5', name: '桜えび', prefecture: 'shizuoka', category: '海鮮', description: '駿河湾だけで獲れる希少な桜えび。かき揚げや生食で楽しむ。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['桜えび', '駿河湾', '春'] },

    // ===== 追加グルメ：愛知県 =====
    { id: 'g-aichi-4', name: '台湾ラーメン', prefecture: 'aichi', category: 'ラーメン', description: '名古屋発祥の激辛ラーメン。台湾ミンチとニンニクが効いたスパイシーな一杯。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '辛い', '名古屋めし'] },
    { id: 'g-aichi-5', name: 'きしめん', prefecture: 'aichi', category: '麺類', description: '薄く平たい名古屋の伝統的なうどん。つるりとした食感が特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['きしめん', '名古屋めし', '麺'] },
    { id: 'g-aichi-6', name: '味噌煮込みうどん', prefecture: 'aichi', category: '麺類', description: '八丁味噌の濃厚な汁に硬い麺を土鍋で煮込む名古屋名物。冬の定番。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['うどん', '味噌', '名古屋めし'] },
    { id: 'g-aichi-7', name: '小倉トースト', prefecture: 'aichi', category: 'スイーツ', description: 'トーストにバターとあんこを塗った名古屋モーニングの定番メニュー。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['トースト', 'モーニング', '名古屋めし'] },

    // ===== 追加グルメ：三重県 =====
    { id: 'g-mie-3', name: '赤福', prefecture: 'mie', category: 'スイーツ', description: 'お伊勢参りの定番土産。こし餡で餅を包んだ三重の銘菓。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['和菓子', 'お土産', '伊勢'] },
    { id: 'g-mie-4', name: '伊勢海老', prefecture: 'mie', category: '海鮮', description: '志摩半島で獲れる高級食材。お造りやグリル、味噌汁で豪華に楽しむ。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['伊勢海老', '高級', '海鮮'] },

    // ===== 追加グルメ：京都府 =====
    { id: 'g-kyoto-4', name: '京漬物', prefecture: 'kyoto', category: '和食', description: '千枚漬け、すぐき、しば漬けなど京の三大漬物。繊細な味わいが楽しめる。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['漬物', '伝統', '京都'] },
    { id: 'g-kyoto-5', name: '八つ橋', prefecture: 'kyoto', category: 'スイーツ', description: '京都土産の定番。ニッキの香りが効いた生八つ橋とカリカリの焼き八つ橋。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['八つ橋', 'お土産', '京都'] },
    { id: 'g-kyoto-6', name: 'にしんそば', prefecture: 'kyoto', category: '麺類', description: '甘辛く炊いた身欠きにしんをのせた京都発祥のそば。冬の定番。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '京都', 'にしん'] },

    // ===== 追加グルメ：大阪府 =====
    { id: 'g-osaka-4', name: '551蓬莱の豚まん', prefecture: 'osaka', category: '中華', description: '大阪のソウルフード。ジューシーな豚肉餡がぎっしり詰まった肉まん。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['豚まん', '551', '大阪'] },
    { id: 'g-osaka-5', name: 'どて焼き', prefecture: 'osaka', category: '郷土料理', description: '牛すじを味噌でじっくり煮込んだ大阪の下町グルメ。お酒のお供に最高。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛すじ', '味噌', '居酒屋'] },

    // ===== 追加グルメ：兵庫県 =====
    { id: 'g-hyogo-3', name: '姫路おでん', prefecture: 'hyogo', category: '郷土料理', description: '生姜醤油で食べる姫路独自のおでん。上品な味わいが特徴。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['おでん', '姫路', '生姜醤油'] },
    { id: 'g-hyogo-4', name: '出石皿そば', prefecture: 'hyogo', category: '麺類', description: '小皿に盛られた出石名物のそば。5皿で一人前、薬味と出汁で楽しむ。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['そば', '出石', '皿そば'] },

    // ===== 追加グルメ：広島県 =====
    { id: 'g-hiroshima-3', name: 'あなご飯', prefecture: 'hiroshima', category: '海鮮', description: '宮島名物の穴子飯弁当。タレで焼いたふっくら穴子が絶品。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['穴子', '宮島', '駅弁'] },
    { id: 'g-hiroshima-4', name: '尾道ラーメン', prefecture: 'hiroshima', category: 'ラーメン', description: '背脂が浮く醤油ベースのラーメン。平打ち麺との相性が抜群。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '尾道', '醤油'] },
    { id: 'g-hiroshima-5', name: 'もみじ饅頭', prefecture: 'hiroshima', category: 'スイーツ', description: '宮島土産の定番。もみじの形をしたカステラ生地にあんこが入ったお菓子。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['饅頭', 'お土産', '宮島'] },

    // ===== 追加グルメ：徳島県 =====
    { id: 'g-tokushima-2', name: '鯛めし（徳島）', prefecture: 'tokushima', category: '海鮮', description: '鳴門産の鯛を丸ごと一匹炊き込んだ贅沢な鯛めし。鯛の旨味が米に染み込む。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['鯛', '鳴門', '炊き込み'] },
    { id: 'g-tokushima-3', name: 'すだち', prefecture: 'tokushima', category: 'フルーツ', description: '全国シェア98%を誇る徳島の特産柑橘。爽やかな酸味でどんな料理にも合う。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['すだち', '柑橘', '徳島'] },

    // ===== 追加グルメ：香川県 =====
    { id: 'g-kagawa-3', name: 'オリーブ牛', prefecture: 'kagawa', category: '肉料理', description: 'オリーブ搾りかすを飼料に育てた讃岐のブランド牛。さっぱりした脂が特徴。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['牛肉', 'オリーブ', '讃岐'] },

    // ===== 追加グルメ：高知県 =====
    { id: 'g-kochi-2', name: '皿鉢料理', prefecture: 'kochi', category: '郷土料理', description: '大皿に盛り付けた高知の宴席料理。刺身、寿司、煮物が豪快に並ぶ。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['郷土料理', '宴席', '高知'] },
    { id: 'g-kochi-3', name: '土佐酒', prefecture: 'kochi', category: 'ドリンク', description: '酒豪の県・高知が誇る日本酒。辛口の土佐鶴や酔鯨など銘酒揃い。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['日本酒', '辛口', '高知'] },

    // ===== 追加グルメ：福岡県 =====
    { id: 'g-fukuoka-4', name: '明太子', prefecture: 'fukuoka', category: '海鮮', description: '博多名物の辛子明太子。ふくやや福さ屋など老舗の味は全国にファン多数。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['明太子', '博多', 'お土産'] },
    { id: 'g-fukuoka-5', name: '博多うどん', prefecture: 'fukuoka', category: '麺類', description: '柔らかいコシのないうどんが特徴。ごぼう天うどんが地元の定番。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['うどん', '博多', 'ごぼう天'] },

    // ===== 追加グルメ：長崎県 =====
    { id: 'g-nagasaki-3', name: '皿うどん', prefecture: 'nagasaki', category: '麺類', description: 'パリパリの揚げ麺にあんかけをかけた長崎名物。ウスターソースをかけるのが通。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['皿うどん', '長崎', '麺'] },
    { id: 'g-nagasaki-4', name: 'トルコライス', prefecture: 'nagasaki', category: '洋食', description: 'ピラフ、スパゲッティ、トンカツのワンプレート。長崎のご当地洋食。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['洋食', '長崎', 'B級グルメ'] },

    // ===== 追加グルメ：熊本県 =====
    { id: 'g-kumamoto-3', name: '熊本ラーメン', prefecture: 'kumamoto', category: 'ラーメン', description: '豚骨ベースにニンニクチップをトッピング。博多とは違うまろやかなスープ。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '豚骨', 'ニンニク'] },
    { id: 'g-kumamoto-4', name: 'からし蓮根', prefecture: 'kumamoto', category: '郷土料理', description: 'レンコンの穴にからし味噌を詰めて揚げた熊本名物。ピリッとした辛さが特徴。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['からし蓮根', '揚げ物', '熊本'] },

    // ===== 追加グルメ：大分県 =====
    { id: 'g-oita-3', name: '別府冷麺', prefecture: 'oita', category: '麺類', description: '別府のご当地麺。弾力のある麺に和風だしスープ。牛肉や韓国風具材がのる。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['冷麺', '別府', '麺'] },
    { id: 'g-oita-4', name: 'だんご汁', prefecture: 'oita', category: '郷土料理', description: '小麦粉を平たく延ばしただんごを野菜と味噌汁で煮込む大分の家庭料理。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['だんご', '味噌汁', '郷土料理'] },

    // ===== 追加グルメ：宮崎県 =====
    { id: 'g-miyazaki-3', name: '炭火焼地鶏', prefecture: 'miyazaki', category: '肉料理', description: '地鶏を炭火で豪快に焼く宮崎の名物。ジューシーな旨味と香ばしさが絶品。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['地鶏', '炭火焼', '宮崎'] },
    { id: 'g-miyazaki-4', name: '冷や汁', prefecture: 'miyazaki', category: '郷土料理', description: '味噌と魚のすり身の冷たい汁をご飯にかける夏の郷土料理。暑い夏にぴったり。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['冷や汁', '夏', '郷土料理'] },

    // ===== 追加グルメ：鹿児島県 =====
    { id: 'g-kagoshima-3', name: '鹿児島ラーメン', prefecture: 'kagoshima', category: 'ラーメン', description: '豚骨ベースにキャベツの甘みが効いたまろやかなスープ。焦がしネギが特徴。', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format', tags: ['ラーメン', '豚骨', '鹿児島'] },
    { id: 'g-kagoshima-4', name: '芋焼酎', prefecture: 'kagoshima', category: 'ドリンク', description: 'さつまいもから造る鹿児島の本格焼酎。森伊蔵や魔王などプレミアム銘柄も。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['焼酎', 'さつまいも', '鹿児島'] },
    { id: 'g-kagoshima-5', name: 'きびなご', prefecture: 'kagoshima', category: '海鮮', description: '鹿児島の特産小魚。銀色に輝く刺身は菊の花のように美しく盛り付ける。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['小魚', '刺身', '鹿児島'] },

    // ===== 追加グルメ：沖縄県 =====
    { id: 'g-okinawa-4', name: 'ゴーヤーチャンプルー', prefecture: 'okinawa', category: '郷土料理', description: 'ゴーヤと豆腐、豚肉を炒めた沖縄のソウルフード。苦味と旨味のバランスが絶妙。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format', tags: ['チャンプルー', '家庭料理', '沖縄'] },
    { id: 'g-okinawa-5', name: 'サーターアンダギー', prefecture: 'okinawa', category: 'スイーツ', description: '沖縄版ドーナツ。外はカリッと中はふんわり。素朴な甘さが魅力。', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format', tags: ['ドーナツ', 'おやつ', '沖縄'] },
    { id: 'g-okinawa-6', name: '泡盛', prefecture: 'okinawa', category: 'ドリンク', description: '600年の歴史を持つ沖縄の蒸留酒。古酒（クース）は熟成により深い味わいに。', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&auto=format', tags: ['泡盛', '古酒', '沖縄'] },
    { id: 'g-okinawa-7', name: 'ラフテー', prefecture: 'okinawa', category: '肉料理', description: '豚の三枚肉を泡盛と黒砂糖でじっくり煮込んだ沖縄風角煮。トロトロに柔らかい。', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format', tags: ['豚肉', '角煮', '沖縄'] },
    { id: 'g-okinawa-8', name: '海ぶどう', prefecture: 'okinawa', category: '海鮮', description: 'プチプチした食感が楽しい沖縄の海藻。ポン酢や三杯酢でさっぱりと。', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format', tags: ['海藻', 'プチプチ', '沖縄'] },
];

/**
 * 都道府県IDからグルメ一覧を取得
 */
export function getGourmetByPrefecture(prefectureId) {
    return gourmet.filter(g => g.prefecture === prefectureId);
}

/**
 * カテゴリでグルメを絞り込み
 */
export function getGourmetByCategory(category) {
    return gourmet.filter(g => g.category === category);
}

/**
 * テキスト検索
 */
export function searchGourmet(query) {
    const q = query.toLowerCase();
    return gourmet.filter(g =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.tags.some(t => t.toLowerCase().includes(q))
    );
}

/**
 * グルメカテゴリ一覧を取得
 */
export function getGourmetCategories() {
    return [...new Set(gourmet.map(g => g.category))];
}
