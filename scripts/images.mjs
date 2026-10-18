/**
 * dist/ の PNG 画像を WebP（最大幅1600px）に変換し、HTML/JS/CSS の参照を書き換える
 * - 元のPNG（public/）はそのまま残す。変換結果は .cache/webp/ に保存し、次回は変わった画像だけ変換する
 * - ogp.png / favicon は SNS 側の互換性のため PNG のまま残す
 */
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, unlinkSync } from 'fs';
import { resolve, dirname, relative, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');
const cache = resolve(root, '.cache/webp');
const KEEP_PNG = new Set(['ogp.png']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(dist);
const pngs = files.filter(f => f.endsWith('.png') && !KEEP_PNG.has(relative(dist, f)));

// 変換（同時に8枚ずつ）
let converted = 0, cached = 0, before = 0, after = 0;
const queue = [...pngs];
async function worker() {
  while (queue.length) {
    const src = queue.shift();
    const rel = relative(dist, src);
    const cache_file = resolve(cache, rel.replace(/\.png$/, '.webp'));
    const src_stat = statSync(src);
    before += src_stat.size;
    // vite のコピーで dist 側の更新日時は毎回変わるので、元の public/ の更新日時で判定する
    const orig = resolve(root, 'public', rel);
    const orig_mtime = existsSync(orig) ? statSync(orig).mtimeMs : src_stat.mtimeMs;
    if (!existsSync(cache_file) || statSync(cache_file).mtimeMs < orig_mtime) {
      mkdirSync(dirname(cache_file), { recursive: true });
      await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(cache_file);
      converted++;
    } else {
      cached++;
    }
    const out = src.replace(/\.png$/, '.webp');
    copyFileSync(cache_file, out);
    after += statSync(out).size;
    unlinkSync(src);
  }
}
await Promise.all(Array.from({ length: 8 }, worker));

// 参照の書き換え（"./onsen/x.png" "/onsen/x.png" "onsen/x.png" のどれでも当たるように相対パスで置換）
const rels = pngs.map(f => relative(dist, f));
const rel_set = new Set(rels);
const text_files = walk(dist).filter(f => /\.(html|js|css)$/.test(f));
let rewritten = 0;
for (const f of text_files) {
  const s = readFileSync(f, 'utf-8');
  const t = s.replace(/(?<=["'(\/=\s])((?:[\w\-.%　-鿿]+\/)*[\w\-.%　-鿿]+)\.png(?=["')\s?#])/g, (m, p) => {
    // 絶対URL（https://ドメイン/onsen/x.png）にも当たるよう、先頭の階層を1つずつ外して照合する
    const segs = p.replace(/^\.\//, '').split('/');
    for (let i = 0; i < segs.length; i++) {
      const key = segs.slice(i).join('/');
      if (rel_set.has(key + '.png') || rel_set.has(decodeURIComponent(key) + '.png')) return `${p}.webp`;
    }
    return m;
  });
  if (t !== s) { writeFileSync(f, t, 'utf-8'); rewritten++; }
}

const mb = n => (n / 1024 / 1024).toFixed(0) + 'MB';
console.log(`✓ 画像 ${pngs.length} 枚を WebP に（新規変換 ${converted}・キャッシュ ${cached}）${mb(before)} → ${mb(after)}、参照を書き換えたファイル ${rewritten}`);
