export const courseList = [
    {
        id: 'noboribetsu-1night',
        title: '登別温泉 1泊2日モデルコース',
        subtitle: '北海道の名湯を満喫',
        prefecture: 'hokkaido',
        days: 2,
        onsen_id: 'o-hokkaido-1',
        hotel_id: 'h-hokkaido-1-1',
        spot_ids: ['s-hokkaido-3'],
        gourmet_ids: ['g-hokkaido-1', 'g-hokkaido-2'],
        description: '日本屈指の温泉地・登別温泉でゆっくり過ごす1泊2日プラン。地獄谷散策と多彩な温泉を楽しもう。',
        image: './onsen/noboribetsu.png',
        itinerary: [
            { day: 1, items: [
                { time: '10:00', label: '登別駅着、バスで温泉街へ' },
                { time: '11:00', label: '地獄谷・大湯沼を散策' },
                { time: '13:00', label: 'ランチ（ジンギスカン）' },
                { time: '15:00', label: 'チェックイン・温泉三昧' },
                { time: '18:00', label: '夕食（北海道の恵み）' },
                { time: '20:00', label: '夜の露天風呂へ' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の温泉・朝食' },
                { time: '10:00', label: 'チェックアウト' },
                { time: '11:00', label: 'クマ牧場（オプション）' },
                { time: '13:00', label: '海鮮ランチ' },
                { time: '15:00', label: '帰路' }
            ]}
        ]
    },
    {
        id: 'toyako-1night',
        title: '洞爺湖温泉 1泊2日モデルコース',
        subtitle: '湖畔リゾートで癒しの旅',
        prefecture: 'hokkaido',
        days: 2,
        onsen_id: 'o-hokkaido-2',
        hotel_id: 'h-hokkaido-2-1',
        spot_ids: [],
        gourmet_ids: ['g-hokkaido-2'],
        description: '洞爺湖畔に立つ絶景温泉リゾートで過ごす優雅な1泊2日。湖面に映る有珠山と花火の絶景。',
        image: './onsen/toyako.png',
        itinerary: [
            { day: 1, items: [
                { time: '12:00', label: '洞爺湖温泉着' },
                { time: '13:00', label: 'ランチ後チェックイン' },
                { time: '15:00', label: '湖畔散策・足湯体験' },
                { time: '18:00', label: '夕食（湖を眺めながら）' },
                { time: '20:45', label: '夜の定期花火大会（4〜10月）' }
            ]},
            { day: 2, items: [
                { time: '7:00', label: '朝の露天風呂（洞爺湖一望）' },
                { time: '9:00', label: '朝食後チェックアウト' },
                { time: '10:00', label: '有珠山ロープウェイ（オプション）' },
                { time: '13:00', label: '帰路' }
            ]}
        ]
    }
];

export function getCourseById(id) {
    return courseList.find(c => c.id === id);
}
