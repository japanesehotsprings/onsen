/**
 * サムネイル用のイラスト部品（SVG文字列を返す）
 * - キャンバスは 1600×1000。ページ上部の横長表示では中央（y=280〜720）が切り出されるので、主役はそこに置く
 * - 文字は入れない（ページの見出しが画像の上に重なるため）
 */
export const W = 1600, H = 1000;

// 乱数（同じ seed なら毎回同じ絵になる）
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = n => Math.round(n * 10) / 10;

// defs（グラデーション・フィルタ）をまとめる入れ物
export function make_ctx(seed = 1) {
  const defs = [];
  let n = 0;
  return {
    rand: rng(seed),
    def(body) { const id = `d${n++}`; defs.push(body.replace('ID', id)); return id; },
    defs() { return defs.join('\n'); },
  };
}

export function lin(ctx, stops, x1 = 0, y1 = 0, x2 = 0, y2 = 1) {
  return ctx.def(`<linearGradient id="ID" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.map((c, i) => `<stop offset="${typeof c === 'object' ? c[1] : i / (stops.length - 1)}" stop-color="${typeof c === 'object' ? c[0] : c}"/>`).join('')}</linearGradient>`);
}
export function rad(ctx, stops, cx = 0.5, cy = 0.5, r = 0.5) {
  return ctx.def(`<radialGradient id="ID" cx="${cx}" cy="${cy}" r="${r}">${stops.map((c, i) => {
    const [col, op = 1] = Array.isArray(c) ? c : [c, 1];
    return `<stop offset="${i / (stops.length - 1)}" stop-color="${col}" stop-opacity="${op}"/>`;
  }).join('')}</radialGradient>`);
}
export function blur(ctx, sd) {
  return ctx.def(`<filter id="ID" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${sd}"/></filter>`);
}

// ── 背景 ─────────────────────────────
export function sky(ctx, colors) {
  return `<rect width="${W}" height="${H}" fill="url(#${lin(ctx, colors)})"/>`;
}

