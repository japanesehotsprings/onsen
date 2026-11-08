"""コラムのサムネ用の写真候補をウィキメディア・コモンズから集め、確認用のシートを作る
使い方: python3 scripts/thumbs/photo_candidates.py <作業フォルダ> [記事ID...]
再配布できる許諾（CC0・パブリックドメイン・CC BY・CC BY-SA）で、横長・幅1200px以上の写真だけを対象にする
"""
import io, json, os, re, sys, time, urllib.parse, urllib.request
from PIL import Image, ImageDraw

QUERIES = {
 'shin-toji-guide': ['Hijiori onsen street', '肘折温泉 温泉街', 'Osawa Onsen Iwate', '大沢温泉 岩手', 'Namari Onsen', '鉛温泉 藤三旅館', 'Shibu Onsen street', 'Yunomine onsen Tsuboyu'],
 'onsen-mark-yurai': ['温泉記号', '温泉マーク', 'onsen symbol sign', 'hot spring symbol Japan', '磯部温泉', 'Isobe Onsen', '♨'],
 'onsen-teigi': ['Kannawa onsen steam', '温泉 源泉 湯けむり', 'hot spring source Japan steam'],
 'onsen-bunsekisho-mikata': ['温泉分析書', 'onsen analysis certificate', '温泉 掲示 成分'],
 'kasui-kaon-junkan': ['内湯 温泉 湯船', 'indoor bath ryokan Japan', 'onsen indoor bath', '大浴場 温泉', 'hot spring bath interior Japan wooden'],
 'gensensu-ranking': ['Beppu steam city view', 'Beppu onsen town steam', '別府 湯けむり 展望'],
 'fuyu-nyuyoku-jiko': ['脱衣所 温泉', 'onsen changing room', '銭湯 脱衣所', 'sento changing room', '脱衣場', 'snow onsen Japan outdoor bath empty'],
 'sento-onsen-chigai': ['sento bathhouse Japan interior', '銭湯 浴室', 'Sento mural Mount Fuji bath'],
 'ninshinchu-onsen': ['足湯 温泉', 'ashiyu foot bath Japan', 'footbath onsen town'],
 'nyutozei-guide': ['入湯税', '温泉街 夕景', 'onsen town street Japan evening'],
 'kokumin-hoyo-onsenchi-guide': ['Sukayu Onsen', '酸ヶ湯温泉', 'Nikko Yumoto onsen'],
 'insen-guide': ['飲泉場', '長湯温泉 飲泉', '三朝温泉 飲泉', '飲泉 温泉 Japan', 'Nagayu Onsen', 'Masutomi Onsen', '炭酸泉源 有馬', 'Yunokawa drinking hot spring'],
 'nihon-sankoto': ['Dogo Onsen Honkan', '道後温泉本館', 'Dogo onsen main building'],
 'onsen-sensitsu-10-types': ['Umi Jigoku Beppu', 'Chinoike Jigoku Beppu', 'Arima kinsen golden water', '白濁 温泉 露天風呂'],
 'tattoo-onsen-guide': ['tattoo onsen sign Japan', '入れ墨 お断り', '貸切風呂', 'private bath ryokan Japan'],
 'kids-onsen-guide': ['家族風呂', 'family bath onsen Japan', 'yukata children Japan onsen', '足湯 親子', '貸切 露天風呂'],
 'onsen-nyuyoku-kaisu-jikan': ['湯桶', 'wooden bucket Japan bath', '手桶', 'hinoki bath bucket', 'onsen stools buckets', 'wash area sento'],
 'yukimi-rotenburo-onsen': ['Hirayu onsen snow', '平湯温泉', 'Takayu onsen snow', 'Nyuto onsen snow rotenburo'],
 'nihon-sanmeisen': ['Yubatake Kusatsu', '湯畑 草津'],
 'gensenkakenagashi-guide': ['湯口 源泉', 'onsen hot water spout', 'hot spring water flowing into bath Japan', '木の湯船 温泉', 'rotenburo wooden bath Japan', 'Hinoki bath onsen'],
 'solo-travel-onsen': ['Ginzan Onsen', '銀山温泉'],
 'zekke-rotenburo-guide': ['Furofushi Onsen', '不老ふ死温泉', 'Manza onsen', 'rotenburo ocean view Japan'],
 'kanto-hirogari-onsen': ['Ikaho stone steps', '伊香保 石段街', 'Shikagoyu Nasu 鹿の湯'],
 'tohoku-meito-hito': ['Tsurunoyu Nyuto', '鶴の湯 乳頭温泉', 'Nyuto Onsen'],
 'onsen-kenko-nyuyokuho': ['Tamagawa Onsen Akita', '玉川温泉 秋田', 'Kusatsu jikanyu'],
 'kyushu-onsen-guide': ['Kurokawa Onsen', '黒川温泉', 'Ibusuki sand bath'],
 'shinshu-nagano-onsen': ['Nozawa Onsen Oyu', '野沢温泉 大湯', 'Shibu Onsen Kanaguya'],
 'onsen-gurume-travel': ['Jigoku mushi Beppu', '地獄蒸し', '湯村温泉 荒湯', 'kaiseki ryokan dinner'],
 'hokkaido-onsen-top5': ['Noboribetsu Jigokudani', '登別 地獄谷'],
 'bijin-no-yu-guide': ['Ureshino Onsen', '嬉野温泉', 'Gero Onsen'],
 'hajimete-onsen-guide': ['男湯 女湯 暖簾', 'sento noren', 'bath noren Japan', 'のれん 温泉', 'public bath entrance Japan noren', 'onsen entrance noren'],
 'course-hakone-1night': ['Owakudani Hakone', 'Lake Ashi Fuji Hakone', '大涌谷'],
 'course-kusatsu-2night': ['Sainokawara Kusatsu', '西の河原 草津', 'Yumomi Kusatsu'],
 'course-arima-kyoto-2night': ['Arima Onsen Kin no yu', '有馬温泉 金の湯', 'Arima Onsen town'],
 'course-beppu-yufuin-3night': ['Kinrinko Yufuin', '金鱗湖', 'Yufuin Yufu-dake'],
 'course-tohoku-hito-3night': ['Naruko Onsen', '鳴子温泉 早稲田桟敷湯', 'Waseda Sajikiyu'],
 'course-hokkaido-onsen-3night': ['Lake Toya onsen', '洞爺湖温泉', 'Jozankei Onsen'],
 'course-izu-daytrip': ['Shuzenji bamboo forest', '修善寺 竹林の小径', 'Tokko no yu Shuzenji'],
 'course-kaga-noto-2night': ['Yamashiro Onsen Kosoyu', '山代温泉 古総湯', 'Yamanaka Onsen Kakusenkei'],
 'course-kinosaki-1night': ['Kinosaki Onsen', '城崎温泉'],
 # 特集（泉質・テーマ別）のサムネ
 'special-kokumin-hoyo-onsenchi': ['Shima Onsen Sekizenkan', '四万温泉', 'Nikko Yumoto onsen', '日光湯元温泉', 'Shirahone Onsen'],
 'special-iousen-onsenchi': ['Manza Onsen', '万座温泉', 'Noboribetsu Jigokudani', 'Kusatsu Yubatake sulfur'],
 'special-alkaline-simple-onsen': ['Gero Onsen', '下呂温泉', 'Kinugawa Onsen', '鬼怒川温泉', 'Yunishigawa Onsen'],
 'special-umibe-onsen': ['Shirahama Sakinoyu', '崎の湯 白浜', 'Furofushi Onsen', '不老ふ死温泉', 'Ibusuki onsen sea'],
}
UA = 'JapanOnsenMedia/1.0 (https://japan-onsen-web.pages.dev)'
OK = re.compile(r'^(cc0|pd|public domain|cc[- ]by(-sa)?[- ]?[\d.]*)', re.I)

