/**
 * 各スポット・グルメに適切な画像URLを割り当てるスクリプト
 * node update_images.js で実行
 */
import { readFileSync, writeFileSync } from 'fs';

// スポット用の画像マッピング（IDごとに適切な画像を割り当て）
const spotImages = {
    // 北海道
    's-hokkaido-1': 'photo-1499002238440-d264edd596ec', // ラベンダー畑
    's-hokkaido-2': 'photo-1590559899731-a382839e5549', // 小樽運河
    's-hokkaido-3': 'photo-1474511320723-9a56873571b7', // 旭山動物園→動物園
    's-hokkaido-4': 'photo-1514222134-b57cbb8ce073', // 函館夜景
    's-hokkaido-5': 'photo-1504700610630-ac6aba3536d3', // 知床→野生の自然
    's-hokkaido-6': 'photo-1501785888041-af3ef285b470', // 洞爺湖→湖
    's-hokkaido-7': 'photo-1551698618-1dfe5d97d256', // 大通公園→公園
    's-hokkaido-8': 'photo-1560717789-0ac7c58ac90a', // 美瑛の丘→丘
    's-hokkaido-9': 'photo-1540979388789-6cee28a1cdc9', // 登別温泉→温泉
    's-hokkaido-10': 'photo-1578637387939-43c525550085', // 五稜郭→桜と城

    // 青森
    's-aomori-1': 'photo-1522383225653-ed111181a951', // 弘前城→桜と城
    's-aomori-2': 'photo-1470071459604-3b5ec3a7fe05', // 奥入瀬渓流→渓流
    's-aomori-3': 'photo-1530521954074-e64f6810b386', // ねぶた祭り
    's-aomori-4': 'photo-1506260408121-e353d10b87c7', // 十和田湖→湖
    's-aomori-5': 'photo-1448375240586-882707db888b', // 白神山地→ブナ林

    // 岩手
    's-iwate-1': 'photo-1480796927426-f609979314bd', // 中尊寺→寺院
    's-iwate-2': 'photo-1504870712474-3783a76f1d90', // 龍泉洞→鍾乳洞
    's-iwate-3': 'photo-1433086966358-54859d0ed716', // 厳美渓→渓谷
    's-iwate-4': 'photo-1540979388789-6cee28a1cdc9', // 花巻温泉→温泉

    // 宮城
    's-miyagi-1': 'photo-1505118380757-91f5f5632de0', // 松島→海と島
    's-miyagi-2': 'photo-1570459027562-4a916cc6113f', // 仙台城→城
    's-miyagi-3': 'photo-1432405972618-c60b0225b8f9', // 秋保大滝→滝
    's-miyagi-4': 'photo-1464822759023-fed622ff2c3b', // 蔵王御釜→山

    // 秋田
    's-akita-1': 'photo-1522383225653-ed111181a951', // 角館→桜
    's-akita-2': 'photo-1439066615861-d1af74d74000', // 田沢湖→湖
    's-akita-3': 'photo-1540979388789-6cee28a1cdc9', // 乳頭温泉→温泉

    // 山形
    's-yamagata-1': 'photo-1478436127897-769e1b3f0f36', // 蔵王樹氷→雪山
    's-yamagata-2': 'photo-1545569341-9eb8b30979d9', // 山寺→寺
    's-yamagata-3': 'photo-1553653924-39b70295f8da', // 銀山温泉→温泉街

    // 福島
    's-fukushima-1': 'photo-1570459027562-4a916cc6113f', // 鶴ヶ城→城
    's-fukushima-2': 'photo-1506260408121-e353d10b87c7', // 五色沼→沼
    's-fukushima-3': 'photo-1542640244-7e672d6cef4e', // 大内宿→茅葺
    's-fukushima-4': 'photo-1504870712474-3783a76f1d90', // あぶくま洞→洞窟

    // 茨城
    's-ibaraki-1': 'photo-1522383225653-ed111181a951', // 偕楽園→梅
    's-ibaraki-2': 'photo-1490750967868-88aa4f44baee', // ひたち海浜公園→花
    's-ibaraki-3': 'photo-1432405972618-c60b0225b8f9', // 袋田の滝→滝

    // 栃木
    's-tochigi-1': 'photo-1545569341-9eb8b30979d9', // 日光東照宮→神社
    's-tochigi-2': 'photo-1432405972618-c60b0225b8f9', // 華厳の滝→滝
    's-tochigi-3': 'photo-1506260408121-e353d10b87c7', // 中禅寺湖→湖
    's-tochigi-4': 'photo-1462275646964-a0e3c11f18a6', // 足利フラワー→藤

    // 群馬
    's-gunma-1': 'photo-1540979388789-6cee28a1cdc9', // 草津温泉
    's-gunma-2': 'photo-1524413840807-0c3cb6fa808d', // 富岡製糸場→建物
    's-gunma-3': 'photo-1553653924-39b70295f8da', // 伊香保→温泉街

    // 埼玉
    's-saitama-1': 'photo-1528360983277-13d401cdc186', // 川越→レトロ街並み
    's-saitama-2': 'photo-1470071459604-3b5ec3a7fe05', // 秩父→渓谷

    // 千葉
    's-chiba-1': 'photo-1559128010-7c1ad6e1b6a5', // 鴨川→水族館
    's-chiba-2': 'photo-1507525428034-b723cf961d3e', // 九十九里→ビーチ

    // 東京
    's-tokyo-1': 'photo-1540959733332-eab4deabeeaf', // 浅草寺→東京
    's-tokyo-2': 'photo-1536098561742-ca998e48cbcc', // スカイツリー
    's-tokyo-3': 'photo-1478436127897-769e1b3f0f36', // 明治神宮→鳥居
    's-tokyo-4': 'photo-1551641506-ee5bf4cb45f1', // 東京タワー
    's-tokyo-5': 'photo-1540959733332-eab4deabeeaf', // お台場→東京
    's-tokyo-6': 'photo-1490750967868-88aa4f44baee', // 上野公園→公園
    's-tokyo-7': 'photo-1590559899731-a382839e5549', // 築地→市場
    's-tokyo-8': 'photo-1542051841857-5f90071e7989', // 渋谷→交差点

    // 神奈川
    's-kanagawa-1': 'photo-1545569341-9eb8b30979d9', // 鎌倉大仏→寺
    's-kanagawa-2': 'photo-1490806843957-31f4c9a91c65', // 箱根→富士山
    's-kanagawa-3': 'photo-1505118380757-91f5f5632de0', // 江の島→海
    's-kanagawa-4': 'photo-1590559899731-a382839e5549', // 中華街→街
    's-kanagawa-5': 'photo-1545569341-9eb8b30979d9', // 鶴岡八幡宮→神社

    // 新潟
    's-niigata-1': 'photo-1505118380757-91f5f5632de0', // 佐渡→島
    's-niigata-2': 'photo-1470071459604-3b5ec3a7fe05', // 清津峡→峡谷
    's-niigata-3': 'photo-1540979388789-6cee28a1cdc9', // 越後湯沢→温泉
    's-niigata-4': 'photo-1500382017468-9049fed747ef', // 星峠の棚田→田園

    // 富山
    's-toyama-1': 'photo-1464822759023-fed622ff2c3b', // 立山→山岳
    's-toyama-2': 'photo-1542640244-7e672d6cef4e', // 五箇山→合掌造り

    // 石川
    's-ishikawa-1': 'photo-1528360983277-13d401cdc186', // 兼六園→庭園
    's-ishikawa-2': 'photo-1528360983277-13d401cdc186', // ひがし茶屋街
    's-ishikawa-3': 'photo-1524413840807-0c3cb6fa808d', // 21世紀美術館
    's-ishikawa-4': 'photo-1590559899731-a382839e5549', // 近江町市場

    // 福井
    's-fukui-1': 'photo-1505118380757-91f5f5632de0', // 東尋坊→断崖
    's-fukui-2': 'photo-1545569341-9eb8b30979d9', // 永平寺→寺

    // 山梨
    's-yamanashi-1': 'photo-1490806843957-31f4c9a91c65', // 富士五湖→富士山
    's-yamanashi-2': 'photo-1470071459604-3b5ec3a7fe05', // 昇仙峡→渓谷

    // 長野
    's-nagano-1': 'photo-1464822759023-fed622ff2c3b', // 上高地→山岳
    's-nagano-2': 'photo-1570459027562-4a916cc6113f', // 松本城→城
    's-nagano-3': 'photo-1474511320723-9a56873571b7', // 地獄谷→猿
    's-nagano-4': 'photo-1545569341-9eb8b30979d9', // 善光寺→寺
    's-nagano-5': 'photo-1439066615861-d1af74d74000', // 諏訪湖→湖
    's-nagano-6': 'photo-1441974231531-c6227db76b6e', // 軽井沢→森

    // 岐阜
    's-gifu-1': 'photo-1542640244-7e672d6cef4e', // 白川郷→合掌造り
    's-gifu-2': 'photo-1528360983277-13d401cdc186', // 高山→町並み
    's-gifu-3': 'photo-1540979388789-6cee28a1cdc9', // 下呂温泉→温泉

    // 静岡
    's-shizuoka-1': 'photo-1490806843957-31f4c9a91c65', // 三保松原→富士山
    's-shizuoka-2': 'photo-1553653924-39b70295f8da', // 熱海→温泉街
    's-shizuoka-3': 'photo-1490806843957-31f4c9a91c65', // 富士山
    's-shizuoka-4': 'photo-1439066615861-d1af74d74000', // 浜名湖→湖

    // 愛知
    's-aichi-1': 'photo-1570459027562-4a916cc6113f', // 名古屋城→城
    's-aichi-2': 'photo-1570459027562-4a916cc6113f', // 犬山城→城
    's-aichi-3': 'photo-1478436127897-769e1b3f0f36', // 熱田神宮→神社
    's-aichi-4': 'photo-1558618666-fcd25c85f82e', // レゴランド→テーマパーク

    // 三重
    's-mie-1': 'photo-1478436127897-769e1b3f0f36', // 伊勢神宮→神社
    's-mie-2': 'photo-1559128010-7c1ad6e1b6a5', // 鳥羽水族館→水族館
    's-mie-3': 'photo-1558618666-fcd25c85f82e', // スペイン村→テーマパーク
    's-mie-4': 'photo-1505118380757-91f5f5632de0', // 鬼ヶ城→海岸

    // 滋賀
    's-shiga-1': 'photo-1439066615861-d1af74d74000', // 琵琶湖→湖
    's-shiga-2': 'photo-1570459027562-4a916cc6113f', // 彦根城→城

    // 京都
    's-kyoto-1': 'photo-1493976040374-85c8e12f0c0e', // 清水寺
    's-kyoto-2': 'photo-1478436127897-769e1b3f0f36', // 伏見稲荷→鳥居
    's-kyoto-3': 'photo-1580100586938-02822d99c4a8', // 竹林
    's-kyoto-4': 'photo-1493997181344-712f2f19d87a', // 金閣寺
    's-kyoto-5': 'photo-1545569341-9eb8b30979d9', // 銀閣寺→寺
    's-kyoto-6': 'photo-1570459027562-4a916cc6113f', // 二条城→城
    's-kyoto-7': 'photo-1528360983277-13d401cdc186', // 祇園→街並み
    's-kyoto-8': 'photo-1505118380757-91f5f5632de0', // 天橋立→海

    // 大阪
    's-osaka-1': 'photo-1570459027562-4a916cc6113f', // 大阪城→城
    's-osaka-2': 'photo-1590559899731-a382839e5549', // 道頓堀→ネオン
    's-osaka-3': 'photo-1558618666-fcd25c85f82e', // USJ→テーマパーク
    's-osaka-4': 'photo-1590559899731-a382839e5549', // 通天閣→ネオン
    's-osaka-5': 'photo-1559128010-7c1ad6e1b6a5', // 海遊館→水族館

    // 兵庫
    's-hyogo-1': 'photo-1570459027562-4a916cc6113f', // 姫路城→城
    's-hyogo-2': 'photo-1540979388789-6cee28a1cdc9', // 有馬温泉→温泉
    's-hyogo-3': 'photo-1553653924-39b70295f8da', // 城崎温泉→温泉街
    's-hyogo-4': 'photo-1464822759023-fed622ff2c3b', // 竹田城→山
    's-hyogo-5': 'photo-1524413840807-0c3cb6fa808d', // 異人館→洋館

    // 奈良
    's-nara-1': 'photo-1545569341-9eb8b30979d9', // 東大寺→寺
    's-nara-2': 'photo-1522383225653-ed111181a951', // 吉野山→桜
    's-nara-3': 'photo-1545569341-9eb8b30979d9', // 法隆寺→寺
    's-nara-4': 'photo-1490750967868-88aa4f44baee', // 奈良公園→公園
    's-nara-5': 'photo-1478436127897-769e1b3f0f36', // 春日大社→神社

    // 和歌山
    's-wakayama-1': 'photo-1432405972618-c60b0225b8f9', // 那智の滝→滝
    's-wakayama-2': 'photo-1545569341-9eb8b30979d9', // 高野山→寺
    's-wakayama-3': 'photo-1505118380757-91f5f5632de0', // 白浜→海
    's-wakayama-4': 'photo-1474511320723-9a56873571b7', // アドベンチャーワールド→動物

    // 鳥取
    's-tottori-1': 'photo-1507525428034-b723cf961d3e', // 鳥取砂丘→砂

    // 島根
    's-shimane-1': 'photo-1545569341-9eb8b30979d9', // 出雲大社→神社
    's-shimane-2': 'photo-1524413840807-0c3cb6fa808d', // 足立美術館→美術館

    // 岡山
    's-okayama-1': 'photo-1528360983277-13d401cdc186', // 倉敷→街並み
    's-okayama-2': 'photo-1524413840807-0c3cb6fa808d', // 後楽園→庭園

    // 広島
    's-hiroshima-1': 'photo-1526481280693-3bfa7568e0f3', // 厳島神社→鳥居
    's-hiroshima-2': 'photo-1526481280693-3bfa7568e0f3', // 原爆ドーム
    's-hiroshima-3': 'photo-1528360983277-13d401cdc186', // 尾道→坂の町
    's-hiroshima-4': 'photo-1505118380757-91f5f5632de0', // しまなみ→海

    // 山口
    's-yamaguchi-1': 'photo-1505118380757-91f5f5632de0', // 角島大橋→海
    's-yamaguchi-2': 'photo-1504870712474-3783a76f1d90', // 秋芳洞→洞窟
    's-yamaguchi-3': 'photo-1545569341-9eb8b30979d9', // 錦帯橋→橋
    's-yamaguchi-4': 'photo-1478436127897-769e1b3f0f36', // 元乃隅→鳥居

    // 徳島
    's-tokushima-1': 'photo-1505118380757-91f5f5632de0', // 鳴門→海
    's-tokushima-2': 'photo-1433086966358-54859d0ed716', // 祖谷→橋

    // 香川
    's-kagawa-1': 'photo-1545569341-9eb8b30979d9', // 金刀比羅宮→神社
    's-kagawa-2': 'photo-1524413840807-0c3cb6fa808d', // 直島→アート
    's-kagawa-3': 'photo-1524413840807-0c3cb6fa808d', // 栗林公園→庭園
    's-kagawa-4': 'photo-1507525428034-b723cf961d3e', // 小豆島→海

    // 愛媛
    's-ehime-1': 'photo-1540979388789-6cee28a1cdc9', // 道後温泉→温泉
    's-ehime-2': 'photo-1505118380757-91f5f5632de0', // しまなみ→海

    // 高知
    's-kochi-1': 'photo-1470071459604-3b5ec3a7fe05', // 四万十川→川
    's-kochi-2': 'photo-1507525428034-b723cf961d3e', // 桂浜→海

    // 福岡
    's-fukuoka-1': 'photo-1545569341-9eb8b30979d9', // 太宰府→神社
    's-fukuoka-2': 'photo-1590559899731-a382839e5549', // 中洲→屋台
    's-fukuoka-3': 'photo-1590559899731-a382839e5549', // キャナルシティ→商業
    's-fukuoka-4': 'photo-1470071459604-3b5ec3a7fe05', // 柳川→川

    // 佐賀
    's-saga-1': 'photo-1524413840807-0c3cb6fa808d', // 吉野ヶ里→遺跡
    's-saga-2': 'photo-1570459027562-4a916cc6113f', // 唐津城→城

    // 長崎
    's-nagasaki-1': 'photo-1524413840807-0c3cb6fa808d', // グラバー園→洋館
    's-nagasaki-2': 'photo-1558618666-fcd25c85f82e', // ハウステンボス→テーマパーク
    's-nagasaki-3': 'photo-1505118380757-91f5f5632de0', // 軍艦島→島
    's-nagasaki-4': 'photo-1514222134-b57cbb8ce073', // 稲佐山→夜景

    // 熊本
    's-kumamoto-1': 'photo-1570459027562-4a916cc6113f', // 熊本城→城
    's-kumamoto-2': 'photo-1464822759023-fed622ff2c3b', // 阿蘇山→山
    's-kumamoto-3': 'photo-1540979388789-6cee28a1cdc9', // 黒川温泉→温泉

    // 大分
    's-oita-1': 'photo-1540979388789-6cee28a1cdc9', // 別府温泉→温泉
    's-oita-2': 'photo-1553653924-39b70295f8da', // 由布院→温泉街
    's-oita-3': 'photo-1490750967868-88aa4f44baee', // くじゅう花公園→花

    // 宮崎
    's-miyazaki-1': 'photo-1470071459604-3b5ec3a7fe05', // 高千穂峡→峡谷
    's-miyazaki-2': 'photo-1507525428034-b723cf961d3e', // 青島→海
    's-miyazaki-3': 'photo-1478436127897-769e1b3f0f36', // 鵜戸神宮→神社

    // 鹿児島
    's-kagoshima-1': 'photo-1464822759023-fed622ff2c3b', // 桜島→火山
    's-kagoshima-2': 'photo-1441974231531-c6227db76b6e', // 屋久島→森
    's-kagoshima-3': 'photo-1540979388789-6cee28a1cdc9', // 指宿→温泉
    's-kagoshima-4': 'photo-1524413840807-0c3cb6fa808d', // 知覧→歴史
    's-kagoshima-5': 'photo-1507525428034-b723cf961d3e', // 奄美→海

    // 沖縄
    's-okinawa-1': 'photo-1559128010-7c1ad6e1b6a5', // 美ら海水族館
    's-okinawa-2': 'photo-1545569341-9eb8b30979d9', // 首里城→城
    's-okinawa-3': 'photo-1507525428034-b723cf961d3e', // 古宇利島→海
    's-okinawa-4': 'photo-1507525428034-b723cf961d3e', // 竹富島→海
    's-okinawa-5': 'photo-1507525428034-b723cf961d3e', // 万座毛→海
    's-okinawa-6': 'photo-1590559899731-a382839e5549', // 国際通り→繁華街
    's-okinawa-7': 'photo-1507525428034-b723cf961d3e', // 川平湾→海
};

