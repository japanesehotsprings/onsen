"""選んだ写真をコモンズから取得して public/article-photos に保存し、クレジットのデータを書き出す
使い方: python3 scripts/thumbs/fetch_photos.py <picked.json> <alts.json>
"""
import io, json, re, sys, time, urllib.request
from pathlib import Path
from PIL import Image

UA = 'JapanOnsenMedia/1.0 (https://japan-onsen-web.pages.dev; info@tech-village.co.jp)'
ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public/article-photos'
# 作者欄が機械的に崩れているものだけ手で直す
ARTIST = {'gensensu-ranking': 'FIND/47', 'onsen-bunsekisho-mikata': 'Soica2001', 'onsen-nyuyoku-kaisu-jikan': 'Soica2001',
          'zekke-rotenburo-guide': 'Hitachi-Train', 'course-kaga-noto-2night': 'Maarten Heerlien'}

def license_url(lic):
    m = re.match(r'cc[- ]by(-sa)?[- ]([\d.]+)', lic, re.I)
    if m:
        kind = 'by-sa' if m.group(1) else 'by'
        return f'https://creativecommons.org/licenses/{kind}/{m.group(2)}/deed.ja'
    return ''

def get(url):
    for i in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
                return r.read()
        except Exception:
            time.sleep(4 * (i + 1))
    raise RuntimeError(url)

picked, alts = json.load(open(sys.argv[1])), json.load(open(sys.argv[2]))
OUT.mkdir(parents=True, exist_ok=True)
data = {}
for k, c in picked.items():
    f = OUT / f'{k}.webp'
    if not f.exists():
        im = Image.open(io.BytesIO(get(c['url']))).convert('RGB')
        im.thumbnail((1600, 1600))
        im.save(f, 'WEBP', quality=78)
        time.sleep(1)
    artist = ARTIST.get(k) or re.sub(r'\s*\(talk\).*', '', c['artist']).strip()
    data[k] = {'alt': alts[k], 'artist': artist, 'license': c['license'].replace(' ch', ''), 'license_url': license_url(c['license']), 'page': c['page']}
    print(k, f.stat().st_size // 1024, 'KB', flush=True)

body = ',\n'.join(f"  '{k}': {json.dumps(v, ensure_ascii=False)}" for k, v in data.items())
(ROOT / 'src/data/article_photos.js').write_text('// コラムのサムネ写真のクレジット（scripts/thumbs/fetch_photos.py が生成）\nexport const articlePhotos = {\n' + body + ',\n};\n', encoding='utf-8')
