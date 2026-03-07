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
    { id: 'hokkaido', name: '北海道', region: 'hokkaido', kana: 'ほっかいどう', image: './prefectures/hokkaido.png' },

    // 東北
    { id: 'aomori', name: '青森県', region: 'tohoku', kana: 'あおもりけん', image: './prefectures/aomori.png' },
    { id: 'iwate', name: '岩手県', region: 'tohoku', kana: 'いわてけん', image: './prefectures/iwate.png' },
    { id: 'miyagi', name: '宮城県', region: 'tohoku', kana: 'みやぎけん', image: './prefectures/miyagi.png' },
    { id: 'akita', name: '秋田県', region: 'tohoku', kana: 'あきたけん', image: './prefectures/akita.png' },
    { id: 'yamagata', name: '山形県', region: 'tohoku', kana: 'やまがたけん', image: './prefectures/yamagata.png' },
    { id: 'fukushima', name: '福島県', region: 'tohoku', kana: 'ふくしまけん', image: './prefectures/fukushima.png' },

    // 関東
    { id: 'ibaraki', name: '茨城県', region: 'kanto', kana: 'いばらきけん', image: './prefectures/ibaraki.png' },
    { id: 'tochigi', name: '栃木県', region: 'kanto', kana: 'とちぎけん', image: './prefectures/tochigi.png' },
    { id: 'gunma', name: '群馬県', region: 'kanto', kana: 'ぐんまけん', image: './prefectures/gunma.png' },
    { id: 'saitama', name: '埼玉県', region: 'kanto', kana: 'さいたまけん', image: './prefectures/saitama.png' },
    { id: 'chiba', name: '千葉県', region: 'kanto', kana: 'ちばけん', image: './prefectures/chiba.png' },
    { id: 'tokyo', name: '東京都', region: 'kanto', kana: 'とうきょうと', image: './prefectures/tokyo.png' },
    { id: 'kanagawa', name: '神奈川県', region: 'kanto', kana: 'かながわけん', image: './prefectures/kanagawa.png' },

    // 中部
    { id: 'niigata', name: '新潟県', region: 'chubu', kana: 'にいがたけん', image: './prefectures/niigata.png' },
    { id: 'toyama', name: '富山県', region: 'chubu', kana: 'とやまけん', image: './prefectures/toyama.png' },
    { id: 'ishikawa', name: '石川県', region: 'chubu', kana: 'いしかわけん', image: './prefectures/ishikawa.png' },
    { id: 'fukui', name: '福井県', region: 'chubu', kana: 'ふくいけん', image: './prefectures/fukui.png' },
    { id: 'yamanashi', name: '山梨県', region: 'chubu', kana: 'やまなしけん', image: './prefectures/yamanashi.png' },
    { id: 'nagano', name: '長野県', region: 'chubu', kana: 'ながのけん', image: './prefectures/nagano.png' },
    { id: 'gifu', name: '岐阜県', region: 'chubu', kana: 'ぎふけん', image: './prefectures/gifu.png' },
    { id: 'shizuoka', name: '静岡県', region: 'chubu', kana: 'しずおかけん', image: './prefectures/shizuoka.png' },
    { id: 'aichi', name: '愛知県', region: 'chubu', kana: 'あいちけん', image: './prefectures/aichi.png' },

    // 近畿
    { id: 'mie', name: '三重県', region: 'kinki', kana: 'みえけん', image: './prefectures/mie.png' },
    { id: 'shiga', name: '滋賀県', region: 'kinki', kana: 'しがけん', image: './prefectures/shiga.png' },
    { id: 'kyoto', name: '京都府', region: 'kinki', kana: 'きょうとふ', image: './prefectures/kyoto.png' },
    { id: 'osaka', name: '大阪府', region: 'kinki', kana: 'おおさかふ', image: './prefectures/osaka.png' },
    { id: 'hyogo', name: '兵庫県', region: 'kinki', kana: 'ひょうごけん', image: './prefectures/hyogo.png' },
    { id: 'nara', name: '奈良県', region: 'kinki', kana: 'ならけん', image: './prefectures/nara.png' },
    { id: 'wakayama', name: '和歌山県', region: 'kinki', kana: 'わかやまけん', image: './prefectures/wakayama.png' },

    // 中国
    { id: 'tottori', name: '鳥取県', region: 'chugoku', kana: 'とっとりけん', image: './prefectures/tottori.png' },
    { id: 'shimane', name: '島根県', region: 'chugoku', kana: 'しまねけん', image: './prefectures/shimane.png' },
    { id: 'okayama', name: '岡山県', region: 'chugoku', kana: 'おかやまけん', image: './prefectures/okayama.png' },
    { id: 'hiroshima', name: '広島県', region: 'chugoku', kana: 'ひろしまけん', image: './prefectures/hiroshima.png' },
    { id: 'yamaguchi', name: '山口県', region: 'chugoku', kana: 'やまぐちけん', image: './prefectures/yamaguchi.png' },

    // 四国
    { id: 'tokushima', name: '徳島県', region: 'shikoku', kana: 'とくしまけん', image: './prefectures/tokushima.png' },
    { id: 'kagawa', name: '香川県', region: 'shikoku', kana: 'かがわけん', image: './prefectures/kagawa.png' },
    { id: 'ehime', name: '愛媛県', region: 'shikoku', kana: 'えひめけん', image: './prefectures/ehime.png' },
    { id: 'kochi', name: '高知県', region: 'shikoku', kana: 'こうちけん', image: './prefectures/kochi.png' },

    // 九州・沖縄
    { id: 'fukuoka', name: '福岡県', region: 'kyushu', kana: 'ふくおかけん', image: './prefectures/fukuoka.png' },
    { id: 'saga', name: '佐賀県', region: 'kyushu', kana: 'さがけん', image: './prefectures/saga.png' },
    { id: 'nagasaki', name: '長崎県', region: 'kyushu', kana: 'ながさきけん', image: './prefectures/nagasaki.png' },
    { id: 'kumamoto', name: '熊本県', region: 'kyushu', kana: 'くまもとけん', image: './prefectures/kumamoto.png' },
    { id: 'oita', name: '大分県', region: 'kyushu', kana: 'おおいたけん', image: './prefectures/oita.png' },
    { id: 'miyazaki', name: '宮崎県', region: 'kyushu', kana: 'みやざきけん', image: './prefectures/miyazaki.png' },
    { id: 'kagoshima', name: '鹿児島県', region: 'kyushu', kana: 'かごしまけん', image: './prefectures/kagoshima.png' },
    { id: 'okinawa', name: '沖縄県', region: 'kyushu', kana: 'おきなわけん', image: './prefectures/okinawa.png' },
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