// グルメ用の画像マッピング
const gourmetImages = {
    // 北海道
    'g-hokkaido-1': 'photo-1544025162-d76694265947', // ジンギスカン→肉
    'g-hokkaido-2': 'photo-1579871494447-9811cf80d66c', // 海鮮丼
    'g-hokkaido-3': 'photo-1569718212165-3a8278d5f624', // 味噌ラーメン
    'g-hokkaido-4': 'photo-1455619452474-d2be8b1e70cd', // スープカレー→カレー
    'g-hokkaido-5': 'photo-1569718212165-3a8278d5f624', // 旭川ラーメン
    'g-hokkaido-6': 'photo-1569718212165-3a8278d5f624', // 函館塩ラーメン
    'g-hokkaido-7': 'photo-1562967914-608f82629710', // ザンギ→唐揚げ
    'g-hokkaido-8': 'photo-1547592166-23ac45744acd', // 石狩鍋→鍋
    'g-hokkaido-9': 'photo-1571575173700-afb9492e6a50', // 夕張メロン→メロン

    // 青森
    'g-aomori-1': 'photo-1579871494447-9811cf80d66c', // 大間マグロ→刺身
    'g-aomori-2': 'photo-1547592166-23ac45744acd', // せんべい汁→鍋
    'g-aomori-3': 'photo-1569718212165-3a8278d5f624', // 津軽そば→麺
    'g-aomori-4': 'photo-1568702846914-96b305d2aaeb', // りんご

    // 岩手
    'g-iwate-1': 'photo-1569718212165-3a8278d5f624', // わんこそば→麺
    'g-iwate-2': 'photo-1569718212165-3a8278d5f624', // 盛岡冷麺
    'g-iwate-3': 'photo-1569718212165-3a8278d5f624', // じゃじゃ麺→麺
    'g-iwate-4': 'photo-1544025162-d76694265947', // 前沢牛→肉

    // 宮城
    'g-miyagi-1': 'photo-1544025162-d76694265947', // 牛タン→肉
    'g-miyagi-2': 'photo-1558961363-fa8fdf82db35', // ずんだ餅→スイーツ
    'g-miyagi-3': 'photo-1579871494447-9811cf80d66c', // 笹かまぼこ→海鮮
    'g-miyagi-4': 'photo-1579871494447-9811cf80d66c', // 松島牡蠣→海鮮

    // 秋田
    'g-akita-1': 'photo-1547592166-23ac45744acd', // きりたんぽ→鍋
    'g-akita-2': 'photo-1569718212165-3a8278d5f624', // 稲庭うどん→麺
    'g-akita-3': 'photo-1579871494447-9811cf80d66c', // ハタハタ→魚
    'g-akita-4': 'photo-1544025162-d76694265947', // 比内地鶏→肉

    // 山形
    'g-yamagata-1': 'photo-1547592166-23ac45744acd', // 芋煮→鍋
    'g-yamagata-2': 'photo-1528821128474-27f963b062bf', // さくらんぼ→フルーツ
    'g-yamagata-3': 'photo-1569718212165-3a8278d5f624', // 冷やしラーメン
    'g-yamagata-4': 'photo-1544025162-d76694265947', // 米沢牛→肉

    // 福島
    'g-fukushima-1': 'photo-1569718212165-3a8278d5f624', // 喜多方ラーメン
    'g-fukushima-2': 'photo-1558961363-fa8fdf82db35', // ままどおる→スイーツ
    'g-fukushima-3': 'photo-1569718212165-3a8278d5f624', // ねぎそば→麺
    'g-fukushima-4': 'photo-1547592166-23ac45744acd', // 円盤餃子

    // 茨城
    'g-ibaraki-1': 'photo-1547592166-23ac45744acd', // 水戸納豆
    'g-ibaraki-2': 'photo-1547592166-23ac45744acd', // あんこう鍋→鍋

    // 栃木
    'g-tochigi-1': 'photo-1547592166-23ac45744acd', // 宇都宮餃子
    'g-tochigi-2': 'photo-1528821128474-27f963b062bf', // とちおとめ→フルーツ

    // 群馬
    'g-gunma-1': 'photo-1569718212165-3a8278d5f624', // 水沢うどん→麺
    'g-gunma-2': 'photo-1558961363-fa8fdf82db35', // 焼きまんじゅう→スイーツ

    // 埼玉
    'g-saitama-1': 'photo-1558961363-fa8fdf82db35', // さつまいもスイーツ

    // 千葉
    'g-chiba-1': 'photo-1569718212165-3a8278d5f624', // タンタンメン→ラーメン
    'g-chiba-2': 'photo-1579871494447-9811cf80d66c', // 房総海鮮→海鮮

    // 東京
    'g-tokyo-1': 'photo-1579871494447-9811cf80d66c', // 江戸前寿司
    'g-tokyo-2': 'photo-1547592166-23ac45744acd', // もんじゃ焼き
    'g-tokyo-3': 'photo-1569718212165-3a8278d5f624', // 東京ラーメン
    'g-tokyo-4': 'photo-1547592166-23ac45744acd', // 深川めし
    'g-tokyo-5': 'photo-1558961363-fa8fdf82db35', // 人形焼き→スイーツ
    'g-tokyo-6': 'photo-1544025162-d76694265947', // 天ぷら→揚げ物

    // 神奈川
    'g-kanagawa-1': 'photo-1547592166-23ac45744acd', // 横浜中華
    'g-kanagawa-2': 'photo-1579871494447-9811cf80d66c', // しらす丼→海鮮
    'g-kanagawa-3': 'photo-1455619452474-d2be8b1e70cd', // 横須賀カレー→カレー
    'g-kanagawa-4': 'photo-1569718212165-3a8278d5f624', // サンマーメン→ラーメン

    // 新潟
    'g-niigata-1': 'photo-1569718212165-3a8278d5f624', // へぎそば→麺
    'g-niigata-2': 'photo-1547592166-23ac45744acd', // コシヒカリ→米
    'g-niigata-3': 'photo-1544025162-d76694265947', // タレかつ丼
    'g-niigata-4': 'photo-1528821128474-27f963b062bf', // 日本酒

    // 富山
    'g-toyama-1': 'photo-1579871494447-9811cf80d66c', // ます寿司
    'g-toyama-2': 'photo-1579871494447-9811cf80d66c', // 白えび
    'g-toyama-3': 'photo-1579871494447-9811cf80d66c', // ホタルイカ
    'g-toyama-4': 'photo-1579871494447-9811cf80d66c', // ブリしゃぶ

    // 石川
    'g-ishikawa-1': 'photo-1455619452474-d2be8b1e70cd', // 金沢カレー
    'g-ishikawa-2': 'photo-1579871494447-9811cf80d66c', // 近江町海鮮
    'g-ishikawa-3': 'photo-1579871494447-9811cf80d66c', // のどぐろ
    'g-ishikawa-4': 'photo-1547592166-23ac45744acd', // 治部煮

    // 福井
    'g-fukui-1': 'photo-1579871494447-9811cf80d66c', // 越前がに
    'g-fukui-2': 'photo-1544025162-d76694265947', // ソースかつ丼→肉

    // 山梨
    'g-yamanashi-1': 'photo-1547592166-23ac45744acd', // ほうとう→鍋
    'g-yamanashi-2': 'photo-1528821128474-27f963b062bf', // 甲州ワイン

    // 長野
    'g-nagano-1': 'photo-1569718212165-3a8278d5f624', // 信州そば→麺
    'g-nagano-2': 'photo-1558961363-fa8fdf82db35', // おやき→スイーツ
    'g-nagano-3': 'photo-1544025162-d76694265947', // 馬刺し→肉
    'g-nagano-4': 'photo-1547592166-23ac45744acd', // 野沢菜→料理

    // 岐阜
    'g-gifu-1': 'photo-1544025162-d76694265947', // 飛騨牛→肉
    'g-gifu-2': 'photo-1544025162-d76694265947', // 鶏ちゃん→肉

    // 静岡
    'g-shizuoka-1': 'photo-1579871494447-9811cf80d66c', // うなぎ
    'g-shizuoka-2': 'photo-1547592166-23ac45744acd', // 静岡おでん
    'g-shizuoka-3': 'photo-1547592166-23ac45744acd', // 浜松餃子
    'g-shizuoka-4': 'photo-1569718212165-3a8278d5f624', // 富士宮やきそば
    'g-shizuoka-5': 'photo-1579871494447-9811cf80d66c', // 桜えび

    // 愛知
    'g-aichi-1': 'photo-1544025162-d76694265947', // 味噌カツ→肉
    'g-aichi-2': 'photo-1579871494447-9811cf80d66c', // ひつまぶし
    'g-aichi-3': 'photo-1544025162-d76694265947', // 手羽先→肉
    'g-aichi-4': 'photo-1569718212165-3a8278d5f624', // 台湾ラーメン
    'g-aichi-5': 'photo-1569718212165-3a8278d5f624', // きしめん→麺
    'g-aichi-6': 'photo-1547592166-23ac45744acd', // 味噌煮込み→鍋
    'g-aichi-7': 'photo-1558961363-fa8fdf82db35', // 小倉トースト→スイーツ

    // 三重
    'g-mie-1': 'photo-1569718212165-3a8278d5f624', // 伊勢うどん→麺
    'g-mie-2': 'photo-1544025162-d76694265947', // 松阪牛→肉
    'g-mie-3': 'photo-1558961363-fa8fdf82db35', // 赤福→スイーツ
    'g-mie-4': 'photo-1579871494447-9811cf80d66c', // 伊勢海老→海鮮

    // 滋賀
    'g-shiga-1': 'photo-1544025162-d76694265947', // 近江牛→肉
    'g-shiga-2': 'photo-1579871494447-9811cf80d66c', // 鮒寿司→海鮮

    // 京都
    'g-kyoto-1': 'photo-1547592166-23ac45744acd', // 京懐石→和食
    'g-kyoto-2': 'photo-1558961363-fa8fdf82db35', // 抹茶スイーツ
    'g-kyoto-3': 'photo-1547592166-23ac45744acd', // 湯豆腐→和食
    'g-kyoto-4': 'photo-1547592166-23ac45744acd', // 京漬物
    'g-kyoto-5': 'photo-1558961363-fa8fdf82db35', // 八つ橋→スイーツ
    'g-kyoto-6': 'photo-1569718212165-3a8278d5f624', // にしんそば→麺

    // 大阪
    'g-osaka-1': 'photo-1547592166-23ac45744acd', // たこ焼き
    'g-osaka-2': 'photo-1547592166-23ac45744acd', // お好み焼き
    'g-osaka-3': 'photo-1544025162-d76694265947', // 串カツ→揚げ物
    'g-osaka-4': 'photo-1547592166-23ac45744acd', // 551豚まん
    'g-osaka-5': 'photo-1544025162-d76694265947', // どて焼き→肉

    // 兵庫
    'g-hyogo-1': 'photo-1544025162-d76694265947', // 神戸牛→肉
    'g-hyogo-2': 'photo-1547592166-23ac45744acd', // 明石焼き
    'g-hyogo-3': 'photo-1547592166-23ac45744acd', // 姫路おでん
    'g-hyogo-4': 'photo-1569718212165-3a8278d5f624', // 出石皿そば→麺

    // 奈良
    'g-nara-1': 'photo-1579871494447-9811cf80d66c', // 柿の葉寿司
    'g-nara-2': 'photo-1569718212165-3a8278d5f624', // 三輪そうめん→麺

    // 和歌山
    'g-wakayama-1': 'photo-1569718212165-3a8278d5f624', // 和歌山ラーメン
    'g-wakayama-2': 'photo-1528821128474-27f963b062bf', // みかん→フルーツ

    // 鳥取
    'g-tottori-1': 'photo-1579871494447-9811cf80d66c', // 松葉ガニ
    'g-tottori-2': 'photo-1569718212165-3a8278d5f624', // 牛骨ラーメン

    // 島根
    'g-shimane-1': 'photo-1569718212165-3a8278d5f624', // 出雲そば→麺
    'g-shimane-2': 'photo-1547592166-23ac45744acd', // しじみ

    // 岡山
    'g-okayama-1': 'photo-1544025162-d76694265947', // デミカツ丼→肉
    'g-okayama-2': 'photo-1528821128474-27f963b062bf', // 白桃→フルーツ

    // 広島
    'g-hiroshima-1': 'photo-1547592166-23ac45744acd', // 広島お好み焼き
    'g-hiroshima-2': 'photo-1579871494447-9811cf80d66c', // 牡蠣→海鮮
    'g-hiroshima-3': 'photo-1579871494447-9811cf80d66c', // あなご飯→海鮮
    'g-hiroshima-4': 'photo-1569718212165-3a8278d5f624', // 尾道ラーメン
    'g-hiroshima-5': 'photo-1558961363-fa8fdf82db35', // もみじ饅頭→スイーツ

    // 山口
    'g-yamaguchi-1': 'photo-1579871494447-9811cf80d66c', // ふぐ→海鮮
    'g-yamaguchi-2': 'photo-1569718212165-3a8278d5f624', // 瓦そば→麺

    // 徳島
    'g-tokushima-1': 'photo-1569718212165-3a8278d5f624', // 徳島ラーメン
    'g-tokushima-2': 'photo-1579871494447-9811cf80d66c', // 鯛めし→海鮮
    'g-tokushima-3': 'photo-1528821128474-27f963b062bf', // すだち→フルーツ

    // 香川
    'g-kagawa-1': 'photo-1569718212165-3a8278d5f624', // 讃岐うどん→麺
    'g-kagawa-2': 'photo-1544025162-d76694265947', // 骨付鳥→肉
    'g-kagawa-3': 'photo-1544025162-d76694265947', // オリーブ牛→肉

    // 愛媛
    'g-ehime-1': 'photo-1579871494447-9811cf80d66c', // 鯛めし→海鮮
    'g-ehime-2': 'photo-1528821128474-27f963b062bf', // みかんジュース→フルーツ

    // 高知
    'g-kochi-1': 'photo-1579871494447-9811cf80d66c', // カツオたたき→海鮮
    'g-kochi-2': 'photo-1547592166-23ac45744acd', // 皿鉢料理
    'g-kochi-3': 'photo-1528821128474-27f963b062bf', // 土佐酒→ドリンク

    // 福岡
    'g-fukuoka-1': 'photo-1569718212165-3a8278d5f624', // 博多ラーメン
    'g-fukuoka-2': 'photo-1547592166-23ac45744acd', // もつ鍋→鍋
    'g-fukuoka-3': 'photo-1547592166-23ac45744acd', // 水炊き→鍋
    'g-fukuoka-4': 'photo-1579871494447-9811cf80d66c', // 明太子→海鮮
    'g-fukuoka-5': 'photo-1569718212165-3a8278d5f624', // 博多うどん→麺

    // 佐賀
    'g-saga-1': 'photo-1544025162-d76694265947', // 佐賀牛→肉
    'g-saga-2': 'photo-1579871494447-9811cf80d66c', // 呼子イカ→海鮮

    // 長崎
    'g-nagasaki-1': 'photo-1569718212165-3a8278d5f624', // ちゃんぽん→麺
    'g-nagasaki-2': 'photo-1558961363-fa8fdf82db35', // カステラ→スイーツ
    'g-nagasaki-3': 'photo-1569718212165-3a8278d5f624', // 皿うどん→麺
    'g-nagasaki-4': 'photo-1547592166-23ac45744acd', // トルコライス

    // 熊本
    'g-kumamoto-1': 'photo-1544025162-d76694265947', // 馬刺し→肉
    'g-kumamoto-2': 'photo-1569718212165-3a8278d5f624', // タイピーエン→麺
    'g-kumamoto-3': 'photo-1569718212165-3a8278d5f624', // 熊本ラーメン
    'g-kumamoto-4': 'photo-1547592166-23ac45744acd', // からし蓮根

    // 大分
    'g-oita-1': 'photo-1544025162-d76694265947', // とり天→肉
    'g-oita-2': 'photo-1579871494447-9811cf80d66c', // 関あじ関さば→海鮮
    'g-oita-3': 'photo-1569718212165-3a8278d5f624', // 別府冷麺→麺
    'g-oita-4': 'photo-1547592166-23ac45744acd', // だんご汁

    // 宮崎
    'g-miyazaki-1': 'photo-1544025162-d76694265947', // チキン南蛮→肉
    'g-miyazaki-2': 'photo-1528821128474-27f963b062bf', // マンゴー→フルーツ
    'g-miyazaki-3': 'photo-1544025162-d76694265947', // 炭火焼地鶏→肉
    'g-miyazaki-4': 'photo-1547592166-23ac45744acd', // 冷や汁

    // 鹿児島
    'g-kagoshima-1': 'photo-1544025162-d76694265947', // 黒豚→肉
    'g-kagoshima-2': 'photo-1547592166-23ac45744acd', // さつま揚げ
    'g-kagoshima-3': 'photo-1569718212165-3a8278d5f624', // 鹿児島ラーメン
    'g-kagoshima-4': 'photo-1528821128474-27f963b062bf', // 芋焼酎→ドリンク
    'g-kagoshima-5': 'photo-1579871494447-9811cf80d66c', // きびなご→海鮮

    // 沖縄
    'g-okinawa-1': 'photo-1569718212165-3a8278d5f624', // ソーキそば→麺
    'g-okinawa-2': 'photo-1547592166-23ac45744acd', // タコライス
    'g-okinawa-3': 'photo-1558961363-fa8fdf82db35', // ちんすこう→スイーツ
    'g-okinawa-4': 'photo-1547592166-23ac45744acd', // ゴーヤーチャンプルー
    'g-okinawa-5': 'photo-1558961363-fa8fdf82db35', // サーターアンダギー→スイーツ
    'g-okinawa-6': 'photo-1528821128474-27f963b062bf', // 泡盛→ドリンク
    'g-okinawa-7': 'photo-1544025162-d76694265947', // ラフテー→肉
    'g-okinawa-8': 'photo-1579871494447-9811cf80d66c', // 海ぶどう→海鮮
};

function updateFile(filePath, imageMap) {
    let content = readFileSync(filePath, 'utf-8');

    for (const [id, photoId] of Object.entries(imageMap)) {
        // IDに基づいて該当行を見つけて画像URLを置換
        const idPattern = new RegExp(
            `(id: '${id}',.*?image: ')https://images\\.unsplash\\.com/[^']+(')`
        );
        const newUrl = `https://images.unsplash.com/${photoId}?w=600&auto=format`;
        content = content.replace(idPattern, `$1${newUrl}$2`);
    }

    writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
}

const spotsPath = './src/data/spots.js';
const gourmetPath = './src/data/gourmet.js';

updateFile(spotsPath, spotImages);
updateFile(gourmetPath, gourmetImages);

console.log('All images updated!');