export function sun(ctx, x, y, r, color, glow = '#fff3c4') {
  const g = rad(ctx, [[glow, 0.55], [glow, 0]]);
  return `<circle cx="${x}" cy="${y}" r="${r * 3.2}" fill="url(#${g})"/><circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
}

// 山並み（なめらかな稜線）
export function ridge(ctx, { base, amp, color, color2, seed = 1, freq = 1, jag = 0, step = 16 }) {
  const r = rng(seed);
  const s = [r() * 10, r() * 10, r() * 10, r() * 10];
  let d = `M0 ${H} `;
  for (let x = 0; x <= W + step; x += step) {
    let y = base - amp * (0.5 * Math.sin(x * 0.0025 * freq + s[0]) + 0.3 * Math.sin(x * 0.0061 * freq + s[1]) + 0.2 * Math.sin(x * 0.013 * freq + s[2]));
    if (jag) y -= jag * Math.abs(Math.sin(x * 0.031 * freq + s[3])) * (0.6 + 0.4 * Math.sin(x * 0.07));
    d += `L${x} ${f(y)} `;
  }
  d += `L${W} ${H} Z`;
  const fill = color2 ? `url(#${lin(ctx, [color, color2])})` : color;
  return `<path d="${d}" fill="${fill}"/>`;
}

// 富士山のような独立峰
export function fuji(ctx, cx, base, w, h, color, snow = '#f4f7fb') {
  const top = base - h, tw = w * 0.07;
  const body = `M${cx - w / 2} ${base} C${cx - w * 0.28} ${base - h * 0.25} ${cx - w * 0.12} ${top + h * 0.1} ${cx - tw} ${top} L${cx + tw} ${top} C${cx + w * 0.12} ${top + h * 0.1} ${cx + w * 0.28} ${base - h * 0.25} ${cx + w / 2} ${base} Z`;
  const sl = h * 0.32;
  const snowp = `M${cx - tw} ${top} L${cx + tw} ${top} L${cx + w * 0.16} ${top + sl} L${cx + w * 0.1} ${top + sl * 0.82} L${cx + w * 0.06} ${top + sl * 1.02} L${cx} ${top + sl * 0.78} L${cx - w * 0.05} ${top + sl * 1.0} L${cx - w * 0.1} ${top + sl * 0.8} L${cx - w * 0.16} ${top + sl} Z`;
  return `<path d="${body}" fill="url(#${lin(ctx, [color, shade(color, -0.25)])})"/><path d="${snowp}" fill="${snow}"/>`;
}

// 火山（噴煙つき）
export function volcano(ctx, cx, base, w, h, color, smoke = true) {
  const top = base - h;
  let s = `<path d="M${cx - w / 2} ${base} Q${cx - w * 0.2} ${top + h * 0.2} ${cx - w * 0.09} ${top} L${cx + w * 0.09} ${top} Q${cx + w * 0.2} ${top + h * 0.2} ${cx + w / 2} ${base} Z" fill="url(#${lin(ctx, [shade(color, 0.1), shade(color, -0.3)])})"/>`;
  if (smoke) s += steam(ctx, { x: cx, y: top + 10, h: h * 0.9, n: 4, spread: 40, width: 46, opacity: 0.5, color: '#e9e4df', lean: 0.6 });
  return s;
}

// 水面（海・湖）と波の線
export function sea(ctx, y, c1, c2, { lines = 40, seed = 3, line = '#ffffff', y2 = H } = {}) {
  const r = rng(seed);
  let s = `<rect x="0" y="${y}" width="${W}" height="${y2 - y}" fill="url(#${lin(ctx, [c1, c2])})"/>`;
  for (let i = 0; i < lines; i++) {
    const yy = y + 8 + Math.pow(r(), 1.4) * (y2 - y - 10);
    const x = r() * W, len = 30 + r() * 120 * (0.5 + (yy - y) / (y2 - y));
    s += `<path d="M${f(x)} ${f(yy)} q${f(len / 2)} -6 ${f(len)} 0" stroke="${line}" stroke-opacity="${f(0.15 + r() * 0.25)}" stroke-width="${f(2 + (yy - y) / 120)}" fill="none" stroke-linecap="round"/>`;
  }
  return s;
}

// 湯けむり
export function steam(ctx, { x, y, h = 260, n = 5, spread = 120, width = 34, opacity = 0.42, color = '#ffffff', lean = 0, seed = 7 }) {
  const r = rng(seed + Math.round(x));
  const b = blur(ctx, width * 0.75);
  let s = `<g filter="url(#${b})" opacity="${opacity}">`;
  for (let i = 0; i < n; i++) {
    const x0 = x + (r() - 0.5) * spread, hh = h * (0.6 + r() * 0.5), w = width * (0.6 + r() * 0.8);
    const a = 30 + r() * 40, ph = r() * 6;
    let d = `M${f(x0)} ${y}`;
    for (let k = 1; k <= 6; k++) {
      const t = k / 6;
      d += ` L${f(x0 + Math.sin(t * 5 + ph) * a * t + lean * hh * t)} ${f(y - hh * t)}`;
    }
    s += `<path d="${d}" stroke="${color}" stroke-width="${f(w)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return s + '</g>';
}

// 霞・霧の帯
export function mist(ctx, y, { color = '#ffffff', opacity = 0.5, h = 70, n = 4, seed = 11 } = {}) {
  const r = rng(seed);
  const b = blur(ctx, 28);
  let s = `<g filter="url(#${b})" opacity="${opacity}">`;
  for (let i = 0; i < n; i++) s += `<ellipse cx="${f(r() * W)}" cy="${f(y + (r() - 0.5) * h)}" rx="${f(300 + r() * 400)}" ry="${f(h * (0.4 + r() * 0.5))}" fill="${color}"/>`;
  return s + '</g>';
}

// 金の霞（すやり霞）
export function gold_clouds(ctx, items, color = '#d9b45a', opacity = 0.85) {
  return items.map(([x, y, w, h = 38]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${color}" opacity="${opacity}"/>`).join('');
}

// ── 露天風呂 ─────────────────────────────
export function pool(ctx, { cx, cy, rx, ry, water = ['#bfe3e8', '#5aa6b3'], rock = '#5d5752', seed = 5, ripples = 3, rim = 1 }) {
  const r = rng(seed);
  const wg = rad(ctx, [water[0], water[1]], 0.45, 0.35, 0.75);
  let rocks = '';
  const base = Math.min(46, Math.max(14, ry * 0.42));
  const perim = Math.PI * (rx + ry);
  const count = Math.round(perim / (base * 1.9));
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + r() * 0.1;
    const px = cx + Math.cos(a) * (rx + base * 0.25) * rim, py = cy + Math.sin(a) * (ry + base * 0.2) * rim;
    const sz = base * (0.8 + r() * 0.55), front = Math.sin(a) > 0;
    const c = shade(rock, (r() - 0.5) * 0.25 + (front ? -0.05 : 0.08));
    rocks += `<ellipse cx="${f(px)}" cy="${f(py)}" rx="${f(sz * (front ? 1.3 : 1))}" ry="${f(sz * 0.62)}" fill="${c}"/>`;
    rocks += `<ellipse cx="${f(px - sz * 0.2)}" cy="${f(py - sz * 0.22)}" rx="${f(sz * 0.5)}" ry="${f(sz * 0.18)}" fill="#ffffff" opacity="0.13"/>`;
  }
  let rip = '';
  for (let i = 0; i < ripples; i++) {
    const k = 0.35 + i * 0.2;
    rip += `<ellipse cx="${f(cx + (r() - 0.5) * rx * 0.3)}" cy="${f(cy + (r() - 0.5) * ry * 0.3)}" rx="${f(rx * k)}" ry="${f(ry * k)}" fill="none" stroke="#ffffff" stroke-opacity="0.22" stroke-width="3"/>`;
  }
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${wg})"/>${rip}
    <ellipse cx="${cx - rx * 0.25}" cy="${cy - ry * 0.35}" rx="${rx * 0.35}" ry="${ry * 0.08}" fill="#ffffff" opacity="0.25"/>${rocks}`;
}

// 木の湯船（四角）
export function wood_tub(ctx, { x, y, w, h, depth = 60, wood = '#c9965e', water = ['#d8f0f0', '#86c3c9'] }) {
  const wg = lin(ctx, [water[0], water[1]]);
  let planks = '';
  for (let i = 1; i < 8; i++) planks += `<line x1="${x + (w / 8) * i}" y1="${y + depth * 0.25}" x2="${x + (w / 8) * i}" y2="${y + h}" stroke="${shade(wood, -0.25)}" stroke-width="3"/>`;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${wood}"/>${planks}
    <rect x="${x - 14}" y="${y - 14}" width="${w + 28}" height="${depth * 0.4}" fill="${shade(wood, 0.12)}"/>
    <rect x="${x + 4}" y="${y - 6}" width="${w - 8}" height="${depth * 0.22}" fill="url(#${wg})"/>
    <rect x="${x}" y="${y + h - 10}" width="${w}" height="10" fill="${shade(wood, -0.3)}"/>`;
}

