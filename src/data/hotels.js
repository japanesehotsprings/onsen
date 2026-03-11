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
];

/**
 * 宿のテキスト検索
 * @param {string} query - 検索クエリ
 * @returns {Array} 検索結果の配列
 */
export function searchHotels(query) {
    const q = query.toLowerCase();
    return hotelList.filter(h =>
        h.name.toLowerCase().includes(q) ||
        h.description.toLowerCase().includes(q) ||
        h.type.toLowerCase().includes(q) ||
        h.tags.some(t => t.toLowerCase().includes(q))
    );
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
