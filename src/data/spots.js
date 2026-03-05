/**
 * 47都道府県の観光地データ
 * 各県の代表的な観光スポットを管理
 */

export const spots = [
    // ===== 北海道 =====
    { id: 's-hokkaido-1', name: '富良野ラベンダー畑', prefecture: 'hokkaido', category: '自然', description: '夏には一面に広がる紫色のラベンダーが絶景。ファーム富田が特に有名。', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&auto=format', tags: ['花', '夏', '絶景'] },
    { id: 's-hokkaido-2', name: '小樽運河', prefecture: 'hokkaido', category: '歴史', description: '石造りの倉庫群とガス灯が並ぶレトロな運河。夜のライトアップは幻想的。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['レトロ', '夜景', '散策'] },
    { id: 's-hokkaido-3', name: '旭山動物園', prefecture: 'hokkaido', category: 'レジャー', description: '行動展示が特徴的な人気動物園。ペンギンの散歩は冬の名物。', image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&auto=format', tags: ['動物園', '家族', '冬'] },

    // ===== 青森県 =====
    { id: 's-aomori-1', name: '弘前城', prefecture: 'aomori', category: '歴史', description: '桜の名所として全国的に有名な城。天守閣と約2,600本の桜が美しい。', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format', tags: ['城', '桜', '春'] },
    { id: 's-aomori-2', name: '奥入瀬渓流', prefecture: 'aomori', category: '自然', description: '十和田湖から流れ出す美しい渓流。新緑と紅葉の季節が特に見事。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['渓流', '紅葉', '自然'] },
    { id: 's-aomori-3', name: 'ねぶた祭り会場', prefecture: 'aomori', category: '文化', description: '毎年8月に開催される日本を代表する火祭り。巨大なねぶたが街を練り歩く。', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b386?w=600&auto=format', tags: ['祭り', '夏', '伝統'] },

    // ===== 岩手県 =====
    { id: 's-iwate-1', name: '中尊寺金色堂', prefecture: 'iwate', category: '歴史', description: '世界遺産・平泉の象徴。金箔に覆われた阿弥陀堂は奥州藤原氏の栄華を伝える。', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&auto=format', tags: ['世界遺産', '寺院', '歴史'] },
    { id: 's-iwate-2', name: '龍泉洞', prefecture: 'iwate', category: '自然', description: '日本三大鍾乳洞の一つ。地底湖の透明度は世界有数の美しさ。', image: 'https://images.unsplash.com/photo-1504870712474-3783a76f1d90?w=600&auto=format', tags: ['鍾乳洞', '地底湖', '神秘'] },

    // ===== 宮城県 =====
    { id: 's-miyagi-1', name: '松島', prefecture: 'miyagi', category: '自然', description: '日本三景の一つ。260余りの島々が浮かぶ海は息をのむ美しさ。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['日本三景', '海', '絶景'] },
    { id: 's-miyagi-2', name: '仙台城跡', prefecture: 'miyagi', category: '歴史', description: '伊達政宗が築いた城の跡地。仙台市街を一望できる展望スポット。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '展望', '歴史'] },

    // ===== 秋田県 =====
    { id: 's-akita-1', name: '角館武家屋敷通り', prefecture: 'akita', category: '歴史', description: 'みちのくの小京都と呼ばれる武家屋敷群。春のしだれ桜が特に見事。', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format', tags: ['武家屋敷', '桜', '歴史'] },
    { id: 's-akita-2', name: '田沢湖', prefecture: 'akita', category: '自然', description: '日本一の深さを誇る湖。コバルトブルーの水面と辰子像が美しい。', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format', tags: ['湖', '絶景', '自然'] },

    // ===== 山形県 =====
    { id: 's-yamagata-1', name: '蔵王温泉・樹氷', prefecture: 'yamagata', category: '自然', description: '冬の蔵王に現れる巨大な樹氷群（スノーモンスター）は圧巻の自然芸術。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['樹氷', '温泉', '冬'] },
    { id: 's-yamagata-2', name: '山寺（立石寺）', prefecture: 'yamagata', category: '歴史', description: '松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだ名刹。1,015段の石段を登る。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['寺院', '俳句', '絶景'] },

    // ===== 福島県 =====
    { id: 's-fukushima-1', name: '鶴ヶ城（会津若松城）', prefecture: 'fukushima', category: '歴史', description: '赤瓦が美しい名城。戊辰戦争の舞台としても知られ、桜の名所でもある。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '桜', '歴史'] },
    { id: 's-fukushima-2', name: '五色沼', prefecture: 'fukushima', category: '自然', description: '裏磐梯にある神秘的な沼群。季節や天候で色が変わる幻想的な景色。', image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format', tags: ['沼', '紅葉', '神秘'] },

    // ===== 茨城県 =====
    { id: 's-ibaraki-1', name: '偕楽園', prefecture: 'ibaraki', category: '歴史', description: '日本三名園の一つ。約3,000本の梅が咲き誇る春は特に美しい。', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format', tags: ['庭園', '梅', '春'] },
    { id: 's-ibaraki-2', name: 'ひたち海浜公園', prefecture: 'ibaraki', category: '自然', description: '春のネモフィラ、秋のコキアなど四季折々の花が圧巻の国営公園。', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&auto=format', tags: ['花', '公園', '絶景'] },

    // ===== 栃木県 =====
    { id: 's-tochigi-1', name: '日光東照宮', prefecture: 'tochigi', category: '歴史', description: '徳川家康を祀る世界遺産の神社。「見ざる・言わざる・聞かざる」の三猿が有名。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['世界遺産', '神社', '歴史'] },
    { id: 's-tochigi-2', name: '華厳の滝', prefecture: 'tochigi', category: '自然', description: '日本三名瀑の一つ。高さ97mの滝が轟音とともに流れ落ちる迫力ある景観。', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format', tags: ['滝', '自然', '絶景'] },

    // ===== 群馬県 =====
    { id: 's-gunma-1', name: '草津温泉・湯畑', prefecture: 'gunma', category: '温泉', description: '日本を代表する名湯。街の中心にある湯畑は草津のシンボル。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '湯畑', '名湯'] },
    { id: 's-gunma-2', name: '富岡製糸場', prefecture: 'gunma', category: '歴史', description: '世界遺産の近代産業遺産。日本の近代化を支えた製糸工場。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['世界遺産', '歴史', '産業'] },

    // ===== 埼玉県 =====
    { id: 's-saitama-1', name: '川越（小江戸）', prefecture: 'saitama', category: '歴史', description: '蔵造りの町並みが残る「小江戸」。時の鐘や菓子屋横丁が人気。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['レトロ', '散策', '歴史'] },
    { id: 's-saitama-2', name: '秩父・長瀞', prefecture: 'saitama', category: '自然', description: '荒川の渓谷美と岩畳が見事。ラフティングや紅葉狩りが人気。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['渓谷', '紅葉', 'アクティビティ'] },

    // ===== 千葉県 =====
    { id: 's-chiba-1', name: '鴨川シーワールド', prefecture: 'chiba', category: 'レジャー', description: 'シャチのパフォーマンスが大人気の水族館。海の生き物たちと出会える。', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format', tags: ['水族館', '家族', 'シャチ'] },
    { id: 's-chiba-2', name: '九十九里浜', prefecture: 'chiba', category: '自然', description: '約66kmにわたる長大な砂浜。サーフィンや海水浴のメッカ。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['海', 'サーフィン', '夏'] },

    // ===== 東京都 =====
    { id: 's-tokyo-1', name: '浅草寺・雷門', prefecture: 'tokyo', category: '歴史', description: '東京最古の寺院。雷門の大提灯と仲見世通りは東京を代表する観光スポット。', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format', tags: ['寺院', '下町', '伝統'] },
    { id: 's-tokyo-2', name: '東京スカイツリー', prefecture: 'tokyo', category: 'レジャー', description: '高さ634mの電波塔。展望デッキからの眺望は圧巻。', image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&auto=format', tags: ['展望', 'ランドマーク', '夜景'] },
    { id: 's-tokyo-3', name: '明治神宮', prefecture: 'tokyo', category: '歴史', description: '都心に広がる森に囲まれた神社。初詣の参拝者数日本一。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['神社', '森', 'パワースポット'] },

    // ===== 神奈川県 =====
    { id: 's-kanagawa-1', name: '鎌倉大仏', prefecture: 'kanagawa', category: '歴史', description: '高徳院にある国宝の阿弥陀如来像。高さ約13mの大仏は鎌倉のシンボル。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['大仏', '鎌倉', '国宝'] },
    { id: 's-kanagawa-2', name: '箱根', prefecture: 'kanagawa', category: '温泉', description: '富士山を望む温泉リゾート地。芦ノ湖や大涌谷など見どころ満載。', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format', tags: ['温泉', '富士山', 'リゾート'] },
    { id: 's-kanagawa-3', name: '江の島', prefecture: 'kanagawa', category: '自然', description: '湘南を代表する観光地。展望灯台からの360度パノラマは絶景。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['海', '展望', '散策'] },

    // ===== 新潟県 =====
    { id: 's-niigata-1', name: '佐渡島', prefecture: 'niigata', category: '自然', description: '金山の歴史と豊かな自然が魅力の離島。たらい舟体験が人気。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['離島', '金山', '自然'] },
    { id: 's-niigata-2', name: '清津峡', prefecture: 'niigata', category: '自然', description: '日本三大峡谷の一つ。トンネル展望台の水鏡アートが話題。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['峡谷', 'アート', '絶景'] },

    // ===== 富山県 =====
    { id: 's-toyama-1', name: '立山黒部アルペンルート', prefecture: 'toyama', category: '自然', description: '標高3,000m級の山岳ルート。春の雪の大谷は高さ20mの雪壁が圧巻。', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format', tags: ['山岳', '雪の大谷', '絶景'] },
    { id: 's-toyama-2', name: '五箇山合掌造り集落', prefecture: 'toyama', category: '歴史', description: '世界遺産の合掌造り集落。雪深い山里に残る日本の原風景。', image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&auto=format', tags: ['世界遺産', '合掌造り', '冬'] },

    // ===== 石川県 =====
    { id: 's-ishikawa-1', name: '兼六園', prefecture: 'ishikawa', category: '歴史', description: '日本三名園の一つ。四季折々の美しさを見せる回遊式庭園。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['庭園', '日本三名園', '四季'] },
    { id: 's-ishikawa-2', name: 'ひがし茶屋街', prefecture: 'ishikawa', category: '歴史', description: '金沢に残る情緒ある茶屋街。格子戸の建物が立ち並ぶ風情ある通り。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['茶屋街', '金沢', '散策'] },

    // ===== 福井県 =====
    { id: 's-fukui-1', name: '東尋坊', prefecture: 'fukui', category: '自然', description: '日本海に突き出た柱状節理の断崖絶壁。世界にも3箇所しかない地質景観。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['断崖', '日本海', '絶景'] },
    { id: 's-fukui-2', name: '永平寺', prefecture: 'fukui', category: '歴史', description: '曹洞宗の大本山。深い杉木立に囲まれた荘厳な禅寺。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['寺院', '禅', '荘厳'] },

    // ===== 山梨県 =====
    { id: 's-yamanashi-1', name: '富士五湖', prefecture: 'yamanashi', category: '自然', description: '富士山の麓に広がる五つの湖。逆さ富士が映る絶景スポット。', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format', tags: ['富士山', '湖', '絶景'] },
    { id: 's-yamanashi-2', name: '昇仙峡', prefecture: 'yamanashi', category: '自然', description: '日本一の渓谷美と称される景勝地。仙娥滝や覚円峰が見どころ。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['渓谷', '紅葉', '滝'] },

    // ===== 長野県 =====
    { id: 's-nagano-1', name: '上高地', prefecture: 'nagano', category: '自然', description: '北アルプスの山岳リゾート。河童橋から望む穂高連峰は日本屈指の絶景。', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format', tags: ['山岳', '絶景', '自然'] },
    { id: 's-nagano-2', name: '松本城', prefecture: 'nagano', category: '歴史', description: '国宝五城の一つ。黒と白のコントラストが美しい現存天守。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '国宝', '歴史'] },
    { id: 's-nagano-3', name: '地獄谷野猿公苑', prefecture: 'nagano', category: 'レジャー', description: '温泉に入るニホンザルで世界的に有名。冬季の雪猿は必見。', image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&auto=format', tags: ['温泉猿', '冬', '動物'] },

    // ===== 岐阜県 =====
    { id: 's-gifu-1', name: '白川郷', prefecture: 'gifu', category: '歴史', description: '世界遺産の合掌造り集落。冬のライトアップは幻想的な人気イベント。', image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&auto=format', tags: ['世界遺産', '合掌造り', '冬'] },
    { id: 's-gifu-2', name: '高山の古い町並み', prefecture: 'gifu', category: '歴史', description: '飛騨の小京都と呼ばれる城下町。江戸時代の風情が残る町並み。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['町並み', '飛騨', '散策'] },

    // ===== 静岡県 =====
    { id: 's-shizuoka-1', name: '三保の松原', prefecture: 'shizuoka', category: '自然', description: '世界遺産「富士山」の構成資産。松林越しに富士山を望む絶景。', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format', tags: ['富士山', '世界遺産', '松原'] },
    { id: 's-shizuoka-2', name: '熱海温泉', prefecture: 'shizuoka', category: '温泉', description: '東京から近い人気温泉リゾート。花火大会や梅園など見どころも多数。', image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format', tags: ['温泉', 'リゾート', '花火'] },

    // ===== 愛知県 =====
    { id: 's-aichi-1', name: '名古屋城', prefecture: 'aichi', category: '歴史', description: '金のしゃちほこで知られる名城。本丸御殿の復元は必見。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '金鯱', '歴史'] },
    { id: 's-aichi-2', name: '犬山城', prefecture: 'aichi', category: '歴史', description: '国宝五城の一つ。木曽川沿いの小高い山の上に建つ現存天守。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '国宝', '絶景'] },

    // ===== 三重県 =====
    { id: 's-mie-1', name: '伊勢神宮', prefecture: 'mie', category: '歴史', description: '日本最高峰の神社。内宮・外宮を巡り、おかげ横丁での食べ歩きも楽しい。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['神社', 'パワースポット', '伝統'] },
    { id: 's-mie-2', name: '鳥羽水族館', prefecture: 'mie', category: 'レジャー', description: '日本最大級の水族館。ジュゴンに会える日本唯一の施設。', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format', tags: ['水族館', '家族', 'ジュゴン'] },

    // ===== 滋賀県 =====
    { id: 's-shiga-1', name: '琵琶湖', prefecture: 'shiga', category: '自然', description: '日本最大の湖。湖畔サイクリングやウォータースポーツが人気。', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format', tags: ['湖', 'サイクリング', '絶景'] },
    { id: 's-shiga-2', name: '彦根城', prefecture: 'shiga', category: '歴史', description: '国宝の現存天守。ひこにゃんでも有名な井伊家の城。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '国宝', 'ひこにゃん'] },

    // ===== 京都府 =====
    { id: 's-kyoto-1', name: '清水寺', prefecture: 'kyoto', category: '歴史', description: '京都を代表する世界遺産。清水の舞台から望む京都市街と紅葉は絶景。', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format', tags: ['世界遺産', '寺院', '紅葉'] },
    { id: 's-kyoto-2', name: '伏見稲荷大社', prefecture: 'kyoto', category: '歴史', description: '千本鳥居で世界的に有名。朱色の鳥居が連なる幻想的な参道。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['神社', '千本鳥居', 'フォトジェニック'] },
    { id: 's-kyoto-3', name: '嵐山・竹林の小径', prefecture: 'kyoto', category: '自然', description: '天に向かって伸びる竹林の中を歩く神秘的な散策路。渡月橋も必見。', image: 'https://images.unsplash.com/photo-1580100586938-02822d99c4a8?w=600&auto=format', tags: ['竹林', '嵐山', '散策'] },

    // ===== 大阪府 =====
    { id: 's-osaka-1', name: '大阪城', prefecture: 'osaka', category: '歴史', description: '太閤秀吉が築いた天下の名城。桜と城のコラボレーションが美しい。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '桜', '歴史'] },
    { id: 's-osaka-2', name: '道頓堀', prefecture: 'osaka', category: '文化', description: 'グリコの看板で有名な大阪随一の繁華街。食い倒れの街を堪能。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['繁華街', 'グルメ', 'ネオン'] },
    { id: 's-osaka-3', name: 'ユニバーサル・スタジオ・ジャパン', prefecture: 'osaka', category: 'レジャー', description: '世界最高クラスのテーマパーク。ハリーポッターやマリオの世界を体験。', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format', tags: ['テーマパーク', '家族', 'エンタメ'] },

    // ===== 兵庫県 =====
    { id: 's-hyogo-1', name: '姫路城', prefecture: 'hyogo', category: '歴史', description: '世界遺産の白鷺城。日本の城の最高傑作と称される国宝天守。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['世界遺産', '城', '国宝'] },
    { id: 's-hyogo-2', name: '有馬温泉', prefecture: 'hyogo', category: '温泉', description: '日本三古湯の一つ。金泉・銀泉の二種の湯が楽しめる名湯。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '金泉', '名湯'] },

    // ===== 奈良県 =====
    { id: 's-nara-1', name: '東大寺・奈良の大仏', prefecture: 'nara', category: '歴史', description: '世界最大級の木造建築と大仏。奈良公園の鹿と戯れるのも楽しい。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['世界遺産', '大仏', '鹿'] },
    { id: 's-nara-2', name: '吉野山', prefecture: 'nara', category: '自然', description: '約3万本の桜が山全体をピンクに染める日本一の桜の名所。', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format', tags: ['桜', '山', '絶景'] },

    // ===== 和歌山県 =====
    { id: 's-wakayama-1', name: '那智の滝', prefecture: 'wakayama', category: '自然', description: '落差133mの日本一の直瀑。熊野那智大社とともに世界遺産に登録。', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format', tags: ['滝', '世界遺産', '熊野'] },
    { id: 's-wakayama-2', name: '高野山', prefecture: 'wakayama', category: '歴史', description: '空海が開いた真言宗の聖地。宿坊体験や奥之院の神秘的な参道が人気。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['世界遺産', '宿坊', '聖地'] },

    // ===== 鳥取県 =====
    { id: 's-tottori-1', name: '鳥取砂丘', prefecture: 'tottori', category: '自然', description: '日本最大級の砂丘。ラクダ体験やパラグライダーなどアクティビティも充実。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['砂丘', 'アクティビティ', '絶景'] },

    // ===== 島根県 =====
    { id: 's-shimane-1', name: '出雲大社', prefecture: 'shimane', category: '歴史', description: '縁結びの神様として有名。巨大なしめ縄と神楽殿は圧巻。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['神社', '縁結び', 'パワースポット'] },
    { id: 's-shimane-2', name: '足立美術館', prefecture: 'shimane', category: '文化', description: '日本庭園ランキング20年連続1位の美しい庭園と横山大観コレクション。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['美術館', '日本庭園', 'アート'] },

    // ===== 岡山県 =====
    { id: 's-okayama-1', name: '倉敷美観地区', prefecture: 'okayama', category: '歴史', description: '白壁の蔵屋敷と柳並木の倉敷川沿いは美しい文化地区。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['美観地区', 'レトロ', '散策'] },
    { id: 's-okayama-2', name: '後楽園', prefecture: 'okayama', category: '歴史', description: '日本三名園の一つ。岡山城を借景とした美しい回遊式庭園。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['庭園', '日本三名園', '岡山城'] },

    // ===== 広島県 =====
    { id: 's-hiroshima-1', name: '厳島神社', prefecture: 'hiroshima', category: '歴史', description: '海に浮かぶ世界遺産の大鳥居。満潮時と干潮時で異なる表情を見せる。', image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format', tags: ['世界遺産', '大鳥居', '宮島'] },
    { id: 's-hiroshima-2', name: '原爆ドーム', prefecture: 'hiroshima', category: '歴史', description: '世界遺産として平和の大切さを伝える負の遺産。平和記念公園も必見。', image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format', tags: ['世界遺産', '平和', '歴史'] },

    // ===== 山口県 =====
    { id: 's-yamaguchi-1', name: '角島大橋', prefecture: 'yamaguchi', category: '自然', description: 'エメラルドグリーンの海に架かる絶景の橋。CMロケ地として有名。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['橋', '絶景', 'フォトジェニック'] },
    { id: 's-yamaguchi-2', name: '秋芳洞', prefecture: 'yamaguchi', category: '自然', description: '日本最大級のカルスト台地にある鍾乳洞。壮大な地下世界が広がる。', image: 'https://images.unsplash.com/photo-1504870712474-3783a76f1d90?w=600&auto=format', tags: ['鍾乳洞', 'カルスト', '神秘'] },

    // ===== 徳島県 =====
    { id: 's-tokushima-1', name: '鳴門の渦潮', prefecture: 'tokushima', category: '自然', description: '世界三大潮流の一つ。直径最大30mの迫力ある渦潮は圧巻。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['渦潮', '自然', '迫力'] },
    { id: 's-tokushima-2', name: '祖谷のかずら橋', prefecture: 'tokushima', category: '自然', description: '秘境・祖谷渓谷に架かる蔓で編まれた吊り橋。スリル満点の渡橋体験。', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format', tags: ['秘境', '吊り橋', 'スリル'] },

    // ===== 香川県 =====
    { id: 's-kagawa-1', name: '金刀比羅宮', prefecture: 'kagawa', category: '歴史', description: '「こんぴらさん」の愛称で親しまれる神社。785段の石段を登って参拝。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['神社', '石段', 'こんぴら'] },
    { id: 's-kagawa-2', name: '直島', prefecture: 'kagawa', category: '文化', description: '現代アートの聖地。草間彌生のかぼちゃや安藤忠雄建築の美術館が点在。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['アート', '離島', '美術館'] },

    // ===== 愛媛県 =====
    { id: 's-ehime-1', name: '道後温泉', prefecture: 'ehime', category: '温泉', description: '日本最古の温泉の一つ。夏目漱石「坊っちゃん」の舞台としても有名。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '歴史', '坊っちゃん'] },
    { id: 's-ehime-2', name: 'しまなみ海道', prefecture: 'ehime', category: '自然', description: '瀬戸内海の島々を結ぶサイクリングロード。自転車で海を渡る爽快な体験。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['サイクリング', '海', '絶景'] },

    // ===== 高知県 =====
    { id: 's-kochi-1', name: '四万十川', prefecture: 'kochi', category: '自然', description: '日本最後の清流。沈下橋が点在する美しい川の風景。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['清流', '沈下橋', '自然'] },
    { id: 's-kochi-2', name: '桂浜', prefecture: 'kochi', category: '自然', description: '坂本龍馬像が立つ高知を代表する景勝地。太平洋の大海原を望む。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['海', '龍馬', '絶景'] },

    // ===== 福岡県 =====
    { id: 's-fukuoka-1', name: '太宰府天満宮', prefecture: 'fukuoka', category: '歴史', description: '学問の神様・菅原道真を祀る神社。合格祈願の参拝者が絶えない。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['神社', '学問', '合格祈願'] },
    { id: 's-fukuoka-2', name: '中洲屋台街', prefecture: 'fukuoka', category: '文化', description: '博多名物の屋台が並ぶグルメスポット。ラーメンやおでんを堪能。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['屋台', 'グルメ', '夜'] },

    // ===== 佐賀県 =====
    { id: 's-saga-1', name: '吉野ヶ里遺跡', prefecture: 'saga', category: '歴史', description: '弥生時代の大規模環濠集落跡。日本の古代文明を体感できる公園。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['遺跡', '弥生時代', '歴史'] },
    { id: 's-saga-2', name: '唐津城', prefecture: 'saga', category: '歴史', description: '海に面した美しい城。唐津くんちの祭りは勇壮で見応えがある。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '海', '祭り'] },

    // ===== 長崎県 =====
    { id: 's-nagasaki-1', name: 'グラバー園', prefecture: 'nagasaki', category: '歴史', description: '異国情緒あふれる洋館群。長崎港を見下ろす丘の上に建つ。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['洋館', '異国情緒', '長崎'] },
    { id: 's-nagasaki-2', name: 'ハウステンボス', prefecture: 'nagasaki', category: 'レジャー', description: 'オランダの街並みを再現した日本最大のテーマパーク。イルミネーションが人気。', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format', tags: ['テーマパーク', 'イルミネーション', 'オランダ'] },

    // ===== 熊本県 =====
    { id: 's-kumamoto-1', name: '熊本城', prefecture: 'kumamoto', category: '歴史', description: '加藤清正が築いた名城。石垣の「武者返し」は日本一の美しさ。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['城', '石垣', '歴史'] },
    { id: 's-kumamoto-2', name: '阿蘇山', prefecture: 'kumamoto', category: '自然', description: '世界最大級のカルデラを持つ活火山。大草原と火口の景観は壮大。', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format', tags: ['火山', 'カルデラ', '草原'] },

    // ===== 大分県 =====
    { id: 's-oita-1', name: '別府温泉・地獄めぐり', prefecture: 'oita', category: '温泉', description: '日本一の源泉数と湧出量を誇る温泉地。色鮮やかな地獄温泉が見どころ。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '地獄めぐり', '名湯'] },
    { id: 's-oita-2', name: '由布院温泉', prefecture: 'oita', category: '温泉', description: '由布岳を望む風光明媚な温泉地。おしゃれなカフェや美術館も多い。', image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format', tags: ['温泉', '由布岳', 'おしゃれ'] },

    // ===== 宮崎県 =====
    { id: 's-miyazaki-1', name: '高千穂峡', prefecture: 'miyazaki', category: '自然', description: '神話の舞台となった渓谷。真名井の滝を見ながらのボート体験が人気。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['峡谷', '神話', 'ボート'] },
    { id: 's-miyazaki-2', name: '青島神社', prefecture: 'miyazaki', category: '歴史', description: '亜熱帯植物に囲まれた小島の神社。鬼の洗濯板と呼ばれる波状岩が見もの。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['神社', '海', '南国'] },

    // ===== 鹿児島県 =====
    { id: 's-kagoshima-1', name: '桜島', prefecture: 'kagoshima', category: '自然', description: '鹿児島のシンボルともいえる活火山。噴煙を上げる姿は迫力満点。', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format', tags: ['火山', '絶景', 'シンボル'] },
    { id: 's-kagoshima-2', name: '屋久島', prefecture: 'kagoshima', category: '自然', description: '世界遺産の神秘の島。縄文杉や白谷雲水峡は苔むす太古の森。', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format', tags: ['世界遺産', '縄文杉', '森'] },

    // ===== 沖縄県 =====
    { id: 's-okinawa-1', name: '美ら海水族館', prefecture: 'okinawa', category: 'レジャー', description: '世界最大級の水槽にジンベエザメが泳ぐ大人気水族館。', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format', tags: ['水族館', 'ジンベエザメ', '家族'] },
    { id: 's-okinawa-2', name: '首里城', prefecture: 'okinawa', category: '歴史', description: '琉球王国の王城。復元された朱色の正殿は沖縄の歴史と文化の象徴。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['城', '琉球', '世界遺産'] },
    { id: 's-okinawa-3', name: '古宇利島', prefecture: 'okinawa', category: '自然', description: '「恋の島」と呼ばれるリゾートアイランド。透き通る海と古宇利大橋が絶景。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['海', 'リゾート', '絶景'] },

    // ===== 追加スポット：北海道 =====
    { id: 's-hokkaido-4', name: '函館山夜景', prefecture: 'hokkaido', category: '自然', description: '世界三大夜景の一つ。函館市街とくびれた地形が織りなす宝石箱のような夜景。', image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&auto=format', tags: ['夜景', '展望', '絶景'] },
    { id: 's-hokkaido-5', name: '知床半島', prefecture: 'hokkaido', category: '自然', description: '世界遺産の大自然。ヒグマやエゾシカが暮らす原始の森と流氷が魅力。', image: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=600&auto=format', tags: ['世界遺産', '野生動物', '流氷'] },
    { id: 's-hokkaido-6', name: '洞爺湖', prefecture: 'hokkaido', category: '自然', description: 'カルデラ湖と有珠山の絶景。ロングラン花火大会やジオパークが人気。', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format', tags: ['湖', '温泉', '花火'] },
    { id: 's-hokkaido-7', name: '大通公園', prefecture: 'hokkaido', category: 'レジャー', description: '札幌の中心を貫く1.5kmの都市公園。雪まつりやビアガーデンの会場。', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format', tags: ['公園', '雪まつり', '札幌'] },
    { id: 's-hokkaido-8', name: '美瑛の丘', prefecture: 'hokkaido', category: '自然', description: 'パッチワークのように広がる色彩豊かな丘陵地帯。青い池も幻想的。', image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&auto=format', tags: ['丘', '絶景', '青い池'] },
    { id: 's-hokkaido-9', name: '登別温泉・地獄谷', prefecture: 'hokkaido', category: '温泉', description: '9種類の泉質を持つ温泉のデパート。迫力ある地獄谷の噴気孔は必見。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '地獄谷', '名湯'] },
    { id: 's-hokkaido-10', name: '五稜郭', prefecture: 'hokkaido', category: '歴史', description: '日本初の西洋式城郭。星形の堀は展望塔からの眺めが圧巻。桜の名所。', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=600&auto=format', tags: ['城郭', '桜', '歴史'] },

    // ===== 追加スポット：青森県 =====
    { id: 's-aomori-4', name: '十和田湖', prefecture: 'aomori', category: '自然', description: '二重カルデラ湖の神秘的な湖。十和田湖遊覧船や乙女の像が有名。', image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format', tags: ['湖', '紅葉', '遊覧船'] },
    { id: 's-aomori-5', name: '白神山地', prefecture: 'aomori', category: '自然', description: '世界遺産のブナ原生林。十二湖の青池は息をのむ美しさ。', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format', tags: ['世界遺産', 'ブナ林', '青池'] },

    // ===== 追加スポット：岩手県 =====
    { id: 's-iwate-3', name: '厳美渓', prefecture: 'iwate', category: '自然', description: '磐井川の侵食でできた渓谷美。名物「空飛ぶだんご」のカゴが楽しい。', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format', tags: ['渓谷', 'だんご', '自然'] },
    { id: 's-iwate-4', name: '花巻温泉郷', prefecture: 'iwate', category: '温泉', description: '宮沢賢治ゆかりの温泉地。大沢温泉や鉛温泉など趣の異なる名湯が点在。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '宮沢賢治', '名湯'] },

    // ===== 追加スポット：宮城県 =====
    { id: 's-miyagi-3', name: '秋保大滝', prefecture: 'miyagi', category: '自然', description: '幅6m・落差55mの名瀑。日本の滝百選に選ばれた迫力ある滝。', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format', tags: ['滝', '紅葉', '自然'] },
    { id: 's-miyagi-4', name: '蔵王御釜', prefecture: 'miyagi', category: '自然', description: 'エメラルドグリーンに輝く火口湖。季節や天候で色が変化する神秘の湖。', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format', tags: ['火口湖', '山', '絶景'] },

    // ===== 追加スポット：秋田県 =====
    { id: 's-akita-3', name: '乳頭温泉郷', prefecture: 'akita', category: '温泉', description: '秘湯の宝庫。7つの温泉からなる山奥の温泉郷。鶴の湯が特に有名。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['秘湯', '温泉', '雪見'] },

    // ===== 追加スポット：山形県 =====
    { id: 's-yamagata-3', name: '銀山温泉', prefecture: 'yamagata', category: '温泉', description: '大正ロマン漂う温泉街。ガス灯に照らされた木造旅館の夜景は幻想的。', image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format', tags: ['温泉', '大正ロマン', '冬'] },

    // ===== 追加スポット：福島県 =====
    { id: 's-fukushima-3', name: '大内宿', prefecture: 'fukushima', category: '歴史', description: '江戸時代の宿場町がそのまま残る茅葺屋根の集落。ねぎそばが名物。', image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&auto=format', tags: ['宿場町', '茅葺', '歴史'] },
    { id: 's-fukushima-4', name: 'あぶくま洞', prefecture: 'fukushima', category: '自然', description: '8000万年の歳月が生んだ鍾乳洞。滝根御殿の巨大空間は圧巻。', image: 'https://images.unsplash.com/photo-1504870712474-3783a76f1d90?w=600&auto=format', tags: ['鍾乳洞', '神秘', '自然'] },

    // ===== 追加スポット：茨城県 =====
    { id: 's-ibaraki-3', name: '袋田の滝', prefecture: 'ibaraki', category: '自然', description: '日本三名瀑の一つ。四段に流れ落ちる高さ120mの滝。冬の氷瀑は圧巻。', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format', tags: ['滝', '氷瀑', '紅葉'] },

    // ===== 追加スポット：栃木県 =====
    { id: 's-tochigi-3', name: '中禅寺湖', prefecture: 'tochigi', category: '自然', description: '奥日光を代表する湖。男体山を背景にした紅葉の絶景が有名。', image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format', tags: ['湖', '紅葉', '絶景'] },
    { id: 's-tochigi-4', name: 'あしかがフラワーパーク', prefecture: 'tochigi', category: '自然', description: 'CNNが選ぶ世界の夢の旅行先10選。巨大な藤棚のイルミネーションは圧巻。', image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&auto=format', tags: ['花', '藤', 'イルミネーション'] },

    // ===== 追加スポット：群馬県 =====
    { id: 's-gunma-3', name: '伊香保温泉', prefecture: 'gunma', category: '温泉', description: '365段の石段が名物のレトロな温泉街。黄金の湯と白銀の湯の2種を楽しめる。', image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format', tags: ['温泉', '石段', '昭和レトロ'] },

    // ===== 追加スポット：東京都 =====
    { id: 's-tokyo-4', name: '東京タワー', prefecture: 'tokyo', category: 'レジャー', description: '東京のシンボル。高さ333mの展望台から都心の大パノラマを楽しめる。', image: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&auto=format', tags: ['展望', 'ランドマーク', '夜景'] },
    { id: 's-tokyo-5', name: 'お台場', prefecture: 'tokyo', category: 'レジャー', description: 'レインボーブリッジを望む都市リゾート。チームラボやガンダムなど見どころ豊富。', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format', tags: ['お台場', 'エンタメ', '夜景'] },
    { id: 's-tokyo-6', name: '上野恩賜公園', prefecture: 'tokyo', category: '文化', description: '博物館・美術館・動物園が集まる文化の杜。桜の名所としても有名。', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&auto=format', tags: ['公園', '美術館', '桜'] },
    { id: 's-tokyo-7', name: '築地場外市場', prefecture: 'tokyo', category: '文化', description: '世界最大の魚市場の活気が残る場外市場。新鮮な海鮮グルメの宝庫。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['市場', '海鮮', 'グルメ'] },
    { id: 's-tokyo-8', name: '渋谷スクランブル交差点', prefecture: 'tokyo', category: '文化', description: '世界で最も有名な交差点。1回の信号で最大3,000人が行き交う都市のシンボル。', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format', tags: ['渋谷', '都市', 'ランドマーク'] },

    // ===== 追加スポット：神奈川県 =====
    { id: 's-kanagawa-4', name: '横浜中華街', prefecture: 'kanagawa', category: '文化', description: '日本最大の中華街。約600店舗が軒を連ねるグルメタウン。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['中華街', 'グルメ', '横浜'] },
    { id: 's-kanagawa-5', name: '鶴岡八幡宮', prefecture: 'kanagawa', category: '歴史', description: '鎌倉を代表する神社。源頼朝ゆかりの歴史と緑豊かな境内が魅力。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['神社', '鎌倉', '歴史'] },

    // ===== 追加スポット：新潟県 =====
    { id: 's-niigata-3', name: '越後湯沢温泉', prefecture: 'niigata', category: '温泉', description: '川端康成「雪国」の舞台。冬はスキー、温泉、日本酒を同時に楽しめる。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', 'スキー', '雪国'] },
    { id: 's-niigata-4', name: '星峠の棚田', prefecture: 'niigata', category: '自然', description: '日本の棚田百選。雲海に浮かぶ水田は日本の原風景そのもの。', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format', tags: ['棚田', '絶景', '原風景'] },

    // ===== 追加スポット：石川県 =====
    { id: 's-ishikawa-3', name: '21世紀美術館', prefecture: 'ishikawa', category: '文化', description: '「まちに開かれた公園のような美術館」。レアンドロのプールが人気。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['美術館', 'アート', '金沢'] },
    { id: 's-ishikawa-4', name: '近江町市場', prefecture: 'ishikawa', category: '文化', description: '金沢の台所。新鮮な海鮮丼や加賀野菜など北陸の恵みが集結。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['市場', '海鮮', 'グルメ'] },

    // ===== 追加スポット：長野県 =====
    { id: 's-nagano-4', name: '善光寺', prefecture: 'nagano', category: '歴史', description: '「一生に一度は善光寺参り」と言われる名刹。無宗派の国民的寺院。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['寺院', '参り', '歴史'] },
    { id: 's-nagano-5', name: '諏訪湖', prefecture: 'nagano', category: '自然', description: '信州最大の湖。諏訪湖花火大会は4万発の花火が夜空を彩る日本有数の花火大会。', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format', tags: ['湖', '花火', '温泉'] },
    { id: 's-nagano-6', name: '軽井沢', prefecture: 'nagano', category: 'レジャー', description: '日本を代表する高原リゾート。避暑地として皇室や文人に愛されてきた街。', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format', tags: ['リゾート', '避暑地', 'ショッピング'] },

    // ===== 追加スポット：岐阜県 =====
    { id: 's-gifu-3', name: '下呂温泉', prefecture: 'gifu', category: '温泉', description: '日本三名泉の一つ。美肌の湯として名高く、飛騨川沿いの温泉街は風情豊か。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '美肌', '日本三名泉'] },

    // ===== 追加スポット：静岡県 =====
    { id: 's-shizuoka-3', name: '富士山', prefecture: 'shizuoka', category: '自然', description: '日本の最高峰・標高3,776m。世界遺産の霊峰は登山でもビュースポットでも魅力的。', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format', tags: ['世界遺産', '登山', '絶景'] },
    { id: 's-shizuoka-4', name: '浜名湖', prefecture: 'shizuoka', category: '自然', description: 'うなぎの養殖で有名な汽水湖。マリンスポーツや遊園地も楽しめる。', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format', tags: ['湖', 'うなぎ', 'レジャー'] },

    // ===== 追加スポット：愛知県 =====
    { id: 's-aichi-3', name: '熱田神宮', prefecture: 'aichi', category: '歴史', description: '三種の神器の一つ「草薙神剣」を祀る由緒ある神社。初詣には230万人が参拝。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['神社', 'パワースポット', '歴史'] },
    { id: 's-aichi-4', name: 'LEGOLAND Japan', prefecture: 'aichi', category: 'レジャー', description: '1,700万個のレゴブロックで作られたテーマパーク。家族連れに大人気。', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format', tags: ['テーマパーク', '家族', 'レゴ'] },

    // ===== 追加スポット：三重県 =====
    { id: 's-mie-3', name: '志摩スペイン村', prefecture: 'mie', category: 'レジャー', description: 'スペインの情熱を体験できるテーマパーク。フラメンコショーやスリルライド満載。', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format', tags: ['テーマパーク', 'スペイン', '家族'] },
    { id: 's-mie-4', name: '鬼ヶ城', prefecture: 'mie', category: '自然', description: '世界遺産の海食洞。自然が作り出した奇岩と太平洋の大パノラマ。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['世界遺産', '奇岩', '海'] },

    // ===== 追加スポット：京都府 =====
    { id: 's-kyoto-4', name: '金閣寺（鹿苑寺）', prefecture: 'kyoto', category: '歴史', description: '金箔に輝く舎利殿が鏡湖池に映る姿は京都を代表する絶景。世界遺産。', image: 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=600&auto=format', tags: ['世界遺産', '金閣', '寺院'] },
    { id: 's-kyoto-5', name: '銀閣寺（慈照寺）', prefecture: 'kyoto', category: '歴史', description: '東山文化の象徴。銀沙灘と向月台の砂の造形美は侘び寂びの世界。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['世界遺産', '銀閣', '侘び寂び'] },
    { id: 's-kyoto-6', name: '二条城', prefecture: 'kyoto', category: '歴史', description: '徳川家の京都における居城。鳴り廊下の「鶯張り」や狩野派の障壁画が見事。', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format', tags: ['世界遺産', '城', '障壁画'] },
    { id: 's-kyoto-7', name: '祇園', prefecture: 'kyoto', category: '文化', description: '花街の情緒が残る風情ある街。運が良ければ舞妓さんに出会えることも。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['花街', '舞妓', '伝統'] },
    { id: 's-kyoto-8', name: '天橋立', prefecture: 'kyoto', category: '自然', description: '日本三景の一つ。股のぞきで見る天に架かる橋のような景色は神秘的。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['日本三景', '絶景', '松'] },

    // ===== 追加スポット：大阪府 =====
    { id: 's-osaka-4', name: '通天閣', prefecture: 'osaka', category: '文化', description: '新世界のシンボルタワー。ビリケンさんの足を撫でると幸運が訪れる。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['タワー', '新世界', 'ビリケン'] },
    { id: 's-osaka-5', name: '海遊館', prefecture: 'osaka', category: 'レジャー', description: '世界最大級の水族館。太平洋を再現した巨大水槽をジンベエザメが悠々と泳ぐ。', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format', tags: ['水族館', 'ジンベエザメ', '家族'] },

    // ===== 追加スポット：兵庫県 =====
    { id: 's-hyogo-3', name: '城崎温泉', prefecture: 'hyogo', category: '温泉', description: '7つの外湯を浴衣で巡る風情ある温泉街。柳並木と太鼓橋が美しい。', image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=600&auto=format', tags: ['温泉', '外湯', '浴衣'] },
    { id: 's-hyogo-4', name: '竹田城跡', prefecture: 'hyogo', category: '歴史', description: '天空の城と呼ばれる山城跡。雲海に浮かぶ姿はまさに日本のマチュピチュ。', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format', tags: ['天空の城', '雲海', '絶景'] },
    { id: 's-hyogo-5', name: '神戸北野異人館街', prefecture: 'hyogo', category: '歴史', description: '明治時代の洋館が立ち並ぶ異国情緒溢れるエリア。風見鶏の館が有名。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['異人館', '洋館', '神戸'] },

    // ===== 追加スポット：奈良県 =====
    { id: 's-nara-3', name: '法隆寺', prefecture: 'nara', category: '歴史', description: '世界最古の木造建築群。聖徳太子ゆかりの世界遺産。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['世界遺産', '寺院', '聖徳太子'] },
    { id: 's-nara-4', name: '奈良公園', prefecture: 'nara', category: '自然', description: '約1,200頭の鹿が自由に暮らす広大な公園。鹿せんべいで餌やり体験。', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&auto=format', tags: ['鹿', '公園', '体験'] },
    { id: 's-nara-5', name: '春日大社', prefecture: 'nara', category: '歴史', description: '世界遺産の神社。約3,000基の燈籠が幻想的な万燈籠の行事は圧巻。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['世界遺産', '神社', '燈籠'] },

    // ===== 追加スポット：和歌山県 =====
    { id: 's-wakayama-3', name: '白浜・千畳敷', prefecture: 'wakayama', category: '自然', description: '太平洋に面した広大な岩畳。夕日に映える絶景は関西屈指の美しさ。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['海', '夕日', '絶景'] },
    { id: 's-wakayama-4', name: 'アドベンチャーワールド', prefecture: 'wakayama', category: 'レジャー', description: 'パンダの飼育数日本一の動物園・水族館・遊園地。パンダの赤ちゃんに会える。', image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&auto=format', tags: ['パンダ', '動物園', '家族'] },

    // ===== 追加スポット：広島県 =====
    { id: 's-hiroshima-3', name: '尾道', prefecture: 'hiroshima', category: '歴史', description: '坂と寺と映画の町。千光寺公園からの瀬戸内海の眺望は絶景。猫の街としても人気。', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format', tags: ['坂の町', '寺', '猫'] },
    { id: 's-hiroshima-4', name: 'しまなみ海道（広島側）', prefecture: 'hiroshima', category: '自然', description: '瀬戸内海の多島美を楽しむサイクリングロード。世界7大サイクリングコース。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['サイクリング', '瀬戸内海', '絶景'] },

    // ===== 追加スポット：山口県 =====
    { id: 's-yamaguchi-3', name: '錦帯橋', prefecture: 'yamaguchi', category: '歴史', description: '5連の木造アーチ橋。日本三名橋の一つで、桜と錦帯橋の競演は絶景。', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format', tags: ['橋', '桜', '日本三名橋'] },
    { id: 's-yamaguchi-4', name: '元乃隅神社', prefecture: 'yamaguchi', category: '歴史', description: 'CNN「日本の最も美しい場所31選」。123基の赤い鳥居が海へ続く絶景。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['鳥居', '海', '絶景'] },

    // ===== 追加スポット：香川県 =====
    { id: 's-kagawa-3', name: '栗林公園', prefecture: 'kagawa', category: '歴史', description: '国の特別名勝。ミシュラン三つ星の日本庭園。紫雲山を背景にした池泉回遊式庭園。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['庭園', 'ミシュラン', '絶景'] },
    { id: 's-kagawa-4', name: '小豆島・エンジェルロード', prefecture: 'kagawa', category: '自然', description: '干潮時にだけ現れる天使の散歩道。恋人の聖地として人気。オリーブの島。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['離島', '恋人の聖地', 'オリーブ'] },

    // ===== 追加スポット：福岡県 =====
    { id: 's-fukuoka-3', name: 'キャナルシティ博多', prefecture: 'fukuoka', category: 'レジャー', description: '「都市の劇場」をコンセプトにした複合商業施設。噴水ショーが人気。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['ショッピング', '噴水', '博多'] },
    { id: 's-fukuoka-4', name: '柳川川下り', prefecture: 'fukuoka', category: '自然', description: 'お堀をどんこ舟でゆったり巡る川下り。柳と白壁の景色が情緒たっぷり。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format', tags: ['川下り', '風情', '体験'] },

    // ===== 追加スポット：長崎県 =====
    { id: 's-nagasaki-3', name: '軍艦島（端島）', prefecture: 'nagasaki', category: '歴史', description: '世界遺産の廃墟島。かつて炭鉱で栄えた島の朽ちた建物群は圧巻。', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format', tags: ['世界遺産', '廃墟', '歴史'] },
    { id: 's-nagasaki-4', name: '稲佐山夜景', prefecture: 'nagasaki', category: '自然', description: '世界新三大夜景の一つ。1,000万ドルの夜景と称される眺望。', image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&auto=format', tags: ['夜景', '展望', '絶景'] },

    // ===== 追加スポット：熊本県 =====
    { id: 's-kumamoto-3', name: '黒川温泉', prefecture: 'kumamoto', category: '温泉', description: '入湯手形で露天風呂巡りが楽しめる温泉街。ミシュランガイド二つ星。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '露天風呂', '入湯手形'] },

    // ===== 追加スポット：大分県 =====
    { id: 's-oita-3', name: 'くじゅう花公園', prefecture: 'oita', category: '自然', description: '久住高原に広がる花の楽園。500種500万本の花々と阿蘇五岳の大パノラマ。', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&auto=format', tags: ['花', '高原', '絶景'] },

    // ===== 追加スポット：宮崎県 =====
    { id: 's-miyazaki-3', name: '日南海岸・鵜戸神宮', prefecture: 'miyazaki', category: '歴史', description: '海食洞の中にある珍しい神社。運玉投げが名物のパワースポット。', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format', tags: ['神社', '海', 'パワースポット'] },

    // ===== 追加スポット：鹿児島県 =====
    { id: 's-kagoshima-3', name: '指宿温泉・砂むし風呂', prefecture: 'kagoshima', category: '温泉', description: '世界的に珍しい天然砂むし温泉。海岸の砂に埋もれて体を温める独特の体験。', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&auto=format', tags: ['温泉', '砂むし', '体験'] },
    { id: 's-kagoshima-4', name: '知覧特攻平和会館', prefecture: 'kagoshima', category: '歴史', description: '特攻隊員の遺書や遺品を展示。平和の尊さを伝える施設。', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format', tags: ['平和', '歴史', '戦争'] },
    { id: 's-kagoshima-5', name: '奄美大島', prefecture: 'kagoshima', category: '自然', description: '世界自然遺産のマングローブ林とサンゴ礁の海。大島紬の文化も魅力。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['世界遺産', '離島', 'マングローブ'] },

    // ===== 追加スポット：沖縄県 =====
    { id: 's-okinawa-4', name: '竹富島', prefecture: 'okinawa', category: '文化', description: '赤瓦屋根とシーサーが並ぶ美しい集落。水牛車でのんびり島巡り。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['離島', '水牛車', '赤瓦'] },
    { id: 's-okinawa-5', name: '万座毛', prefecture: 'okinawa', category: '自然', description: '象の鼻のような奇岩とコバルトブルーの海。沖縄を代表する景勝地。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['奇岩', '海', '絶景'] },
    { id: 's-okinawa-6', name: '国際通り', prefecture: 'okinawa', category: '文化', description: '那覇最大の繁華街。沖縄料理、お土産、ライブなど沖縄文化を凝縮した「奇跡の1マイル」。', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format', tags: ['繁華街', 'グルメ', 'お土産'] },
    { id: 's-okinawa-7', name: '石垣島・川平湾', prefecture: 'okinawa', category: '自然', description: 'ミシュラン三つ星の美しい湾。グラスボートで色とりどりのサンゴと熱帯魚を観賞。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format', tags: ['海', 'サンゴ', 'ミシュラン'] },
];

/**
 * 都道府県IDから観光地一覧を取得
 */
export function getSpotsByPrefecture(prefectureId) {
    return spots.filter(s => s.prefecture === prefectureId);
}

/**
 * カテゴリで観光地を絞り込み
 */
export function getSpotsByCategory(category) {
    return spots.filter(s => s.category === category);
}

/**
 * テキスト検索
 */
export function searchSpots(query) {
    const q = query.toLowerCase();
    return spots.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q))
    );
}

/**
 * 観光地カテゴリ一覧を取得
 */
export function getSpotCategories() {
    return [...new Set(spots.map(s => s.category))];
}
