/**
 * 温泉宿データ
 * 各温泉地（onsen_id）に紐づく宿の情報を管理するモジュール
 */

export const hotelList = [
    // ===== 登別温泉（北海道）=====
    {
        id: 'h-hokkaido-1-1',
        onsen_id: 'o-hokkaido-1',
        name: '第一滝本館',
        prefecture: 'hokkaido',
        type: '大型温泉旅館',
        description: '登別温泉のシンボル的存在。3,500坪の広大な敷地に源泉掛け流しの露天風呂を含む多彩な湯が楽しめる。地獄谷も目の前。',
        price: '2食付き 22,000円〜',
        image: './hotels/daiichitaki.png',
        tags: ['源泉掛け流し', '露天風呂', '大型旅館', '地獄谷徒歩圏'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad364904%2F', rakuten: 'https://a.r10.to/hkkqqH', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000587%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000587%252F' }
    },
    {
        id: 'h-hokkaido-1-2',
        onsen_id: 'o-hokkaido-1',
        name: '登別グランドホテル',
        prefecture: 'hokkaido',
        type: 'リゾートホテル',
        description: '山の中腹に位置する絶景の温泉宿。硫黄泉・食塩泉など5種の浴槽と展望露天風呂からの眺めが自慢。',
        price: '2食付き 18,000円〜',
        image: './hotels/noboribetsugrand.png',
        tags: ['展望露天', '5種の湯', 'リゾート'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad331184%2F', rakuten: 'https://a.r10.to/hPp6LH', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000583%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000583%252F' }
    },
    {
        id: 'h-hokkaido-1-3',
        onsen_id: 'o-hokkaido-1',
        name: '滝乃家',
        prefecture: 'hokkaido',
        type: '純和風旅館',
        description: '創業100年を超える老舗旅館。こじんまりとした純和風の宿で、行き届いたおもてなしと上質な料理が評判。',
        price: '2食付き 28,000円〜',
        image: './hotels/takinoya.png',
        tags: ['老舗旅館', '純和風', '美食', 'おもてなし'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad320864%2F', rakuten: 'https://a.r10.to/h5yL0p', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001424', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001424' }
    },

    // ===== 洞爺湖温泉（北海道）=====
    {
        id: 'h-hokkaido-2-1',
        onsen_id: 'o-hokkaido-2',
        name: 'ザ・ウィンザーホテル洞爺',
        prefecture: 'hokkaido',
        type: 'ラグジュアリーホテル',
        description: 'G8サミット会場にもなった世界的な高級リゾート。洞爺湖と有珠山を望む絶景の露天風呂と一流レストランが揃う。',
        price: '2食付き 70,000円〜',
        image: './hotels/thewindsorhoteldoya.png',
        tags: ['G8サミット', 'ラグジュアリー', '絶景', '世界級'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad301556%2F', rakuten: 'https://a.r10.to/h5cNCc', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000440%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000440%252F' }
    },
    {
        id: 'h-hokkaido-2-2',
        onsen_id: 'o-hokkaido-2',
        name: '洞爺湖万世閣ホテルレイクサイドテラス',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '洞爺湖畔に建つ眺望自慢の温泉ホテル。季節ごとに開催される花火を湯船から堪能できる特別な体験が人気。',
        price: '2食付き 25,000円〜',
        image: './hotels/toyokomanseikakuhotellakesideterrace.png',
        tags: ['湖畔', '花火鑑賞', 'リゾート'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324102%2F', rakuten: 'https://a.r10.to/h5CKEk', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030990%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030990%252F' }
    },

    // ===== 定山渓温泉（北海道）=====
    {
        id: 'h-hokkaido-3-1',
        onsen_id: 'o-hokkaido-3',
        name: '定山渓万世閣ホテルミリオーネ',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '定山渓温泉の中心部に位置する大型温泉ホテル。大浴場には露天風呂やサウナ、寝湯など多彩な湯船があり、リラックスできる。',
        price: '2食付き 20,000円〜',
        image: './hotels/jyouzankeimilione.png',
        tags: ['温泉リゾート', '露天風呂', 'サウナ', '寝湯'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad319724%2F', rakuten: 'https://a.r10.to/h5Q5z3', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030433%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030433%252F' }
    },
    {
        id: 'h-hokkaido-3-2',
        onsen_id: 'o-hokkaido-3',
        name: '定山渓鶴雅リゾートスパ森の謌',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '定山渓温泉の自然に囲まれた静かな場所に佇む、上質な温泉リゾート。露天風呂やサウナ、寝湯など多彩な湯船があり、リラックスできる。',
        price: '2食付き 25,000円〜',
        image: './hotels/jyouzankeimorinouta.png',
        tags: ['温泉リゾート', '露天風呂', 'サウナ', '寝湯'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad352535%2F', rakuten: 'https://a.r10.to/h5seya', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001659%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001659%252F' }
    },
    {
        id: 'h-hokkaido-3-3',
        onsen_id: 'o-hokkaido-3',
        name: '奥定山渓温泉 佳松御苑',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '国立公園の原生林に抱かれた、全室に展望温泉を備えた森のオーベルジュ。四季折々の自然美と洗練された美食を堪能できる。',
        price: '2食付き 35,000円〜',
        image: './hotels/jyouzankeikashoumatsugyoen.png',
        tags: ['全室温泉', 'オーベルジュ', '美食'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad327601%2F', rakuten: 'https://a.r10.to/h5Jkno', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002589%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002589%252F' }
    },

    // ===== 阿寒湖温泉（北海道）=====
    {
        id: 'h-hokkaido-4-1',
        onsen_id: 'o-hokkaido-4',
        name: 'ニュー阿寒ホテル',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '阿寒湖を望む屋上インフィニティスパで、湖と空が一体化する圧倒的な開放感を満喫。北海道の旬を凝縮したビュッフェと共に、大自然のパノラマに抱かれる贅沢な時間を過ごせる。',
        price: '2食付き 19,000円〜',
        image: './hotels/newakan.png',
        tags: ['温泉リゾート', '露天風呂', 'インフィニティスパ', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324579%2F', rakuten: 'https://a.r10.to/h9VwKd', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030778%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030778' }
    },
    {
        id: 'h-hokkaido-4-2',
        onsen_id: 'o-hokkaido-4',
        name: 'あかん遊久の里鶴雅',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '阿寒湖の絶景とアイヌ文化の情緒が息づく、圧倒的なスケールを誇る温泉宿。多彩な湯殿や豪華なビュッフェで、阿寒の自然と深いおもてなしを五感で堪能できる。',
        price: '2食付き 30,000円〜',
        image: './hotels/akantsuruga.png',
        tags: ['温泉リゾート', '露天風呂', 'アイヌ', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad332582%2F', rakuten: 'https://a.r10.to/hXQb4J', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000872%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000872%252F' }
    },
    {
        id: 'h-hokkaido-4-3',
        onsen_id: 'o-hokkaido-4',
        name: 'あかん鶴雅別荘鄙の座',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '阿寒湖の静寂に抱かれた、全室露天風呂付きの大人専用の隠れ宿。故郷のような温もりと洗練された美食、そして圧倒的なプライベート空間で至福の時を過ごせる。',
        price: '2食付き 50,000円〜',
        image: './hotels/akanhinanoza.png',
        tags: ['全室温泉', '露天風呂', '大人専用', '美食'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334472%2F', rakuten: 'https://a.r10.to/hkQXOl', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000900%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000900%252F' }
    },

    // ===== 層雲峡温泉（北海道）=====
    {
        id: 'h-hokkaido-5-1',
        onsen_id: 'o-hokkaido-5',
        name: 'ホテル大雪 ONSEN & CANYON RESORT',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '大雪山国立公園の絶景を見渡す、層雲峡で最も高台に位置する温泉リゾート。趣の異なる3つの大浴場を巡り、ダイナミックな峡谷美と源泉掛け流しの名湯を存分に堪能できる。',
        price: '2食付き 20,000円〜',
        image: './hotels/hoteltaisetsu.png',
        tags: ['温泉リゾート', '露天風呂', '渓谷美', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad308034%2F', rakuten: 'https://a.r10.to/hgA9IV', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001617%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001617%252F' }
    },
    {
        id: 'h-hokkaido-5-2',
        onsen_id: 'o-hokkaido-5',
        name: '朝陽リゾートホテル',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '層雲峡の森に包まれた、北欧風のモダンな雰囲気が漂う癒しの温泉リゾート。2つの異なる源泉を贅沢に掛け流しで楽しみ、地元の旬を味わうビュッフェで心身ともに満たされる。',
        price: '2食付き 15,000円〜',
        image: './hotels/choyo.png',
        tags: ['源泉掛け流し', '北欧スタイル', '癒しの空間', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad351084%2F', rakuten: 'https://a.r10.to/h5IblS', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00913201%252F' }
    },
    {
        id: 'h-hokkaido-5-3',
        onsen_id: 'o-hokkaido-5',
        name: '層雲閣',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '断崖絶壁が迫る峡谷の特等席に佇む、創業百年の歴史を誇る老舗温泉リゾート。大迫力のパノラマ露天と共に、ラウンジや夕食時のフリードリンクを含むオールインクルーシブで層雲峡の自然を堪能できる。',
        price: '2食付き 18,000円〜',
        image: './hotels/sounkaku.png',
        tags: ['老舗旅館', '絶景露天風呂', '峡谷美', '源泉掛け流し', 'オールインクルーシブ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad328745%2F', rakuten: 'https://a.r10.to/hPa4ul', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901931%252F' }
    },

    // ===== 十勝川温泉（北海道）=====
    {
        id: 'h-hokkaido-6-1',
        onsen_id: 'o-hokkaido-6',
        name: '笹井ホテル',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '十勝平野の豊かな恵みに包まれた、植物性の「モール温泉」を堪能できる老舗の温泉リゾート。美肌の湯として名高い琥珀色の源泉を源泉掛け流しで楽しみ、地元の旬が並ぶ豪華ビュッフェを存分に満喫できる。',
        price: '2食付き 12,000円〜',
        image: './hotels/sasaihotel.png',
        tags: ['モール温泉', '源泉掛け流し', '十勝グルメ', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad310011%2F', rakuten: 'https://a.r10.to/hPVP7b', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00907849%252F' }
    },
    {
        id: 'h-hokkaido-6-2',
        onsen_id: 'o-hokkaido-6',
        name: '十勝幕別温泉グランヴィリオホテル',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '十勝平野の高台に佇む、モール温泉と多彩なリラクゼーションが魅力の温泉リゾート。源泉掛け流しの琥珀色の湯に浸かり、地元の山海の幸を揃えた豪華ビュッフェを心ゆくまで堪能できる。',
        price: '2食付き 12,000円〜',
        image: './hotels/tokachigawagranvirio.png',
        tags: ['モール温泉', '源泉掛け流し', 'パノラマビュー', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad366268%2F', rakuten: 'https://a.r10.to/hg4Ust', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00080441%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00080441%252F' }
    },
    {
        id: 'h-hokkaido-6-3',
        onsen_id: 'o-hokkaido-6',
        name: '観月苑',
        prefecture: 'hokkaido',
        type: '温泉旅館',
        description: '十勝川のほとりに佇む、木の温もりと和の情緒が溢れる老舗の温泉旅館。美肌成分が豊富な琥珀色のモール温泉を源泉掛け流しで楽しみ、十勝の豊かな山海の幸を活かした美食を堪能できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/kangetsuen.png',
        tags: ['モール温泉', '源泉掛け流し', '十勝グルメ', '庭園露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334418%2F', rakuten: 'https://a.r10.to/h5aos4', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000844%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000844%252F' }
    },
    {
        id: 'h-hokkaido-6-4',
        onsen_id: 'o-hokkaido-6',
        name: '第一ホテル',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '十勝川の雄大な流れを望む、洗練された寛ぎと十勝の恵みを五感で愉しむ温泉リゾート。植物性の「モール温泉」を多彩な湯殿で堪能し、オープンキッチンの活気あふれるビュッフェや上質な空間で至福の休日を過ごせる。',
        price: '2食付き 18,000円〜',
        image: './hotels/tokachigawadaiichi.png',
        tags: ['モール温泉', '絶景露天風呂', 'ガーデンスパ', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad342509%2F', rakuten: 'https://a.r10.to/hNqZvR', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000877%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000877%252F' }
    },
    {
        id: 'h-hokkaido-6-5',
        onsen_id: 'o-hokkaido-6',
        name: '富士ホテル',
        prefecture: 'hokkaido',
        type: '温泉旅館',
        description: '十勝川温泉の原点ともいえる、家庭的な温もりと源泉へのこだわりが息づく温泉旅館。加水・加温を一切行わない「純粋なモール温泉」を源泉掛け流しで堪能でき、十勝の家庭料理のような優しさと旬の味覚を心ゆくまで楽しめる。',
        price: '2食付き 9,900円〜',
        image: './hotels/tokachigawafuji.png',
        tags: ['純源泉掛け流し', 'モール温泉', 'アットホーム', '十勝の味覚'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad311115%2F', rakuten: 'https://a.r10.to/hgIlg2', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00915362%252F' }
    },
    {
        id: 'h-hokkaido-6-6',
        onsen_id: 'o-hokkaido-6',
        name: '三余庵',
        prefecture: 'hokkaido',
        type: '高級温泉旅館',
        description: '十勝の豊かな自然と文学の薫りに包まれた、全13室のプライベートな時間を大切にする高級温泉旅館。五感を癒やすモール温泉を贅沢に源泉掛け流しで楽しみ、厳選された十勝の旬素材が彩る独創的な創作懐石を心ゆくまで堪能できる。',
        price: '2食付き 49,000円〜',
        image: './hotels/sanyoan.png',
        tags: ['モール温泉', '全室露天風呂付', '創作懐石', '全13室の隠れ宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad310650%2F', rakuten: 'https://a.r10.to/hPyvrg', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000857%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000857%252F' }
    },
    {
        id: 'h-hokkaido-6-7',
        onsen_id: 'o-hokkaido-6',
        name: '清寂房',
        prefecture: 'hokkaido',
        type: '高級温泉旅館',
        description: '十勝の広大な森に溶け込むように佇む、全室に源泉掛け流しの露天風呂を完備した高級温泉旅館。「清らかで静かな房（部屋）」の名が示す通り、日常を忘れる静寂の中でモール温泉を独り占めし、十勝の旬を五感で味わう創作懐石を堪能できる。',
        price: '2食付き 43,000円〜',
        image: './hotels/seijakubou.png',
        tags: ['モール温泉', '全室露天風呂付', '創作懐石', '森の隠れ宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad348167%2F', rakuten: 'https://a.r10.to/hkQF0p', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003001%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003001%252F' }
    },

    // ===== 支笏湖温泉（北海道）=====
    {
        id: 'h-hokkaido-7-1',
        onsen_id: 'o-hokkaido-7',
        name: 'レイクサイドヴィラ翠明閣',
        prefecture: 'hokkaido',
        type: '高級温泉ホテル',
        description: '支笏湖の湖畔に最も近く、全8室すべてから美しい湖を一望できる高級温泉ホテル。名湯・支笏湖温泉を全室に備えられた展望風呂で独り占めし、北海道の厳選食材が彩るイタリアン懐石を心ゆくまで堪能できる。',
        price: '2食付き 35,000円〜',
        image: './hotels/suimeikaku.png',
        tags: ['レイクビュー', '全室温泉付', 'イタリアン懐石', '全8室の隠れ宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad303828%2F', rakuten: 'https://a.r10.to/h5S374', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001596%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001596%252F' }
    },
    {
        id: 'h-hokkaido-7-2',
        onsen_id: 'o-hokkaido-7',
        name: '支笏湖第一寶亭留・翠山亭',
        prefecture: 'hokkaido',
        type: '高級温泉旅館',
        description: '支笏湖の深い森に抱かれた、静寂とプライベート感を大切にする大人向けの高級温泉旅館。支笏湖の「美肌の湯」を、贅沢な造りの大浴場や客室露天風呂で心ゆくまで堪能し、北海道の厳選食材を用いた繊細な会席料理に舌鼓を打つ至福のひとときを過ごせる。',
        price: '2食付き 25,000円〜',
        image: './hotels/suizantei.png',
        tags: ['美肌の湯', '客室露天風呂', '旬の会席料理', '大人の隠れ宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad317358%2F', rakuten: 'https://a.r10.to/hFfOqT', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001011%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001011%252F' }
    },
    {
        id: 'h-hokkaido-7-3',
        onsen_id: 'o-hokkaido-7',
        name: '休暇村 支笏湖',
        prefecture: 'hokkaido',
        type: '温泉ホテル',
        description: '支笏湖を望む高台の森に囲まれた、豊かな自然とふれあえる温泉ホテル。「美肌の湯」として知られる柔らかなお湯を楽しみ、夕食には北海道の旬を詰め込んだこだわりのビュッフェを心ゆくまで満喫できる。',
        price: '2食付き 16,000円〜',
        image: './hotels/kyukamurashikotsuko.png',
        tags: ['自然体験', '美肌の湯', '森の散策路', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad337480%2F', rakuten: 'https://a.r10.to/hPfvzS', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030878%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030878%252F' }
    },
    {
        id: 'h-hokkaido-7-4',
        onsen_id: 'o-hokkaido-7',
        name: '雨ノ日と夕やけ',
        prefecture: 'hokkaido',
        type: '温泉宿',
        description: '支笏湖の深い森に溶け込むように佇む、部屋にジャグジーバスやミニシアターを備えた静かな温泉宿。「雨の日には雨の日の、夕焼けには夕焼けの良さがある」というコンセプトのもと、日常を離れて自分を取り戻す穏やかな時間と、旬の食材を活かした創作料理を堪能できる。',
        price: '2食付き 19,000円〜',
        image: './hotels/amenohi.png',
        tags: ['森の隠れ宿', 'ジャグジーバス', '静寂の空間', '創作料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad309086%2F', rakuten: 'https://a.r10.to/hPMRap', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001280%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001280%252F' }
    },
    {
        id: 'h-hokkaido-7-5',
        onsen_id: 'o-hokkaido-7',
        name: '丸駒温泉旅館',
        prefecture: 'hokkaido',
        type: '温泉旅館',
        description: '支笏湖の北岸、手付かずの自然に囲まれた場所に佇む大正4年創業の老舗温泉旅館。全国でも珍しい足元湧出の「天然露天風呂」を誇り、支笏湖の湖水と連動して深さが変わる神秘的な湯浴みと、地元の旬を味わう囲炉裏会席などを堪能できる。',
        price: '2食付き 22,000円〜',
        image: './hotels/marukoma.png',
        tags: ['天然露天風呂', '老舗温泉旅館', '旬の会席料理', '静寂の空間'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad341087%2F', rakuten: 'https://a.r10.to/hXQPY7', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030323%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030323%252F' }
    },
    {
        id: 'h-hokkaido-7-6',
        onsen_id: 'o-hokkaido-7',
        name: 'しこつ湖 鶴雅リゾートスパ 水の謌',
        prefecture: 'hokkaido',
        type: '温泉リゾート',
        description: '「水の力」をテーマに、支笏湖の豊かな自然と融合した上質な癒しを提供するラグジュアリーな温泉リゾート。心地よい水の音に包まれながら、趣向を凝らした露天風呂やスパ、道産食材を活かした「ヘルシービュッフェ」を楽しみ、心身ともにリフレッシュする特別な休日を過ごせる。',
        price: '2食付き 29,000円〜',
        image: './hotels/mizunouta.png',
        tags: ['水の癒やし', 'ヘルシービュッフェ', '露天風呂付客室', 'ピローギャラリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad395279%2F', rakuten: 'https://a.r10.to/hYj6jK', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001526%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001526%252F' }
    },
    {
        id: 'h-hokkaido-7-7',
        onsen_id: 'o-hokkaido-7',
        name: 'しこつ湖 鶴雅別荘 碧の座',
        prefecture: 'hokkaido',
        type: '高級温泉旅館',
        description: '支笏湖の青に染まる空と湖を望む、鶴雅グループ最高峰のラグジュアリーを体現した高級温泉旅館。全25室が100平米以上のプライベートスイートであり、全室に完備された支笏湖を望む露天風呂と、北海道の至高の食材をプライベートな空間で味わう懐石料理が、究極の非日常を演出する。',
        price: '2食付き 66,000円〜',
        image: './hotels/aonoza.png',
        tags: ['全室露天風呂付', 'レイクビュー', 'オールインクルーシブ', '全室100平米超'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad367212%2F', rakuten: 'https://a.r10.to/h5T067', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002593%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002593%252F' }
    },

    // ===== 川湯温泉（北海道）=====
    {
        id: 'h-hokkaido-8-1',
        onsen_id: 'o-hokkaido-8',
        name: 'お宿欣喜湯 別邸 すいかずら',
        prefecture: 'hokkaido',
        type: '温泉旅館',
        description: '摩周湖や屈斜路湖へのアクセスも良く、川湯温泉の伝統を受け継ぎながら2021年にリブランディングされた温泉旅館。日本でも稀有なpH1.7の強酸性硫黄泉を、加温・加水一切なしの100%源泉掛け流しで堪能でき、地元の旬を活かした創作懐石や多彩なビュッフェをフリードリンクと共に心ゆくまで楽しめる。',
        price: '2食付き 14,000円〜',
        image: './hotels/kinkiyu-suikazura.png',
        tags: ['全室露天風呂付', '創作会席', 'インクルーシブ', '強酸性硫黄泉', '源泉掛け流し'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad310100%2F', rakuten: 'https://a.r10.to/hPLAkO', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00912985%252F' }
    },
    {
        id: 'h-hokkaido-8-2',
        onsen_id: 'o-hokkaido-8',
        name: '川湯観光ホテル',
        prefecture: 'hokkaido',
        type: '温泉旅館',
        description: '川湯温泉の入り口に位置し、川湯唯一の展望大浴場から硫黄山の荒々しい絶景を望める歴史ある温泉旅館。名湯・強酸性硫黄泉を、加温・加水を一切行わない100%源泉掛け流しで守り続け、低温・中温・高温の3つの湯船で心ゆくまで堪能した後は、地元の旬が彩る季節の和食膳を味わえる。',
        price: '2食付き 9,500円〜',
        image: './hotels/kawayu-kanko-hotel.png',
        tags: ['源泉100%掛け流し', '強酸性硫黄泉', '展望大浴場'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad337273%2F', rakuten: 'https://a.r10.to/h5ATwJ', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900050%252F' }
    },
    {
        id: 'h-hokkaido-8-3',
        onsen_id: 'o-hokkaido-8',
        name: '川湯温泉 ＫＫＲかわゆ',
        prefecture: 'hokkaido',
        type: '温泉保養所',
        description: '川湯温泉の高台に位置し、硫黄山のエネルギーを感じながら名湯を心ゆくまで堪能できる、国家公務員共済組合連合会の温泉保養所（旅館）。川湯特有の強酸性硫黄泉を、加温・加水なしの源泉100%掛け流しで楽しみながら、オホーツクの海鮮や道東の山の幸を盛り込んだボリュームたっぷりの和食膳をリーズナブルに味わえる。',
        price: '朝食付き 6,000円〜',
        image: './hotels/kkr-kawayu.png',
        tags: ['源泉100%掛け流し', '強酸性硫黄泉', '展望大浴場'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad301574%2F', rakuten: 'https://a.r10.to/hPnGDK', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00903566%252F' }
    },
    {
        id: 'h-hokkaido-8-4',
        onsen_id: 'o-hokkaido-8',
        name: '川湯温泉 HOTEL PARKWAY',
        prefecture: 'hokkaido',
        type: '温泉ホテル',
        description: '川湯温泉駅から徒歩圏内に位置し、摩周・屈斜路観光の拠点として親しまれているアットホームな温泉ホテル。川湯でも希少な「重曹泉（炭酸水素塩泉）」を自家源泉100%掛け流しで堪能できる開放的な庭園露天風呂が自慢で、摩周産そば粉を使った手打ちそばや、地元の味覚が並ぶ手作り料理を心ゆくまで楽しめる。',
        price: '2食付き 6,000円〜',
        image: './hotels/hotel-parkway.png',
        tags: ['自家源泉掛け流し', 'コスパ', '庭園露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad325285%2F', rakuten: 'https://a.r10.to/hkzDnC', ikyu: '#', yahoo: '#' }
    },

    // ===== ニセコ温泉郷（北海道）=====
    {
        id: 'h-hokkaido-9-1',
        onsen_id: 'o-hokkaido-9',
        name: '雪ニセコ',
        prefecture: 'hokkaido',
        type: '高級ホテルレジデンス',
        description: 'ニセコの壮大な羊蹄山を望む絶好のロケーションに誕生した、暮らすような滞在を叶えるラグジュアリーホテルレジデンス。全室にフルキッチンを備えたゆとりある客室と、ミシュラン星付きレストランを含む多彩なダイニング、そして静寂に包まれた天然温泉スパを完備し、四季折々のニセコの美しさを心ゆくまで贅沢に堪能できる。',
        price: '2食付き 24,000円〜',
        image: './hotels/yukiniseko.png',
        tags: ['全室スイート', 'ラグジュアリー', '露天風呂付'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad378163%2F', rakuten: 'https://a.r10.to/hP6Qz1', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002961%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002961%252F' }
    },
    {
        id: 'h-hokkaido-9-2',
        onsen_id: 'o-hokkaido-9',
        name: '綾ニセコ',
        prefecture: 'hokkaido',
        type: '高級コンドミニアムホテル',
        description: 'ニセコグラン・ヒラフのゲレンデ直結という最高の立地を誇る、洗練されたモダンなデザインの高級コンドミニアム型ホテル。目の前に広がる白銀の世界と羊蹄山のパノラマを、天然温泉が引かれたプライベート露天風呂付客室や開放感あふれるリビングで楽しみ、ニセコならではのプレミアムなスキーイン・スキーアウト体験を満喫できる。',
        price: '朝食付き 10,000円〜',
        image: './hotels/ayaniseko.png',
        tags: ['ゲレンデ直結', '羊蹄山パノラマ', '天然温泉', 'モダンラグジュアリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad343035%2F', rakuten: 'https://a.r10.to/h5qKuY', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002492%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002492%252F' }
    },
    {
        id: 'h-hokkaido-9-3',
        onsen_id: 'o-hokkaido-9',
        name: 'ニセコノーザンリゾート・アンヌプリ',
        prefecture: 'hokkaido',
        type: '温泉ホテル',
        description: 'ニセコアンヌプリ山の麓に佇み、北欧風の洗練されたデザインが心地よい、ゲレンデ直結のマウンテンリゾートホテル。四季折々のニセコの自然を五感で楽しみながら、美肌効果のある天然温泉で心身を癒やし、北海道の豊かな旬の食材を贅沢に使った「豪華ビュッフェ」や「上質なフレンチ懐石」を堪能できる。',
        price: '2食付き 11,000円〜',
        image: './hotels/nisekonorthernresortannupuri.png',
        tags: ['ゲレンデ直結', '美肌の湯', '北欧デザイン', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad333020%2F', rakuten: 'https://a.r10.to/hR7N1p', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000934%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000934%252F' }
    },
    {
        id: 'h-hokkaido-9-4',
        onsen_id: 'o-hokkaido-9',
        name: 'スカイニセコ',
        prefecture: 'hokkaido',
        type: '高級コンドミニアムホテル',
        description: 'ニセコグラン・ヒラフの最上部に位置し、スキーイン・スキーアウトを最高のロケーションで実現する高級ラグジュアリー・コンドミニアムホテル。洗練されたモダンな客室からは羊蹄山やゲレンデの息をのむような絶景を望め、館内には天然温泉の大浴場やスパ、地元北海道の厳選食材を五感で楽しむレストランを完備した、世界水準のリゾート体験を堪能できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/skyniseko.png',
        tags: ['ゲレンデ直結', '羊蹄山パノラマ', '天然温泉', 'モダンデザイン'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad330955%2F', rakuten: 'https://a.r10.to/hk4f2a', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002602%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002602%252F' }
    },
    {
        id: 'h-hokkaido-9-5',
        onsen_id: 'o-hokkaido-9',
        name: '木ニセコ',
        prefecture: 'hokkaido',
        type: 'ブティックホテル',
        description: 'ニセコグラン・ヒラフのゲレンデに隣接し、木のぬくもりを感じるモダンなデザインが特徴のブティックホテル。「スキーイン・スキーアウト」の利便性と、羊蹄山を望む絶好のロケーションを兼ね備え、ミネラル豊富な天然温泉や、北海道の新鮮な食材を活かしたコンテンポラリーなダイニングで贅沢なリゾートステイを満喫できる。',
        price: '2食付き 14,000円〜',
        image: './hotels/kiniseko.png',
        tags: ['ゲレンデ直結', '羊蹄山パノラマ', '天然温泉', 'モダンデザイン'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad301953%2F', rakuten: 'https://a.r10.to/h9DLJA', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002132%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002132%252F' }
    },
    {
        id: 'h-hokkaido-9-6',
        onsen_id: 'o-hokkaido-9',
        name: 'ニセコアンヌプリ温泉 湯心亭',
        prefecture: 'hokkaido',
        type: '温泉旅館',
        description: 'ニセコアンヌプリの麓に佇む、温泉の質の高さで多くのリピーターに愛される源泉掛け流しの温泉宿。「美肌の湯」として知られるナトリウムー炭酸水素塩泉を、一度も空気に触れさせない独自の鮮度で浴槽へ注いでおり、道産食材をふんだんに使用した真心込めたお料理と共に、静寂に包まれた極上の癒やしを堪能できる。',
        price: '2食付き 11,000円〜',
        image: './hotels/nisekoannupurionsenyushintei.png',
        tags: ['源泉100%掛け流し', '美肌の湯', '道産食材の和食膳', 'アンヌプリ麓'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334677%2F', rakuten: 'https://a.r10.to/hkbX8H', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hokkaido-9-7',
        onsen_id: 'o-hokkaido-9',
        name: 'ニセコ昆布温泉鶴雅別荘 杢の抄',
        prefecture: 'hokkaido',
        type: '高級温泉旅館',
        description: 'ニセコの静かな森の奥、昆布温泉特有の「美白の湯」を湛える、大人の隠れ家のような高級温泉旅館。「ニセコの森に抱かれる」をコンセプトに、木のぬくもり溢れる洗練された空間の中で、暖炉を囲むフリードリンクのラウンジを楽しみ、北海道の旬を極める創作日本料理を心ゆくまで堪能できる。',
        price: '2食付き 32,000円〜',
        image: './hotels/nisekokonbuonsentsurugabessomokunousho.png',
        tags: ['森の隠れ宿', '美白の湯', 'インクルーシブ', '暖炉ラウンジ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad368020%2F', rakuten: 'https://a.r10.to/hR2THI', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001928%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001928%252F' }
    },

    // ===== 酸ヶ湯温泉（青森）=====
    {
        id: 'h-aomori-1-1',
        onsen_id: 'o-aomori-1',
        name: '酸ヶ湯温泉旅館',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '八甲田連峰の懐に抱かれ、国民保養温泉地第1号にも指定された、江戸時代から続く歴史深い温泉旅館。名物である総ヒバ造りの「ヒバ千人風呂」では、広大な混浴空間に漂う白濁した強酸性の酸ヶ湯を五感で堪能でき、青森の山海の幸を盛り込んだ素朴ながらも滋味深い料理と共に、古き良き湯治文化の真髄を体験できる。',
        price: '2食付き 12,000円〜',
        image: './hotels/sugayuonsenyukari.png',
        tags: ['ヒバ千人風呂', '国民保養温泉地第1号', '強酸性・硫黄泉', '湯治文化の継承'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad397533%2F', rakuten: 'https://a.r10.to/h8UHdz', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00918176%252F' }
    },
    {
        id: 'h-aomori-1-2',
        onsen_id: 'o-aomori-1',
        name: '八甲田ホテル',
        prefecture: 'aomori',
        type: 'ログホテル',
        description: '国内最大級の洋風ログハウス建築で、ブナの原生林にひっそりと佇む究極の隠れ家リゾートホテル。木の温もりと重厚感あふれる空間で、酸ヶ湯と同じ強酸性の硫黄泉を楽しみ、贅を尽くしたフランス料理や青森の旬を味わう和食を、都会の喧騒を忘れた上質な静寂の中で堪能できる。',
        price: '2食付き 38,000円〜',
        image: './hotels/hakkodahotel.png',
        tags: ['ログハウス', 'ブナの原生林', 'フランス料理', '和食'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad365022%2F', rakuten: 'https://a.r10.to/hgLQtF', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001037%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001037%252F' }
    },
    {
        id: 'h-aomori-1-3',
        onsen_id: 'o-aomori-1',
        name: 'ホテル城ヶ倉',
        prefecture: 'aomori',
        type: '山岳リゾート',
        description: '八甲田の豊かな森に抱かれ、四季折々の自然を間近に感じる北欧スタイルの山岳リゾートホテル。通年楽しめる露天風呂では、八甲田の清らかな空気の中で星空や雪景色を眺めながら癒やされ、青森の厳選された山海の幸を活かした本格的な和食会席や洋食コースを心ゆくまで堪能できる。',
        price: '2食付き 18,000円〜',
        image: './hotels/hoteljokgakura.png',
        tags: ['北欧デザイン', '通年露天風呂', '八甲田の自然', '十和田八幡平国立公園内'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad393575%2F', rakuten: 'https://a.r10.to/h5dl5a', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001811%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001811%252F' }
    },

    // ===== 浅虫温泉（青森）=====
    {
        id: 'h-aomori-2-1',
        onsen_id: 'o-aomori-2',
        name: '宿屋つばき',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '浅虫温泉駅から徒歩わずか、アットホームな温もりと現代的なセンスが調和した温泉旅館。趣の異なる複数の貸切風呂でプライベートに温泉を楽しみ、持ち込みフリーで気軽に過ごせる。静かな時間が流れる隠れ家のような滞在を満喫できる。',
        price: '素泊まり 6,000円〜',
        image: './hotels/yadoyatsubaki.png',
        tags: ['駅近', '貸切風呂', '持ち込みフリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324328%2F', rakuten: 'https://a.r10.to/hgLwnI', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00906678%252F' }
    },
    {
        id: 'h-aomori-2-2',
        onsen_id: 'o-aomori-2',
        name: '割烹旅館さつき',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '全8室の静寂に包まれた空間で、板前が腕を振るう繊細な料理を心ゆくまで味わえる美食の宿。「割烹」の名にふさわしく、青森の旬を極限まで引き出した芸術的な創作料理をお部屋食で楽しみ、ペットと一緒にプライベートを重視した贅沢なひとときを過ごせる。',
        price: '2食付き 20,000円〜',
        image: './hotels/kapporyokansatsuki.png',
        tags: ['全8室', 'お部屋食', '創作和食', 'ペット可'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/h56GhX', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001692%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001692%252F' }
    },
    {
        id: 'h-aomori-2-3',
        onsen_id: 'o-aomori-2',
        name: '旅館柳の湯',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '創業160年余、江戸時代から続く伝統を守り続ける、浅虫温泉でも数少ない自家源泉を持つ老舗宿。総ヒバ造りの情緒あふれる大浴場や、緑豊かな庭園を望む露天風呂で上質な温泉を楽しみ、地元の漁師から仕入れる新鮮な魚介類をふんだんに使った、彩り豊かな本格和食会席をゆったりと堪能できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/ryokanuyanoyu.png',
        tags: ['創業160年', '自家源泉', '総ヒバ造り', '庭園露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad333379%2F', rakuten: 'https://a.r10.to/hPArld', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030735%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030735%252F' }
    },
    {
        id: 'h-aomori-2-4',
        onsen_id: 'o-aomori-2',
        name: '椿館',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '創業400年の歴史を誇り、版画家・棟方志功も愛した、古き良き風格が漂う老舗宿。9本の自家源泉から湧き出る豊富な湯を、重厚な雰囲気の「明治の湯」などで堪能し、ライトアップされた美しい庭園を眺めながら、津軽の郷土料理を盛り込んだ滋味深い味わいの膳をゆっくりと楽しめる。',
        price: '2食付き 18,000円〜',
        image: './hotels/tsubakikan.png',
        tags: ['創業400年', '棟方志功ゆかりの宿', '自家源泉', '庭園'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad380010%2F', rakuten: 'https://a.r10.to/h5Opth', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00906673%252F' }
    },
    {
        id: 'h-aomori-2-5',
        onsen_id: 'o-aomori-2',
        name: '辰巳館',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '浅虫温泉駅からすぐ、100%源泉掛け流しの湯を贅沢に楽しめる、昔ながらの温かみを大切にした温泉旅館。柔らかな肌触りの名湯を、落ち着いた雰囲気の大浴場や露天風呂で心ゆくまで堪能でき、青森の海の幸を中心としたボリューム満点の家庭的な和食膳を、リーズナブルに味わえるのが魅力。',
        price: '2食付き 14,500円〜',
        image: './hotels/tatsumikan.png',
        tags: ['源泉掛け流し', '駅近', '庭園露天風呂', 'リーズナブル'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad344450%2F', rakuten: 'https://a.r10.to/hPTXpI', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aomori-2-6',
        onsen_id: 'o-aomori-2',
        name: 'さくら観光ホテル',
        prefecture: 'aomori',
        type: '温泉ホテル',
        description: '全客室がオーシャンビュー、浅虫で唯一「海の上に建つ」ような感覚を味わえる絶景の温泉ホテル。波打ち際にあるかのような開放感あふれる展望風呂で、穏やかな陸奥湾の波音に包まれながら癒やされ、アワビや青森県産牛など、地元の厳選素材にこだわった華やかな磯料理を堪能できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/sakurakankohotel.png',
        tags: ['オーシャンビュー', '絶景露天風呂', '磯料理', '海辺のロケーション'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad323677%2F', rakuten: 'https://a.r10.to/h53Qps', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900453%252F' }
    },
    {
        id: 'h-aomori-2-7',
        onsen_id: 'o-aomori-2',
        name: '南部屋海扇閣',
        prefecture: 'aomori',
        type: '大型温泉旅館',
        description: '陸奥湾を一望する絶好のロケーションに建つ、浅虫温泉を代表する大型老舗旅館。最上階の展望大浴場からは、夕日に染まる湯の島と陸奥湾のパノラマを堪能でき、毎夜開催される迫力の「津軽三味線ライブ」とともに、青森の旬を贅沢に取り入れたビュッフェや会席料理を心ゆくまで楽しめる。',
        price: '2食付き 27,000円〜',
        image: './hotels/nanbuyakaisenkaku.png',
        tags: ['展望露天風呂', '津軽三味線ライブ', '陸奥湾オーシャンビュー', 'ライブキッチン'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad325111%2F', rakuten: 'https://a.r10.to/h5ZXng', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001631%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001631%252F' }
    },

    // ===== 大鰐温泉（青森）=====
    {
        id: 'h-aomori-3-1',
        onsen_id: 'o-aomori-3',
        name: 'ヤマニ仙遊館',
        prefecture: 'aomori',
        type: '老舗旅館',
        description: '明治時代から続く歴史を感じさせる建物が魅力の、登録有形文化財に指定された歴史ある宿。太宰治など多くの文人に愛された当時の面影を残す空間で、源泉100%掛け流しの柔らかな湯を楽しみ、創業当時から受け継がれるおもてなしの心とともに、地元の旬の食材を活かした素朴ながらも味わい深い料理をゆっくりと堪能できる。',
        price: '2食付き 14,500円〜',
        image: './hotels/yamani.png',
        tags: ['登録有形文化財', '太宰治ゆかりの宿', '源泉掛け流し', '老舗の味'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad316808%2F', rakuten: 'https://a.r10.to/h5YgDd', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aomori-3-2',
        onsen_id: 'o-aomori-3',
        name: '不二やホテル',
        prefecture: 'aomori',
        type: '温泉ホテル',
        description: '四季折々の表情を見せる美しい日本庭園に囲まれた、静寂の中に佇む老舗温泉ホテル。開湯800年の歴史を誇る名湯を、開放感あふれる露天風呂や広々とした大浴場で心ゆくまで楽しみ、地元の名産「大鰐温泉もやし」をはじめ、津軽の豊かな大地と海が育んだ旬の味覚をふんだんに盛り込んだ和食膳を堪能できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/wanifujiya.png',
        tags: ['日本庭園', '大鰐温泉もやし料理', '広々とした大浴場', '静かな環境'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad322350%2F', rakuten: 'https://a.r10.to/h58nI1', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00906820%252F' }
    },
    {
        id: 'h-aomori-3-3',
        onsen_id: 'o-aomori-3',
        name: '青森ワイナリーホテル',
        prefecture: 'aomori',
        type: 'リゾートホテル',
        description: '標高550mの大鰐山頂に位置し、津軽平野を一望する絶景と、自社ワイナリー直送のワインを心ゆくまで楽しめるマウンテンリゾートホテル。広大な雲海や夜景を望む開放感あふれる空間で、六花（りっか）をイメージした大浴場や天然温泉に癒やされ、地元青森の厳選食材とホテル自慢のワインが織りなす極上のマリアージュを堪能できる。',
        price: '2食付き 13,500円〜',
        image: './hotels/aomoriwineryhotel.png',
        tags: ['絶景', 'ワイン', '温泉'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad303354%2F', rakuten: 'https://a.r10.to/hg73lX', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00905849%252F' }
    },

    // ===== 不老ふ死温泉（青森）=====
    {
        id: 'h-aomori-4-1',
        onsen_id: 'o-aomori-4',
        name: '黄金崎不老ふ死温泉',
        prefecture: 'aomori',
        type: '温泉ホテル',
        description: '日本海の波打ち際に位置し、海に溶け込むような「海辺の露天風呂」で知られる、青森を代表する絶景温泉旅館。空と海が黄金色に染まる夕景を、鉄分を豊富に含んだ赤褐色の名湯に浸かりながら堪能でき、地元深浦産の新鮮なアワビやサザエなど、日本海が育んだ豪快な磯料理を心ゆくまで楽しめる。',
        price: '2食付き 16,000円〜',
        image: './hotels/furoufushi.png',
        tags: ['海辺の露天風呂', '鉄分豊富', '磯料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad323694%2F', rakuten: 'https://a.r10.to/hPNGCK', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031057%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031057%252F' }
    },

    // ===== 嶽温泉（青森）=====
    {
        id: 'h-aomori-5-1',
        onsen_id: 'o-aomori-5',
        name: '嶽ホテル',
        prefecture: 'aomori',
        type: '温泉ホテル',
        description: '岩木山の麓、標高450mに位置する「嶽温泉」の歴史とともに歩む、家族的な温もりが心地よい温泉宿。岩木山の恩恵を受けた白濁した酸性硫黄泉を、加温・加水なしの源泉100%掛け流しで堪能でき、青森の郷土料理や、季節限定の「嶽きみ（トウモロコシ）」など、山の幸をふんだんに使った素朴で滋味深い料理を楽しめる。',
        price: '2食付き 12,000円〜',
        image: './hotels/dakehotel.png',
        tags: ['源泉掛け流し', '山の幸', '家族的な温もり'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/h5KrZe', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aomori-5-2',
        onsen_id: 'o-aomori-5',
        name: '小島旅館',
        prefecture: 'aomori',
        type: '温泉旅館',
        description: '岩木山の麓、嶽温泉で300年以上の歴史を紡ぎ、多くの湯治客に親しまれてきた老舗温泉旅館。総ヒバ造りの情緒ある浴槽には、江戸時代から湧き続ける白濁した硫黄泉が源泉100%掛け流しで注がれ、青森の豊かな山の幸や岩木山麓の郷土料理を、歴史の息吹を感じる空間でゆっくりと堪能できる。',
        price: '2食付き 12,500円〜',
        image: './hotels/kojima.png',
        tags: ['源泉掛け流し', '老舗', '山の幸'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/h5VGHo', ikyu: '#', yahoo: '#' }
    },

    // ===== 花巻温泉郷（岩手）=====
    {
        id: 'h-iwate-1-1',
        onsen_id: 'o-iwate-1',
        name: '山の神温泉 優香苑',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '花巻温泉郷の奥座敷、宮大工の手による「総ヒバ造り」の重厚な建築美に圧倒される、まさに宮殿のような温泉旅館。東北最大級を誇る広大な露天風呂では、とろとろとした「美肌の湯」を源泉100%掛け流しで堪能でき、木のぬくもりと職人技が光る格天井の美しい空間で、岩手の旬を尽くした極上の懐石料理を楽しめる。',
        price: '2食付き 15,000円〜',
        image: './hotels/yuukan.png',
        tags: ['宮大工建築の傑作', '東北最大級の露天風呂', 'pH9.2の超とろとろ湯', '全館100%源泉掛け流し'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad397230%2F', rakuten: 'https://a.r10.to/hg8b6p', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001949%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001949%252F' }
    },
    {
        id: 'h-iwate-1-2',
        onsen_id: 'o-iwate-1',
        name: '湯の杜 ホテル志戸平',
        prefecture: 'iwate',
        type: '温泉ホテル',
        description: '花巻温泉郷に位置し、豊沢川のせせらぎを間近に感じる開放感あふれる大型温泉リゾートホテル。2020年の大規模リニューアルで誕生した、東北最大級のライブキッチンを誇る「ヒカリノミチ」でのビュッフェが評判で、3つの源泉から引かれた多彩な湯処や、遊び心あふれるラウンジ、パン工房など、世代を問わず一日中楽しめるエンターテインメント性が魅力。',
        price: '2食付き 22,000円〜',
        image: './hotels/shidotaira.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad364940%2F', rakuten: 'https://a.r10.to/hgXbEu', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900029%252F' }
    },
    {
        id: 'h-iwate-1-3',
        onsen_id: 'o-iwate-1',
        name: '花巻温泉 ホテル紅葉館',
        prefecture: 'iwate',
        type: '温泉ホテル',
        description: '花巻温泉を代表する3館のホテルが隣接するエリアにあり、活気あふれるお祭り広場や多彩なビュッフェが人気の大型温泉ホテル。岩手県産牛のステーキや揚げたて天ぷらなど、ライブ感たっぷりのビュッフェを楽しめるほか、隣接する「千秋閣」や「ホテル花巻」の湯処も自由に行き来できる「湯めぐり」が魅力で、家族やグループで賑やかに温泉リゾートを堪能できる。',
        price: '2食付き 18,500円〜',
        image: './hotels/hotelmomijikan.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad343370%2F', rakuten: 'https://a.r10.to/h5lGgX', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900475%252F' }
    },
    {
        id: 'h-iwate-1-4',
        onsen_id: 'o-iwate-1',
        name: '藤三旅館・別邸 鉛温泉 心の刻 十三月',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '花巻温泉郷・鉛温泉の深い歴史が息づく名宿「藤三旅館」に隣接し、全室に源泉掛け流しの露天風呂を完備した、現代的でスタイリッシュな全室スイートの高級温泉リゾート。豊沢川のせせらぎを間近に感じる「全室リバービュー」の開放的な空間で、藤三旅館の名物「白猿の湯」を含む多彩な湯処を巡りながら、岩手の厳選食材を五感で楽しむモダンな創作料理を、プライベートを重視した贅沢な時間の中で堪能できる。',
        price: '2食付き 18,500円〜',
        image: './hotels/juusangatsu.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂', 'オールインクルーシブ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad373729%2F', rakuten: 'https://a.r10.to/hgqdYq', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002131%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002131%252F' }
    },
    {
        id: 'h-iwate-1-5',
        onsen_id: 'o-iwate-1',
        name: '游泉 志だて',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '花巻温泉郷の豊沢川沿いに佇む、全室に源泉掛け流しの露天風呂を完備した、大人のためのラグジュアリー温泉リゾート。「庭園を持つ開放的な客室」と「プライベート感」を重視した設計が魅力で、川のせせらぎを聞きながら美肌の湯を独り占めし、個室ダイニングで岩手の四季折々の食材を活かした繊細な創作会席をゆっくりと堪能できる。',
        price: '2食付き 37,400円〜',
        image: './hotels/yuusenshidate.png',
        tags: ['全室露天風呂付き客室', '12歳未満宿泊不可の大人の宿', '個室ダイニング', '豊沢川のリバービュー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324827%2F', rakuten: 'https://a.r10.to/hoN7bo', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001130%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001130%252F' }
    },
    {
        id: 'h-iwate-1-6',
        onsen_id: 'o-iwate-1',
        name: '山の神温泉 別墅 清流館',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '山の神温泉「優香苑」の敷地内に静かに佇む、全室に源泉掛け流しの露天風呂を備えたラグジュアリーな大人の隠れ宿。宮大工建築の意匠を凝らした上質な客室で、豊沢川のせせらぎを聞きながら「美肌の湯」を独り占めする贅沢を味わい、個室スタイルのレストランにて岩手の最高級食材を活かした趣向を凝らした料理を堪能できる。',
        price: '2食付き 36,000円〜',
        image: './hotels/seiryukan.png',
        tags: ['全室露天風呂付き客室', '12歳未満宿泊不可の大人の宿', '個室ダイニング', '源泉100%掛け流し'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad315872%2F', rakuten: 'https://a.r10.to/hF8Wd6', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002807%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002807%252F' }
    },
    {
        id: 'h-iwate-1-7',
        onsen_id: 'o-iwate-1',
        name: '花巻温泉 佳松園',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '花巻温泉の奥まった森の中に静かに佇む、皇族も宿泊されるほどの格調高さを誇る最高級温泉旅館。洗練された数寄屋造りの建築と、丁寧に手入れされた美しい日本庭園が迎えてくれる非日常の空間で、pH9.0の非常に柔らかな「とろとろの湯」を心ゆくまで楽しみ、三陸の海の幸や岩手の里山の恵みを珠玉の一皿へと昇華させた本格会席料理を、至高のおもてなしと共に堪能できる。',
        price: '2食付き 30,000円〜',
        image: './hotels/kashoen.png',
        tags: ['皇族御用達の宿', 'pH9.0の低張性アルカリ性高温泉', '数寄屋造りの贅沢な空間', '日本庭園のライトアップ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad338456%2F', rakuten: 'https://a.r10.to/hg7MeE', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000478%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000478%252F' }
    },

    // ===== 松川温泉（岩手）=====
    {
        id: 'h-iwate-2-1',
        onsen_id: 'o-iwate-2',
        name: '松川温泉 松川荘',
        prefecture: 'iwate',
        type: '温泉旅館',
        description: '岩手山を望む標高800mの森に佇む、大自然に抱かれた秘湯情緒あふれる温泉宿。白濁した100%源泉掛け流しの硫黄泉が自慢で、特に女性専用を含む広々とした4つの露天風呂では四季折々の景色を眺めながら極上の癒やしを体験でき、地元の山の幸をふんだんに使った手作り料理と共に心温まるひとときを過ごせる。',
        price: '2食付き 13,500円〜',
        image: './hotels/matsukawaso.png',
        tags: ['源泉100%掛け流し', '露天風呂', '山の幸'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad350880%2F', rakuten: 'https://a.r10.to/h5WYqj', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-iwate-2-2',
        onsen_id: 'o-iwate-2',
        name: '松川温泉 峡雲荘',
        prefecture: 'iwate',
        type: '温泉旅館',
        description: '十和田八幡平国立公園のブナやナラの原生林に抱かれた、標高800mの静寂の中に佇む秘湯の宿。八幡平の豊かな自然に溶け込むような露天風呂では、源泉100％掛け流しの濃厚な白濁硫黄泉を心ゆくまで堪能でき、夕食には八幡平特産の「杜仲茶ポーク」や岩手県産牛、地元の山菜など、岩手の山の恵みが詰まった滋味深い料理をゆっくりと味わえる。',
        price: '2食付き 14,500円〜',
        image: './hotels/kyounso.png',
        tags: ['源泉掛け流し', '露天風呂', '山の幸'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad347228%2F', rakuten: 'https://a.r10.to/hFYEwa', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00909154%252F' }
    },

    // ===== つなぎ温泉（岩手）=====
    {
        id: 'h-iwate-3-1',
        onsen_id: 'o-iwate-3',
        name: '盛岡つなぎ温泉 四季亭',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '数寄屋造りの贅沢な空間で、静かな時の流れと上質なおもてなしに浸る純和風の温泉旅館。硫黄の香りがほのかに漂う源泉掛け流しの湯を、木の温もりに包まれた大浴場や露天風呂で楽しみ、三陸の新鮮な魚介や岩手の里山の恵みを熟練の技で仕上げた本格的な京風会席料理を、プライバシーを重視したお部屋食でゆっくりと堪能できる。',
        price: '2食付き 20,000円〜',
        image: './hotels/shikitei.png',
        tags: ['数寄屋造り', '源泉掛け流し', '京風会席料理', 'お部屋食'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad355716%2F', rakuten: 'https://a.r10.to/hPDoBS', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001341%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001341%252F' }
    },
    {
        id: 'h-iwate-3-2',
        onsen_id: 'o-iwate-3',
        name: '盛岡つなぎ温泉 ホテル紫苑',
        prefecture: 'iwate',
        type: '温泉ホテル',
        description: '御所湖を望む全室レイクビューの開放感あふれる大型温泉ホテル。源泉100%掛け流しの「南部曲り家の湯」や御所湖を一望する露天風呂でとろりとした美肌の湯を堪能でき、ライブキッチンで岩手県産牛のステーキや揚げたて天ぷらを楽しめるビュッフェや、地元の旬が詰まった和食会席を心ゆくまで味わえる。',
        price: '2食付き 12,500円〜',
        image: './hotels/shion.png',
        tags: ['全室レイクビュー', '源泉掛け流し', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad346304%2F', rakuten: 'https://a.r10.to/h5HQdk', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001197%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001197%252F' }
    },
    {
        id: 'h-iwate-3-3',
        onsen_id: 'o-iwate-3',
        name: '盛岡つなぎ温泉 旅染屋 山いち',
        prefecture: 'iwate',
        type: '温泉旅館',
        description: '女性の一人旅やカップルに人気の、温かなおもてなしと民芸調の落ち着いた雰囲気が心地よい温泉旅館。つなぎ温泉特有のとろりとした「美肌の湯」を、青森ヒバの香り漂う内湯や季節の風を感じる露天風呂で源泉掛け流しのまま堪能でき、前沢牛の石焼きや三陸の海の幸など、岩手県産の厳選食材をふんだんに盛り込んだ手作りの創作料理をゆっくりと味わえる。',
        price: '2食付き 9,800円〜',
        image: './hotels/yamaiichi.png',
        tags: ['民芸調', '源泉掛け流し', '創作料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334220%2F', rakuten: 'https://a.r10.to/hgJ2Su', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00916720%252F' }
    },
    {
        id: 'h-iwate-3-4',
        onsen_id: 'o-iwate-3',
        name: '盛岡つなぎ温泉 愛真館',
        prefecture: 'iwate',
        type: '温泉旅館',
        description: '「十八の湯めぐり」が自慢の、個性豊かな多彩なお風呂を一度に楽しめるエンターテインメント温泉旅館。庭園の中に広がる岩風呂や檜風呂、薬湯など趣の異なる湯処を巡りながら、前沢牛や岩手県産ブランド豚の石焼、地元の山菜や海の幸を盛り込んだボリュームたっぷりの和食膳をファミリーやグループで賑やかに楽しめる。',
        price: '2食付き 12,100円〜',
        image: './hotels/aishinkan.png',
        tags: ['十八の湯めぐり', '前沢牛', '岩手県産ブランド豚', 'インクルーシブ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad320890%2F', rakuten: 'https://a.r10.to/h5AGyq', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901938%252F' }
    },

    // ===== 夏油温泉（岩手）=====
    {
        id: 'h-iwate-4-1',
        onsen_id: 'o-iwate-4',
        name: '山人-yamado-',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '西和賀の深い山懐に抱かれた、わずか12室の静寂の中で「山の恵み」を五感で味わう究極の隠れ宿。全室に源泉掛け流しの半露天風呂を完備し、木々の息吹や川のせせらぎを間近に感じる開放的な空間で、自社農園で育てた「南部鉄器」で焼く地鶏や、熟練の山人が採集した希少な山菜・キノコなど、ここでしか出合えない滋味豊かな「里山料理」を心ゆくまで堪能できる。',
        price: '2食付き 28,000円〜',
        image: './hotels/yamado.png',
        tags: ['全室半露天風呂付き客室', '展望風呂', '里山料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad302565%2F', rakuten: 'https://a.r10.to/hozAJP', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001634%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001634%252F' }
    },
    {
        id: 'h-iwate-4-2',
        onsen_id: 'o-iwate-4',
        name: '四季彩の宿 ふる里',
        prefecture: 'iwate',
        type: '温泉旅館',
        description: '西和賀の豊かな自然に抱かれ、全室が湯川の渓流に面した絶景と静寂を愉しめる全20室の温泉旅館。とろりとした肌触りの100%源泉掛け流しの湯を、川のせせらぎが間近に迫る露天風呂で心ゆくまで堪能でき、夕食にはブランド牛の「いわて牛」や西和賀特産の「西わらび」など、旬の地元素材をふんだんに盛り込んだ彩り豊かな創作会席を落ち着いた空間で味わえる。',
        price: '2食付き 19,000円〜',
        image: './hotels/fururi.png',
        tags: ['全室リバービュー', '源泉掛け流し', '展望風呂', '創作料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad333244%2F', rakuten: 'https://a.r10.to/h8GDhb', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030998%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030998%252F' }
    },

    // ===== 八幡平温泉郷（岩手）=====
    {
        id: 'h-iwate-5-1',
        onsen_id: 'o-iwate-5',
        name: '八幡平ハイツ',
        prefecture: 'iwate',
        type: '温泉リゾート',
        description: '八幡平の雄大な自然に囲まれた広大な敷地を誇り、岩手山を望む絶景と上質な癒やしが魅力の温泉リゾート。木の香漂う総檜造りの露天風呂や野趣あふれる石造りの露天風呂で、肌に優しい単純硫黄泉を心ゆくまで堪能でき、夕食には八幡平の清流が育んだ虹鱒や最高級の岩手和牛など、地元の旬素材を職人が丁寧に仕上げた和食会席や豪華ビュッフェを味わえる。',
        price: '2食付き 12,500円〜',
        image: './hotels/hachimantaiheights.png',
        tags: ['温泉リゾート', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad383251%2F', rakuten: 'https://a.r10.to/hRmdSd', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030432%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030432%252F' }
    },
    {
        id: 'h-iwate-5-2',
        onsen_id: 'o-iwate-5',
        name: '温泉ゲストハウス やすもり',
        prefecture: 'iwate',
        type: '温泉ゲストハウス',
        description: '八幡平の山麓に佇む、源泉100%掛け流しの名湯をリーズナブルに楽しめるアットホームな温泉宿。24時間入浴可能な天然温泉はとろりとした肌触りが特徴で、長期滞在にも便利で、登山やスキーの拠点としても多くの旅人に親しまれている。',
        price: '素泊まり 4,700円〜',
        image: './hotels/yasumori.png',
        tags: ['源泉掛け流し', '隠れ家', 'スキー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad351859%2F', rakuten: 'https://a.r10.to/hkYpwR', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00904016%252F' }
    },
    {
        id: 'h-iwate-5-3',
        onsen_id: 'o-iwate-5',
        name: '八幡平マウンテンホテル',
        prefecture: 'iwate',
        type: '温泉リゾート',
        description: '八幡平リゾートスキー場に隣接し、マウンテンリゾートの開放感と温泉の癒やしが融合したアクティブ派に人気のホテル。木の温もりを感じるモダンな客室から八幡平の山並みを一望でき、サウナを完備した大浴場「百花の湯」で単純硫黄泉の柔らかな湯に浸かった後は、シェフが目の前で焼き上げるステーキや地元の山の幸が並ぶ本格的な山岳ビュッフェを心ゆくまで堪能できる。',
        price: '2食付き 12,000円〜',
        image: './hotels/hachimantaihotel.png',
        tags: ['モダン', '絶景露天', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad322063%2F', rakuten: 'https://a.r10.to/hYyq81', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902282%252F' }
    },
    {
        id: 'h-iwate-5-4',
        onsen_id: 'o-iwate-5',
        name: '岩手山焼走り温泉 いこいの村岩手',
        prefecture: 'iwate',
        type: '温泉宿',
        description: '岩手山の裾野に広がる「焼走り熔岩流」のすぐそばに位置し、豊かな自然と静寂に包まれた公共の宿。広々とした大浴場や開放的な露天風呂からは岩手山の雄姿を間近に眺めることができ、地元のブランド肉や新鮮な高原野菜をふんだんに使った滋味豊かなお料理とともに、キャンプ場や天文台も隣接する広大なエリアで思い思いの休日を過ごせる。',
        price: '2食付き 11,000円〜',
        image: './hotels/ikoinomura.png',
        tags: ['ファミリー', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad359474%2F', rakuten: 'https://a.r10.to/hg3EBL', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902237%252F' }
    },
    {
        id: 'h-iwate-5-5',
        onsen_id: 'o-iwate-5',
        name: '全4室の小さな宿Beaver',
        prefecture: 'iwate',
        type: 'オーベルジュ',
        description: '八幡平の深い森の中に静かに佇む、わずか4室のみのプライベート感を極めた大人のための美食宿。シェフが自ら厳選した最高級の岩手和牛や八幡平の滋味あふれる食材を、和と洋が融合した独創的なフルコースへと昇華させた料理が最大の魅力で、貸切で利用できる源泉掛け流しの温泉とともに、誰にも邪魔されない贅沢で穏やかな時間の流れを心ゆくまで享受できる。',
        price: '2食付き 14,000円〜',
        image: './hotels/beaver.png',
        tags: ['隠れ家', '美食', '貸切風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad378018%2F', rakuten: 'https://a.r10.to/hPAavb', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-iwate-5-6',
        onsen_id: 'o-iwate-5',
        name: '八幡平ライジングサンホテル',
        prefecture: 'iwate',
        type: '温泉ホテル',
        description: '八幡平温泉郷の高台に位置し、四季折々の色彩を見せる山々のパノラマビューが自慢の温泉ホテル。源泉から引かれた単純硫黄泉の露天風呂では高原の清々しい風を感じながらリラックスでき、夕食には地産地消にこだわったハーフビュッフェや季節の会席料理が並び、広々としたロビーや客室から眺める美しい朝焼けや星空が訪れる人々の心を優しく癒やしてくれる。',
        price: '2食付き 11,500円〜',
        image: './hotels/risingSun.png',
        tags: ['スキー', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad335906%2F', rakuten: 'https://a.r10.to/hPHg9l', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901588%252F' }
    },
    {
        id: 'h-iwate-5-7',
        onsen_id: 'o-iwate-5',
        name: '安比八幡平の食の宿 四季館 彩冬',
        prefecture: 'iwate',
        type: '高級温泉旅館',
        description: '「食の宝庫」岩手の中でも圧倒的な料理のクオリティを誇り、美食家たちが通う全室趣の異なる温泉旅館。メイン料理を選べる贅沢な夕食では前沢牛の極上ステーキや季節の創作料理がテーブルを彩り、森に囲まれた趣豊かな露天風呂や貸切風呂でとろりとした美肌の湯に浸かりながら、アンティーク調の落ち着いたラウンジで至福のひとときを過ごせる。',
        price: '2食付き 17,500円〜',
        image: './hotels/shikikan.png',
        tags: ['美食', '露天風呂', '隠れ家'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad326514%2F', rakuten: 'https://a.r10.to/hPsS8y', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001773%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001773%252F' }
    },

    // ===== 鳴子温泉郷（宮城）=====
    {
        id: 'h-miyagi-1-1',
        onsen_id: 'o-miyagi-1',
        name: '旅館すがわら',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '鳴子温泉の高台に位置し、源泉を4本所有する圧倒的な湯量と「美肌の湯」が自慢の老舗温泉旅館。無色透明ながらとろりとした肌触りの100%源泉掛け流しの湯を、趣の異なる9つの貸切風呂や広々とした大浴場で心ゆくまで堪能でき、夕食には宮城の山海の幸をふんだんに盛り込んだ手作りの会席料理を落ち着いた和の空間でゆっくりと味わえる。',
        price: '素泊まり 7,000円〜',
        image: './hotels/sugawara.png',
        tags: ['4本の自家源泉', '9つの貸切風呂が無料', 'とろとろの美肌湯', '源泉100%掛け流し'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad336972%2F', rakuten: 'https://a.r10.to/h8OzKz', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00915312%252F' }
    },
    {
        id: 'h-miyagi-1-2',
        onsen_id: 'o-miyagi-1',
        name: '湯元 吉祥',
        prefecture: 'miyagi',
        type: '高級温泉旅館',
        description: '鳴子温泉を一望する高台に建ち、全館畳敷きの温もりとモダンな設備が融合した共立リゾートの温泉宿。鳴子でも珍しい琥珀色の源泉を、開放的な大露天風呂や4つの趣異なる貸切風呂で贅沢に掛け流しで楽しみ、夕食には仙台牛や三陸の新鮮な魚介を盛り込んだ豪華な会席料理とともに、夜鳴きそばなどの無料サービスも充実した至福のひとときを過ごせる。',
        price: '2食付き 14,500円〜',
        image: './hotels/kissho.png',
        tags: ['全館畳敷き', '4つの貸切風呂が無料', '夜鳴きそば無料', '共立リゾート'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad367842%2F', rakuten: 'https://a.r10.to/hYzDO2', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002491%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002491%252F' }
    },
    {
        id: 'h-miyagi-1-3',
        onsen_id: 'o-miyagi-1',
        name: '旅館大沼',
        prefecture: 'miyagi',
        type: '現代湯治の宿',
        description: '東鳴子温泉に佇み、湯治文化を現代に伝える「現代湯治」を提唱する心身の再生をテーマにした温泉宿。趣の異なる8つの湯殿があり、特に離れの庭園露天風呂「母里の湯」では貸切で四季の自然と一体になれる贅沢な時間を過ごせ、体に優しい「ふかし料理」や地元の滋味豊かな食材を活かした食養生のようなお料理が疲れた心と体を優しく癒やしてくれる。',
        price: '2食付き 12,500円〜',
        image: './hotels/oonuma.png',
        tags: ['現代湯治', '8つの湯殿', 'ふかし料理', '食養生'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad342408%2F', rakuten: 'https://a.r10.to/hPigRZ', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030142%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030142%252F' }
    },
    {
        id: 'h-miyagi-1-4',
        onsen_id: 'o-miyagi-1',
        name: '鳴子観光ホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: '鳴子温泉駅のほど近くに建ち、鳴子を象徴する乳白色の「美人の湯」を広大な大浴場で堪能できる歴史ある温泉ホテル。季節や天候によって色を変える不思議な硫黄泉を、木の香漂う大浴場や開放的な露天風呂で楽しみながら、夕食には「みやぎ豚」や三陸の海の幸など、宮城の豊かな食材を散りばめた季節感あふれる和食会席をスタッフの温かなおもてなしと共に味わえる。',
        price: '2食付き 15,000円〜',
        image: './hotels/narukokankou.png',
        tags: ['乳白色の湯', '広大な大浴場', '宮城の幸', 'オールインクルーシブ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad351952%2F', rakuten: 'https://a.r10.to/h5WAeX', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908715%252F' }
    },
    {
        id: 'h-miyagi-1-5',
        onsen_id: 'o-miyagi-1',
        name: '旬樹庵 琢ひで',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '鳴子温泉郷の奥座敷、中山平温泉に位置し「とろとろ」を通り越した「ぬるぬる」の肌触りが衝撃的な日本屈指の美肌湯を誇る宿。化粧水に浸かっているようなpH9.4の強アルカリ性温泉を、野趣あふれる石造りの露天風呂や趣深い内湯で源泉掛け流しのまま愉しむことができ、夕食には地元・鳴子の山の幸や岩出山の凍り豆腐など、郷土の味を大切にした創作会席を堪能できる。',
        price: '2食付き 13,000円〜',
        image: './hotels/takuhide.png',
        tags: ['pH9.4の強アルカリ性温泉', 'ぬるぬるの美肌湯', '郷土の味'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad322547%2F', rakuten: 'https://a.r10.to/h5XqN6', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902358%252F' }
    },
    {
        id: 'h-miyagi-1-6',
        onsen_id: 'o-miyagi-1',
        name: '鳴子風雅',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '「大人のための隠れ家」をコンセプトに、静寂とプライベートを重視した洗練された空間が広がる温泉リゾート。全室から鳴子の街並みや自然を望み、硫黄の香り漂う源泉掛け流しの名湯をゆったりと楽しんだ後は、ライブキッチンを備えたレストランで宮城の厳選食材を五感で楽しむ創作鉄板懐石を堪能でき、落ち着いたラウンジでのひとときが心に余裕をもたらしてくれる。',
        price: '2食付き 13,000円〜',
        image: './hotels/fugaa.png',
        tags: ['源泉掛け流し', '隠れ家', '13歳未満宿泊不可'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad374784%2F', rakuten: 'https://a.r10.to/hYO2iD', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908334%252F' }
    },
    {
        id: 'h-miyagi-1-7',
        onsen_id: 'o-miyagi-1',
        name: '鳴子ホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: '創業150年余の歴史を誇り、鳴子のシンボルとも言える多彩な湯の色を楽しめる巨大な大浴場が圧巻の老舗温泉ホテル。その日の気象条件でエメラルドグリーンや乳白色に変化する不思議な源泉を、広大な内湯や露天風呂で堪能でき、夕食には熟練のシェフが目の前で調理するライブキッチンでのビュッフェや、地元の伝統的な名物料理を盛り込んだ豪華な会席料理を心ゆくまで楽しめる。',
        price: '2食付き 15,000円〜',
        image: './hotels/narukohotel.png',
        tags: ['多彩な湯の色', 'ライブキッチン', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad373124%2F', rakuten: 'https://a.r10.to/hPuB9P', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001530%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001530%252F' }
    },

    // ===== 作並温泉（宮城）=====
    {
        id: 'h-miyagi-2-1',
        onsen_id: 'o-miyagi-2',
        name: '作並温泉観光ホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、作並温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-2-2',
        onsen_id: 'o-miyagi-2',
        name: '作並温泉旅館 碧水苑',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。作並温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-2-3',
        onsen_id: 'o-miyagi-2',
        name: '作並温泉スパリゾート',
        prefecture: 'miyagi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。作並温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 秋保温泉（宮城）=====
    {
        id: 'h-miyagi-3-1',
        onsen_id: 'o-miyagi-3',
        name: '秋保温泉観光ホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、秋保温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-3-2',
        onsen_id: 'o-miyagi-3',
        name: '秋保温泉旅館 碧水苑',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。秋保温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-3-3',
        onsen_id: 'o-miyagi-3',
        name: '秋保温泉スパリゾート',
        prefecture: 'miyagi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。秋保温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 松島温泉（宮城）=====
    {
        id: 'h-miyagi-4-1',
        onsen_id: 'o-miyagi-4',
        name: '松島温泉観光ホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、松島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-4-2',
        onsen_id: 'o-miyagi-4',
        name: '松島温泉旅館 碧水苑',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。松島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-4-3',
        onsen_id: 'o-miyagi-4',
        name: '松島温泉スパリゾート',
        prefecture: 'miyagi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。松島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 遠刈田温泉（宮城）=====
    {
        id: 'h-miyagi-5-1',
        onsen_id: 'o-miyagi-5',
        name: '遠刈田温泉観光ホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、遠刈田温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-5-2',
        onsen_id: 'o-miyagi-5',
        name: '遠刈田温泉旅館 碧水苑',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。遠刈田温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyagi-5-3',
        onsen_id: 'o-miyagi-5',
        name: '遠刈田温泉スパリゾート',
        prefecture: 'miyagi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。遠刈田温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 乳頭温泉郷（秋田）=====
    {
        id: 'h-akita-1-1',
        onsen_id: 'o-akita-1',
        name: '鶴の湯別館 山の宿',
        prefecture: 'akita',
        type: '秘湯の一軒宿',
        description: '乳頭温泉郷で最古の宿。江戸時代の茅葺き屋根の本陣と混浴の野天風呂が有名。白濁した乳頭の湯が絶品。全国の秘湯マニアが訪れる聖地。',
        price: '2食付き 16,000円〜',
        image: './hotels/tsurunoyuonsen.png',
        tags: ['日本屈指の秘湯', '茅葺き本陣', '混浴野天風呂', '白濁湯'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad330512%2F', rakuten: 'https://a.r10.to/hP1jAQ', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-1-2',
        onsen_id: 'o-akita-1',
        name: '妙乃湯',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '乳頭川沿いの情緒ある宿。「金の湯・銀の湯」と呼ばれる2種の自家源泉を持ち、川のせせらぎが聞こえる露天風呂が人気。',
        price: '2食付き 22,000円〜',
        image: './hotels/taenoyu.png',
        tags: ['2種の源泉', '川沿い露天', '秘湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001101%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001101%252F' }
    },
    {
        id: 'h-akita-1-3',
        onsen_id: 'o-akita-1',
        name: '休暇村 乳頭温泉郷',
        prefecture: 'akita',
        type: '国立公園の宿',
        description: 'ブナの原生林に抱かれた静かな宿。希少な2種類の源泉を一度に堪能でき、乳白色の露天風呂で四季折々の自然と秘湯の情緒に浸れる。',
        price: '2食付き 18,000円〜',
        image: './hotels/kyukamura.png',
        tags: ['国立公園', '2種の源泉', '乳白色の露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad322452%2F"', rakuten: 'https://a.r10.to/h5ibyZ', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900792%252F' }
    },

    // ===== 玉川温泉（秋田）=====
    {
        id: 'h-akita-2-1',
        onsen_id: 'o-akita-2',
        name: '玉川温泉観光ホテル',
        prefecture: 'akita',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、玉川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-2-2',
        onsen_id: 'o-akita-2',
        name: '玉川温泉旅館 碧水苑',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。玉川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-2-3',
        onsen_id: 'o-akita-2',
        name: '玉川温泉スパリゾート',
        prefecture: 'akita',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。玉川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 男鹿温泉郷（秋田）=====
    {
        id: 'h-akita-3-1',
        onsen_id: 'o-akita-3',
        name: '男鹿温泉郷観光ホテル',
        prefecture: 'akita',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、男鹿温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-3-2',
        onsen_id: 'o-akita-3',
        name: '男鹿温泉郷旅館 碧水苑',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。男鹿温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-3-3',
        onsen_id: 'o-akita-3',
        name: '男鹿温泉郷スパリゾート',
        prefecture: 'akita',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。男鹿温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 大湯温泉（秋田）=====
    {
        id: 'h-akita-4-1',
        onsen_id: 'o-akita-4',
        name: '大湯温泉観光ホテル',
        prefecture: 'akita',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、大湯温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-4-2',
        onsen_id: 'o-akita-4',
        name: '大湯温泉旅館 碧水苑',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。大湯温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-4-3',
        onsen_id: 'o-akita-4',
        name: '大湯温泉スパリゾート',
        prefecture: 'akita',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。大湯温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 田沢湖高原温泉郷（秋田）=====
    {
        id: 'h-akita-5-1',
        onsen_id: 'o-akita-5',
        name: '田沢湖高原温泉郷観光ホテル',
        prefecture: 'akita',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、田沢湖高原温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-5-2',
        onsen_id: 'o-akita-5',
        name: '田沢湖高原温泉郷旅館 碧水苑',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。田沢湖高原温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-5-3',
        onsen_id: 'o-akita-5',
        name: '田沢湖高原温泉郷スパリゾート',
        prefecture: 'akita',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。田沢湖高原温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 銀山温泉（山形）=====
    {
        id: 'h-yamagata-1-1',
        onsen_id: 'o-yamagata-1',
        name: '旅館藤屋',
        prefecture: 'yamagata',
        type: '大正ロマン旅館',
        description: '銀山温泉の街並みに溶け込む隈研吾設計のモダンな宿。趣の異なる5つの貸切風呂で、洗練された空間と名湯をプライベートに堪能できる。',
        price: '2食付き 51,000円〜',
        image: './hotels/ginzanonsenfujiya.png',
        tags: ['モダン建築', '大正ロマン', '銀山川沿い'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad311571%2F', rakuten: 'https://a.r10.to/hFtbfL', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001357%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001357%252F' }
    },
    {
        id: 'h-yamagata-1-2',
        onsen_id: 'o-yamagata-1',
        name: '古山閣',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '銀山温泉街の中心にある老舗旅館。和室と洋室を組み合わせた多彩な客室と、銀山温泉の名湯を堪能できる。',
        price: '2食付き 28,000円〜',
        image: './hotels/ginzanonsenfuruyukaku.png',
        tags: ['老舗', '多彩な客室', '温泉街中心'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/hky5nS', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-1-3',
        onsen_id: 'o-yamagata-1',
        name: '銀山荘',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '銀山温泉の上部に位置する静かな旅館。絶景の露天風呂と山形の郷土料理が人気。冬の雪景色の中の温泉体験が忘れられない思い出に。',
        price: '2食付き 22,000円〜',
        image: './hotels/ginzansou.png',
        tags: ['静かな立地', '雪見露天', '郷土料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad314994%2F', rakuten: 'https://a.r10.to/hP9Ohi', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002061%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002061%252F' }
    },

    // ===== 蔵王温泉（山形）=====
    {
        id: 'h-yamagata-2-1',
        onsen_id: 'o-yamagata-2',
        name: '蔵王温泉観光ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、蔵王温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-2-2',
        onsen_id: 'o-yamagata-2',
        name: '蔵王温泉旅館 碧水苑',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。蔵王温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-2-3',
        onsen_id: 'o-yamagata-2',
        name: '蔵王温泉スパリゾート',
        prefecture: 'yamagata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。蔵王温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== かみのやま温泉（山形）=====
    {
        id: 'h-yamagata-3-1',
        onsen_id: 'o-yamagata-3',
        name: 'かみのやま温泉観光ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、かみのやま温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-3-2',
        onsen_id: 'o-yamagata-3',
        name: 'かみのやま温泉旅館 碧水苑',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。かみのやま温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-3-3',
        onsen_id: 'o-yamagata-3',
        name: 'かみのやま温泉スパリゾート',
        prefecture: 'yamagata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。かみのやま温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 天童温泉（山形）=====
    {
        id: 'h-yamagata-4-1',
        onsen_id: 'o-yamagata-4',
        name: '天童温泉観光ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、天童温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-4-2',
        onsen_id: 'o-yamagata-4',
        name: '天童温泉旅館 碧水苑',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。天童温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-4-3',
        onsen_id: 'o-yamagata-4',
        name: '天童温泉スパリゾート',
        prefecture: 'yamagata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。天童温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 赤湯温泉（山形）=====
    {
        id: 'h-yamagata-5-1',
        onsen_id: 'o-yamagata-5',
        name: '赤湯温泉観光ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、赤湯温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-5-2',
        onsen_id: 'o-yamagata-5',
        name: '赤湯温泉旅館 碧水苑',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。赤湯温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-5-3',
        onsen_id: 'o-yamagata-5',
        name: '赤湯温泉スパリゾート',
        prefecture: 'yamagata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。赤湯温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== あつみ温泉（山形）=====
    {
        id: 'h-yamagata-6-1',
        onsen_id: 'o-yamagata-6',
        name: 'あつみ温泉観光ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、あつみ温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-6-2',
        onsen_id: 'o-yamagata-6',
        name: 'あつみ温泉旅館 碧水苑',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。あつみ温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-6-3',
        onsen_id: 'o-yamagata-6',
        name: 'あつみ温泉スパリゾート',
        prefecture: 'yamagata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。あつみ温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 東山温泉（福島）=====
    {
        id: 'h-fukushima-1-1',
        onsen_id: 'o-fukushima-1',
        name: '東山温泉観光ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、東山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-1-2',
        onsen_id: 'o-fukushima-1',
        name: '東山温泉旅館 碧水苑',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。東山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-1-3',
        onsen_id: 'o-fukushima-1',
        name: '東山温泉スパリゾート',
        prefecture: 'fukushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。東山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 磐梯熱海温泉（福島）=====
    {
        id: 'h-fukushima-2-1',
        onsen_id: 'o-fukushima-2',
        name: '磐梯熱海温泉観光ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、磐梯熱海温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-2-2',
        onsen_id: 'o-fukushima-2',
        name: '磐梯熱海温泉旅館 碧水苑',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。磐梯熱海温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-2-3',
        onsen_id: 'o-fukushima-2',
        name: '磐梯熱海温泉スパリゾート',
        prefecture: 'fukushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。磐梯熱海温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 飯坂温泉（福島）=====
    {
        id: 'h-fukushima-3-1',
        onsen_id: 'o-fukushima-3',
        name: '飯坂温泉観光ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、飯坂温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-3-2',
        onsen_id: 'o-fukushima-3',
        name: '飯坂温泉旅館 碧水苑',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。飯坂温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-3-3',
        onsen_id: 'o-fukushima-3',
        name: '飯坂温泉スパリゾート',
        prefecture: 'fukushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。飯坂温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 土湯温泉（福島）=====
    {
        id: 'h-fukushima-4-1',
        onsen_id: 'o-fukushima-4',
        name: '土湯温泉観光ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、土湯温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-4-2',
        onsen_id: 'o-fukushima-4',
        name: '土湯温泉旅館 碧水苑',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。土湯温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-4-3',
        onsen_id: 'o-fukushima-4',
        name: '土湯温泉スパリゾート',
        prefecture: 'fukushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。土湯温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 芦ノ牧温泉（福島）=====
    {
        id: 'h-fukushima-5-1',
        onsen_id: 'o-fukushima-5',
        name: '芦ノ牧温泉観光ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、芦ノ牧温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-5-2',
        onsen_id: 'o-fukushima-5',
        name: '芦ノ牧温泉旅館 碧水苑',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。芦ノ牧温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-5-3',
        onsen_id: 'o-fukushima-5',
        name: '芦ノ牧温泉スパリゾート',
        prefecture: 'fukushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。芦ノ牧温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 高湯温泉（福島）=====
    {
        id: 'h-fukushima-6-1',
        onsen_id: 'o-fukushima-6',
        name: '高湯温泉観光ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、高湯温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-6-2',
        onsen_id: 'o-fukushima-6',
        name: '高湯温泉旅館 碧水苑',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。高湯温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-6-3',
        onsen_id: 'o-fukushima-6',
        name: '高湯温泉スパリゾート',
        prefecture: 'fukushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。高湯温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 袋田温泉（茨城）=====
    {
        id: 'h-ibaraki-1-1',
        onsen_id: 'o-ibaraki-1',
        name: '袋田温泉観光ホテル',
        prefecture: 'ibaraki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、袋田温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-1-2',
        onsen_id: 'o-ibaraki-1',
        name: '袋田温泉旅館 碧水苑',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。袋田温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-1-3',
        onsen_id: 'o-ibaraki-1',
        name: '袋田温泉スパリゾート',
        prefecture: 'ibaraki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。袋田温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 五浦温泉（茨城）=====
    {
        id: 'h-ibaraki-2-1',
        onsen_id: 'o-ibaraki-2',
        name: '五浦温泉観光ホテル',
        prefecture: 'ibaraki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、五浦温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-2-2',
        onsen_id: 'o-ibaraki-2',
        name: '五浦温泉旅館 碧水苑',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。五浦温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-2-3',
        onsen_id: 'o-ibaraki-2',
        name: '五浦温泉スパリゾート',
        prefecture: 'ibaraki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。五浦温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 大子温泉（茨城）=====
    {
        id: 'h-ibaraki-3-1',
        onsen_id: 'o-ibaraki-3',
        name: '大子温泉観光ホテル',
        prefecture: 'ibaraki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、大子温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-3-2',
        onsen_id: 'o-ibaraki-3',
        name: '大子温泉旅館 碧水苑',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。大子温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-3-3',
        onsen_id: 'o-ibaraki-3',
        name: '大子温泉スパリゾート',
        prefecture: 'ibaraki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。大子温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 筑波山温泉（茨城）=====
    {
        id: 'h-ibaraki-4-1',
        onsen_id: 'o-ibaraki-4',
        name: '筑波山温泉観光ホテル',
        prefecture: 'ibaraki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、筑波山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-4-2',
        onsen_id: 'o-ibaraki-4',
        name: '筑波山温泉旅館 碧水苑',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。筑波山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-4-3',
        onsen_id: 'o-ibaraki-4',
        name: '筑波山温泉スパリゾート',
        prefecture: 'ibaraki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。筑波山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 那須温泉郷（栃木）=====
    {
        id: 'h-tochigi-1-1',
        onsen_id: 'o-tochigi-1',
        name: '那須温泉郷観光ホテル',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、那須温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-1-2',
        onsen_id: 'o-tochigi-1',
        name: '那須温泉郷旅館 碧水苑',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。那須温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-1-3',
        onsen_id: 'o-tochigi-1',
        name: '那須温泉郷スパリゾート',
        prefecture: 'tochigi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。那須温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 日光湯元温泉（栃木）=====
    {
        id: 'h-tochigi-2-1',
        onsen_id: 'o-tochigi-2',
        name: '日光湯元温泉観光ホテル',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、日光湯元温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-2-2',
        onsen_id: 'o-tochigi-2',
        name: '日光湯元温泉旅館 碧水苑',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。日光湯元温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-2-3',
        onsen_id: 'o-tochigi-2',
        name: '日光湯元温泉スパリゾート',
        prefecture: 'tochigi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。日光湯元温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 鬼怒川温泉（栃木）=====
    {
        id: 'h-tochigi-3-1',
        onsen_id: 'o-tochigi-3',
        name: '鬼怒川温泉観光ホテル',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、鬼怒川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-3-2',
        onsen_id: 'o-tochigi-3',
        name: '鬼怒川温泉旅館 碧水苑',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。鬼怒川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-3-3',
        onsen_id: 'o-tochigi-3',
        name: '鬼怒川温泉スパリゾート',
        prefecture: 'tochigi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。鬼怒川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 塩原温泉郷（栃木）=====
    {
        id: 'h-tochigi-4-1',
        onsen_id: 'o-tochigi-4',
        name: '塩原温泉郷観光ホテル',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、塩原温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-4-2',
        onsen_id: 'o-tochigi-4',
        name: '塩原温泉郷旅館 碧水苑',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。塩原温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-4-3',
        onsen_id: 'o-tochigi-4',
        name: '塩原温泉郷スパリゾート',
        prefecture: 'tochigi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。塩原温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯西川温泉（栃木）=====
    {
        id: 'h-tochigi-5-1',
        onsen_id: 'o-tochigi-5',
        name: '湯西川温泉観光ホテル',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯西川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-5-2',
        onsen_id: 'o-tochigi-5',
        name: '湯西川温泉旅館 碧水苑',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯西川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-5-3',
        onsen_id: 'o-tochigi-5',
        name: '湯西川温泉スパリゾート',
        prefecture: 'tochigi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯西川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 草津温泉（群馬）=====
    {
        id: 'h-gunma-1-1',
        onsen_id: 'o-gunma-1',
        name: '草津温泉 ホテルヴィレッジ',
        prefecture: 'gunma',
        type: '温泉リゾート',
        description: '湯畑から徒歩圏内のリゾートホテル。草津温泉の硫黄泉を楽しめる大浴場と露天風呂を完備。',
        price: '2食付き 20,000円〜',
        image: './hotels/kusatsuhotelvillage.png',
        tags: ['湯畑近く', 'リゾート', '露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad323154%2F', rakuten: 'https://a.r10.to/h9LSet', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030757%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252Fdp%252F00030757%252F' }
    },
    {
        id: 'h-gunma-1-2',
        onsen_id: 'o-gunma-1',
        name: '奈良屋',
        prefecture: 'gunma',
        type: '純和風旅館',
        description: '創業400年以上の草津を代表する老舗旅館。源泉の湯畑を眼下に望む露天風呂と懐石料理が圧倒的な満足感を提供。',
        price: '2食付き 50,000円〜',
        image: './hotels/naraya.png',
        tags: ['老舗400年', '湯畑眺望', '懐石料理', '源泉掛け流し'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad362465%2F', rakuten: 'https://a.r10.to/hkbzlO', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001641%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001641%252F' }
    },
    {
        id: 'h-gunma-1-3',
        onsen_id: 'o-gunma-1',
        name: 'ホテル櫻井',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '湯畑の賑わいからすぐの場所に佇む、草津では稀少な自家源泉を保有しており、木の温もりに包まれた情緒豊かな大浴場で、本物の草津の湯を贅沢に堪能。',
        price: '2食付き 15,000円〜',
        image: './hotels/kusatsuhotelsakurai.png',
        tags: ['自家源泉', '木造浴室', 'リーズナブル'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad310401%2F', rakuten: 'https://a.r10.to/hkjaLp', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002446%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002446%252F' }
    },
    {
        id: 'h-gunma-1-4',
        onsen_id: 'o-gunma-1',
        name: '望雲',
        prefecture: 'gunma',
        type: 'プレミアム旅館',
        description: '草津の伝統美を体現する格式ある旅館。四季の草津の自然を楽しめる絶景の露天風呂と、厳選された郷土料理が魅力。',
        price: '2食付き 45,000円〜',
        image: './hotels/kusatsubouun.png',
        tags: ['格式', '絶景露天', '郷土料理', '高級旅館'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad316594%2F', rakuten: 'https://a.r10.to/h5yRq8', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002049%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002049%252F' }
    },

    // ===== 伊香保温泉（群馬）=====
    {
        id: 'h-gunma-2-1',
        onsen_id: 'o-gunma-2',
        name: '福一',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '石段から徒歩すぐの老舗旅館。黄金の湯（茶褐色の温泉）と白銀の湯の2種を楽しめる。絶品の群馬和牛料理が評判。',
        price: '2食付き 25,000円〜',
        image: './hotels/ikahofukuichi.png',
        tags: ['石段近く', '2種の湯', '群馬和牛', '老舗'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad370147%2F', rakuten: 'https://a.r10.to/hP0pI8', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000902%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000902%252F' }
    },
    {
        id: 'h-gunma-2-2',
        onsen_id: 'o-gunma-2',
        name: '伊香保温泉 ホテル天坊',
        prefecture: 'gunma',
        type: '大型温泉ホテル',
        description: '伊香保最大の温泉ホテル。関東最大級の屋内温泉テーマパーク「天坊」を併設しファミリーにも人気。',
        price: '2食付き 18,000円〜',
        image: './hotels/ikahotennbo.png',
        tags: ['関東最大級', '温泉施設', 'ファミリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324552%2F', rakuten: 'https://a.r10.to/h52Z9q', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030812%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030812%252F' }
    },

    // ===== 万座温泉（群馬）=====
    {
        id: 'h-gunma-3-1',
        onsen_id: 'o-gunma-3',
        name: '万座温泉観光ホテル',
        prefecture: 'gunma',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、万座温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-3-2',
        onsen_id: 'o-gunma-3',
        name: '万座温泉旅館 碧水苑',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。万座温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-3-3',
        onsen_id: 'o-gunma-3',
        name: '万座温泉スパリゾート',
        prefecture: 'gunma',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。万座温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 四万温泉（群馬）=====
    {
        id: 'h-gunma-4-1',
        onsen_id: 'o-gunma-4',
        name: '四万温泉観光ホテル',
        prefecture: 'gunma',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、四万温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-4-2',
        onsen_id: 'o-gunma-4',
        name: '四万温泉旅館 碧水苑',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。四万温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-4-3',
        onsen_id: 'o-gunma-4',
        name: '四万温泉スパリゾート',
        prefecture: 'gunma',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。四万温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== みなかみ温泉郷（群馬）=====
    {
        id: 'h-gunma-5-1',
        onsen_id: 'o-gunma-5',
        name: 'みなかみ温泉郷観光ホテル',
        prefecture: 'gunma',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、みなかみ温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-5-2',
        onsen_id: 'o-gunma-5',
        name: 'みなかみ温泉郷旅館 碧水苑',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。みなかみ温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-5-3',
        onsen_id: 'o-gunma-5',
        name: 'みなかみ温泉郷スパリゾート',
        prefecture: 'gunma',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。みなかみ温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 老神温泉（群馬）=====
    {
        id: 'h-gunma-6-1',
        onsen_id: 'o-gunma-6',
        name: '老神温泉観光ホテル',
        prefecture: 'gunma',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、老神温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-6-2',
        onsen_id: 'o-gunma-6',
        name: '老神温泉旅館 碧水苑',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。老神温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-6-3',
        onsen_id: 'o-gunma-6',
        name: '老神温泉スパリゾート',
        prefecture: 'gunma',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。老神温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 寄居温泉（埼玉）=====
    {
        id: 'h-saitama-1-1',
        onsen_id: 'o-saitama-1',
        name: '寄居温泉観光ホテル',
        prefecture: 'saitama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、寄居温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-1-2',
        onsen_id: 'o-saitama-1',
        name: '寄居温泉旅館 碧水苑',
        prefecture: 'saitama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。寄居温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-1-3',
        onsen_id: 'o-saitama-1',
        name: '寄居温泉スパリゾート',
        prefecture: 'saitama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。寄居温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 秩父温泉（埼玉）=====
    {
        id: 'h-saitama-2-1',
        onsen_id: 'o-saitama-2',
        name: '秩父温泉観光ホテル',
        prefecture: 'saitama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、秩父温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-2-2',
        onsen_id: 'o-saitama-2',
        name: '秩父温泉旅館 碧水苑',
        prefecture: 'saitama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。秩父温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-2-3',
        onsen_id: 'o-saitama-2',
        name: '秩父温泉スパリゾート',
        prefecture: 'saitama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。秩父温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長瀞温泉（埼玉）=====
    {
        id: 'h-saitama-3-1',
        onsen_id: 'o-saitama-3',
        name: '長瀞温泉観光ホテル',
        prefecture: 'saitama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、長瀞温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-3-2',
        onsen_id: 'o-saitama-3',
        name: '長瀞温泉旅館 碧水苑',
        prefecture: 'saitama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。長瀞温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-3-3',
        onsen_id: 'o-saitama-3',
        name: '長瀞温泉スパリゾート',
        prefecture: 'saitama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。長瀞温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 犬吠埼温泉（千葉）=====
    {
        id: 'h-chiba-1-1',
        onsen_id: 'o-chiba-1',
        name: '犬吠埼温泉観光ホテル',
        prefecture: 'chiba',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、犬吠埼温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-1-2',
        onsen_id: 'o-chiba-1',
        name: '犬吠埼温泉旅館 碧水苑',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。犬吠埼温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-1-3',
        onsen_id: 'o-chiba-1',
        name: '犬吠埼温泉スパリゾート',
        prefecture: 'chiba',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。犬吠埼温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 鴨川温泉（千葉）=====
    {
        id: 'h-chiba-2-1',
        onsen_id: 'o-chiba-2',
        name: '鴨川温泉観光ホテル',
        prefecture: 'chiba',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、鴨川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-2-2',
        onsen_id: 'o-chiba-2',
        name: '鴨川温泉旅館 碧水苑',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。鴨川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-2-3',
        onsen_id: 'o-chiba-2',
        name: '鴨川温泉スパリゾート',
        prefecture: 'chiba',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。鴨川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 勝浦温泉（千葉）=====
    {
        id: 'h-chiba-3-1',
        onsen_id: 'o-chiba-3',
        name: '勝浦温泉観光ホテル',
        prefecture: 'chiba',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、勝浦温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-3-2',
        onsen_id: 'o-chiba-3',
        name: '勝浦温泉旅館 碧水苑',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。勝浦温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-3-3',
        onsen_id: 'o-chiba-3',
        name: '勝浦温泉スパリゾート',
        prefecture: 'chiba',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。勝浦温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 館山温泉（千葉）=====
    {
        id: 'h-chiba-4-1',
        onsen_id: 'o-chiba-4',
        name: '館山温泉観光ホテル',
        prefecture: 'chiba',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、館山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-4-2',
        onsen_id: 'o-chiba-4',
        name: '館山温泉旅館 碧水苑',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。館山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-4-3',
        onsen_id: 'o-chiba-4',
        name: '館山温泉スパリゾート',
        prefecture: 'chiba',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。館山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 奥多摩温泉（東京）=====
    {
        id: 'h-tokyo-1-1',
        onsen_id: 'o-tokyo-1',
        name: '奥多摩温泉観光ホテル',
        prefecture: 'tokyo',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、奥多摩温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-1-2',
        onsen_id: 'o-tokyo-1',
        name: '奥多摩温泉旅館 碧水苑',
        prefecture: 'tokyo',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。奥多摩温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-1-3',
        onsen_id: 'o-tokyo-1',
        name: '奥多摩温泉スパリゾート',
        prefecture: 'tokyo',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。奥多摩温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 大島温泉（東京）=====
    {
        id: 'h-tokyo-2-1',
        onsen_id: 'o-tokyo-2',
        name: '大島温泉観光ホテル',
        prefecture: 'tokyo',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、大島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-2-2',
        onsen_id: 'o-tokyo-2',
        name: '大島温泉旅館 碧水苑',
        prefecture: 'tokyo',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。大島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-2-3',
        onsen_id: 'o-tokyo-2',
        name: '大島温泉スパリゾート',
        prefecture: 'tokyo',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。大島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 八丈島温泉（東京）=====
    {
        id: 'h-tokyo-3-1',
        onsen_id: 'o-tokyo-3',
        name: '八丈島温泉観光ホテル',
        prefecture: 'tokyo',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、八丈島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-3-2',
        onsen_id: 'o-tokyo-3',
        name: '八丈島温泉旅館 碧水苑',
        prefecture: 'tokyo',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。八丈島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-3-3',
        onsen_id: 'o-tokyo-3',
        name: '八丈島温泉スパリゾート',
        prefecture: 'tokyo',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。八丈島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 箱根温泉（神奈川）=====
    {
        id: 'h-kanagawa-1-1',
        onsen_id: 'o-kanagawa-1',
        name: '箱根・芦ノ湖 はなをり',
        prefecture: 'kanagawa',
        type: '温泉旅館',
        description: '芦ノ湖のほとりに佇む、モダンで洗練された温泉旅館。全室レイクビューの客室と、開放的な大浴場、多彩なダイニングが魅力。',
        price: '2食付き 80,000円〜',
        image: './hotels/ashinokohanawori.png',
        tags: ['レイクビュー', 'モダン', '多彩なダイニング'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad369086%2F', rakuten: 'https://a.r10.to/h5rdic', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002449%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002449%252F' }
    },
    {
        id: 'h-kanagawa-1-2',
        onsen_id: 'o-kanagawa-1',
        name: '箱根湯本温泉 和心亭 豊月',
        prefecture: 'kanagawa',
        type: '純和風旅館',
        description: '箱根湯本川沿いの純和風旅館。川のせせらぎを聞きながら楽しめる露天風呂と、季節の食材を活かした料理が人気。',
        price: '2食付き 30,000円〜',
        image: './hotels/washiinteigetsuki.png',
        tags: ['川沿い', '純和風', '季節料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad356382%2F', rakuten: 'https://a.r10.to/hXQhUx', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000689%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000689%252F' }
    },
    {
        id: 'h-kanagawa-1-3',
        onsen_id: 'o-kanagawa-1',
        name: 'ハイアットリージェンシー箱根リゾート&スパ',
        prefecture: 'kanagawa',
        type: 'ラグジュアリーリゾート',
        description: '芦ノ湖を見渡す丘の上の国際的ラグジュアリーリゾート。個室スパと箱根温泉を引いた温浴施設が融合した上質の体験。',
        price: '2食付き 60,000円〜',
        image: './hotels/hyattregencyhakone.png',
        tags: ['ラグジュアリー', '芦ノ湖', 'スパ', 'インターナショナル'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/h5pjw4', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001254%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001254%252F%253F' }
    },
    {
        id: 'h-kanagawa-1-4',
        onsen_id: 'o-kanagawa-1',
        name: '箱根花紋',
        prefecture: 'kanagawa',
        type: 'デザイン旅館',
        description: '現代のデザインと日本の伝統美が融合した旅館。全室に露天風呂を完備し、特産品を活かした創作料理が楽しめる。',
        price: '2食付き 40,000円〜',
        image: './hotels/hakonekamon.png',
        tags: ['全室露天風呂', 'デザイン旅館', '創作料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad322211%2F', rakuten: 'https://a.r10.to/hPsuXZ', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001670%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001670%252F' }
    },

    // ===== 湯河原温泉（神奈川）=====
    {
        id: 'h-kanagawa-2-1',
        onsen_id: 'o-kanagawa-2',
        name: '湯河原温泉観光ホテル',
        prefecture: 'kanagawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯河原温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-2-2',
        onsen_id: 'o-kanagawa-2',
        name: '湯河原温泉旅館 碧水苑',
        prefecture: 'kanagawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯河原温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-2-3',
        onsen_id: 'o-kanagawa-2',
        name: '湯河原温泉スパリゾート',
        prefecture: 'kanagawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯河原温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 強羅温泉（神奈川）=====
    {
        id: 'h-kanagawa-3-1',
        onsen_id: 'o-kanagawa-3',
        name: '強羅花壇',
        prefecture: 'kanagawa',
        type: 'プレミアム旅館',
        description: '強羅山腹に位置する日本屈指の高級旅館。枯山水庭園と富士山を一望する露天風呂、最高峰の懐石料理が揃う。ミシュラン一つ星も獲得。',
        price: '2食付き 80,000円〜',
        image: './hotels/gourakadan.png',
        tags: ['ミシュラン一つ星', '富士山眺望', '枯山水庭園', '最高級'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001935%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001935%252F' }
    },

    // ===== 鶴巻温泉（神奈川）=====
    {
        id: 'h-kanagawa-4-1',
        onsen_id: 'o-kanagawa-4',
        name: '鶴巻温泉観光ホテル',
        prefecture: 'kanagawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、鶴巻温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-4-2',
        onsen_id: 'o-kanagawa-4',
        name: '鶴巻温泉旅館 碧水苑',
        prefecture: 'kanagawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。鶴巻温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-4-3',
        onsen_id: 'o-kanagawa-4',
        name: '鶴巻温泉スパリゾート',
        prefecture: 'kanagawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。鶴巻温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 越後湯沢温泉（新潟）=====
    {
        id: 'h-niigata-1-1',
        onsen_id: 'o-niigata-1',
        name: '越後湯沢温泉観光ホテル',
        prefecture: 'niigata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、越後湯沢温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-1-2',
        onsen_id: 'o-niigata-1',
        name: '越後湯沢温泉旅館 碧水苑',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。越後湯沢温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-1-3',
        onsen_id: 'o-niigata-1',
        name: '越後湯沢温泉スパリゾート',
        prefecture: 'niigata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。越後湯沢温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 月岡温泉（新潟）=====
    {
        id: 'h-niigata-2-1',
        onsen_id: 'o-niigata-2',
        name: '月岡温泉観光ホテル',
        prefecture: 'niigata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、月岡温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-2-2',
        onsen_id: 'o-niigata-2',
        name: '月岡温泉旅館 碧水苑',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。月岡温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-2-3',
        onsen_id: 'o-niigata-2',
        name: '月岡温泉スパリゾート',
        prefecture: 'niigata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。月岡温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 瀬波温泉（新潟）=====
    {
        id: 'h-niigata-3-1',
        onsen_id: 'o-niigata-3',
        name: '瀬波温泉観光ホテル',
        prefecture: 'niigata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、瀬波温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-3-2',
        onsen_id: 'o-niigata-3',
        name: '瀬波温泉旅館 碧水苑',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。瀬波温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-3-3',
        onsen_id: 'o-niigata-3',
        name: '瀬波温泉スパリゾート',
        prefecture: 'niigata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。瀬波温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 岩室温泉（新潟）=====
    {
        id: 'h-niigata-4-1',
        onsen_id: 'o-niigata-4',
        name: '岩室温泉観光ホテル',
        prefecture: 'niigata',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、岩室温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-4-2',
        onsen_id: 'o-niigata-4',
        name: '岩室温泉旅館 碧水苑',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。岩室温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-4-3',
        onsen_id: 'o-niigata-4',
        name: '岩室温泉スパリゾート',
        prefecture: 'niigata',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。岩室温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 妙高温泉（新潟）=====
    {
        id: 'h-niigata-5-1',
        onsen_id: 'o-niigata-5',
        name: '赤倉観光ホテル',
        prefecture: 'niigata',
        type: '温泉リゾート',
        description: '標高1,000mの絶景に浮かぶ、雲海を望むクラシックリゾート。源泉掛け流しの露天風呂から妙高高原のパノラマを眺め、歴史ある品格と至福の開放感に浸れる。',
        price: '2食付き 51,000円〜',
        image: './hotels/akakurakankohotel.png',
        tags: ['絶景露天', '雲海', 'クラシックリゾート'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad312850%2F', rakuten: 'https://a.r10.to/hkbVhb', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000547%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000547%252F' }
    },

    // ===== 宇奈月温泉（富山）=====
    {
        id: 'h-toyama-1-1',
        onsen_id: 'o-toyama-1',
        name: '宇奈月温泉観光ホテル',
        prefecture: 'toyama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、宇奈月温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-1-2',
        onsen_id: 'o-toyama-1',
        name: '宇奈月温泉旅館 碧水苑',
        prefecture: 'toyama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。宇奈月温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-1-3',
        onsen_id: 'o-toyama-1',
        name: '宇奈月温泉スパリゾート',
        prefecture: 'toyama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。宇奈月温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 庄川温泉郷（富山）=====
    {
        id: 'h-toyama-2-1',
        onsen_id: 'o-toyama-2',
        name: '庄川温泉郷観光ホテル',
        prefecture: 'toyama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、庄川温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-2-2',
        onsen_id: 'o-toyama-2',
        name: '庄川温泉郷旅館 碧水苑',
        prefecture: 'toyama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。庄川温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-2-3',
        onsen_id: 'o-toyama-2',
        name: '庄川温泉郷スパリゾート',
        prefecture: 'toyama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。庄川温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 氷見温泉郷（富山）=====
    {
        id: 'h-toyama-3-1',
        onsen_id: 'o-toyama-3',
        name: '氷見温泉郷観光ホテル',
        prefecture: 'toyama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、氷見温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-3-2',
        onsen_id: 'o-toyama-3',
        name: '氷見温泉郷旅館 碧水苑',
        prefecture: 'toyama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。氷見温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-3-3',
        onsen_id: 'o-toyama-3',
        name: '氷見温泉郷スパリゾート',
        prefecture: 'toyama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。氷見温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 山代温泉（石川）=====
    {
        id: 'h-ishikawa-1-1',
        onsen_id: 'o-ishikawa-1',
        name: '山代温泉観光ホテル',
        prefecture: 'ishikawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、山代温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-1-2',
        onsen_id: 'o-ishikawa-1',
        name: '山代温泉旅館 碧水苑',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。山代温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-1-3',
        onsen_id: 'o-ishikawa-1',
        name: '山代温泉スパリゾート',
        prefecture: 'ishikawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。山代温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 和倉温泉（石川）=====
    {
        id: 'h-ishikawa-2-1',
        onsen_id: 'o-ishikawa-2',
        name: '和倉温泉観光ホテル',
        prefecture: 'ishikawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、和倉温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-2-2',
        onsen_id: 'o-ishikawa-2',
        name: '和倉温泉旅館 碧水苑',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。和倉温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-2-3',
        onsen_id: 'o-ishikawa-2',
        name: '和倉温泉スパリゾート',
        prefecture: 'ishikawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。和倉温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 山中温泉（石川）=====
    {
        id: 'h-ishikawa-3-1',
        onsen_id: 'o-ishikawa-3',
        name: '山中温泉観光ホテル',
        prefecture: 'ishikawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、山中温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-3-2',
        onsen_id: 'o-ishikawa-3',
        name: '山中温泉旅館 碧水苑',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。山中温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-3-3',
        onsen_id: 'o-ishikawa-3',
        name: '山中温泉スパリゾート',
        prefecture: 'ishikawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。山中温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 片山津温泉（石川）=====
    {
        id: 'h-ishikawa-4-1',
        onsen_id: 'o-ishikawa-4',
        name: '片山津温泉観光ホテル',
        prefecture: 'ishikawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、片山津温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-4-2',
        onsen_id: 'o-ishikawa-4',
        name: '片山津温泉旅館 碧水苑',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。片山津温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-4-3',
        onsen_id: 'o-ishikawa-4',
        name: '片山津温泉スパリゾート',
        prefecture: 'ishikawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。片山津温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== あわら温泉（福井）=====
    {
        id: 'h-fukui-1-1',
        onsen_id: 'o-fukui-1',
        name: 'あわら温泉観光ホテル',
        prefecture: 'fukui',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、あわら温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-1-2',
        onsen_id: 'o-fukui-1',
        name: 'あわら温泉旅館 碧水苑',
        prefecture: 'fukui',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。あわら温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-1-3',
        onsen_id: 'o-fukui-1',
        name: 'あわら温泉スパリゾート',
        prefecture: 'fukui',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。あわら温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 越前温泉（福井）=====
    {
        id: 'h-fukui-2-1',
        onsen_id: 'o-fukui-2',
        name: '越前温泉観光ホテル',
        prefecture: 'fukui',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、越前温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-2-2',
        onsen_id: 'o-fukui-2',
        name: '越前温泉旅館 碧水苑',
        prefecture: 'fukui',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。越前温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-2-3',
        onsen_id: 'o-fukui-2',
        name: '越前温泉スパリゾート',
        prefecture: 'fukui',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。越前温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 三国温泉（福井）=====
    {
        id: 'h-fukui-3-1',
        onsen_id: 'o-fukui-3',
        name: '三国温泉観光ホテル',
        prefecture: 'fukui',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、三国温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-3-2',
        onsen_id: 'o-fukui-3',
        name: '三国温泉旅館 碧水苑',
        prefecture: 'fukui',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。三国温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-3-3',
        onsen_id: 'o-fukui-3',
        name: '三国温泉スパリゾート',
        prefecture: 'fukui',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。三国温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 石和温泉（山梨）=====
    {
        id: 'h-yamanashi-1-1',
        onsen_id: 'o-yamanashi-1',
        name: '石和温泉観光ホテル',
        prefecture: 'yamanashi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、石和温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-1-2',
        onsen_id: 'o-yamanashi-1',
        name: '石和温泉旅館 碧水苑',
        prefecture: 'yamanashi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。石和温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-1-3',
        onsen_id: 'o-yamanashi-1',
        name: '石和温泉スパリゾート',
        prefecture: 'yamanashi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。石和温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 下部温泉（山梨）=====
    {
        id: 'h-yamanashi-2-1',
        onsen_id: 'o-yamanashi-2',
        name: '下部温泉観光ホテル',
        prefecture: 'yamanashi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、下部温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-2-2',
        onsen_id: 'o-yamanashi-2',
        name: '下部温泉旅館 碧水苑',
        prefecture: 'yamanashi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。下部温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-2-3',
        onsen_id: 'o-yamanashi-2',
        name: '下部温泉スパリゾート',
        prefecture: 'yamanashi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。下部温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 西山温泉（山梨）=====
    {
        id: 'h-yamanashi-3-1',
        onsen_id: 'o-yamanashi-3',
        name: '西山温泉観光ホテル',
        prefecture: 'yamanashi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、西山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-3-2',
        onsen_id: 'o-yamanashi-3',
        name: '西山温泉旅館 碧水苑',
        prefecture: 'yamanashi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。西山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-3-3',
        onsen_id: 'o-yamanashi-3',
        name: '西山温泉スパリゾート',
        prefecture: 'yamanashi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。西山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 別所温泉（長野）=====
    {
        id: 'h-nagano-1-1',
        onsen_id: 'o-nagano-1',
        name: '別所温泉観光ホテル',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、別所温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-1-2',
        onsen_id: 'o-nagano-1',
        name: '別所温泉旅館 碧水苑',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。別所温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-1-3',
        onsen_id: 'o-nagano-1',
        name: '別所温泉スパリゾート',
        prefecture: 'nagano',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。別所温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 野沢温泉（長野）=====
    {
        id: 'h-nagano-2-1',
        onsen_id: 'o-nagano-2',
        name: '野沢温泉観光ホテル',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、野沢温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-2-2',
        onsen_id: 'o-nagano-2',
        name: '野沢温泉旅館 碧水苑',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。野沢温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-2-3',
        onsen_id: 'o-nagano-2',
        name: '野沢温泉スパリゾート',
        prefecture: 'nagano',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。野沢温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 渋温泉（長野）=====
    {
        id: 'h-nagano-3-1',
        onsen_id: 'o-nagano-3',
        name: '渋温泉観光ホテル',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、渋温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-3-2',
        onsen_id: 'o-nagano-3',
        name: '渋温泉旅館 碧水苑',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。渋温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-3-3',
        onsen_id: 'o-nagano-3',
        name: '渋温泉スパリゾート',
        prefecture: 'nagano',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。渋温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 白骨温泉（長野）=====
    {
        id: 'h-nagano-4-1',
        onsen_id: 'o-nagano-4',
        name: '白骨温泉観光ホテル',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、白骨温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-4-2',
        onsen_id: 'o-nagano-4',
        name: '白骨温泉旅館 碧水苑',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。白骨温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-4-3',
        onsen_id: 'o-nagano-4',
        name: '白骨温泉スパリゾート',
        prefecture: 'nagano',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。白骨温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 上諏訪温泉（長野）=====
    {
        id: 'h-nagano-5-1',
        onsen_id: 'o-nagano-5',
        name: '上諏訪温泉観光ホテル',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、上諏訪温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-5-2',
        onsen_id: 'o-nagano-5',
        name: '上諏訪温泉旅館 碧水苑',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。上諏訪温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-5-3',
        onsen_id: 'o-nagano-5',
        name: '上諏訪温泉スパリゾート',
        prefecture: 'nagano',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。上諏訪温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 白馬姫川温泉（長野）=====
    {
        id: 'h-nagano-6-1',
        onsen_id: 'o-nagano-6',
        name: '白馬姫川温泉観光ホテル',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、白馬姫川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-6-2',
        onsen_id: 'o-nagano-6',
        name: '白馬姫川温泉旅館 碧水苑',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。白馬姫川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-6-3',
        onsen_id: 'o-nagano-6',
        name: '白馬姫川温泉スパリゾート',
        prefecture: 'nagano',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。白馬姫川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 下呂温泉（岐阜）=====
    {
        id: 'h-gifu-1-1',
        onsen_id: 'o-gifu-1',
        name: '水明館',
        prefecture: 'gifu',
        type: '大型温泉旅館',
        description: '飛騨川沿いに建つ下呂温泉のシンボル的大旅館。美肌効果で名高い無色透明の源泉を引いた大浴場と展望露天風呂が自慢。',
        price: '2食付き 25,000円〜',
        image: './hotels/suimeikan.png',
        tags: ['飛騨川沿い', '展望露天', '美肌の湯', '大型旅館'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad328767%2F', rakuten: 'https://a.r10.to/hkRvfB', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000551%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000551%252F' }
    },
    {
        id: 'h-gifu-1-2',
        onsen_id: 'o-gifu-1',
        name: '下呂温泉 こころをなでる静寂 みやこ',
        prefecture: 'gifu',
        type: '純和風旅館',
        description: '下呂温泉の中心部にある純和風の温泉旅館。ひのき造りの浴室で下呂の名湯に浸かり、飛騨牛をたっぷり使った会席料理を楽しめる。',
        price: '2食付き 22,000円〜',
        image: './hotels/miyako.png',
        tags: ['ひのき浴室', '飛騨牛', '純和風'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad349049%2F', rakuten: 'https://a.r10.to/hRhfRr', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001171%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001171%252F' }
    },

    // ===== 奥飛騨温泉郷（岐阜）=====
    {
        id: 'h-gifu-2-1',
        onsen_id: 'o-gifu-2',
        name: '奥飛騨温泉郷観光ホテル',
        prefecture: 'gifu',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、奥飛騨温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-2-2',
        onsen_id: 'o-gifu-2',
        name: '奥飛騨温泉郷旅館 碧水苑',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。奥飛騨温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-2-3',
        onsen_id: 'o-gifu-2',
        name: '奥飛騨温泉郷スパリゾート',
        prefecture: 'gifu',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。奥飛騨温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 平湯温泉（岐阜）=====
    {
        id: 'h-gifu-3-1',
        onsen_id: 'o-gifu-3',
        name: '平湯温泉観光ホテル',
        prefecture: 'gifu',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、平湯温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-3-2',
        onsen_id: 'o-gifu-3',
        name: '平湯温泉旅館 碧水苑',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。平湯温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-3-3',
        onsen_id: 'o-gifu-3',
        name: '平湯温泉スパリゾート',
        prefecture: 'gifu',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。平湯温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長良川温泉（岐阜）=====
    {
        id: 'h-gifu-4-1',
        onsen_id: 'o-gifu-4',
        name: '長良川温泉観光ホテル',
        prefecture: 'gifu',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、長良川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-4-2',
        onsen_id: 'o-gifu-4',
        name: '長良川温泉旅館 碧水苑',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。長良川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-4-3',
        onsen_id: 'o-gifu-4',
        name: '長良川温泉スパリゾート',
        prefecture: 'gifu',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。長良川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 熱海温泉（静岡）=====
    {
        id: 'h-shizuoka-1-1',
        onsen_id: 'o-shizuoka-1',
        name: '熱海ふふ',
        prefecture: 'shizuoka',
        type: 'ラグジュアリー旅館',
        description: '熱海の山中に建つ洗練された高級旅館。全室に源泉掛け流しの露天風呂を完備し、相模灘を一望するプライベート空間が魅力。',
        price: '2食付き 60,000円〜',
        image: './hotels/atami-fufu.png',
        tags: ['全室露天付き', '相模灘眺望', 'プライベート', '最高級'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad394094%2F', rakuten: 'https://a.r10.to/hYFgS1', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001360%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001360%252F' }
    },
    {
        id: 'h-shizuoka-1-2',
        onsen_id: 'o-shizuoka-1',
        name: '熱海温泉 ホテルニューアカオ',
        prefecture: 'shizuoka',
        type: '大型リゾートホテル',
        description: '相模湾を一望する断崖の上の大型温泉リゾート。地下1,000mから自噴する源泉を引いた絶景の展望大浴場が人気。',
        price: '2食付き 20,000円〜',
        image: './hotels/newakao.png',
        tags: ['自噴源泉', '相模湾眺望', '大型リゾート'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad333583%2F', rakuten: 'https://a.r10.to/hYDIzH', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002976%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002976%252F' }
    },
    {
        id: 'h-shizuoka-1-3',
        onsen_id: 'o-shizuoka-1',
        name: '古屋旅館',
        prefecture: 'shizuoka',
        type: '老舗旅館',
        description: '熱海温泉で最も古い旅館のひとつ。萩、夏目漱石、山本有三ら文人に愛され続けた風情ある木造旅館。',
        price: '2食付き 30,000円〜',
        image: './hotels/furuya.png',
        tags: ['文人ゆかり', '老舗', '木造建築'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334104%2F', rakuten: 'https://a.r10.to/hRwafU', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000370%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000370%252F' }
    },

    // ===== 伊豆下田温泉（静岡）=====
    {
        id: 'h-shizuoka-2-1',
        onsen_id: 'o-shizuoka-2',
        name: '伊豆下田温泉観光ホテル',
        prefecture: 'shizuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、伊豆下田温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-2-2',
        onsen_id: 'o-shizuoka-2',
        name: '伊豆下田温泉旅館 碧水苑',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。伊豆下田温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-2-3',
        onsen_id: 'o-shizuoka-2',
        name: '伊豆下田温泉スパリゾート',
        prefecture: 'shizuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。伊豆下田温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 修善寺温泉（静岡）=====
    {
        id: 'h-shizuoka-3-1',
        onsen_id: 'o-shizuoka-3',
        name: '修善寺温泉観光ホテル',
        prefecture: 'shizuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、修善寺温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-3-2',
        onsen_id: 'o-shizuoka-3',
        name: '修善寺温泉旅館 碧水苑',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。修善寺温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-3-3',
        onsen_id: 'o-shizuoka-3',
        name: '修善寺温泉スパリゾート',
        prefecture: 'shizuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。修善寺温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 伊東温泉（静岡）=====
    {
        id: 'h-shizuoka-4-1',
        onsen_id: 'o-shizuoka-4',
        name: '伊東温泉観光ホテル',
        prefecture: 'shizuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、伊東温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-4-2',
        onsen_id: 'o-shizuoka-4',
        name: '伊東温泉旅館 碧水苑',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。伊東温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-4-3',
        onsen_id: 'o-shizuoka-4',
        name: '伊東温泉スパリゾート',
        prefecture: 'shizuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。伊東温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 伊豆長岡温泉（静岡）=====
    {
        id: 'h-shizuoka-5-1',
        onsen_id: 'o-shizuoka-5',
        name: '伊豆長岡温泉観光ホテル',
        prefecture: 'shizuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、伊豆長岡温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-5-2',
        onsen_id: 'o-shizuoka-5',
        name: '伊豆長岡温泉旅館 碧水苑',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。伊豆長岡温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-5-3',
        onsen_id: 'o-shizuoka-5',
        name: '伊豆長岡温泉スパリゾート',
        prefecture: 'shizuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。伊豆長岡温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯谷温泉（愛知）=====
    {
        id: 'h-aichi-1-1',
        onsen_id: 'o-aichi-1',
        name: '湯谷温泉観光ホテル',
        prefecture: 'aichi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯谷温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-1-2',
        onsen_id: 'o-aichi-1',
        name: '湯谷温泉旅館 碧水苑',
        prefecture: 'aichi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯谷温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-1-3',
        onsen_id: 'o-aichi-1',
        name: '湯谷温泉スパリゾート',
        prefecture: 'aichi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯谷温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 蒲郡温泉（愛知）=====
    {
        id: 'h-aichi-2-1',
        onsen_id: 'o-aichi-2',
        name: '蒲郡温泉観光ホテル',
        prefecture: 'aichi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、蒲郡温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-2-2',
        onsen_id: 'o-aichi-2',
        name: '蒲郡温泉旅館 碧水苑',
        prefecture: 'aichi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。蒲郡温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-2-3',
        onsen_id: 'o-aichi-2',
        name: '蒲郡温泉スパリゾート',
        prefecture: 'aichi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。蒲郡温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長島温泉（三重）=====
    {
        id: 'h-mie-1-1',
        onsen_id: 'o-mie-1',
        name: '長島温泉観光ホテル',
        prefecture: 'mie',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、長島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-1-2',
        onsen_id: 'o-mie-1',
        name: '長島温泉旅館 碧水苑',
        prefecture: 'mie',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。長島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-1-3',
        onsen_id: 'o-mie-1',
        name: '長島温泉スパリゾート',
        prefecture: 'mie',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。長島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯の山温泉（三重）=====
    {
        id: 'h-mie-2-1',
        onsen_id: 'o-mie-2',
        name: '湯の山温泉観光ホテル',
        prefecture: 'mie',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯の山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-2-2',
        onsen_id: 'o-mie-2',
        name: '湯の山温泉旅館 碧水苑',
        prefecture: 'mie',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯の山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-2-3',
        onsen_id: 'o-mie-2',
        name: '湯の山温泉スパリゾート',
        prefecture: 'mie',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯の山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 志摩温泉（三重）=====
    {
        id: 'h-mie-3-1',
        onsen_id: 'o-mie-3',
        name: '志摩温泉観光ホテル',
        prefecture: 'mie',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、志摩温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-3-2',
        onsen_id: 'o-mie-3',
        name: '志摩温泉旅館 碧水苑',
        prefecture: 'mie',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。志摩温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-3-3',
        onsen_id: 'o-mie-3',
        name: '志摩温泉スパリゾート',
        prefecture: 'mie',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。志摩温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 雄琴温泉（滋賀）=====
    {
        id: 'h-shiga-1-1',
        onsen_id: 'o-shiga-1',
        name: '雄琴温泉観光ホテル',
        prefecture: 'shiga',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、雄琴温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shiga-1-2',
        onsen_id: 'o-shiga-1',
        name: '雄琴温泉旅館 碧水苑',
        prefecture: 'shiga',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。雄琴温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shiga-1-3',
        onsen_id: 'o-shiga-1',
        name: '雄琴温泉スパリゾート',
        prefecture: 'shiga',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。雄琴温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 嵐山温泉（京都）=====
    {
        id: 'h-kyoto-1-1',
        onsen_id: 'o-kyoto-1',
        name: '嵐山温泉観光ホテル',
        prefecture: 'kyoto',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、嵐山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-1-2',
        onsen_id: 'o-kyoto-1',
        name: '嵐山温泉旅館 碧水苑',
        prefecture: 'kyoto',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。嵐山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-1-3',
        onsen_id: 'o-kyoto-1',
        name: '嵐山温泉スパリゾート',
        prefecture: 'kyoto',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。嵐山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 天橋立温泉（京都）=====
    {
        id: 'h-kyoto-2-1',
        onsen_id: 'o-kyoto-2',
        name: '天橋立温泉観光ホテル',
        prefecture: 'kyoto',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、天橋立温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-2-2',
        onsen_id: 'o-kyoto-2',
        name: '天橋立温泉旅館 碧水苑',
        prefecture: 'kyoto',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。天橋立温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-2-3',
        onsen_id: 'o-kyoto-2',
        name: '天橋立温泉スパリゾート',
        prefecture: 'kyoto',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。天橋立温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 夕日ヶ浦温泉（京都）=====
    {
        id: 'h-kyoto-3-1',
        onsen_id: 'o-kyoto-3',
        name: '夕日ヶ浦温泉観光ホテル',
        prefecture: 'kyoto',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、夕日ヶ浦温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-3-2',
        onsen_id: 'o-kyoto-3',
        name: '夕日ヶ浦温泉旅館 碧水苑',
        prefecture: 'kyoto',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。夕日ヶ浦温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-3-3',
        onsen_id: 'o-kyoto-3',
        name: '夕日ヶ浦温泉スパリゾート',
        prefecture: 'kyoto',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。夕日ヶ浦温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 天見温泉（大阪）=====
    {
        id: 'h-osaka-1-1',
        onsen_id: 'o-osaka-1',
        name: '天見温泉観光ホテル',
        prefecture: 'osaka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、天見温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-1-2',
        onsen_id: 'o-osaka-1',
        name: '天見温泉旅館 碧水苑',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。天見温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-1-3',
        onsen_id: 'o-osaka-1',
        name: '天見温泉スパリゾート',
        prefecture: 'osaka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。天見温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 犬鳴山温泉（大阪）=====
    {
        id: 'h-osaka-2-1',
        onsen_id: 'o-osaka-2',
        name: '犬鳴山温泉観光ホテル',
        prefecture: 'osaka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、犬鳴山温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-2-2',
        onsen_id: 'o-osaka-2',
        name: '犬鳴山温泉旅館 碧水苑',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。犬鳴山温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-2-3',
        onsen_id: 'o-osaka-2',
        name: '犬鳴山温泉スパリゾート',
        prefecture: 'osaka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。犬鳴山温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 有馬温泉（兵庫）=====
    {
        id: 'h-hyogo-1-1',
        onsen_id: 'o-hyogo-1',
        name: '御所坊',
        prefecture: 'hyogo',
        type: 'プレミアム旅館',
        description: '有馬温泉最古の旅館。800年以上の歴史を誇り、豊臣秀吉も逗留した記録が残る。金泉・銀泉を両方持つ数少ない宿の一つ。',
        price: '2食付き 50,000円〜',
        image: './hotels/gosyobou.png',
        tags: ['800年の歴史', '金泉銀泉', '豊臣秀吉ゆかり', '最古の宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad382371%2F', rakuten: 'https://a.r10.to/h5uavg', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001453%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001453%252F' }
    },
    {
        id: 'h-hyogo-1-2',
        onsen_id: 'o-hyogo-1',
        name: '兵衛向陽閣',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '有馬温泉街に位置するモダンな旅館。金泉・銀泉を両方引いた洗練された浴室と、創作会席料理が評判。',
        price: '2食付き 35,000円〜',
        image: './hotels/hyoeikoyokaku.png',
        tags: ['金泉銀泉', 'モダン', '創作会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad321542%2F', rakuten: 'https://a.r10.to/h56XTF', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000734%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000734%252F' }
    },
    {
        id: 'h-hyogo-1-3',
        onsen_id: 'o-hyogo-1',
        name: 'ねぎや陵楓閣',
        prefecture: 'hyogo',
        type: '純和風旅館',
        description: '有馬温泉の高台にある純和風旅館。金泉の露天風呂からの眺望と、京都・兵庫の食材を活かした料理が自慢。',
        price: '2食付き 40,000円〜',
        image: './hotels/negiya.png',
        tags: ['金泉露天', '高台の絶景', '京兵庫食材'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad327370%2F', rakuten: 'https://a.r10.to/h523ez', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030243%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030243%252F' }
    },

    // ===== 湯村温泉（兵庫）=====
    {
        id: 'h-hyogo-2-1',
        onsen_id: 'o-hyogo-2',
        name: '湯村温泉観光ホテル',
        prefecture: 'hyogo',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯村温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-2-2',
        onsen_id: 'o-hyogo-2',
        name: '湯村温泉旅館 碧水苑',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯村温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-2-3',
        onsen_id: 'o-hyogo-2',
        name: '湯村温泉スパリゾート',
        prefecture: 'hyogo',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯村温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 城崎温泉（兵庫）=====
    {
        id: 'h-hyogo-3-1',
        onsen_id: 'o-hyogo-3',
        name: '城崎温泉観光ホテル',
        prefecture: 'hyogo',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、城崎温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-3-2',
        onsen_id: 'o-hyogo-3',
        name: '城崎温泉旅館 碧水苑',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。城崎温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-3-3',
        onsen_id: 'o-hyogo-3',
        name: '城崎温泉スパリゾート',
        prefecture: 'hyogo',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。城崎温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 洲本温泉（兵庫）=====
    {
        id: 'h-hyogo-4-1',
        onsen_id: 'o-hyogo-4',
        name: '洲本温泉観光ホテル',
        prefecture: 'hyogo',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、洲本温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-4-2',
        onsen_id: 'o-hyogo-4',
        name: '洲本温泉旅館 碧水苑',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。洲本温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-4-3',
        onsen_id: 'o-hyogo-4',
        name: '洲本温泉スパリゾート',
        prefecture: 'hyogo',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。洲本温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 洞川温泉（奈良）=====
    {
        id: 'h-nara-1-1',
        onsen_id: 'o-nara-1',
        name: '洞川温泉観光ホテル',
        prefecture: 'nara',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、洞川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-1-2',
        onsen_id: 'o-nara-1',
        name: '洞川温泉旅館 碧水苑',
        prefecture: 'nara',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。洞川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-1-3',
        onsen_id: 'o-nara-1',
        name: '洞川温泉スパリゾート',
        prefecture: 'nara',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。洞川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 十津川温泉郷（奈良）=====
    {
        id: 'h-nara-2-1',
        onsen_id: 'o-nara-2',
        name: '十津川温泉郷観光ホテル',
        prefecture: 'nara',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、十津川温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-2-2',
        onsen_id: 'o-nara-2',
        name: '十津川温泉郷旅館 碧水苑',
        prefecture: 'nara',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。十津川温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-2-3',
        onsen_id: 'o-nara-2',
        name: '十津川温泉郷スパリゾート',
        prefecture: 'nara',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。十津川温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 白浜温泉（和歌山）=====
    {
        id: 'h-wakayama-1-1',
        onsen_id: 'o-wakayama-1',
        name: '白浜温泉観光ホテル',
        prefecture: 'wakayama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、白浜温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-1-2',
        onsen_id: 'o-wakayama-1',
        name: '白浜温泉旅館 碧水苑',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。白浜温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-1-3',
        onsen_id: 'o-wakayama-1',
        name: '白浜温泉スパリゾート',
        prefecture: 'wakayama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。白浜温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 熊野本宮温泉郷（和歌山）=====
    {
        id: 'h-wakayama-2-1',
        onsen_id: 'o-wakayama-2',
        name: '熊野本宮温泉郷観光ホテル',
        prefecture: 'wakayama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、熊野本宮温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-2-2',
        onsen_id: 'o-wakayama-2',
        name: '熊野本宮温泉郷旅館 碧水苑',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。熊野本宮温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-2-3',
        onsen_id: 'o-wakayama-2',
        name: '熊野本宮温泉郷スパリゾート',
        prefecture: 'wakayama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。熊野本宮温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 南紀勝浦温泉（和歌山）=====
    {
        id: 'h-wakayama-3-1',
        onsen_id: 'o-wakayama-3',
        name: '南紀勝浦温泉観光ホテル',
        prefecture: 'wakayama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、南紀勝浦温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-3-2',
        onsen_id: 'o-wakayama-3',
        name: '南紀勝浦温泉旅館 碧水苑',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。南紀勝浦温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-3-3',
        onsen_id: 'o-wakayama-3',
        name: '南紀勝浦温泉スパリゾート',
        prefecture: 'wakayama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。南紀勝浦温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 龍神温泉（和歌山）=====
    {
        id: 'h-wakayama-4-1',
        onsen_id: 'o-wakayama-4',
        name: '龍神温泉観光ホテル',
        prefecture: 'wakayama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、龍神温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-4-2',
        onsen_id: 'o-wakayama-4',
        name: '龍神温泉旅館 碧水苑',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。龍神温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-4-3',
        onsen_id: 'o-wakayama-4',
        name: '龍神温泉スパリゾート',
        prefecture: 'wakayama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。龍神温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 三朝温泉（鳥取）=====
    {
        id: 'h-tottori-1-1',
        onsen_id: 'o-tottori-1',
        name: '三朝温泉観光ホテル',
        prefecture: 'tottori',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、三朝温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-1-2',
        onsen_id: 'o-tottori-1',
        name: '三朝温泉旅館 碧水苑',
        prefecture: 'tottori',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。三朝温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-1-3',
        onsen_id: 'o-tottori-1',
        name: '三朝温泉スパリゾート',
        prefecture: 'tottori',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。三朝温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 皆生温泉（鳥取）=====
    {
        id: 'h-tottori-2-1',
        onsen_id: 'o-tottori-2',
        name: '皆生温泉観光ホテル',
        prefecture: 'tottori',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、皆生温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-2-2',
        onsen_id: 'o-tottori-2',
        name: '皆生温泉旅館 碧水苑',
        prefecture: 'tottori',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。皆生温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-2-3',
        onsen_id: 'o-tottori-2',
        name: '皆生温泉スパリゾート',
        prefecture: 'tottori',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。皆生温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 玉造温泉（島根）=====
    {
        id: 'h-shimane-1-1',
        onsen_id: 'o-shimane-1',
        name: '玉造温泉観光ホテル',
        prefecture: 'shimane',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、玉造温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-1-2',
        onsen_id: 'o-shimane-1',
        name: '玉造温泉旅館 碧水苑',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。玉造温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-1-3',
        onsen_id: 'o-shimane-1',
        name: '玉造温泉スパリゾート',
        prefecture: 'shimane',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。玉造温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 松江しんじ湖温泉（島根）=====
    {
        id: 'h-shimane-2-1',
        onsen_id: 'o-shimane-2',
        name: '松江しんじ湖温泉観光ホテル',
        prefecture: 'shimane',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、松江しんじ湖温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-2-2',
        onsen_id: 'o-shimane-2',
        name: '松江しんじ湖温泉旅館 碧水苑',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。松江しんじ湖温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-2-3',
        onsen_id: 'o-shimane-2',
        name: '松江しんじ湖温泉スパリゾート',
        prefecture: 'shimane',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。松江しんじ湖温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 温泉津温泉（島根）=====
    {
        id: 'h-shimane-3-1',
        onsen_id: 'o-shimane-3',
        name: '温泉津温泉観光ホテル',
        prefecture: 'shimane',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、温泉津温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-3-2',
        onsen_id: 'o-shimane-3',
        name: '温泉津温泉旅館 碧水苑',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。温泉津温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-3-3',
        onsen_id: 'o-shimane-3',
        name: '温泉津温泉スパリゾート',
        prefecture: 'shimane',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。温泉津温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯原温泉（岡山）=====
    {
        id: 'h-okayama-1-1',
        onsen_id: 'o-okayama-1',
        name: '湯原温泉観光ホテル',
        prefecture: 'okayama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯原温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-1-2',
        onsen_id: 'o-okayama-1',
        name: '湯原温泉旅館 碧水苑',
        prefecture: 'okayama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯原温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-1-3',
        onsen_id: 'o-okayama-1',
        name: '湯原温泉スパリゾート',
        prefecture: 'okayama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯原温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 奥津温泉（岡山）=====
    {
        id: 'h-okayama-2-1',
        onsen_id: 'o-okayama-2',
        name: '奥津温泉観光ホテル',
        prefecture: 'okayama',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、奥津温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-2-2',
        onsen_id: 'o-okayama-2',
        name: '奥津温泉旅館 碧水苑',
        prefecture: 'okayama',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。奥津温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-2-3',
        onsen_id: 'o-okayama-2',
        name: '奥津温泉スパリゾート',
        prefecture: 'okayama',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。奥津温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 宮島温泉（広島）=====
    {
        id: 'h-hiroshima-1-1',
        onsen_id: 'o-hiroshima-1',
        name: '宮島温泉観光ホテル',
        prefecture: 'hiroshima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、宮島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-1-2',
        onsen_id: 'o-hiroshima-1',
        name: '宮島温泉旅館 碧水苑',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。宮島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-1-3',
        onsen_id: 'o-hiroshima-1',
        name: '宮島温泉スパリゾート',
        prefecture: 'hiroshima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。宮島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯来温泉（広島）=====
    {
        id: 'h-hiroshima-2-1',
        onsen_id: 'o-hiroshima-2',
        name: '湯来温泉観光ホテル',
        prefecture: 'hiroshima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯来温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-2-2',
        onsen_id: 'o-hiroshima-2',
        name: '湯来温泉旅館 碧水苑',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯来温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-2-3',
        onsen_id: 'o-hiroshima-2',
        name: '湯来温泉スパリゾート',
        prefecture: 'hiroshima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯来温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯田温泉（山口）=====
    {
        id: 'h-yamaguchi-1-1',
        onsen_id: 'o-yamaguchi-1',
        name: '湯田温泉観光ホテル',
        prefecture: 'yamaguchi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、湯田温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-1-2',
        onsen_id: 'o-yamaguchi-1',
        name: '湯田温泉旅館 碧水苑',
        prefecture: 'yamaguchi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。湯田温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-1-3',
        onsen_id: 'o-yamaguchi-1',
        name: '湯田温泉スパリゾート',
        prefecture: 'yamaguchi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。湯田温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長門湯本温泉（山口）=====
    {
        id: 'h-yamaguchi-2-1',
        onsen_id: 'o-yamaguchi-2',
        name: '長門湯本温泉観光ホテル',
        prefecture: 'yamaguchi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、長門湯本温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-2-2',
        onsen_id: 'o-yamaguchi-2',
        name: '長門湯本温泉旅館 碧水苑',
        prefecture: 'yamaguchi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。長門湯本温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-2-3',
        onsen_id: 'o-yamaguchi-2',
        name: '長門湯本温泉スパリゾート',
        prefecture: 'yamaguchi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。長門湯本温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 祖谷温泉（徳島）=====
    {
        id: 'h-tokushima-1-1',
        onsen_id: 'o-tokushima-1',
        name: '祖谷温泉観光ホテル',
        prefecture: 'tokushima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、祖谷温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokushima-1-2',
        onsen_id: 'o-tokushima-1',
        name: '祖谷温泉旅館 碧水苑',
        prefecture: 'tokushima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。祖谷温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokushima-1-3',
        onsen_id: 'o-tokushima-1',
        name: '祖谷温泉スパリゾート',
        prefecture: 'tokushima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。祖谷温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 塩江温泉（香川）=====
    {
        id: 'h-kagawa-1-1',
        onsen_id: 'o-kagawa-1',
        name: '塩江温泉観光ホテル',
        prefecture: 'kagawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、塩江温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-1-2',
        onsen_id: 'o-kagawa-1',
        name: '塩江温泉旅館 碧水苑',
        prefecture: 'kagawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。塩江温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-1-3',
        onsen_id: 'o-kagawa-1',
        name: '塩江温泉スパリゾート',
        prefecture: 'kagawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。塩江温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== こんぴら温泉郷（香川）=====
    {
        id: 'h-kagawa-2-1',
        onsen_id: 'o-kagawa-2',
        name: 'こんぴら温泉郷観光ホテル',
        prefecture: 'kagawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、こんぴら温泉郷を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-2-2',
        onsen_id: 'o-kagawa-2',
        name: 'こんぴら温泉郷旅館 碧水苑',
        prefecture: 'kagawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。こんぴら温泉郷の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-2-3',
        onsen_id: 'o-kagawa-2',
        name: 'こんぴら温泉郷スパリゾート',
        prefecture: 'kagawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。こんぴら温泉郷の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 道後温泉（愛媛）=====
    {
        id: 'h-ehime-1-1',
        onsen_id: 'o-ehime-1',
        name: '道後舘',
        prefecture: 'ehime',
        type: '大型温泉旅館',
        description: '道後温泉本館まで徒歩1分の好立地。坊っちゃん列車のジオラマが展示された趣ある旅館。空中露天風呂からの夜景が美しい。',
        price: '2食付き 28,000円〜',
        image: './hotels/dogokan.png',
        tags: ['本館徒歩1分', '空中露天風呂', '夜景', '好立地'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad332766%2F', rakuten: 'https://a.r10.to/hk3SY1', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001154%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001154%252F' }
    },
    {
        id: 'h-ehime-1-2',
        onsen_id: 'o-ehime-1',
        name: 'ふなや',
        prefecture: 'ehime',
        type: 'プレミアム旅館',
        description: '元禄末期創業、松山藩主が湯治に使用した由緒ある旅館。道後温泉の自家源泉を引いた庭園露天風呂と松山の食材を活かした会席が評判。',
        price: '2食付き 45,000円〜',
        image: './hotels/funaya.png',
        tags: ['元禄創業', '藩主御用達', '自家源泉', '庭園露天'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad356524%2F', rakuten: 'https://a.r10.to/hPVGYd', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000462%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000462%252F' }
    },
    {
        id: 'h-ehime-1-3',
        onsen_id: 'o-ehime-1',
        name: '大和屋本店',
        prefecture: 'ehime',
        type: '純和風旅館',
        description: '道後温泉街にある老舗純和風旅館。全客室に障子と縁側を設け、昔ながらの温泉旅館の風情を大切にしている。旬の食材を使った懐石料理が自慢。',
        price: '2食付き 32,000円〜',
        image: './hotels/yamatoya.png',
        tags: ['老舗純和風', '障子縁側', '懐石料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad354082%2F', rakuten: 'https://a.r10.to/hPaOHg', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000663%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000663%252F' }
    },

    // ===== 鈍川温泉（愛媛）=====
    {
        id: 'h-ehime-2-1',
        onsen_id: 'o-ehime-2',
        name: '鈍川温泉観光ホテル',
        prefecture: 'ehime',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、鈍川温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ehime-2-2',
        onsen_id: 'o-ehime-2',
        name: '鈍川温泉旅館 碧水苑',
        prefecture: 'ehime',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。鈍川温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ehime-2-3',
        onsen_id: 'o-ehime-2',
        name: '鈍川温泉スパリゾート',
        prefecture: 'ehime',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。鈍川温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 四万十温泉（高知）=====
    {
        id: 'h-kochi-1-1',
        onsen_id: 'o-kochi-1',
        name: '四万十温泉観光ホテル',
        prefecture: 'kochi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、四万十温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-1-2',
        onsen_id: 'o-kochi-1',
        name: '四万十温泉旅館 碧水苑',
        prefecture: 'kochi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。四万十温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-1-3',
        onsen_id: 'o-kochi-1',
        name: '四万十温泉スパリゾート',
        prefecture: 'kochi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。四万十温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== あしずり温泉（高知）=====
    {
        id: 'h-kochi-2-1',
        onsen_id: 'o-kochi-2',
        name: 'あしずり温泉観光ホテル',
        prefecture: 'kochi',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、あしずり温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-2-2',
        onsen_id: 'o-kochi-2',
        name: 'あしずり温泉旅館 碧水苑',
        prefecture: 'kochi',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。あしずり温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-2-3',
        onsen_id: 'o-kochi-2',
        name: 'あしずり温泉スパリゾート',
        prefecture: 'kochi',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。あしずり温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 二日市温泉（福岡）=====
    {
        id: 'h-fukuoka-1-1',
        onsen_id: 'o-fukuoka-1',
        name: '二日市温泉観光ホテル',
        prefecture: 'fukuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、二日市温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-1-2',
        onsen_id: 'o-fukuoka-1',
        name: '二日市温泉旅館 碧水苑',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。二日市温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-1-3',
        onsen_id: 'o-fukuoka-1',
        name: '二日市温泉スパリゾート',
        prefecture: 'fukuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。二日市温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 原鶴温泉（福岡）=====
    {
        id: 'h-fukuoka-2-1',
        onsen_id: 'o-fukuoka-2',
        name: '原鶴温泉観光ホテル',
        prefecture: 'fukuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、原鶴温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-2-2',
        onsen_id: 'o-fukuoka-2',
        name: '原鶴温泉旅館 碧水苑',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。原鶴温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-2-3',
        onsen_id: 'o-fukuoka-2',
        name: '原鶴温泉スパリゾート',
        prefecture: 'fukuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。原鶴温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 脇田温泉（福岡）=====
    {
        id: 'h-fukuoka-3-1',
        onsen_id: 'o-fukuoka-3',
        name: '脇田温泉観光ホテル',
        prefecture: 'fukuoka',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、脇田温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-3-2',
        onsen_id: 'o-fukuoka-3',
        name: '脇田温泉旅館 碧水苑',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。脇田温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-3-3',
        onsen_id: 'o-fukuoka-3',
        name: '脇田温泉スパリゾート',
        prefecture: 'fukuoka',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。脇田温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 嬉野温泉（佐賀）=====
    {
        id: 'h-saga-1-1',
        onsen_id: 'o-saga-1',
        name: '嬉野温泉観光ホテル',
        prefecture: 'saga',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、嬉野温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saga-1-2',
        onsen_id: 'o-saga-1',
        name: '嬉野温泉旅館 碧水苑',
        prefecture: 'saga',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。嬉野温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saga-1-3',
        onsen_id: 'o-saga-1',
        name: '嬉野温泉スパリゾート',
        prefecture: 'saga',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。嬉野温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 武雄温泉（佐賀）=====
    {
        id: 'h-saga-2-1',
        onsen_id: 'o-saga-2',
        name: '武雄温泉観光ホテル',
        prefecture: 'saga',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、武雄温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saga-2-2',
        onsen_id: 'o-saga-2',
        name: '武雄温泉旅館 碧水苑',
        prefecture: 'saga',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。武雄温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saga-2-3',
        onsen_id: 'o-saga-2',
        name: '武雄温泉スパリゾート',
        prefecture: 'saga',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。武雄温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 雲仙温泉（長崎）=====
    {
        id: 'h-nagasaki-1-1',
        onsen_id: 'o-nagasaki-1',
        name: '雲仙温泉観光ホテル',
        prefecture: 'nagasaki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、雲仙温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-1-2',
        onsen_id: 'o-nagasaki-1',
        name: '雲仙温泉旅館 碧水苑',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。雲仙温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-1-3',
        onsen_id: 'o-nagasaki-1',
        name: '雲仙温泉スパリゾート',
        prefecture: 'nagasaki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。雲仙温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 小浜温泉（長崎）=====
    {
        id: 'h-nagasaki-2-1',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉観光ホテル',
        prefecture: 'nagasaki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、小浜温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-2-2',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉旅館 碧水苑',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。小浜温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-2-3',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉スパリゾート',
        prefecture: 'nagasaki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。小浜温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 島原温泉（長崎）=====
    {
        id: 'h-nagasaki-3-1',
        onsen_id: 'o-nagasaki-3',
        name: '島原温泉観光ホテル',
        prefecture: 'nagasaki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、島原温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-3-2',
        onsen_id: 'o-nagasaki-3',
        name: '島原温泉旅館 碧水苑',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。島原温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-3-3',
        onsen_id: 'o-nagasaki-3',
        name: '島原温泉スパリゾート',
        prefecture: 'nagasaki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。島原温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 黒川温泉（熊本）=====
    {
        id: 'h-kumamoto-1-1',
        onsen_id: 'o-kumamoto-1',
        name: 'お宿 のし湯',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '黒川温泉街の中心に位置する旅館。入湯手形が使える自慢の露天風呂を含む多彩な湯と、地元食材を活かした料理が人気。',
        price: '2食付き 25,000円〜',
        image: './hotels/onoshino.png',
        tags: ['黒川温泉街', '露天風呂', '地元食材'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad315969%2F', rakuten: 'https://a.r10.to/hkwkxn', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002068%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002068%252F' }
    },
    {
        id: 'h-kumamoto-1-2',
        onsen_id: 'o-kumamoto-1',
        name: '旅館こうの湯',
        prefecture: 'kumamoto',
        type: '高評価温泉旅館',
        description: '黒川温泉の隠れ家的宿。山の斜面を活かした複数の源泉掛け流し露天風呂と、阿蘇の食材を使った丁寧な料理が好評。',
        price: '2食付き 30,000円〜',
        image: './hotels/kounoyu.png',
        tags: ['源泉掛け流し', '隠れ家', '阿蘇食材'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad378806%2F', rakuten: '#', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001390%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001390%252F' }
    },
    {
        id: 'h-kumamoto-1-3',
        onsen_id: 'o-kumamoto-1',
        name: '山みず木',
        prefecture: 'kumamoto',
        type: 'ラグジュアリー旅館',
        description: '黒川を代表する高級旅館。全室に露天風呂を完備し、庭園を眺めながらの湯浴みと九州の恵みを詰め込んだ懐石コースが充実。',
        price: '2食付き 45,000円〜',
        image: './hotels/yamamizuki.png',
        tags: ['全室露天付き', 'ラグジュアリー', '庭園', '九州懐石'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad356096%2F', rakuten: 'https://a.r10.to/hkaARy', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001801%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001801%252F' }
    },

    // ===== 人吉温泉（熊本）=====
    {
        id: 'h-kumamoto-2-1',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉観光ホテル',
        prefecture: 'kumamoto',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、人吉温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-2-2',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉旅館 碧水苑',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。人吉温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-2-3',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉スパリゾート',
        prefecture: 'kumamoto',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。人吉温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 杖立温泉（熊本）=====
    {
        id: 'h-kumamoto-3-1',
        onsen_id: 'o-kumamoto-3',
        name: '杖立温泉観光ホテル',
        prefecture: 'kumamoto',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、杖立温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-3-2',
        onsen_id: 'o-kumamoto-3',
        name: '杖立温泉旅館 碧水苑',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。杖立温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-3-3',
        onsen_id: 'o-kumamoto-3',
        name: '杖立温泉スパリゾート',
        prefecture: 'kumamoto',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。杖立温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 阿蘇内牧温泉（熊本）=====
    {
        id: 'h-kumamoto-4-1',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉観光ホテル',
        prefecture: 'kumamoto',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、阿蘇内牧温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-4-2',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉旅館 碧水苑',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。阿蘇内牧温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-4-3',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉スパリゾート',
        prefecture: 'kumamoto',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。阿蘇内牧温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 別府温泉（大分）=====
    {
        id: 'h-oita-1-1',
        onsen_id: 'o-oita-1',
        name: '杉乃井ホテル',
        prefecture: 'oita',
        type: '大型リゾートホテル',
        description: '別府湾を一望する大分最大の温泉リゾート。螺旋状の温泉「棚湯」や食事・エンタメが揃う日本最大級の温泉ホテル。',
        price: '2食付き 25,000円〜',
        image: './hotels/suginoihotel.png',
        tags: ['別府湾眺望', '最大級リゾート', '棚湯', 'エンタメ充実'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad344350%2F', rakuten: 'https://a.r10.to/h5zfYX', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001104%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001104%252F' }
    },
    {
        id: 'h-oita-1-2',
        onsen_id: 'o-oita-1',
        name: '別府温泉 山田別荘',
        prefecture: 'oita',
        type: '国登録有形文化財の宿',
        description: '昭和初期に建てられた旧別荘を旅館として公開。国登録有形文化財の重厚な木造建築と昔ながらの別府温泉が体験できる。',
        price: '素泊まり 3,500円〜',
        image: './hotels/beppuyamada.png',
        tags: ['国登録有形文化財', '昭和建築', 'リーズナブル', '雰囲気満点'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad363005%2F', rakuten: 'https://a.r10.to/h5bpX4', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00913571%252F' }
    },
    {
        id: 'h-oita-1-3',
        onsen_id: 'o-oita-1',
        name: '亀の井ホテル 別府',
        prefecture: 'oita',
        type: '老舗温泉ホテル',
        description: '1901年創業の別府を代表する名門ホテル。地獄めぐりの拠点として知られ、広大な庭園と多彩な浴槽が魅力。',
        price: '2食付き 20,000円〜',
        image: './hotels/kamenoi.png',
        tags: ['1901年創業', '名門ホテル', '庭園', '多彩な浴槽'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad335627%2F', rakuten: 'https://a.r10.to/hPgAdj', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901633%252F' }
    },

    // ===== 由布院温泉（大分）=====
    {
        id: 'h-oita-2-1',
        onsen_id: 'o-oita-2',
        name: '亀の井別荘',
        prefecture: 'oita',
        type: 'ラグジュアリー旅館',
        description: '由布院温泉の代名詞的存在。広大な敷地に点在する離れの客室と由布岳を一望する開放的な露天風呂、地元食材の会席が揃う名旅館。',
        price: '2食付き 60,000円〜',
        image: './hotels/kamenoibessou.png',
        tags: ['由布院の名旅館', '離れ客室', '由布岳眺望', '会席料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fgourmet%2Fgrm_alikejpB000138518%2F', rakuten: 'https://a.r10.to/h58jj9', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002470%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002470%252F' }
    },
    {
        id: 'h-oita-2-2',
        onsen_id: 'o-oita-2',
        name: '山荘 無量塔',
        prefecture: 'oita',
        type: 'デザイン旅館',
        description: '由布院温泉のおしゃれな旅館。アートと木の温もりを融合させた内装に全棟専用露天風呂付き。隣接のブランジェリーとバーも人気。',
        price: '2食付き 50,000円〜',
        image: './hotels/sanmuryotou.png',
        tags: ['全棟露天付き', 'デザイン', 'アート', 'ブランジェリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fgourmet%2Fgrm_alikejpB000138479%2F', rakuten: 'https://a.r10.to/h56zEH', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003248%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003248%252F' }
    },
    {
        id: 'h-oita-2-3',
        onsen_id: 'o-oita-2',
        name: '由布院 玉の湯',
        prefecture: 'oita',
        type: '高級旅館',
        description: '由布院温泉の草分け的な旅館。自然美と建築美が調和した敷地内を散策しながら、由布岳を眺める露天風呂と大分の美食が楽しめる。',
        price: '2食付き 55,000円〜',
        image: './hotels/yufuintamanoyu.png',
        tags: ['草分け旅館', '自然美', '露天風呂', '大分美食'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fgourmet%2Fgrm_alikejpA000875135%2F', rakuten: 'https://a.r10.to/hPU03R', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002536%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002536%252F' }
    },

    // ===== 観海寺温泉（大分）=====
    {
        id: 'h-oita-3-1',
        onsen_id: 'o-oita-3',
        name: '観海寺温泉観光ホテル',
        prefecture: 'oita',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、観海寺温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-3-2',
        onsen_id: 'o-oita-3',
        name: '観海寺温泉旅館 碧水苑',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。観海寺温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-3-3',
        onsen_id: 'o-oita-3',
        name: '観海寺温泉スパリゾート',
        prefecture: 'oita',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。観海寺温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長湯温泉（大分）=====
    {
        id: 'h-oita-4-1',
        onsen_id: 'o-oita-4',
        name: '長湯温泉観光ホテル',
        prefecture: 'oita',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、長湯温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-4-2',
        onsen_id: 'o-oita-4',
        name: '長湯温泉旅館 碧水苑',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。長湯温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-4-3',
        onsen_id: 'o-oita-4',
        name: '長湯温泉スパリゾート',
        prefecture: 'oita',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。長湯温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 京町温泉（宮崎）=====
    {
        id: 'h-miyazaki-1-1',
        onsen_id: 'o-miyazaki-1',
        name: '京町温泉観光ホテル',
        prefecture: 'miyazaki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、京町温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyazaki-1-2',
        onsen_id: 'o-miyazaki-1',
        name: '京町温泉旅館 碧水苑',
        prefecture: 'miyazaki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。京町温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyazaki-1-3',
        onsen_id: 'o-miyazaki-1',
        name: '京町温泉スパリゾート',
        prefecture: 'miyazaki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。京町温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 青島温泉（宮崎）=====
    {
        id: 'h-miyazaki-2-1',
        onsen_id: 'o-miyazaki-2',
        name: '青島温泉観光ホテル',
        prefecture: 'miyazaki',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、青島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyazaki-2-2',
        onsen_id: 'o-miyazaki-2',
        name: '青島温泉旅館 碧水苑',
        prefecture: 'miyazaki',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。青島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyazaki-2-3',
        onsen_id: 'o-miyazaki-2',
        name: '青島温泉スパリゾート',
        prefecture: 'miyazaki',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。青島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 指宿温泉（鹿児島）=====
    {
        id: 'h-kagoshima-1-1',
        onsen_id: 'o-kagoshima-1',
        name: '指宿温泉観光ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、指宿温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-1-2',
        onsen_id: 'o-kagoshima-1',
        name: '指宿温泉旅館 碧水苑',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。指宿温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-1-3',
        onsen_id: 'o-kagoshima-1',
        name: '指宿温泉スパリゾート',
        prefecture: 'kagoshima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。指宿温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 霧島温泉（鹿児島）=====
    {
        id: 'h-kagoshima-2-1',
        onsen_id: 'o-kagoshima-2',
        name: '霧島温泉観光ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、霧島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-2-2',
        onsen_id: 'o-kagoshima-2',
        name: '霧島温泉旅館 碧水苑',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。霧島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-2-3',
        onsen_id: 'o-kagoshima-2',
        name: '霧島温泉スパリゾート',
        prefecture: 'kagoshima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。霧島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 桜島温泉（鹿児島）=====
    {
        id: 'h-kagoshima-3-1',
        onsen_id: 'o-kagoshima-3',
        name: '桜島温泉観光ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、桜島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-3-2',
        onsen_id: 'o-kagoshima-3',
        name: '桜島温泉旅館 碧水苑',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。桜島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-3-3',
        onsen_id: 'o-kagoshima-3',
        name: '桜島温泉スパリゾート',
        prefecture: 'kagoshima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。桜島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 屋久島温泉（鹿児島）=====
    {
        id: 'h-kagoshima-4-1',
        onsen_id: 'o-kagoshima-4',
        name: '屋久島温泉観光ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、屋久島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-4-2',
        onsen_id: 'o-kagoshima-4',
        name: '屋久島温泉旅館 碧水苑',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。屋久島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagoshima-4-3',
        onsen_id: 'o-kagoshima-4',
        name: '屋久島温泉スパリゾート',
        prefecture: 'kagoshima',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。屋久島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== コスタビスタ沖縄温泉（沖縄）=====
    {
        id: 'h-okinawa-1-1',
        onsen_id: 'o-okinawa-1',
        name: 'コスタビスタ沖縄温泉観光ホテル',
        prefecture: 'okinawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、コスタビスタ沖縄温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okinawa-1-2',
        onsen_id: 'o-okinawa-1',
        name: 'コスタビスタ沖縄温泉旅館 碧水苑',
        prefecture: 'okinawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。コスタビスタ沖縄温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okinawa-1-3',
        onsen_id: 'o-okinawa-1',
        name: 'コスタビスタ沖縄温泉スパリゾート',
        prefecture: 'okinawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。コスタビスタ沖縄温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 瀬長島温泉（沖縄）=====
    {
        id: 'h-okinawa-2-1',
        onsen_id: 'o-okinawa-2',
        name: '瀬長島温泉観光ホテル',
        prefecture: 'okinawa',
        type: '温泉ホテル',
        description: 'のどかな景色に包まれた、瀬長島温泉を代表する大型温泉ホテル。広々とした大浴場と地元の旬を味わうビュッフェが自慢。',
        price: '2食付き 15,000円〜',
        image: './hotels/sample.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okinawa-2-2',
        onsen_id: 'o-okinawa-2',
        name: '瀬長島温泉旅館 碧水苑',
        prefecture: 'okinawa',
        type: '温泉旅館',
        description: '静寂に包まれた離れ風の客室が魅力の宿。瀬長島温泉の名湯を源泉掛け流しで楽しみ、季節の懐石料理に舌鼓。',
        price: '2食付き 22,000円〜',
        image: './hotels/sample.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okinawa-2-3',
        onsen_id: 'o-okinawa-2',
        name: '瀬長島温泉スパリゾート',
        prefecture: 'okinawa',
        type: 'リゾート施設',
        description: '現代的なデザインと温泉が融合したリゾート。瀬長島温泉の自然を一望できる露天風呂と充実のアメニティで至福のひとときを。',
        price: '2食付き 18,500円〜',
        image: './hotels/sample.png',
        tags: ['モダン', '絶景露天', 'アクティビティ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    }
];

/**
 * おすすめの宿を取得（特定のタグを持つものなどを優先）
 * @param {number} count - 取得件数
 * @param {string} filterTag - 優先するタグ
 * @returns {Array} 宿データの配列
 */
export function getPopularHotels(count = 5, filterTag = '絶景') {
    // 評価や人気度のデータがないため、特定のタグを持つものを優先してランダムに返す
    const targetHotels = hotelList.filter(h => h.tags && h.tags.some(tag => tag.includes(filterTag)));
    const others = hotelList.filter(h => !targetHotels.includes(h));
    
    // 対象ホテルとその他のホテルをそれぞれシャッフル
    const shuffledTarget = targetHotels.sort(() => Math.random() - 0.5);
    const shuffledOthers = others.sort(() => Math.random() - 0.5);
    
    // 結合して指定件数を返す
    return [...shuffledTarget, ...shuffledOthers].slice(0, count);
}

/**
 * 複数の温泉地IDから宿一覧を取得
 * @param {Array<string>} onsenIds - 温泉地IDの配列
 * @returns {Array} 宿データの配列
 */
export function getHotelsByOnsens(onsenIds) {
    if (!onsenIds || onsenIds.length === 0) return [];
    return hotelList.filter(h => onsenIds.includes(h.onsen_id));
}

/**
 * 条件に合致する宿を検索
 * @param {Object} conditions - 検索条件（onsen_id, prefecture, type, minPrice, tags, etc.）
 * @returns {Array} 検索結果の宿データ配列
 */
export function searchHotels(conditions = {}) {
    // 文字列での検索（全体検索などからの呼び出し）
    if (typeof conditions === 'string') {
        const q = conditions.toLowerCase();
        return hotelList.filter(h =>
            h.name.toLowerCase().includes(q) ||
            h.description.toLowerCase().includes(q) ||
            h.type.toLowerCase().includes(q) ||
            (h.tags && h.tags.some(t => t.toLowerCase() === q)) // タグは完全一致
        );
    }

    return hotelList.filter(h => {
        // 温泉地で絞り込み
        if (conditions.onsen_id && h.onsen_id !== conditions.onsen_id) return false;
        
        // 県で絞り込み
        if (conditions.prefecture && h.prefecture !== conditions.prefecture) return false;
        
        // 宿タイプで絞り込み
        if (conditions.type && h.type !== conditions.type) return false;
        
        // タグで絞り込み (複数タグすべてを含むか、いずれかを含むかなどは要件次第。ここではすべて含むとする)
        if (conditions.tags && conditions.tags.length > 0) {
            const hasAllTags = conditions.tags.every(tag => h.tags && h.tags.includes(tag));
            if (!hasAllTags) return false;
        }
        
        return true;
    });
}

/**
 * 温泉地IDから宿一覧を取得
 * @param {string} onsenId - 温泉地ID
 * @returns {Array} 宿データの配列
 */
export function getHotelsByOnsen(onsenId) {
    return hotelList.filter(h => h.onsen_id === onsenId);
}

/**
 * ランダムにおすすめ宿を取得
 * @param {number} count - 取得件数
 * @returns {Array} ランダムに選んだ宿データの配列
 */
export function getRandomHotels(count = 8) {
    const shuffled = [...hotelList].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

/**
 * 都道府県IDから宿一覧を取得
 * @param {string} prefectureId - 都道府県ID
 * @returns {Array} 宿データの配列
 */
export function getHotelsByPrefecture(prefectureId) {
    return hotelList.filter(h => h.prefecture === prefectureId);
}

/**
 * 宿IDから宿データを取得
 * @param {string} id - 宿ID
 * @returns {object|undefined} 宿データ
 */
export function getHotelById(id) {
    return hotelList.find(h => h.id === id);
}
