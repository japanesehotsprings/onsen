/**
 * 47都道府県の基本データ
 * 地域区分と都道府県情報を管理するモジュール
 */

// 地域定義
export const regions = [
    { id: 'hokkaido', name: '北海道' },
    { id: 'tohoku', name: '東北' },
    { id: 'kanto', name: '関東' },
    { id: 'chubu', name: '中部' },
    { id: 'kinki', name: '近畿' },
    { id: 'chugoku', name: '中国' },
    { id: 'shikoku', name: '四国' },
    { id: 'kyushu', name: '九州・沖縄' },
];

// 47都道府県データ
export const prefectures = [
    // 北海道
    { id: 'hokkaido', name: '北海道', region: 'hokkaido', kana: 'ほっかいどう', image: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=600&auto=format' },

    // 東北
    { id: 'aomori', name: '青森県', region: 'tohoku', kana: 'あおもりけん', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format' },
    { id: 'iwate', name: '岩手県', region: 'tohoku', kana: 'いわてけん', image: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=600&auto=format' },
    { id: 'miyagi', name: '宮城県', region: 'tohoku', kana: 'みやぎけん', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&auto=format' },
    { id: 'akita', name: '秋田県', region: 'tohoku', kana: 'あきたけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'yamagata', name: '山形県', region: 'tohoku', kana: 'やまがたけん', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format' },
    { id: 'fukushima', name: '福島県', region: 'tohoku', kana: 'ふくしまけん', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format' },

    // 関東
    { id: 'ibaraki', name: '茨城県', region: 'kanto', kana: 'いばらきけん', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format' },
    { id: 'tochigi', name: '栃木県', region: 'kanto', kana: 'とちぎけん', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format' },
    { id: 'gunma', name: '群馬県', region: 'kanto', kana: 'ぐんまけん', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format' },
    { id: 'saitama', name: '埼玉県', region: 'kanto', kana: 'さいたまけん', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format' },
    { id: 'chiba', name: '千葉県', region: 'kanto', kana: 'ちばけん', image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&auto=format' },
    { id: 'tokyo', name: '東京都', region: 'kanto', kana: 'とうきょうと', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format' },
    { id: 'kanagawa', name: '神奈川県', region: 'kanto', kana: 'かながわけん', image: 'https://images.unsplash.com/photo-1528164344885-47b852f56fd7?w=600&auto=format' },

    // 中部
    { id: 'niigata', name: '新潟県', region: 'chubu', kana: 'にいがたけん', image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&auto=format' },
    { id: 'toyama', name: '富山県', region: 'chubu', kana: 'とやまけん', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&auto=format' },
    { id: 'ishikawa', name: '石川県', region: 'chubu', kana: 'いしかわけん', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format' },
    { id: 'fukui', name: '福井県', region: 'chubu', kana: 'ふくいけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'yamanashi', name: '山梨県', region: 'chubu', kana: 'やまなしけん', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format' },
    { id: 'nagano', name: '長野県', region: 'chubu', kana: 'ながのけん', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format' },
    { id: 'gifu', name: '岐阜県', region: 'chubu', kana: 'ぎふけん', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format' },
    { id: 'shizuoka', name: '静岡県', region: 'chubu', kana: 'しずおかけん', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format' },
    { id: 'aichi', name: '愛知県', region: 'chubu', kana: 'あいちけん', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format' },

    // 近畿
    { id: 'mie', name: '三重県', region: 'kinki', kana: 'みえけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'shiga', name: '滋賀県', region: 'kinki', kana: 'しがけん', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format' },
    { id: 'kyoto', name: '京都府', region: 'kinki', kana: 'きょうとふ', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format' },
    { id: 'osaka', name: '大阪府', region: 'kinki', kana: 'おおさかふ', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&auto=format' },
    { id: 'hyogo', name: '兵庫県', region: 'kinki', kana: 'ひょうごけん', image: 'https://images.unsplash.com/photo-1528164344885-47b852f56fd7?w=600&auto=format' },
    { id: 'nara', name: '奈良県', region: 'kinki', kana: 'ならけん', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format' },
    { id: 'wakayama', name: '和歌山県', region: 'kinki', kana: 'わかやまけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },

    // 中国
    { id: 'tottori', name: '鳥取県', region: 'chugoku', kana: 'とっとりけん', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format' },
    { id: 'shimane', name: '島根県', region: 'chugoku', kana: 'しまねけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'okayama', name: '岡山県', region: 'chugoku', kana: 'おかやまけん', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format' },
    { id: 'hiroshima', name: '広島県', region: 'chugoku', kana: 'ひろしまけん', image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format' },
    { id: 'yamaguchi', name: '山口県', region: 'chugoku', kana: 'やまぐちけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },

    // 四国
    { id: 'tokushima', name: '徳島県', region: 'shikoku', kana: 'とくしまけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'kagawa', name: '香川県', region: 'shikoku', kana: 'かがわけん', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format' },
    { id: 'ehime', name: '愛媛県', region: 'shikoku', kana: 'えひめけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'kochi', name: '高知県', region: 'shikoku', kana: 'こうちけん', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format' },

    // 九州・沖縄
    { id: 'fukuoka', name: '福岡県', region: 'kyushu', kana: 'ふくおかけん', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format' },
    { id: 'saga', name: '佐賀県', region: 'kyushu', kana: 'さがけん', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format' },
    { id: 'nagasaki', name: '長崎県', region: 'kyushu', kana: 'ながさきけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'kumamoto', name: '熊本県', region: 'kyushu', kana: 'くまもとけん', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&auto=format' },
    { id: 'oita', name: '大分県', region: 'kyushu', kana: 'おおいたけん', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format' },
    { id: 'miyazaki', name: '宮崎県', region: 'kyushu', kana: 'みやざきけん', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format' },
    { id: 'kagoshima', name: '鹿児島県', region: 'kyushu', kana: 'かごしまけん', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&auto=format' },
    { id: 'okinawa', name: '沖縄県', region: 'kyushu', kana: 'おきなわけん', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format' },
];

/**
 * 都道府県IDから都道府県データを取得
 */
export function getPrefectureById(id) {
    return prefectures.find(p => p.id === id);
}

/**
 * 地域IDに属する都道府県一覧を取得
 */
export function getPrefecturesByRegion(regionId) {
    return prefectures.filter(p => p.region === regionId);
}
