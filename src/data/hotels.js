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
        name: '仙台・作並温泉 ゆづくしＳａｌｏｎ一の坊',
        prefecture: 'miyagi',
        type: '高級温泉リゾート',
        description: '広瀬川の源流に近い山懐に佇む、自由で贅沢な時間を愉しめるオールインクルーシブスタイルの温泉リゾート。チェックインからチェックアウトまで飲食やアクティビティを心ゆくまで満喫でき、3本の自家源泉から引き込んだ広瀬川のせせらぎを間近に感じる立ち湯や露天風呂で源泉掛け流しの湯を堪能しながら、ライブキッチンで目の前で仕上げる出来立ての料理を五感で楽しむビュッフェや、暖炉のあるラウンジでの静かなひとときを心ゆくまで享受できる。',
        price: '2食付き 26,000円〜',
        image: './hotels/yudukushisalon.png',
        tags: ['オールインクルーシブ', 'ライブキッチン', 'ビュッフェ', '8つの湯舟で湯めぐり'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad348735%2F', rakuten: 'https://a.r10.to/hkoo0T', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002612%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002612%252F' }
    },
    {
        id: 'h-miyagi-2-2',
        onsen_id: 'o-miyagi-2',
        name: '作並温泉 湯の原ホテル',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '明治時代から続く歴史を誇り、作並温泉の中でもアットホームで温かなおもてなしに定評がある全24室の温泉旅館。4本の自家源泉を所有し、広瀬川のせせらぎを聞きながら浸かる「展望露天風呂」や大正浪漫の雰囲気漂う「大正風呂」で源泉掛け流しの湯を堪能でき、夕食には宮城のブランド牛や地元の山の幸、三陸の海の幸をふんだんに盛り込んだ彩り豊かな手作り創作料理を落ち着いた個室ダイニングでゆっくりと味わえる。',
        price: '2食付き 14,000円〜',
        image: './hotels/yunoharahotel.png',
        tags: ['源泉掛け流し', '隠れ家', '創作料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad320320%2F', rakuten: 'https://a.r10.to/hgPg1T', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908115%252F' }
    },

    // ===== 秋保温泉（宮城）=====
    {
        id: 'h-miyagi-3-1',
        onsen_id: 'o-miyagi-3',
        name: 'TAOYA秋保',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: '秋保の豊かな自然に溶け込むような「ゆとり」をコンセプトとした、大人のためのスタイリッシュなオールインクルーシブ温泉リゾート。チェックインから夕食時のドリンク、夜食まで追加料金を気にせず贅沢な時間を過ごせ、全長約20メートルの棚田のような展望露天風呂で秋保の名湯を心ゆくまで堪能しながら、ライブキッチンで目の前で仕上げる出来立ての和洋中ビュッフェをスタイリッシュな空間で心ゆくまで楽しめる。',
        price: '2食付き 18,500円〜',
        image: './hotels/taoyaakiu.png',
        tags: ['オールインクルーシブ', 'ビュッフェ', '展望露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad395778%2F', rakuten: 'https://a.r10.to/hP5WJc', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030857%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030857%252F' }
    },
    {
        id: 'h-miyagi-3-2',
        onsen_id: 'o-miyagi-3',
        name: '華乃湯',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '名取川のせせらぎを間近に感じる「川沿いの露天風呂」が自慢の、自家源泉100%の湯が注がれる癒やしの温泉宿。秋保温泉でも珍しい、自家源泉から湧き出るメタケイ酸を豊富に含んだ「美肌の湯」を、趣の異なる4つの湯処で湯めぐりしながら楽しみ、夕食には契約農家から届く新鮮な無農薬野菜や宮城の旬素材をふんだんに使った、心と体に優しい創作ビュッフェを心ゆくまで味わえる。',
        price: '2食付き 11,500円〜',
        image: './hotels/kanoyu.png',
        tags: ['自家源泉100%', '川沿いの露天風呂', '創作ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad313607%2F', rakuten: 'https://a.r10.to/hYG5Nh', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030776%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030776%252F' }
    },
    {
        id: 'h-miyagi-3-3',
        onsen_id: 'o-miyagi-3',
        name: '篝火の湯 緑水亭',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '秋保の高台に広がる3万坪の広大な日本庭園を有し、夜になると篝火が灯る幻想的な露天風呂が名物の温泉旅館。自家源泉から湧き出る名湯を、庭園の緑や星空を眺めながら静寂の中で堪能でき、夕食には宮城のブランド牛「仙台牛」の鉄板焼きや、三陸の新鮮な魚介を熟練の職人が丁寧に仕上げた本格的な懐石料理を、落ち着いた個室ダイニングや広々としたお部屋で贅沢に堪能できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/ryokusuitei.png',
        tags: ['日本庭園', '篝火の湯', '仙台牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad320759%2F', rakuten: 'https://a.r10.to/hPF5xs', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002196%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002196%252F' }
    },
    {
        id: 'h-miyagi-3-4',
        onsen_id: 'o-miyagi-3',
        name: 'ホテル瑞鳳',
        prefecture: 'miyagi',
        type: '温泉リゾート',
        description: '秋保温泉を代表する豪華絢爛な大型温泉ホテルで、広大な吹き抜けのロビーや全天候型温水プールなど、圧倒的なスケール感とエンターテインメント性が魅力。数多くの受賞歴を誇る「至福のビュッフェ」では、ズワイガニや仙台牛、握りたての寿司など和洋中の豪華料理を心ゆくまで楽しめ、バラエティ豊かな6つの露天風呂や大浴場で秋保の名湯に浸かりながら、家族やグループで賑やかな休日を過ごせる。',
        price: '2食付き 16,500円〜',
        image: './hotels/zuiho.png',
        tags: ['大型ホテル', 'ビュッフェ', '温水プール'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad309236%2F', rakuten: 'https://a.r10.to/h5LV1X', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002434%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002434%252F' }
    },
    {
        id: 'h-miyagi-3-5',
        onsen_id: 'o-miyagi-3',
        name: '秋保グランドホテル',
        prefecture: 'miyagi',
        type: '温泉ホテル',
        description: '名取川の名勝「磊々峡（らいらいきょう）」のすぐそばに建ち、全客室から四季折々の渓谷美を一望できる絶景の温泉ホテル。リニューアルした広々とした大浴場や露天風呂では、豊かな自然と一体になれる開放感とともに名湯を堪能でき、夕食には宮城の旬を凝縮した和洋中ビュッフェや、地元の食材を活かした創作会席料理など、豊富なメニューの中からお好みのスタイルで秋保の夜をゆっくりと楽しめる。',
        price: '2食付き 12,500円〜',
        image: './hotels/akiugrandhotel.png',
        tags: ['絶景', '渓谷美', 'ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad302533%2F', rakuten: 'https://a.r10.to/h5Vw7w', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900014%252F' }
    },
    {
        id: 'h-miyagi-3-6',
        onsen_id: 'o-miyagi-3',
        name: '佐勘',
        prefecture: 'miyagi',
        type: '高級温泉旅館',
        description: '開湯1500年の歴史を誇り、伊達政宗公の湯浴み場としても知られる、秋保を代表する格式高い老舗温泉旅館。歴史の重みを感じる名取川沿いの露天風呂や名湯「名取の御湯」を心ゆくまで堪能できるほか、洗練されたモダンな空間に伝統が息づく客室で、三陸の海の幸や山里の恵みを贅沢に盛り込んだ「佐勘流」の本格会席料理を、一期一会のおもてなしと共に至福のひとときの中でじっくりと味わえる。',
        price: '2食付き 20,000円〜',
        image: './hotels/sakan.png',
        tags: ['歴史', '名取の御湯', '会席料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad318193%2F', rakuten: 'https://a.r10.to/h8L9bZ', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000598%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000598%252F' }
    },
    {
        id: 'h-miyagi-3-7',
        onsen_id: 'o-miyagi-3',
        name: '迎賓館 櫻離宮',
        prefecture: 'miyagi',
        type: '高級温泉旅館',
        description: '「佐勘」の別館として静寂の中に佇む、全客室に源泉掛け流しの露天風呂を完備した、プライベートを極めた贅沢な大人の隠れ宿。和とモダンが融合した広々としたメゾネットタイプやプレジデンシャルスイートの客室で、誰にも邪魔されずに心ゆくまで名湯を独り占めでき、夕食には専属シェフが厳選した宮城の最高級食材を、お部屋や専用の個室ダイニングで贅を尽くした創作懐石として心ゆくまで堪能できる。',
        price: '2食付き 21,000円〜',
        image: './hotels/sakurarikyu.png',
        tags: ['全室露天風呂', '絶景露天', 'プライベート'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad382760%2F', rakuten: 'https://a.r10.to/h5ikzN', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003277%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003277%252F' }
    },

    // ===== 松島温泉（宮城）=====
    {
        id: 'h-miyagi-4-1',
        onsen_id: 'o-miyagi-4',
        name: 'ホテル松島大観荘',
        prefecture: 'miyagi',
        type: 'リゾートホテル',
        description: '松島湾の高台に位置し、目の前に広がる日本三景のパノラマビューを独り占めできる圧倒的なスケール感が魅力の大型リゾートホテル。開放感あふれる露天風呂からは松島の島々を一望でき、ライブキッチンで職人が目の前で調理する牛タンや地元の新鮮な魚介をふんだんに盛り込んだ豪華な和洋中ビュッフェや、落ち着いた空間で味わう本格的な和食会席を心ゆくまで堪能できる。',
        price: '2食付き 16,000円〜',
        image: './hotels/taikanso.png',
        tags: ['大型ホテル', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad357644%2F', rakuten: 'https://a.r10.to/hgNId9', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030985%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030985%252F' }
    },
    {
        id: 'h-miyagi-4-2',
        onsen_id: 'o-miyagi-4',
        name: '松島温泉 小松館 好風亭',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '松島の海岸沿いに佇む、潮風を感じながら静かに流れる贅沢な時間を愉しめる全29室の温泉旅館。松島湾の絶景を眼前に望む貸切露天風呂や足湯が充実しており、とろりとした肌触りの「美肌の湯」を心ゆくまで堪能した後は、三陸の海の幸をふんだんに盛り込み趣向を凝らした創作和食会席や、ライブ感あふれる炭火焼き料理をプライベート感のあるお食事処でゆっくりと味わえる。',
        price: '2食付き 18,500円〜',
        image: './hotels/komatsukan.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad312115%2F', rakuten: 'https://a.r10.to/h5tfll', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000684%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000684%252F' }
    },
    {
        id: 'h-miyagi-4-3',
        onsen_id: 'o-miyagi-4',
        name: '松島温泉 松島一の坊',
        prefecture: 'miyagi',
        type: '温泉リゾート',
        description: '「静かな松島」をコンセプトに、全室オーシャンビューの開放感とオールインクルーシブの贅沢を同時に享受できる大人の温泉リゾート。チェックインから夕食、ラウンジでの飲食まで追加料金を気にせず過ごせ、松島湾と一体になれる最上階の露天風呂で朝日や月を眺めながら名湯に浸かった後は、料理人が目の前で一皿ずつ仕上げるオーダービュッフェ形式のコース料理を心ゆくまで堪能できる。',
        price: '2食付き 32,000円〜',
        image: './hotels/ichinobo.png',
        tags: ['オールインクルーシブ', '全室オーシャンビュー', 'オーダー式ライブビュッフェ', '12歳未満宿泊不可'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad304322%2F', rakuten: 'https://a.r10.to/h83KzB', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002294%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002294%252F' }
    },

    // ===== 遠刈田温泉（宮城）=====
    {
        id: 'h-miyagi-5-1',
        onsen_id: 'o-miyagi-5',
        name: '温泉屋敷 バーデン家 壮鳳',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '遠刈田温泉の入り口に位置し、美肌効果の高い自家源泉「黄金の湯」を贅沢に掛け流しで楽しめる温泉宿。広々とした大浴場や露天風呂でとろりとした琥珀色の湯を心ゆくまで堪能でき、夕食には蔵王の豊かな自然が育んだ新鮮な野菜やブランド肉、三州の海の幸をふんだんに盛り込んだボリュームたっぷりの和食膳をアットホームなおもてなしと共に味わえる。',
        price: '2食付き 10,500円〜',
        image: './hotels/bardenya.png',
        tags: ['源泉掛け流し', 'ビュッフェ', '展望風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad320753%2F', rakuten: 'https://a.r10.to/h5JdGr', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908572%252F' }
    },
    {
        id: 'h-miyagi-5-2',
        onsen_id: 'o-miyagi-5',
        name: '温泉山荘だいこんの花',
        prefecture: 'miyagi',
        type: '高級温泉旅館',
        description: '蔵王連峰を望む約1万坪の広大な自然林の中に、わずか18室の離れが点在するプライベート感を極めた贅沢な隠れ宿。全室に源泉掛け流しの露天風呂を完備し、森の中に溶け込むような4つの貸切露天風呂で静寂と名湯を独り占めしながら、自社菜園や地元の農家から届く採れたての新鮮な野菜を主役にした滋味豊かな「里山料理」を心ゆくまで堪能できる。',
        price: '2食付き 43,000円〜',
        image: './hotels/daikon.png',
        tags: ['源泉掛け流し', '隠れ家', '懐石料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad302396%2F', rakuten: 'https://a.r10.to/hkdOi3', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000799%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000799%252F' }
    },
    {
        id: 'h-miyagi-5-3',
        onsen_id: 'o-miyagi-5',
        name: 'かっぱの宿 旅館三治郎',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '遠刈田温泉の高台に位置し、蔵王連峰の雄大なパノラマを一望できる絶景の露天風呂が自慢の老舗温泉旅館。2本の自家源泉から湧き出る豊富な湯を、趣の異なる12種類の湯殿や4つの貸切風呂で湯めぐりしながら楽しみ、夕食には宮城のブランド牛「仙台牛」や三陸の海の幸など、地元の厳選食材を熟練の技で仕上げた伝統的な和食会席をゆっくりと味わえる。',
        price: '2食付き 17,500円〜',
        image: './hotels/sanjirou.png',
        tags: ['絶景露天', '貸切風呂', '懐石料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad315325%2F', rakuten: 'https://a.r10.to/h5QkAZ', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030143%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030143%252F' }
    },
    {
        id: 'h-miyagi-5-4',
        onsen_id: 'o-miyagi-5',
        name: '旬菜湯宿 旅舘大忠',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '遠刈田温泉の街中に佇む、江戸時代から続く歴史とモダンな感性が融合した全10室の美食とおもてなしの宿。50分間無料で利用できる3つの個性豊かな貸切風呂で源泉掛け流しの名湯をプライベートに楽しみ、夕食には「おばんざいビュッフェ」と選べるメイン料理が人気の創作会席を、アンティーク家具に囲まれたジャズが流れるお洒落なダイニングで心ゆくまで堪能できる。',
        price: '2食付き 23,000円〜',
        image: './hotels/daichu.png',
        tags: ['貸切風呂', 'おばんざいビュッフェ', '創作会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324254%2F', rakuten: 'https://a.r10.to/hPi3Hw', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003279%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003279%252F' }
    },
    {
        id: 'h-miyagi-5-5',
        onsen_id: 'o-miyagi-5',
        name: '別邸 山風木',
        prefecture: 'miyagi',
        type: '温泉旅館',
        description: '「大人の休息」をテーマに、わずか11室の客室と2,000坪の庭園が織りなす静寂の中に佇むオールインクルーシブの温泉宿。美食家たちを唸らせる「メインを選べるコース料理」と厳選された美酒のペアリングを心ゆくまで楽しみ、美肌の湯が注がれる露天風呂や内湯で蔵王の風を感じながらリラックスした後は、庭園を望むラウンジで贅沢な余暇のひとときをゆっくりと享受できる。',
        price: '2食付き 28,000円〜',
        image: './hotels/yamakazuki.png',
        tags: ['オールインクルーシブ', '隠れ家', '創作会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad321069%2F', rakuten: 'https://a.r10.to/hY1h1S', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001285%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001285%252F' }
    },
    {
        id: 'h-miyagi-5-6',
        onsen_id: 'o-miyagi-5',
        name: 'ゆと森倶楽部',
        prefecture: 'miyagi',
        type: '温泉リゾート',
        description: '蔵王の森に抱かれた広大な敷地内で、心身を整える「リトリート」を体験できるオールインクルーシブスタイルの温泉リゾート。ヨガや森林散策などのアクティビティを楽しんだ後は、川のせせらぎが聞こえる露天風呂で名湯に癒やされ、夕食には野菜ソムリエが厳選した地元の新鮮な野菜を主役にした、目にも鮮やかな「自由な食事」をライブビュッフェ形式で心ゆくまで堪能できる。',
        price: '2食付き 32,500円〜',
        image: './hotels/yutomori.png',
        tags: ['オールインクルーシブ', 'リトリート', 'ライブビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad313826%2F', rakuten: 'https://a.r10.to/hFNnkI', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002861%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002861%252F' }
    },
    {
        id: 'h-miyagi-5-7',
        onsen_id: 'o-miyagi-5',
        name: '竹泉荘 CHIKUSENSO ONSEN',
        prefecture: 'miyagi',
        type: '高級温泉旅館',
        description: '蔵王山麓の2万坪に及ぶ森の中に佇む、和の伝統美と現代的なラグジュアリーが融合した国際的な最高級温泉リゾート。洗練されたデザインの客室からは四季折々の森の景色を望み、自家源泉掛け流しの湯が溢れるダイナミックな露天風呂で心身を解き放った後は、宮城の厳選された山海の幸を芸術的な一皿へと昇華させた本格的な懐石料理を、至高のおもてなしと共に堪能できる。',
        price: '2食付き 49,500円〜',
        image: './hotels/chikusenso.png',
        tags: ['2万坪の広大な森', 'モダン', '絶景露天', 'ラグジュアリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad376226%2F', rakuten: 'https://a.r10.to/hkbbD2', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001607%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001607%252F' }
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
        name: '玉川温泉',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '日本一の酸性度と湧出量を誇り、全国から多くの療養客が訪れる「湯治の聖地」として知られる歴史ある一軒宿。古くからの湯治場の雰囲気を色濃く残す木造の大浴場では、強酸性の源泉がもたらす圧倒的な生命力を肌で感じることができ、名物の「天然岩盤浴」では地熱を利用してじっくりと体を温め、滋味豊かな地元の山菜や野菜を中心とした体に優しい食事と共に心身の根本的な再生を目指せる。',
        price: '2食付き 9,000円〜',
        image: './hotels/tamagawaonsen.png',
        tags: ['日本一の酸性度', '湯治の聖地', '天然岩盤浴'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad353360%2F', rakuten: 'https://a.r10.to/hY88zN', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900408%252F' }
    },
    {
        id: 'h-akita-2-2',
        onsen_id: 'o-akita-2',
        name: '新玉川温泉',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '十和田八幡平国立公園の標高800mに位置する、世界でも稀な塩酸を主成分としたpH1.2の強酸性泉を快適な施設で堪能できる温泉リゾート。広大な大浴場は温もりのある総檜造りで、源泉100%の「ぶっ飛ぶ」刺激の湯から50%の柔らかな湯、寝湯やサウナなど多彩な入浴法を体験でき、夕食には秋田の旬食材を活かした和洋中ビュッフェを清潔感あふれるモダンな空間でゆっくりと楽しめる。',
        price: '2食付き 13,000円〜',
        image: './hotels/shintamagawaonsen.png',
        tags: ['世界でも稀な強酸性泉', '総檜造りの大浴場', '和洋中ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad354300%2F', rakuten: 'https://a.r10.to/hYL8fw', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900409%252F' }
    },

    // ===== 男鹿温泉郷（秋田）=====
    {
        id: 'h-akita-3-1',
        onsen_id: 'o-akita-3',
        name: '元湯雄山閣',
        prefecture: 'akita',
        type: '温泉旅館',
        description: 'なまはげの伝説が息づく男鹿半島の奥座敷に佇む、季節や気温によって緑色から赤茶色へと色を変える「生きた源泉」が自慢の温泉宿。噴火口を模したダイナミックな岩造りの露天風呂で源泉100％掛け流しの濃厚な名湯を心ゆくまで堪能でき、夕食には男鹿の名物料理「石焼会席」など、真っ赤に熱した石を木桶に投入する迫力満点のパフォーマンスと共に三陸・日本海の海の幸を豪快に味わえる。',
        price: '2食付き 20,000円〜',
        image: './hotels/yuzankaku.png',
        tags: ['変化する源泉100%掛け流し', '男鹿名物「石焼会席」', 'なまはげ壁画の露天風呂', '濃厚な食塩泉'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad318288%2F', rakuten: 'https://a.r10.to/hkRcEk', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-3-2',
        onsen_id: 'o-akita-3',
        name: '男鹿ホテル',
        prefecture: 'akita',
        type: '温泉リゾート',
        description: '男鹿温泉郷の中心部に位置し、広大な敷地内に湧き出る豊富な湯量と開放感あふれる空間が魅力の温泉リゾートホテル。樹齢を重ねた木々に囲まれた風情ある露天風呂「石積み露天」で、海水に近い成分で体が芯から温まる「熱の湯」を心ゆくまで楽しみながら、地元の漁港から直送される新鮮な魚介をふんだんに盛り込んだ彩り豊かなビュッフェや季節の会席料理を、家族やグループで賑やかに堪能できる。',
        price: '2食付き 16,000円〜',
        image: './hotels/ogahotel.png',
        tags: ['庭園露天風呂', '自家源泉「地蔵の湯」', '新鮮な日本海の幸', 'なまはげ太鼓のライブ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad335193%2F', rakuten: 'https://a.r10.to/h5uWLl', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-akita-3-3',
        onsen_id: 'o-akita-3',
        name: '男鹿温泉 結いの宿 別邸つばき',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '「男鹿の海と椿」をコンセプトに、全客室から日本海の雄大なパノラマを一望できるスタイリッシュで上質な温泉旅館。モダンにリニューアルされた心地よい空間で、自家源泉から引き込んだ柔らかな美肌の湯を露天風呂や大浴場で心ゆくまで楽しみ、夕食には男鹿の旬の魚介を熟練の技で仕上げた目にも鮮やかな創作会席を、落ち着いたダイニングで沈みゆく夕陽を眺めながら贅沢なひとときとして味わえる。',
        price: '2食付き 15,500円〜',
        image: './hotels/tsubaki.png',
        tags: ['全室日本海ビュー', '自家源泉掛け流し', 'スタイリッシュな和モダン', '絶景の夕陽'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324840%2F', rakuten: 'https://a.r10.to/h553Ay', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000911%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000911%252F' }
    },

    // ===== 大湯温泉（秋田）=====
    {
        id: 'h-akita-4-1',
        onsen_id: 'o-akita-4',
        name: '和風宿 岡部荘',
        prefecture: 'akita',
        type: '割烹旅館',
        description: '八幡平の麓、大湯温泉に位置し、四千坪の広大な日本庭園を囲むように建つ情緒あふれる老舗温泉旅館。庭園の四季折々の表情を眺めながら、さらりとした肌触りの名湯を大きな岩を配した開放的な露天風呂や大浴場で心ゆくまで楽しみ、夕食には秋田の名産「比内鶏」のきりたんぽ鍋や、地元の山菜や川魚を熟練の職人が丁寧に仕上げた滋味豊かな秋田の郷土会席を堪能できる。',
        price: '2食付き 13,500円〜',
        image: './hotels/okabesou.png',
        tags: ['源泉掛け流し', '全18室の落ち着いた空間', '美肌の湯'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad338650%2F', rakuten: 'https://a.r10.to/hYDdLU', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902363%252F' }
    },
    {
        id: 'h-akita-4-2',
        onsen_id: 'o-akita-4',
        name: '龍門亭 千葉旅館',
        prefecture: 'akita',
        type: '温泉旅館',
        description: '大湯温泉で長年愛される家族経営の温泉旅館。内湯と露天風呂はいずれも源泉掛け流しで、湯の花漂う塩化物泉が旅の疲れを芯から癒す。主人自らが仕入れる秋田の山の幸と近隣農家直送の野菜を使った家庭的な夕食が評判で、リピーターも多い素朴な宿。',
        price: '2食付き 15,500円〜',
        image: './hotels/chibaryokan.png',
        tags: ['四千坪の日本庭園', '大湯温泉の開湯800年', '静かな離れ風客室'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad300539%2F', rakuten: 'https://a.r10.to/hgxKc2', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00907624%252F' }
    },
    {
        id: 'h-akita-4-3',
        onsen_id: 'o-akita-4',
        name: '縄文のふる里 大湯温泉 ホテル鹿角',
        prefecture: 'akita',
        type: '温泉ロッジ',
        description: '開湯800年の歴史を誇る大湯温泉の中心に位置し、縄文のロマンを感じさせる広々とした空間が自慢の温泉ホテル。秋田県内最大級の広さを誇る大浴場や開放感あふれる露天風呂で、古くから名湯として親しまれる柔らかな湯を心ゆくまで堪能でき、夕食には最高級の「秋田牛」や、三陸・日本海から届く新鮮な魚介をふんだんに盛り込んだ豪華な和食会席を心ゆくまで楽しめる。',
        price: '2食付き 11,000円〜',
        image: './hotels/hotelkazuno.png',
        tags: ['県内最大級の大浴場', '十和田湖観光の拠点', '秋田牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad347591%2F', rakuten: 'https://a.r10.to/h5I2Yt', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001604%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001604%252F' }
    },

    // ===== 田沢湖高原温泉郷（秋田）=====
    {
        id: 'h-akita-5-1',
        onsen_id: 'o-akita-5',
        name: 'ホテルグランド天空',
        prefecture: 'akita',
        type: '温泉ホテル',
        description: '田沢湖を眼下に望む高台に位置し、北欧のプチホテルを思わせる温かみのある空間と絶景が魅力の温泉ホテル。全客室から四季折々に表情を変える田沢湖のパノラマを一望でき、乳白色の天然温泉が注がれる露天風呂や大浴場で「美肌の湯」を心ゆくまで堪能した後は、秋田名物の「きりたんぽ鍋」や「稲庭うどん」、新鮮な山の幸を盛り込んだ手作りの和食膳をゆっくりと味わえる。',
        price: '2食付き 13,500円〜',
        image: './hotels/hotelgrandtenkuu.png',
        tags: ['硫黄泉', '田沢湖展望', '秋田牛料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad396598%2F', rakuten: 'https://a.r10.to/hPN19j', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00918705%252F' }
    },
    {
        id: 'h-akita-5-2',
        onsen_id: 'o-akita-5',
        name: '田沢湖水沢温泉郷セルリアンリゾートAONI',
        prefecture: 'akita',
        type: '温泉リゾート',
        description: '「青」をテーマにしたモダンで洗練されたデザインが随所に光る、水沢温泉郷に佇むスタイリッシュな温泉リゾート。深さ1メートルの「立ち湯」で名物の乳白色の硫黄泉を源泉掛け流しで楽しみ、心身を深く癒やした後は、ライブキッチンを備えた開放的なレストランで、秋田牛のステーキや地元の厳選食材を五感で楽しむ創作和洋ビュッフェを心ゆくまで堪能できる。',
        price: '2食付き 12,000円〜',
        image: './hotels/aoni.png',
        tags: ['硫黄泉', '立ち湯', '創作和洋ビュッフェ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad314286%2F', rakuten: 'https://a.r10.to/h9kjO3', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900547%252F' }
    },
    {
        id: 'h-akita-5-3',
        onsen_id: 'o-akita-5',
        name: '天然温泉 田沢湖レイクリゾート',
        prefecture: 'akita',
        type: '温泉リゾート',
        description: '田沢湖畔に建ち、愛犬と一緒に宿泊できる専用ルームやドッグランも完備した、アクティブに楽しみたい家族やグループに人気の温泉リゾート。広々とした大浴場や露天風呂では水沢温泉から引き込んだ濃厚な乳白色の湯を心ゆくまで堪能でき、夕食には秋田の旬を凝縮した豪華なバイキング形式で、握りたての寿司や揚げたての天ぷら、郷土料理の数々を賑やかに楽しめる。',
        price: '2食付き 10,000円〜',
        image: './hotels/tazawalakeresort.png',
        tags: ['田沢湖畔', '源泉掛け流し', 'バイキング'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad341614%2F', rakuten: 'https://a.r10.to/hkgM0K', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00904258%252F' }
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
        name: '蔵王国際ホテル',
        prefecture: 'yamagata',
        type: '温泉リゾートホテル',
        description: '蔵王温泉の高台に位置し、釘を一本も使わずに組み上げられた総檜造りの名物大浴場「八右衛門の湯」が圧巻の温泉ホテル。天井高の高い開放的な空間で、蔵王特有の乳白色の強酸性硫黄泉を源泉掛け流しで心ゆくまで堪能でき、夕食にはとろけるような「山形牛」のステーキや旬の地場産食材をふんだんに盛り込んだ彩り豊かな会席料理を、洗練されたレストランでゆっくりと味わえる。',
        price: '2食付き 28,000円〜',
        image: './hotels/zaoukokusaihoteru.png',
        tags: ['白濁硫黄泉', '総檜造り', '山形牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad309590%2F', rakuten: 'https://a.r10.to/hg6pSG', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002067%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002067%252F' }
    },
    {
        id: 'h-yamagata-2-2',
        onsen_id: 'o-yamagata-2',
        name: '和歌の宿 わかまつや',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '創業380余年の歴史を誇り、歌人・斎藤茂吉ゆかりの宿として知られる、和の情緒と温かなおもてなしが息づく老舗旅館。自家源泉から引き込んだ100%掛け流しの濃厚な硫黄泉を、趣のある大浴場や24時間利用可能な貸切風呂でプライベートに楽しみ、夕食には最高ランクの山形牛を用いたすき焼きや会席料理など、郷土の味を大切にした一皿一皿を落ち着いた個室ダイニングで堪能できる。',
        price: '2食付き 14,500円〜',
        image: './hotels/wakanoyado.png',
        tags: ['強酸性源泉掛け流し', '斎藤茂吉ゆかり', '山形牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334773%2F', rakuten: 'https://a.r10.to/h5Wy8j', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002231%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002231%252F' }
    },
    {
        id: 'h-yamagata-2-3',
        onsen_id: 'o-yamagata-2',
        name: '堺屋森のホテルヴァルトベルク',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '蔵王の豊かな森に抱かれ、北欧の山荘を思わせるクラシックで落ち着いた雰囲気が漂うリゾートホテル。森の中に突き出したような野趣あふれる露天風呂では、小鳥のさえずりを聞きながら乳白色の名湯を源泉掛け流しで愉しむことができ、夕食には山形の恵みを活かした和洋折衷のコースや山形牛の石焼きなど、ボリュームたっぷりの美食を暖炉のあるラウンジでのひとときと共に楽しめる。',
        price: '2食付き 12,000円〜',
        image: './hotels/sakaiyamori.png',
        tags: ['森の中', '源泉掛け流し', '山形牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad314747%2F', rakuten: 'https://a.r10.to/hk1QIr', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901300%252F' }
    },
    {
        id: 'h-yamagata-2-4',
        onsen_id: 'o-yamagata-2',
        name: 'JURIN',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '蔵王のシンボル「樹氷（JURIN）」を名に冠し、ゲレンデに隣接した抜群のロケーションを誇るアクティブ派に人気の高原ホテル。高原の爽やかな風を感じる露天風呂「しおんの湯」で蔵王の強酸性泉に癒やされた後は、山形の郷土料理をアレンジした和洋バイキングや会席料理を楽しみ、客室からは四季折々の色彩を見せる蔵王連峰のパノラマビューを心ゆくまで満喫できる。',
        price: '2食付き 15,000円〜',
        image: './hotels/jurinn.png',
        tags: ['樹氷展望露天', '蔵王連峰眺望', '山形地酒'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad332556%2F', rakuten: 'https://a.r10.to/hPYR3t', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900542%252F' }
    },
    {
        id: 'h-yamagata-2-5',
        onsen_id: 'o-yamagata-2',
        name: 'おおみや旅館',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '蔵王温泉街の最上部に位置し、大正浪漫のノスタルジックな雰囲気が漂う全館畳敷きの老舗温泉旅館。一歩足を踏み入れると懐かしい和の空間が広がり、創業以来守り続けられる源泉100%掛け流しの「玉子風呂」でとろりとした湯を堪能した後は、山形牛や季節の山の幸を贅沢に使用した「レトロモダン」な創作会席を、素足で過ごせる心地よい畳の上でゆっくりと味わえる。',
        price: '2食付き 16,000円〜',
        image: './hotels/oomiya.png',
        tags: ['大正浪漫', '全館畳敷き', '山形牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad338565%2F', rakuten: 'https://a.r10.to/hkmIk7', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030703%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030703%252F' }
    },
    {
        id: 'h-yamagata-2-6',
        onsen_id: 'o-yamagata-2',
        name: '蔵王四季のホテル',
        prefecture: 'yamagata',
        type: '温泉リゾート',
        description: '百万人テラスを併設し、蔵王の四季を五感で楽しむことをコンセプトとした開放感あふれるモダンな温泉ホテル。ホテルから少し歩いた「離れ湯」の百花繚乱の湯処では、木々の緑に囲まれた露天風呂で乳白色の名湯を源泉掛け流しで堪能でき、夕食には「山形牛」のしゃぶしゃぶやすき焼きを選べる会席料理など、山形の美食をカジュアルかつ上質なサービスと共に心ゆくまで楽しめる。',
        price: '2食付き 19,000円〜',
        image: './hotels/shikihotelu.png',
        tags: ['百万人テラス', '離れ湯', '山形牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad322447%2F', rakuten: 'https://a.r10.to/hg8QjO', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003213%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003213%252F' }
    },
    {
        id: 'h-yamagata-2-7',
        onsen_id: 'o-yamagata-2',
        name: '深山荘 高見屋',
        prefecture: 'yamagata',
        type: '高級温泉旅館',
        description: '創業300年、蔵王温泉で最も歴史ある宿の一つとして風格を放つ、数寄屋造りの贅沢な空間が広がる老舗高級旅館。歴史を刻んだ重厚な佇まいの中で、九つの趣異なる湯処を巡りながら自家源泉のピュアな硫黄泉を心ゆくまで楽しみ、最高級の「山形牛」や三陸の海の幸を芸術的な一皿へと昇華させた本格的な懐石料理を、一期一会のおもてなしと共に至福のひとときの中で堪能できる。',
        price: '2食付き 17,000円〜',
        image: './hotels/miyamasou.png',
        tags: ['創業300年', '九つの湯処', '山形牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad321744%2F', rakuten: 'https://a.r10.to/hgChPC', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001990%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001990%252F' }
    },

    // ===== かみのやま温泉（山形）=====
    {
        id: 'h-yamagata-3-1',
        onsen_id: 'o-yamagata-3',
        name: '古窯',
        prefecture: 'yamagata',
        type: '高級温泉旅館',
        description: '日本の宿100選に幾度も選ばれるかみのやま温泉を代表する名旅館。蔵王連峰を望む露天風呂と、独自に守り続ける窯元料理「炉端焼き会席」が極上の体験を約束する。廊下に飾られた著名芸術家の陶芸作品も見どころで、温泉・美食・芸術が三位一体となった滞在が味わえる。',
        price: '2食付き 40,000円〜',
        image: './hotels/koyou.png',
        tags: ['日本の宿100選', '炉端焼き会席', '蔵王展望露天'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-3-2',
        onsen_id: 'o-yamagata-3',
        name: 'みゆき荘',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '上山温泉の閑静な一角に佇む中規模温泉旅館。ナトリウム・カルシウム硫酸塩泉の柔らかな湯を源泉掛け流しで楽しめ、肌への優しさで女性客に特に人気が高い。夕食はかみのやま産の有機野菜と山形牛を組み合わせた季節の会席料理が供され、庭園を眺めながらゆっくり食事が楽しめる。',
        price: '2食付き 22,000円〜',
        image: './hotels/miyukisou.png',
        tags: ['源泉掛け流し', '庭園望み', '山形牛会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-3-3',
        onsen_id: 'o-yamagata-3',
        name: '果実の丘',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: 'フルーツ王国山形の旬の果実を存分に味わえる個性派温泉旅館。山形名産のサクランボ・ラ・フランスなどを使ったデザートコースが評判で、フルーツ狩り体験とのセットプランも充実。上山温泉の良質な硫酸塩泉に浸かりながら、山形の豊かな食文化を全身で楽しめる。',
        price: '2食付き 18,000円〜',
        image: './hotels/kajitsunooka.png',
        tags: ['フルーツ体験', '山形産果実スイーツ', '硫酸塩泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 天童温泉（山形）=====
    {
        id: 'h-yamagata-4-1',
        onsen_id: 'o-yamagata-4',
        name: '滝の湯',
        prefecture: 'yamagata',
        type: '高級温泉旅館',
        description: '天童温泉を代表する老舗高級旅館。将棋の町・天童らしく館内各所に将棋駒のアートが飾られ、人間将棋観戦ツアーとのコラボプランも人気。泉質はナトリウム・カルシウム塩化物泉で、ゆったりとした大浴場と個性豊かな貸切露天風呂が揃う。山形牛と旬の山海の幸を盛り込んだ会席料理が格調高い。',
        price: '2食付き 35,000円〜',
        image: './hotels/takinoyu.png',
        tags: ['将棋の町', '貸切露天', '山形牛会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-4-2',
        onsen_id: 'o-yamagata-4',
        name: '天童ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: '天童温泉の中心に位置するアクセス良好な大型温泉ホテル。広々とした大浴場と複数の露天風呂を備え、源泉掛け流しの天然温泉が自慢。地元の新鮮食材を活かしたビュッフェ夕食は山形牛のローストビーフや山形産米のおにぎりコーナーが人気で、家族旅行やグループ旅行に最適。',
        price: '2食付き 18,000円〜',
        image: './hotels/tendouhoteru.png',
        tags: ['源泉掛け流し', '大型ビュッフェ', 'アクセス良好'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-4-3',
        onsen_id: 'o-yamagata-4',
        name: '舞鶴荘',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '天童温泉の静かな一画に佇む和風旅館。将棋の駒生産量日本一を誇る天童の地らしく、館内には将棋の歴史と文化に触れるコーナーを設置。良質なナトリウム塩化物泉を少人数でゆったり楽しめる家庭的な宿で、山形産の野菜や川魚を主役にした素朴な料理が心を和ませる。',
        price: '2食付き 14,000円〜',
        image: './hotels/maizurusou.png',
        tags: ['将棋文化', '家庭的なもてなし', '山形郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 赤湯温泉（山形）=====
    {
        id: 'h-yamagata-5-1',
        onsen_id: 'o-yamagata-5',
        name: '上杉の御湯 御殿守',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: '上杉家ゆかりの赤湯温泉で、かつて米沢藩主の別邸として愛された歴史を誇る風格ある温泉旅館。自家源泉から湧き出る豊かな湯を、日本一の大きさを誇る「原石風呂」や「龍神の湯」など十二種類の多彩な湯殿で心ゆくまで堪能でき、夕食には米沢牛のステーキや山形の旬の味覚をふんだんに盛り込んだ「上杉膳」を、歴史の面影を残す落ち着いた和の空間でゆっくりと味わえる。',
        price: '2食付き 20,000円〜',
        image: './hotels/gotenshu.png',
        tags: ['上杉家ゆかり', '日本一の原石風呂', '米沢牛ステーキ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad321384%2F', rakuten: 'https://a.r10.to/hPm2t9', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031058%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031058%252F' }
    },
    {
        id: 'h-yamagata-5-2',
        onsen_id: 'o-yamagata-5',
        name: '旅館 大文字屋',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '赤湯温泉の街中に佇み、創業以来120年以上にわたって「美肌の湯」を守り続けるアットホームで温かな老舗旅館。無色透明ながらとろりとした肌触りの天然温泉を、24時間入浴可能な大浴場や露天風呂で源泉掛け流しのまま楽しむことができ、夕食にはA5ランクの「米沢牛」や地元・南陽市の農家から届く新鮮な野菜、三陸の海の幸を盛り込んだボリュームたっぷりの手作り料理を堪能できる。',
        price: '2食付き 14,000円〜',
        image: './hotels/oomonjiya.png',
        tags: ['源泉掛け流し', '南陽牛料理', '老舗旅館'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad330184%2F', rakuten: 'https://a.r10.to/h5merw', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-5-3',
        onsen_id: 'o-yamagata-5',
        name: '大正ロマン香る癒しの宿 丹波館',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '大正時代の面影を今に伝える木造建築が美しく、一歩足を踏み入れるとノスタルジックな雰囲気に包まれる全14室の温泉宿。吹き抜けが開放的な総檜造りの大浴場で赤湯の名湯を心ゆくまで楽しみ、夕食には「米沢牛」のしゃぶしゃぶや、地元の旬素材を活かした創作和食を落ち着いたお食事処で味わいながら、ステンドグラスやアンティーク家具が彩る館内で静かな時の流れをゆったりと享受できる。',
        price: '2食付き 14,500円〜',
        image: './hotels/tanbakann.png',
        tags: ['大正ロマン', '米沢牛しゃぶしゃぶ', '檜造りの大浴場'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad374115%2F', rakuten: 'https://a.r10.to/hk4cFu', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00921915%252F' }
    },
    {
        id: 'h-yamagata-5-4',
        onsen_id: 'o-yamagata-5',
        name: '鶴の湯 松島館',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '「鶴が傷を癒やした」という開湯伝説が残る赤湯温泉で、モダンな感性と伝統が融合した全10室のデザイナーズ温泉旅館。全室が趣の異なる意匠を凝らした造りとなっており、柔らかな肌触りの自家源泉を貸切風呂や露天風呂でプライベートに楽しみながら、夕食には最高級の米沢牛をメインに、地元のワインとのペアリングも楽しめる洗練された創作料理を個室スタイルのダイニングで堪能できる。',
        price: '2食付き 24,000円〜',
        image: './hotels/matsushimakan.png',
        tags: ['開湯伝説', 'デザイナーズ', '米沢牛とワイン'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad390528%2F', rakuten: 'https://a.r10.to/h5LEiP', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001823%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001823%252F' }
    },
    {
        id: 'h-yamagata-5-5',
        onsen_id: 'o-yamagata-5',
        name: '丹泉ホテル',
        prefecture: 'yamagata',
        type: '温泉ホテル',
        description: '赤湯温泉の中心部に位置し、江戸時代から続く「殿様の湯」の伝統を受け継ぐ、全館畳敷きの心地よさが魅力の温泉ホテル。広々とした大浴場や岩造りの露天風呂で源泉掛け流しの名湯を心ゆくまで堪能した後は、ライブキッチンで焼き上げる米沢牛のステーキや、山形の郷土料理をふんだんに盛り込んだ彩り豊かなビュッフェ、または季節の会席料理を家族やグループで賑やかに楽しめる。',
        price: '2食付き 14,000円〜',
        image: './hotels/tansenhotel.png',
        tags: ['殿様の湯', '米沢牛ステーキ', '畳敷きの館内'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad380193%2F', rakuten: 'https://a.r10.to/hk1HI6', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902730%252F' }
    },
    {
        id: 'h-yamagata-5-6',
        onsen_id: 'o-yamagata-5',
        name: '森の湯',
        prefecture: 'yamagata',
        type: '高級温泉旅館',
        description: '赤湯温泉の喧騒から少し離れた閑静な場所に佇む、全室に源泉掛け流しの露天風呂を完備した大人のための隠れ宿。木造平屋建ての落ち着いた造りの客室で、誰にも邪魔されずに心ゆくまで名湯を独り占めでき、夕食には米沢牛の極上ステーキや、近隣の契約農家から届く新鮮な「つや姫」、旬の山菜など、素材の持ち味を最大限に引き出した滋味豊かな里山料理を、一期一会のおもてなしと共に味わえる。',
        price: '2食付き 16,000円〜',
        image: './hotels/morinoyu.png',
        tags: ['源泉掛け流し露天風呂', '米沢牛ステーキ', '里山料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad308843%2F', rakuten: 'https://a.r10.to/h54DqW', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001947%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001947%252F' }
    },
    {
        id: 'h-yamagata-5-7',
        onsen_id: 'o-yamagata-5',
        name: '山形座 瀧波',
        prefecture: 'yamagata',
        type: '高級温泉旅館',
        description: '「山形の文化を体験する」をコンセプトに、築350年の庄屋屋敷を移築した重厚な空間が広がる、全室源泉掛け流し露天風呂付きの高級温泉旅館。ライブ感あふれるオープンキッチン「1/365」で、山形の土が育んだ究極の野菜や米沢牛を芸術的な一皿へと昇華させた料理を堪能し、朝には搗きたての餅を振る舞うなど、五感で山形の豊かさを感じる至福のリトリート体験を心ゆくまで享受できる。',
        price: '2食付き 44,000円〜',
        image: './hotels/ryuuharyu.png',
        tags: ['源泉掛け流し露天風呂', '米沢牛ステーキ', '里山料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad346918%2F', rakuten: 'https://a.r10.to/hkCfq5', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002496%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002496%252F' }
    },

    // ===== あつみ温泉（山形）=====
    {
        id: 'h-yamagata-6-1',
        onsen_id: 'o-yamagata-6',
        name: '萬国屋',
        prefecture: 'yamagata',
        type: '老舗高級旅館',
        description: '創業350年余の歴史を誇る庄内屈指の老舗高級旅館。温海川沿いに建つ風格ある本館は、登録有形文化財にも指定された歴史的建造物。川床に面した露天風呂で楽しむ塩化物泉は「美肌の湯」として名高く、夕食には庄内浜の新鮮な海の幸と庄内米を贅沢に使った懐石料理が供される。',
        price: '2食付き 35,000円〜',
        image: './hotels/bankokuya.png',
        tags: ['創業350年', '登録有形文化財', '庄内浜の海鮮懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-6-2',
        onsen_id: 'o-yamagata-6',
        name: 'たちばなや',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '温海川のせせらぎを感じる川沿いの温泉旅館。塩化物泉の源泉掛け流し露天風呂は川の音に包まれた格別の癒し空間で、四季折々の自然美が堪能できる。夕食は地元漁港直送の庄内浜の魚介や鶴岡産だだちゃ豆など庄内食材を生かした会席料理が評判で、地酒との相性も抜群。',
        price: '2食付き 25,000円〜',
        image: './hotels/tachibanaya.png',
        tags: ['川沿い露天', '庄内浜の鮮魚', 'だだちゃ豆料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamagata-6-3',
        onsen_id: 'o-yamagata-6',
        name: '以交坊',
        prefecture: 'yamagata',
        type: '温泉旅館',
        description: '温海温泉の川沿いに立つ小ぢんまりとした和風旅館。こぢんまりとした宿ならではの丁寧なもてなしが評判で、旅慣れた大人に人気。塩化物泉の内湯と露天風呂はいずれも源泉掛け流しで、庄内の海の幸・山の幸を主役にした素朴で滋味深い夕食と共に、ゆっくりとした時間を過ごせる。',
        price: '2食付き 18,000円〜',
        image: './hotels/ikoubou.png',
        tags: ['源泉掛け流し', '少人数のもてなし', '庄内の地料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 東山温泉（福島）=====
    {
        id: 'h-fukushima-1-1',
        onsen_id: 'o-fukushima-1',
        name: '向瀧',
        prefecture: 'fukushima',
        type: '老舗温泉旅館',
        description: '明治10年創業、国指定登録有形文化財の老舗旅館。会津の伝統建築を継承した格調高い建物と手入れの行き届いた日本庭園が訪れる人を魅了する。硫酸塩泉の源泉掛け流し内湯は風情あふれる浴室で、会津の郷土料理「こづゆ」を筆頭に会津ブランドの野菜・川魚を活かした繊細な会席料理が評判。',
        price: '2食付き 30,000円〜',
        image: './hotels/koutaki.png',
        tags: ['国登録有形文化財', '会津の老舗', '会津郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-1-2',
        onsen_id: 'o-fukushima-1',
        name: '庄助の宿 瀧の湯',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '会津民謡の主人公「小原庄助さん」にちなんだ名を持つ東山温泉を代表する旅館。大川渓谷を望む絶景の露天風呂と内湯は豊富な湯量の源泉掛け流し。夕食には会津の厳選食材による会席料理と会津の地酒が楽しめ、歌声喫茶や郷土芸能鑑賞など会津の文化体験プランも充実。',
        price: '2食付き 22,000円〜',
        image: './hotels/shousukenoyadotakinoyu.png',
        tags: ['渓谷露天', '会津地酒', '郷土芸能体験'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-1-3',
        onsen_id: 'o-fukushima-1',
        name: '東山グランドホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: '東山温泉の高台に建つ大型温泉ホテル。館内最上階の展望露天風呂からは会津盆地と磐梯山を一望できる絶景が広がる。硫酸塩・塩化物泉の大浴場は広々として開放的。夕食ビュッフェは会津伝統の「ソースカツ丼」や「こづゆ」など会津グルメが多数揃い、家族連れにも人気が高い。',
        price: '2食付き 16,000円〜',
        image: './hotels/higashiyamagurandohoteru.png',
        tags: ['磐梯山展望', '会津グルメビュッフェ', '大型施設'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 磐梯熱海温泉（福島）=====
    {
        id: 'h-fukushima-2-1',
        onsen_id: 'o-fukushima-2',
        name: 'ホテル華の湯',
        prefecture: 'fukushima',
        type: '温泉リゾートホテル',
        description: '磐梯熱海温泉最大規模のリゾートホテル。塩化物泉と硫酸塩泉の2種類の源泉を持ち、広大な大浴場・露天風呂・サウナが充実。磐梯山と五色沼への観光拠点として絶好のロケーションにあり、夕食ビュッフェでは福島を代表するももや桃ジュース、会津の地鶏料理など多彩な福島グルメが楽しめる。',
        price: '2食付き 18,000円〜',
        image: './hotels/hoteruhananoyu.png',
        tags: ['2種の源泉', '磐梯山観光拠点', '福島グルメビュッフェ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-2-2',
        onsen_id: 'o-fukushima-2',
        name: '萩姫の湯 栄楽館',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '磐梯熱海温泉の歴史を語る老舗旅館。「萩姫伝説」ゆかりの地に建ち、館内の至る所に萩姫にまつわる装飾や展示が施された風情ある宿。滑らかな肌触りの塩化物・硫酸塩泉の源泉掛け流し湯船が評判で、郡山近郊で採れる新鮮な山の幸と阿武隈川の川魚を主役にした会席が旅の記憶に残る。',
        price: '2食付き 20,000円〜',
        image: './hotels/hagihimenoyusakaerakukan.png',
        tags: ['萩姫伝説', '源泉掛け流し', '阿武隈の川魚料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-2-3',
        onsen_id: 'o-fukushima-2',
        name: '磐梯熱海温泉 富士屋ホテル',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: '磐梯熱海温泉の老舗温泉ホテル。開放感あふれる大浴場と季節ごとに趣の変わる露天風呂が自慢で、美肌効果で知られる弱アルカリ性の塩化物泉が女性旅行者に特に人気。夕食は福島のブランド食材「福島牛」を使った料理と地酒が評判で、磐梯・猪苗代エリアの観光後に訪れる旅行者に愛されている。',
        price: '2食付き 15,000円〜',
        image: './hotels/bandaiatamionsenfujiyahoteru.png',
        tags: ['美肌の塩化物泉', '福島牛料理', '磐梯観光の拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 飯坂温泉（福島）=====
    {
        id: 'h-fukushima-3-1',
        onsen_id: 'o-fukushima-3',
        name: '摺上亭大鳥',
        prefecture: 'fukushima',
        type: '高級温泉旅館',
        description: '摺上川沿いに建つ飯坂温泉屈指の高級旅館。日本三大高温泉の一つに数えられる65℃超の熱湯をしっかり冷まして楽しむ源泉掛け流し露天風呂が圧巻。全室の客室から摺上川の渓谷美を眺められる贅沢な設計で、夕食には福島の四季折々の味覚と阿武隈川の天然鮎など地元の幸が盛り込まれた懐石料理が供される。',
        price: '2食付き 30,000円〜',
        image: './hotels/surikamiteiootori.png',
        tags: ['高温源泉掛け流し', '渓谷ビュー客室', '天然鮎料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-3-2',
        onsen_id: 'o-fukushima-3',
        name: '旅館なかむらや',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '飯坂温泉街の中心に位置する庶民的な温泉旅館。源泉掛け流しの熱い湯は飯坂特有の強い浴感で湯治客にも人気が高い。温泉街の共同湯「鯖湖湯」へも徒歩圏内で、湯めぐりを楽しむ旅人の宿として重宝されている。夕食はふくしまの旬の食材を使った家庭的な和食が中心。',
        price: '2食付き 12,000円〜',
        image: './hotels/ryokannakamuraya.png',
        tags: ['源泉掛け流し', '温泉街の湯めぐり', '庶民的な旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-3-3',
        onsen_id: 'o-fukushima-3',
        name: '新扇屋',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '飯坂温泉の伝統を守り続ける老舗温泉旅館。pH8.4の弱アルカリ性単純泉は肌に優しく、長湯しやすい柔らかな湯触りが特徴。飯坂名物の「円盤餃子」や地元農家から仕入れた野菜を使った夕食は素朴ながら心温まる味で、アットホームなもてなしと共に旅の疲れを癒す。',
        price: '2食付き 14,000円〜',
        image: './hotels/shinougiya.png',
        tags: ['弱アルカリ性温泉', '飯坂円盤餃子', '老舗旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 土湯温泉（福島）=====
    {
        id: 'h-fukushima-4-1',
        onsen_id: 'o-fukushima-4',
        name: '山水荘',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '荒川沿いの渓谷美を望む土湯温泉の中堅旅館。弱酸性の単純硫黄泉を源泉掛け流しで楽しめる内湯と露天風呂が揃い、乳白色に濁る湯の花漂う湯船が評判。土湯こけしの産地らしく館内に手作りこけしが飾られ、旅情を演出。夕食には福島の山の幸と阿武隈川の川魚を使った会席料理が並ぶ。',
        price: '2食付き 16,000円〜',
        image: './hotels/sansuisou.png',
        tags: ['硫黄源泉掛け流し', '土湯こけし', '渓谷の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-4-2',
        onsen_id: 'o-fukushima-4',
        name: '玉子湯',
        prefecture: 'fukushima',
        type: '湯治旅館',
        description: '土湯温泉を代表する老舗湯治宿。江戸時代から続く萱葺き屋根の「混浴茅葺き湯小屋」は国内随一の風情を誇り、硫黄泉の濃い香りが漂う野趣あふれる空間で日常を忘れる体験が味わえる。白濁した源泉100%掛け流しの湯は療養効果が高く、遠方からリピーターが後を絶たない名湯。',
        price: '2食付き 14,000円〜',
        image: './hotels/tamagoyu.png',
        tags: ['茅葺き湯小屋', '硫黄源泉掛け流し', '湯治の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-4-3',
        onsen_id: 'o-fukushima-4',
        name: '山口屋',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '土湯温泉の中心に立つ家族経営の温泉旅館。硫黄の香り漂う源泉掛け流しの湯は肌をすべすべにする美人の湯として人気が高く、貸切露天風呂も完備。夕食は地元農家から直接仕入れた無農薬野菜と福島の川魚・山菜を主役にした素朴で滋味深い料理で、家庭的な温かみが旅人の心を癒す。',
        price: '2食付き 13,000円〜',
        image: './hotels/yamaguchiya.png',
        tags: ['美肌の湯', '貸切露天', '地元農家直送食材'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 芦ノ牧温泉（福島）=====
    {
        id: 'h-fukushima-5-1',
        onsen_id: 'o-fukushima-5',
        name: '大川荘',
        prefecture: 'fukushima',
        type: '高級温泉旅館',
        description: '大川渓谷の断崖上に建ち、まるで天空に浮かぶような絶景が広がる会津屈指の高級温泉旅館。断崖から谷底を望む野天風呂「仙峡の湯」は訪れる者を圧倒する迫力で、ロープウェイで谷底へ降りるスリリングな体験が人気。夕食は会津の郷土食材を贅沢に盛り込んだ会席料理で舌鼓を打てる。',
        price: '2食付き 35,000円〜',
        image: './hotels/ookawasou.png',
        tags: ['渓谷の絶景野天風呂', 'ロープウェイ温泉', '会津高級旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-5-2',
        onsen_id: 'o-fukushima-5',
        name: 'ホテル丸峰',
        prefecture: 'fukushima',
        type: '温泉ホテル',
        description: '芦ノ牧温泉の渓谷に面した中型温泉ホテル。大川の清流を眺める露天風呂とサウナを備えた大浴場が自慢で、塩化物泉の柔らかな湯に長湯を楽しむ宿泊者も多い。夕食はビュッフェスタイルで会津のソースかつや喜多方ラーメン、地元野菜のかき揚げなど福島グルメが充実している。',
        price: '2食付き 16,000円〜',
        image: './hotels/hoterumarumine.png',
        tags: ['渓谷露天', '会津グルメビュッフェ', '喜多方ラーメン'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-5-3',
        onsen_id: 'o-fukushima-5',
        name: 'たつみ荘',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '芦ノ牧温泉の自然に囲まれた小ぢんまりとした温泉旅館。塩化物泉の源泉掛け流し湯は無色透明で体の芯から温まり、湯冷めしにくいと評判。会津若松の観光にも便利な立地で、夕食には会津漆器の食器に盛られた会津の郷土料理「こづゆ」や会津牛の陶板焼きが楽しめる。',
        price: '2食付き 14,000円〜',
        image: './hotels/tatsumisou.png',
        tags: ['源泉掛け流し', '会津若松観光拠点', '会津郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 高湯温泉（福島）=====
    {
        id: 'h-fukushima-6-1',
        onsen_id: 'o-fukushima-6',
        name: '安達屋旅館',
        prefecture: 'fukushima',
        type: '老舗温泉旅館',
        description: '高湯温泉で指折りの老舗旅館。強酸性の含硫黄泉（pH2.2）を源泉100%掛け流しで楽しめる大浴場と絶景の露天風呂が揃い、白く濁る硫黄の湯は皮膚病・慢性病への効能で知られる。吾妻山の四季が映える自然美と共に過ごす夕食は、福島の高原野菜や川魚を使った滋味深い料理が中心。',
        price: '2食付き 20,000円〜',
        image: './hotels/adachiyaryokan.png',
        tags: ['強酸性硫黄泉', '源泉掛け流し', '吾妻山の四季'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-6-2',
        onsen_id: 'o-fukushima-6',
        name: 'ひげの家',
        prefecture: 'fukushima',
        type: '温泉旅館',
        description: '高湯温泉の山中に佇む個性的な温泉旅館。屋号通りのユニークなキャラクターあふれる宿で、白濁した硫黄泉の野趣あふれる露天風呂が人気の秘密。自家農園の無農薬野菜と高湯の清流で育つイワナ・ヤマメの炭火焼きが夕食の主役で、健康的で素朴な料理が旅人の心と体を癒す。',
        price: '2食付き 16,000円〜',
        image: './hotels/higenoie.png',
        tags: ['野趣の露天風呂', '自家農園野菜', 'イワナの炭火焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukushima-6-3',
        onsen_id: 'o-fukushima-6',
        name: '旅館玉子湯（高湯）',
        prefecture: 'fukushima',
        type: '湯治旅館',
        description: '高湯温泉で最も古い歴史を持つ湯治の宿。かつて療養に訪れた文人墨客も愛したとされる白濁の硫黄泉は、強い酸性と豊富な成分が特徴で皮膚疾患・神経痛への効能が高い。茅葺き屋根の風情ある湯小屋で昔ながらの湯治文化に触れ、素朴な山里料理と共に体の奥からデトックスできる。',
        price: '2食付き 13,000円〜',
        image: './hotels/ryokantamagoyutakayu.png',
        tags: ['湯治文化', '茅葺き湯小屋', '白濁硫黄泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 袋田温泉（茨城）=====
    {
        id: 'h-ibaraki-1-1',
        onsen_id: 'o-ibaraki-1',
        name: '思い出浪漫館',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '日本三名瀑の一つ「袋田の滝」から徒歩圏の好立地に建つ温泉旅館。久慈川の清流を眺める露天風呂と内湯でアルカリ性単純温泉の美肌の湯を堪能できる。夕食は奥久慈の自然が育んだ奥久慈しゃも鍋や久慈川の天然鮎の塩焼きなど地元の食材を生かした料理が並び、茨城の地酒との相性も抜群。',
        price: '2食付き 18,000円〜',
        image: './hotels/omoideroumankan.png',
        tags: ['袋田の滝徒歩圏', '奥久慈しゃも鍋', '美肌の湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-1-2',
        onsen_id: 'o-ibaraki-1',
        name: '四季彩の宿 ふくろだ',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '袋田温泉の四季折々の自然美を満喫できる中規模温泉旅館。新緑・紅葉・雪景色と表情を変える奥久慈の山々を望む露天風呂は絶景で、特に秋の紅葉シーズンは大人気。奥久慈産のリンゴやナシを使ったフルーツデザートと地元産の野菜・きのこをたっぷり使った郷土鍋が旅の記憶に残る。',
        price: '2食付き 16,000円〜',
        image: './hotels/shikisainoyadofukuroda.png',
        tags: ['四季の絶景露天', '奥久慈産フルーツ', '紅葉の名所'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-1-3',
        onsen_id: 'o-ibaraki-1',
        name: '滝味の宿 豊年万作',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '袋田の滝と大子の豊かな自然に囲まれた温泉旅館。弱アルカリ性の単純温泉は肌に優しく、疲れた体をゆっくり癒すのに最適。大子名産のリンゴを使ったアップルパイや奥久慈しゃも料理など地元食材が主役の夕食が人気で、秋のリンゴ狩り体験プランとのセット旅行も充実。',
        price: '2食付き 14,000円〜',
        image: './hotels/takiajinoyadohounenmansaku.png',
        tags: ['袋田の滝', 'リンゴ狩り体験', '奥久慈の自然'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 五浦温泉（茨城）=====
    {
        id: 'h-ibaraki-2-1',
        onsen_id: 'o-ibaraki-2',
        name: '五浦観光ホテル 本館',
        prefecture: 'ibaraki',
        type: '海浜温泉ホテル',
        description: '岡倉天心ゆかりの地・五浦海岸に立つ海浜温泉ホテル。太平洋を一望する絶景の露天風呂からは、晴れた日に水平線に沈む夕日が眺められ感動的。新鮮な常磐ものの海の幸を使った海鮮会席が自慢で、ヒラメの薄造りや地アンコウ鍋など茨城ならではの食の恵みを満喫できる。',
        price: '2食付き 20,000円〜',
        image: './hotels/itsuurakankouhoteruhonkan.png',
        tags: ['太平洋展望露天', '常磐の海鮮', 'アンコウ鍋'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-2-2',
        onsen_id: 'o-ibaraki-2',
        name: '五浦観光ホテル 別館磯の宿',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '岡倉天心六角堂のすぐ近く、磯の香りが漂う絶好のロケーションにある別館旅館。岩礁から砕け散る波飛沫を間近に感じる露天風呂は五浦ならではの贅沢体験。地魚の活造りを始め、常磐沖で揚がった旬の魚介を素材の旨みを生かした調理で提供する夕食が評判。',
        price: '2食付き 24,000円〜',
        image: './hotels/itsuurakankouhoterubekkanisonoyado.png',
        tags: ['岡倉天心ゆかり', '磯の絶景露天', '常磐地魚活造り'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-2-3',
        onsen_id: 'o-ibaraki-2',
        name: 'いきかえりの宿 旅館 涛声',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '五浦の断崖に建ち、太平洋の波音が響く静かな温泉旅館。館名通り「生き返り」をコンセプトに掲げ、良質な温泉と非日常の海景色で疲れた体と心を根本からリセットできる。夕食には常磐の幸を贅沢に使った和食会席が並び、特に冬季限定のアンコウ鍋は食べに来る価値ありと評判。',
        price: '2食付き 18,000円〜',
        image: './hotels/ikikaerinoyadoryokantoukoe.png',
        tags: ['太平洋の波音', '非日常の海景色', '冬のアンコウ鍋'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 大子温泉（茨城）=====
    {
        id: 'h-ibaraki-3-1',
        onsen_id: 'o-ibaraki-3',
        name: 'やみぞの宿 大子温泉保養センター',
        prefecture: 'ibaraki',
        type: '温泉保養施設',
        description: '奥久慈やみぞの自然に抱かれた大子温泉の保養施設。久慈川の清流沿いに位置し、単純温泉の柔らかな湯が体を芯から温める。日帰り入浴も人気だが宿泊では連泊しながら周辺の袋田の滝や西金砂神社などを巡る滞在型観光が楽しめる。奥久慈の山の幸を活かした家庭的な食事が旅を締めくくる。',
        price: '2食付き 12,000円〜',
        image: './hotels/yamizonoyadooogoonsenhoyousentaa.png',
        tags: ['久慈川沿い', '袋田の滝観光拠点', '奥久慈山の幸'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-3-2',
        onsen_id: 'o-ibaraki-3',
        name: '奥久慈旅館',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '大子温泉の里山に溶け込む小さな温泉旅館。弱アルカリ性の単純温泉はさらりとした湯触りで肌に優しく、体への負担が少ないことからシニアにも人気が高い。奥久慈名産の奥久慈しゃもの親子丼や地元農家から仕入れた旬の野菜を使った素朴な料理が好評で、アットホームな雰囲気の中で心も体もほぐれる。',
        price: '2食付き 13,000円〜',
        image: './hotels/okukujiryokan.png',
        tags: ['奥久慈しゃも', '弱アルカリ温泉', '里山の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-3-3',
        onsen_id: 'o-ibaraki-3',
        name: 'ホテル奥久慈',
        prefecture: 'ibaraki',
        type: '温泉ホテル',
        description: '大子温泉を代表する中型温泉ホテル。奥久慈の山々を一望できる大浴場の露天風呂が自慢で、塩化物泉の温まる湯に長湯を楽しむ宿泊者が多い。大子名産のリンゴや奥久慈茶を使ったスイーツと、地元漁協から仕入れた久慈川のアユ・イワナの塩焼きが夕食のハイライト。',
        price: '2食付き 15,000円〜',
        image: './hotels/hoteruokukuji.png',
        tags: ['久慈川の鮎', '奥久慈茶', '奥久慈の山眺望'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 筑波山温泉（茨城）=====
    {
        id: 'h-ibaraki-4-1',
        onsen_id: 'o-ibaraki-4',
        name: '筑波山京成ホテル',
        prefecture: 'ibaraki',
        type: '温泉リゾートホテル',
        description: '筑波山中腹、ケーブルカー宮脇駅に隣接する利便性抜群のリゾートホテル。関東平野を一望する絶景の展望大浴場と露天風呂は、晴れた日には東京スカイツリーまで見渡せる圧巻の眺め。夕食は茨城のブランド食材「常陸牛」や霞ヶ浦のシラウオ料理など茨城ならではのグルメが揃うビュッフェが人気。',
        price: '2食付き 20,000円〜',
        image: './hotels/tsukubasankeiseihoteru.png',
        tags: ['関東平野の絶景展望', '常陸牛', 'ケーブルカー直結'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-4-2',
        onsen_id: 'o-ibaraki-4',
        name: '筑波山温泉 青木屋',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '筑波山神社に程近い老舗温泉旅館。筑波山特有のラジウム泉を楽しめる大浴場は疲労回復・神経痛への効能が高く、登山客にも重宝される宿。夕食は霞ヶ浦名産のレンコン料理や地元農家直送の茨城産有機野菜を中心にした滋味深い会席料理が揃い、筑波山観光の拠点として最適な宿。',
        price: '2食付き 18,000円〜',
        image: './hotels/tsukubasanonsenaokiya.png',
        tags: ['ラジウム泉', '筑波山神社近く', '霞ヶ浦レンコン料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ibaraki-4-3',
        onsen_id: 'o-ibaraki-4',
        name: '筑波山江戸屋',
        prefecture: 'ibaraki',
        type: '温泉旅館',
        description: '筑波山の登山道入口に佇む歴史ある温泉旅館。単純放射能泉（ラジウム泉）の宿で、関東の登山家や自然愛好家が多く訪れる。筑波山ハイキング後の疲れた体をほぐす温泉と、茨城名産の納豆や筑波山の山菜を使った素朴な料理が旅の締めくくりに最適。日の出鑑賞の早起き登山翌朝の一風呂も格別。',
        price: '2食付き 15,000円〜',
        image: './hotels/tsukubasanedoya.png',
        tags: ['ラジウム泉', '筑波山登山拠点', '茨城の郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 那須温泉郷（栃木）=====
    {
        id: 'h-tochigi-1-1',
        onsen_id: 'o-tochigi-1',
        name: 'ホテルサンバレー那須',
        prefecture: 'tochigi',
        type: '温泉リゾートホテル',
        description: '那須高原に広大な敷地を構える大型温泉リゾート。温水プールや岩盤浴、サウナまで備えた多彩な入浴施設が充実し、含硫黄の源泉掛け流し湯が白濁した湯船でゆったりとくつろげる。夕食ビュッフェは栃木の旬食材をふんだんに使い、那須御養卵や栃木の地ビールが揃う。',
        price: '2食付き 18,000円〜',
        image: './hotels/hoterusanbareenasu.png',
        tags: ['硫黄源泉掛け流し', '温水プール', '大型リゾート'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-1-2',
        onsen_id: 'o-tochigi-1',
        name: ' 旅館 山楽',
        prefecture: 'tochigi',
        type: '高級温泉旅館',
        description: '那須温泉郷の自然に囲まれた風格ある高級温泉旅館。含硫黄の単純硫黄泉を源泉掛け流しで楽しめる広々とした大浴場と貸切露天風呂が揃う。夕食は那須高原の新鮮食材を活かした会席料理が主役で、那須黒毛和牛のしゃぶしゃぶや地元農家の無農薬野菜が旅の味覚を彩る。',
        price: '2食付き 30,000円〜',
        image: './hotels/ryokansanraku.png',
        tags: ['硫黄源泉掛け流し', '那須黒毛和牛', '貸切露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-1-3',
        onsen_id: 'o-tochigi-1',
        name: '那須温泉 大丸温泉旅館',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '那須連山の渓流沿いに建つ趣ある温泉旅館。川を堰き止めて造った「川の湯」と呼ばれる天然露天風呂が圧倒的な存在感を放ち、硫黄泉の白濁した湯が大自然の中に流れる極上体験を提供する。夕食は那須高原の恵みを盛り込んだ和食会席で、旬の山菜や鹿肉料理が人気。',
        price: '2食付き 25,000円〜',
        image: './hotels/nasuonsendaimaruonsenryokan.png',
        tags: ['川の湯・天然露天', '白濁硫黄泉', '那須高原の食材'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 日光湯元温泉（栃木）=====
    {
        id: 'h-tochigi-2-1',
        onsen_id: 'o-tochigi-2',
        name: '奥日光ゆの森',
        prefecture: 'tochigi',
        type: '高級温泉旅館',
        description: '湯ノ湖のほとりに佇む全室露天風呂付きの宿。日光湯元の白濁した硫黄泉を源泉かけ流しで各客室に引き込み、湯煙の中で奥日光の森を独占する贅沢な湯浴みが楽しめる。夕食は栃木産の旬野菜と日光虹鱒を活かした会席料理で、ヒメマスのムニエルが絶品。冬は雪見露天風呂が幻想的で、カップルや夫婦の特別旅行に人気が高い。',
        price: '2食付き 38,000円〜',
        image: './hotels/okunikkouyunomori.png',
        tags: ['全室露天風呂付き', '硫黄泉かけ流し', '雪見露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-2-2',
        onsen_id: 'o-tochigi-2',
        name: '亀の井ホテル 奥日光湯元',
        prefecture: 'tochigi',
        type: '温泉リゾートホテル',
        description: '湯ノ湖を望む絶好のロケーションに位置し、全室レイクフロントの客室から四季折々の湖景色を堪能できる。大露天風呂には乳白色に濁った硫黄泉が豊富に注がれ、湿原越しに見える男体山の稜線が壮観。栃木名産のかんぴょうや宇都宮ゆかりの餃子食材を取り込んだ和洋バイキングも好評で、ファミリーからシニアまで幅広い層に支持されている。',
        price: '2食付き 20,000円〜',
        image: './hotels/kamenoihoteruokunikkouyumoto.png',
        tags: ['湖畔の宿', '乳白色硫黄泉', '展望大浴場'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-2-3',
        onsen_id: 'o-tochigi-2',
        name: '奥日光小西ホテル',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: '深い緑に包まれた森の中に建つ、男体山の溶岩石をふんだんに使った個性的な温泉ホテル。日光湯元温泉の硫黄泉を源泉から直引きし、岩肌を伝う湯の流れが野趣あふれる露天風呂は最大7名が同時に入浴できる贅沢な設え。日光山麓で育った鹿肉や岩魚を使ったジビエ料理が評判で、秋の紅葉シーズンは特に人気が高い。',
        price: '2食付き 18,000円〜',
        image: './hotels/okunikkoukonishihoteru.png',
        tags: ['溶岩石露天風呂', '硫黄泉', 'ジビエ料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 鬼怒川温泉（栃木）=====
    {
        id: 'h-tochigi-3-1',
        onsen_id: 'o-tochigi-3',
        name: '鬼怒川温泉 あさや',
        prefecture: 'tochigi',
        type: '大型温泉旅館',
        description: '創業130年余の老舗で、鬼怒川温泉で最も高い場所に位置する空中庭園露天風呂が名物。アルカリ性単純泉の柔らかな湯が肌をしっとりと包み、渓谷を見下ろす絶景とともに極上のひとときを過ごせる。夕食は和洋中100種超のバイキングにライブキッチンで揚げたての天ぷらや地元那須牛の鉄板焼きが加わり、じゃらんnet評価4.7を誇る高い満足度を誇る。',
        price: '2食付き 20,000円〜',
        image: './hotels/kinugawaonsenasaya.png',
        tags: ['空中庭園露天風呂', 'アルカリ単純泉', '老舗旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-3-2',
        onsen_id: 'o-tochigi-3',
        name: '鬼怒川金谷ホテル',
        prefecture: 'tochigi',
        type: 'ラグジュアリーリゾート旅館',
        description: '日本最古のクラシックホテル・日光金谷ホテルの精神を受け継ぐ、西洋と東洋の美が融合した上質なリゾート旅館。清流鬼怒川沿いの露天風呂でアルカリ性単純泉の美肌の湯を楽しんだ後は、フランス料理技法を取り入れた和食会席に舌鼓を打てる。栃木のブランド牛・とちぎ和牛や那須の旬野菜を使ったコース料理は一休.com利用者からも高く評価されている。',
        price: '2食付き 35,000円〜',
        image: './hotels/kinugawakanayahoteru.png',
        tags: ['西洋×和の融合', 'アルカリ単純泉', 'とちぎ和牛会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-3-3',
        onsen_id: 'o-tochigi-3',
        name: 'ホテル鬼怒川御苑',
        prefecture: 'tochigi',
        type: '温泉ホテル',
        description: '鬼怒川沿いに建ち、渓谷の大自然を眺める大浴場と露天風呂でアルカリ性単純泉を楽しめる中型温泉ホテル。日光東照宮・鬼怒川ライン下りなど周辺観光の拠点として抜群の利便性を誇り、夕食は栃木名物のゆば料理と日光の旬野菜を使った和食会席が自慢。温泉街の散策もでき、ファミリーからカップルまで幅広い旅行者に長く愛されている実力派の宿。',
        price: '2食付き 16,000円〜',
        image: './hotels/hoterukinugawagyoen.png',
        tags: ['鬼怒川渓谷望む露天風呂', 'アルカリ単純泉', 'ゆば料理・日光旬野菜'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 塩原温泉郷（栃木）=====
    {
        id: 'h-tochigi-4-1',
        onsen_id: 'o-tochigi-4',
        name: '湯守 田中屋',
        prefecture: 'tochigi',
        type: '老舗温泉旅館',
        description: '塩原十一湯の中でも濃度の高い硫黄泉を源泉かけ流しで提供する、温泉ファンが必ず訪れると評判の宿。飲泉所も備え、硫黄の香り漂う湯を体の内外から楽しめる。渓谷を望む囲炉裏焼きのダイニングでは、那須野ヶ原牛・三元豚・富山港直送の鮮魚を炭火で焼き上げ、地の恵みを余すところなく堪能できる。渓谷露天風呂からの眺めも口コミで高く評価されている。',
        price: '2食付き 22,000円〜',
        image: './hotels/yumoritanakaya.png',
        tags: ['硫黄泉かけ流し', '囲炉裏焼き料理', '渓谷露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-4-2',
        onsen_id: 'o-tochigi-4',
        name: '明賀屋本館',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '箒川沿いに佇む塩原温泉郷の代表的旅館。「川の湯」と呼ばれる川底から湧き出す天然の露天風呂が最大の見どころで、箒川の増水と連動して湯量が変化する珍しい体験が楽しめる。重曹泉系の炭酸水素塩泉は肌を滑らかに整える「美人の湯」として知られ、夕食には那須野ヶ原の野菜と箒川の天然鮎、塩原産のとちおとめいちごを使ったデザートが旅の彩りを添える。',
        price: '2食付き 20,000円〜',
        image: './hotels/myougayahonkan.png',
        tags: ['川底湧出の天然露天風呂', '炭酸水素塩泉の美人の湯', '箒川天然鮎料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-4-3',
        onsen_id: 'o-tochigi-4',
        name: '松楓楼 松屋',
        prefecture: 'tochigi',
        type: '温泉旅館',
        description: '塩原温泉郷の箒川沿いに佇む眺望自慢の旅館で、全23室の内13室が露天風呂付き客室という充実ぶり。塩原の代表的な泉質である重曹泉系の炭酸水素塩泉は「美人の湯」として名高く、湯上りの肌のなめらかさが好評。旬の地場野菜と那須の山の幸を組み合わせた滋味深い和食会席と、渓谷の四季を映す景色が相まって、女性グループや夫婦旅行に根強い人気がある。',
        price: '2食付き 18,000円〜',
        image: './hotels/matsumomijiroumatsuya.png',
        tags: ['露天風呂付き客室多数', '炭酸水素塩泉', '渓谷眺望'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯西川温泉（栃木）=====
    {
        id: 'h-tochigi-5-1',
        onsen_id: 'o-tochigi-5',
        name: '湯西川温泉 本家伴久',
        prefecture: 'tochigi',
        type: '老舗温泉旅館',
        description: '1666年創業、平家落人の血脈を今に伝える湯西川温泉を代表する老舗宿。全室が清流・湯西川沿いに面し、かずら橋を渡った先の平家隠れ館ダイニングで供される囲炉裏炭火の創作会席が圧巻。弱アルカリ性単純泉の源泉かけ流し露天風呂は渓流の音色に包まれ、冬の雪かまくら期間は幻想的なライトアップの中で湯浴みを楽しめる独自の体験が人気を集める。',
        price: '2食付き 28,000円〜',
        image: './hotels/yunishikawaonsenhonkehankyuu.png',
        tags: ['1666年創業', 'かずら橋・平家屋敷ダイニング', '渓流露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-5-2',
        onsen_id: 'o-tochigi-5',
        name: '桓武平氏ゆかりの宿 揚羽',
        prefecture: 'tochigi',
        type: '歴史的温泉旅館',
        description: '享保3年（1718年）創業、桓武平氏の流れを38代にわたり継ぐ由緒ある宿。毎分319リットルという豊富な湧出量を誇る弱アルカリ性単純泉は24時間十種類の風呂めぐりが可��で、テレビ東京「アド街ック天国」温泉ランキング全国第1位に輝いた名湯。囲炉裏を囲む秘伝のかまど料理と、熊肉・鹿肉を使った平家武家料理が歴史好きや温泉通を虜にする。',
        price: '2食付き 25,000円〜',
        image: './hotels/kanmuheishiyukarinoyadoageha.png',
        tags: ['1718年創業の平家旅館', '十種の源泉風呂めぐり', 'かまど武家料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tochigi-5-3',
        onsen_id: 'o-tochigi-5',
        name: '上屋敷 平の高房',
        prefecture: 'tochigi',
        type: '秘湯旅館',
        description: '日本秘湯を守る会の会員宿で、弱アルカリ性単純泉の源泉掛け流しを満喫できる山深い秘境の宿。全室が平家屋敷の趣を持つ木造建築で、清流・湯西川の音色に包まれた野趣あふれる露天風呂が心を解放する。関東随一と評判の囲炉裏焼き料理は地元の山の幸と渓流の岩魚が主役で、炭火の香りとともに素朴な旨さが五感を満たす。冬の深雪の中での湯浴みが秘湯ファンを魅了してやまない。',
        price: '2食付き 22,000円〜',
        image: './hotels/kamiyashikitairanotakafusa.png',
        tags: ['日本秘湯を守る会', '囲炉裏焼き料理', '弱アルカリ単純泉'],
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
        name: '万座プリンスホテル',
        prefecture: 'gunma',
        type: '高級リゾートホテル',
        description: '標高1,800mの高原に佇む万座温泉のランドマーク的存在。温泉総選挙「秘湯・名湯部門」2年連続第1位に輝いた日本屈指の硫黄泉を、絶景の展望露天風呂でかけ流しにより楽しめる。白濁した乳白色の湯は硫黄含有量が国内最高水準で、湯上り後の肌のすべすべ感が格別。嬬恋高原野菜や上州牛を使ったホテルブッフェも人気が高く、冬はスキーとの組み合わせ利用が定番。',
        price: '2食付き 25,000円〜',
        image: './hotels/manzapurinsuhoteru.png',
        tags: ['国内最高水準の硫黄泉', '標高1800mの露天風呂', 'スキーリゾート隣接'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-3-2',
        onsen_id: 'o-gunma-3',
        name: '万座ホテルジュラク',
        prefecture: 'gunma',
        type: '温泉リゾートホテル',
        description: '自家占有源泉「法性の湯」を持つ宿で、乳白色の硫黄泉を国内トップクラスの含硫黄量を誇る湯船でオールインクルーシブプランで楽しめる。嬬恋高原野菜をふんだんに使った和洋中バイキングが自由に楽しめ、星空観察会など高原ならではのアクティビティも充実。標高1,800mから満天の星を眺めながらの露天風呂は忘れられない体験となる。',
        price: '2食付き 22,000円〜',
        image: './hotels/manzahoterujuraku.png',
        tags: ['オールインクルーシブ', '自家源泉硫黄泉', '満天の星空露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-3-3',
        onsen_id: 'o-gunma-3',
        name: '万座高原ホテル',
        prefecture: 'gunma',
        type: '温泉ホテル',
        description: '4つの源泉を使った8つの湯船からなる「石庭露天風呂」が代名詞の万座を代表するホテル。泉質や色合い、温度が異なる硫黄泉の湯めぐりが楽しめ、混浴露天風呂も7槽備えるファミリーやカップルに人気の宿。高原で育った嬬恋キャベツを使ったすき焼きや上州牛の朴葉味噌焼きなど群馬らしい料理が食卓を彩る。宿泊者は隣接の万座プリンスホテルの温泉も無料で利用可能。',
        price: '2食付き 18,000円〜',
        image: './hotels/manzakougenhoteru.png',
        tags: ['4源泉8湯船の石庭露天風呂', '混浴露天風呂あり', '2施設温泉無料共有'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 四万温泉（群馬）=====
    {
        id: 'h-gunma-4-1',
        onsen_id: 'o-gunma-4',
        name: '四万温泉 積善館',
        prefecture: 'gunma',
        type: '歴史的温泉旅館',
        description: '元禄7年（1694年）創業、群馬県重要文化財に指定された日本最古の木造湯宿建築を持つ名旅館。千と千尋の神隠しのモデルとも言われる昭和5年建造の「元禄の湯」はアールデコ様式の洋風浴室で、カルシウム・ナトリウム硫酸塩泉を贅沢にかけ流す。日本三大胃腸病の名湯として指定された四万の湯は飲泉もでき、四万川沿いの郷土料理・岩魚の塩焼きや猪鍋が旅情を高める。',
        price: '2食付き 20,000円〜',
        image: './hotels/shimaonsensekizenkan.png',
        tags: ['元禄7年創業・重要文化財', '国内最古の木造湯宿', 'ジブリのモデル地'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-4-2',
        onsen_id: 'o-gunma-4',
        name: '四万温泉 柏屋旅館',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '女性旅行者に絶大な支持を集めるレトロモダンの旅館。全14室に黒電話や骨董の調度品を配した趣ある設えで、無料で何度でも利用できる貸切露天風呂が3槽用意されている。四万の湯はカルシウム・ナトリウム硫酸塩泉の美肌の湯で、清流・四万川の渓流魚を使ったお刺身や、鮎がまるごと一尾入った釜飯など上質な会席料理がもてなしに花を添える。',
        price: '2食付き 25,000円〜',
        image: './hotels/shimaonsenkashiwayaryokan.png',
        tags: ['無料貸切露天風呂3槽', 'レトロモダンな内装', 'カルシウム硫酸塩泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-4-3',
        onsen_id: 'o-gunma-4',
        name: '四万やまぐち館',
        prefecture: 'gunma',
        type: '老舗温泉旅館',
        description: '四万温泉の奥座敷・奥四万の静寂に佇む源泉かけ流し専門の宿。日本三名湯の一つに数えられる四万の塩化物・硫酸塩泉をすべての浴槽で掛け流し、湯の鮮度と温泉力の高さで湯治客を引き付けてきた。地元四万川で獲れた渓流魚や上州産の旬野菜、こんにゃくを使った群馬伝統料理をお部屋食で楽しめ、温泉街の喧騒から離れた静かな滞在が人気。',
        price: '2食付き 18,000円〜',
        image: './hotels/shimayamaguchikan.png',
        tags: ['全浴槽源泉かけ流し', '塩化物・硫酸塩泉', '奥四万の静寂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== みなかみ温泉郷（群馬）=====
    {
        id: 'h-gunma-5-1',
        onsen_id: 'o-gunma-5',
        name: '別邸 仙寿庵',
        prefecture: 'gunma',
        type: '高級温泉旅館',
        description: '谷川岳を望む谷川温泉の高台に佇む、フランスに本部を置くルレ・エ・シャトーにも加盟する国際的な名宿。単純温泉の清らかな湯を露天風呂付き客室でかけ流しにより楽しみながら、谷川連峰の雄大な稜線を独占できる。夕食は地元利根川の鮎・上州牛・水上産の山菜を主役にした懐石料理が絶品で、フランス料理の技法を取り込んだ繊細なプレゼンテーションも格調高い。',
        price: '2食付き 50,000円〜',
        image: './hotels/betteisenjuiori.png',
        tags: ['ルレ・エ・シャトー加盟', '全室露天風呂付き', '谷川岳絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-5-2',
        onsen_id: 'o-gunma-5',
        name: '旅館 たにがわ',
        prefecture: 'gunma',
        type: '老舗温泉旅館',
        description: '水上温泉郷を代表する老舗旅館で、各種予約サイトでみなかみエリアトップクラスの評価を誇る。利根川の清流を望む露天風呂には単純泉の肌に優しいお湯が豊富に注がれ、湯上りの爽快感が格別。夕食は上州牛の石焼きや、みなかみで育った舞茸・山菜の天ぷらをふんだんに使った季節の会席で、地酒・水上の銘酒とともに旅の疲れを癒やす至福のひとときが過ごせる。',
        price: '2食付き 25,000円〜',
        image: './hotels/ryokantanigawa.png',
        tags: ['利根川渓谷の露天風呂', '上州牛石焼き', 'みなかみエリア最高評価'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-5-3',
        onsen_id: 'o-gunma-5',
        name: '金盛館 せゞらぎ',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '温泉遺産にも認定された100%源泉かけ流しの湯にこだわる宿。ベテランの湯守が常時管理する単純泉は常に適温に保たれ、谷川沿い露天風呂・檜風呂・三波石の内湯・貸切風呂と多彩な湯浴みが楽しめる。みなかみ産のなめこ汁や利根川の岩魚塩焼き、上州麦豚の野菜蒸しなど、地産食材にこだわった素朴で滋味ある料理が温泉通や湯治目的の常連客に長く愛されている。',
        price: '2食付き 20,000円〜',
        image: './hotels/kanamorikanseragi.png',
        tags: ['温泉遺産認定の湯', '源泉かけ流し4種の浴場', '湯守の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 老神温泉（群馬）=====
    {
        id: 'h-gunma-6-1',
        onsen_id: 'o-gunma-6',
        name: '老神温泉 東秀館',
        prefecture: 'gunma',
        type: '純和風温泉旅館',
        description: '沼田市利根町に佇む庭園自慢の純和風旅館。自家源泉の単純硫黄泉を男女それぞれ4槽の掛け流し岩風呂で楽しめ、なかでも眺望の良いぬるめの露天「仙涯の湯」は一日中入浴したくなる心地よさ。夕食は完全個室の食事処で利根川源流の岩魚料理や老神産の山菜料理、そして上州牛のしゃぶしゃぶが供され、スタッフの丁寧なおもてなしとともに楽天トラベルで高評価を獲得している。',
        price: '2食付き 16,000円〜',
        image: './hotels/roukamionsentoushuukan.png',
        tags: ['自家源泉硫黄泉', '4槽の岩風呂掛け流し', '個室食事処'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-6-2',
        onsen_id: 'o-gunma-6',
        name: '老神温泉 伍楼閣',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '老神温泉の老舗宿の一つで、皮膚疾患や神経痛に効くと古くから伝わる単純硫黄泉を大浴場と露天風呂でかけ流し提供する。蛇川渓谷に面した渓谷露天風呂は四季の彩りが美しく、秋の紅葉期は特に人気が高い。尾瀬に近い立地を活かし、水芭蕉の季節には尾瀬ハイキングと組み合わせる旅行者も多く、夕食は地元産の山の幸を中心とした会席料理で、猪鍋や舞茸の土瓶蒸しが名物となっている。',
        price: '2食付き 18,000円〜',
        image: './hotels/roukamionsengoroukaku.png',
        tags: ['蛇川渓谷露天風呂', '単純硫黄泉', '尾瀬ハイキング拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gunma-6-3',
        onsen_id: 'o-gunma-6',
        name: '源泉の宿 紫翠亭',
        prefecture: 'gunma',
        type: '温泉旅館',
        description: '静寂な老神温泉の自然環境に溶け込む小規模の湯宿。自家源泉の塩化物・硫黄泉を贅沢にかけ流す大浴場と露天風呂は湯量が豊富で、常に新鮮な温泉が楽しめる。皮膚炎・筋肉痛・冷え性などへの効能が知られる名湯で、リピーターの湯治客が多い。群馬産の野菜と地の山菜を丁寧に調理した家庭的な料理は素朴ながら深い旨みがあり、都会の喧騒を忘れ体を芯から整えたい旅行者に愛されている。',
        price: '2食付き 14,000円〜',
        image: './hotels/gensennoyadomurasakisuitei.png',
        tags: ['塩化物・硫黄泉かけ流し', '湯治向け静養宿', '家庭的な山の幸料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 寄居温泉（埼玉）=====
    {
        id: 'h-saitama-1-1',
        onsen_id: 'o-saitama-1',
        name: '亀の井ホテル 長瀞寄居',
        prefecture: 'saitama',
        type: '温泉リゾートホテル',
        description: '荒川の清流と秩父の山並みに囲まれた埼玉屈指の温泉リゾート。展望露天風呂付きルームや天然温泉の大浴場が整備され、炭酸水素塩泉の柔らかな湯は美肌効果で知られ、長瀞の奇岩・岩畳観光の拠点としても便利。夕食は武州和牛のしゃぶしゃぶや秩父産のわさびを添えたヤマメ料理など、荒川流域の豊かな食材を会席に仕立て提供する。',
        price: '2食付き 18,000円〜',
        image: './hotels/kamenoihoterunagatoroyorii.png',
        tags: ['炭酸水素塩泉の美肌湯', '長瀞岩畳観光拠点', '武州和牛しゃぶしゃぶ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-1-2',
        onsen_id: 'o-saitama-1',
        name: 'かんぽの宿 寄居',
        prefecture: 'saitama',
        type: '温泉ホテル',
        description: '宝登山と荒川に挟まれた緑豊かな立地に建つ温泉ホテル。地下から湧き出るナトリウム塩化物泉は体を芯から温め、湯冷めしにくい効能が特徴。バリアフリー設備も充実し、ファミリーから高齢者まで幅広く利用できる。秩父名産のそばや荒川の鮎、武州豚を使った料理は素朴で温かみがあり、都心から1時間余りの近さながら十分な非日常感を味わえる。',
        price: '2食付き 13,000円〜',
        image: './hotels/kanponoyadoyorii.png',
        tags: ['ナトリウム塩化物泉', 'バリアフリー完備', '秩父のそばと荒川の鮎'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-1-3',
        onsen_id: 'o-saitama-1',
        name: '長瀞温泉 うぐいすの宿 福田屋',
        prefecture: 'saitama',
        type: '温泉旅館',
        description: '荒川沿いの緑豊かな立地に佇む、寄居・長瀞エリアの老舗温泉旅館。炭酸水素塩泉の美人の湯を大浴場と露天風呂でのんびり楽しめ、秩父連山を望む絶景も魅力。夕食は武州和牛のすき焼き・荒川で獲れた天然鮎・秩父山菜の天ぷらなど地元食材を贅沢に盛り込んだ会席料理で、長瀞ライン下りや宝登山観光を組み合わせた旅の宿として根強い人気を誇る。',
        price: '2食付き 15,000円〜',
        image: './hotels/nagatoroonsenuguisunoyadofukudaya.png',
        tags: ['炭酸水素塩泉', '武州和牛すき焼き', '長瀞ライン下り拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 秩父温泉（埼玉）=====
    {
        id: 'h-saitama-2-1',
        onsen_id: 'o-saitama-2',
        name: 'ちちぶ温泉 はなのや',
        prefecture: 'saitama',
        type: '高級温泉旅館',
        description: 'テレビ東京「アド街ック天国」秩父温泉郷第1位に選ばれ、埼玉おもてなし大賞特別賞を2年連続受賞した実力派の宿。全室露天風呂付き客室を誇り、秩父の山里で湧出する炭酸水素塩泉の柔らかな湯を独り占めできる贅沢さが売り。夕食は秩父産の旬野菜と武州和牛のしゃぶしゃぶ、清流で育った渓流魚の会席料理が主役で、大人の隠れ家的な静寂の中で至高のひとときを過ごせる。',
        price: '2食付き 28,000円〜',
        image: './hotels/chichibuonsenhananoya.png',
        tags: ['全室露天風呂付き', '炭酸水素塩泉', 'アド街ック天国1位'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-2-2',
        onsen_id: 'o-saitama-2',
        name: 'NIPPONIA 秩父 門前町',
        prefecture: 'saitama',
        type: '古民家リノベーションホテル',
        description: '大正・昭和初期の歴史的建物を丁寧にリノベーションした、秩父の門前町に佇む個性派ホテル。秩父神社の門前という立地を活かし、秩父礼所巡りや夜の屋台観光の拠点として人気。地元食材を使ったフレンチベースの料理に秩父の地酒「武甲正宗」が添えられる夕食は評判が高い。秩父で古くから湧く単純泉の温泉で旅の疲れを癒やし、昭和レトロと現代デザインが融合した空間での滞在は特別な思い出となる。',
        price: '2食付き 25,000円〜',
        image: './hotels/nipponiachichibumonzenmachi.png',
        tags: ['古民家リノベーション', '秩父の地酒と地産フレンチ', '秩父神社門前'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-2-3',
        onsen_id: 'o-saitama-2',
        name: '秩父温泉 満願の湯',
        prefecture: 'saitama',
        type: '温泉旅館',
        description: '秩父三十四ヵ所霊場巡礼の宿泊地としても知られる、秩父の山深くに佇む温泉宿。地下から湧き出るナトリウム炭酸水素塩泉は「秩父美人の湯」とも呼ばれ、湯上りの肌のなめらかさが際立つ。夕食は猪の味噌仕立て・秩父産の蕎麦・荒川の鮎料理など秩父の山の幸と川の幸を盛り込んだ郷土会席で、秩父の厳かな自然と山岳信仰の空気の中で心身ともに整う滞在が楽しめる。',
        price: '2食付き 15,000円〜',
        image: './hotels/chichibuonsenmangannoyu.png',
        tags: ['ナトリウム炭酸水素塩泉', '霊場巡礼の宿', '猪鍋・鮎料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長瀞温泉（埼玉）=====
    {
        id: 'h-saitama-3-1',
        onsen_id: 'o-saitama-3',
        name: '長瀞温泉 花のおもてなし 長生館',
        prefecture: 'saitama',
        type: '老舗温泉旅館',
        description: '大正元年（1912年）創業、長瀞観光の歴史とともに歩む由緒ある老舗旅館。長瀞渓谷の岩畳と荒川の清流を望む庭園露天風呂では炭酸水素塩泉の美肌の湯を楽しめる。夕食は荒川で育った天然鮎の塩焼きと武州和牛のすき焼き、秩父産の山菜を織り交ぜた旬の会席料理で、楽天トラベルゴールドアワード受賞の実績が示す通り、おもてなしの質の高さも随一。',
        price: '2食付き 18,000円〜',
        image: './hotels/nagatoroonsenhananoomotenashichouseikan.png',
        tags: ['大正元年創業の老舗', '岩畳を望む庭園露天風呂', '楽天ゴールドアワード受賞'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-3-2',
        onsen_id: 'o-saitama-3',
        name: '花湯別邸',
        prefecture: 'saitama',
        type: '高級温泉旅館',
        description: '荒川に面した大人向け隠れ宿。オールインクルーシブスタイルで、宿泊料金に食事・アルコールを含む飲み放題・岩盤浴が含まれる充実ぶり。長瀞の地下から湧く炭酸水素塩泉の露天風呂では荒川の流れを眺めながら湯浴みができ、夕食は秩父産「武州和牛」を主役にした創作フレンチ懐石で、大人がゆっくりと向き合える食と湯の体験を提供する。',
        price: '2食付き 30,000円〜',
        image: './hotels/hanayubettei.png',
        tags: ['オー���インクルーシブ', '荒川渓流ビューの露天風呂', '武州和牛フレンチ懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saitama-3-3',
        onsen_id: 'o-saitama-3',
        name: '長瀞温泉 ホテル龍勢',
        prefecture: 'saitama',
        type: '温泉ホテル',
        description: '長瀞ライン下りの出発地に近い便利な立地に建つ温泉ホテル。秩父の地下深部から湧き出るナトリウム塩化物泉を大浴場と露天風呂で提供し、湯冷めしにくい効能が旅の疲れを癒やす。長瀞名物の天然氷を使ったかき氷や荒川の鮎の塩焼き、秩父の郷土料理「みそポテト」など地域の食文化を取り入れた料理が旅の楽しみを増してくれる。長瀞岩畳や宝登山神社の観光と組み合わせやすい拠点として家族連れにも人気。',
        price: '2食付き 14,000円〜',
        image: './hotels/nagatoroonsenhoteruryuusei.png',
        tags: ['ナトリウム塩化物泉', '長瀞ラインくだり拠点', '天然氷かき氷と秩父郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 犬吠埼温泉（千葉）=====
    {
        id: 'h-chiba-1-1',
        onsen_id: 'o-chiba-1',
        name: '犬吠埼観光ホテル',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '全室オーシャンビューで、太平洋を望む露天風呂は関東最東端の日の出を湯船から迎えるという唯一無二の体験が楽しめる。銚子沖で揚がったキンメダイや伊勢海老を主役にした豪華な房総会席は、銚子エリアNo.1の評価を裏付ける充実ぶり。銚子電鉄・犬吠駅から無料送迎で約3分とアクセスも良好で、初日の出観光の宿としても全国から旅行者が訪れる名宿。',
        price: '2食付き 20,000円〜',
        image: './hotels/inubouzakikankouhoteru.png',
        tags: ['全室オーシャンビュー', '関東最東端の初日の出露天風呂', '伊勢海老・キンメダイ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-1-2',
        onsen_id: 'o-chiba-1',
        name: '絶景の宿 犬吠埼ホテル',
        prefecture: 'chiba',
        type: '温泉リゾートホテル',
        description: '白亜の犬吠埼灯台を眼前に望む高台の温泉ホテル。地下1,300mから湧き出る白亜紀の地層由来のナトリウム塩化物泉「黒潮の湯」は温泉総選挙2024関東エリア歴史文化部門第1位に輝いた名湯で、美肌効果が高いとされる。太平洋を一望する展望露天風呂は元旦の初日の出スポットとしても名高く、銚子名産のキンメダイ煮付けやさんが焼きなど地魚料理も充実している。',
        price: '2食付き 22,000円〜',
        image: './hotels/zekkeinoyadoinubouzakihoteru.png',
        tags: ['地下1300mの塩化物泉', '犬吠埼灯台眺望', '温泉総選挙関東第1位'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-1-3',
        onsen_id: 'o-chiba-1',
        name: '別邸 海と森',
        prefecture: 'chiba',
        type: '高級リゾート旅館',
        description: 'かつて皇族の別邸があった由緒ある地に建つ、全室オーシャンビューを誇る小規模高級宿。プライベート感の高いヴィラとホテル棟に分かれ、それぞれに太平洋の雄大な景色と犬吠埼のナトリウム塩化物泉の湯浴みが楽しめる。夕食は銚子港直送の地魚を使った創作会席で、伊勢海老・アワビ・ヒラメなど房総の海の恵みをふんだんに使った料理が記念日旅行にふさわしい格調を演出する。',
        price: '2食付き 45,000円〜',
        image: './hotels/betteiumitomori.png',
        tags: ['皇族ゆかりの地の高級宿', '全室オーシャンビュー', '銚子直送地魚の創作会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 鴨川温泉（千葉）=====
    {
        id: 'h-chiba-2-1',
        onsen_id: 'o-chiba-2',
        name: '鴨川温泉 璃庵',
        prefecture: 'chiba',
        type: '高級離れ旅館',
        description: '房総屈指の景勝地・太海の海辺に佇む、1日10組限定の全室離れ客室宿。全室に露天風呂と内湯を備え、ウッドデッキから広がるインフィニティビューで太平洋を独占できる。鴨川温泉のナトリウム塩化物泉は体を温め潤す美肌の湯で知られ、夕食には外房の伊勢海老や地鯛など豊富な地魚を使った豪華な創作懐石が供される。記念日やハネムーンに特に支持が高い宿。',
        price: '2食付き 50,000円〜',
        image: './hotels/kamogawaonsenriiori.png',
        tags: ['全室離れ客室・インフィニティ海景', 'ナトリウム塩化物泉', '外房伊勢海老の創作懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-2-2',
        onsen_id: 'o-chiba-2',
        name: '鴨川グランドホテル',
        prefecture: 'chiba',
        type: '温泉リゾートホテル',
        description: '外房の太平洋を一望する鴨川温泉の代表的なリゾートホテル。広大な大浴場と屋外プールを備え、ナトリウム塩化物泉の豊富な湯を大露天風呂でたっぷりと楽しめる。夕食は外房の活伊勢海老・鮑・地鯛など豪快な海の幸を主役にしたバイキングスタイルで提供され、千倉や鴨川の新鮮な食材の質の高さが際立つ。家族旅行やグループ旅行に最適な施設と料理の充実ぶりが高く評価されている。',
        price: '2食付き 22,000円〜',
        image: './hotels/kamogawagurandohoteru.png',
        tags: ['大型温泉リゾート', 'ナトリウム塩化物泉', '外房海鮮バイキング'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-2-3',
        onsen_id: 'o-chiba-2',
        name: 'オーシャン プラザ 仙酔閣',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '鴨川市の太平洋に面したオーシャンビューの温泉旅館。地下から湧くナトリウム塩化物泉を露天風呂で楽しみながら、外房の波音を聞く湯浴みが格別な解放感をもたらす。夕食は鴨川沖の伊勢海老・アワビ・地鯛を中心とした房総会席で、漁師から直接仕入れた鮮魚の活造りが名物。日帰り温泉・レストランも人気で、鴨川シーワールドや棚田観光と組み合わせる旅行者も多い。',
        price: '2食付き 18,000円〜',
        image: './hotels/ooshanpurazasensuikaku.png',
        tags: ['オーシャンビューの露天風呂', '塩化物泉', '鴨川直送の伊勢海老活造り'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 勝浦温泉（千葉）=====
    {
        id: 'h-chiba-3-1',
        onsen_id: 'o-chiba-3',
        name: '三日月シーパークホテル勝浦',
        prefecture: 'chiba',
        type: '大型温泉リゾートホテル',
        description: '風光明媚な勝浦湾に面した大型リゾートホテルで、地上40mから太平洋を一望できる展望大浴場の天然温泉が圧巻。30種類以上のスパメニューを擁するスパドームは首都圏屈指の施設で、勝浦沖で獲れる旬の地魚60種超を揃えたオープンキッチンバイキングも評判が高い。ナトリウム塩化物泉の湯は肌をしっとりと潤し、ボウリングやカラオケなど充実のアミューズメントで家族全員が楽しめる。',
        price: '2食付き 18,000円〜',
        image: './hotels/mikazukishiipaakuhoterukatsuura.png',
        tags: ['地上40mの展望大浴場', '大型スパドーム施設', '海鮮60種バイキング'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-3-2',
        onsen_id: 'o-chiba-3',
        name: '勝浦ヒルトップホテル（ミレーニア勝浦）',
        prefecture: 'chiba',
        type: '温泉リゾートホテル',
        description: '勝浦湾を一望する高台に建つリゾート感あふれる温泉ホテル。信楽焼の湯船を備えた貸切露天風呂は特に人気が高く、プライベートな湯浴みを好む旅行者に重宝されている。勝浦近海で揚がる地魚を中心にした房総会席料理は仕入れたての新鮮さが自慢で、塩化物泉の湯上りに楽しむ金目鯛や鮑の料理は格別の旨さ。勝浦朝市や勝浦タンタンメンなど周辺の食文化も併せて楽しめる。',
        price: '2食付き 22,000円〜',
        image: './hotels/katsuurahirutoppuhoterumireeniakatsuura.png',
        tags: ['信楽焼の貸切露天風呂', '勝浦湾の絶景', '房総地魚の鮮魚会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-3-3',
        onsen_id: 'o-chiba-3',
        name: '南房総 勝浦 翠海',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '勝浦湾を眼下に望む絶景オーシャンビューの宿で、チェックアウト11時以降というゆったりした滞在スタイルが人気の秘密。地下から湧き出るナトリウム塩化物泉「美人の湯」は肌をなめらかに整える効能で知られ、朝の湯浴みも十分楽しめる時間設定が評判。夕食は近港から直送される磯料理を主体にした会席で、活伊勢海老の踊り焼きや金目鯛の煮付けなど房総の海の幸を存分に味わえる。',
        price: '2食付き 20,000円〜',
        image: './hotels/minamibousoukatsuurasuiumi.png',
        tags: ['チェックアウト11時以降', '塩化物泉の美人の湯', '活伊勢海老の磯料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 館山温泉（千葉）=====
    {
        id: 'h-chiba-4-1',
        onsen_id: 'o-chiba-4',
        name: '館山温泉 ホテル南海荘',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '鏡ヶ浦とも呼ばれる穏やかな館山湾に面した情緒豊かな老舗旅館。館山の地下深部から湧き出るナトリウム塩化物泉は肌なめらかな美肌の湯として知られ、海を望む露天風呂での湯浴みは格別。自前の船と定置網で獲った鮮魚を厨房で仕立てる海鮮料理が自慢で、伊勢海老・鮑・サザエなど南房総の豊かな海の幸を余すところなく堪能できる宿として高評価を獲得している。',
        price: '2食付き 18,000円〜',
        image: './hotels/tateyamaonsenhoterunankaisou.png',
        tags: ['館山湾オーシャンビュー', 'ナトリウム塩化物泉', '自前漁船の地魚料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-4-2',
        onsen_id: 'o-chiba-4',
        name: '休暇村 館山',
        prefecture: 'chiba',
        type: '温泉リゾート',
        description: '南房総国定公園内の自然豊かなロケーションに建つ温泉リゾート施設。館山の地熱から湧出するナトリウム塩化物・炭酸水素塩泉を大浴場と露天風呂で楽しめ、相模湾と富士山を一望できる展望風呂は晴れた日の眺望が格別。夕食は館山沖で獲れた活魚料理と南房総の温暖な気候で育てた野菜をふんだんに使ったバイキングスタイルで提供し、ハイキングや磯釣りなどアクティビティも充実している。',
        price: '2食付き 14,000円〜',
        image: './hotels/kyuukamuratateyama.png',
        tags: ['南房総国定公園内', '塩化物・炭酸水素塩泉', '富士山展望露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-chiba-4-3',
        onsen_id: 'o-chiba-4',
        name: '渚の湯 館山 富士見館',
        prefecture: 'chiba',
        type: '温泉旅館',
        description: '館山湾と富士山を同時に望める贅沢なロケーションの温泉旅館。相模灘に沈む夕日と遠くに浮かぶ富士のシルエットを貸切露天風呂から独占できる特別な体験が人気を集める。館山の塩化物泉は海沿いの立地を反映した塩分豊かな湯で体を芯から温め、湯上りの温かさが長続きする。南房総の新鮮な魚介を使ったなめろうや鯛の塩焼き、名産のビワを使ったデザートなど千葉らしい食の豊かさも堪能できる。',
        price: '2食付き 16,000円〜',
        image: './hotels/nagisanoyutateyamafujimikan.png',
        tags: ['富士山と館山湾の絶景露天風呂', '塩化物泉', 'なめろうと南房総郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 奥多摩温泉（東京）=====
    {
        id: 'h-tokyo-1-1',
        onsen_id: 'o-tokyo-1',
        name: '奥多摩の風 はとのす荘',
        prefecture: 'tokyo',
        type: '温泉リゾート旅館',
        description: '都心から最短80分でアクセスできる鳩ノ巣渓谷に佇む温泉宿。全室35㎡以上のツインルームから鳩ノ巣渓谷を見下ろせ、2種類の天然単純泉を露天風呂でかけ流しにより楽しめる。夕食は多摩産の食材をふんだんに使ったお箸で食べられる創作イタリアンが評判で、東京の秘境・奥多摩の清流と緑に包まれた滞在は都会の喧騒を完全に忘れさせてくれる。',
        price: '2食付き 20,000円〜',
        image: './hotels/okutamanokazehatonosusou.png',
        tags: ['鳩ノ巣渓谷眺望', '2種の単純泉かけ流し', '多摩産食材の創作イタリアン'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-1-2',
        onsen_id: 'o-tokyo-1',
        name: '清流の宿 おくたま路',
        prefecture: 'tokyo',
        type: '温泉旅館',
        description: '多摩川の清流が敷地内を流れる、首都圏とは思えない豊かな自然に囲まれた温泉旅館。川の流れを眺望できる風情ある客室は、カップルや夫婦のロマンティックな旅に最適。奥多摩の単純弱アルカリ泉は肌に優しく、透明感のある湯が疲れた体を癒やす。春は山菜の天ぷら・秋は松茸ご飯など、四季折々の奥多摩の山の幸と多摩川で育った渓流魚料理を中心にした旬の会席が、豊かな自然とともに旅行者をもてなす。',
        price: '2食付き 16,000円〜',
        image: './hotels/seiryuunoyadookutamamichi.png',
        tags: ['多摩川清流敷地内', '弱アルカリ単純泉', '渓流魚と山菜の旬会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-1-3',
        onsen_id: 'o-tokyo-1',
        name: '三河屋旅館',
        prefecture: 'tokyo',
        type: '老舗温泉旅館',
        description: '奥多摩の深い山懐に抱かれた、多摩川沿いの静かな老舗温泉旅館。川のせせらぎを聞きながら入る単純泉の露天風呂は野趣あふれ、透明な湯が体の疲れを芯から溶かす。日原鍾乳洞からも近く、観光拠点としても人気が高い。夕食は多摩川で育った山女魚・岩魚の塩焼きや骨酒、山で採れた天然きのこの土瓶蒸しなど、都内では滅多に味わえない山河の幸を丁寧に調理した料理が旅の記憶に深く刻まれる。',
        price: '2食付き 14,000円〜',
        image: './hotels/mikawayaryokan.png',
        tags: ['多摩川沿いの露天風呂', '単純泉かけ流し', '山女魚・岩魚の郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 大島温泉（東京）=====
    {
        id: 'h-tokyo-2-1',
        onsen_id: 'o-tokyo-2',
        name: '大島温泉ホテル',
        prefecture: 'tokyo',
        type: '温泉リゾートホテル',
        description: '伊豆大島・三原山七合目に位置する三原山温泉の一軒宿。地下300mから高温で湧き出す単純温泉を男女別の大浴場と溶岩大地を望む露天風呂で源泉かけ流しにより楽しめる。1986年の噴火で流れた溶岩流や広大な三原砂漠を眼前に見渡す圧倒的な絶景は大島でしか体験できない。名物は椿油を使った「椿フォンデュ料理」と、近海で獲れた地魚の煮付けが織り成す大島会席。',
        price: '2食付き 20,000円〜',
        image: './hotels/ooshimaonsenhoteru.png',
        tags: ['三原山溶岩大地を望む露天風呂', '単純泉かけ流し', '椿油フォンデュ料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-2-2',
        onsen_id: 'o-tokyo-2',
        name: 'ホテル白岩',
        prefecture: 'tokyo',
        type: '温泉ホテル',
        description: '三原山と伊豆七島・伊豆半島・富士山を一望できる眺望に優れた大島の温泉ホテル。三原山大噴火で湧出したナトリウム塩化物泉を露天風呂で楽しみながら、椿の花が咲き誇る春の絶景も堪能できる。近海で水揚げされたメダイやキンメダイ・トビウオなど大島ならではの地魚を使った島郷土料理が宿泊者を魅了する宿で、大島観光の定番として長く親しまれている。',
        price: '2食付き 16,000円〜',
        image: './hotels/hoterushiroiwa.png',
        tags: ['富士山・伊豆七島の大パノラマ', '塩化物泉', '大島地魚の島料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-2-3',
        onsen_id: 'o-tokyo-2',
        name: 'ホテル赤門',
        prefecture: 'tokyo',
        type: '温泉旅館',
        description: '源為朝ゆかりの地に湧く温泉「為朝之湯」を楽しめる、大島の歴史と文化を伝える和風温泉宿。敷地内に湧く源泉の単純温泉を24時間入浴できる大浴場と露天風呂で楽しめ、元町港から徒歩8分という利便性も高い。夕食は大島近海で水揚げされたトビウオのたたきや金目鯛の煮付け、大島名産の明日葉の天ぷらなど島ならではの食材を活かした郷土料理が中心で、大島の独自の食文化を存分に楽しめる。',
        price: '2食付き 14,000円〜',
        image: './hotels/hoteruakamon.png',
        tags: ['為朝之湯・源泉かけ流し', '大島明日葉と地魚の島料理', '元町港徒歩圏'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 八丈島温泉（東京）=====
    {
        id: 'h-tokyo-3-1',
        onsen_id: 'o-tokyo-3',
        name: 'リードパークリゾート八丈島',
        prefecture: 'tokyo',
        type: '温泉リゾートホテル',
        description: '赤い屋根がトレードマークの八丈島を代表するリゾートホテル。八丈富士と太平洋を一望する展望露天風呂では、八丈島の火山性ナトリウム塩化物泉を楽しめる。直営牧場のジャージー牛乳を使ったミルク鍋や、近海で水揚げされるアカサバの島料理、無農薬野菜の天ぷらが評判。屋上では天体ガイドによる星空観賞会を開催し、人工光の少ない八丈島の満天の星空と温泉の組み合わせが忘れられない体験となる。',
        price: '2食付き 22,000円〜',
        image: './hotels/riidopaakurizootohachijoushima.png',
        tags: ['八丈富士望む展望露天風呂', 'ジャージー牛乳直営牧場', '天体ガイドの星空観賞会'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-3-2',
        onsen_id: 'o-tokyo-3',
        name: '八丈ビューホテル',
        prefecture: 'tokyo',
        type: '温泉ホテル',
        description: '八丈島空港にほど近い立地に建ち、島の全景と太平洋を大パノラマで望める温泉ホテル。��丈島の塩化物泉を大浴場と展望露天風呂で楽しみながら、亜熱帯性の植物に囲まれた南国ムードの庭園を散策できる。夕食は八丈島近海の島寿司（ヅケ仕立ての地魚寿司）やアカコッコ（アカモク海藻）の料理など、本土では体験できない八丈島独自の食文化を中心にした会席料理で旅の醍醐味を演出する。',
        price: '2食付き 18,000円〜',
        image: './hotels/hachijoubyuuhoteru.png',
        tags: ['空港近くの便利な立地', '塩化物泉の展望露天風呂', '八丈島独自の島寿司料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokyo-3-3',
        onsen_id: 'o-tokyo-3',
        name: '八丈島 やすらぎの湯 町営温泉旅館',
        prefecture: 'tokyo',
        type: '温泉旅館',
        description: '八丈島の自然豊かな末吉地区に位置する、島の地熱から湧き出るナトリウム塩化物泉を楽しめる温泉旅館。みはらしの湯で有名な絶景ポイントにほど近い高台に建ち、八丈富士と海の大パノラマが広がる露天風呂が人気。夕食は島特産の明日葉をふんだんに使ったヘルシーな島料理と、近海で漁獲されたアカサバの地魚料理が中心で、島の素朴な食文化と自然の中でのんびりとした時間を過ごせる。',
        price: '2食付き 15,000円〜',
        image: './hotels/hachijoushimayasuraginoyumachieionsenryokan.png',
        tags: ['末吉地区の絶景露天風呂', '塩化物泉', '明日葉料理とアカサバの島グルメ'],
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
        name: '石葉',
        prefecture: 'kanagawa',
        type: '高級温泉旅館',
        description: 'わずか6室だけの小さな隠れ家旅館として知られる湯河原温泉の高級旅館。カルシウム・ナトリウム塩化物泉の源泉かけ流しを全室に露天風呂として備え、湯河原の渓谷美に包まれた静寂の中で五感を解放できる。夕食は相模湾の旬魚・伊豆の食材を使った創作懐石料理が芸術的な盛り付けで提供され、自然と一体��した建築デザインとともに各旅行メディアで最高評価を獲得し続けている。',
        price: '2食付き 70,000円〜',
        image: './hotels/sekiyou.png',
        tags: ['6室限定の隠れ家旅館', '全室源泉かけ流し露天風呂', '相模湾の旬魚創作懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-2-2',
        onsen_id: 'o-kanagawa-2',
        name: '料亭旅館 百花園',
        prefecture: 'kanagawa',
        type: '料亭旅館',
        description: '湯河原温泉の老舗料亭旅館として長年の旅人に愛されてきた宿。カルシウム・ナトリウム塩化物泉の源泉掛け流し温泉を内湯と露天風呂で楽しめ、湯河原の清流を望む庭園が旅人の心を落ち着かせる。夕食は地元相模湾の旬魚・湯河原産の柑橘・伊豆の山の幸を使った料亭仕立ての懐石料理が季節ごとの食材の移ろいとともに旅の品格を高める。',
        price: '2食付き 35,000円〜',
        image: './hotels/ryouteiryokanhyakkasono.png',
        tags: ['源泉掛け流し', '相模湾の旬魚料亭懐石', '湯河原の庭園'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-2-3',
        onsen_id: 'o-kanagawa-2',
        name: '湯河原温泉 こごめの宿',
        prefecture: 'kanagawa',
        type: '温泉旅館',
        description: '湯河原温泉の静かな山麓に佇む心地よい温泉旅館。カルシウム・ナトリウム塩化物泉の美肌の湯を源泉掛け流しで楽しめ、湯河原の豊かな自然の中で日常の疲れを深く癒せる。夕食は相模湾の地魚・湯河原の柑橘・箱根西麓の野菜を使った素朴な会席料理が女将のもてなしとともに提供され、湯河原の温泉文化と相模湾の食材が融合した旅の充実感を高める。',
        price: '2食付き 22,000円〜',
        image: './hotels/yugawaraonsenkogomenoyado.png',
        tags: ['源泉掛け流しの美肌湯', '相模湾の地魚料理', '湯河原の自然'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 強羅温泉（神奈川）=====
    {
        id: 'h-kanagawa-3-1',
        onsen_id: 'o-kanagawa-3',
        name: '懐石旅庵 阿しか里',
        prefecture: 'kanagawa',
        type: '高級温泉旅館',
        description: '2,000坪の広大な敷地にわずか17室だけを構える隠れ家的な高級旅館。全客室が源泉かけ流しの露天風呂付きで、奈良時代から万葉集に詠まれた由緒ある湯河原のカルシウム・ナトリウム塩化物泉を独占できる。ミシュランガイドに掲載される懐石料理は相模湾の鮮魚と湯河原近郊の柑橘類を組み合わせた独創的な品々で、数寄屋造りの空間での格調あるおもてなしが各予約サイトで最高評価を獲得している。',
        price: '2食付き 55,000円〜',
        image: './hotels/kaisekitabiioriashikasato.png',
        tags: ['17室限定の全室露天風呂付き', '塩化物泉かけ流し', 'ミシュランガイド掲載の懐石料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001935%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001935%252F' }
    },

    // ===== 鶴巻温泉（神奈川）=====
    {
        id: 'h-kanagawa-4-1',
        onsen_id: 'o-kanagawa-4',
        name: '鶴巻温泉 元湯陣屋',
        prefecture: 'kanagawa',
        type: '老舗高級旅館',
        description: '大正7年（1918年）、三井財閥の別荘として創設された丹沢山麓の名旅館。将棋・囲碁300以上のタイトル戦の舞台となった歴史ある宿で、源氏物語の登場人物から名を取った全16室はすべて異なる意匠を持ち、露天風呂付き。カルシウム含有量世界有数とされる鶴巻温泉の塩化物・硫酸塩泉は美肌と引き締め効果で知られ、旬食材を使った会席料理は格調の高さで知られる。',
        price: '2食付き 60,000円〜',
        image: './hotels/tsurumakionsenmotoyujinya.png',
        tags: ['大正7年創業・三井別荘起源', '全室露天風呂付き16室', '棋士の聖地・タイトル戦の舞台'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-4-2',
        onsen_id: 'o-kanagawa-4',
        name: '丹沢の宿 陣屋別邸',
        prefecture: 'kanagawa',
        type: '高級温泉旅館',
        description: '元湯陣屋に連なる別邸で、丹沢の緑に包まれた全室スイートクラスの客室を擁する上質な宿。カルシウム塩化物泉の源泉かけ流しを備えた客室露天風呂では丹沢の山並みを望みながらの湯浴みが楽しめる。丹沢山麓で育った相模牛と地元秦野産の有機野菜を主役にした懐石コースは、素材の良さを引き出す職人技が光り、都心から小田急線一本でアクセスできる近さと温泉の本格的な上質さを両立した稀有な宿として高い評価を誇る。',
        price: '2食付き 45,000円〜',
        image: './hotels/tanzawanoshukujinyabettei.png',
        tags: ['カルシウム塩化物泉かけ流し', '相模牛と秦野有機野菜の懐石', '小田急線一本でアクセス'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kanagawa-4-3',
        onsen_id: 'o-kanagawa-4',
        name: '陣屋旅館',
        prefecture: 'kanagawa',
        type: '温泉旅館',
        description: '鶴巻温泉駅から徒歩約5分の好立地に建つ、鶴巻温泉の歴史とともに歩む温泉旅館。日本有数のカルシウム含有量を誇る鶴巻の塩化物・硫酸塩泉を大浴場と露天風呂で楽しめ、湯上りの肌の引き締まる感覚が格別。貸切露天風呂も備え、プライベートな湯浴みも可能。夕食は相模湾の地魚と丹沢・秦野の山の幸を組み合わせた和食会席で、首都圏近郊ながら本格的な温泉と旬の食材の組み合わせを求める旅行者に根強い人気がある。',
        price: '2食付き 22,000円〜',
        image: './hotels/jinyaryokan.png',
        tags: ['世界有数のカルシウム塩化物泉', '駅徒歩5分の好立地', '相模湾地魚と丹沢山幸会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 越後湯沢温泉（新潟）=====
    {
        id: 'h-niigata-1-1',
        onsen_id: 'o-niigata-1',
        name: '苗場プリンスホテル',
        prefecture: 'niigata',
        type: '大型リゾートホテル',
        description: '越後湯沢温泉を代表する大型リゾート。単純温泉の柔らかな湯が肌にやさしく、スキーシーズンはゲレンデ直結で利用できる。夕食は越後の地酒とへぎそば、のどぐろの塩焼きを盛り込んだ郷土会席が絶品。広大な大浴場と露天風呂からは苗場山の雄大な景色が望める。',
        price: '2食付き 22,000円〜',
        image: './hotels/naebapurinsuhoteru.png',
        tags: ['スキー場直結', '源泉掛け流し', 'へぎそば会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-1-2',
        onsen_id: 'o-niigata-1',
        name: 'HATAGO井仙',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '越後湯沢駅から徒歩5分の好立地に佇む老舗旅館。アルカリ性単純温泉の美肌の湯は源泉掛け流しで、滑らかな湯触りが評判。夕食は地元食材を活かした越後会席で、魚沼産コシヒカリと雪室熟成の日本酒が旅の疲れを癒す。',
        price: '2食付き 28,000円〜',
        image: './hotels/hatagoisen.png',
        tags: ['駅近', '美肌の湯', '魚沼産コシヒカリ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-1-3',
        onsen_id: 'o-niigata-1',
        name: '越後湯沢温泉 山の湯',
        prefecture: 'niigata',
        type: '湯治旅館',
        description: '越後湯沢の奥座敷に位置するこぢんまりとした純湯治旅館。源泉100％掛け流しのアルカリ性単純温泉は無色透明で肌がすべすべになると評判が高い。山菜たっぷりの素朴な越後料理と、窓いっぱいに広がる谷川岳の雪景色が心を解きほぐす。',
        price: '2食付き 15,000円〜',
        image: './hotels/echigoyuzawaonsenyamanoyu.png',
        tags: ['源泉掛け流し', '湯治', '山菜料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 月岡温泉（新潟）=====
    {
        id: 'h-niigata-2-1',
        onsen_id: 'o-niigata-2',
        name: '月岡温泉 華鳳',
        prefecture: 'niigata',
        type: '大型温泉旅館',
        description: '月岡温泉随一の規模を誇る老舗大型旅館。硫黄を豊富に含む美肌の湯は日本屈指の硫黄泉で、エメラルドグリーンに輝く湯色が特徴的。夕食は村上牛のしゃぶしゃぶと日本海の新鮮な海の幸を組み合わせた豪華会席で、新潟の地酒とともに堪能できる。',
        price: '2食付き 35,000円〜',
        image: './hotels/tsukiokaonsenhanaootori.png',
        tags: ['硫黄泉', '村上牛', 'エメラルドグリーンの湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-2-2',
        onsen_id: 'o-niigata-2',
        name: '針生旅館',
        prefecture: 'niigata',
        type: '純和風旅館',
        description: '月岡温泉の中心部に位置する家族経営の老舗旅館。日本三大美人の湯の一つに数えられる含硫黄ナトリウム塩化物泉は源泉掛け流し。旬の日本海食材を丁寧に仕立てた会席料理と、女将の温かいおもてなしが旅情を高める。',
        price: '2食付き 20,000円〜',
        image: './hotels/haryuuryokan.png',
        tags: ['美人の湯', '家族的おもてなし', '日本海の幸'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-2-3',
        onsen_id: 'o-niigata-2',
        name: '月岡温泉 白玉の湯 泉慶',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '月岡温泉を代表する含硫黄ナトリウム塩化物泉の源泉掛け流し露天風呂を完備した旅館。翡翠色に輝く湯は美肌効果が高く女性に絶大な人気。新潟の銘酒と合わせる日本海のどぐろ炙り会席は格別の美味。',
        price: '2食付き 25,000円〜',
        image: './hotels/tsukiokaonsenshirodamanoyuzenyoshi.png',
        tags: ['硫黄泉露天風呂', 'のどぐろ会席', '美肌効果'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 瀬波温泉（新潟）=====
    {
        id: 'h-niigata-3-1',
        onsen_id: 'o-niigata-3',
        name: '大和屋ホテル',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '日本海を望む高台に立つ瀬波温泉の老舗旅館。ナトリウム塩化物泉の黄金色の湯は「黄金の湯」とも称され、体の芯からじんわり温まる。夕食は村上の伝統料理である塩引き鮭と、荒波で育った新潟の寒ぶり刺身を中心とした会席料理が絶品。',
        price: '2食付き 20,000円〜',
        image: './hotels/yamatoyahoteru.png',
        tags: ['日本海夕日', '塩引き鮭', 'ナトリウム塩化物泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-3-2',
        onsen_id: 'o-niigata-3',
        name: '汐美荘',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '瀬波海岸に面した絶好のロケーションに立つ温泉旅館。日本海に沈む夕日を眺めながら入れる展望露天風呂が名物で、塩分豊富なナトリウム塩化物泉は保温効果が高い。地元・村上の鮭料理と新鮮な海の幸を盛り込んだ夕食は素材の旨みが際立つ。',
        price: '2食付き 18,000円〜',
        image: './hotels/shiobisou.png',
        tags: ['夕日露天風呂', '村上鮭料理', '海岸沿い'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-3-3',
        onsen_id: 'o-niigata-3',
        name: '旅館いしどや',
        prefecture: 'niigata',
        type: '小宿旅館',
        description: '瀬波温泉で数少ない源泉掛け流しの宿。ナトリウム塩化物泉を贅沢に使用した内湯と露天風呂で湯治気分が味わえる。村上産の鮭の十三番料理や笹川流れで採れた天然岩牡蠣など、食の宝庫・下越地方の恵みを凝縮した料理が旅人をもてなす。',
        price: '2食付き 16,000円〜',
        image: './hotels/ryokanishidoya.png',
        tags: ['源泉掛け流し', '天然岩牡蠣', 'こぢんまり旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 岩室温泉（新潟）=====
    {
        id: 'h-niigata-4-1',
        onsen_id: 'o-niigata-4',
        name: '岩室温泉 高島屋',
        prefecture: 'niigata',
        type: '老舗温泉旅館',
        description: '300年以上の歴史を誇る岩室温泉最古の旅館。弥彦山の麓に湧くナトリウム塩化物・硫酸塩泉は保温効果が高く冷え性に好評。新潟平野の地野菜と越後の郷土料理、弥彦産の食材を丁寧に仕上げた会席と日本酒の組み合わせが格別。',
        price: '2食付き 25,000円〜',
        image: './hotels/iwamuroonsentakashimaya.png',
        tags: ['300年の歴史', '弥彦山麓', '越後郷土会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-4-2',
        onsen_id: 'o-niigata-4',
        name: '双葉荘',
        prefecture: 'niigata',
        type: '温泉旅館',
        description: '弥彦神社にほど近い静かな環境に佇む温泉旅館。岩室温泉のナトリウム塩化物泉は肌なじみがよく美肌効果で知られ、源泉掛け流しの内湯と露天風呂で心身を解放できる。旬の日本海食材と越後の地野菜を活かした料理が評判で、弥彦参拝客に長く愛されている。',
        price: '2食付き 18,000円〜',
        image: './hotels/futabasou.png',
        tags: ['弥彦神社近接', '源泉掛け流し', '美肌の湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-niigata-4-3',
        onsen_id: 'o-niigata-4',
        name: '割烹旅館 富士屋',
        prefecture: 'niigata',
        type: '割烹旅館',
        description: '岩室温泉で料理自慢の割烹旅館として知られる老舗。ナトリウム塩化物泉の温泉は美肌効果が高く、湯上がりの肌がしっとりすると女性客に人気。日本海のどぐろ、南蛮エビ、越後もち豚など厳選食材を使った割烹料理は一流板前が腕をふるう。',
        price: '2食付き 30,000円〜',
        image: './hotels/kappouryokanfujiya.png',
        tags: ['割烹料理', 'のどぐろ', '美肌の湯'],
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
        name: '宇奈月温泉 延楽',
        prefecture: 'toyama',
        type: '老舗温泉旅館',
        description: '黒部峡谷の玄関口・宇奈月温泉を代表する老舗旅館。単純硫黄泉の清澄な湯は源泉掛け流しで、無色透明のやわらかな湯触りが特徴。夕食は富山湾の白えびや蛍烏賊の沖漬け、黒部の岩魚を使った山海の珍味が並ぶ豪華な北陸会席が楽しめる。',
        price: '2食付き 28,000円〜',
        image: './hotels/unazukionsenenraku.png',
        tags: ['黒部峡谷徒歩圏', '白えび料理', '単純硫黄泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-1-2',
        onsen_id: 'o-toyama-1',
        name: '黒部・宇奈月温泉 やまのは',
        prefecture: 'toyama',
        type: '温泉旅館',
        description: '黒部川のせせらぎを聞きながら入れる露天風呂が自慢の旅館。単純温泉のやわらかな湯は肌への刺激が少なく万人に好まれる。富山湾の宝石と称される白えびのかき揚げ、ぶりの照り焼き、越中牛のステーキを中心とした夕食が旅の満足度を高める。',
        price: '2食付き 22,000円〜',
        image: './hotels/kurobeunazukionsenyamanoha.png',
        tags: ['渓流露天風呂', '越中牛', '源泉掛け流し'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-1-3',
        onsen_id: 'o-toyama-1',
        name: '宇奈月国際ホテル',
        prefecture: 'toyama',
        type: '温泉ホテル',
        description: '宇奈月温泉の高台に位置し、黒部峡谷の絶景を独り占めできる展望大浴場が名物。アルカリ性単純温泉のpH8.5の美肌の湯で肌がすべすべになると評判。地元漁師直送の新鮮魚介と立山連峰を望む露天風呂の組み合わせが格別の滞在体験を演出する。',
        price: '2食付き 20,000円〜',
        image: './hotels/unazukikokusaihoteru.png',
        tags: ['黒部峡谷絶景', 'アルカリ性美肌湯', '展望露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 庄川温泉郷（富山）=====
    {
        id: 'h-toyama-2-1',
        onsen_id: 'o-toyama-2',
        name: '庄川温泉 ゆめつづり',
        prefecture: 'toyama',
        type: '温泉旅館',
        description: '庄川渓谷に面した閑静な温泉旅館。含重曹食塩泉のとろみある湯は「美人の湯」として知られ、入浴後の肌のしっとり感が際立つ。夕食は砺波平野で採れた旬の地野菜と庄川で育った鮎の塩焼き、富山湾の海の幸を盛り込んだ山里会席が評判を呼んでいる。',
        price: '2食付き 18,000円〜',
        image: './hotels/shougawaonsenyumetsuzuri.png',
        tags: ['美人の湯', '庄川鮎料理', '渓谷沿い'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-2-2',
        onsen_id: 'o-toyama-2',
        name: 'ホテルグリーンパル',
        prefecture: 'toyama',
        type: '温泉ホテル',
        description: '庄川温泉郷の中心に位置するリゾートホテル。重曹を含むアルカリ性の湯は肌への馴染みが良く、男女別の大浴場と露天風呂を完備。砺波平野の田園風景を眺めながら、富山名産のます寿し、白えびフライ、越中牛の鍋料理が味わえる郷土会席が好評。',
        price: '2食付き 16,000円〜',
        image: './hotels/hoteruguriinparu.png',
        tags: ['アルカリ性温泉', 'ます寿司', '砺波平野の景観'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-2-3',
        onsen_id: 'o-toyama-2',
        name: '牧場の家',
        prefecture: 'toyama',
        type: '温泉民宿',
        description: '庄川温泉郷の山間に佇む、農家民宿の温もりが感じられる宿。塩化物泉のよく温まる湯を小さな内湯で独占できる。地元農家直産の朝どれ野菜と自家製みそを使った手料理、庄川の清流で育った岩魚の刺身と塩焼きが疲れた旅人の心と体を癒す。',
        price: '2食付き 12,000円〜',
        image: './hotels/bokujounoie.png',
        tags: ['家庭的な雰囲気', '地産地消料理', '岩魚料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 氷見温泉郷（富山）=====
    {
        id: 'h-toyama-3-1',
        onsen_id: 'o-toyama-3',
        name: '氷見温泉 うみあかり',
        prefecture: 'toyama',
        type: '温泉旅館',
        description: '富山湾を一望する絶景の温泉旅館。ナトリウム塩化物泉の保温性の高い湯は「海辺の美人の湯」として知られ、波音を聞きながらの露天風呂が人気。冬の氷見寒ぶりは全国随一の旨みで、刺身・鍋・照り焼きと多彩な調理で氷見漁港直送の海の幸を堪能できる。',
        price: '2食付き 25,000円〜',
        image: './hotels/himionsenumiakari.png',
        tags: ['氷見寒ぶり', '海一望露天風呂', 'ナトリウム塩化物泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-3-2',
        onsen_id: 'o-toyama-3',
        name: '磯の風 民宿みなと',
        prefecture: 'toyama',
        type: '漁師宿',
        description: '氷見漁港のすぐそばに立つ漁師宿。ナトリウム塩化物泉の温泉は小さな家族風呂ながら源泉掛け流しで、漁師の奥さんが仕切る台所から届く海の幸が圧巻。朝水揚げされたばかりの氷見の魚介を贅沢に使った夕食は、白えび・ブリ・カニなど富山湾の宝物が勢揃い。',
        price: '2食付き 18,000円〜',
        image: './hotels/isonokazeminshukuminato.png',
        tags: ['漁港直結', '白えび料理', '源泉掛け流し'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-toyama-3-3',
        onsen_id: 'o-toyama-3',
        name: 'ありそドーム温泉ホテル',
        prefecture: 'toyama',
        type: '温泉センター付きホテル',
        description: '氷見市の海岸沿いに建つ温泉施設と宿泊を兼ね備えたホテル。ナトリウム塩化物泉の海洋性温泉は体が温まりやすく冷え性改善に好評で、立山連峰の雪景色と富山湾が同時に望める。展望露天風呂と地元食材の氷見うどんを使った料理が評判。',
        price: '2食付き 14,000円〜',
        image: './hotels/arisodoomuonsenhoteru.png',
        tags: ['立山連峰の絶景', '氷見うどん', '海洋性温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 山代温泉（石川）=====
    {
        id: 'h-ishikawa-1-1',
        onsen_id: 'o-ishikawa-1',
        name: '瑠璃光 山代温泉',
        prefecture: 'ishikawa',
        type: '高級温泉旅館',
        description: '加賀四湯の一つ・山代温泉の高台に位置する格調高い旅館。含硫黄ナトリウム塩化物泉の白濁した湯は総硫黄量が多く名湯の誉れ高い。夕食は加賀野菜と能登の海の幸を使った加賀料理の会席で、治部煮・香箱蟹など石川の食文化を堪能できる。',
        price: '2食付き 45,000円〜',
        image: './hotels/rurikouyamadaionsen.png',
        tags: ['加賀四湯', '香箱蟹', '含硫黄泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-1-2',
        onsen_id: 'o-ishikawa-1',
        name: '旅館 加賀百万石',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '山代温泉の共同浴場「古総湯」至近に位置し、江戸時代から続く温泉文化を体感できる老舗旅館。含硫黄ナトリウム塩化物泉は肌をなめらかにする美肌効果が高い。伝統工芸・九谷焼の器で供される加賀料理は、能登牡蠣や加賀れんこん、鴨治部煮など正統派の一品が揃う。',
        price: '2食付き 30,000円〜',
        image: './hotels/ryokankagahyakumangoku.png',
        tags: ['古総湯近接', '九谷焼の器', '加賀料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-1-3',
        onsen_id: 'o-ishikawa-1',
        name: 'べにや無何有',
        prefecture: 'ishikawa',
        type: '高級旅館',
        description: '山代温泉の自然に溶け込む洗練された空間で知られるラグジュアリー旅館。含硫黄ナトリウム塩化物泉の湯を贅沢な半露天の客室風呂で独占できるプランが人気。北陸の最高食材を選び抜いた現代加賀会席は、能登牛・香箱蟹・加賀野菜が織りなす芸術的な料理が宿の名声を支える。',
        price: '2食付き 60,000円〜',
        image: './hotels/beniyamukau.png',
        tags: ['客室露天風呂', '能登牛', 'ラグジュアリー旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 和倉温泉（石川）=====
    {
        id: 'h-ishikawa-2-1',
        onsen_id: 'o-ishikawa-2',
        name: '加賀屋',
        prefecture: 'ishikawa',
        type: '大型温泉旅館',
        description: 'プロが選ぶ日本のホテル・旅館100選で36年連続日本一に輝いた名旅館。能登半島の七尾湾を望む絶景と、含塩化物泉の豊富な湯量が自慢。輪島塗の器に盛られた能登の海の幸会席は香箱蟹・のどぐろ・能登牡蠣など北陸最高の食材が揃い、加賀屋自慢のおもてなしとともに旅を彩る。',
        price: '2食付き 50,000円〜',
        image: './hotels/kagaya.png',
        tags: ['日本一のおもてなし', 'のどぐろ会席', '七尾湾絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-2-2',
        onsen_id: 'o-ishikawa-2',
        name: '多田屋',
        prefecture: 'ishikawa',
        type: '老舗温泉旅館',
        description: '七尾湾の海岸線に建つ風格ある老舗旅館。ナトリウム塩化物泉の「しおの湯」は海洋性温泉で肌への馴染みが良く美肌効果が高い。能登の豊かな食材を生かした料理は牡蠣の土手鍋、能登牛のすき焼き、七尾湾の地魚お造りと四季折々に変化し、地酒との相性が抜群。',
        price: '2食付き 35,000円〜',
        image: './hotels/tadaya.png',
        tags: ['ナトリウム塩化物泉', '能登牡蠣鍋', '老舗の風格'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-2-3',
        onsen_id: 'o-ishikawa-2',
        name: 'あえの風',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '能登の里山里海をテーマに掲げる和倉温泉の旅館。七尾湾に面した露天風呂では海に沈む夕日と星空が楽しめる。含塩化物泉の海洋性温泉は体の芯からポカポカと温まる。能登の伝統食材を使った会席はのどぐろの煮付け、能登かきフライ、能登牛のローストが名物。',
        price: '2食付き 28,000円〜',
        image: './hotels/aenokaze.png',
        tags: ['夕日露天風呂', '能登郷土料理', '里山里海'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 山中温泉（石川）=====
    {
        id: 'h-ishikawa-3-1',
        onsen_id: 'o-ishikawa-3',
        name: '山中温泉 よしのや依緑園',
        prefecture: 'ishikawa',
        type: '老舗温泉旅館',
        description: '松尾芭蕉も訪れたと伝わる山中温泉の老舗旅館。弱アルカリ性のナトリウム塩化物・硫酸塩泉は肌に優しく「日本三大薬湯」の名に恥じない名湯。大聖寺川のせせらぎを聞きながら入る露天風呂が絶品で、夕食は加賀野菜のにわか漬けと地鶏、いわなの塩焼きが旅情を演出。',
        price: '2食付き 30,000円〜',
        image: './hotels/sanchuuonsenyoshinoyairyokuen.png',
        tags: ['松尾芭蕉ゆかりの湯', '日本三大薬湯', '渓流露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-3-2',
        onsen_id: 'o-ishikawa-3',
        name: '花紫',
        prefecture: 'ishikawa',
        type: '高級温泉旅館',
        description: '鶴仙渓の渓谷美を独占できる贅沢なロケーションに佇む旅館。弱アルカリ性ナトリウム塩化物泉は神経痛・筋肉痛に効能があり、療養にも好まれる。客室からそのまま渓谷が見渡せる設計で、夕食の加賀会席は香箱蟹・のどぐろ・山中漆器の椀に盛られた治部煮が加賀文化の粋を伝える。',
        price: '2食付き 50,000円〜',
        image: './hotels/hanamurasaki.png',
        tags: ['鶴仙渓絶景', '山中漆器', 'のどぐろ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-3-3',
        onsen_id: 'o-ishikawa-3',
        name: '旅亭 山下屋',
        prefecture: 'ishikawa',
        type: '温泉旅館',
        description: '山中温泉の中心街に位置する気取らないアットホームな宿。ナトリウム塩化物・硫酸塩泉の源泉掛け流し風呂は少人数でゆっくり楽しめる。夕食は地元の旬野菜と大聖寺川の鮎料理、加賀百万石の食文化を受け継ぐ治部煮をはじめとした加賀郷土料理が女将の手で丁寧に仕上げられる。',
        price: '2食付き 20,000円〜',
        image: './hotels/tabiteiyamashitaya.png',
        tags: ['源泉掛け流し', '鮎の塩焼き', '女将のおもてなし'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 片山津温泉（石川）=====
    {
        id: 'h-ishikawa-4-1',
        onsen_id: 'o-ishikawa-4',
        name: 'みやびの宿 加賀百万石',
        prefecture: 'ishikawa',
        type: '料亭旅館',
        description: '柴山潟に面した絶景の片山津温泉を代表する料亭旅館。含芒硝食塩泉の湯は神経痛・冷え性に効能があり、潟を見渡す露天風呂が名物。夕食は地元食材にこだわった加賀料理で、能登の香箱蟹・加賀野菜の炊き合わせ・のどぐろ一夜干しが地酒と絶妙に調和する。',
        price: '2食付き 35,000円〜',
        image: './hotels/miyabinoyadokagahyakumangoku.png',
        tags: ['柴山潟の絶景', '香箱蟹', '含芒硝食塩泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-4-2',
        onsen_id: 'o-ishikawa-4',
        name: 'ホテルアローレ',
        prefecture: 'ishikawa',
        type: '温泉ホテル',
        description: '片山津温泉の湖畔に建つ開放的な温泉ホテル。柴山潟と白山連峰を同時に見渡せる展望露天風呂は四季の移ろいを楽しめる絶景スポット。含食塩泉の温泉は体が温まりやすく冷え性改善に好評で、夕食は地魚の浜焼きや加賀野菜をふんだんに使った北陸会席が並ぶ。',
        price: '2食付き 22,000円〜',
        image: './hotels/hoteruaroore.png',
        tags: ['白山連峰の展望', '地魚浜焼き', '湖畔温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ishikawa-4-3',
        onsen_id: 'o-ishikawa-4',
        name: '片山津温泉 佳水郷',
        prefecture: 'ishikawa',
        type: '老舗温泉旅館',
        description: '片山津温泉で長年にわたり愛され続ける老舗旅館。柴山潟を望む大浴場と露天風呂で含食塩泉の温もりが体に染み渡る。地元の食材にこだわり旬の加賀野菜と日本海の幸を組み合わせた会席料理と、加賀の地酒との組み合わせが格別で旅の満足度を高める。',
        price: '2食付き 25,000円〜',
        image: './hotels/katayamazuonsenkasuisato.png',
        tags: ['含食塩泉', '加賀野菜会席', '老舗旅館'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== あわら温泉（福井）=====
    {
        id: 'h-fukui-1-1',
        onsen_id: 'o-fukui-1',
        name: 'グランディア芳泉',
        prefecture: 'fukui',
        type: '大型温泉旅館',
        description: '北陸最大級の規模を誇るあわら温泉の大型旅館。アルカリ性単純温泉のやわらかな湯は肌への刺激が少なく、広大な大浴場と多彩な露天風呂が自慢。夕食は越前蟹・若狭ぐじ・越前うにを使った贅沢な北陸会席で、「福井の食の宝庫」を象徴する豪華な食材が揃う。',
        price: '2食付き 35,000円〜',
        image: './hotels/gurandiahousen.png',
        tags: ['越前蟹', 'アルカリ性単純温泉', '北陸最大級の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-1-2',
        onsen_id: 'o-fukui-1',
        name: '美松',
        prefecture: 'fukui',
        type: '老舗温泉旅館',
        description: 'あわら温泉発祥の地に建つ130年以上の歴史を誇る老舗旅館。アルカリ性単純温泉の透き通った湯は肌をしっとりと潤す。冬の越前蟹シーズンには蟹一杯丸ごとを豪快に楽しめる「蟹会席」が人気で、越前に古くから伝わる奉書焼きなど独自の調理法で蟹の旨みを引き出す。',
        price: '2食付き 30,000円〜',
        image: './hotels/bishou.png',
        tags: ['越前蟹会席', '130年の歴史', '源泉掛け流し'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-1-3',
        onsen_id: 'o-fukui-1',
        name: 'つるや',
        prefecture: 'fukui',
        type: '温泉旅館',
        description: 'あわら温泉街の中心部に位置するアットホームな温泉旅館。アルカリ性単純温泉の清澄な湯を源泉掛け流しで楽しめる。若狭湾で水揚げされた新鮮な魚介と、地元農家が育てた越前野菜を使った料理は素材の味を大切にした丁寧な仕上がりで、地酒「黒龍」との相性が抜群。',
        price: '2食付き 18,000円〜',
        image: './hotels/tsuruya.png',
        tags: ['源泉掛け流し', '若狭湾の魚介', 'アットホーム'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 越前温泉（福井）=====
    {
        id: 'h-fukui-2-1',
        onsen_id: 'o-fukui-2',
        name: '越前温泉 漁火',
        prefecture: 'fukui',
        type: '温泉旅館',
        description: '越前海岸を眼下に望む断崖上に立つ絶景温泉旅館。ナトリウム塩化物泉の海洋性温泉は塩分が豊富で体の芯から温まり、日本海の荒波を見渡しながら入る露天風呂が絶品。夕食は地元漁港水揚げの越前ガニ・甘エビ・岩ガキなど日本海の豪快な幸が食膳を飾る。',
        price: '2食付き 30,000円〜',
        image: './hotels/echizenonsenisaribi.png',
        tags: ['断崖絶壁の露天風呂', '越前ガニ', '日本海の絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-2-2',
        onsen_id: 'o-fukui-2',
        name: 'ホテル望洋楼',
        prefecture: 'fukui',
        type: '温泉ホテル',
        description: '越前海岸の雄大な景色を独占できる展望抜群の温泉ホテル。ナトリウム塩化物泉の豊富な湯量を誇り、展望大浴場と絶景露天風呂から日本海に沈む夕日が望める。漁師の町らしく夕食は地魚の活造り・越前うに丼・若狭かれいの干物など海鮮中心の豪快な献立が続く。',
        price: '2食付き 22,000円〜',
        image: './hotels/hoterubouyourou.png',
        tags: ['日本海の夕日', '越前うに', '展望大浴場'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-2-3',
        onsen_id: 'o-fukui-2',
        name: 'たけだ旅館',
        prefecture: 'fukui',
        type: '漁師宿',
        description: '漁師の里・越前町で民宿から旅館に発展した素朴な宿。海の近くに湧くナトリウム塩化物泉の温泉は源泉掛け流しで、こじんまりとした内湯ながら湯量豊富。朝獲れの越前ガニ・松葉ガニ・甘エビを使った豪快な漁師料理は、都市部からわざわざ足を運ぶファンも多い。',
        price: '2食付き 20,000円〜',
        image: './hotels/takedaryokan.png',
        tags: ['漁師料理', '源泉掛け流し', '松葉ガニ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 三国温泉（福井）=====
    {
        id: 'h-fukui-3-1',
        onsen_id: 'o-fukui-3',
        name: '三国温泉 湯元 みくに',
        prefecture: 'fukui',
        type: '温泉旅館',
        description: '三国港のほど近く、九頭竜川の河口に位置する情緒ある温泉旅館。ナトリウム塩化物泉の温泉は保温効果が高く漁師町の冷えた体を芯から温める。夕食は三国港水揚げの越前ガニ・甘エビ・ノドグロの炙り焼きと、地酒で北陸の海の幸を存分に堪能できる。',
        price: '2食付き 25,000円〜',
        image: './hotels/mikunionsenyumotomikuni.png',
        tags: ['三国港の幸', '越前ガニ', 'ナトリウム塩化物泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-3-2',
        onsen_id: 'o-fukui-3',
        name: '旅館 まつや千千',
        prefecture: 'fukui',
        type: '老舗温泉旅館',
        description: '三国温泉の老舗旅館として地元に愛される宿。ナトリウム塩化物泉の柔らかな湯は皮膚疾患や冷え性に効能があると伝わり、源泉掛け流しの内湯と露天風呂で旅の疲れを癒せる。三国港から届く新鮮な魚介を丁寧に仕上げた料理は、越前そばとともに食の王国・福井の豊かさを伝える。',
        price: '2食付き 20,000円〜',
        image: './hotels/ryokanmatsuyachiji.png',
        tags: ['源泉掛け流し', '越前そば', '地元密着の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukui-3-3',
        onsen_id: 'o-fukui-3',
        name: '三国温泉 海望館',
        prefecture: 'fukui',
        type: '温泉ホテル',
        description: '日本海を一望できる高台に建つ温泉ホテル。ナトリウム塩化物泉の海洋性温泉は体の芯から温まると評判で、日本海に沈む夕日を眺めながらの露天風呂は三国随一の絶景を誇る。北前船で栄えた三国の食文化を受け継ぐ料理は越前ガニ・若狭ぐじ・地魚の浜焼きが揃い、旅情を高める。',
        price: '2食付き 18,000円〜',
        image: './hotels/mikunionsenkaiboukan.png',
        tags: ['日本海の夕日', '北前船文化', '越前ガニ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 石和温泉（山梨）=====
    {
        id: 'h-yamanashi-1-1',
        onsen_id: 'o-yamanashi-1',
        name: '華やぎの章 慶山',
        prefecture: 'yamanashi',
        type: '高級温泉旅館',
        description: '甲府盆地を一望できる高台に位置する石和温泉の高級旅館。アルカリ性単純温泉のやわらかな湯は美肌効果が高く、露天風呂から富士山と南アルプスの絶景が望める。夕食は山梨ブランド牛「甲州牛」のしゃぶしゃぶ、甲州ワインビーフのステーキ、地元野菜の煮物が甲州会席を彩る。',
        price: '2食付き 35,000円〜',
        image: './hotels/hanayaginoshoukeizan.png',
        tags: ['富士山の絶景', '甲州牛', 'アルカリ性美肌湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-1-2',
        onsen_id: 'o-yamanashi-1',
        name: '旅館 深雪温泉',
        prefecture: 'yamanashi',
        type: '老舗温泉旅館',
        description: '石和温泉発祥の地に湧く源泉を持つ老舗旅館。アルカリ性単純温泉の良質な湯を源泉掛け流しで楽しめる数少ない宿の一つ。夕食は地元産ぶどうを使ったワイン鍋と甲州郷土料理のほうとう鍋、甲府盆地産の地鶏を使った料理が信玄公の時代から続く甲州文化を体現する。',
        price: '2食付き 20,000円〜',
        image: './hotels/ryokanmiyukionsen.png',
        tags: ['源泉掛け流し', 'ほうとう鍋', '甲州ワイン'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-1-3',
        onsen_id: 'o-yamanashi-1',
        name: 'ホテル春日居',
        prefecture: 'yamanashi',
        type: '温泉ホテル',
        description: '石和温泉街に位置し観光の拠点として便利な温泉ホテル。アルカリ性単純温泉の男女別大浴場と露天風呂で旅の疲れを癒せる。夕食は笛吹市産のもも・ぶどうを使ったフルーツスイーツと、甲州名物のほうとう・吉田うどん・信玄餅など山梨の食文化をコース仕立てで楽しめる。',
        price: '2食付き 16,000円〜',
        image: './hotels/hoterukasugai.png',
        tags: ['アルカリ性単純温泉', 'フルーツ王国の恵み', '甲州郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 下部温泉（山梨）=====
    {
        id: 'h-yamanashi-2-1',
        onsen_id: 'o-yamanashi-2',
        name: '下部ホテル',
        prefecture: 'yamanashi',
        type: '温泉旅館',
        description: '武田信玄が傷を癒したと伝わる名湯・下部温泉の代表旅館。ラジウムを含む低温の放射能泉は体の内側から活性化すると言われ、長湯が楽しめる特別な温泉。富士川の清流を眺める露天風呂と、山梨産ワインビーフや甲州ジビエを使った山里会席が旅の滋養となる。',
        price: '2食付き 22,000円〜',
        image: './hotels/kabuhoteru.png',
        tags: ['武田信玄ゆかりの湯', '放射能泉', '甲州ジビエ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-2-2',
        onsen_id: 'o-yamanashi-2',
        name: '信玄館',
        prefecture: 'yamanashi',
        type: '老舗温泉旅館',
        description: '下部温泉の中心部に建つ江戸時代創業の老舗旅館。ラジウム放射能泉の低温の湯は神経痛・リウマチ・慢性疲労に効能があり、温めの湯でじっくり長湯が楽しめる。富士川の渓流沿いで採れる山菜と甲州名物の身延そば、郷土料理のおざらを女将が丁寧に仕上げる素朴な会席が好評。',
        price: '2食付き 18,000円〜',
        image: './hotels/shingenkan.png',
        tags: ['放射能泉', '身延そば', '渓谷沿いの湯治宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-2-3',
        onsen_id: 'o-yamanashi-2',
        name: '旅館 湯の奥',
        prefecture: 'yamanashi',
        type: '湯治旅館',
        description: '下部温泉の最奥部に位置する秘境ムードが漂う湯治旅館。ラジウムを豊富に含む低温の放射能泉は効能が高く、長期滞在の湯治客に長年愛されてきた。囲炉裏を囲んで楽しむ山里料理は季節の山菜・川魚の岩魚・猪肉のぼたん鍋など、南アルプス山麓の滋味豊かな食材が食卓を彩る。',
        price: '2食付き 15,000円〜',
        image: './hotels/ryokanyunooku.png',
        tags: ['秘境の湯治宿', 'ぼたん鍋', '放射能泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 西山温泉（山梨）=====
    {
        id: 'h-yamanashi-3-1',
        onsen_id: 'o-yamanashi-3',
        name: '慶雲館',
        prefecture: 'yamanashi',
        type: '老舗温泉旅館',
        description: '世界最古の温泉旅館としてギネス世界記録に認定された705年創業の歴史的旅館。南アルプス山中に湧く硫酸塩泉は1300年以上にわたり旅人を癒してきた名湯中の名湯。手付かずの自然に囲まれた渓流沿いの露天風呂と、地元猟師が調達するジビエと山菜を使った山里料理が古都の趣を伝える。',
        price: '2食付き 45,000円〜',
        image: './hotels/keiunkan.png',
        tags: ['世界最古の旅館', '硫酸塩泉', 'ジビエ山里料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-3-2',
        onsen_id: 'o-yamanashi-3',
        name: '西山温泉 湯島の湯',
        prefecture: 'yamanashi',
        type: '温泉旅館',
        description: '南アルプスの山懐に抱かれた秘境・西山温泉の渓流沿いに佇む静寂な旅館。硫酸塩泉の清澄な湯は神経痛・慢性疲労・冷え性に効能があり、手つかずの自然の中で心身をリセットできる。夕食は南アルプスで育まれた山菜・きのこ・川魚・甲州ジビエを使った滋味深い山里会席が旅人の五感を満たす。',
        price: '2食付き 25,000円〜',
        image: './hotels/nishiyamaonsenyushimanoyu.png',
        tags: ['南アルプスの秘湯', '硫酸塩泉', '山菜きのこ料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamanashi-3-3',
        onsen_id: 'o-yamanashi-3',
        name: '奈良田温泉 白根館',
        prefecture: 'yamanashi',
        type: '秘湯旅館',
        description: '西山温泉郷の最奥部・奈良田に位置する秘湯中の秘湯。白濁した含硫黄ナトリウム炭酸水素塩泉は美肌・神経痛・筋肉痛に効能が高く、湯治目的の常連客が絶えない名湯。標高820メートルの山中で楽しむ猪のぼたん鍋と岩魚の塩焼き、野草てんぷらは俗世から離れた贅沢な食体験を提供する。',
        price: '2食付き 20,000円〜',
        image: './hotels/naradaonsenshironekan.png',
        tags: ['秘湯の一軒宿', '含硫黄白濁湯', 'ぼたん鍋'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 別所温泉（長野）=====
    {
        id: 'h-nagano-1-1',
        onsen_id: 'o-nagano-1',
        name: '上松屋旅館',
        prefecture: 'nagano',
        type: '老舗温泉旅館',
        description: '信州最古の温泉・別所温泉に江戸時代から続く老舗旅館。硫黄を含む弱アルカリ性の単純硫黄泉は「美人の湯」として親しまれ、肌をしっとりなめらかに整える。信州の伝統料理・野沢菜漬けと鯉料理、上田産の地鶏の陶板焼きを中心にした信州会席が旅情を高める。',
        price: '2食付き 22,000円〜',
        image: './hotels/uematsuyaryokan.png',
        tags: ['信州最古の温泉', '美人の湯', '信州郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-1-2',
        onsen_id: 'o-nagano-1',
        name: '花屋',
        prefecture: 'nagano',
        type: '高級温泉旅館',
        description: '大正時代創業の格調高い別所温泉の宿。弱アルカリ性単純硫黄泉の清澄な湯は透き通った美しさで美肌効果が高く、文人墨客にも愛された名湯。信州産の松茸料理と上田・東御産のワイン、軽井沢の高原野菜を使った信州フレンチ会席は和と洋を融合した独創的な料理が旅に彩りを添える。',
        price: '2食付き 38,000円〜',
        image: './hotels/hanaya.png',
        tags: ['大正創業の格調', '単純硫黄泉', '信州松茸'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-1-3',
        onsen_id: 'o-nagano-1',
        name: 'ながの湯旅館',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '別所温泉の共同浴場「大師湯」のすぐ近くに立つ家族経営の温泉旅館。弱アルカリ性単純硫黄泉の湯を源泉掛け流しで楽しめる、こぢんまりとした宿。夕食は信州サーモンの刺身・上田産のお米を使ったご飯・野沢菜のおやきなど、長野の郷土の味を丁寧に仕上げた家庭的な会席が人気。',
        price: '2食付き 16,000円〜',
        image: './hotels/naganoyuryokan.png',
        tags: ['大師湯近接', '源泉掛け流し', '信州サーモン'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 野沢温泉（長野）=====
    {
        id: 'h-nagano-2-1',
        onsen_id: 'o-nagano-2',
        name: '旅館さかや',
        prefecture: 'nagano',
        type: '老舗温泉旅館',
        description: '野沢温泉の中心部に建つ江戸時代創業の老舗旅館。含石膏食塩泉の豊富な湯量と高い泉温が特徴で、源泉掛け流しの内湯と露天風呂で体の芯から温まれる。夕食は信州牛のすき焼き・野沢菜漬けの天ぷら・きのこの土瓶蒸しと地酒の組み合わせが長野の食の豊かさを実感させる。',
        price: '2食付き 25,000円〜',
        image: './hotels/ryokansakaya.png',
        tags: ['江戸時代創業', '野沢菜の本場', '含石膏食塩泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-2-2',
        onsen_id: 'o-nagano-2',
        name: 'ホテルニュー緑館',
        prefecture: 'nagano',
        type: '温泉ホテル',
        description: '野沢温泉スキー場に近い便利なロケーションの温泉ホテル。含硫酸塩の食塩泉は体の芯から温まる効能が高く、スキー後の疲れた体をしっかり癒してくれる。夕食の信州会席は地元農家から直送の高原野菜と信州サーモン、野沢温泉名物の野沢菜漬けを使った郷土料理が充実している。',
        price: '2食付き 18,000円〜',
        image: './hotels/hoterunyuumidorikan.png',
        tags: ['スキー場近接', '食塩泉', '野沢菜漬け'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-2-3',
        onsen_id: 'o-nagano-2',
        name: '野沢温泉 河一屋旅館',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '野沢温泉の外湯めぐりの拠点として最適な旅館。含石膏食塩泉の自家源泉を持ち、13ある外湯とは泉質の異なる湯を宿で楽しめる。夕食は信州産きのこのバター炒め・長芋の短冊・野沢菜の煮びたしなど長野の山の恵みを活かした素朴な料理と地酒が体を優しく温める。',
        price: '2食付き 20,000円〜',
        image: './hotels/nozawaonsenkawaichiyaryokan.png',
        tags: ['外湯めぐり拠点', '自家源泉', '信州きのこ料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 渋温泉（長野）=====
    {
        id: 'h-nagano-3-1',
        onsen_id: 'o-nagano-3',
        name: '渋温泉 金具屋',
        prefecture: 'nagano',
        type: '老舗温泉旅館',
        description: '1758年創業、国の登録有形文化財に指定された歴史的木造建築が圧倒的な存在感を放つ老舗旅館。含塩化物の硫酸塩泉を9つの外湯と宿の内湯で楽しめる。「千と千尋の神隠し」のモデルの一つとも言われ、夕食は信州牛の溶岩焼き・松茸の土瓶蒸し・信州サーモンのルイベなど信州食材の会席が評判。',
        price: '2食付き 35,000円〜',
        image: './hotels/shibuonsenkanaguya.png',
        tags: ['登録有形文化財', '9つの外湯', '千と千尋の聖地'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-3-2',
        onsen_id: 'o-nagano-3',
        name: '旅館 よろづや',
        prefecture: 'nagano',
        type: '老舗温泉旅館',
        description: '渋温泉の古い温泉街に江戸時代から続く老舗旅館。含塩化物硫酸塩泉の豊富な湯量を誇り、内湯と露天風呂では源泉の違いが楽しめる。夕食は高山村産のシャインマスカットを使ったスイーツと、信州ハーブ鶏の陶板焼き・野沢菜の炒め物など信州郷土の食材が旅情を豊かにする。',
        price: '2食付き 25,000円〜',
        image: './hotels/ryokanyorozuya.png',
        tags: ['含塩化物硫酸塩泉', '渋温泉街散策', '信州ハーブ鶏'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-3-3',
        onsen_id: 'o-nagano-3',
        name: '渋温泉 あぶらや燈千',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '渋温泉の石畳の街道に面した風情ある旅館。硫酸塩・塩化物泉の名湯を宿の内湯で堪能した後、浴衣姿で渋温泉の9つの外湯めぐりができる。信州りんごを使ったデザートと地獄谷の野猿に会いに行く体験ツアーが人気で、夕食の信州会席には長野県産和牛と松茸の炊き込みご飯が名物として並ぶ。',
        price: '2食付き 22,000円〜',
        image: './hotels/shibuonsenaburayatousen.png',
        tags: ['外湯めぐり', '野猿公苑近接', '松茸の炊き込みご飯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 白骨温泉（長野）=====
    {
        id: 'h-nagano-4-1',
        onsen_id: 'o-nagano-4',
        name: '泡の湯旅館',
        prefecture: 'nagano',
        type: '老舗温泉旅館',
        description: '白骨温泉随一の名物として名高い乳白色の野天混浴風呂を持つ老舗旅館。含硫黄カルシウム・マグネシウム炭酸水素塩泉の白濁した湯は美肌と療養効果が高く、信州を代表する秘湯として江戸時代から多くの旅人を癒してきた。乗鞍岳麓の深い自然に囲まれ、夕食は山菜の天ぷら・岩魚の塩焼き・信州牛のすき焼きなど山里の食材を丁寧に仕上げた会席が並ぶ。',
        price: '2食付き 30,000円〜',
        image: './hotels/awanoyuryokan.png',
        tags: ['乳白色の野天混浴風呂', '含硫黄白濁湯', '秘湯百選'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-4-2',
        onsen_id: 'o-nagano-4',
        name: '白骨温泉 山水観 湯川荘',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '白骨温泉の渓流沿いに佇む静かな旅館。硫黄の香りが漂う乳白色の含硫黄炭酸水素塩泉を源泉掛け流しで楽しめ、内湯と露天風呂では白濁した秘湯の湯を独占できる。夕食は地元産のきのこ・山菜・川魚を使った山里会席が自慢で、乗鞍岳の大自然の中で過ごす静寂のひとときが旅人の心を深く癒す。',
        price: '2食付き 25,000円〜',
        image: './hotels/shirahoneonsensansuikanyukawasou.png',
        tags: ['源泉掛け流し', '乳白色の秘湯', '山里会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-4-3',
        onsen_id: 'o-nagano-4',
        name: 'かつら木の郷',
        prefecture: 'nagano',
        type: '高級温泉旅館',
        description: '白骨温泉の高台に佇む全室露天風呂付きの高級旅館。含硫黄カルシウム炭酸水素塩泉の白濁した湯を客室の露天風呂で独占できる贅沢さが人気の理由。乗鞍岳の原生林を一望しながら入る湯は格別で、夕食は信州松本産の食材を活かした会席に山菜・きのこ・岩魚など白骨の自然の恵みが存分に盛り込まれる。',
        price: '2食付き 45,000円〜',
        image: './hotels/katsurakinosato.png',
        tags: ['全室露天風呂付き', '白濁硫黄泉', '原生林の絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 上諏訪温泉（長野）=====
    {
        id: 'h-nagano-5-1',
        onsen_id: 'o-nagano-5',
        name: '萃sui-諏訪湖',
        prefecture: 'nagano',
        type: '高級温泉旅館',
        description: '諏訪湖を一望する眺望抜群のラグジュアリー旅館。アルカリ性単純温泉の湯は柔らかく肌にやさしく、諏訪湖に面した展望露天風呂は朝霧に浮かぶ湖面が幻想的。夕食は信州諏訪産のウナギのかば焼き、高原野菜のグリル、信州牛のローストビーフなど諏訪の食文化を現代的に昇華した会席が並び、地酒「真澄」との相性も格別。',
        price: '2食付き 50,000円〜',
        image: './hotels/suisuisuwamizuumi.png',
        tags: ['諏訪湖の絶景', 'アルカリ性単純温泉', '諏訪ウナギ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-5-2',
        onsen_id: 'o-nagano-5',
        name: 'ホテル紅や',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '上諏訪温泉の中心部に位置し、諏訪湖と霧ヶ峰高原の絶景を誇る温泉旅館。アルカリ性単純温泉の大浴場と露天風呂では湖面に沈む夕日が望める。信州産の旬素材にこだわった夕食は、諏訪産ウナギ・信州サーモン・高原野菜の温野菜サラダなど山と湖の恵みが織りなす信州会席が旅の記憶に残る味を提供する。',
        price: '2食付き 30,000円〜',
        image: './hotels/hoterukurenaiya.png',
        tags: ['諏訪湖の夕日', '信州サーモン', 'アルカリ性温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-5-3',
        onsen_id: 'o-nagano-5',
        name: '諏訪湖ホテル',
        prefecture: 'nagano',
        type: '老舗温泉ホテル',
        description: '諏訪湖畔に建つ昭和の趣を残す老舗温泉ホテル。上諏訪温泉のアルカリ性単純温泉を豊富な湯量で源泉掛け流しし、湖に面した大浴場と露天風呂は開放感抜群。夕食は諏訪の伝統食材を使った会席で、みそ焼きうなぎや高原野菜の炊き合わせ、信州蕎麦が旅情を高め、冬には白鳥が舞う諏訪湖の幻想的な景色が楽しめる。',
        price: '2食付き 22,000円〜',
        image: './hotels/suwamizuumihoteru.png',
        tags: ['湖畔の老舗', '源泉掛け流し', 'みそ焼きうなぎ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 白馬姫川温泉（長野）=====
    {
        id: 'h-nagano-6-1',
        onsen_id: 'o-nagano-6',
        name: 'ホテル白馬',
        prefecture: 'nagano',
        type: '温泉リゾートホテル',
        description: '北アルプス・白馬三山を正面に望む絶好のロケーションを誇る温泉リゾート。ナトリウム炭酸水素塩泉のとろっとした美肌の湯は「白馬の美人の湯」として知られ、北アルプスを一望する大浴場と露天風呂が名物。夕食は白馬産の高原野菜と信州牛のすき焼き、黒部渓谷の岩魚料理を楽しめる信州会席が評判で、登山者・スキー客を問わず愛される。',
        price: '2食付き 25,000円〜',
        image: './hotels/hoteruhakuba.png',
        tags: ['北アルプスの絶景', '美人の湯', 'スキー場近接'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-6-2',
        onsen_id: 'o-nagano-6',
        name: '姫川温泉 ホテル朝日荘',
        prefecture: 'nagano',
        type: '温泉旅館',
        description: '姫川渓谷に湧く温泉を引き込んだ風情ある旅館。ナトリウム炭酸水素塩泉の柔らかな湯は肌をしっとりと潤し、渓流のせせらぎを聞きながらの露天風呂が絶品。夕食は白馬エリアの山の幸をふんだんに使った料理で、山菜・きのこ・渓流の岩魚・信州高原野菜が信州の自然の豊かさを伝える。',
        price: '2食付き 20,000円〜',
        image: './hotels/himegawaonsenhoteruasahisou.png',
        tags: ['姫川渓谷', 'ナトリウム炭酸水素塩泉', '岩魚料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagano-6-3',
        onsen_id: 'o-nagano-6',
        name: '白馬八方温泉 ファミリーロッジ旅人宿',
        prefecture: 'nagano',
        type: '温泉ペンション',
        description: '白馬八方エリアに位置する家族的な温泉ペンション。ナトリウム炭酸水素塩泉の美肌の湯を小さな内湯で楽しみながら、白馬の山岳風景を身近に感じられる。夕食は地元農家から直送の高原野菜と信州産食材を使った家庭的な料理で、スキー・登山・トレッキングで疲れた体を温泉と美食で存分に癒せる。',
        price: '2食付き 15,000円〜',
        image: './hotels/hakubahappouonsenfamiriirojjitabibitoyado.png',
        tags: ['家族的な雰囲気', '八方尾根近接', '高原野菜料理'],
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
        name: '穂高荘 山がの湯',
        prefecture: 'gifu',
        type: '高級温泉旅館',
        description: '北アルプスを望む奥飛騨温泉郷の高台に佇む高級旅館。含硫黄ナトリウム塩化物泉の湯は豊富な湯量を誇り、混浴の野天風呂からは穂高連峰の絶景が広がる。夕食は飛騨牛のしゃぶしゃぶ・鮎の塩焼き・飛騨山地の山菜を盛り込んだ飛騨会席で、地酒「久寿玉」との組み合わせが旅の思い出を深める。',
        price: '2食付き 35,000円〜',
        image: './hotels/hodakasouyamaganoyu.png',
        tags: ['穂高連峰の絶景', '混浴野天風呂', '飛騨牛しゃぶしゃぶ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-2-2',
        onsen_id: 'o-gifu-2',
        name: '深山桜庵',
        prefecture: 'gifu',
        type: '高級旅館',
        description: '奥飛騨温泉郷の豊かな自然に溶け込む格調高い旅館。含硫黄カルシウム炭酸水素塩泉の白濁した湯を全室に専用露天風呂として備えた贅沢な設計が特長。夕食は飛騨牛の朴葉味噌焼き・飛騨里芋の煮物・岩魚の姿造りなど飛騨の食文化を現代的に昇華した会席が並び、北アルプスの山懐で過ごす至高のひとときを演出する。',
        price: '2食付き 55,000円〜',
        image: './hotels/miyamasakuraiori.png',
        tags: ['全室専用露天風呂', '飛騨牛朴葉味噌焼き', '白濁硫黄泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-2-3',
        onsen_id: 'o-gifu-2',
        name: '奥飛騨の湯 孤山一笑',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '北アルプスの山間に位置する奥飛騨温泉郷らしい風情ある旅館。含硫黄温泉を引き湯した露天風呂は自然の岩を生かした造りで、野趣あふれる湯浴みが楽しめる。飛騨の清流で育った天然鮎の塩焼き・山菜のおひたし・飛騨牛の網焼きを中心とした夕食は、山里の素材の旨みを最大限に引き出した飛騨郷土料理の真髄を伝える。',
        price: '2食付き 28,000円〜',
        image: './hotels/okuhidanoyukozanisshou.png',
        tags: ['岩造り露天風呂', '天然鮎の塩焼き', '飛騨郷土料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 平湯温泉（岐阜）=====
    {
        id: 'h-gifu-3-1',
        onsen_id: 'o-gifu-3',
        name: '平湯温泉 ひらゆの森',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '広大な自然林の中に8種類の野天風呂を持つ平湯温泉の代表的な宿。含硫黄カルシウム・ナトリウム炭酸水素塩泉の乳白色の湯は療養泉として名高く、源泉掛け流しを豊富な湯量で堪能できる。夕食は飛騨牛の朴葉焼き・平湯産の山菜料理・飛騨の清流で育った鮎の塩焼きなど奥飛騨の食材を活かした山里会席が旅人の食欲を満たす。',
        price: '2食付き 22,000円〜',
        image: './hotels/hirayuonsenhirayunomori.png',
        tags: ['8種類の野天風呂', '乳白色の硫黄泉', '飛騨牛朴葉焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-3-2',
        onsen_id: 'o-gifu-3',
        name: '旅館 藤屋',
        prefecture: 'gifu',
        type: '老舗温泉旅館',
        description: '平湯温泉で長年にわたり愛されてきた老舗旅館。含硫黄ナトリウム炭酸水素塩泉の清澄な湯を源泉掛け流しで楽しめ、内湯と露天風呂は四季折々に表情を変える奥飛騨の景色に囲まれている。夕食は飛騨の郷土食材を丁寧に仕上げた会席で、飛騨牛のすき焼き・山菜の天ぷら・岩魚の田楽が囲炉裏を囲む雰囲気とともに旅の充実感を高める。',
        price: '2食付き 18,000円〜',
        image: './hotels/ryokanfujiya.png',
        tags: ['源泉掛け流し', '飛騨牛すき焼き', '囲炉裏料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-3-3',
        onsen_id: 'o-gifu-3',
        name: '平湯館',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '平湯温泉の豊かな硫黄泉を引いた宿で、乳白色に輝く湯船が名物。含硫黄カルシウム炭酸水素塩泉は筋肉痛・神経痛・冷え性に優れた効能を持ち、登山・スキー後の湯治に最適。北アルプスの大自然を背景に、飛騨の清流で育った岩魚・飛騨牛・飛騨の山菜を組み合わせた夕食が旅人を深く満足させる。',
        price: '2食付き 20,000円〜',
        image: './hotels/hirayukan.png',
        tags: ['含硫黄乳白色温泉', '登山・スキーの拠点', '岩魚・飛騨牛'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長良川温泉（岐阜）=====
    {
        id: 'h-gifu-4-1',
        onsen_id: 'o-gifu-4',
        name: '長良川温泉 十八楼',
        prefecture: 'gifu',
        type: '老舗温泉旅館',
        description: '長良川のほとりに創業200年以上を誇る老舗旅館。長良川温泉のアルカリ性単純温泉は肌に優しく美肌効果で知られ、長良川の清流を眺めながら入る川床露天風呂が絶品。夕食は長良川の鵜飼漁による天然鮎の塩焼き・鵜匠専用鮎のお造り・飛騨牛の鍋と岐阜の誇る食材が並ぶ会席で、地酒「菊川」との組み合わせが旅情を高める。',
        price: '2食付き 30,000円〜',
        image: './hotels/nagaragawaonsenjuuhachirou.png',
        tags: ['創業200年の老舗', '鵜飼鮎料理', '長良川川床露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-4-2',
        onsen_id: 'o-gifu-4',
        name: '岐阜グランドホテル',
        prefecture: 'gifu',
        type: '温泉ホテル',
        description: '長良川温泉を代表する大型温泉ホテル。アルカリ性単純温泉の大浴場と露天風呂は湯量豊富で、長良川と金華山の絶景が楽しめる。夕食は長良川の天然鮎料理・飛騨牛のしゃぶしゃぶ・岐阜の伝統食材を盛り込んだ豪華な宴会料理が充実し、鵜飼見物とのセットプランも人気の観光型ホテルとして多くの旅行者に親しまれている。',
        price: '2食付き 22,000円〜',
        image: './hotels/gifugurandohoteru.png',
        tags: ['長良川の絶景', '鵜飼見物', '飛騨牛しゃぶしゃぶ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-gifu-4-3',
        onsen_id: 'o-gifu-4',
        name: '鵜匠の家 すぎ山',
        prefecture: 'gifu',
        type: '温泉旅館',
        description: '代々続く鵜匠の家が営む長良川温泉の旅館。世界農業遺産に認定された長良川流域の鮎漁文化を体感できる希少な宿で、鵜匠の主人から直接聞く鵜飼の話が旅の思い出となる。長良川温泉のアルカリ性単純温泉を引いた内湯で旅の疲れを癒し、夕食には鵜飼で捕れた天然鮎の料理が全7品以上並ぶ贅沢な会席が楽しめる。',
        price: '2食付き 35,000円〜',
        image: './hotels/ushounoiesugiyama.png',
        tags: ['鵜匠の宿', '天然鮎7品会席', '世界農業遺産の食文化'],
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
        name: '下田大和館',
        prefecture: 'shizuoka',
        type: '老舗温泉旅館',
        description: '伊豆下田の山懐に位置する老舗旅館。ナトリウム炭酸水素塩泉の柔らかく肌に優しい湯は美肌効果で知られ、女性に人気が高い。夕食は駿河湾で水揚げされた金目鯛の煮付けと活造り、稲取の深海魚料理、伊豆特産の山葵を使った海の幸会席が旅情を高め、南伊豆の自然に抱かれた静かな滞在体験が疲れた旅人の心を癒す。',
        price: '2食付き 25,000円〜',
        image: './hotels/shimodayamatokan.png',
        tags: ['金目鯛の煮付け', 'ナトリウム炭酸水素塩泉', '南伊豆の自然'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-2-2',
        onsen_id: 'o-shizuoka-2',
        name: '弓ヶ浜温泉 あかねの宿 九重',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '弓ヶ浜海岸を望む絶景の旅館。ナトリウム塩化物泉の塩の湯は保温効果が高く海辺の宿らしい開放的な温泉体験が楽しめる。下田の海の幸を中心にした夕食は伊豆名物の金目鯛の姿煮・伊勢海老の刺身・アワビの酒蒸しなど豪華な海の幸が揃い、駿河湾の絶景と組み合わさって旅の満足度を大きく高める。',
        price: '2食付き 30,000円〜',
        image: './hotels/yumikehamaonsenakanenoyadokokonoe.png',
        tags: ['弓ヶ浜の絶景', '伊勢海老の刺身', '保温性の高い塩の湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-2-3',
        onsen_id: 'o-shizuoka-2',
        name: '下田温泉 山田屋旅館',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '下田温泉街に位置するアットホームな旅館。ナトリウム炭酸水素塩泉の美肌の湯は源泉掛け流しで楽しめ、家族的な雰囲気が旅の疲れを和らげる。駿河湾の地魚を活かした夕食は金目鯛の姿煮・伊豆の磯海苔の味噌汁・ところてんなど伊豆の食材を丁寧に仕上げた素朴な料理が温かみのある宿の雰囲気と相まって旅人に深い満足感をもたらす。',
        price: '2食付き 18,000円〜',
        image: './hotels/shimodaonsenyamadayaryokan.png',
        tags: ['源泉掛け流し', '金目鯛料理', 'アットホームな宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 修善寺温泉（静岡）=====
    {
        id: 'h-shizuoka-3-1',
        onsen_id: 'o-shizuoka-3',
        name: '新井旅館',
        prefecture: 'shizuoka',
        type: '国指定重要文化財旅館',
        description: '明治期から続く風格ある老舗旅館で、国の登録有形文化財に指定された貴重な木造建築が圧倒的な存在感を放つ。修善寺温泉のナトリウム炭酸水素塩泉は「独鈷の湯」に源を発する名湯で、川縁に設けられた天然岩の露天風呂は情緒満点。夕食は伊豆の地魚料理に地元農家の旬野菜・わさびを組み合わせた伊豆会席が洗練された和の空間で供される。',
        price: '2食付き 35,000円〜',
        image: './hotels/arairyokan.png',
        tags: ['国登録有形文化財', '天然岩の露天風呂', '伊豆わさび会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-3-2',
        onsen_id: 'o-shizuoka-3',
        name: '修善寺温泉 桂川',
        prefecture: 'shizuoka',
        type: '老舗温泉旅館',
        description: '修善寺川のほとりに建つ数寄屋造りの上品な旅館。ナトリウム炭酸水素塩泉の湯は神経痛・筋肉痛・冷え性に効能があり、川を眼下に望む露天風呂と檜の内湯で心身が解放される。夕食は伊豆稲取の金目鯛・駿河湾の桜海老・修善寺産わさびを主役にした伊豆会席が季節の移ろいに合わせて変化し、独鈷山の緑と川のせせらぎが旅情を深める。',
        price: '2食付き 28,000円〜',
        image: './hotels/shuzenjionsenkatsuragawa.png',
        tags: ['川沿いの露天風呂', '金目鯛・桜海老', '数寄屋造り'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-3-3',
        onsen_id: 'o-shizuoka-3',
        name: '修善寺温泉 菊屋',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '修善寺温泉の中心部に位置し、竹林と川のせせらぎに囲まれた情緒豊かな旅館。ナトリウム炭酸水素塩泉の柔らかな湯を源泉掛け流しで楽しめ、湯上がりの肌がしっとりすると評判。夕食は伊豆の金目鯛・アワビ・伊勢海老など豪華な海の幸と修善寺産の山の幸を組み合わせた会席料理が、女将の温かいもてなしとともに心に残る旅の記憶を刻む。',
        price: '2食付き 22,000円〜',
        image: './hotels/shuzenjionsenkikuya.png',
        tags: ['竹林の風情', '源泉掛け流し', '金目鯛・アワビ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 伊東温泉（静岡）=====
    {
        id: 'h-shizuoka-4-1',
        onsen_id: 'o-shizuoka-4',
        name: '伊東温泉 なぎさホテル',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '相模湾を一望する高台に建つ伊東温泉の名旅館。カルシウム・ナトリウム塩化物泉の湯は肌になじみやすく美肌効果で知られ、海を望む大浴場と露天風呂から朝日と夕日が望める。夕食は相模湾で水揚げされた金目鯛の姿煮・伊豆産の鮑の踊り焼き・駿河湾の生しらす丼など伊豆の海の幸が贅沢に揃う会席で旅の食欲を満たす。',
        price: '2食付き 28,000円〜',
        image: './hotels/itouonsennagisahoteru.png',
        tags: ['相模湾の絶景', '金目鯛の姿煮', '塩化物美肌湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-4-2',
        onsen_id: 'o-shizuoka-4',
        name: '山喜旅館',
        prefecture: 'shizuoka',
        type: '老舗温泉旅館',
        description: '大正時代創業の趣ある老舗旅館。伊東温泉の豊富な湯量を誇るナトリウム塩化物泉を源泉掛け流しで楽しめる数少ない宿の一つ。家族的なもてなしと旬の伊豆食材を活かした夕食が旅人に安らぎを与え、駿河湾の真鯛・金目鯛・伊豆磯ものの盛り合わせを中心とした海の幸会席が長年の常連客を惹きつける。',
        price: '2食付き 20,000円〜',
        image: './hotels/yamakiryokan.png',
        tags: ['大正創業の老舗', '源泉掛け流し', '伊豆磯ものの盛り合わせ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-4-3',
        onsen_id: 'o-shizuoka-4',
        name: 'ふか川',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '伊東温泉の良質な湯を源泉掛け流しで提供する、こぢんまりとした落ち着きある旅館。ナトリウム塩化物泉の塩気を感じる保温性の高い湯は体の芯から温め、湯上がりの体のポカポカ感が長続きする。夕食は伊東漁港から届く伊豆の地魚・金目鯛・伊勢海老をふんだんに使った海の幸会席が旅人を満足させ、地酒「开运」との相性が抜群。',
        price: '2食付き 25,000円〜',
        image: './hotels/fukakawa.png',
        tags: ['源泉掛け流し', '伊豆地魚会席', '保温性の高い塩の湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 伊豆長岡温泉（静岡）=====
    {
        id: 'h-shizuoka-5-1',
        onsen_id: 'o-shizuoka-5',
        name: '三養荘',
        prefecture: 'shizuoka',
        type: '高級温泉旅館',
        description: '岩崎弥之助の別荘を旅館に改築した国宝・名勝の庭園を持つ格調高い旅館。アルカリ性ナトリウム炭酸水素塩泉の肌に優しい湯は美肌効果で知られ、天然の岩組みを活かした露天風呂が趣深い。夕食は富士山の伏流水で育てる伊豆の本わさびを使った伊豆会席で、金目鯛・鮑・桜海老など伊豆の最高食材が贅沢に並び、格式ある空間でのもてなしが一段上の旅体験を提供する。',
        price: '2食付き 50,000円〜',
        image: './hotels/sanyansou.png',
        tags: ['旧岩崎別荘の格調', '名勝庭園', '本わさび伊豆会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-5-2',
        onsen_id: 'o-shizuoka-5',
        name: '蔵の湯 東府やResort',
        prefecture: 'shizuoka',
        type: 'リゾート旅館',
        description: '伊豆長岡温泉の自然に溶け込む洗練されたリゾート旅館。ナトリウム炭酸水素塩泉の美肌の湯を半露天の客室風呂で楽しめるプランが女性客に絶大な人気。カフェ・スパ・サイクリングなどの体験アクティビティが充実し、夕食はオーガニック野菜中心のヘルシーな会席と伊豆の地魚料理が健康的な旅を演出する。',
        price: '2食付き 40,000円〜',
        image: './hotels/kuranoyuhigashifuyaresort.png',
        tags: ['半露天付き客室', 'オーガニック会席', 'アクティビティ充実'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shizuoka-5-3',
        onsen_id: 'o-shizuoka-5',
        name: '伊豆長岡温泉 宮脇旅館',
        prefecture: 'shizuoka',
        type: '温泉旅館',
        description: '伊豆長岡温泉の静かな環境に佇む温泉旅館。アルカリ性ナトリウム炭酸水素塩泉の良質な湯を源泉掛け流しで楽しめ、湯上がりの肌のつるつる感が評判。駿河湾の新鮮な海の幸・金目鯛・桜海老・しらすを中心とした夕食は素材の旨みを活かした調理が特徴で、富士山を望む伊豆の風光明媚な景色の中での滞在が旅の思い出となる。',
        price: '2食付き 22,000円〜',
        image: './hotels/izunagaokaonsenmiyawakiryokan.png',
        tags: ['源泉掛け流し', '桜海老・しらす会席', '富士山の眺望'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯谷温泉（愛知）=====
    {
        id: 'h-aichi-1-1',
        onsen_id: 'o-aichi-1',
        name: 'はづ木ホテル',
        prefecture: 'aichi',
        type: '温泉旅館',
        description: '宇連川の清流沿いに建つ湯谷温泉の代表的な旅館。単純アルカリ性泉の肌に優しい湯を川に面した露天風呂で楽しめる。夕食は鳳来寺山周辺の山の幸と三河の食材を活かした会席料理で、三河産の名古屋コーチン・鳳来牛・天然鮎の川魚料理が旅情を高め、渓流のせせらぎを聞きながらの湯浴みが日常の疲れを忘れさせる。',
        price: '2食付き 22,000円〜',
        image: './hotels/hazukihoteru.png',
        tags: ['宇連川の清流', '名古屋コーチン料理', '単純アルカリ性泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-1-2',
        onsen_id: 'o-aichi-1',
        name: '旅館 鳳来館',
        prefecture: 'aichi',
        type: '老舗温泉旅館',
        description: '鳳来寺山麓に湧く湯谷温泉の老舗旅館。アルカリ性単純温泉の湯は��への刺激が少なく、源泉掛け流しの露天風呂で宇連川の緑と渓流の音色に癒される。夕食は地元三河の食材を主役にした会席で、三河産うなぎのひつまぶし・鳳来牛の朴葉焼き・三河の山菜料理などが自慢の品として並び、女将のもてなしが旅の満足感を高める。',
        price: '2食付き 18,000円〜',
        image: './hotels/ryokanhouraikan.png',
        tags: ['源泉掛け流し', '三河うなぎ', '鳳来寺山麓の秘湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-1-3',
        onsen_id: 'o-aichi-1',
        name: '湯谷観光ホテル 壱之湯',
        prefecture: 'aichi',
        type: '温泉ホテル',
        description: '湯谷温泉の渓谷沿いに建つ温泉ホテル。アルカリ性単純温泉の豊富な湯量と適温の湯は長湯を楽しむのに最適で、渓谷美を望む展望大浴場と露天風呂が評判。三河の旬食材を使った夕食は名古屋コーチン鍋・三河産うなぎの白焼き・鳳来牛のすき焼きなど愛知県の美食文化を堪能できる豪華な会席が揃う。',
        price: '2食付き 20,000円〜',
        image: './hotels/yutanikankouhoterukazuyukiyu.png',
        tags: ['渓谷美の展望浴場', '名古屋コーチン鍋', '三河うなぎ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 蒲郡温泉（愛知）=====
    {
        id: 'h-aichi-2-1',
        onsen_id: 'o-aichi-2',
        name: '蒲郡クラシックホテル',
        prefecture: 'aichi',
        type: '歴史的ホテル',
        description: '1934年に鉄道省が建設した国の登録有形文化財。昭和モダニズムの名建築として知られる白亜のホテルで、三河湾を一望する庭園と海辺の絶景が圧倒的な魅力。ナトリウム塩化物泉の海洋性温泉は保温効果が高く、三河湾の海の幸・矢作川の鮎・三河産のあさりを使った格調ある洋食・和食の会席が歴史的空間での特別な滞在を演出する。',
        price: '2食付き 35,000円〜',
        image: './hotels/gamagoorikurashikkuhoteru.png',
        tags: ['国登録有形文化財', '昭和モダニズムの名建築', '三河湾の絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-2-2',
        onsen_id: 'o-aichi-2',
        name: 'ホテル竹島',
        prefecture: 'aichi',
        type: '温泉ホテル',
        description: '竹島海岸のほど近くに建ち、三河湾と竹島の絶景を独り占めできる温泉ホテル。ナトリウム塩化物泉の温泉は三河湾の海洋性温泉で保温効果が高く、大浴場と露天風呂から竹島の神秘的な景色が楽しめる。夕食は三河産の伊勢海老・アワビ・とらふぐ料理が揃う豪華な海の幸会席で、冬のフグ料理シーズンには特に評判が高い。',
        price: '2食付き 28,000円〜',
        image: './hotels/hoterutakeshima.png',
        tags: ['竹島の絶景', '伊勢海老・アワビ会席', '三河湾の海洋性温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-aichi-2-3',
        onsen_id: 'o-aichi-2',
        name: 'ホテル明山荘',
        prefecture: 'aichi',
        type: '温泉旅館',
        description: '蒲郡温泉の高台に位置し三河湾を一望できる眺望抜群の温泉旅館。ナトリウム塩化物泉の保温性の高い湯は体の芯から温まり、展望露天風呂からは三河湾の海景色が広がる。夕食は蒲郡産の新鮮な魚介と三河の食材を使った会席料理で、三河産あさりの酒蒸し・伊勢海老の刺身・三河産うなぎの蒲焼きが旅人の食欲を存分に満たす。',
        price: '2食付き 22,000円〜',
        image: './hotels/hoterumeisansou.png',
        tags: ['三河湾の展望', '三河うなぎ', 'ナトリウム塩化物泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長島温泉（三重）=====
    {
        id: 'h-mie-1-1',
        onsen_id: 'o-mie-1',
        name: 'ホテル花水木',
        prefecture: 'mie',
        type: '温泉リゾートホテル',
        description: 'ナガシマリゾートに隣接する総合温泉リゾートホテル。伊勢湾の海洋性温泉を引いた「湯あみの島」の大温泉施設を完備し、多彩な浴槽で長島の旅を満喫できる。夕食は伊勢海老・松阪牛・志摩の牡蠣など三重が誇る最高食材を使ったバイキング形式の豪華な和洋ビュッフェが人気で、テーマパーク・アウトレットとの組み合わせ旅行の拠点として家族連れに絶大な人気がある。',
        price: '2食付き 25,000円〜',
        image: './hotels/hoterukasuiki.png',
        tags: ['ナガシマリゾート直結', '伊勢海老・松阪牛ビュッフェ', '大温泉施設'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-1-2',
        onsen_id: 'o-mie-1',
        name: '長島温泉 旅館 湯もとの宿 松の湯',
        prefecture: 'mie',
        type: '温泉旅館',
        description: '長島温泉の湯元に近い老舗旅館。ナトリウム塩化物泉の海洋性温泉は三重の豊かな海を感じさせる塩分豊富な湯で、体の芯からポカポカと温まる保温効果が高い。夕食は木曽川で育った天然鰻の白焼き・伊勢の天然鯛の姿煮・志摩産の牡蠣バター焼きなど三重の食材の宝庫ならではの会席が旅情を高める。',
        price: '2食付き 20,000円〜',
        image: './hotels/nagashimaonsenryokanyumotonoyadomatsunoyu.png',
        tags: ['湯元近接', '天然鰻の白焼き', '志摩産牡蠣'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-1-3',
        onsen_id: 'o-mie-1',
        name: '長島温泉 観光ホテル 萬松館',
        prefecture: 'mie',
        type: '温泉ホテル',
        description: '長島温泉の伝統ある温泉旅館として地元に愛されてきた宿。ナトリウム塩化物泉の豊富な湯量を誇る大浴場と露天風呂で、伊勢湾の自然を感じながら湯浴みが楽しめる。夕食は松阪牛の陶板焼き・伊勢海老の鬼殻焼き・伊勢湾の地魚お造りなど三重県の最高食材が揃い、旅の満足度を高める豪華な会席が旅人をもてなす。',
        price: '2食付き 22,000円〜',
        image: './hotels/nagashimaonsenkankouhoterubanshoukan.png',
        tags: ['松阪牛の陶板焼き', '伊勢海老', 'ナトリウム塩化物泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯の山温泉（三重）=====
    {
        id: 'h-mie-2-1',
        onsen_id: 'o-mie-2',
        name: '希望荘',
        prefecture: 'mie',
        type: '温泉旅館',
        description: '御在所岳の麓に建つ湯の山温泉を代表する温泉旅館。単純アルカリ性泉の肌に優しい湯は美肌効果が高く、鈴鹿山脈の清澄な空気に包まれた露天風呂が絶品。夕食は松阪牛のしゃぶしゃぶ・伊勢海老のお造り・伊賀牛のすき焼きなど三重県が誇る銘柄食材をふんだんに使った豪華会席が旅人の期待を超える満足感を提供する。',
        price: '2食付き 30,000円〜',
        image: './hotels/kibousou.png',
        tags: ['御在所岳麓', '松阪牛しゃぶしゃぶ', 'アルカリ性美肌湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-2-2',
        onsen_id: 'o-mie-2',
        name: '寿亭',
        prefecture: 'mie',
        type: '老舗温泉旅館',
        description: '湯の山温泉の老舗として知られ、創業以来多くの文人墨客に愛されてきた風格ある旅館。単純アルカリ性泉の湯を引いた渓谷を望む露天風呂は御在所岳の四季を映し出す絶景スポット。夕食は松阪牛の高級会席を中心に、伊勢海老・アワビ・三重の山の幸を盛り込んだ格調ある会席が提供され、老舗ならではの丁寧なもてなしが心に残る旅を演出する。',
        price: '2食付き 35,000円〜',
        image: './hotels/hisashitei.png',
        tags: ['文人墨客に愛された老舗', '渓谷露天風呂', '松阪牛の高級会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-2-3',
        onsen_id: 'o-mie-2',
        name: '湯の山温泉 グリーンホテル',
        prefecture: 'mie',
        type: '温泉ホテル',
        description: '御在所ロープウェーの乗り場に近い便利な立地の温泉ホテル。単純アルカリ性泉の湯は柔らかく美肌効果で知られ、御在所岳の山並みを望む展望大浴場が名物。夕食は松阪牛・伊賀牛・伊勢海老などの三重ブランド食材と鈴鹿山脈の山の幸を組み合わせた会席で、ロープウェー観光や御在所岳登山の拠点として多くの旅行者に利用されている。',
        price: '2食付き 20,000円〜',
        image: './hotels/yunoyamaonsenguriinhoteru.png',
        tags: ['御在所ロープウェー近接', '展望大浴場', '三重ブランド食材'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 志摩温泉（三重）=====
    {
        id: 'h-mie-3-1',
        onsen_id: 'o-mie-3',
        name: '志摩観光ホテル ザ クラシック',
        prefecture: 'mie',
        type: '高級リゾートホテル',
        description: '伊勢志摩サミット（2016年）のメイン会場となった格調高いクラシックホテル。英虞湾の絶景を独占できる最高のロケーションで、伊勢志摩の食材を使ったフランス料理「英虞湾フルコース」は世界の首脳をもてなした伝説の料理として名高い。志摩の天然温泉を引いたスパで疲れを癒し、伊勢海老・アワビ・クエを贅沢に使った会席も選べる。',
        price: '2食付き 80,000円〜',
        image: './hotels/shimakankouhoteruzakurashikku.png',
        tags: ['G7伊勢志摩サミット会場', '英虞湾の絶景', '伊勢海老フランス料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-3-2',
        onsen_id: 'o-mie-3',
        name: 'ホテル近鉄アクアヴィラ伊勢志摩',
        prefecture: 'mie',
        type: '温泉リゾートホテル',
        description: '賢島の自然に囲まれた近鉄グループの温泉リゾートホテル。志摩の天然温泉を引いた大浴場と露天風呂は英虞湾を望む絶景スポット。夕食は志摩産の真珠色のアワビ・伊勢海老のグリル・的矢の牡蠣など伊勢志摩の宝物を使ったビュッフェ＆会席が充実し、ファミリーからカップルまで幅広い旅行者が英虞湾の美景とともに豊かな食体験を楽しめる。',
        price: '2食付き 40,000円〜',
        image: './hotels/hoterukintetsuakuaviraiseshima.png',
        tags: ['賢島の自然', 'アワビ・的矢牡蠣', '英虞湾の展望温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-mie-3-3',
        onsen_id: 'o-mie-3',
        name: '伊勢志摩 志摩温泉旅館 的矢の宿',
        prefecture: 'mie',
        type: '温泉旅館',
        description: '牡蠣の産地として名高い的矢湾を望む温泉旅館。志摩の海洋性温泉を引いた内湯と露天風呂は海辺の開放感あふれる湯浴みが楽しめる。夕食は養殖発祥の地・的矢の牡蠣を使った土手鍋・牡蠣フライ・牡蠣の酒蒸しに伊勢海老の鬼殻焼きを加えた海の幸尽くしの会席が旅人の期待を大きく超える充実した内容で提供される。',
        price: '2食付き 28,000円〜',
        image: './hotels/iseshimashimaonsenryokanmatoyanoyado.png',
        tags: ['的矢牡蠣の産地', '牡蠣尽くし会席', '伊勢海老'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 雄琴温泉（滋賀）=====
    {
        id: 'h-shiga-1-1',
        onsen_id: 'o-shiga-1',
        name: 'おごと温泉 びわこ花街道',
        prefecture: 'shiga',
        type: '大型温泉旅館',
        description: '琵琶湖を一望する雄琴温泉の代表的な大型温泉旅館。アルカリ性単純温泉の柔らかな湯は美肌効果で知られ、琵琶湖に面した大浴場と露天風呂は朝焼けと夕日の絶景スポット。夕食は琵琶湖の固有種・ビワマスの刺身と塩焼き・子持ちアユの甘露煮・近江牛のしゃぶしゃぶなど滋賀の食文化が凝縮した近江会席が旅の思い出となる。',
        price: '2食付き 35,000円〜',
        image: './hotels/ogotoonsenbiwakokagaimichi.png',
        tags: ['琵琶湖の絶景', 'ビワマス料理', '近江牛しゃぶしゃぶ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shiga-1-2',
        onsen_id: 'o-shiga-1',
        name: '水明荘',
        prefecture: 'shiga',
        type: '温泉旅館',
        description: '琵琶湖を望む雄琴温泉の温泉旅館。アルカリ性単純温泉の美肌の湯を源泉掛け流しで楽しめ、湖面を望む露天風呂からは四季折々に変わる琵琶湖の風景が楽しめる。夕食は滋賀の食材を使った料理で、近江牛の陶板焼き・琵琶湖の固有種を使った鍋料理・鮒鮓など近江の食文化を伝える一品が揃い、旅情を高める。',
        price: '2食付き 25,000円〜',
        image: './hotels/suimeisou.png',
        tags: ['源泉掛け流し', '近江牛の陶板焼き', '琵琶湖の景観'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shiga-1-3',
        onsen_id: 'o-shiga-1',
        name: '湖上館イン・レイク',
        prefecture: 'shiga',
        type: '温泉ホテル',
        description: '琵琶湖畔に立地し、湖上に浮かぶような非日常感が魅力の温泉ホテル。アルカリ性単純温泉の湯は柔らかく肌に優しく、湖面を見渡す展望大浴場が名物。夕食は近江牛のすき焼き・琵琶湖産のビワマスのムニエル・子持ちアユの唐揚げなど滋賀の旬食材が並ぶ和洋折衷の会席が旅の満足度を高め、京都・大阪からの日帰り圏内の利便性も評価されている。',
        price: '2食付き 22,000円〜',
        image: './hotels/kojoukaninreiku.png',
        tags: ['湖畔の絶景', '近江牛のすき焼き', '京阪神からの好アクセス'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 嵐山温泉（京都）=====
    {
        id: 'h-kyoto-1-1',
        onsen_id: 'o-kyoto-1',
        name: '星のや京都',
        prefecture: 'kyoto',
        type: '高級リゾート旅館',
        description: '嵐山の山懐に抱かれた船でしかたどり着けない秘境の超高級旅館。大堰川のほとりに湧くナトリウム炭酸水素塩泉の美肌の湯は、嵐山の緑と川のせせらぎに包まれた環境で心身を解放する。夕食は京野菜と湯豆腐・ぐじの煮付け・湯葉料理など京の食文化を凝縮した懐石が上質な空間で供され、世界中の旅行者が憧れる日本最高峰の旅館体験を提供する。',
        price: '2食付き 120,000円〜',
        image: './hotels/hoshinoyakyouto.png',
        tags: ['船でしかたどり着けない秘境宿', 'ナトリウム炭酸水素塩泉', '京野菜懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-1-2',
        onsen_id: 'o-kyoto-1',
        name: '嵐山温泉 渡月亭',
        prefecture: 'kyoto',
        type: '老舗温泉旅館',
        description: '渡月橋のほとりに佇む嵐山温泉の老舗旅館。大堰川の清流を眺める露天風呂は嵐山の四季の移ろいを最前列で感じられる特別なスポット。夕食は京料理の王道を極めた京懐石で、京都産の食材を使った料理長自慢の一品が並び、嵐山の竹林と川の風景を眼下に見ながら京の美食を堪能できる旅の体験が何度でも訪れたくなる名宿。',
        price: '2食付き 45,000円〜',
        image: './hotels/arashiyamaonsentogetsutei.png',
        tags: ['渡月橋のほとり', '嵐山の四季の絶景', '京懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-1-3',
        onsen_id: 'o-kyoto-1',
        name: '嵐山温泉 花伝抄',
        prefecture: 'kyoto',
        type: '高級温泉旅館',
        description: '嵐山の竹林と大堰川に囲まれた静寂の中に佇む贅沢な旅館。ナトリウム炭酸水素塩泉の湯を客室専用の半露天風呂で楽しめる全室露天風呂付きの設計が女性旅行者に絶大な支持を得る。夕食は京都の伝統食材・丹波黒豆・京豆腐・賀茂茄子を使った格調ある京懐石で、嵐山の情緒あふれる空間での食事体験が特別な思い出を作る。',
        price: '2食付き 60,000円〜',
        image: './hotels/arashiyamaonsenkadenshou.png',
        tags: ['全室露天風呂付き', '竹林の景観', '京懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 天橋立温泉（京都）=====
    {
        id: 'h-kyoto-2-1',
        onsen_id: 'o-kyoto-2',
        name: '文珠荘 松露亭',
        prefecture: 'kyoto',
        type: '高級温泉旅館',
        description: '日本三景・天橋立を間近に望む絶好のロケーションを誇る高級旅館。含塩化物温泉の海洋性温泉は体の芯から温まる保温効果が高く、天橋立の絶景を一望する露天風呂が名物。夕食は丹後の海の幸をふんだんに使った会席で、間人ガニ・丹後のてっちり・岩牡蠣・鰆の一塩焼きなど京丹後の豊かな食材が旅人を深く感動させる料理として並ぶ。',
        price: '2食付き 45,000円〜',
        image: './hotels/monjusoushourotei.png',
        tags: ['日本三景の絶景', '間人ガニ', '含塩化物温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-2-2',
        onsen_id: 'o-kyoto-2',
        name: '天橋立ホテル',
        prefecture: 'kyoto',
        type: '温泉ホテル',
        description: '天橋立の根元に位置し、眼前に日本三景が広がる絶景温泉ホテル。含塩化物温泉の海洋性温泉を豊富な湯量で提供する大浴場と露天風呂は天橋立観光の拠点として多くの旅行者に利用される。夕食は京丹後の旬の海の幸・松葉ガニ・宮津産の鮮魚・丹後の醤油を使った料理が充実した会席で、天橋立観光と組み合わせた旅プランに最適の宿。',
        price: '2食付き 28,000円〜',
        image: './hotels/amanohashidatehoteru.png',
        tags: ['天橋立の根元', '松葉ガニ料理', '観光の拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-2-3',
        onsen_id: 'o-kyoto-2',
        name: '天橋立 油屋',
        prefecture: 'kyoto',
        type: '老舗温泉旅館',
        description: '天橋立の入口に建つ江戸時代から続く老舗旅館。「日本一長い旅館」とも呼ばれる細長い建造物は天橋立に沿って建てられた独特の佇まい。含塩化物温泉の湯を引いた露天風呂から天橋立の松並木が一望できる。夕食は丹後の新鮮な魚介・宮津の牡蠣・間人のズワイガニを使った料理と地酒「宮の雪」の組み合わせが旅の満足感を高める。',
        price: '2食付き 35,000円〜',
        image: './hotels/amanohashidateaburaya.png',
        tags: ['江戸時代創業の老舗', '天橋立を望む露天風呂', '丹後ズワイガニ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 夕日ヶ浦温泉（京都）=====
    {
        id: 'h-kyoto-3-1',
        onsen_id: 'o-kyoto-3',
        name: '夕日ヶ浦温泉 はなれの宿 月の庭',
        prefecture: 'kyoto',
        type: '高級温泉旅館',
        description: '日本海の夕日で名高い夕日ヶ浦海岸のほど近くに佇む全室離れ造りの高級旅館。塩化物泉の海洋性温泉を専用露天風呂で堪能できる至福の体験が旅行者に絶大な人気。夕食は京丹後の豊かな食材・松葉ガニ・丹後の岩牡蠣・間人の地魚のお造りを軸にした会席が美しい夕日の記憶とともに心に刻まれる。',
        price: '2食付き 55,000円〜',
        image: './hotels/yuuhikeuraonsenhanarenoyadogatsunoniwa.png',
        tags: ['全室離れ専用露天風呂', '日本海の夕日', '松葉ガニ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-3-2',
        onsen_id: 'o-kyoto-3',
        name: 'マリンパレスホテル',
        prefecture: 'kyoto',
        type: '温泉ホテル',
        description: '夕日ヶ浦海岸に面した開放的な温泉ホテル。日本海に面した展望大浴場と露天風呂は水平線に沈む絶景の夕日が楽しめる名物スポット。塩化物泉の海洋性温泉は保温効果が高く、夕食は丹後の旬の海の幸・松葉ガニ・地魚・岩牡蠣などを使ったビュッフェスタイルの豪華な料理が家族や友人グループに人気の旅行者の食欲を満たす。',
        price: '2食付き 28,000円〜',
        image: './hotels/marinparesuhoteru.png',
        tags: ['海岸沿いの絶景', '夕日の露天風呂', '松葉ガニ・岩牡蠣'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kyoto-3-3',
        onsen_id: 'o-kyoto-3',
        name: '夕日ヶ浦温泉 きんせ旅館',
        prefecture: 'kyoto',
        type: '温泉旅館',
        description: '夕日ヶ浦温泉の静かな海辺に佇む家族経営の温泉旅館。塩化物泉の温もりある湯を小さな内湯と露天風呂で源泉掛け流しで楽しめる。夕食は地元の漁師から直接仕入れた日本海の鮮魚・松葉ガニ・ノドグロを使った素朴な海の幸会席が評判で、家族的な雰囲気のおもてなしが旅人の心をほっとさせる宿として地域に根ざした人気がある。',
        price: '2食付き 22,000円〜',
        image: './hotels/yuuhikeuraonsenkinseryokan.png',
        tags: ['源泉掛け流し', 'ノドグロ料理', '漁師直送の鮮魚'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 天見温泉（大阪）=====
    {
        id: 'h-osaka-1-1',
        onsen_id: 'o-osaka-1',
        name: '天見温泉 南天苑',
        prefecture: 'osaka',
        type: '高級温泉旅館',
        description: '大阪府が誇る唯一の源泉かけ流し旅館として名高い天見温泉の名宿。明治時代建築の趣ある建物が国の登録有形文化財に指定され、アルカリ性単純温泉の湯は肌に優しく美肌効果で知られる。夕食は大阪府内で唯一収穫される天見産の食材と、河内のいのち大根・水なすなど大阪の伝統野菜を使った季節の懐石料理が大阪近郊の秘湯として特別な体験を提供する。',
        price: '2食付き 35,000円〜',
        image: './hotels/amamionsennantenen.png',
        tags: ['大阪唯一の源泉かけ流し', '国登録有形文化財の建物', '大阪伝統野菜の懐石'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-1-2',
        onsen_id: 'o-osaka-1',
        name: '天見温泉 山荘',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '大阪府南河内の山間に湧く天見温泉の閑静な旅館。アルカリ性単純温泉の清澄な湯は大阪市内の喧騒を忘れさせる静寂の中で楽しめ、谷川のせせらぎを聞きながらの露天風呂が心身を深く解放する。夕食は河内の山の幸と大阪湾の海の幸を組み合わせた和食会席で、大阪の隠れた名湯として知る人ぞ知る旅人に愛されてきた宿。',
        price: '2食付き 25,000円〜',
        image: './hotels/amamionsensansou.png',
        tags: ['大阪の秘湯', 'アルカリ性単純温泉', '河内の山の幸'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-1-3',
        onsen_id: 'o-osaka-1',
        name: '天見川温泉 旅館 玄',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '大阪と奈良の境に位置する山間の温泉旅館。大阪府内では珍しい天然温泉を引いた内湯と露天風呂で、アルカリ性の柔らかな湯を源泉掛け流しで楽しめる。夕食は大阪の食材と和歌山・奈良の山の幸を融合させた創作和食会席が特徴で、大阪市内から車で1時間ほどの好アクセスながら、別世界の静寂と温泉を楽しめる貴重な宿として旅人に評価されている。',
        price: '2食付き 18,000円〜',
        image: './hotels/amamikawaonsenryokangen.png',
        tags: ['大阪近郊の秘湯', '源泉掛け流し', '創作和食会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 犬鳴山温泉（大阪）=====
    {
        id: 'h-osaka-2-1',
        onsen_id: 'o-osaka-2',
        name: '犬鳴山温泉 山乃湯',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '修験道の霊場・犬鳴山の清流沿いに湧く犬鳴山温泉の老舗旅館。含重曹食塩泉のとろりとした美肌の湯は「関西の奥座敷」として知られ、渓流を望む露天風呂が絶品。夕食は大阪湾の海の幸と紀北山地の山の幸を組み合わせた和食会席で、犬鳴山七宝瀧寺への参詣と組み合���せた修験の旅の拠点として長く旅人に親しまれている。',
        price: '2食付き 22,000円〜',
        image: './hotels/inunakiyamaonsenyamanoyu.png',
        tags: ['含重曹食塩泉の美肌湯', '渓流沿いの露天風呂', '犬鳴山修験の地'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-2-2',
        onsen_id: 'o-osaka-2',
        name: '犬鳴山温泉 やまびこ旅館',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '犬鳴川のせせらぎを聞きながら静かに過ごせる山間の温泉旅館。含重曹食塩泉の柔らかな湯を源泉掛け流しで楽しめる内湯と露天風呂が自慢。夕食は大阪泉州の新鮮な海の幸と紀北の山の幸を組み合わせた家庭的な和食会席で、大阪市内から日帰りでも訪れる常連客が多く、アクセスの良さと本格的な温泉が両立した希少な宿。',
        price: '2食付き 18,000円〜',
        image: './hotels/inunakiyamaonsenyamabikoryokan.png',
        tags: ['源泉掛け流し', '大阪近郊の秘湯', '泉州の海の幸'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-osaka-2-3',
        onsen_id: 'o-osaka-2',
        name: '犬鳴山温泉 元湯 犬鳴山荘',
        prefecture: 'osaka',
        type: '温泉旅館',
        description: '犬鳴山温泉の元湯近くに建つ温泉旅館。含重曹食塩泉の泡立ちのある美肌の湯は神経痛・リウマチ・疲労回復に効能があり、湯治目的の常連客が絶えない。渓谷美を望む露天風呂は四季折々の自然の色彩が楽しめ、夕食は地元食材を使った素朴な和食会席が女将の手で丁寧に仕上げられ、山の静寂と温泉の温もりが旅人を深く癒す。',
        price: '2食付き 20,000円〜',
        image: './hotels/inunakiyamaonsenmotoyuinunakisansou.png',
        tags: ['元湯近接', '含重曹食塩泉の療養湯', '渓谷美の四季'],
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
        name: '湯村温泉 井づつや',
        prefecture: 'hyogo',
        type: '老舗温泉旅館',
        description: 'NHKドラマ「夢千代日記」のロケ地となった情緒ある湯村温泉の代表的な老舗旅館。源泉98度という日本屈指の高温から引湯するナトリウム塩化物泉は「荒湯」として名高く、美肌・保温効果が高い。夕食は山陰の豊かな食材・松葉ガニ・岩牡蠣・但馬牛の朴葉焼きが味わえる山陰会席が、昭和の温泉郷の風情とともに旅人を深く感動させる。',
        price: '2食付き 35,000円〜',
        image: './hotels/yumuraonsenizutsuya.png',
        tags: ['夢千代日記のロケ地', '荒湯98度の源泉', '松葉ガニ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-2-2',
        onsen_id: 'o-hyogo-2',
        name: '朝野家',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '湯村温泉の中心部に建つ風格ある温泉旅館。98度の荒湯から引いたナトリウム塩化物泉の源泉掛け流し温泉は保温性が高く、体の芯から温まる。夕食は但馬の最高食材・松葉ガニのフルコース・但馬牛のすき焼き・山陰の地魚料理が旅人を満足させ、夢千代の舞台・湯村の温泉文化を堪能できる特別な滞在体験が旅の記憶に深く刻まれる。',
        price: '2食付き 28,000円〜',
        image: './hotels/asanoie.png',
        tags: ['98度の荒湯', '松葉ガニフルコース', '但馬牛のすき焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-2-3',
        onsen_id: 'o-hyogo-2',
        name: '湯村温泉 佳泉郷 井づつや',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '湯村温泉の石畳の温泉街に位置する旅館。兵庫北部の山間に湧く98度の高温源泉から引湯したナトリウム塩化物泉は美肌・疲労回復に優れ、露天風呂で源泉掛け流しの名湯が楽しめる。夕食は山陰但馬の厳選食材・松葉ガニ・但馬黒牛・岩津ねぎを使った会席料理と地酒「浜千鳥」との組み合わせが旅の豊かさを演出する。',
        price: '2食付き 25,000円〜',
        image: './hotels/yumuraonsenkasensatoizutsuya.png',
        tags: ['石畳の温泉街', '岩津ねぎ料理', '但馬黒牛会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 城崎温泉（兵庫）=====
    {
        id: 'h-hyogo-3-1',
        onsen_id: 'o-hyogo-3',
        name: '西村屋 本館',
        prefecture: 'hyogo',
        type: '高級老舗旅館',
        description: '創業明治元年、城崎温泉を代表する老舗高級旅館。ナトリウム塩化物泉の源泉掛け流しを楽しめる宿泊施設として、七つの外湯めぐりの文化を守る城崎の伝統を体現する存在。夕食は但馬の最高食材・松葉ガニのフルコース・但馬牛のしゃぶしゃぶ・山陰の地魚料理が格調ある空間で供され、志賀直哉も逗留した文学的な温泉地の雰囲気の中で格別の旅体験を提供する。',
        price: '2食付き 60,000円〜',
        image: './hotels/nishimurayahonkan.png',
        tags: ['明治元年創業の老舗', '7つの外湯めぐり', '松葉ガニフルコース'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-3-2',
        onsen_id: 'o-hyogo-3',
        name: '旅館 ときわ別館',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '城崎温泉の石畳の温泉街に建つ情緒あふれる温泉旅館。ナトリウム塩化物泉の源泉掛け流しを宿の内湯で楽しめ、七つの外湯めぐりの拠点として最適なロケーション。夕食は但馬の松葉ガニ・但馬牛・日本海の鮮魚を使った山陰会席が人気で、城崎の外湯文化と温泉旅館文化が融合した独特の旅体験が旅人に城崎を何度でも訪れたくさせる。',
        price: '2食付き 35,000円〜',
        image: './hotels/ryokantokiwabekkan.png',
        tags: ['外湯めぐりの拠点', 'ナトリウム塩化物泉', '但馬牛・松葉ガニ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-3-3',
        onsen_id: 'o-hyogo-3',
        name: '城崎温泉 一富士旅館',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '城崎温泉の大谿川沿いに建つ風情ある老舗旅館。大谿川に架かる橋と柳並木が映える城崎温泉らしい景観の中、ナトリウム塩化物泉の源泉掛け流しを楽しみながら七つの外湯めぐりが楽しめる。夕食は但馬の旬食材・松葉ガニ（冬）・岩牡蠣（夏）・但馬牛の陶板焼きを中心とした会席が季節ごとの城崎の魅力を伝える。',
        price: '2食付き 30,000円〜',
        image: './hotels/kinosakionsenichifujiryokan.png',
        tags: ['大谿川沿いの絶景', '松葉ガニ・岩牡蠣', '外湯めぐり'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 洲本温泉（兵庫）=====
    {
        id: 'h-hyogo-4-1',
        onsen_id: 'o-hyogo-4',
        name: '洲本温泉 ホテルニューアワジ',
        prefecture: 'hyogo',
        type: '大型温泉ホテル',
        description: '淡路島・洲本温泉を代表するリゾートホテル。大阪湾と淡路島の絶景を一望できる開放的な展望露天風呂が名物で、塩化物泉の海洋性温泉は保温効果が高い。夕食は淡路島の食の宝庫ならではの料理で、淡路牛のしゃぶしゃぶ・淡路島産玉ねぎを使ったスープ・明石の鯛の姿煮など淡路島グルメが揃い、ファミリー・カップルを問わず人気の宿泊施設。',
        price: '2食付き 30,000円〜',
        image: './hotels/sumotoonsenhoterunyuuawaji.png',
        tags: ['大阪湾の絶景', '淡路牛しゃぶしゃぶ', '塩化物海洋性温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-4-2',
        onsen_id: 'o-hyogo-4',
        name: '淡路島温泉 シーサイドホテル洲本',
        prefecture: 'hyogo',
        type: '温泉ホテル',
        description: '洲本温泉の海岸沿いに建つ開放的な温泉ホテル。太平洋と紀淡海峡を望む展望大浴場と露天風呂は塩化物泉の海洋性温泉を豊富な湯量で提供。夕食は淡路島の旬食材・淡路牛・鱧料理・淡路産タコの刺身・明石海峡の地魚を使った豪華な海の幸会席が旅人の食欲を満たし、明石海峡大橋を渡った先の淡路島観光の拠点として多くの旅行者に利用される。',
        price: '2食付き 22,000円〜',
        image: './hotels/awajishimaonsenshiisaidohoterusumoto.png',
        tags: ['海岸沿いの絶景', '淡路牛・鱧料理', '淡路島観光の拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hyogo-4-3',
        onsen_id: 'o-hyogo-4',
        name: '洲本温泉 旅館 海月',
        prefecture: 'hyogo',
        type: '温泉旅館',
        description: '洲本温泉の静かな海辺に佇む小さな温泉旅館。塩化物泉の温泉を源泉掛け流しで提供する貴重な宿で、こぢんまりとした内湯と露天風呂で大阪湾を望みながらの湯浴みが楽しめる。夕食は淡路島産の新鮮な食材を使った素朴な海の幸会席で、淡路産玉ねぎの甘さを活かした料理・鱧の落とし・鯛の昆布締めなど淡路島の豊かな食文化を体験できる。',
        price: '2食付き 20,000円〜',
        image: './hotels/sumotoonsenryokankurage.png',
        tags: ['源泉掛け流し', '淡路産玉ねぎ料理', '鱧の落とし'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 洞川温泉（奈良）=====
    {
        id: 'h-nara-1-1',
        onsen_id: 'o-nara-1',
        name: '洞川温泉 みのや旅館',
        prefecture: 'nara',
        type: '老舗温泉旅館',
        description: '大峯山龍泉寺の門前町に建つ洞川温泉の老舗旅館。アルカリ性単純温泉の清澄な湯は修験道の聖地・大峯山の神聖な山気と相まって心身を清める湯浴み体験を提供する。夕食は奥吉野の山の幸・大峯山麓の山菜料理・吉野本葛を使った鍋料理・天川村の名水で仕込んだ豆腐料理が旅情を高め、修験の旅の疲れを癒す素朴な会席が地域の文化を伝える。',
        price: '2食付き 18,000円〜',
        image: './hotels/doukawaonsenminoyaryokan.png',
        tags: ['大峯山龍泉寺の門前', '修験道の聖地', '吉野山菜料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-1-2',
        onsen_id: 'o-nara-1',
        name: '旅館 角甚',
        prefecture: 'nara',
        type: '温泉旅館',
        description: '洞川温泉街の中心部に建つ江戸時代から続く旅館。大峯山修験者の宿坊としての歴史を持つ宿で、アルカリ性単純温泉の澄んだ湯は神聖な修験の地の清らかさを感じさせる。夕食は天川村の名水を使った天川豆腐・大峯山の山菜のおひたし・奥吉野の鮎料理・洞川名物の陀羅尼助の薬膳料理など奥吉野の滋味深い食材が旅人の心と体を癒す。',
        price: '2食付き 16,000円〜',
        image: './hotels/ryokankakujin.png',
        tags: ['修験者宿坊の歴史', '天川豆腐', 'アルカリ性単純温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-1-3',
        onsen_id: 'o-nara-1',
        name: '洞川温泉 花屋徳兵衛',
        prefecture: 'nara',
        type: '温泉旅館',
        description: '大峯山の麓・洞川温泉の静かな温泉街に佇む家族経営の旅館。アルカリ性単純温泉の湯は清澄で肌に優しく、小さな内湯で心静かに湯浴みができる。夕食は地元の山の幸をふんだんに使った素朴な会席で、天川の名水で育てた山菜・きのこ・吉野の山葵・奥大和の地野菜が旅人の食欲を満たし、修験道の霊山が近くにある神聖な雰囲気の中での静かな滞在体験が心に残る。',
        price: '2食付き 14,000円〜',
        image: './hotels/doukawaonsenhanayatokubyoue.png',
        tags: ['家庭的なおもてなし', '大峯山麓の山菜', '名水の里の豆腐料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 十津川温泉郷（奈良）=====
    {
        id: 'h-nara-2-1',
        onsen_id: 'o-nara-2',
        name: '十津川温泉 ホテル昴',
        prefecture: 'nara',
        type: '温泉旅館',
        description: '熊野古道が通る十津川村に位置する、世界遺産の自然と文化に包まれた温泉旅館。含硫黄ナトリウム炭酸水素塩泉の白濁した湯は美肌・神経痛・疲労回復に優れた効能を持つ。夕食は奥吉野の山の幸・十津川鹿のジビエ料理・熊野川の天然鮎・吉野本葛を使った鍋など南大和の山里の食材が旅人の体を内側から癒す。',
        price: '2食付き 22,000円〜',
        image: './hotels/totsugawaonsenhoterusubaru.png',
        tags: ['世界遺産・熊野古道', '含硫黄白濁湯', '十津川鹿のジビエ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-2-2',
        onsen_id: 'o-nara-2',
        name: '上湯温泉 神湯荘',
        prefecture: 'nara',
        type: '秘湯旅館',
        description: '十津川温泉郷の最奥部に位置する「日本秘湯を守る会」会員の一軒宿。含硫黄ナトリウム炭酸水素塩泉の白濁した湯を渓流沿いの露天風呂で楽しめる秘湯中の秘湯。熊野の山深くに宿る神聖な雰囲気の中で、十津川の鮎・山菜・ジビエを使った山里料理が旅人の心を解きほぐし、熊野古道巡礼と組み合わせた深い旅体験が忘れられない記憶となる。',
        price: '2食付き 20,000円〜',
        image: './hotels/ueyuonizumikamiyusou.png',
        tags: ['日本秘湯を守る会', '渓流沿いの露天風呂', '熊野古道巡礼'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nara-2-3',
        onsen_id: 'o-nara-2',
        name: '十津川温泉 庵の湯',
        prefecture: 'nara',
        type: '温泉旅館',
        description: '十津川村の村営旅館として地域に根ざした温泉宿。含硫黄温泉の澄んだ湯を源泉掛け流しで楽しめ、大峯山系の豊かな自然に囲まれた環境で心身をリセットできる。夕食は奥吉野の山菜・きのこ・十津川村産の食材を使った素朴な山里会席が地域の食文化を伝え、ゆったりとした時間の流れの中での滞在が都会の喧騒を忘れさせる貴重な体験を提供する。',
        price: '2食付き 16,000円〜',
        image: './hotels/totsugawaonseniorinoyu.png',
        tags: ['村営の温泉旅館', '源泉掛け流し', '大峯山系の自然'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 白浜温泉（和歌山）=====
    {
        id: 'h-wakayama-1-1',
        onsen_id: 'o-wakayama-1',
        name: '浜千鳥の湯 海舟',
        prefecture: 'wakayama',
        type: '高級温泉旅館',
        description: '白浜温泉の高台に位置し、太平洋と白良浜の絶景を独り占めできる高級温泉旅館。含塩化物温泉の海洋性温泉は保温効果が高く、オーシャンビューの半露天風呂付き客室が女性旅行者に絶大な人気。夕食は紀州の最高食材・本マグロのトロ・クエ鍋・伊勢海老のお造り・南紀産みかんのデザートが並ぶ贅沢な会席が旅の感動を高める。',
        price: '2食付き 60,000円〜',
        image: './hotels/hamachidorinoyukaishuu.png',
        tags: ['太平洋の絶景', 'クエ鍋', '半露天付き客室'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-1-2',
        onsen_id: 'o-wakayama-1',
        name: 'ホテル川久',
        prefecture: 'wakayama',
        type: '高級リゾートホテル',
        description: '外観はスペイン・バルセロナのサグラダファミリアを想起させる独創的な建築が話題の白浜温泉の象徴的なホテル。ローマ皇帝の湯殿をイメージした豪壮な大浴場は金箔を使った贅沢な空間で、含塩化物温泉の海洋性温泉を楽しめる。夕食は紀州・白浜の海の幸・天然本マグロ・クエ・伊勢海老を使った豪華な会席料理がバブル期の栄華を今に伝える。',
        price: '2食付き 50,000円〜',
        image: './hotels/hoterukawakyuu.png',
        tags: ['世界各地の石材で飾られた豪壮な建築', '天然本マグロ', '伊勢海老・クエ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-1-3',
        onsen_id: 'o-wakayama-1',
        name: '白浜温泉 むさし',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '白浜温泉の中心部に位置し、白良浜ビーチへのアクセスが良い温泉旅館。含塩化物温泉の海洋性温泉を内湯と露天風呂で楽しめ、太平洋の潮風を感じながらの湯浴みが白浜の旅らしい開放感を演出する。夕食は南紀の海の幸・クエ鍋・本マグロのお造り・南高梅を使ったドレッシングと地酒「黒牛」の組み合わせが紀州の食文化を堪能できる会席として評判。',
        price: '2食付き 28,000円〜',
        image: './hotels/shirahamaonsenmusashi.png',
        tags: ['白良浜近接', 'クエ鍋', '南高梅料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 熊野本宮温泉郷（和歌山）=====
    {
        id: 'h-wakayama-2-1',
        onsen_id: 'o-wakayama-2',
        name: '川湯温泉 仙人風呂',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '冬季に大塔川全体が露天風呂となる「仙人���呂」で名高い川湯温泉の旅館。大塔川の川底から自噴する単純泉は柔らかく肌に優しく、川岸の湯浴みは世界遺産・熊野の聖地での特別体験。夕食は熊野の山の幸・熊野地鶏の焼き鳥・那智黒石で焼く那智黒焼きそば・熊野川の天然鮎料理など熊野の食文化を体験できる会席が旅情を高める。',
        price: '2食付き 22,000円〜',
        image: './hotels/kawayuonsensenninfuro.png',
        tags: ['川底から湧く天然温泉', '世界遺産・熊野', '冬の仙人風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-2-2',
        onsen_id: 'o-wakayama-2',
        name: '渡瀬温泉 渡瀬荘',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '熊野本宮大社のほど近くに湧く渡瀬温泉の旅館。硫黄を含む単純温泉は美肌・疲労回復に優れた効能を持ち、熊野古道巡礼の疲れをしっかり癒してくれる名湯。夕食は熊野の食材を使った山里会席で、熊野牛のすき焼き・山菜の天ぷら・クエ鍋・熊野川の天然鮎が揃い、巡礼の聖地での滞在に深い充実感をもたらす。',
        price: '2食付き 20,000円〜',
        image: './hotels/wataseonsenwatasesou.png',
        tags: ['熊野本宮大社近接', '熊野古道巡礼の宿', '熊野牛のすき焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-2-3',
        onsen_id: 'o-wakayama-2',
        name: '湯の峰温泉 つぼ湯旅館 あずまや',
        prefecture: 'wakayama',
        type: '秘湯旅館',
        description: '世界遺産に登録された「つぼ湯」がある湯の峰温泉の老舗旅館。日本最古の温泉の一つとされるつぼ湯の含硫黄炭酸水素塩泉は七色に変化する神秘の湯として知られ、世界遺産の温泉で入浴できる世界唯一の場所として世界中から旅人が訪れる。夕食は熊野の山の幸を使った素朴な会席料理が聖地での特別な体験を深める。',
        price: '2食付き 18,000円〜',
        image: './hotels/yunomineonsentsuboyuryokanazumaya.png',
        tags: ['世界遺産のつぼ湯', '日本最古の温泉', '七色に変化する神秘の湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 南紀勝浦温泉（和歌山）=====
    {
        id: 'h-wakayama-3-1',
        onsen_id: 'o-wakayama-3',
        name: 'ホテル浦島',
        prefecture: 'wakayama',
        type: '大型温泉ホテル',
        description: '太平洋に突き出た半島全体を使った巨大温泉ホテルで、洞窟大浴場「忘帰洞」で全国的に有名。ナトリウム塩化物泉の海洋性温泉を洞窟・日帰り・展望など多彩な温泉施設で楽しめる。夕食は本マグロの水揚げで名高い那智勝浦港の天然本マグロ・クエ鍋・伊勢海老など南紀の最高食材が揃う豪華な海の幸会席が圧倒的なボリュームで旅人を満足させる。',
        price: '2食付き 30,000円〜',
        image: './hotels/hoteruurashima.png',
        tags: ['洞窟大浴場・忘帰洞', '天然本マグロの産地', '太平洋一望の絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-3-2',
        onsen_id: 'o-wakayama-3',
        name: '中の島ホテル',
        prefecture: 'wakayama',
        type: '温泉ホテル',
        description: '那智勝浦湾の島に建つ船でしかたどり着けない離島の温泉ホテル。太平洋を三方から眺める絶景の展望露天風呂が名物で、ナトリウム塩化物泉の海洋性温泉は体の芯から温まる。夕食は那智勝浦港直送の天然本マグロ・クエのフルコース・伊勢海老の姿焼きなど南紀最高の海の幸が揃い、離島ならではの非日常感が旅の記憶を豊かにする。',
        price: '2食付き 35,000円〜',
        image: './hotels/nakanoshimahoteru.png',
        tags: ['船でしかたどり着けない離島宿', '本マグロ・クエフルコース', '太平洋三方の絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-3-3',
        onsen_id: 'o-wakayama-3',
        name: '南紀勝浦温泉 旅館 四季',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '那智勝浦温泉の静かな場所に位置する家族経営の温泉旅館。ナトリウム塩化物泉の温泉を源泉掛け流しで楽しめる内湯と露天風呂で、南紀の自然に抱かれた静寂の湯浴みが心身を癒す。夕食は那智勝浦の天然本マグロ・クエ鍋・紀州梅干しを使った料理など南紀の食文化を存分に堪能できる会席が、手頃な価格で旅行者に本物の南紀の味を提供する。',
        price: '2食付き 22,000円〜',
        image: './hotels/nankikatsuuraonsenryokanshiki.png',
        tags: ['源泉掛け流し', '天然本マグロ・クエ', '紀州梅料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 龍神温泉（和歌山）=====
    {
        id: 'h-wakayama-4-1',
        onsen_id: 'o-wakayama-4',
        name: '龍神温泉 上御殿',
        prefecture: 'wakayama',
        type: '老舗温泉旅館',
        description: '日本三美人の湯の一つに数えられる龍神温泉の代表旅館。重炭酸ソーダ泉の美肌効果は日本屈指とされ、入浴後の肌のしっとり感が格別。紀ノ川の源流・日高川沿いに湧く名湯を源泉掛け流しで楽しめる。夕食は龍神の山の幸・熊野牛・ジビエ料理・紀ノ川の天然鮎など奥紀州の食材を使った山里会席が旅情を深める。',
        price: '2食付き 28,000円〜',
        image: './hotels/ryuujinonsenuegoten.png',
        tags: ['日本三美人の湯', '重炭酸ソーダ泉', '熊野牛会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-4-2',
        onsen_id: 'o-wakayama-4',
        name: '季楽里龍神',
        prefecture: 'wakayama',
        type: '高級温泉旅館',
        description: '高野山・熊野古道の中間に位置する龍神温泉の格調ある旅館。日本三美人の湯として名高い重炭酸ソーダ泉の美肌の湯を全室の専用露天風呂で楽しめる贅沢な設計が女性旅行者に人気。夕食は奥紀州の厳選食材・熊野牛のしゃぶしゃぶ・ジビエ（猪・鹿）・龍神の山菜を使った山里会席が、日本有数の美肌湯の体験と相まって心に残る旅を演出する。',
        price: '2食付き 50,000円〜',
        image: './hotels/kirariryuujin.png',
        tags: ['全室露天風呂付き', '日本三美人の湯', '熊野牛しゃぶしゃぶ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-wakayama-4-3',
        onsen_id: 'o-wakayama-4',
        name: '元湯 龍神温泉',
        prefecture: 'wakayama',
        type: '温泉旅館',
        description: '龍神温泉の発祥の地・元湯に最も近い老舗旅館。日本三美人の湯・重炭酸ソーダ泉を源泉掛け流しで楽しめる数少ない宿の一つで、湯の柔らかさと肌への浸透力は特別。夕食は龍神村の山の幸・熊野牛・山菜・きのこ・清流の鮎を使った素朴な山里会席が女将の手で丁寧に仕上げられ、奥紀州の深い自然の中での静かな滞在が旅人の心身を根本から癒す。',
        price: '2食付き 22,000円〜',
        image: './hotels/motoyuryuujinonsen.png',
        tags: ['龍神温泉元湯近接', '源泉掛け流し', '奥紀州の山里会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 三朝温泉（鳥取）=====
    {
        id: 'h-tottori-1-1',
        onsen_id: 'o-tottori-1',
        name: '三朝温泉 木屋旅館',
        prefecture: 'tottori',
        type: '老舗温泉旅館',
        description: '三朝川のほとりに建つ三朝温泉を代表する老舗旅館。世界屈指のラドン含有量を誇る放射能泉は「不思議な治癒力」を持つ名湯として国際的に知られ、痛風・リウマチ・高血圧に優れた効能を持つ。夕食は鳥取の旬食材・松葉ガニ・三朝川の鮎・大山の山の幸を使った山陰会席が旅情を高め、三朝大橋から湯煙が立ち上る温泉地の風景が心を和ませる。',
        price: '2食付き 30,000円〜',
        image: './hotels/misasaonsenkiyaryokan.png',
        tags: ['世界屈指のラドン泉', '松葉ガニ会席', '三朝川沿いの老舗'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-1-2',
        onsen_id: 'o-tottori-1',
        name: '旅館 大橋',
        prefecture: 'tottori',
        type: '温泉旅館',
        description: '三朝温泉の三朝大橋近くに建つ人気温泉旅館。ラドン放射能泉の源泉掛け流し風呂は筋肉痛・神経痛・慢性疾患に効能があり、露天風呂から三朝川の清流と渓谷美を眺めながらの湯浴みが絶品。夕食は山陰の食材・松葉ガニ・大山地��・三朝の山菜を使った会席料理と地酒「諏訪泉」の組み合わせが三朝温泉の風情とともに旅の記憶を豊かにする。',
        price: '2食付き 25,000円〜',
        image: './hotels/ryokanoohashi.png',
        tags: ['源泉掛け流しのラドン泉', '三朝川の渓谷美', '大山地鶏料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-1-3',
        onsen_id: 'o-tottori-1',
        name: '三朝温泉 たまわりの湯 斉木別館',
        prefecture: 'tottori',
        type: '温泉旅館',
        description: '三朝温泉の中心部に位置し、世界最高レベルのラドン含有量を誇る放射能泉を源泉掛け流しで楽しめる旅館。三朝川沿いの露天風呂は川面から立ち上る湯煙と紅葉の美しいコントラストが印象的。夕食は鳥取の山陰の幸・松葉ガニ・境港産の鮮魚・大山の山菜を使った会席が旅人を満足させ、三朝神社参拝と組み合わせた滞在が地域文化への理解を深める。',
        price: '2食付き 22,000円〜',
        image: './hotels/misasaonsentamawarinoyusaikibekkan.png',
        tags: ['世界最高レベルのラドン泉', '三朝川沿いの露天風呂', '境港産鮮魚'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 皆生温泉（鳥取）=====
    {
        id: 'h-tottori-2-1',
        onsen_id: 'o-tottori-2',
        name: '皆生温泉 東光園',
        prefecture: 'tottori',
        type: '老舗温泉旅館',
        description: '日本海を一望する皆生温泉の高台に建つ個性的な建築で知られる老舗旅館。菊竹清訓設計の前衛的な建物は建築ファンにも名高く、日本海に沈む夕日を望む露天風呂は全国屈指の絶景スポット。ナトリウム塩化物泉の海洋性温泉は保温効果が高く、夕食は境港産の松葉ガニ・旬の山陰地魚・大山豆腐を使った豪華な山陰会席が旅人を深く満足させる。',
        price: '2食付き 35,000円〜',
        image: './hotels/kaikeonsentoukousono.png',
        tags: ['名建築家・菊竹清訓の設計', '境港産松葉ガニ', '日本海の夕日露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-2-2',
        onsen_id: 'o-tottori-2',
        name: 'ホテル皆生つるや',
        prefecture: 'tottori',
        type: '温泉ホテル',
        description: '皆生温泉の海岸近くに建つ温泉ホテル。ナトリウム塩化物泉の海洋性温泉は三方を日本海に囲まれた皆生ならではの開放感と保温効果が特徴。大山と日本海を同時に眺められる展望露天風呂が名物で、夕食は境港の松葉ガニ・大山で育った大山鶏・のどぐろの姿焼きなど山陰の食材を使った会席が旅情を高める。',
        price: '2食付き 25,000円〜',
        image: './hotels/hoterukaiketsuruya.png',
        tags: ['日本海と大山の絶景', '大山鶏料理', 'のどぐろの姿焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tottori-2-3',
        onsen_id: 'o-tottori-2',
        name: '皆生グランドホテル天水',
        prefecture: 'tottori',
        type: '温泉ホテル',
        description: '皆生温泉の中心部に位置する大型温泉ホテル。ナトリウム塩化物泉の豊富な湯量を誇る大浴場と露天風呂は日本海の大パノラマが楽しめる。夕食は境港水産の松葉ガニ・日本海の旬魚のお造り・鳥取和牛の陶板焼きなど鳥取が誇る食材が並ぶビュッフェ＆会席スタイルの食事が旅行者の多様なニーズに応えている。',
        price: '2食付き 22,000円〜',
        image: './hotels/kaikegurandohoterutensui.png',
        tags: ['日本海のパノラマ', '境港松葉ガニ', '鳥取和牛'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 玉造温泉（島根）=====
    {
        id: 'h-shimane-1-1',
        onsen_id: 'o-shimane-1',
        name: '玉造温泉 白石家',
        prefecture: 'shimane',
        type: '高級温泉旅館',
        description: '日本最古の美肌の湯・玉造温泉を代表する風格ある旅館。含アルカリ性硫酸塩泉の湯は古事記にも記される縁結びの神・出雲大社ゆかりの名湯で、入浴後の肌のつるつる感が格別。夕食は島根の最高食材・松葉ガニ・宍道湖のしじみ・出雲の寒しじみを使った会席が旅情を高め、日本神話の地・出雲の神秘的な雰囲気の中での滞在が忘れられない旅体験を提供する。',
        price: '2食付き 40,000円〜',
        image: './hotels/tamatsukurionsenshiroishiie.png',
        tags: ['日本最古の美肌湯', '松葉ガニ・宍道湖しじみ', '縁結びの神ゆかりの温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-1-2',
        onsen_id: 'o-shimane-1',
        name: 'ホテル玉泉',
        prefecture: 'shimane',
        type: '老舗温泉旅館',
        description: '玉造温泉街の中心部に建つ老舗旅館。含アルカリ性硫酸塩泉の美肌の湯を豊富な湯量で源泉掛け流しする大浴場と露天風呂が自慢。夕食は宍道湖七珍の食材・宍道湖のしじみ汁・ヤマトシジミの酒蒸し・出雲そばなど出雲の食文化を存分に体験できる島根会席が旅人の心を豊かにする。',
        price: '2食付き 28,000円〜',
        image: './hotels/hoterugyokusen.png',
        tags: ['源泉掛け流しの美肌湯', '宍道湖七珍の料理', '出雲そば'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-1-3',
        onsen_id: 'o-shimane-1',
        name: '清風荘',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '玉造温泉の温泉街に位置する落ち着きある旅館。古事記や万葉集にも登場する玉造温泉の含アルカリ性硫酸塩泉は美肌に優れ、小さな庭を眺める内湯と露天風呂で源泉の恵みをゆっくり楽しめる。夕食は松葉ガニ・宍道湖しじみ・出雲の旬野菜を使った会席料理と地酒「豊の秋」の組み合わせが出雲の自然の豊かさを実感させる。',
        price: '2食付き 22,000円〜',
        image: './hotels/seifuusou.png',
        tags: ['万葉集ゆかりの名湯', '松葉ガニ会席', 'アルカリ性美肌湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 松江しんじ湖温泉（島根）=====
    {
        id: 'h-shimane-2-1',
        onsen_id: 'o-shimane-2',
        name: '松江しんじ湖温泉 皆美館',
        prefecture: 'shimane',
        type: '老舗高級旅館',
        description: '明治時代創業、天皇皇后両陛下もご宿泊の格調ある老舗旅館。宍道湖を眺める日本庭園と露天風呂は四季折々の美しさで知られる。単純アルカリ性泉の美肌の湯を楽しんだ後の夕食は宍道湖七珍の最高峰・ヤマトシジミの茶碗蒸し・宍道湖産の天然うなぎ・鯛茶漬けとして知られる鯛めしが松江の食文化の粋を伝える。',
        price: '2食付き 55,000円〜',
        image: './hotels/matsueshinjimizuumionsentomomikan.png',
        tags: ['天皇皇后ご宿泊の老舗', '宍道湖の日本庭園', '宍道湖七珍会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-2-2',
        onsen_id: 'o-shimane-2',
        name: '松江温泉 ホテル一畑',
        prefecture: 'shimane',
        type: '温泉ホテル',
        description: '宍道湖のほとりに建つ松江しんじ湖温泉の代表的なホテル。宍道湖の夕日を眺める展望露天風呂は「日本一の夕日」ともいわれる絶景スポット。単純アルカリ性泉の美肌の湯を楽しんだ後の夕食は宍道湖のしじみ・松江産のうなぎ・隠岐の岩牡蠣・松葉ガニなど島根の食材を使ったビュッフェ＆会席スタイルの豪華な料理が旅人を満足させる。',
        price: '2食付き 30,000円〜',
        image: './hotels/matsueonsenhoteruichibata.png',
        tags: ['宍道湖の夕日絶景', '宍道湖しじみ・うなぎ', '松江観光の拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-2-3',
        onsen_id: 'o-shimane-2',
        name: '松江しんじ湖温泉 なにわ一水',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '宍道湖を望む松江しんじ湖温泉の旅館。単純アルカリ性泉の美肌の湯を引いた露天風呂から宍道湖に沈む夕日が楽しめる名物スポット。夕食は宍道湖のヤマトシジミ鍋・松江産天然うなぎの白焼き・出雲産の旬野菜・松葉ガニを使った松江会席が宍道湖の夕景とともに旅の記憶に残る食体験を提供する。',
        price: '2食付き 25,000円〜',
        image: './hotels/matsueshinjimizuumionsennaniwaissui.png',
        tags: ['宍道湖の夕日', '天然うなぎの白焼き', '宍道湖しじみ鍋'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 温泉津温泉（島根）=====
    {
        id: 'h-shimane-3-1',
        onsen_id: 'o-shimane-3',
        name: '温泉津温泉 旅館 のがわや',
        prefecture: 'shimane',
        type: '老舗温泉旅館',
        description: '世界遺産・石見銀山に近い温泉津温泉の江戸時代から続く老舗旅館。含塩化物・炭酸水素塩泉の湯は神経痛・リウマチ・皮膚病に優れた効能を持ち、ユネスコ世界遺産の温泉地として認定された名湯。石畳の温泉街を散策した後に源泉掛け流しの湯でゆっくり疲れを癒し、石見の海の幸・松葉ガニ・のどぐろの会席が滞在を豊かにする。',
        price: '2食付き 22,000円〜',
        image: './hotels/yunotsuonsenryokannogawaya.png',
        tags: ['ユネスコ世界遺産の温泉地', '源泉掛け流しの療養湯', 'のどぐろ会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-3-2',
        onsen_id: 'o-shimane-3',
        name: '温泉津温泉 落合荘',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '温泉津温泉の石畳の温泉街にある江戸時代の建造物を改装した風情ある旅館。世界遺産の温泉地に湧く含塩化物炭酸水素塩泉は効能豊かで、源泉掛け流しの内湯と外湯（元湯・薬師湯）めぐりを楽しめる。夕食は石見の旬食材・日本海の地魚・石見ポーク・旬の山菜を使った素朴な山陰会席が世界遺産の温泉街の雰囲気とともに旅の充実感を高める。',
        price: '2食付き 18,000円〜',
        image: './hotels/yunotsuonsenochiaisou.png',
        tags: ['世界遺産の温泉街', '外湯めぐり', '石見ポーク料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-shimane-3-3',
        onsen_id: 'o-shimane-3',
        name: '薬師湯 旅館 中村屋',
        prefecture: 'shimane',
        type: '温泉旅館',
        description: '温泉津温泉の外湯「薬師湯」に最も近い旅館。世界遺産に登録された温泉津温泉の含塩化物炭酸水素塩泉は重要文化財の建物に湛えられた歴史ある名湯で、湯の色が時刻によって変化する神秘の温泉として知られる。夕食は石見銀山の歴史と文化を感じる石見会席で、温泉津の漁港から届く地魚・旬の山菜・石見銀山ゆかりの郷土料理が旅情を高める。',
        price: '2食付き 20,000円〜',
        image: './hotels/kusurishiyuryokannakamuraya.png',
        tags: ['世界遺産・薬師湯の隣', '色が変わる神秘の湯', '石見銀山の食文化'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯原温泉（岡山）=====
    {
        id: 'h-okayama-1-1',
        onsen_id: 'o-okayama-1',
        name: '湯原温泉 八景',
        prefecture: 'okayama',
        type: '高級温泉旅館',
        description: '日本三大露天風呂の一つ「砂湯」で名高い湯原温泉を代表する高級旅館。アルカリ性単純温泉の柔らかく美肌に優れた湯を、旭川の清流沿いに設けられた源泉かけ流しの露天風呂で楽しめる。夕食は蒜山高原産の食材・蒜山牛のステーキ・蒜山大根・真庭の地鶏を使った岡山会席と地酒「御前酒」の組み合わせが旅の品格を高める。',
        price: '2食付き 35,000円〜',
        image: './hotels/yuharaonsenhakkei.png',
        tags: ['日本三大露天風呂・砂湯近接', '蒜山牛ステーキ', '旭川の渓流露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-1-2',
        onsen_id: 'o-okayama-1',
        name: '旅館 つるや',
        prefecture: 'okayama',
        type: '老舗温泉旅館',
        description: '湯原温泉の旭川沿いに建つ老舗旅館。アルカリ性単純温泉の柔らかな湯を川縁の露天風呂で楽しめ、旭川の清流と鳥のさえずりに包まれた湯浴みが心身の疲れを深く癒す。夕食は蒜山高原の旬野菜・蒜山ジャージー牛乳を使ったクリーム料理・岡山の旬魚・蒜山牛のすき焼きが地元の恵みを存分に伝える真庭会席として旅情を高める。',
        price: '2食付き 22,000円〜',
        image: './hotels/ryokantsuruya.png',
        tags: ['旭川の渓流露天風呂', '蒜山高原の食材', 'アルカリ性単純温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-1-3',
        onsen_id: 'o-okayama-1',
        name: '湯原国際観光ホテル 菊之湯',
        prefecture: 'okayama',
        type: '温泉ホテル',
        description: '湯原温泉の砂湯からすぐの場所に建つ温泉ホテル。アルカリ性単純温泉の美肌の湯を豊富な湯量で大浴場と露天風呂で提供し、旭川の清流を眺めながらの湯浴みが楽しめる。夕食は岡山県の旬食材・蒜山牛の朴葉焼き・岡山特産の白桃を使ったデザート・旭川の鮎料理などが山と川の恵みを生かした会席として旅人の食欲を満たす。',
        price: '2食付き 20,000円〜',
        image: './hotels/yuharakokusaikankouhoterukikuyukiyu.png',
        tags: ['砂湯近接', '蒜山牛の朴葉焼き', '岡山白桃デザート'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 奥津温泉（岡山）=====
    {
        id: 'h-okayama-2-1',
        onsen_id: 'o-okayama-2',
        name: '奥津温泉 東和楼',
        prefecture: 'okayama',
        type: '老舗温泉旅館',
        description: '吉井川の清流沿いに建つ奥津温泉の老舗旅館。単純アルカリ性泉の柔らかく透明な湯は「美人の湯」として知られ、川縁の露天風呂から吉井川の自然が眼前に広がる。「足踏み洗濯」の伝統文化が残る奥津温泉で、夕食は岡山の旬食材・真庭の地鶏・吉井川の天然鮎・蒜山高原の野菜を使った素朴な山里会席が旅情を深める。',
        price: '2食付き 20,000円〜',
        image: './hotels/okutsuonsentouwarou.png',
        tags: ['吉井川の清流露天風呂', '足踏み洗濯の文化', '真庭の地鶏料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-2-2',
        onsen_id: 'o-okayama-2',
        name: '奥津荘',
        prefecture: 'okayama',
        type: '高級温泉旅館',
        description: '奥津温泉の吉井川沿いに建つ格調ある旅館。単純アルカリ性泉の清澄な湯は美肌効果で知られ、川床に湧く源泉を直接楽しめる「足元湧出」の珍しい内湯が名物。夕食は蒜山高原産の食材と岡山の旬の食材を組み合わせた料理長自慢の山里会席で、真庭の山の幸と吉井川の川魚・天然鮎の塩焼きが四季の自然の恵みを届ける。',
        price: '2食付き 28,000円〜',
        image: './hotels/okutsusou.png',
        tags: ['足元湧出の珍しい内湯', '蒜山高原の食材', '吉井川沿いの絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-okayama-2-3',
        onsen_id: 'o-okayama-2',
        name: '奥津温泉 花美人の里',
        prefecture: 'okayama',
        type: '温泉旅館',
        description: '奥津温泉の豊かな自然に囲まれた温泉旅館。単純アルカリ性泉の「美人の湯」を源泉掛け流しで楽しめ、吉井川の渓谷美を望む露天風呂が旅人の心を解放する。夕食は岡山の山と川の食材を使った素朴な会席で、真庭産のきのこ・山菜の天ぷら・吉井川の鮎・蒜山ジャージー牛乳を使ったデザートが「花の美人の里」の名にふさわしい食体験を提供する。',
        price: '2食付き 18,000円〜',
        image: './hotels/okutsuonsenhanamininnosato.png',
        tags: ['美人の湯・源泉掛け流し', '吉井川の渓谷露天風呂', '蒜山ジャージーミルク'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 宮島温泉（広島）=====
    {
        id: 'h-hiroshima-1-1',
        onsen_id: 'o-hiroshima-1',
        name: '宮島温泉 みやじまの宿 岩惣',
        prefecture: 'hiroshima',
        type: '高級老舗旅館',
        description: '世界遺産・宮島の紅葉谷に建つ明治23年創業の格調ある老舗旅館。宮島の山中に湧くナトリウム塩化物泉の温泉は「宮島の隠れ湯」として旅人に珍重され、紅葉谷の清流を望む露天風呂が名物。夕食は瀬戸内の最高食材・宮島産の牡蠣料理・穴子の柳川鍋・広島産レモンを使った料理など瀬戸内の恵みを凝縮した会席が旅の感動を高める。',
        price: '2食付き 45,000円〜',
        image: './hotels/miyajimaonsenmiyajimanoyadoiwasou.png',
        tags: ['明治23年創業・世界遺産の宿', '宮島牡蠣フルコース', '紅葉谷の露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-1-2',
        onsen_id: 'o-hiroshima-1',
        name: '宮島グランドホテル 有もと',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '世界遺産・厳島神社に最も近い旅館の一つ。宮島温泉のナトリウム塩化物泉を引いた内湯と露天風呂では厳島神社の大鳥居が望める。夕食は瀬戸内の宮島産牡蠣の土手鍋・広島名物の穴子めし・瀬戸内の地魚お造りなど広島の食文化を存分に堪能できる会席が、世界遺産の島でしか味わえない特別な体験として旅人を魅了する。',
        price: '2食付き 35,000円〜',
        image: './hotels/miyajimagurandohoteruarimoto.png',
        tags: ['厳島神社至近の宿', '宮島牡蠣の土手鍋', '大鳥居の絶景'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-1-3',
        onsen_id: 'o-hiroshima-1',
        name: '錦水館',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '宮島の自然に囲まれた静かなロケーションに建つ温泉旅館。宮島温泉のナトリウム塩化物泉を源泉掛け流しで楽しめ、宮島ならではの自然の音に包まれた湯浴みが旅人の心を癒す。夕食は宮島の海の幸・瀬戸内産の牡蠣・広島県産のカキと穴子を使った郷土料理「牡蠣めし」・広島名物のもみじ饅頭の味噌汁など広島の食文化が旅の記憶を豊かにする。',
        price: '2食付き 28,000円〜',
        image: './hotels/nishikimizukan.png',
        tags: ['源泉掛け流し', '瀬戸内牡蠣・穴子料理', '宮島の自然'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯来温泉（広島）=====
    {
        id: 'h-hiroshima-2-1',
        onsen_id: 'o-hiroshima-2',
        name: '湯来ロッジ',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '広島市内から車で約1時間の山峡に湧く湯来温泉の温泉旅館。単純アルカリ性泉の柔らかな湯は美肌効果で知られ、佐伯川の清流沿いの露天風呂が旅人の心を解放する。夕食は広島の山の幸・広島産の旬野菜・佐伯川の天然鮎・広島牛の料理が素朴な山里会席として供され、大都市・広島から近い「隠れた名湯」として地元の人々に長年愛されてきた。',
        price: '2食付き 20,000円〜',
        image: './hotels/yukirojji.png',
        tags: ['広島市近郊の秘湯', '佐伯川の清流露天風呂', '広島牛料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-2-2',
        onsen_id: 'o-hiroshima-2',
        name: '湯来温泉 美山荘',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '湯来温泉の山間に佇む静かな温泉旅館。単純アルカリ性泉の柔らかく透明な湯を源泉掛け流しで楽しめる貴重な宿。夕食は広島県の山の恵み・旬の山菜の天ぷら・広島産きのこの土鍋ご飯・広島牛のしゃぶしゃぶが田舎の素朴な雰囲気の中で供され、広島市内からの日帰り客も多く訪れる都会の喧騒を忘れさせる名湯として評価されている。',
        price: '2食付き 18,000円〜',
        image: './hotels/yukionsenmiyamasou.png',
        tags: ['源泉掛け流し', '山菜・きのこ料理', '��島牛しゃぶしゃぶ'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-hiroshima-2-3',
        onsen_id: 'o-hiroshima-2',
        name: '湯来温泉 石谷荘',
        prefecture: 'hiroshima',
        type: '温泉旅館',
        description: '湯来温泉の渓谷沿いに建つアットホームな温泉旅館。単純アルカリ性泉の美肌の湯を渓谷を望む露天風呂で楽しめ、自然の中での解放感が格別。夕食は地元食材を使った家庭的な和食会席で、佐伯川の川魚・広島産の旬野菜・広島の山の幸が女将の手で丁寧に仕上げられ、大都市・広島に隣接した穴場の温泉地の真髄を体験できる。',
        price: '2食付き 16,000円〜',
        image: './hotels/yukionsenishigayasou.png',
        tags: ['渓谷沿いの露天風呂', '家庭的なおもてなし', '広島近郊の穴場温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 湯田温泉（山口）=====
    {
        id: 'h-yamaguchi-1-1',
        onsen_id: 'o-yamaguchi-1',
        name: '湯田温泉 松田屋ホテル',
        prefecture: 'yamaguchi',
        type: '老舗高級旅館',
        description: '創業江戸時代、幕末の志士・西郷隆盛・木戸孝允・伊藤博文ゆかりの老舗旅館。アルカリ性単純温泉の湯は歴史ある名湯として知られ、幕末維新の気概を感じる数寄屋造りの空間が旅人を特別な時間に誘う。夕食は下関のふぐ料理・長門の仙崎産ぶり・山口産のやまのいも料理など山口が誇る食材を使った長州会席が歴史の旅をより豊かにする。',
        price: '2食付き 35,000円〜',
        image: './hotels/yudaonsenmatsudayahoteru.png',
        tags: ['幕末維新の志士ゆかりの宿', '下関ふぐ料理', 'アルカリ性名湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-1-2',
        onsen_id: 'o-yamaguchi-1',
        name: '湯田温泉 西の雅 常盤',
        prefecture: 'yamaguchi',
        type: '温泉旅館',
        description: '山口市内に近い便利なロケーションの湯田温泉の旅館。アルカリ性単純温泉の湯を源泉掛け流しで楽しめる内湯と露天風呂が自慢。夕食は山口県の最高食材・関門の天然とらふぐ刺身・萩産の鮮魚・長門の仙崎かまぼこ・獺祭で仕上げた料理など山口の食文化を存分に体験できる会席が旅の食欲を満足させる。',
        price: '2食付き 28,000円〜',
        image: './hotels/yudaonsennishinomasatokiwa.png',
        tags: ['源泉掛け流し', '関門の天然ふぐ料理', '山口市内近郊'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-1-3',
        onsen_id: 'o-yamaguchi-1',
        name: 'SPA&HOTEL 和今',
        prefecture: 'yamaguchi',
        type: '温泉ホテル',
        description: '湯田温泉の中心部に建つ現代的な温泉ホテル。アルカリ性単純温泉の豊富な湯量を誇る大浴場とサウナが充実。夕食は山口の食材・長門産の仙崎鮮魚・下関産のふぐ・山口県産和牛の料理が揃う和洋折衷の会席が、中原中也の生家・瑠璃光寺観光とも相性が良い山口観光の拠点として多くの旅行者に利用されている。',
        price: '2食付き 22,000円〜',
        image: './hotels/spahotelwaima.png',
        tags: ['山口市内の便利な立地', '仙崎鮮魚料理', '中原中也ゆかりの地'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 長門湯本温泉（山口）=====
    {
        id: 'h-yamaguchi-2-1',
        onsen_id: 'o-yamaguchi-2',
        name: '大谷山荘',
        prefecture: 'yamaguchi',
        type: '高級温泉旅館',
        description: '深川川の清流に沿った長門湯本温泉の高台に建つ、旅行者や著名人に愛されてきた格調ある高級旅館。弱アルカリ性の単純温泉は柔らかく肌に優しく、渓谷を一望する露天風呂は四季折々に美しい。夕食は萩産の鮮魚・長門の仙崎かまぼこ・山口県産和牛・瀬戸内の旬魚をふんだんに使った長州会席が、著名人も絶賛した料理長の腕前とともに格別の旅体験を演出する。',
        price: '2食付き 50,000円〜',
        image: './hotels/ootanisansou.png',
        tags: ['渓谷沿いの高級旅館', '萩産鮮魚・長州和牛', '弱アルカリ性単純温泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-2-2',
        onsen_id: 'o-yamaguchi-2',
        name: '長門湯本温泉 恩湯旅館',
        prefecture: 'yamaguchi',
        type: '老舗温泉旅館',
        description: '大寧寺（長門市）の湯として古くから知られる長門湯本温泉の歴史ある旅館。弱アルカリ性単純温泉の透き通った湯は深川川のせせらぎとともに心を癒す。温泉神社参拝と深川川の散策が楽しめる温泉街の中心に位置し、夕食は山口の地の食材・萩ののどぐろ・長門産の鮮魚・萩産のなまこを使った会席が旅情を高める。',
        price: '2食付き 28,000円〜',
        image: './hotels/nagatoyumotoonsenonyuryokan.png',
        tags: ['古湯の歴史ある温泉', 'のどぐろ会席', '温泉神社参拝'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-yamaguchi-2-3',
        onsen_id: 'o-yamaguchi-2',
        name: '旅館 花月',
        prefecture: 'yamaguchi',
        type: '温泉旅館',
        description: '長門湯本温泉の深川川沿いに建つ落ち着きある温泉旅館。弱アルカリ性単純温泉の清澄な湯を源泉掛け流しで楽しめ、渓谷の自然音に包まれた内湯と露天風呂が心地よい。夕食は山口の食材を使った素朴な会席料理で、長門産の地魚のお造り・萩の鮮魚・山口産和牛のすき焼きが女将のもてなしとともに長門湯本の静かな旅の記憶を豊かにする。',
        price: '2食付き 22,000円〜',
        image: './hotels/ryokankagetsu.png',
        tags: ['源泉掛け流し', '渓谷沿いの静かな宿', '長門地魚会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 祖谷温泉（徳島）=====
    {
        id: 'h-tokushima-1-1',
        onsen_id: 'o-tokushima-1',
        name: '秘境の宿 ホテル祖谷温泉',
        prefecture: 'tokushima',
        type: '秘境温泉旅館',
        description: '日本三大秘境・祖谷渓の断崖をケーブルカーで下った先に湧く、アクセスそのものが旅のハイライトとなる秘境温泉旅館。炭酸水素塩泉の清澄な湯は断崖の岩盤から自噴し、祖谷渓の絶壁を見下ろしながらの露天風呂は日本屈指の秘湯体験を提供する。夕食は祖谷の山の幸・祖谷そば・阿波尾鶏・祖谷産のじゃがいもを使った祖谷料理が旅の感動を高める。',
        price: '2食付き 35,000円〜',
        image: './hotels/hikyounoyadohoteruiyaonsen.png',
        tags: ['ケーブルカーでしか行けない秘湯', '断崖の露天風呂', '祖谷そば・阿波尾鶏'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokushima-1-2',
        onsen_id: 'o-tokushima-1',
        name: '祖谷渓温泉 和の宿 ホテル祖谷温泉',
        prefecture: 'tokushima',
        type: '温泉旅館',
        description: '日本三大秘境の一つ・祖谷渓の入口に建つ温泉旅館。炭酸水素塩泉の柔らかな湯を露天風呂で楽しめ、祖谷渓の断崖と清流が作り出す絶景を眺めながらの湯浴みが格別。夕食は徳島の山の幸・祖谷そばのにゅう麺・阿波和牛のしゃぶしゃぶ・鮎の塩焼き・山菜の天ぷらなど祖谷の豊かな食材が旅情を高める。',
        price: '2食付き 28,000円〜',
        image: './hotels/iyakeionsennagonoyadohoteruiyaonsen.png',
        tags: ['祖谷渓の絶景', '阿波和牛しゃぶしゃぶ', '炭酸水素塩泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-tokushima-1-3',
        onsen_id: 'o-tokushima-1',
        name: 'かずら橋温泉 みどりや',
        prefecture: 'tokushima',
        type: '温泉旅館',
        description: '祖谷のかずら橋から徒歩圏内に建つ温泉旅館。祖谷温泉の炭酸水素塩泉を引いた内湯と露天風呂から、祖谷渓の雄大な山並みが望める。夕食は徳島の山里の食材・阿波尾鶏の炭火焼き・祖谷そば・山菜のてんぷら・祖谷のこんにゃく料理など祖谷の伝統食材を使った会席が、世界的に珍しい蔦製の橋「かずら橋」観光とともに旅の充実感を高める。',
        price: '2食付き 20,000円〜',
        image: './hotels/kazurahashionsenmidoriya.png',
        tags: ['かずら橋観光の拠点', '阿波尾鶏の炭火焼き', '祖谷そば'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 塩江温泉（香川）=====
    {
        id: 'h-kagawa-1-1',
        onsen_id: 'o-kagawa-1',
        name: '塩江温泉 翠波',
        prefecture: 'kagawa',
        type: '温泉旅館',
        description: '香川県唯一の温泉地・塩江温泉の���表的な旅館。弱アルカリ性単純温泉の柔らかな湯は肌に優しく美肌効果で知られ、内場ダム湖を望む露天風呂が名物。夕食は讃岐うどんを主役にしたうどん会席・三豊産の讃岐牛・小豆島産オリーブオイルを使った讃岐料理など香川の食文化が楽しめる会席で、香川への旅の拠点として多くの旅行者に利用される。',
        price: '2食付き 20,000円〜',
        image: './hotels/shionoeonsensuinami.png',
        tags: ['香川唯一の温泉地', '讃岐うどん会席', '弱アルカリ性美肌湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-1-2',
        onsen_id: 'o-kagawa-1',
        name: '塩江温泉 ことぶき旅館',
        prefecture: 'kagawa',
        type: '老舗温泉旅館',
        description: '四国山地の豊かな自然に囲まれた塩江温泉の老舗旅館。弱アルカリ性単純温泉の清澄な湯を源泉掛け流しで楽しめる数少ない宿の一つ。夕食は香川の旬食材・讃岐コーチンの焼き鳥・三豊産の地野菜・小豆島産のオリーブを使った料理が女将の手で丁寧に仕上げられ、四国山地の静寂の中での静かな滞在体験が旅人の心を解放する。',
        price: '2食付き 18,000円〜',
        image: './hotels/shionoeonsenkotobukiryokan.png',
        tags: ['源泉掛け流し', '讃岐コーチン料理', '四国山地の秘湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-1-3',
        onsen_id: 'o-kagawa-1',
        name: '塩江温泉センターホテル',
        prefecture: 'kagawa',
        type: '温泉ホテル',
        description: '塩江温泉の中心部に建つ温泉ホテル。弱アルカリ性単純温泉の豊富な湯量を誇る大浴場と露天風呂で旅の疲れを癒せる。夕食は讃岐うどん・小豆島産のそうめん・讃岐牛の陶板焼き・瀬戸内の旬魚を組み合わせた香川会席が、アクセスしやすい立地と相まって金刀比羅宮参拝と組み合わせた観光旅行の拠点として人気の宿。',
        price: '2食付き 16,000円〜',
        image: './hotels/shionoeonsensentaahoteru.png',
        tags: ['アクセス便利な立地', '金刀比羅宮観光の拠点', '讃岐牛・うどん会席'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== こんぴら温泉郷（香川）=====
    {
        id: 'h-kagawa-2-1',
        onsen_id: 'o-kagawa-2',
        name: '琴平花壇',
        prefecture: 'kagawa',
        type: '高級温泉旅館',
        description: '金刀比羅宮の表参道沿いに建つ格調ある高級旅館。金刀比羅宮の1,368段の石段を登る旅の疲れをアルカリ性単純温泉の美肌の湯で癒せる参拝客に愛されてきた宿。夕食は讃岐の最高食材・讃岐牛のしゃぶしゃぶ・三豊産の鮮魚・小豆島産オリーブ豚の料理が並ぶ洗練された讃岐会席と地酒「悦凱陣」の組み合わせが旅の品格を高める。',
        price: '2食付き 40,000円〜',
        image: './hotels/kotohirakadan.png',
        tags: ['金刀比羅宮の参道沿い', '讃岐牛しゃぶしゃぶ', 'アルカリ性美肌湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-2-2',
        onsen_id: 'o-kagawa-2',
        name: '琴平グランドホテル 桜の抄',
        prefecture: 'kagawa',
        type: '温泉ホテル',
        description: '金刀比羅宮を眼下に望む高台に建つこんぴら温泉郷の温泉ホテル。アルカリ性単純温泉の豊富な湯量を誇る大浴場と露天風呂から金刀比羅宮と讃岐平野の絶景が楽しめる。夕食は讃岐うどん・讃岐コーチン・瀬戸内の旬魚・小豆島のオリーブオイルを使った讃岐会席が旅人の食欲を満たし、こんぴらさん参拝と温泉を組み合わせた旅プランの最高の拠点となる。',
        price: '2食付き 28,000円〜',
        image: './hotels/kotohiragurandohoterusakuranoshou.png',
        tags: ['金刀比羅宮の絶景', '讃岐うどん・コーチン料理', '観光の拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kagawa-2-3',
        onsen_id: 'o-kagawa-2',
        name: 'こんぴら温泉 湯元八千代',
        prefecture: 'kagawa',
        type: '老舗温泉旅館',
        description: '金刀比羅宮の参道近くに建つ老舗旅館。アルカリ性単純温泉の柔らかな湯を源泉掛け流しで楽しめる宿として参拝客に長年愛されてきた。夕食は讃岐の地産食材を使った会席料理で、讃岐牛の朴葉焼き・瀬戸内の天然鯛のお造り・金刀比羅宮縁の縁起物料理が女将の温かいもてなしとともに心に残る旅の食体験を提供する。',
        price: '2食付き 22,000円〜',
        image: './hotels/konpiraonsenyumotoyachiyo.png',
        tags: ['金刀比羅宮参道近く', '源泉掛け流し', '瀬戸内天然鯛料理'],
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
        name: '鈍川温泉 ふるさと荘',
        prefecture: 'ehime',
        type: '温泉旅館',
        description: '今治市の山間に湧く鈍川温泉の代表的な旅館。単純硫黄泉の硫黄の香り漂う湯は神経痛・皮膚病・疲労回復に優れた効能を持ち、鈍川渓谷の清流沿いの露天風呂が絶品。夕食は今治の名産・今治タオルと関連する綿花料理は珍しく、鯛の宝楽焼き・瀬戸内の旬魚・今治産のジャコを使った料理が愛媛の食文化を体験できる会席として旅情を高める。',
        price: '2食付き 18,000円〜',
        image: './hotels/donkawaonsenfurusatosou.png',
        tags: ['単純硫黄泉の療養湯', '鈍川渓谷の露天風呂', '鯛の宝楽焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ehime-2-2',
        onsen_id: 'o-ehime-2',
        name: '旅館 鈍川荘',
        prefecture: 'ehime',
        type: '温泉旅館',
        description: '鈍川温泉の渓谷沿いに建つ静かな温泉旅館。単純硫黄泉の透き通った湯を源泉掛け流しで楽しめ、鈍川渓谷の清流と山の緑に囲まれた環境が旅人の心身を深く癒す。夕食は今治の地産食材・瀬戸内の鯛料理・今治産の牡蠣・愛媛産のじゃこてんなど愛媛の食文化を伝える素朴な会席が女将の手で丁寧に仕上げられる。',
        price: '2食付き 15,000円〜',
        image: './hotels/ryokandonkawasou.png',
        tags: ['源泉掛け流しの硫黄泉', '渓谷沿いの静寂', '瀬戸内鯛料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-ehime-2-3',
        onsen_id: 'o-ehime-2',
        name: '鈍川温泉 奥鈍川荘',
        prefecture: 'ehime',
        type: '秘湯旅館',
        description: '鈍川渓谷の最奥部に位置する秘湯旅館。今治市の山奥に湧く単純硫黄泉は効能豊かで、秘境感満点の渓谷露天風呂で入浴できる希少な体験が旅人を惹きつける。夕食は愛媛の山の幸・山菜の天ぷら・渓流の川魚料理・愛媛産のじゃこてん・鯛めしが素朴な山里の食卓として提供され、四国山地の大自然の中での静かな滞在が都会の喧騒を忘れさせる。',
        price: '2食付き 16,000円〜',
        image: './hotels/donkawaonsenokudonkawasou.png',
        tags: ['四国山地の秘湯', '渓谷露天風呂', '愛媛の山の幸'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 四万十温泉（高知）=====
    {
        id: 'h-kochi-1-1',
        onsen_id: 'o-kochi-1',
        name: '四万十温泉 ホテル星羅四万十',
        prefecture: 'kochi',
        type: '温泉旅館',
        description: '日本最後の清流・四万十川を望む温泉旅館。単純アルカリ性泉の柔らかな湯を四万十川の絶景を眺めながら楽しめる露天風呂が名物。夕食は四万十川の恵み・天然うなぎの白焼き・青のりの天ぷら・川えびの唐揚げ・四万十の旬野菜を使った土佐会席が旅情を高め、日本の原風景ともいえる四万十川の景色とともに忘れがたい旅体験を提供する。',
        price: '2食付き 22,000円〜',
        image: './hotels/shimantoonsenhoteruseirashimanto.png',
        tags: ['四万十川の絶景', '天然うなぎの白焼き', '四万十の青のり'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-1-2',
        onsen_id: 'o-kochi-1',
        name: '四万十川温泉 柏荘',
        prefecture: 'kochi',
        type: '老舗温泉旅館',
        description: '四万十市中心部に近い温泉旅館。単純アルカリ性泉の清澄な湯を源泉掛け流しで楽しめ、四万十川流域の自然に囲まれた環境で心身をリセットできる。夕食は四万十川流域の旬食材・川エビの唐揚げ・鮎��塩焼き・青のりのみそ汁・沈下橋近くの農家から届く旬野菜など四万十の大自然の恵みを存分に味わえる土佐会席が旅の充実感を高める。',
        price: '2食付き 18,000円〜',
        image: './hotels/shimantogawaonsenkashiwasou.png',
        tags: ['源泉掛け流し', '四万十川の川エビ・鮎', '沈下橋観光の拠点'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-1-3',
        onsen_id: 'o-kochi-1',
        name: '四万十温泉 あかおか',
        prefecture: 'kochi',
        type: '温泉旅館',
        description: '四万十川の清流が見渡せるロケーションに建つ温泉旅館。単純アルカリ性泉の湯を内湯と露天風呂で楽しみながら、四万十川の自然を存分に体感できる。夕食は四万十の食材・天然うなぎ・川エビ・青のり・四万十栗を使った土佐会席が地元農家と漁師から届く新鮮な食材の豊かさを伝え、日本最後の清流での滞在体験が旅人の心に深く刻まれる。',
        price: '2食付き 20,000円〜',
        image: './hotels/shimantoonsenakaoka.png',
        tags: ['日本最後の清流', '天然うなぎ・青のり料理', '四万十栗のデザート'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== あしずり温泉（高知）=====
    {
        id: 'h-kochi-2-1',
        onsen_id: 'o-kochi-2',
        name: '足摺温泉 足摺国際ホテル',
        prefecture: 'kochi',
        type: '温泉ホテル',
        description: '四国最南端・足摺岬のほど近くに建つ温泉ホテル。太平洋に突き出た足摺岬の壮大な絶景を独り占めできる展望露天風呂が名物で、ナトリウム塩化物泉の海洋性温泉は体の芯から温まる。夕食は土佐の最高食材・カツオの塩たたき・四万十の青のり・高知産の柑橘を使った土佐会席と地酒「司牡丹」の組み合わせが足摺の旅の記憶を豊かにする。',
        price: '2食付き 28,000円〜',
        image: './hotels/ashizurionsenashizurikokusaihoteru.png',
        tags: ['足摺岬の絶景', 'カツオの塩たたき', 'ナトリウム塩化物泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-2-2',
        onsen_id: 'o-kochi-2',
        name: 'ホテル足摺園',
        prefecture: 'kochi',
        type: '温泉旅館',
        description: '足摺岬の入口に建つ温泉旅館。ナトリウム塩化物泉の海洋性温泉を大浴場と露天風呂で楽しめ、太平洋の大海原を望む絶景の湯浴みが旅人の心を解放する。夕食は土佐の旬食材・鰹のわら焼きたたき・土佐金目鯛の煮付け・高知産の地野菜を使った土佐会席が、四国八十八ヶ所お遍路の旅の疲れをしっかり癒す豊かな食体験として提供される。',
        price: '2食付き 22,000円〜',
        image: './hotels/hoteruashizurisono.png',
        tags: ['太平洋の絶景', '鰹のわら焼きたたき', 'お遍路の宿'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kochi-2-3',
        onsen_id: 'o-kochi-2',
        name: '足摺温泉 海のホテル一禅',
        prefecture: 'kochi',
        type: '温泉旅館',
        description: '足摺岬の豊かな自然に囲まれた静かな温泉旅館。ナトリウム塩化物泉の海洋性温泉を源泉掛け流しで楽しめ、太平洋の荒波を眺めながらの露天風呂は足摺ならではの圧倒的なスケールの絶景が楽しめる。夕食は土佐のカツオ・高知産の清水サバ・四万十の天然うなぎを使った会席と高知の地酒の組み合わせが土佐の食の豊かさを実感させる。',
        price: '2食付き 25,000円〜',
        image: './hotels/ashizurionsenuminohoteruichizen.png',
        tags: ['源泉掛け流し', '清水サバ料理', '太平洋の露天風呂'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 二日市温泉（福岡）=====
    {
        id: 'h-fukuoka-1-1',
        onsen_id: 'o-fukuoka-1',
        name: '旅館 大丸別荘',
        prefecture: 'fukuoka',
        type: '老舗高級旅館',
        description: '創業1600年以上、世界最古の旅館の一つとしてギネスブック申請もあった筑紫野市の名旅館。大正ロマンの風格漂う建物は国の登録有形文化財で、筑後川水系に湧くナトリウム塩化物泉の豊富な湯量を誇る大浴場は圧巻の規模。夕食は博多の旬食材・玄界灘の地魚のお造り・博多明太子の和え物・筑後平野産の旬野菜を使った博多会席が旅の格を高める。',
        price: '2食付き 35,000円〜',
        image: './hotels/ryokandaimarubessou.png',
        tags: ['世界最古級の老舗旅館', '国登録有形文化財', '豊富な湯量の大浴場'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-1-2',
        onsen_id: 'o-fukuoka-1',
        name: '二日市温泉 御前湯',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '太宰府天満宮に近い二日市温泉の老舗旅館。ナトリウム塩化物泉の「美人の湯」として知られる名湯を源泉掛け流しで楽しめる。夕食は博多の食材・玄界灘の旬魚・博多もつ鍋・筑後産の旬野菜を使った会席が太宰府参拝の旅の充実感を高め、太宰府天満宮と太宰府政庁跡の観光と組み合わせた滞在プランが人気。',
        price: '2食付き 22,000円〜',
        image: './hotels/futsukaichionsenomaeyu.png',
        tags: ['太宰府天満宮の近く', '源泉掛け流しの美人の湯', '博多もつ鍋'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-1-3',
        onsen_id: 'o-fukuoka-1',
        name: '二日市温泉 博多湯',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '二日市温泉の静かな環境に建つ温泉旅館。ナトリウム塩化物泉の湯は美肌・疲労回復に効能があり、博多市内からのアクセスの良さも手伝って都会の疲れを癒す旅に最適。夕食は玄界灘の旬魚・博多の水炊き・筑前産の山の幸を使った会席が旅人の食欲を満たし、福岡のグルメ文化と温泉の両方を手軽に楽しめる宿として旅行者に高い評価を得ている。',
        price: '2食付き 20,000円〜',
        image: './hotels/futsukaichionsenhakatayu.png',
        tags: ['博多市内からのアクセス良好', '博多水炊き', '玄界灘の旬魚'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 原鶴温泉（福岡）=====
    {
        id: 'h-fukuoka-2-1',
        onsen_id: 'o-fukuoka-2',
        name: '原鶴温泉 泰泉閣',
        prefecture: 'fukuoka',
        type: '老舗温泉旅館',
        description: '筑後川のほとりに建つ原鶴温泉の代表的な老舗旅館。単純アルカリ性泉の柔らかな湯は「博多から一番近い温泉地」の名泉として知られ、筑後川の清流を眺める露天風呂が名物。夕食は筑後の旬食材・うきは産の柿と梨・筑後川の天然鮎の塩焼き・朝倉産の桃を使ったデザート・筑後牛のしゃぶしゃぶが旅情を高める筑後会席として評判。',
        price: '2食付き 25,000円〜',
        image: './hotels/haratsuruonsentaisenkaku.png',
        tags: ['筑後川沿いの老舗', '筑後川の天然鮎', '単純アルカリ性泉'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-2-2',
        onsen_id: 'o-fukuoka-2',
        name: '吉井旅館',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '原鶴温泉の中心部に位置する温泉旅館。単純アルカリ性泉の清澄な湯を源泉掛け流しで楽しめ、筑後川の渓流を望む露天風呂が旅人の心を癒す。夕食は筑後の豊かな食材・あまおう苺を使ったデザート・筑後地鶏の炭火焼き・うきは産の旬果物・筑後牛のすき焼きが家族的な雰囲気の中で供され、博多から日帰りでも行ける距離が地元客にも人気の理由。',
        price: '2食付き 20,000円〜',
        image: './hotels/yoshiiryokan.png',
        tags: ['源泉掛け流し', '筑後地鶏の炭火焼き', 'あまおう苺デザート'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-2-3',
        onsen_id: 'o-fukuoka-2',
        name: '原鶴温泉 ほどあいの宿 ふくせんか',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '筑後川の流れを見下ろす高台に立つ原鶴温泉の旅館。単純アルカリ性泉の柔らかな湯を内湯と露天風呂で楽しめ、筑後川の四季の移ろいを眺めながらの湯浴みが格別。夕食は筑後の旬食材を使った会席料理で、筑後川の鮎・筑後牛のしゃぶしゃぶ・うきは産の果実を使ったデザートが旅人の食欲を満たし、博多の大都市文化と里山の自然を一度に楽しめる旅の拠点として評価される。',
        price: '2食付き 22,000円〜',
        image: './hotels/haratsuruonsenhodoainoyadofukusenka.png',
        tags: ['筑後川の高台絶景', '筑後牛しゃぶしゃぶ', '博多近郊の温泉地'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 脇田温泉（福岡）=====
    {
        id: 'h-fukuoka-3-1',
        onsen_id: 'o-fukuoka-3',
        name: '脇田温泉 山水館',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '遠賀川上流の山峡に湧く脇田温泉の代表的な旅館。含硫黄単純温泉の硫黄の香りが漂う湯は神経痛・皮膚病・疲労回復に効能があり、遠賀川の清流沿いに設けられた露天風呂が絶品。夕食は北九州の旬食材・玄界灘の旬魚・北九州産の旬野菜・関門の天然ふぐを使った会席が旅情を高め、遠賀川の自然の中での静かな滞在が旅人の心身を癒す。',
        price: '2食付き 20,000円〜',
        image: './hotels/wakitaonsensansuikan.png',
        tags: ['含硫黄温泉の効能', '遠賀川の清流露天風呂', '関門のふぐ料理'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-3-2',
        onsen_id: 'o-fukuoka-3',
        name: '旅館 やまぼうし',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '脇田温泉の山間に佇む家族経営の温泉旅館。含硫黄単純温泉の源泉掛け流しを内湯と露天風呂で楽しめ、遠賀川の渓流美に囲まれた自然の中での湯浴みが旅人の疲れを深く癒す。夕食は北九州の食材を使った家庭的な和食会席で、遠賀川の鮎・地元産の野菜・北九州の旬魚が女将の手で丁寧に仕上げられ、アットホームな雰囲気が何度でも訪れたくなる宿。',
        price: '2食付き 17,000円〜',
        image: './hotels/ryokanyamaboushi.png',
        tags: ['源泉掛け流し', '家庭的なおもてなし', '遠賀川の渓流美'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-fukuoka-3-3',
        onsen_id: 'o-fukuoka-3',
        name: '脇田温泉 若竹荘',
        prefecture: 'fukuoka',
        type: '温泉旅館',
        description: '脇田温泉の竹林に囲まれた静かな温泉旅館。含硫黄単純温泉の清澄な湯を源泉掛け流しで楽しめ、遠賀川の渓谷美を眺めながらの露天風呂が旅の疲れを癒す。夕食は遠賀川流域の旬食材・山菜の天ぷら・地元産のきのこ料理・北九州の旬魚を使った素朴な会席が女将の温かいもてなしとともに提供され、福岡市内から1時間圏内の静かな秘湯として口コミで人気が広がっている。',
        price: '2食付き 16,000円〜',
        image: './hotels/wakitaonsenwakatakesou.png',
        tags: ['竹林の宿', '源泉掛け流し', '北九州の旬魚'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 嬉野温泉（佐賀）=====
    {
        id: 'h-saga-1-1',
        onsen_id: 'o-saga-1',
        name: '和多屋別荘',
        prefecture: 'saga',
        type: '高級温泉旅館',
        description: '日本三大美肌の湯・嬉野温泉を代表する格調ある高級旅館。重曹分豊富なナトリウム炭酸水素塩泉の湯は肌をとろけるように柔��かくする美肌効果が全国屈指で、女性旅行者に絶大な人気。夕食は嬉野茶を使ったしゃぶしゃぶ「嬉野温泉湯豆腐」・佐賀牛の石焼き・有田焼の器で供される有明海の旬魚会席が旅の品格を高める。',
        price: '2食付き 45,000円〜',
        image: './hotels/watayabessou.png',
        tags: ['日本三大美肌の湯', '嬉野茶のしゃぶしゃぶ', '有田焼の器'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saga-1-2',
        onsen_id: 'o-saga-1',
        name: '旅亭 半水盧',
        prefecture: 'saga',
        type: '高級温泉旅館',
        description: '嬉野川のほとりに建つ全室離れ造りの高級旅館。ナトリウム炭酸水素塩泉の肌がとろけるような美肌の湯を専用露天風呂で楽しめる贅沢な設計が旅人を魅了する。夕食は佐賀の最高食材・佐賀牛のしゃぶしゃぶ・有明海のムツゴロウ・呼子産のイカを使った佐賀会席が旅情を高め、嬉野川の清流を聞きながらの滞在が心に残る特別な体験を演出する。',
        price: '2食付き 60,000円〜',
        image: './hotels/tabiteihanmizuro.png',
        tags: ['全室露天風呂付き離れ', '佐賀牛しゃぶしゃぶ', '美肌の湯'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-saga-1-3',
        onsen_id: 'o-saga-1',
        name: '大正屋',
        prefecture: 'saga',
        type: '老舗温泉旅館',
        description: '嬉野温泉で明治時代から続く老舗旅館。ナトリウム炭酸水素塩泉の美肌の湯を豊富な湯量で楽しめる大浴場と露天風呂が自慢。夕食は嬉野温泉の名物・温泉湯豆腐・佐賀牛の陶板焼き・有明海の幸を使った佐賀会席と地酒「天山」の組み合わせが嬉野の旅の記憶を豊かにする長年愛される老舗の品格を伝える。',
        price: '2食付き 30,000円〜',
        image: './hotels/taishouya.png',
        tags: ['明治創業の老舗', '嬉野温泉湯豆腐', '佐賀牛の陶板焼き'],
        bookingUrls: { jalan: '#', rakuten: '#', ikyu: '#', yahoo: '#' }
    },

    // ===== 武雄温泉（佐賀）=====
    {
        id: 'h-saga-2-1',
        onsen_id: 'o-saga-2',
        name: '武雄温泉 ホテル春慶屋',
        prefecture: 'saga',
        type: '温泉ホテル',
        description: '武雄温泉のシンボル「楼門」のすぐそばに建つ、創業明治23年の歴史を誇る老舗温泉ホテル。最大の自慢は、武雄温泉でも数少ない「展望露天風呂」を備えている点。最上階からは武雄の街並みや御船山の切り立った岩肌を一望でき、弱アルカリ性の柔らかな名湯を源泉掛け流しで堪能できる。夕食には、とろけるような食感の最高級「佐賀牛」をメインに、有明海の珍味や地元の旬野菜をふんだんに盛り込んだ彩り豊かな本格和食会席を、真心込めたおもてなしと共に味わえる。',
        price: '2食付き 19,000円〜',
        image: './hotels/shunkeiya.png',
        tags: ['重要文化財・楼門の近く', '佐賀牛の陶板焼き', '展望露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad307772%2F&_gl=1*1q9y6n9*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNjM5OTckbzYkZzEkdDE3NzUyNjQwNzEkajYwJGwwJGgw', rakuten: 'https://a.r10.to/hPoYXS', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00920598%252F' }
    },
    {
        id: 'h-saga-2-2',
        onsen_id: 'o-saga-2',
        name: 'ONDHOTEL',
        prefecture: 'saga',
        type: '温泉ホテル',
        description: '2023年、武雄の豊かな自然に包まれた高台に誕生した、温浴とサウナ、そして「食」をテーマにした次世代型のライフスタイルホテル。薪サウナやセルフロウリュを備えた本格的なサウナ施設が充実しており、心身を深く整える「サ活」の聖地として注目を集めている。夕食には、武雄の厳選された食材をライブ感あふれるオープンキッチンで仕上げるイタリアンや、佐賀牛のグリルを堪能でき、モダンで開放的な客室で、これまでにない自由で洗練された滞在を叶えてくれる。',
        price: '2食付き 23,500円〜',
        image: './hotels/ondhotel.png',
        tags: ['薪サウナ', 'セルフロウリュ', '武雄の厳選食材'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad332702%2F&_gl=1*o4w0mh*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNjM5OTckbzYkZzEkdDE3NzUyNjQyNDUkajE3JGwwJGgw', rakuten: 'https://a.r10.to/h5rP8u', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003206%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003206%252F' }
    },
    {
        id: 'h-saga-2-3',
        onsen_id: 'o-saga-2',
        name: '武雄温泉 星の華',
        prefecture: 'saga',
        type: '温泉旅館',
        description: '武雄温泉の喧騒から離れた静かな森の中に佇む、全10室すべてが「露天風呂付き」のプライベート感を重視した大人のための温泉宿。誰にも邪魔されずに、客室専用の露天風呂でとろとろの美肌湯を心ゆくまで独り占めできるのが最大の贅沢。夕食には、A5ランクの佐賀牛や玄界灘で獲れた新鮮な魚介を、熟練の職人が一皿一皿丁寧に仕立てた創作会席として提供。静寂に包まれたモダンな空間で、大切な人と心晴れる特別な休日を過ごすことができる。',
        price: '2食付き 26,500円〜',
        image: './hotels/hoshinohana.png',
        tags: ['全室露天風呂付き', 'A5ランク佐賀牛', 'プライベートな空間'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad307384%2F&_gl=1*1gov20i*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNjM5OTckbzYkZzEkdDE3NzUyNjQ0NzkkajkkbDAkaDA.', rakuten: 'https://a.r10.to/h5o6gd', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031114%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031114%252F' }
    },
    {
        id: 'h-saga-2-4',
        onsen_id: 'o-saga-2',
        name: '武雄温泉 懐石宿 扇屋',
        prefecture: 'saga',
        type: '温泉旅館',
        description: '大正時代の面影を残す重厚な建築美と、料理の鉄人にも認められた至高の「料理」が主役の、全7室の格式高い高級割烹旅館。全国各地から美食家が訪れる夕食は、伝統的な懐石料理の技法に現代の感性を加え、佐賀牛や有明海の至宝を芸術的な一皿へと昇華させたもの。武雄の名湯を湛えた趣ある大浴場や露天風呂でリラックスした後は、歴史の重みを感じる洗練された客室で、至高のおもてなしと共に極上のひとときを堪能できる。',
        price: '2食付き 36,500円〜',
        image: './hotels/kaiisekiyadoogi.png',
        tags: ['大正時代の建築美', '料理の鉄人', '全7室の高級割烹旅館'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad318558%2F&_gl=1*1vwfbvd*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNjM5OTckbzYkZzEkdDE3NzUyNjQ4MDUkajIkbDAkaDA.', rakuten: 'https://a.r10.to/hka3ly', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002690%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002690%252F' }
    },
    {
        id: 'h-saga-2-5',
        onsen_id: 'o-saga-2',
        name: 'うらり武雄 Garden Terrace Spa Resort',
        prefecture: 'saga',
        type: '温泉リゾート',
        description: '2023年にオープンした、武雄の豊かな自然と「現代の湯治」を融合させたラグジュアリーなスパリゾート。全室に源泉掛け流しの露天風呂とテラスを備え、セルフロウリュ可能なプライベートサウナ付きの客室も。夕食には、武雄のテロワールを反映した「イノベーティブ・ジャパニーズ」をテーマに、佐賀の豊かな食材を驚きに満ちたコース料理として提供。宿泊者専用ラウンジでのフリードリンクサービスなど、滞在そのものが癒やしとなる究極のリゾート体験を叶えてくれる。',
        price: '2食付き 32,000円〜',
        image: './hotels/uraritakeo.png',
        tags: ['プライベートサウナ', 'イノベーティブ・ジャパニーズ', '宿泊者専用ラウンジ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad315516%2F&_gl=1*1cs55ny*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNjM5OTckbzYkZzEkdDE3NzUyNjUwMTIkajYkbDAkaDA.', rakuten: 'https://a.r10.to/h52lzQ', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003079%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003079%252F' }
    },
    {
        id: 'h-saga-2-6',
        onsen_id: 'o-saga-2',
        name: '武雄温泉 御船山楽園ホテル',
        prefecture: 'saga',
        type: '温泉旅館',
        description: '15万坪の広大な敷地を誇る「御船山楽園」の中に建ち、アート集団チームラボとのコラボレーションによる幻想的なロビーが世界中から注目を集める唯一無二のホテル。日本一に輝いたこともある「らかんの湯」では、究極のサウナ体験と御船山の自然と一体になれる露天風呂を堪能できる。夕食には、武雄の旬を閉じ込めた滋味豊かな会席料理を味わいながら、夜にはライトアップされた庭園やアート展示を散策するなど、五感を揺さぶる感動の滞在が待っている。',
        price: '2食付き 35,000円〜',
        image: './hotels/mifuneyamarakuenhotel.png',
        tags: ['チームラボ', 'らかんの湯', '御船山楽園'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/h5HmHV', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031090%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031090%252F' }
    },
    {
        id: 'h-saga-2-7',
        onsen_id: 'o-saga-2',
        name: '奥武雄温泉 風の森',
        prefecture: 'saga',
        type: '温泉旅館',
        description: '武雄の奥座敷、標高の高い山間に点在する、全室が「離れ」スタイルの大人のための極上温泉リゾート。約5,500坪の広大な敷地にわずか11室という贅沢な造りで、すべての客室に趣の異なる源泉掛け流し露天風呂を完備。夕食には、佐賀牛をメインに地元産の厳選食材をふんだんに使用し、素材の味を最大限に引き出した創作料理を個室のダイニングでゆっくりと堪能できる。風の音と鳥のさえずりしか聞こえない静寂の中で、日常を忘れる究極の休息を楽しめる。',
        price: '2食付き 41,500円〜',
        image: './hotels/kazunomori.png',
        tags: ['全室離れ', '源泉掛け流し露天風呂', '静寂の隠れ家'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad369308%2F&_gl=1*1aveffg*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNjM5OTckbzYkZzEkdDE3NzUyNjU0NzEkajE0JGwwJGgw', rakuten: 'https://a.r10.to/hgEW0y', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002001%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002001%252F' }
    },

    // ===== 雲仙温泉（長崎）=====
    {
        id: 'h-nagasaki-1-1',
        onsen_id: 'o-nagasaki-1',
        name: '雲仙温泉 青雲荘',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '日本初の国立公園に指定された雲仙の豊かな自然に囲まれた老舗旅館。含硫黄酸性泉の硫黄の香りが漂う湯は殺菌・美肌・神経痛に優れた効能を持ち、雲仙の地獄谷から届く源泉は白濁した個性ある湯色が特徴。夕食は長崎の食文化を反映した料理で、長崎和牛・五島列島の旬魚・島原産の具雑煮・ハトシなど和洋折衷の長崎会席が旅情を高める。',
        price: '2食付き 16,500円〜',
        image: './hotels/unzenonsenseiunsou.png',
        tags: ['日本初の国立公園', '含硫黄白濁の地獄湯', '長崎和牛会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad383712%2F&_gl=1*11lyos*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNTUxMTkkbzUkZzEkdDE3NzUyNTc3MTckajIzJGwwJGgw', rakuten: 'https://a.r10.to/h5DDcC', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901337%252F' }
    },
    {
        id: 'h-nagasaki-1-2',
        onsen_id: 'o-nagasaki-1',
        name: '雲仙宮崎旅館',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '雲仙温泉の中心部に建つ風格ある温泉旅館。含硫黄酸性泉の硫黄の香りと白濁した湯は雲仙の地獄谷直近の源泉から引湯し、皮膚病・神経痛・慢性疲労に優れた効能を発揮する。夕食は長崎の食材・五島うどん・島原の地野菜・長崎港の旬魚・長崎和牛の料理が卓袱料理スタイルで提供され、長崎の食文化の多様性を旅の中で体験できる。',
        price: '2食付き 26,000円〜',
        image: './hotels/unzenmiyazakiryokan.png',
        tags: ['雲仙地獄谷の源泉', '卓袱料理スタイル', '五島うどん'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad347181%2F&_gl=1*1l9t2lq*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNTUxMTkkbzUkZzEkdDE3NzUyNTc1NDkkajMkbDAkaDA.', rakuten: 'https://a.r10.to/h5qxjK', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000728%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000728%252F' }
    },
    {
        id: 'h-nagasaki-1-3',
        onsen_id: 'o-nagasaki-1',
        name: '白濁源泉掛け流し八湯めぐりの湯 雲仙温泉 民芸モダンの宿 雲仙福田屋',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '雲仙温泉の豊かな自然に囲まれた温泉旅館。雲仙地獄から引湯した含硫黄酸性泉の白濁した湯を源泉掛け流しで楽しめる。夕食は長崎の旬食材・島原半島産の旬野菜・諫早の鰻料理・五島列島の旬魚・長崎和牛を使った会席料理が、雲仙の圧倒的な自然景観とともに旅の充実感を高め、普賢岳の壮大な眺めとの組み合わせが旅人に長崎の大自然を体感させる。',
        price: '2食付き 17,500円〜',
        image: './hotels/unzenfukudaya.png',
        tags: ['源泉掛け流しの白濁硫黄泉', '普賢岳の眺望', '五島列島の旬魚'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad320580%2F&_gl=1*r4y5q2*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNTUxMTkkbzUkZzEkdDE3NzUyNTcyNjEkajEzJGwwJGgw', rakuten: 'https://a.r10.to/h5SCve', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001761%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001761%252F' }
    },

    // ===== 小浜温泉（長崎）=====
    {
        id: 'h-nagasaki-2-1',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉 くつろぎの宿 旅館山田屋',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '小浜温泉の潮風を感じる高台に位置し、夕日が海に沈む絶景を望むことができる全11室の温かな温泉旅館。源泉温度105度を誇る熱量の高い名湯を、最上階の展望露天風呂で源泉掛け流しのまま堪能でき、夕食には橘湾で獲れたばかりのピチピチの地魚の盛り合わせや、特産の伊勢海老、長崎和牛など、素材の鮮度を最大限に活かしたボリューム満点の海鮮会席を、落ち着いたお部屋でゆっくりと味わえる。',
        price: '2食付き 14,500円〜',
        image: './hotels/obamaonsenryokanchijiwa.png',
        tags: ['橘湾の絶景', '源泉掛け流し', '長崎和牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad399720%2F&_gl=1*1g0wrba*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTMwNDAkajgkbDAkaDA.', rakuten: 'https://a.r10.to/hY7Toj', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902424%252F' }
    },
    {
        id: 'h-nagasaki-2-2',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉 旅館 國崎',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '日本一長い足湯「ほっとふっと105」のすぐ近くに佇み、全10室の落ち着いた和の空間が広がる、美食と名湯の隠れ宿。3つの貸切風呂は空いていれば何度でも無料で利用でき、弱食塩泉の身体を芯から温める湯をプライベートに心ゆくまで楽しみ、夕食には「橘湾の旬」をテーマに、熟練の職人が一皿一皿に技を凝らした創作料理や、名物の蒸し料理をモダンな個室ダイニングで贅沢に堪能できる。',
        price: '2食付き 20,000円〜',
        image: './hotels/obamaonsenryokankokuzaki.png',
        tags: ['貸切風呂無料', '橘湾の旬', '大人の隠れ家的空間'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad325006%2F&_gl=1*1ffrjth*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTMxMTUkajIwJGwwJGgw', rakuten: 'https://a.r10.to/h5lGXC', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002088%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002088%252F' }
    },
    {
        id: 'h-nagasaki-2-3',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉 つたや旅館',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '小浜温泉で最も歴史ある老舗の一つで、屋上にある波打ち際の露天風呂「茜の湯」が圧倒的な人気を誇る絶景の宿。海に浮いているかのような臨場感の中で源泉掛け流しの名湯に浸かり、夕食には小国・阿蘇とはまた違う、海の恵みである「アワビ」や「うちわ海老」をふんだんに盛り込んだ豪華な海鮮膳を、歴史の風格を感じる客室で橘湾のさざ波を聞きながら心ゆくまで味わえる。',
        price: '2食付き 15,500円〜',
        image: './hotels/obamaonsenryokantsutaya.png',
        tags: ['波打ち際の露天風呂', '橘湾の海景色', 'アワビ・うちわ海老'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324105%2F&_gl=1*1fji6vw*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTMyNTUkajYkbDAkaDA.', rakuten: 'https://a.r10.to/hPJI4Z', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902249%252F' }
    },
    {
        id: 'h-nagasaki-2-4',
        onsen_id: 'o-nagasaki-2',
        name: '小浜温泉 旅館ゆのか',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '小浜温泉の中心部に建ち、モダンにリニューアルされた客室と、スタイリッシュな展望露天風呂が魅力の温泉ホテル。橘湾のパノラマビューを楽しめる露天風呂でリラックスした後は、ライブキッチンで仕上げる「長崎和牛」のステーキや、地元漁港直送の鮮魚、旬の野菜をふんだんに使った創作バイキングや会席料理を、家族やカップルで賑やかに、かつ上質なサービスと共に堪能できる。',
        price: '2食付き 20,000円〜',
        image: './hotels/ryokanyunoka.png',
        tags: ['橘湾のパノラマビュー', 'ライブキッチン', '長崎和牛'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad347758%2F&_gl=1*1nnszj5*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTMzNDYkajExJGwwJGgw', rakuten: 'https://a.r10.to/hkNbYC', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902357%252F' }
    },
    {
        id: 'h-nagasaki-2-5',
        onsen_id: 'o-nagasaki-2',
        name: 'COCOHARE',
        prefecture: 'nagasaki',
        type: '温泉グランピングリゾート',
        description: '雲仙の中腹、橘湾を見渡す絶景のロケーションに誕生した、自然と一体になれる温泉グランピングリゾート。全客室に源泉掛け流しの露天風呂を完備し、プライベートな空間で名湯を楽しみながら、目の前に広がる海と空のパノラマを独り占めできる。夕食は、開放的なテラスで楽しむ本格的なバーベキューや、旬の地元食材を活かした料理が提供され、夜には満天の星空の下で焚き火を囲むなど、これまでの温泉宿の枠を超えた「心晴れる」滞在体験を叶えてくれる。',
        price: '2食付き 18,000円〜',
        image: './hotels/cocohare.png',
        tags: ['源泉掛け流しの露天風呂', '橘湾を見渡す絶景', '焚き火'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad346823%2F&_gl=1*1nle6p8*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTM0MTEkajU5JGwwJGgw', rakuten: 'https://a.r10.to/hkmivp', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-nagasaki-2-6',
        onsen_id: 'o-nagasaki-2',
        name: '雲仙小浜温泉 寿楽',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '小浜温泉の湯けむりと橘湾を一望する高台に位置し、2022年にリブランドオープンしたスタイリッシュな温泉リゾート。最大の魅力は、滞在中のドリンクやアルコールが無料で楽しめる「宿泊者専用ラウンジ」を備えたインクルーシブスタイル。橘湾に沈む夕日を眺めながら、源泉100%掛け流しの貸切風呂や新設されたサウナ付き大浴場で心身を整え、夕食には長崎の旬の海の幸をふんだんに盛り込んだ「会席料理」を堪能できる、上質で開放感あふれる滞在を叶えてくれる。',
        price: '2食付き 14,500円〜',
        image: './hotels/obamajuraku.png',
        tags: ['インクルーシブ', '橘湾の夕日', 'サウナ付き大浴場'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad323380%2F&_gl=1*d5m9n0*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTM1MDMkajMyJGwwJGgw', rakuten: 'https://a.r10.to/hkaRuI', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00914758%252F' }
    },
    {
        id: 'h-nagasaki-2-7',
        onsen_id: 'o-nagasaki-2',
        name: 'オレンジベイ',
        prefecture: 'nagasaki',
        type: '温泉ホテル',
        description: '橘湾の海辺に建ち、全7室すべてがオーシャンフロントの絶景を誇るデザイナーズ温泉ホテル。最大の特長は、すべての客室バルコニーに完備された源泉掛け流しの天然温泉露天風呂。誰にも邪魔されずに好きな時に何度でも、海に沈む夕日を眺めながらの贅沢な湯浴みが楽しめる。朝食はプライベートを重視し、お部屋でゆっくりと味わえるスタイル。夕食の提供はないが、温泉街の中心に位置するため、近隣の海鮮料理店や居酒屋を自由に開拓する楽しみがあり、一階の「オレンジジェラート」も宿泊者に大人気。',
        price: '朝食付き 14,500円〜',
        image: './hotels/orangebay.png',
        tags: ['橘湾を望むテラス', '源泉掛け流しの半露天ジャグジー', '朝食はお部屋食スタイル'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad310871%2F&_gl=1*z9ega4*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyMTI5MjAkbzQkZzEkdDE3NzUyMTM2MTQkajMyJGwwJGgw', rakuten: 'https://a.r10.to/hPKYn8', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908097%252F' }
    },

    // ===== 島原温泉（長崎）=====
    {
        id: 'h-nagasaki-3-1',
        onsen_id: 'o-nagasaki-3',
        name: '島原温泉 ホテル南風楼',
        prefecture: 'nagasaki',
        type: '温泉リゾート',
        description: '創業110余年の歴史を誇りながら、常に新しいおもてなしを追求する島原を代表する温泉リゾート。対岸の熊本まで見渡せる有明海の絶景と、1,000坪もの広大な日本庭園がゲストを迎える。海と一体になれる「インフィニティ露天風呂」や、本物のサウナ好きを唸らせる充実した設備が自慢。夕食には島原の豊かな海の幸や地元ブランド牛を活かした創作会席を堪能でき、夜にはロビーでのフリードリンクサービスや庭園のライトアップなど、滞在を彩る多彩なイベントが毎日開催される。',
        price: '2食付き 16,000円〜',
        image: './hotels/shimabaraonsenhoteruhaerou.png',
        tags: ['有明海の絶景', 'オールインクルーシブ', '日本庭園'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad348552%2F&_gl=1*1ekscse*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNTUxMTkkbzUkZzEkdDE3NzUyNTUyMDEkajU5JGwwJGgw', rakuten: 'https://a.r10.to/h5DB2f', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002123%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002123%252F' }
    },
    {
        id: 'h-nagasaki-3-2',
        onsen_id: 'o-nagasaki-3',
        name: 'HOTELシーサイド島原',
        prefecture: 'nagasaki',
        type: '温泉ホテル',
        description: '島原港のすぐ近くに位置し、東館と新館で異なる魅力を持つ大型温泉ホテル。地下深くから湧き出る2種類の源泉（炭酸水素塩泉と高濃度炭酸泉）を所有し、広々とした露天風呂からは有明海のパノラマビューを独り占めできる。夕食には地元・島原の伝統料理「具雑煮」や新鮮な活魚、厳選された肉料理を、落ち着いたレストランで上質なサービスと共に味わえる。ビジネスから家族旅行まで、幅広いニーズに応える快適な設備と開放感が魅力の一軒。',
        price: '2食付き 12,000円〜',
        image: './hotels/hotelseasideshimabara.png',
        tags: ['有明海のパノラマビュー', '2種類の源泉', '島原の伝統料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad326270%2F&_gl=1*1xe6nv*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNTUxMTkkbzUkZzEkdDE3NzUyNTU1ODAkajYwJGwwJGgw', rakuten: 'https://a.r10.to/hgJiQ3', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908654%252F' }
    },
    {
        id: 'h-nagasaki-3-3',
        onsen_id: 'o-nagasaki-3',
        name: '島原温泉 旅館海望荘',
        prefecture: 'nagasaki',
        type: '温泉旅館',
        description: '島原温泉の高台に位置し、その名の通り有明海の穏やかな海原を眼下に望むことができる、全12室の温かな温泉旅館。源泉掛け流しの天然温泉を、24時間入浴可能な大浴場で心ゆくまで堪能できるのが魅力。夕食には、店主自ら市場で仕入れる有明海産の「ガザミ（ワタリガニ）」や新鮮な地魚、島原産の野菜をふんだんに盛り込んだボリュームたっぷりの家庭的な海鮮会席を、落ち着いたお部屋でゆっくりと味わえる。',
        price: '2食付き 18,000円〜',
        image: './hotels/shimabaraonsenryokanmibousou.png',
        tags: ['有明海の絶景', '源泉掛け流し', '家庭的な海鮮会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad332706%2F&_gl=1*d7kjnx*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUyNTUxMTkkbzUkZzEkdDE3NzUyNTU3MDQkajYwJGwwJGgw', rakuten: 'https://a.r10.to/h5dI88', ikyu: '#', yahoo: '#' }
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
        name: '国登録有形文化財の宿 人吉温泉 芳野旅館',
        prefecture: 'kumamoto',
        type: '老舗温泉旅館',
        description: '人吉城下町の中心に佇み、国の登録有形文化財に指定された明治時代の重厚な建築美が息づく全14室の老舗旅館。一歩足を踏み入れると時が止まったかのような静寂に包まれ、弱アルカリ性の柔らかな名湯を、趣ある大浴場や露天風呂で源泉掛け流しのまま堪能できる。夕食には球磨川の恵みである鮎や、とろけるような「球磨焼酎」にぴったりの繊細な会席料理を、歴史を刻んだお部屋でゆっくりと味わえる。',
        price: '2食付き 20,000円〜',
        image: './hotels/hitoyoshiyoshinorokan.png',
        tags: ['登録有形文化財', '明治時代の建築美', '源泉掛け流し', '球磨川の恵み'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad321114%2F&_gl=1*785v3i*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDA4MzIkajYwJGwwJGgw', rakuten: 'https://a.r10.to/hYsfYP', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031193%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031193%252F' }
    },
    {
        id: 'h-kumamoto-2-2',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉 人吉旅館',
        prefecture: 'kumamoto',
        type: '老舗温泉旅館',
        description: '球磨川のほとりに建ち、昭和9年の創業当時の面影を色濃く残す、国の登録有形文化財の宿。木造建築の美しさが光る館内には「美人の湯」として知られる源泉が自慢の大浴場があり、琥珀色に輝くトロトロの湯を掛け流しで心ゆくまで楽しめる。夕食には地産地消にこだわり、球磨の旬野菜や川魚をふんだんに盛り込んだ彩り豊かな会席料理を、川面を渡る風を感じながら落ち着いた和室で堪能できる。',
        price: '2食付き 22,000円〜',
        image: './hotels/hitoyoshionsenhitoyoshiryokan.png',
        tags: ['登録有形文化財', '昭和レトロ', '美人の湯', '球磨川の恵み'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad316293%2F&_gl=1*a95rzt*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDEwMzkkajYwJGwwJGgw', rakuten: 'https://a.r10.to/hkCXyx', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030663%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030663' }
    },
    {
        id: 'h-kumamoto-2-3',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉 鍋屋',
        prefecture: 'kumamoto',
        type: '老舗温泉旅館',
        description: '江戸時代、相良藩の御用宿として始まった歴史を持ち、人吉城址と球磨川を一望できる絶好のロケーションを誇る老舗ホテル。歴史の面影を大切にしながらも、現代的な快適さを備えた客室や露天風呂でリラックスでき、夕食には伝統の技が光る「鮎の塩焼き」や、厳選された黒毛和牛をメインにした会席料理を、球磨川のパノラマを楽しみながら上質なホスピタリティと共に堪能できる。',
        price: '2食付き 20,500円〜',
        image: './hotels/hitoyoshinabe.png',
        tags: ['登録有形文化財', '昭和レトロ', '美人の湯', '球磨川の恵み'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad319130%2F&_gl=1*1ki8wfy*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDExNzckajYwJGwwJGgw', rakuten: 'https://a.r10.to/h5okrc', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00903496%252F' }
    },
    {
        id: 'h-kumamoto-2-4',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉 あゆの里',
        prefecture: 'kumamoto',
        type: '温泉リゾート旅館',
        description: '人吉温泉を代表するラグジュアリーなリゾート旅館で、球磨川の清流と人吉城址を望む開放感あふれるテラスが自慢の宿。木の温もりを活かしたモダンな客室や、南九州最大級の「球磨焼酎ラウンジ」を備え、源泉掛け流しの露天風呂で癒やされた後は、夕食に「鮎」や「あか牛」をメインとした五感で楽しむ創作会席を堪能でき、伝統とリゾート感が融合した至福のひとときを過ごせる。',
        price: '2食付き 25,000円〜',
        image: './hotels/hitoyoshiayunosato.png',
        tags: ['球磨川を望むテラスラウンジ', '充実の球磨焼酎セレクション', '鮎・あか牛の創作会席', '和モダンなスタイリッシュ空間'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad312753%2F&_gl=1*1sugkpr*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDEyOTMkajMxJGwwJGgw', rakuten: 'https://a.r10.to/hYnuYF', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001080%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001080%252F' }
    },
    {
        id: 'h-kumamoto-2-5',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉 旅館 翠嵐楼',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '明治43年の創業以来、人吉温泉で最も歴史ある「三つの自家源泉」を所有し、温泉通からも高い支持を得る名湯の宿。一切の加水・加温をしない純粋な源泉掛け流しを、趣の異なる多彩な湯処で心ゆくまで堪能できるのが最大の贅沢。夕食には、三代続く伝統の味を守りつつ、地元の山海の幸を盛り込んだ「翠嵐楼流」の会席料理を、温泉の深い癒やしと共に心ゆくまで味わえる。',
        price: '2食付き 22,000円〜',
        image: './hotels/hitoyoshionsensuiranrou.png',
        tags: ['人吉温泉最古の宿', '三つの自家源泉', '純粋な源泉掛け流し', '伝統の会席料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad390891%2F&_gl=1*zc88wq*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDE0MTAkajckbDAkaDA.', rakuten: 'https://a.r10.to/h5DHG3', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030677%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030677%252F' }
    },
    {
        id: 'h-kumamoto-2-6',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉 しらさぎ荘',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '人吉温泉の喧騒から少し離れた閑静な場所に位置し、アットホームなおもてなしとボリュームたっぷりの料理が評判の温泉宿。自家源泉から湧き出る新鮮な湯を、24時間入浴可能な大浴場でゆったりと楽しみ、夕食には店主自ら腕を振るう「鯉の洗い」や鮎料理、地元・人吉の旬の味覚をふんだんに盛り込んだ手作りの和食膳を、まるでもう一つの我が家のようにリラックスした空間で賑やかに楽しめる。',
        price: '2食付き 24,000円〜',
        image: './hotels/hitoyoshionsenshirasagisou.png',
        tags: ['アットホームな宿', 'ボリューム満点の料理', '自家源泉の湯', '鯉の洗い'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad308699%2F&_gl=1*3setan*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDE1ODQkajEkbDAkaDA.', rakuten: 'https://a.r10.to/hP6CzT', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00904331%252F&_gl=1*trlgp*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDE0NjkkajU2JGwwJGgw' }
    },
    {
        id: 'h-kumamoto-2-7',
        onsen_id: 'o-kumamoto-2',
        name: '人吉温泉 石野乃湯 ICHIFUJI RYOKAN',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '人吉市内の静かな住宅街に佇む、全室離れのような感覚で過ごせる「隠れ家」的な雰囲気が魅力のモダンな温泉旅館。弱アルカリ性のとろりとした肌触りの天然温泉を、プライベート感あふれる露天風呂や内湯で源泉掛け流しのまま楽しみ、夕食には「一富士」ならではの厳選された肉料理や、地産の新鮮な食材を活かした創作和食を、落ち着いたダイニングで静かに流れる時間と共に堪能できる。',
        price: '2食付き 25,000円〜',
        image: './hotels/hitoyoshiichifuji.png',
        tags: ['隠れ家のような宿', '全室離れ感覚の客室', 'プライベート露天風呂', '創作和食'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad375212%2F&_gl=1*d8n573*_gcl_au*MTMwNzA4NDk3LjE3NzI3MDI3Njk.*_ga*NzQxMTg2ODMyLjE3Njk0OTY1NTc.*_ga_CB7M49WDK0*czE3NzUxMDA3NTUkbzIkZzEkdDE3NzUxMDE3MjckajUyJGwwJGgw', rakuten: 'https://a.r10.to/hkNmO8', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003301%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003301%252F' }
    },

    // ===== 杖立温泉（熊本）=====
    {
        id: 'h-kumamoto-3-1',
        onsen_id: 'o-kumamoto-3',
        name: 'つえたて温泉ひぜんや',
        prefecture: 'kumamoto',
        type: '老舗温泉旅館',
        description: '大分・熊本の県境に湧く杖立温泉の代表的な老舗旅館。炭酸水素塩泉の湯は杖立川に沿って設けられた蒸し風呂（蒸し湯）が名物で、100度近い蒸気を使った温泉蒸しは全身の疲れを深く癒す。夕食は阿蘇・熊本の食材・阿蘇の赤牛のしゃぶしゃぶ・山鹿産の菊池牛・杖立川の鮎を使った会席が旅情を高める。',
        price: '2食付き 16,000円〜',
        image: './hotels/tsuetateonsenhizenya.png',
        tags: ['温泉蒸し湯の名物', '阿蘇赤牛しゃぶしゃぶ', '杖立川の渓谷'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad328423%2F', rakuten: 'https://a.r10.to/hgj6jF', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031019%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031019%252F' }
    },
    {
        id: 'h-kumamoto-3-2',
        onsen_id: 'o-kumamoto-3',
        name: '杖立温泉 純和風旅館 泉屋',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '杖立温泉の街中に位置し、創業時から変わらぬ温かなおもてなしと、館内に立ち込める湯けむりが情緒を誘う全16室の純和風旅館。自家源泉から直接引き込まれた高温の温泉を利用した「むし湯」は、身体の芯からデトックスできると評判。夕食には、杖立の高温の蒸気で一気に蒸し上げ、素材の旨味を凝縮させた「セイロ蒸し」や、季節の創作会席を落ち着いたお部屋や個室でゆっくりと味わえる。',
        price: '2食付き 14,000円〜',
        image: './hotels/tsuetateonsenjunwafuryokansumiya.png',
        tags: ['杖立温泉の街中', 'むし湯', 'セイロ蒸し'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad365604%2F', rakuten: 'https://a.r10.to/hgFJ4u', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00920068%252F' }
    },
    {
        id: 'h-kumamoto-3-3',
        onsen_id: 'o-kumamoto-3',
        name: '杖立渓流の宿大自然',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '阿蘇の奥座敷、杖立川の渓流沿いに佇む、四季折々の景観と豊富な湯量が自慢の大型温泉宿。1,800年の歴史を誇る名湯を、川のせせらぎを間近に感じる大露天風呂や、杖立名物の「むし湯」で心ゆくまで堪能できる。夕食には熊本のブランド牛「あか牛」の陶板焼きや、地元小国郷の豊かな山の幸をふんだんに盛り込んだ彩り豊かな和食会席を、落ち着いた空間で家族やグループで賑やかに楽しめる。',
        price: '2食付き 18,000円〜',
        image: './hotels/tsuetatekeiryunoshiodaizen.png',
        tags: ['渓流沿い', 'むし湯', 'あか牛の陶板焼き'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad329110%2F', rakuten: 'https://a.r10.to/hkAXFR', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00918769%252F' }
    },

    // ===== 阿蘇内牧温泉（熊本）=====
    {
        id: 'h-kumamoto-4-1',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉 五岳ホテル',
        prefecture: 'kumamoto',
        type: '温泉ホテル',
        description: '阿蘇内牧温泉に位置し、ビジネスホテルの利便性と、老舗旅館に負けない「天然温泉」をリーズナブルに両立させた実力派のホテル。地下から自噴する100%源泉掛け流しの湯を、24時間入浴可能な大浴場で心ゆくまで堪能できるのが最大の魅力。朝食は、阿蘇産のお米や地元の食材を活かした温かな和定食を専用会場で味わえ、夕食は温泉街の飲食店を自由に開拓できる「自由な旅」の拠点として、一人旅やビジネス、阿蘇観光のゲストに幅広く支持されている。',
        price: '2食付き 12,000円〜',
        image: './hotels/gogakuhoteru.png',
        tags: ['源泉掛け流し', '阿蘇五岳の絶景', 'コスパ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad346730%2F', rakuten: 'https://a.r10.to/h5riFb', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908484%252F' }
    },
    {
        id: 'h-kumamoto-4-2',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉 湯巡追荘',
        prefecture: 'kumamoto',
        type: '温泉ホテル',
        description: '「エンターテインメント・リゾート」をコンセプトに、豊富な湯量と多彩なサービスで家族やグループに圧倒的な人気を誇る内牧温泉の宿。18室ある貸切家族風呂が無料で何度でも利用できるほか、夕食の豪華和洋中ビュッフェでは、霜降り和牛の焼きたてステーキや新鮮な刺身、飲み放題までがセットになっており、夜には縁日やビンゴ大会など大人から子供まで楽しめるイベントが毎日開催される。',
        price: '2食付き 17,500円〜',
        image: './hotels/yumeguitousou.png',
        tags: ['貸切家族風呂無料', '和洋中ビュッフェ', '縁日・ビンゴ大会'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad321249%2F', rakuten: 'https://a.r10.to/h50sPA', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-4-3',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉 旅館 金時',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '阿蘇内牧温泉の街中に佇む、創業以来変わらぬ誠実なおもてなしと、阿蘇の恵みを凝縮した「食」が自慢の全8室の老舗温泉旅館。24時間入浴可能な自家源泉掛け流しの湯を堪能した後は、店主自ら厳選した最高級の「あか牛」の溶岩焼きや、自家製米、旬の山菜をふんだんに盛り込んだ彩り豊かな会席料理に舌鼓を打ち、実家に帰ってきたような心地よい静寂の中で贅沢な休息のひとときを過ごせる。',
        price: '素泊まり 7,500円〜',
        image: './hotels/kinjitoryoukan.png',
        tags: ['源泉掛け流し', 'あか牛の溶岩焼き', '阿蘇の山里会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad307113%2F', rakuten: 'https://a.r10.to/h5XnJr', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-kumamoto-4-4',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉 蘇山郷',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '与謝野鉄幹・晶子夫妻も訪れた歴史を誇り、「阿蘇の旬を五感で楽しむ」をテーマにした、モダンな感性が光る内牧温泉の老舗宿。源泉掛け流しの露天風呂で美肌の湯に癒やされた後は、阿蘇の広大な大地で育った「あか牛」や地元の新鮮な野菜を主役にした、目にも鮮やかな創作会席を落ち着いた個室で堪能でき、夜には屋上の「焼酎BAR」で阿蘇の星空を眺めながら厳選された美酒をゆっくりと楽しめる。',
        price: '2食付き 46,000円〜',
        image: './hotels/sozangou.png',
        tags: ['源泉掛け流し', 'あか牛の創作会席', '阿蘇の星空と焼酎BAR'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad327522%2F', rakuten: 'https://a.r10.to/hPKUY8', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00003379%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00003379%252F' }
    },
    {
        id: 'h-kumamoto-4-5',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉 湯の宿 入船',
        prefecture: 'kumamoto',
        type: '温泉旅館',
        description: '「料理」と「お湯」に一切の妥協を許さない、全7室のこだわり抜いた隠れ宿。5つの趣異なる貸切風呂では、驚くほど濃厚な析出物が付着する源泉100%の湯を贅沢に独り占めでき、夕食には「自家栽培」の野菜や厳選された阿蘇の食材を、熟練の職人が独創的な一皿へと昇華させた創作料理として提供され、その圧倒的なクオリティに全国から美食家たちが繰り返し訪れる。',
        price: '2食付き 16,500円〜',
        image: './hotels/yunoyadoirifune.png',
        tags: ['源泉掛け流し', '自家栽培野菜の創作料理', '美食家が集う隠れ宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad331160%2F', rakuten: 'https://a.r10.to/hYHifM', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00909031%252F' }
    },
    {
        id: 'h-kumamoto-4-6',
        onsen_id: 'o-kumamoto-4',
        name: '阿蘇内牧温泉 御料理旅館 親和苑',
        prefecture: 'kumamoto',
        type: '高級温泉旅館',
        description: '見事な日本庭園の中に佇み、「料理旅館」の名にふさわしい至高の食体験を追求する、全12室の風情豊かな温泉宿。自家農園で育てた新鮮な無農薬野菜や阿蘇のあか牛をメインにした会席料理は、素材の力強さと繊細な技が融合した芸術的な味わいで、竹林に囲まれた幻想的な露天風呂や内湯で名湯を心ゆくまで堪能した後は、静寂に包まれた離れ風の客室で至福のリラックスタイムを享受できる。',
        price: '2食付き 18,000円〜',
        image: './hotels/shinwaen.png',
        tags: ['日本庭園', '自家農園野菜の創作会席', '竹林の露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad327067%2F', rakuten: 'https://a.r10.to/hYi5iU', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901420%252F' }
    },
    {
        id: 'h-kumamoto-4-7',
        onsen_id: 'o-kumamoto-4',
        name: 'あその旅宿 鷹の庄',
        prefecture: 'kumamoto',
        type: '高級温泉旅館',
        description: '約4,000坪の広大な敷地に、全室離れ・源泉掛け流し露天風呂付きの客室が点在する、大人のためのプライベートリゾート。古民家風の重厚な佇まいの客室で、誰にも邪魔されずに阿蘇の名湯を独り占めでき、夕食には阿蘇の恵みをふんだんに盛り込んだ「旬菜会席」や、最高級のあか牛の炭火焼きを個室のダイニングで味わいながら、夜には満天の星空の下で静かに流れる贅沢な時間を堪能できる。',
        price: '2食付き 25,500円〜',
        image: './hotels/takanosho.png',
        tags: ['全室離れ', '源泉掛け流し露天風呂', '阿蘇赤牛の炭火焼き'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad344210%2F', rakuten: 'https://a.r10.to/hk7yAa', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00919579%252F' }
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


    // ===== 長湯温泉（大分）=====
    {
        id: 'h-oita-4-1',
        onsen_id: 'o-oita-4',
        name: '万象の湯',
        prefecture: 'oita',
        type: '温泉旅館',
        description: 'ラムネ温泉で知られる長湯温泉の中でも、川のせせらぎを間近に感じる開放的なロケーションが魅力の温泉施設併設の宿。世界でも稀な二酸化炭素泉を「顔湯」や「ブクブク」と気泡が弾ける源泉掛け流しの湯船で堪能でき、夕食には自社農園の新鮮な野菜やエノハ（ヤマメ）、豊後牛などをふんだんに使用した、身体に優しい薬膳料理や創作和食を落ち着いた空間で心ゆくまで味わえる。',
        price: '2食付き 15,000円〜',
        image: './hotels/banshounoyu.png',
        tags: ['日本最高濃度の炭酸泉', '川沿いの絶景露天風呂', '身体を整える薬膳料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad363244%2F', rakuten: 'https://a.r10.to/h54WA3', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-4-2',
        onsen_id: 'o-oita-4',
        name: 'かじか庵',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '長湯温泉の街中に位置し、モダンな和のデザインと自家源泉の濃厚な炭酸泉が自慢のスタイリッシュな温泉旅館。現在は「自由な旅」をテーマに1泊朝食付きスタイルを基本としており、夕食は温泉街の飲食店や提携する「正直屋」などで地元の豊後牛やエノハ料理を自由に楽しめる。飲泉も可能な新鮮な名湯を貸切家族風呂で心ゆくまで堪能した後は、ジャズが流れるお洒落な館内で静かな大人の休日をゆっくりと過ごせる。',
        price: '朝食付き 8,500円〜',
        image: './hotels/kajikaryokan.png',
        tags: ['源泉掛け流しの炭酸泉', '貸切家族風呂充実', '自由な旅'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad323920%2F', rakuten: 'https://a.r10.to/h5iCLp', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-4-3',
        onsen_id: 'o-oita-4',
        name: '源泉の宿 郷の湯旅館',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '長湯温泉の原風景の中に佇み、圧倒的な「お湯の質」にこだわる全7室の小さな隠れ家的な温泉旅館。加水・加温一切なしの源泉掛け流しに徹底的にこだわり、湯船の周りに析出物がびっしりと付着するほど濃厚な炭酸泉を、貸切風呂や内湯でプライベートに心ゆくまで堪能でき、夕食には地元の旬の野菜や山菜、川魚など、素材の持ち味を最大限に引き出した心温まる手作りの田舎会席を味わえる。',
        price: '2食付き 13,000円〜',
        image: './hotels/gounoyu.png',
        tags: ['源泉掛け流し', '貸切風呂', '家庭的なおもてなし'],
        bookingUrls: { jalan: '#', rakuten: 'https://a.r10.to/h8rbKM', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-4-4',
        onsen_id: 'o-oita-4',
        name: '山の湯 かずよ',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '長湯温泉の高台に位置し、静かな森に包まれたような穏やかな時間が流れる、アットホームなおもてなしが魅力の温泉宿。鉄分と炭酸を豊富に含んだ茶褐色の名湯を、窓から緑を望む大浴場や露天風呂で源泉掛け流しのまま楽しみ、夕食には「豊後牛」の陶板焼きや、地元で獲れた新鮮な魚介、えびの産にも負けない美味しい竹田米など、ボリュームたっぷりの和食膳を家族やグループで賑やかに楽しめる。',
        price: '2食付き 16,000円〜',
        image: './hotels/kazuyo.png',
        tags: ['茶褐色の濃厚な炭酸泉', '高台の静かなロケーション', 'ボリューム満点の和食膳'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad308916%2F', rakuten: 'https://a.r10.to/h545sT', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-oita-4-5',
        onsen_id: 'o-oita-4',
        name: '大丸旅館',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '創業百余年、与謝野鉄幹・晶子夫妻ら多くの文人に愛された、竹田・長湯温泉を代表する格式高い老舗旅館。芹川のせせらぎが聞こえる洗練された客室で寛ぎ、名物「ラムネ温泉館」のシュワシュワと弾ける炭酸泉を楽しみながら、夕食には「豊後牛」や地元の山海の幸を芸術的な一皿へと昇華させた本格的な懐石料理を、歴史の重みを感じる落ち着いた空間で至高のおもてなしと共に堪能できる。',
        price: '2食付き 18,000円〜',
        image: './hotels/daimaruryokan.png',
        tags: ['創業100年以上の老舗旅館', '文人墨客に愛された名湯', '本格的な懐石料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad330841%2F', rakuten: 'https://a.r10.to/h5rHFp', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00904923%252F' }
    },
    {
        id: 'h-oita-4-6',
        onsen_id: 'o-oita-4',
        name: '丸長旅館',
        prefecture: 'oita',
        type: '温泉旅館',
        description: '長湯温泉の情緒ある街並みに溶け込む、全6室の小さな贅沢を大切にした美食と名湯の隠れ宿。わずか数室だからこそ叶う丁寧なおもてなしの中、源泉100%掛け流しの濃厚な炭酸泉を貸切の内湯で心ゆくまで独り占めでき、夕食には「美食の宿」として知られる所以である、地元のブランド肉や旬の厳選素材を創意工夫溢れる会席料理へと仕立てた一皿一皿を、落ち着いた個室でゆっくりと堪能できる。',
        price: '2食付き 18,000円〜',
        image: './hotels/maruchou.png',
        tags: ['全6室の小さな贅沢', '源泉100%掛け流しの濃厚な炭酸泉', '美食の宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad352152%2F', rakuten: 'https://a.r10.to/hPhL2n', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002544%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002544%252F' }
    },
    {
        id: 'h-oita-4-7',
        onsen_id: 'o-oita-4',
        name: '宿房 翡翠之庄 The Kingfisher resort',
        prefecture: 'oita',
        type: '高級温泉リゾート',
        description: '約3万坪の広大な敷地に、古民家を移築した重厚な離れが点在する、大正浪漫と現代ラグジュアリーが融合した一軒宿。全客室が趣の異なる贅沢な造りとなっており、専用の露天風呂や内湯で長湯の名湯をプライベートに楽しみながら、夕食には「エノハ」の姿造りや豊後牛の炭火焼きなど、屋号の由来でもある翡翠（カワセミ）が住む清流の恵みを盛り込んだ至福の会席を、至高のひとときの中で味わえる。',
        price: '2食付き 19,500円〜',
        image: './hotels/hisuibishou.png',
        tags: ['約3万坪の広大な敷地', '古民家を移築した重厚な離れ', '大正浪漫と現代ラグジュアリー'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad327148%2F', rakuten: 'https://a.r10.to/hkn129', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00901363%252F' }
    },

    // ===== 京町温泉（宮崎）=====
    {
        id: 'h-miyazaki-1-1',
        onsen_id: 'o-miyazaki-1',
        name: '京町温泉 京町観光ホテル',
        prefecture: 'miyazaki',
        type: '温泉ホテル',
        description: 'えびの市の京町温泉郷に位置し、古き良き温泉情緒を残しながらも、自家源泉から湧き出る「美肌の湯」を源泉掛け流しで堪能できる老舗温泉ホテル。開放感あふれる大浴場や露天風呂で、少しぬめりのある柔らかな湯に浸かりながらリラックスした後は、宮崎牛のしゃぶしゃぶや、地元の豊かな山の幸をふんだんに盛り込んだ彩り豊かな和食膳を、アットホームなおもてなしと共にゆっくりと味わえる。',
        price: '2食付き 14,000円〜',
        image: './hotels/kyomachikankohotel.png',
        tags: ['美肌の湯', '宮崎牛しゃぶしゃぶ', 'アットホーム'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad345121%2F', rakuten: 'https://a.r10.to/h5qIsC', ikyu: '#', yahoo: '#' }
    },
    {
        id: 'h-miyazaki-1-2',
        onsen_id: 'o-miyazaki-1',
        name: '京町温泉 玉泉館',
        prefecture: 'miyazaki',
        type: '老舗温泉旅館',
        description: '創業から続く伝統と、大正浪漫の雰囲気が漂う木造建築が魅力の、静かな時間が流れる全14室の老舗温泉旅館。広瀬川のせせらぎを聞きながら浸かる露天風呂や、趣のあるタイル張りの内湯で源泉100%の新鮮な湯を心ゆくまで楽しみ、夕食には「宮崎牛」のステーキや、えびの産の美味しいお米、旬の野菜を熟練の職人が丁寧に仕上げた滋味豊かな手作り料理を、落ち着いたお部屋で心ゆくまで堪能できる。',
        price: '2食付き 7,500円〜',
        image: './hotels/gyokusenkan.png',
        tags: ['大正浪漫', '宮崎牛のステーキ', '広瀬川のせせらぎ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad365982%2F', rakuten: 'https://a.r10.to/h8rWgh', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00918295%252F' }
    },
    {
        id: 'h-miyazaki-1-3',
        onsen_id: 'o-miyazaki-1',
        name: '京町温泉 十兵衛の宿',
        prefecture: 'miyazaki',
        type: '温泉旅館',
        description: '江戸時代の宿場町を思わせる長屋門が印象的な、全室に源泉掛け流しの内湯や露天風呂を完備したプライベート感あふれる温泉宿。併設の「十兵衛うどん」で提供されるこだわりの出汁や、宮崎のブランド肉を贅沢に使用したボリュームたっぷりの夕食が人気で、誰にも邪魔されずに客室で何度も名湯に浸かりながら、まるでもう一つの我が家のようにリラックスした至福のひとときを過ごせる。',
        price: '2食付き 19,500円〜',
        image: './hotels/juubee.png',
        tags: ['全室源泉掛け流し', '宮崎牛のステーキ', '十兵衛うどん'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad357185%2F', rakuten: 'https://a.r10.to/h5HU3t', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00031208%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00031208%252F' }
    },

    // ===== 青島温泉（宮崎）=====
    {
        id: 'h-miyazaki-2-1',
        onsen_id: 'o-miyazaki-2',
        name: 'ホテル 青島サンクマール',
        prefecture: 'miyazaki',
        type: '温泉リゾートホテル',
        description: '青島・鬼の洗濯板を眼下に望む絶景のロケーションに建ち、全客室オーシャンビューを誇る天然温泉リゾート。地下1,000メートルから湧き出る「美肌の湯」を、太平洋の水平線と一体になれる展望大浴場や露天風呂で源泉掛け流しで堪能でき、夕食には宮崎牛のステーキや、目の前の海で獲れた新鮮な伊勢海老、地元の旬素材をふんだんに盛り込んだ本格的な和食会席を心ゆくまで味わえる。',
        price: '2食付き 19,000円〜',
        image: './hotels/aoshimasankumaru.png',
        tags: ['全客室オーシャンビュー', '宮崎牛のステーキ', '伊勢海老料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad324606%2F', rakuten: 'https://a.r10.to/hgXpgX', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002018%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002018%252F' }
    },
    {
        id: 'h-miyazaki-2-2',
        onsen_id: 'o-miyazaki-2',
        name: '青島天然温泉ルートイングランティアあおしま太陽閣',
        prefecture: 'miyazaki',
        type: '温泉リゾートホテル',
        description: '青島の高台に位置し、充実したスパ施設とスポーツ・レジャーの拠点として人気の天然温泉リゾートホテル。県内最大級の広さを誇る大浴場や、サウナ、岩盤浴、漫画コーナーなどのリラクゼーション設備が充実しており、美肌効果の高い温泉でリラックスした後は、地元の郷土料理を取り入れた和洋ビュッフェや、ボリュームたっぷりの定食メニューを家族やグループで賑やかに楽しめる。',
        price: '2食付き 6,500円〜',
        image: './hotels/aoshimataiyokaku.png',
        tags: ['県内最大級の大浴場', '和洋ビュッフェ', 'スポーツ・レジャー拠点'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad309928%2F', rakuten: 'https://a.r10.to/h5crjB', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00080429%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00080429%252F' }
    },
    {
        id: 'h-miyazaki-2-3',
        onsen_id: 'o-miyazaki-2',
        name: 'ANAホリデイ・インリゾート宮崎 by IHG',
        prefecture: 'miyazaki',
        type: '温泉リゾートホテル',
        description: '青島海岸のすぐそばに建ち、南国らしい開放感と国際基準のサービスが融合したオーシャンフロントのリゾートホテル。全室から宮古ブルーの海や青島の緑を望むことができ、地下1,000メートルから引いた炭酸水素塩泉を展望大浴場で楽しみながら、夕食にはライブキッチンを備えたレストランで宮崎産の厳選食材を和洋中様々なスタイルで楽しめる豪華なビュッフェや、洗練されたコース料理を堪能できる。',
        price: '2食付き 14,500円〜',
        image: './hotels/anaholidayinnresortmiyazaki.png',
        tags: ['全室オーシャンビュー', '宮崎牛のステーキ', '伊勢海老料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad344027%2F', rakuten: 'https://a.r10.to/hP1jSd', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000976%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000976%252F' }
    },

    // ===== 指宿温泉（鹿児島）=====
    {
        id: 'h-kagoshima-1-1',
        onsen_id: 'o-kagoshima-1',
        name: '指宿白水館',
        prefecture: 'kagoshima',
        type: '高級温泉旅館',
        description: '日本古来の伝統美と豪華な建築が融合し、まるで美術館のような風格を漂わせる指宿を代表する老舗旅館。名物の「砂むし温泉」を館内で体験できるほか、江戸時代の銭湯を再現した「元禄風呂」は圧倒的なスケールを誇り、多種多様な湯殿で名湯を心ゆくまで堪能できる。夕食には鹿児島の黒豚や新鮮な海の幸を盛り込んだ最高級の和食会席を、至高のおもてなしと共に味わえる。',
        price: '2食付き 18,500円〜',
        image: './hotels/shirouzukan.png',
        tags: ['指宿温泉の老舗高級旅館', 'かごしま黒牛・黒豚会席', '錦江湾の大浴場'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad357348%2F', rakuten: 'https://a.r10.to/hYJM5g', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000641%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000641%252F' }
    },
    {
        id: 'h-kagoshima-1-2',
        onsen_id: 'o-kagoshima-1',
        name: '夫婦露天風呂の宿 吟松',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '指宿の海岸沿いに位置し、その名の通り「夫婦」やカップルで過ごす大切な時間をコンセプトにした、大人のための情緒あふれる温泉宿。最上階にある天空露天風呂「雲上」からは錦江湾の絶景を眼下に望むことができ、夕食にはテーブルの真ん中で源泉が湧き出す「砂すり料理」や、揚げたてのさつま揚げなど、五感で楽しむ創意工夫に満ちた会席料理を落ち着いた個室ダイニングでゆっくりと堪能できる。',
        price: '2食付き 22,000円〜',
        image: './hotels/ginshou.png',
        tags: ['夫婦で過ごす', '錦江湾の絶景', '砂すり料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad356820%2F', rakuten: 'https://a.r10.to/hPhypf', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001731%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001731%252F' }
    },
    {
        id: 'h-kagoshima-1-3',
        onsen_id: 'o-kagoshima-1',
        name: '指宿フェニックスホテル',
        prefecture: 'kagoshima',
        type: '温泉リゾートホテル',
        description: '指宿の高台に位置し、南国の花々に囲まれた広大な敷地と、どこまでも続く青い海を一望できるパノラマビューが自慢のリゾートホテル。館内にはオーシャンビューの砂むし温泉や、心地よい風を感じる露天風呂を備え、夕食には鹿児島のブランド肉や錦江湾で獲れた新鮮な魚介をふんだんに盛り込んだボリュームたっぷりの和食会席を、リゾート感あふれる開放的な空間で賑やかに楽しめる。',
        price: '2食付き 15,000円〜',
        image: './hotels/ibusukifenikkusuhoteru.png',
        tags: ['南国リゾートの雰囲気', '鹿児島黒豚しゃぶしゃぶ', '桜島・錦江湾の絶景'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad329490%2F', rakuten: 'https://a.r10.to/hPAVOQ', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00908834%252F' }
    },
    {
        id: 'h-kagoshima-1-4',
        onsen_id: 'o-kagoshima-1',
        name: '指宿ロイヤルホテル',
        prefecture: 'kagoshima',
        type: '温泉リゾートホテル',
        description: '錦江湾を見下ろす断崖の上に建ち、全客室からオーシャンビューを楽しめる、女性やカップルに人気のスタイリッシュな絶景ホテル。自家源泉から引き込んだ露天風呂からは、天気が良ければ大隅半島や屋久島まで望むことができ、夕食には「身体の中から美しく」をテーマに、鹿児島の伝統野菜や黒毛和牛、新鮮な魚介をヘルシーかつ贅沢に仕上げた創作会席を、モダンなダイニングで心ゆくまで味わえる。',
        price: '2食付き 12,500円〜',
        image: './hotels/ibusukiryoaruhoteru.png',
        tags: ['オーシャンビュー', '創作会席', 'モダンな雰囲気'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad334958%2F', rakuten: 'https://a.r10.to/h5YHJI', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00900399%252F' }
    },
    {
        id: 'h-kagoshima-1-5',
        onsen_id: 'o-kagoshima-1',
        name: '指宿海上ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: '指宿の海岸線に沿うように建ち、まるで海の上に浮かんでいるかのような圧倒的な臨場感が魅力の老舗温泉ホテル。館内にいながら波音を聞いて体験できる砂むし温泉や、錦江湾の朝焼けを一望する大浴場で名湯を満喫でき、夕食には地元の漁港から直送される新鮮な真鯛やキビナゴ、鹿児島黒豚など、郷土の旬素材を活かした伝統的な和食膳を、アットホームなおもてなしと共に堪能できる。',
        price: '2食付き 16,500円〜',
        image: './hotels/ibusukikaijouhoteru.png',
        tags: ['海の上に浮かぶような', '錦江湾の朝焼け', '郷土の旬素材'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad318982%2F', rakuten: 'https://a.r10.to/h56eYs', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902300%252F' }
    },
    {
        id: 'h-kagoshima-1-6',
        onsen_id: 'o-kagoshima-1',
        name: '休暇村指宿',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: '指宿温泉郷の南端、魚見岳の麓に広がる豊かな自然に包まれた、癒やしとアクティビティが融合した国立公園内の宿。自家源泉から引き込んだ温泉と館内の砂むし温泉でリラックスした後は、鹿児島の名物料理や新鮮な魚介を心ゆくまで楽しめる「ハーフビュッフェ」や、季節の会席料理に舌鼓を打ち、夜には星空観察や焚き火など、大自然を感じるプログラムを家族みんなで思い思いに満喫できる。',
        price: '2食付き 12,000円〜',
        image: './hotels/kyukamuraibusuki.png',
        tags: ['国立公園内', 'ハーフビュッフェ', '焚き火'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad304520%2F', rakuten: 'https://a.r10.to/hgRZf1', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030876%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030876%252F' }
    },
    {
        id: 'h-kagoshima-1-7',
        onsen_id: 'o-kagoshima-1',
        name: 'こらんの湯 錦江楼',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: '指宿温泉の中でも、希少な「にごり湯」を自家源泉で堪能できる、静かな海沿いに佇む隠れ家的な温泉旅館。ナトリウムー塩化物泉の濃厚な湯を、錦江湾を望む露天風呂や大浴場で源泉掛け流しのまま楽しみ、夕食には「指宿の旬」にこだわり、地元の農家から届く新鮮な野菜や、三陸・日本海とはまた違う南国の豊かな海の幸を、熟練の職人が丁寧に仕上げた彩り豊かな会席料理としてゆっくりと味わえる。',
        price: '2食付き 16,000円〜',
        image: './hotels/korannoyu.png',
        tags: ['にごり湯', '錦江湾の絶景', '旬の会席料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad361122%2F', rakuten: 'https://a.r10.to/hk4LIq', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030819%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030819%252F' }
    },

    // ===== 霧島温泉（鹿児島）=====
    {
        id: 'h-kagoshima-2-1',
        onsen_id: 'o-kagoshima-2',
        name: '湯の花 MUKU',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '霧島連峰を望む高台に位置し、全客室に源泉掛け流しの露天風呂を完備した、洗練されたモダンラグジュアリーな温泉宿。わずか数室のプライベート空間で、霧島の名湯を誰にも邪魔されずに独り占めできる贅沢な時間を過ごせ、夕食には地元の旬素材をアーティスティックに昇華させた創作会席を、落ち着いたダイニングで厳選された美酒と共に堪能できる。',
        price: '2食付き 16,000円〜',
        image: './hotels/yunohanamuku.png',
        tags: ['全室源泉掛け流し露天風呂付', '創作会席料理', '霧島連峰の絶景'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad373750%2F', rakuten: 'https://a.r10.to/hP2AEk', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00907150%252F' }
    },
    {
        id: 'h-kagoshima-2-2',
        onsen_id: 'o-kagoshima-2',
        name: 'ホテル京セラ',
        prefecture: 'kagoshima',
        type: '温泉リゾートホテル',
        description: '建築家・黒川紀章氏が設計した、圧倒的な吹き抜けの円形アトリウムが目を引く霧島エリアを代表するランドマークホテル。地下1,050メートルから湧き出る天然温泉「エデンの湯」や、古代ローマを彷彿とさせる大浴場、温水プールなど充実のスパ施設を完備し、夕食には鹿児島が誇る黒豚のしゃぶしゃぶや本格的な和洋中ビュッフェを、開放感あふれる空間で家族やグループで賑やかに楽しめる。',
        price: '2食付き 12,000円〜',
        image: './hotels/hoterukyosera.png',
        tags: ['黒川紀章設計の円形アトリウム', '和洋中ビュッフェ', '充実のスパ施設'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad305754%2F', rakuten: 'https://a.r10.to/h8XgJs', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001320%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001320%252F' }
    },
    {
        id: 'h-kagoshima-2-3',
        onsen_id: 'o-kagoshima-2',
        name: 'ラビスタ霧島ヒルズ',
        prefecture: 'kagoshima',
        type: '温泉リゾートホテル',
        description: '霧島温泉郷の最南端に位置し、南欧プロバンスの風情が漂う全室露天風呂付きのプレミアムな温泉リゾート。全客室から桜島や錦江湾を一望でき、ルーフテラスの露天風呂で霧島の名湯に癒やされた後は、ライブキッチンを備えたレストランでイタリアンをベースにした洋食フルコースを堪能でき、夜鳴きそばなどの共立リゾートならではの無料サービスも充実している。',
        price: '2食付き 19,500円〜',
        image: './hotels/rabistakirishimahiruzu.png',
        tags: ['全室露天風呂付き', '桜島・錦江湾の絶景', '共立リゾートのサービス'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad393380%2F', rakuten: 'https://a.r10.to/hFHIQY', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002610%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002610%252F' }
    },
    {
        id: 'h-kagoshima-2-4',
        onsen_id: 'o-kagoshima-2',
        name: '鳥遊ぶ森の宿 ふたり静',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '霧島の深い森の中にひっそりと佇む、わずか5棟の離れのみで構成された、大人のための静寂と美食の隠れ宿。全室に内湯と露天風呂、さらに岩盤浴やサウナを備えた客室もあり、誰にも邪魔されない至福のリラックスタイムを過ごせ、夕食にはオーナーシェフが腕を振るう、鹿児島の食材を贅沢に使用した独創的で美しい創作フレンチ懐石を、お部屋や個室でゆっくりと味わえる。',
        price: '2食付き 35,000円〜',
        image: './hotels/toriasobumorinoyadofutarishizuka.png',
        tags: ['全室露天風呂付き', '創作フレンチ懐石', '森の中の隠れ宿'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad370976%2F', rakuten: 'https://a.r10.to/h58gax', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001185%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001185%252F' }
    },
    {
        id: 'h-kagoshima-2-5',
        onsen_id: 'o-kagoshima-2',
        name: 'AUBEGIO 霧島観光ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: '霧島温泉郷の高台に建ち、桜島の雄大な姿を望むパノラマビューと、霧島唯一の「展望足湯」が自慢の温泉ホテル。源泉掛け流しの露天風呂や大浴場で乳白色の名湯を心ゆくまで堪能した後は、鹿児島黒豚のせいろ蒸しや、地元の旬素材を活かした彩り豊かな郷土会席に舌鼓を打ち、モダンにリニューアルされたラウンジや客室で、霧島の自然を感じながら穏やかな休日を過ごせる。',
        price: '2食付き 10,500円〜',
        image: './hotels/aubegiokirishimakankohoteru.png',
        tags: ['展望足湯', '桜島・錦江湾の絶景', '鹿児島黒豚料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad319449%2F', rakuten: 'https://a.r10.to/hYz5Hj', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00030263%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00030263%252F' }
    },
    {
        id: 'h-kagoshima-2-6',
        onsen_id: 'o-kagoshima-2',
        name: '霧島ホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: '「坂本龍馬ゆかりの宿」として知られ、圧倒的なスケールを誇る巨大な大浴場「硫黄谷庭園大浴場」が圧巻の老舗温泉ホテル。1日8万リットルという驚異的な湧出量を誇り、硫黄・食塩・重曹・明礬の4つの泉質を一度に楽しめるほか、夕食には霧島山麓の山の幸や錦江湾の海の幸をふんだんに盛り込んだ「薩摩会席」を、歴史のロマンを感じる落ち着いた空間で心ゆくまで堪能できる。',
        price: '2食付き 15,500円〜',
        image: './hotels/kirishimahoteru.png',
        tags: ['硫黄谷庭園大浴場', '坂本龍馬ゆかりの宿', '薩摩会席'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad311199%2F', rakuten: 'https://a.r10.to/hPvaLg', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00902174%252F' }
    },
    {
        id: 'h-kagoshima-2-7',
        onsen_id: 'o-kagoshima-2',
        name: '料亭旅館 竹千代 霧島別邸',
        prefecture: 'kagoshima',
        type: '高級料亭旅館',
        description: '霧島神宮の参道近くに佇み、かつての島津家の別邸を思わせる風格ある佇まいと、極上の「食」でもてなす格式高い料亭旅館。全室が趣の異なる贅沢な造りとなっており、柔らかな肌触りの名湯を露天風呂や大浴場で楽しみながら、夕食には熟練の職人が一皿一皿に魂を込めた、鹿児島の四季を五感で楽しむ最高級の京風懐石を、至高のおもてなしと共に至福のひとときの中で味わえる。',
        price: '2食付き 29,000円〜',
        image: './hotels/kirishimabettei.png',
        tags: ['霧島神宮参拝の拠点', '京風懐石', '鹿児島黒豚料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad380064%2F', rakuten: 'https://a.r10.to/h5xSNy', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002097%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002097%252F' }
    },

    // ===== 桜島温泉（鹿児島）=====
    {
        id: 'h-kagoshima-3-1',
        onsen_id: 'o-kagoshima-3',
        name: '桜島シーサイドホテル',
        prefecture: 'kagoshima',
        type: '温泉ホテル',
        description: '活火山・桜島の中腹に建ち、錦江湾を一望する圧倒的なロケーションの温泉ホテル。炭酸水素塩泉の温泉を大浴場と露天風呂で楽しめ、活火山の噴煙と錦江湾の絶景が非日常の旅体験を演出する。夕食は鹿児島の食材を使った会席で、かごしま黒牛のしゃぶしゃぶ・鹿児島黒豚の角煮・桜島大根の炊いたもの・桜島小みかんのデザートが世界最大の活動カルデラで育まれた食材の豊かさを伝える。',
        price: '2食付き 12,000円〜',
        image: './hotels/sakurashimashiisaidohoteru.png',
        tags: ['活火山・桜島の絶景', '桜島大根・桜島小みかん', '錦江湾一望の露天風呂'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad346506%2F', rakuten: 'https://a.r10.to/h5gdBM', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00917567%252F' }
    },
    {
        id: 'h-kagoshima-3-2',
        onsen_id: 'o-kagoshima-3',
        name: '国民宿舎 レインボー桜島',
        prefecture: 'kagoshima',
        type: '温泉旅館',
        description: '桜島の自然に囲まれた温泉旅館。炭酸水素塩泉の湯を内湯と露天風呂で楽しみながら、活火山の迫力と錦江湾の美しさを間近に感じられる希少な宿泊体験が得られる。夕食は鹿児島の食材を使った料理で、世界最大の大根・桜島大根の煮付け・桜島溶岩で焼いたかごしま黒牛のステーキ・鹿児島黒豚の料理が桜島ならではの個性ある食体験として旅人を魅了する。',
        price: '2食付き 8,500円〜',
        image: './hotels/kokuminshukushareinboosakurashima.png',
        tags: ['活火山の溶岩の地', '桜島大根の煮付け', '炭酸水素塩泉'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad304437%2F', rakuten: 'https://a.r10.to/h8GEyy', ikyu: '#', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00920424%252F' }
    },

    // ===== 屋久島温泉（鹿児島）=====
    {
        id: 'h-kagoshima-4-1',
        onsen_id: 'o-kagoshima-4',
        name: '屋久島いわさきホテル',
        prefecture: 'kagoshima',
        type: '温泉リゾートホテル',
        description: '世界自然遺産・屋��島の海岸に建つ温泉リゾートホテル。単純泉の温泉を大浴場と露天風呂で楽しめ、東シナ海の絶景と屋久島の豊かな自然が旅人を包む。夕食は屋久島の食材を使った会席料理で、屋久サバ・首折れサバ・屋久鹿のジビエ料理・屋久島産のパッションフルーツを使ったデザートが世界自然遺産の島ならではの食体験として旅人に屋久島の豊かさを伝える。',
        price: '2食付き 24,000円〜',
        image: './hotels/yakushimaiwasakihoteru.png',
        tags: ['世界自然遺産の島', '首折れサバ料理', '屋久鹿のジビエ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad328014%2F', rakuten: 'https://a.r10.to/hgYnJ5', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000348%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000348%252F' }
    },
    {
        id: 'h-kagoshima-4-2',
        onsen_id: 'o-kagoshima-4',
        name: 'samana hotel Yakushima',
        prefecture: 'kagoshima',
        type: '温泉リゾートホテル',
        description: '屋久島の南端、切り立った断崖の上に建つ「海と森の交差点」をコンセプトとした、圧倒的なパノラマビューを誇る全室オーシャンビューのリゾートホテル。目の前に広がる東シナ海の蒼い絶景を眺めながら、美肌効果の高いトロトロの天然温泉「尾之間温泉」を源泉掛け流しの露天風呂で堪能でき、夕食には屋久島産の首折れ鯖やトビウオ、地元の有機野菜など、島の恵みをイタリアンの技法で一皿に凝縮した「屋久島テロワール」のフルコースを心ゆくまで楽しめる。',
        price: '2食付き 22,000円〜',
        image: './hotels/samana.png',
        tags: ['縄文杉トレッキングの拠点', '首折れサバの刺身', '屋久鹿のジビエ料理'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad358603%2F', rakuten: 'https://a.r10.to/hPhHvH', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001649%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001649%252F' }
    },

    // ===== シギラ黄金温泉（沖縄）=====
    {
        id: 'h-okinawa-1-1',
        onsen_id: 'o-okinawa-1',
        name: 'ホテルシギラミラージュ',
        prefecture: 'okinawa',
        type: '高級ビーチリゾート',
        description: '宮古島の南岸、シギラセブンマイルズリゾートの象徴としてそびえ立つ、ラグジュアリーを極めた高層アーバンリゾート。全室が11階以上の「ベイサイド」や、全室プール付きの別棟「ミラージュフロア」など、洗練されたモダンな客室からは宮古ブルーの海が一望でき、シャンパンが流れる朝食ビュッフェや、宮古島の厳選食材を五感で楽しむ鉄板焼き・イタリアンなど、至福の美食体験とともに最高峰のホスピタリティを享受できる。',
        price: '2食付き 26,000円〜',
        image: './hotels/hoterushigiramirage.png',
        tags: ['全室オーシャンビュー', 'プライベートプール付き客室あり', 'シャンパンブレックファスト', 'シギラ黄金温泉'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad330808%2F', rakuten: 'https://a.r10.to/hk4qr7', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002622%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002622%252F' }
    },
    {
        id: 'h-okinawa-1-2',
        onsen_id: 'o-okinawa-1',
        name: 'アラマンダ インギャーコーラルヴィレッジ',
        prefecture: 'okinawa',
        type: 'ヴィラリゾート',
        description: '宮古島随一のシュノーケリングポイント「インギャーマリンガーデン」に隣接し、暮らすように過ごせる全室ロフト付きのコテージ型リゾート。全客室にジャグジーを完備した開放的なプライベートテラスがあり、家族やグループで賑やかに過ごせる「遊びの拠点」として最適で、島の食材をふんだんに使ったブッフェスタイルの料理や、海遊びの後にすぐリラックスできるアットホームな空間が、自由でアクティブな島旅を叶えてくれる。',
        price: '2食付き 21,000円〜',
        image: './hotels/aramandaingyakoraruvirage.png',
        tags: ['全室ジャグジー完備', 'インギャーマリンガーデン至近', 'ロフト付きの遊び心ある客室', 'ファミリーに人気'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad338156%2F', rakuten: 'https://a.r10.to/hk4omV', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00002435%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00002435%252F' }
    },
    {
        id: 'h-okinawa-1-3',
        onsen_id: 'o-okinawa-1',
        name: 'シギラベイサイドスイート アラマンダ',
        prefecture: 'okinawa',
        type: '高級リゾートホテル',
        description: '全室がスイートルームという贅沢な空間で、日常を忘れて南国の風に抱かれる「大人のための隠れ家」リゾート。南国植物に囲まれたプライベートプール付きの客室「プールヴィラ ロイヤルスイート」は国内屈指の広さを誇り、ウミガメが泳ぐラグーンを眺めながら味わう至極のディナーや、極上のスパ体験、そして24時間対応のコンシェルジュサービスなど、すべてが記念日やハネムーンにふさわしい最上級のプライベートタイムを演出する。',
        price: '2食付き 32,500円〜',
        image: './hotels/shigirabeisidosuittoaramanda.png',
        tags: ['全室スイートルーム', '国内最大級のプールヴィラ', 'ウミガメが泳ぐラグーン', '12歳未満宿泊制限エリアあり'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad356578%2F', rakuten: 'https://a.r10.to/h8bsxD', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00000998%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00000998%252F' }
    },

    // ===== 琉球温泉（沖縄）=====
    {
        id: 'h-okinawa-2-1',
        onsen_id: 'o-okinawa-2',
        name: '琉球温泉 瀬長島ホテル',
        prefecture: 'okinawa',
        type: '温泉リゾートホテル',
        description: '那覇空港から車で約10分の瀬長島に建つリゾートホテル。瀬長島の天然温泉を使ったスパ施設「琉球温泉 瀬長島ホテル」で、東シナ海と飛行機の離着陸が同時に楽しめる唯一無二の体験ができる。夕食は沖縄の旬食材を使ったコース料理で、石垣牛のローストビーフ・もとぶ産の地魚お造り・海ぶどうのサラダ・沖縄産パッションフルーツのデザートが南国の旅の最後を飾る。',
        price: '2食付き 17,000円〜',
        image: './hotels/ryukyuonsensenagazhimahotel.png',
        tags: ['那覇空港10分の離島リゾート', '飛行機と夕日の絶景', '石垣牛ローストビーフ'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad352977%2F', rakuten: 'https://a.r10.to/hk5ZpN', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00001909%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00001909%252F' }
    },
    {
        id: 'h-okinawa-2-2',
        onsen_id: 'o-okinawa-2',
        name: 'HOTEL SAUSUI NAHA 琉球温泉 波之上の湯',
        prefecture: 'okinawa',
        type: '温泉リゾートホテル',
        description: '那覇空港から車で約10分、那覇市内で唯一の天然温泉と、空に溶け込むようなインフィニティプールを完備したアーバンリゾートホテル。地下500mから湧き出る「波之上の湯」は、身体を芯から温める天然温泉で、サウナや露天風呂も完備。屋上には那覇の街並みや東シナ海を見渡す絶景のプールとスカイバーがあり、夜には幻想的なライトアップと共にカクテルを楽しみながら、沖縄の風を感じる贅沢なひとときを過ごせる。',
        price: '朝食付き 5,500円〜',
        image: './hotels/hotelsausuinaharyukyuonsen.png',
        tags: ['那覇市内の温泉宿', '天然温泉', 'インフィニティプール'],
        bookingUrls: { jalan: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1GE6SA+14CS+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.jalan.net%2Fyad353760%2F', rakuten: 'https://a.r10.to/hgFOnP', ikyu: 'https://px.a8.net/svt/ejp?a8mat=3N8796+1KK80Q+1OK+BW0YB&a8ejpredirect=https%3A%2F%2Fwww.ikyu.com%2FikCo.ashx%3Fcosid%3Da8ikyu%26surl%3Dhttps%253A%252F%252Fwww.ikyu.com%252F00081986%252F', yahoo: 'https://px.a8.net/svt/ejp?a8mat=4AZ9C4+7JHPEI+4ZCO+BW0YB&a8ejpredirect=https%3A%2F%2Ftravel.yahoo.co.jp%2FikCo.ashx%3Fcosid%3Dy_a8net%26surl%3Dhttps%253A%252F%252Ftravel.yahoo.co.jp%252F00081986%252F' }
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
