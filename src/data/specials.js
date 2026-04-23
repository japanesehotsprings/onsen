export const specialList = [
    {
        id: 'yukimi-roten',
        title: '雪見露天ができる名湯',
        subtitle: '冬の絶景温泉',
        season: 'winter',
        scene: null,
        icon: '❄️',
        color: '#7aaed4',
        image: './specials/winter.png',
        description: '雪が静かに降り積もる中、温かい露天風呂に身を沈める。非日常の贅沢を味わえる、冬の温泉旅行の醍醐味。',
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
        description: '山々が赤や黄色に染まる秋の温泉地。露天風呂から眺める紅葉は、一生の思い出になる絶景。',
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
        description: '桜満開の温泉地で過ごす春の一日。花見と温泉を一緒に楽しめる特別なスポットを厳選。',
        onsen_ids: ['o-hokkaido-2', 'o-yamagata-3', 'o-yamagata-4', 'o-tochigi-3', 'o-kanagawa-2', 'o-shizuoka-1', 'o-shizuoka-3', 'o-gifu-1', 'o-hyogo-3', 'o-hyogo-1'],
        hotel_ids: []
    },
    {
        id: 'summer-highland',
        title: '夏の高原・避暑温泉',
        subtitle: '涼しい夏の温泉',
        season: 'summer',
        scene: null,
        icon: '🌿',
        color: '#5aaa7a',
        image: './specials/summer.png',
        description: '標高の高い高原や山間の温泉地で、夏の暑さを忘れるひととき。清涼な空気と温泉が体をリフレッシュ。',
        onsen_ids: ['o-hokkaido-7', 'o-akita-5', 'o-iwate-5', 'o-tochigi-1', 'o-gunma-3', 'o-gunma-1', 'o-nagano-4', 'o-nagano-6', 'o-gifu-2', 'o-gifu-3', 'o-nagano-2'],
        hotel_ids: []
    },
    {
        id: 'solo-travel',
        title: '一人旅歓迎の温泉宿',
        subtitle: '一人旅特集',
        season: null,
        scene: '一人旅',
        icon: '🧳',
        color: '#7a8abf',
        image: './specials/solo.png',
        description: '一人旅を温かく迎えてくれる宿を厳選。ひとり部屋完備、一人でも充分楽しめる温泉宿。',
        onsen_ids: ['o-yamagata-1', 'o-hyogo-3', 'o-nagano-3', 'o-tochigi-5', 'o-iwate-2', 'o-akita-1', 'o-gifu-1', 'o-kanagawa-1', 'o-oita-2'],
        hotel_ids: ['h-hokkaido-1-3']
    },
    {
        id: 'couple',
        title: 'カップルに人気の温泉宿',
        subtitle: 'カップル旅行特集',
        season: null,
        scene: 'カップル',
        icon: '💑',
        color: '#d4848a',
        image: './specials/couple.png',
        description: '二人きりで過ごす特別な時間。露天付き客室や貸切風呂など、カップルに人気の設備が充実した宿。',
        onsen_ids: ['o-shizuoka-3', 'o-kanagawa-1', 'o-hyogo-3', 'o-hyogo-1', 'o-gifu-1', 'o-oita-2', 'o-yamagata-1', 'o-nagano-4', 'o-kumamoto-1'],
        hotel_ids: ['h-hokkaido-1-2', 'h-hokkaido-2-1']
    },
    {
        id: 'family',
        title: '子連れ・家族で楽しめる温泉宿',
        subtitle: 'ファミリー温泉特集',
        season: null,
        scene: '家族',
        icon: '👨‍👩‍👧‍👦',
        color: '#5abf8a',
        image: './specials/family.png',
        description: 'お子様連れでも安心・楽しめる設備が充実した温泉宿。家族の思い出になる温泉旅行を。',
        onsen_ids: ['o-hokkaido-1', 'o-hokkaido-2', 'o-tochigi-1', 'o-tochigi-3', 'o-kanagawa-1', 'o-shizuoka-1', 'o-gifu-1', 'o-oita-1', 'o-kagoshima-1'],
        hotel_ids: ['h-hokkaido-1-1']
    },
    {
        id: 'womens-trip',
        title: '女子旅向け 美肌の温泉宿',
        subtitle: '女子旅特集',
        season: null,
        scene: '女子旅',
        icon: '💆‍♀️',
        color: '#c88abf',
        image: './specials/zyoshi.png',
        description: '美肌効果の高い温泉と、おしゃれで居心地のいい宿。女子旅を盛り上げるスポットを紹介。',
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7', 'o-gifu-1', 'o-saga-1', 'o-oita-2', 'o-kanagawa-1', 'o-yamagata-1', 'o-hyogo-3', 'o-nagano-4', 'o-kumamoto-2'],
        hotel_ids: []
    }
];

export function getSpecialById(id) {
    return specialList.find(s => s.id === id);
}
