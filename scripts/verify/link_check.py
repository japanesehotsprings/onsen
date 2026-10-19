"""一休・楽天トラベルの予約リンク先の宿名と、掲載の宿名が合っているかを調べる
使い方: python3 scripts/verify/link_check.py <ikyu_results.jsonl> <rakuten_results.jsonl> <hotel_links.json>
"""
import json, re, sys, unicodedata

GENERIC = ['温泉郷', '温泉', '旅館', 'ホテル', 'の宿', '宿', '別館', '本館', '料理', '割烹', 'リゾート', 'hotel', 'ryokan', 'resort', '&', 'and']

def norm(s):
    s = unicodedata.normalize('NFKC', s or '').lower()
    s = re.sub(r'[\s・･\-‐ー〜~「」『』()（）【】\[\]〈〉<>、。,.!！?？/|:：]', '', s)
    s = s.replace('ヶ', 'ケ').replace('ゝ', '').replace('ゞ', '')
    return s

def core_parts(name):
    n = norm(name)
    for g in GENERIC:
        n = n.replace(g, ' ')
    return [p for p in n.split() if len(p) >= 2]

def matches(name, title):
    t = norm(title)
    parts = core_parts(name)
    if not parts:
        return norm(name) in t
    return any(p in t for p in parts)

links = {r['id']: r for r in json.load(open(sys.argv[3]))}
for label, path in [('一休', sys.argv[1]), ('楽天', sys.argv[2])]:
    bad = 0; total = 0
    for l in open(path):
        r = json.loads(l); total += 1
        name = links[r['id']]['name']
        title = (r.get('ldname') or '') + ' ' + (r.get('title') or '')
        if r.get('status') != 200 or not r.get('title'):
            print(f"{label} {r['id']} {name} → 取得不可 {r.get('status') or r.get('err')}"); bad += 1
        elif not matches(name, title):
            print(f"{label} {r['id']} {name} → 「{r.get('title')[:60]}」"); bad += 1
    print(f'--- {label}: 要確認 {bad} / {total}')
