export const springTypeList = [
    {
        id: 'sulfur',
        name: '硫黄泉',
        nameEn: 'Sulfur Spring',
        icon: '🌋',
        color: '#c8a84b',
        description: '硫化水素や硫黄化合物を含む温泉。独特の硫黄臭が特徴で、日本の温泉の中でも最も知名度が高い泉質のひとつ。白や乳白色に濁ることが多い。',
        effects: ['疲労回復', '慢性皮膚病', '神経痛', '関節痛', '高血圧', '動脈硬化'],
        caution: '心臓病・低血圧の方は長湯に注意。金属アクセサリーは変色する場合があります。',
        suitable_for: '疲れが溜まった方、皮膚のトラブルが気になる方',
        notable_onsen: ['登別温泉', '草津温泉', '蔵王温泉', '霧島温泉'],
        onsen_ids: ['o-hokkaido-1', 'o-gunma-1', 'o-kanagawa-1', 'o-oita-1']
    },
    {
        id: 'chloride',
        name: '塩化物泉',
        nameEn: 'Chloride Spring',
        icon: '🌊',
        color: '#5a9abf',
        description: 'ナトリウムや塩素イオンを多く含む温泉。塩分が皮膚の水分蒸発を防ぎ「保温の湯」とも呼ばれる。入浴後も体がポカポカと温まり続けるのが特徴。',
        effects: ['冷え性改善', '疲労回復', '神経痛', '関節リウマチ', '切り傷', '婦人病'],
        caution: '高血圧・心臓病の方は医師に相談を。飲泉する場合は塩分摂取量に注意。',
        suitable_for: '冷え性の方、体が温まりにくい方、運動後のリカバリー',
        notable_onsen: ['熱海温泉', '伊豆温泉郷', '有馬温泉'],
        onsen_ids: ['o-hokkaido-3', 'o-hyogo-1']
    },
    {
        id: 'bicarbonate',
        name: '炭酸水素塩泉（重曹泉）',
        nameEn: 'Bicarbonate Spring',
        icon: '✨',
        color: '#7dbfb5',
        description: '重炭酸イオンを多く含む温泉。「美肌の湯」として知られ、肌の余分な皮脂や角質を溶かし、なめらかでしっとりした肌に整えてくれる。無色透明のものが多い。',
        effects: ['美肌', '疲労回復', '慢性皮膚病', '切り傷', '末梢循環障害'],
        caution: '特になし。肌が敏感な方は長湯を避けてください。',
        suitable_for: '美肌を目指す方、女性全般、肌荒れが気になる方',
        notable_onsen: ['十勝川温泉', '支笏湖温泉', '由布院温泉'],
        onsen_ids: ['o-hokkaido-6', 'o-hokkaido-7', 'o-oita-2']
    },
    {
        id: 'simple',
        name: '単純泉',
        nameEn: 'Simple Spring',
        icon: '💧',
        color: '#88aacc',
        description: '溶存物質が少なく無色透明・無味無臭の温泉。刺激が少ないため、子どもや高齢者、肌が弱い方でも入りやすい。「やさしい湯」として幅広い層に親しまれる。',
        effects: ['疲労回復', '自律神経不安定症', '不眠症', 'うつ状態'],
        caution: '特になし。刺激が少ないため長時間入浴しやすいが、のぼせに注意。',
        suitable_for: '温泉初心者、お子様連れ、肌の敏感な方、ゆっくり療養したい方',
        notable_onsen: ['洞爺湖温泉', '層雲峡温泉', '奥日光温泉'],
        onsen_ids: ['o-hokkaido-2', 'o-hokkaido-5']
    },
    {
        id: 'acid',
        name: '酸性泉',
        nameEn: 'Acidic Spring',
        icon: '⚡',
        color: '#c9a44e',
        description: 'pH3未満の酸性が強い温泉。殺菌力が高く、慢性皮膚病や水虫などに効果があるとされる。草津温泉など日本を代表する名湯に多い。',
        effects: ['慢性皮膚病', '水虫', '糖尿病', '高血圧', '動脈硬化'],
        caution: '肌への刺激が強いため、入浴後は真水でのシャワーを推奨。乾燥肌の方は長湯を避けてください。',
        suitable_for: '皮膚トラブルが気になる方（医師への相談を推奨）',
        notable_onsen: ['草津温泉', '玉川温泉', '蔵王温泉'],
        onsen_ids: ['o-gunma-1']
    },
    {
        id: 'iron',
        name: '鉄泉',
        nameEn: 'Iron Spring',
        icon: '🔶',
        color: '#c47a3a',
        description: '鉄分を多く含む温泉。空気に触れると酸化して赤褐色・黄褐色に変わるのが特徴。有馬温泉の「金泉」が代表的。貧血・婦人病への効果が期待される。',
        effects: ['貧血', '婦人病', '疲労回復', '関節リウマチ'],
        caution: '衣服や浴槽が着色することがある。',
        suitable_for: '貧血気味の方、生理不順が気になる女性',
        notable_onsen: ['有馬温泉', '増富温泉'],
        onsen_ids: ['o-hyogo-1']
    },
    {
        id: 'sulfate',
        name: '硫酸塩泉',
        nameEn: 'Sulfate Spring',
        icon: '🌿',
        color: '#6aaa88',
        description: 'カルシウムやナトリウムの硫酸塩を含む温泉。「傷の湯」「卒中の湯」とも呼ばれ、動脈硬化や脳卒中後のリハビリに有効とされる。肌がつるつるになる美肌効果も。',
        effects: ['高血圧', '動脈硬化', '糖尿病', '神経痛', '筋肉痛', '美肌'],
        caution: '特になし。',
        suitable_for: '生活習慣病が気になる方、血圧・血糖値が高めの方',
        notable_onsen: ['野沢温泉', '下呂温泉'],
        onsen_ids: []
    },
    {
        id: 'radon',
        name: '放射能泉（ラドン泉）',
        nameEn: 'Radon Spring',
        icon: '🔮',
        color: '#9a7abf',
        description: '微量の放射性物質（ラドン）を含む温泉。「ラジウム泉」とも呼ばれ、低線量放射線の刺激で身体の自然治癒力を高めるとされる。',
        effects: ['痛風', '関節リウマチ', '動脈硬化', '高血圧', '慢性皮膚病'],
        caution: '妊婦・乳幼児は入浴を控えることを推奨。',
        suitable_for: '関節痛・リウマチが気になる方、慢性疾患の湯治目的',
        notable_onsen: ['三朝温泉（鳥取）', '増富温泉（山梨）'],
        onsen_ids: []
    },
    {
        id: 'carbonated',
        name: '二酸化炭素泉（炭酸泉）',
        nameEn: 'Carbonated Spring',
        icon: '🫧',
        color: '#5abfbf',
        description: '二酸化炭素（炭酸ガス）を1,000mg/L以上含む温泉。細かい気泡が全身を包み、血管を広げて血行を促進。「心臓の湯」とも呼ばれる。',
        effects: ['高血圧', '末梢循環障害', '動脈硬化', '切り傷', '冷え性'],
        caution: '心臓・肺に疾患がある方は医師に相談を。',
        suitable_for: '血行が悪い方、冷え性の方、高血圧が気になる方',
        notable_onsen: ['長湯温泉（大分）'],
        onsen_ids: ['o-oita-4']
    },
    {
        id: 'alkaline',
        name: 'アルカリ性単純泉',
        nameEn: 'Alkaline Simple Spring',
        icon: '🌸',
        color: '#d4a0c8',
        description: 'pH8.5以上のアルカリ性を示す単純泉。「美人の湯」として名高く、皮膚表面の古い角質を溶かしてつるつるとした肌に整える効果がある。無色透明でとろみがあるのが特徴。',
        effects: ['美肌', '疲労回復', '自律神経不安定症', '不眠症'],
        caution: '刺激が少ないが、アルカリが強いと肌への刺激になることも。',
        suitable_for: '美肌目的の方（特に女性）、肌荒れが気になる方',
        notable_onsen: ['嬉野温泉（佐賀）'],
        onsen_ids: []
    }
];

export function getSpringTypeById(id) {
    return springTypeList.find(s => s.id === id);
}