// ── 建物・道具 ─────────────────────────────
// 旅館（階数・窓の灯り）
export function inn(ctx, { x, y, w, floors = 3, fh = 70, wall = '#e9dcc4', wood = '#5b3b28', roof = '#3d3a3f', lit = '#ffcf73', snow = false, seed = 2 }) {
  const r = rng(seed);
  let s = '';
  for (let i = 0; i < floors; i++) {
    const fy = y - (i + 1) * fh, inset = i * 10;
    s += `<rect x="${x + inset}" y="${fy}" width="${w - inset * 2}" height="${fh}" fill="${wall}"/>`;
    const nwin = Math.max(3, Math.round((w - inset * 2) / 70));
    const ww = (w - inset * 2) / nwin;
    for (let k = 0; k < nwin; k++) {
      const on = r() > 0.3;
      s += `<rect x="${f(x + inset + k * ww + ww * 0.15)}" y="${fy + fh * 0.2}" width="${f(ww * 0.7)}" height="${fh * 0.52}" fill="${on ? lit : shade(wall, -0.35)}"/>`;
      s += `<line x1="${f(x + inset + k * ww + ww * 0.5)}" y1="${fy + fh * 0.2}" x2="${f(x + inset + k * ww + ww * 0.5)}" y2="${fy + fh * 0.72}" stroke="${wood}" stroke-width="3"/>`;
    }
    s += `<rect x="${x + inset}" y="${fy}" width="${w - inset * 2}" height="${fh}" fill="none" stroke="${wood}" stroke-width="6"/>`;
    // 庇
    s += `<polygon points="${x + inset - 26},${fy + 8} ${x + w - inset + 26},${fy + 8} ${x + w - inset + 6},${fy - 12} ${x + inset - 6},${fy - 12}" fill="${roof}"/>`;
    if (snow) s += `<rect x="${x + inset - 20}" y="${fy - 20}" width="${w - inset * 2 + 40}" height="12" rx="6" fill="#f6f8fb"/>`;
  }
  const ty = y - floors * fh - 12, tin = (floors - 1) * 10;
  s += `<polygon points="${x + tin - 40},${ty} ${x + w - tin + 40},${ty} ${x + w / 2 + 40},${ty - 70} ${x + w / 2 - 40},${ty - 70}" fill="${roof}"/>`;
  if (snow) s += `<path d="M${x + tin - 40} ${ty - 2} L${x + w / 2 - 40} ${ty - 72} L${x + w / 2 + 40} ${ty - 72} L${x + w - tin + 40} ${ty - 2} L${x + w - tin + 20} ${ty - 14} L${x + w / 2 + 30} ${ty - 62} L${x + w / 2 - 30} ${ty - 62} L${x + tin - 20} ${ty - 14} Z" fill="#f6f8fb"/>`;
  return s;
}

