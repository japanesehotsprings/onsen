export const specialList = [
    {
        id: 'yukimi-roten',
        title: '雪の季節に訪ねたい温泉地',
        subtitle: '冬の絶景温泉',
        season: 'winter',
        scene: null,
        icon: '❄️',
        color: '#7aaed4',
        image: './specials/winter.png',
        description: '雪の多い地域にある温泉地を集めました。雪見露天を楽しみたいときは、宿の露天風呂の有無と冬の道路・交通を事前に確認しましょう。',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-5', 'o-hokkaido-9', 'o-aomori-1', 'o-iwate-2', 'o-iwate-4', 'o-akita-1', 'o-yamagata-2', 'o-tochigi-2', 'o-gunma-1', 'o-gunma-3', 'o-nagano-2', 'o-nagano-4', 'o-niigata-2'],
        hotel_ids: []
    },
    {
        id: 'koyo-onsen',
        title: '紅葉×温泉 絶景スポット',
        subtitle: '秋の温泉旅行',
        season: 'autumn',
        scene: null,
        icon: '🍁',
        color: '#c47a3a',
        image: './specials/autumn.png',
        description: '山や渓谷に囲まれ、秋の紅葉とあわせて楽しめる温泉地を集めました。見頃は年や標高によって変わるので、現地の紅葉情報を確認してから出かけましょう。',
        onsen_ids: ['o-hokkaido-5', 'o-hokkaido-3', 'o-akita-1', 'o-yamagata-1', 'o-tochigi-1', 'o-tochigi-2', 'o-gunma-4', 'o-nagano-3', 'o-gifu-2', 'o-gifu-3', 'o-kanagawa-1', 'o-kumamoto-1'],
        hotel_ids: []
    },
    {
        id: 'sakura-onsen',
        title: '桜の季節に訪れたい温泉地',
        subtitle: '春の温泉旅行',
        season: 'spring',
        scene: null,
        icon: '🌸',
        color: '#e0a0be',
        image: './specials/spring.png',
        description: '春の花見とあわせて訪ねたい温泉地を集めました。桜の見頃は年や地域で大きく変わるので、開花情報を確認してから出かけましょう。',
        onsen_ids: ['o-hokkaido-2', 'o-yamagata-3', 'o-yamagata-4', 'o-tochigi-3', 'o-kanagawa-2', 'o-shizuoka-1', 'o-shizuoka-3', 'o-gifu-1', 'o-hyogo-3', 'o-hyogo-1'],
        hotel_ids: []
    },
    {
        id: 'summer-highland',
        title: '夏に訪ねたい山と湖の温泉',
        subtitle: '涼しい夏の温泉',
        season: 'summer',
        scene: null,
        icon: '🌿',
        color: '#5aaa7a',
        image: './specials/summer.png',
        description: '山あいや湖のほとりにあり、夏の避暑とあわせて楽しめる温泉地を集めました。',
        onsen_ids: ['o-hokkaido-7', 'o-akita-5', 'o-iwate-5', 'o-tochigi-1', 'o-gunma-3', 'o-gunma-1', 'o-nagano-4', 'o-nagano-6', 'o-gifu-2', 'o-gifu-3', 'o-nagano-2'],
        hotel_ids: []
    },
    {
        id: 'solo-travel',
        title: '一人旅で訪ねたい温泉地',
        subtitle: '一人旅特集',
        season: null,
        scene: '一人旅',
        icon: '🧳',
        color: '#7a8abf',
        image: './specials/solo.png',
        description: '温泉街の散策や湯めぐりを、ひとりでゆっくり楽しめる温泉地を集めました。一人で泊まれるプランがあるかは、予約サイトや宿で確認しましょう。',
        onsen_ids: ['o-yamagata-1', 'o-hyogo-3', 'o-nagano-3', 'o-tochigi-5', 'o-iwate-2', 'o-akita-1', 'o-gifu-1', 'o-kanagawa-1', 'o-oita-2'],
        hotel_ids: []
    },
    {
        id: 'couple',
        title: 'カップル旅行で訪ねたい温泉地',
        subtitle: 'カップル旅行特集',
        season: null,
        scene: 'カップル',
        icon: '💑',
        color: '#d4848a',
        image: './specials/couple.png',
        description: '温泉街の散策や景色を二人で楽しめる温泉地を集めました。露天風呂付き客室や貸切風呂の有無は、宿ごとに確認しましょう。',
        onsen_ids: ['o-shizuoka-3', 'o-kanagawa-1', 'o-hyogo-3', 'o-hyogo-1', 'o-gifu-1', 'o-oita-2', 'o-yamagata-1', 'o-nagano-4', 'o-kumamoto-1'],
        hotel_ids: []
    },
    {
        id: 'family',
        title: '家族旅行で訪ねたい温泉地',
        subtitle: 'ファミリー温泉特集',
        season: null,
        scene: '家族',
        icon: '👨‍👩‍👧‍👦',
        color: '#5abf8a',
        image: './specials/family.png',
        description: '観光やレジャーとあわせて家族で楽しめる温泉地を集めました。子ども向けの設備や混浴の年齢ルールは、宿や自治体の案内で確認しましょう。',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-2', 'o-tochigi-1', 'o-tochigi-3', 'o-kanagawa-1', 'o-shizuoka-1', 'o-gifu-1', 'o-oita-1', 'o-kagoshima-1'],
        hotel_ids: []
    },
    {
        id: 'womens-trip',
        title: '女子旅で訪ねたい温泉地',
        subtitle: '女子旅特集',
        season: null,
        scene: '女子旅',
        icon: '💆‍♀️',
        color: '#c88abf',
        image: './specials/zyoshi.png',
        description: '温泉街の散策やご当地グルメとあわせて楽しめる温泉地を集めました。泉質は各温泉地のページで確認できます。',
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7', 'o-gifu-1', 'o-saga-1', 'o-oita-2', 'o-kanagawa-1', 'o-yamagata-1', 'o-hyogo-3', 'o-nagano-4', 'o-kumamoto-2'],
        hotel_ids: []
    }
];

export function getSpecialById(id) {
    return specialList.find(s => s.id === id);
}