def get(url, binary=False):
    for i in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=40) as r:
                d = r.read()
            return d if binary else json.loads(d)
        except Exception:
            time.sleep(3 * (i + 1))
    return None

def search(q):
    p = {'action': 'query', 'format': 'json', 'generator': 'search', 'gsrnamespace': 6, 'gsrlimit': 20,
         'gsrsearch': q + ' filetype:bitmap', 'prop': 'imageinfo', 'iiprop': 'url|size|mime|extmetadata', 'iiurlwidth': 420}
    d = get('https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(p))
    out = []
    for pg in sorted(((d or {}).get('query', {}).get('pages', {})).values(), key=lambda x: x.get('index', 99)):
        ii = (pg.get('imageinfo') or [{}])[0]
        m = ii.get('extmetadata', {})
        lic = (m.get('LicenseShortName', {}).get('value') or '').strip()
        if ii.get('mime') != 'image/jpeg' or ii.get('width', 0) < 1000 or ii.get('width', 0) < ii.get('height', 1) * 1.15:
            continue
        if not OK.match(lic) or re.search(r'-nc|-nd', lic, re.I):
            continue
        out.append({'title': pg['title'], 'url': ii['url'], 'thumb': ii.get('thumburl'), 'page': ii.get('descriptionurl'),
                    'license': lic, 'artist': re.sub(r'<[^>]+>', '', m.get('Artist', {}).get('value') or '').strip()[:80],
                    'desc': re.sub(r'<[^>]+>', '', m.get('ImageDescription', {}).get('value') or '').strip()[:100], 'q': q})
    return out

def main():
    work = sys.argv[1]; os.makedirs(work, exist_ok=True)
    keys = sys.argv[2:] or list(QUERIES)
    for k in keys:
        seen, cands = set(), []
        for q in QUERIES[k]:
            for c in search(q):
                if c['title'] not in seen:
                    seen.add(c['title']); cands.append(c)
            time.sleep(0.5)
        cands = cands[:12]
        W, H = 300, 200
        sheet = Image.new('RGB', (W * 4, H * 3), 'white'); dr = ImageDraw.Draw(sheet)
        for i, c in enumerate(cands):
            b = get(c['thumb'], True)
            time.sleep(0.3)
            if not b: continue
            im = Image.open(io.BytesIO(b)).convert('RGB'); im.thumbnail((W - 4, H - 4))
            x, y = (i % 4) * W, (i // 4) * H
            sheet.paste(im, (x + 2, y + 2)); dr.rectangle((x + 2, y + 2, x + 30, y + 22), fill='black'); dr.text((x + 7, y + 6), str(i), fill='white')
        sheet.save(f'{work}/{k}.jpg', quality=78)
        json.dump(cands, open(f'{work}/{k}.json', 'w'), ensure_ascii=False, indent=1)
        print(k, len(cands), flush=True)

main()