// 茅葺きの宿
export function thatched(ctx, { x, y, w, h, snow = true }) {
  const roofh = h * 0.95;
  return `<rect x="${x + w * 0.1}" y="${y - h * 0.45}" width="${w * 0.8}" height="${h * 0.45}" fill="#6b4a33"/>
    <rect x="${x + w * 0.2}" y="${y - h * 0.38}" width="${w * 0.18}" height="${h * 0.24}" fill="#ffcf73"/>
    <rect x="${x + w * 0.6}" y="${y - h * 0.38}" width="${w * 0.18}" height="${h * 0.24}" fill="#ffcf73"/>
    <polygon points="${x - w * 0.05},${y - h * 0.42} ${x + w * 1.05},${y - h * 0.42} ${x + w * 0.62},${y - h * 0.42 - roofh} ${x + w * 0.38},${y - h * 0.42 - roofh}" fill="#8a6a3e"/>
    ${snow ? `<polygon points="${x - w * 0.02},${y - h * 0.48} ${x + w * 1.02},${y - h * 0.48} ${x + w * 0.6},${y - h * 0.42 - roofh - 6} ${x + w * 0.4},${y - h * 0.42 - roofh - 6}" fill="#f4f7fb"/>` : ''}`;
}

// 湯屋（暖簾つきの入口）
export function bathhouse(ctx, { x, y, w, h, wall = '#efe3cc', wood = '#4e3423', roof = '#2f3238', noren = '#2c4a7a', mark = '#ffffff' }) {
  const nw = w * 0.5, nx = x + (w - nw) / 2, ny = y - h * 0.62;
  let panels = '';
  for (let i = 0; i < 2; i++) panels += `<rect x="${nx + i * (nw / 2) + 3}" y="${ny}" width="${nw / 2 - 6}" height="${h * 0.32}" fill="${noren}"/>`;
  return `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="${wall}"/>
    <rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="none" stroke="${wood}" stroke-width="10"/>
    <rect x="${nx - 10}" y="${y - h * 0.65}" width="${nw + 20}" height="${h * 0.65}" fill="#2a1d15"/>
    <rect x="${nx - 12}" y="${ny - 10}" width="${nw + 24}" height="12" fill="${wood}"/>
    ${panels}
    ${onsen_mark(nx + nw / 2, ny + h * 0.17, h * 0.2, mark)}
    <polygon points="${x - 70},${y - h + 10} ${x + w + 70},${y - h + 10} ${x + w - 30},${y - h - h * 0.45} ${x + 30},${y - h - h * 0.45}" fill="${roof}"/>
    <rect x="${x - 70}" y="${y - h + 4}" width="${w + 140}" height="14" fill="${shade(roof, -0.3)}"/>`;
}

// 温泉マーク（♨）を線で描く
export function onsen_mark(cx, cy, s, color) {
  const bowl = `<path d="M${cx - s * 0.75} ${cy + s * 0.05} Q${cx} ${cy + s * 0.75} ${cx + s * 0.75} ${cy + s * 0.05}" stroke="${color}" stroke-width="${s * 0.13}" fill="none" stroke-linecap="round"/>`;
  let waves = '';
  for (const dx of [-0.38, 0, 0.38]) {
    const x0 = cx + dx * s;
    waves += `<path d="M${x0} ${cy + s * 0.1} c${s * 0.18} ${-s * 0.15} ${-s * 0.18} ${-s * 0.3} 0 ${-s * 0.45} c${s * 0.18} ${-s * 0.15} ${-s * 0.18} ${-s * 0.3} 0 ${-s * 0.45}" stroke="${color}" stroke-width="${s * 0.11}" fill="none" stroke-linecap="round"/>`;
  }
  return bowl + waves;
}

export function yuoke(ctx, x, y, s, color = '#d6a46a', band = '#6d6a6a') {
  return `<path d="M${x - s * 0.5} ${y - s * 0.6} L${x + s * 0.5} ${y - s * 0.6} L${x + s * 0.42} ${y} L${x - s * 0.42} ${y} Z" fill="${color}"/>
    <ellipse cx="${x}" cy="${y - s * 0.6}" rx="${s * 0.5}" ry="${s * 0.12}" fill="${shade(color, -0.3)}"/>
    <rect x="${x - s * 0.48}" y="${y - s * 0.46}" width="${s * 0.96}" height="${s * 0.07}" fill="${band}"/>
    <rect x="${x - s * 0.44}" y="${y - s * 0.16}" width="${s * 0.88}" height="${s * 0.07}" fill="${band}"/>
    <ellipse cx="${x}" cy="${y}" rx="${s * 0.42}" ry="${s * 0.08}" fill="${shade(color, -0.2)}"/>`;
}

export function towel(x, y, w, h, color = '#ffffff', stripe = '#3b6ea5') {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${color}"/>
    <rect x="${x}" y="${y + h * 0.18}" width="${w}" height="${h * 0.08}" fill="${stripe}"/>
    <rect x="${x}" y="${y + h * 0.74}" width="${w}" height="${h * 0.08}" fill="${stripe}"/>
    <rect x="${x}" y="${y + h * 0.45}" width="${w}" height="3" fill="#000000" opacity="0.08"/>`;
}

export function stone_lantern(ctx, x, y, s, snow = false, glow = true) {
  const st = '#8b8680', dk = '#6f6a65';
  let g = '';
  if (glow) { const gg = rad(ctx, [['#ffd27a', 0.7], ['#ffd27a', 0]]); g = `<circle cx="${x}" cy="${y - s * 1.55}" r="${s * 0.9}" fill="url(#${gg})"/>`; }
  return `${g}<rect x="${x - s * 0.45}" y="${y - s * 0.18}" width="${s * 0.9}" height="${s * 0.18}" fill="${dk}"/>
    <rect x="${x - s * 0.13}" y="${y - s * 1.2}" width="${s * 0.26}" height="${s * 1.02}" fill="${st}"/>
    <rect x="${x - s * 0.4}" y="${y - s * 1.32}" width="${s * 0.8}" height="${s * 0.14}" fill="${dk}"/>
    <rect x="${x - s * 0.3}" y="${y - s * 1.78}" width="${s * 0.6}" height="${s * 0.46}" fill="${st}"/>
    <rect x="${x - s * 0.14}" y="${y - s * 1.7}" width="${s * 0.28}" height="${s * 0.3}" fill="${glow ? '#ffd27a' : '#4b4743'}"/>
    <polygon points="${x - s * 0.62},${y - s * 1.78} ${x + s * 0.62},${y - s * 1.78} ${x + s * 0.2},${y - s * 2.12} ${x - s * 0.2},${y - s * 2.12}" fill="${dk}"/>
    <circle cx="${x}" cy="${y - s * 2.2}" r="${s * 0.1}" fill="${dk}"/>
    ${snow ? `<path d="M${x - s * 0.66} ${y - s * 1.8} Q${x} ${y - s * 2.45} ${x + s * 0.66} ${y - s * 1.8} Z" fill="#f6f8fb"/>` : ''}`;
}

export function chochin(ctx, x, y, s, color = '#c8402e') {
  const gg = rad(ctx, [['#ffb85c', 0.55], ['#ffb85c', 0]]);
  let ribs = '';
  for (let i = 1; i < 6; i++) ribs += `<path d="M${x - s * 0.5 * Math.sin((i / 6) * Math.PI)} ${y - s * 0.6 + (i / 6) * s * 1.2} L${x + s * 0.5 * Math.sin((i / 6) * Math.PI)} ${y - s * 0.6 + (i / 6) * s * 1.2}" stroke="#000" stroke-opacity="0.18" stroke-width="2"/>`;
  return `<circle cx="${x}" cy="${y}" r="${s * 1.4}" fill="url(#${gg})"/>
    <line x1="${x}" y1="${y - s * 1.1}" x2="${x}" y2="${y - s * 0.7}" stroke="#2b2b2b" stroke-width="3"/>
    <ellipse cx="${x}" cy="${y}" rx="${s * 0.5}" ry="${s * 0.62}" fill="${color}"/>${ribs}
    <rect x="${x - s * 0.3}" y="${y - s * 0.7}" width="${s * 0.6}" height="${s * 0.1}" fill="#2b2b2b"/>
    <rect x="${x - s * 0.3}" y="${y + s * 0.6}" width="${s * 0.6}" height="${s * 0.1}" fill="#2b2b2b"/>`;
}

export function gas_lamp(ctx, x, y, h) {
  const gg = rad(ctx, [['#ffd98a', 0.75], ['#ffd98a', 0]]);
  return `<circle cx="${x}" cy="${y - h}" r="${h * 0.32}" fill="url(#${gg})"/>
    <rect x="${x - 4}" y="${y - h}" width="8" height="${h}" fill="#2c2c2c"/>
    <rect x="${x - h * 0.08}" y="${y - h - h * 0.14}" width="${h * 0.16}" height="${h * 0.18}" fill="#ffe2a0" stroke="#2c2c2c" stroke-width="4"/>
    <polygon points="${x - h * 0.11},${y - h - h * 0.14} ${x + h * 0.11},${y - h - h * 0.14} ${x},${y - h - h * 0.24}" fill="#2c2c2c"/>`;
}

export function torii(x, y, s, color = '#c63a2b') {
  return `<rect x="${x - s * 0.42}" y="${y - s}" width="${s * 0.09}" height="${s}" fill="${color}"/>
    <rect x="${x + s * 0.33}" y="${y - s}" width="${s * 0.09}" height="${s}" fill="${color}"/>
    <rect x="${x - s * 0.5}" y="${y - s * 0.78}" width="${s}" height="${s * 0.07}" fill="${color}"/>
    <path d="M${x - s * 0.66} ${y - s * 0.98} Q${x} ${y - s * 0.9} ${x + s * 0.66} ${y - s * 0.98} L${x + s * 0.62} ${y - s * 1.08} Q${x} ${y - s * 1.0} ${x - s * 0.62} ${y - s * 1.08} Z" fill="#2b2b2b"/>
    <rect x="${x - s * 0.58}" y="${y - s * 0.99}" width="${s * 1.16}" height="${s * 0.08}" fill="${color}"/>`;
}

export function pagoda(x, y, s, color = '#3b2e2a') {
  let p = `<rect x="${x - 3}" y="${y - s * 1.9}" width="6" height="${s * 0.4}" fill="${color}"/>`;
  for (let i = 0; i < 5; i++) {
    const ty = y - i * s * 0.3, w = s * (0.62 - i * 0.07);
    p += `<rect x="${x - w * 0.55}" y="${ty - s * 0.22}" width="${w * 1.1}" height="${s * 0.22}" fill="${shade(color, 0.15)}"/>`;
    p += `<polygon points="${x - w},${ty - s * 0.2} ${x + w},${ty - s * 0.2} ${x + w * 0.62},${ty - s * 0.32} ${x - w * 0.62},${ty - s * 0.32}" fill="${color}"/>`;
  }
  return p;
}

// 杉の木立
export function cedars(ctx, { y, from = 0, to = W, gap = 46, h = 160, color = '#2f4a3a', seed = 9, snow = false }) {
  const r = rng(seed);
  let s = '';
  for (let x = from; x < to; x += gap * (0.6 + r() * 0.8)) {
    const hh = h * (0.7 + r() * 0.6), w = hh * 0.32;
    const c = shade(color, (r() - 0.5) * 0.2);
    s += `<polygon points="${f(x)},${f(y - hh)} ${f(x + w / 2)},${y} ${f(x - w / 2)},${y}" fill="${c}"/>`;
    if (snow) s += `<polygon points="${f(x)},${f(y - hh)} ${f(x + w * 0.18)},${f(y - hh * 0.6)} ${f(x - w * 0.18)},${f(y - hh * 0.6)}" fill="#f2f6fa"/>`;
  }
  return s;
}

// 丸い葉の木（紅葉・桜・新緑）
export function blob_tree(ctx, x, y, s, colors, seed = 4) {
  const r = rng(seed + Math.round(x));
  let t = `<path d="M${x} ${y} Q${x - s * 0.05} ${y - s * 0.5} ${x - s * 0.02} ${y - s * 0.8}" stroke="#4a3426" stroke-width="${s * 0.08}" fill="none"/>`;
  for (let i = 0; i < 16; i++) {
    const a = r() * Math.PI * 2, d = r() * s * 0.45;
    t += `<circle cx="${f(x + Math.cos(a) * d * 1.3)}" cy="${f(y - s * 0.95 + Math.sin(a) * d * 0.8)}" r="${f(s * (0.16 + r() * 0.14))}" fill="${colors[Math.floor(r() * colors.length)]}"/>`;
  }
  return t;
}

// 松
export function pine(ctx, x, y, s, color = '#2e4a3a') {
  return `<path d="M${x} ${y} C${x + s * 0.2} ${y - s * 0.4} ${x - s * 0.3} ${y - s * 0.6} ${x + s * 0.1} ${y - s}" stroke="#4a3426" stroke-width="${s * 0.07}" fill="none"/>
    <ellipse cx="${x + s * 0.1}" cy="${y - s}" rx="${s * 0.42}" ry="${s * 0.12}" fill="${color}"/>
    <ellipse cx="${x - s * 0.25}" cy="${y - s * 0.72}" rx="${s * 0.34}" ry="${s * 0.1}" fill="${shade(color, 0.08)}"/>
    <ellipse cx="${x + s * 0.32}" cy="${y - s * 0.55}" rx="${s * 0.3}" ry="${s * 0.09}" fill="${color}"/>`;
}

// 柳
export function willow(ctx, x, y, s, color = '#7fa35a') {
  let l = `<path d="M${x} ${y} Q${x - s * 0.06} ${y - s * 0.5} ${x} ${y - s}" stroke="#4a3a2a" stroke-width="${s * 0.06}" fill="none"/>`;
  for (let i = -6; i <= 6; i++) {
    const sx = x + i * s * 0.06;
    l += `<path d="M${sx} ${y - s} Q${sx + i * s * 0.05} ${y - s * 0.7} ${sx + i * s * 0.07} ${y - s * 0.3}" stroke="${shade(color, (i % 3) * 0.06)}" stroke-width="${s * 0.025}" fill="none" stroke-linecap="round"/>`;
  }
  return l;
}

// 降る雪・舞う花びら
export function flakes(ctx, { n = 80, color = '#ffffff', r1 = 3, r2 = 8, seed = 13, y1 = 0, y2 = H, opacity = 0.85 }) {
  const r = rng(seed);
  let s = '';
  for (let i = 0; i < n; i++) s += `<circle cx="${f(r() * W)}" cy="${f(y1 + r() * (y2 - y1))}" r="${f(r1 + r() * (r2 - r1))}" fill="${color}" opacity="${f(opacity * (0.5 + r() * 0.5))}"/>`;
  return s;
}
export function petals(ctx, { n = 30, colors = ['#f6c1cf', '#f2a7bb'], seed = 17, y1 = 0, y2 = H, s1 = 8, s2 = 16 }) {
  const r = rng(seed);
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = r() * W, y = y1 + r() * (y2 - y1), sz = s1 + r() * (s2 - s1);
    s += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(sz)}" ry="${f(sz * 0.55)}" transform="rotate(${f(r() * 180)} ${f(x)} ${f(y)})" fill="${colors[i % colors.length]}"/>`;
  }
  return s;
}

// 紙の質感と周辺減光（最後に重ねる）
export function finish(ctx, { grain = 0.07, vignette = 0.28 } = {}) {
  const tex = ctx.def(`<filter id="ID"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0.3  0 0 0 0 0.25  0 0 0 0 0.2  0 0 0 ${grain} 0"/></filter>`);
  const vg = rad(ctx, [['#000000', 0], ['#000000', 0], ['#000000', vignette]], 0.5, 0.5, 0.75);
  return `<rect width="${W}" height="${H}" filter="url(#${tex})"/><rect width="${W}" height="${H}" fill="url(#${vg})"/>`;
}

// 色を明るく(+)・暗く(-)する
export function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = amt < 0 ? 0 : 255, p = Math.abs(amt);
  r = Math.round((t - r) * p + r); g = Math.round((t - g) * p + g); b = Math.round((t - b) * p + b);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function svg(ctx, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${ctx.defs()}</defs>${body}</svg>`;
}

// 丸い木の湯船（湯の色をはっきり見せたいとき）
export function round_tub(ctx, { cx, cy, rx, ry, water = ['#e6f4f4', '#8cc6c8'], wood = '#b7844f' }) {
  const wg = rad(ctx, [water[0], water[1]], 0.45, 0.4, 0.7);
  return `<ellipse cx="${cx}" cy="${cy + ry * 0.35}" rx="${rx * 1.04}" ry="${ry * 1.05}" fill="${shade(wood, -0.3)}"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${rx * 1.08}" ry="${ry * 1.08}" fill="${wood}"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${wg})"/>
    <ellipse cx="${cx - rx * 0.2}" cy="${cy - ry * 0.35}" rx="${rx * 0.4}" ry="${ry * 0.12}" fill="#ffffff" opacity="0.3"/>`;
}
