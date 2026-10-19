/**
 * サムネイルの絵（1件1関数）。キーは public/thumbs/<キー>.png のファイル名になる
 * 記事・特集の内容に合うモチーフを選び、ほかの絵と被らないようにする
 */
import * as P from './parts.mjs';
const { W, H } = P;

export const scenes = {
  // 妊娠中の温泉：朝の貸切風呂。檜の湯船と湯桶・たたんだ手ぬぐい、やわらかい色
  'ninshinchu-onsen': ctx => [
    P.sky(ctx, ['#f8d9cf', '#fbeee2', '#f3e6d6']),
    P.sun(ctx, 1180, 300, 70, '#fff6e6', '#ffe9d6'),
    P.ridge(ctx, { base: 520, amp: 90, color: '#e3c4bd', seed: 3 }),
    P.ridge(ctx, { base: 590, amp: 60, color: '#cfa9a6', seed: 8 }),
    // 縁側の床と柱
    `<rect x="0" y="640" width="${W}" height="${H - 640}" fill="#b98a5e"/>`,
    ...[0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="0" y1="${660 + i * 50}" x2="${W}" y2="${660 + i * 50}" stroke="#9c7149" stroke-width="3"/>`),
    `<rect x="120" y="0" width="34" height="660" fill="#8a5f3c"/><rect x="1446" y="0" width="34" height="660" fill="#8a5f3c"/><rect x="0" y="0" width="${W}" height="40" fill="#7a5233"/>`,
    P.wood_tub(ctx, { x: 470, y: 520, w: 620, h: 250, wood: '#d9ab73', water: ['#eef8f6', '#a9d6d4'] }),
    P.steam(ctx, { x: 780, y: 520, h: 320, n: 6, spread: 420, width: 40, opacity: 0.5 }),
    P.yuoke(ctx, 1220, 800, 130, '#e0b47c'),
    P.towel(1300, 720, 170, 70, '#ffffff', '#e8a3a3'),
    P.blob_tree(ctx, 300, 640, 220, ['#f4b9c6', '#f7cdd6', '#eea7b8'], 2),
    P.petals(ctx, { n: 18, y1: 300, y2: 700, seed: 5 }),
  ].join(''),

  // 入湯税：湯屋の入口と、150円分の硬貨（100円・50円）
  'nyutozei-guide': ctx => [
    P.sky(ctx, ['#2d3a5c', '#6b5a7a', '#d9926b']),
    P.ridge(ctx, { base: 560, amp: 110, color: '#3e3c55', seed: 21 }),
    P.ridge(ctx, { base: 620, amp: 50, color: '#2c2b3d', seed: 4 }),
    `<rect x="0" y="700" width="${W}" height="${H - 700}" fill="#5a4636"/>`,
    ...Array.from({ length: 12 }, (_, i) => `<rect x="${i * 140}" y="${700 + (i % 2) * 6}" width="130" height="${H - 700}" fill="#64503e" opacity="0.6"/>`),
    P.bathhouse(ctx, { x: 520, y: 700, w: 560, h: 330, noren: '#27406b' }),
    P.steam(ctx, { x: 800, y: 300, h: 220, n: 4, spread: 300, opacity: 0.35 }),
    P.chochin(ctx, 450, 470, 60), P.chochin(ctx, 1150, 470, 60),
    // 硬貨
    coin(ctx, 1270, 820, 92, '#d5d7da', '#a7abb0', false),
    coin(ctx, 1430, 860, 70, '#d9dbde', '#a7abb0', true),
    coin(ctx, 1360, 760, 92, '#e2e4e7', '#b2b6bb', false),
  ].join(''),

  // 国民保養温泉地とは：ブナの森に囲まれた湯治の宿（木造の大きな宿と湯けむり）
  'kokumin-hoyo-onsenchi-guide': ctx => [
    P.sky(ctx, ['#a9d3cf', '#dceee6']),
    P.ridge(ctx, { base: 420, amp: 120, color: '#7fae94', seed: 31 }),
    P.ridge(ctx, { base: 520, amp: 80, color: '#5e927a', seed: 12 }),
    P.mist(ctx, 520, { opacity: 0.55 }),
    P.cedars(ctx, { y: 700, h: 230, color: '#3f6b55', seed: 3 }),
    P.inn(ctx, { x: 540, y: 760, w: 520, floors: 3, fh: 80, wall: '#d8c3a0', wood: '#4a3020', roof: '#3a3a36', seed: 5 }),
    P.steam(ctx, { x: 1180, y: 740, h: 300, n: 5, spread: 160, opacity: 0.5 }),
    `<rect x="0" y="740" width="${W}" height="${H - 740}" fill="#4f7a5e"/>`,
    P.pool(ctx, { cx: 1180, cy: 830, rx: 220, ry: 60, water: ['#f2f2ea', '#bcd6cc'], rock: '#5f5a54', seed: 2 }),
    P.cedars(ctx, { y: 1000, from: -40, to: 420, h: 300, color: '#2e5240', seed: 8 }),
    P.cedars(ctx, { y: 1000, from: 1450, to: 1700, h: 300, color: '#2e5240', seed: 9 }),
  ].join(''),

  // 飲泉：竹の湯口から注ぐ源泉と石の水盤、湯呑み
  'insen-guide': ctx => [
    P.sky(ctx, ['#cfe3d6', '#eef3e8']),
    // 石垣
    stone_wall(ctx, 0, 0, W, 760),
    P.blob_tree(ctx, 220, 560, 360, ['#7fae6e', '#95c07f', '#6a9a5c'], 3),
    P.blob_tree(ctx, 1420, 560, 340, ['#7fae6e', '#95c07f', '#6a9a5c'], 7),
    `<rect x="0" y="760" width="${W}" height="${H - 760}" fill="#9a9184"/>`,
    // 水盤
    `<rect x="520" y="560" width="560" height="230" rx="40" fill="#8f8a83"/><ellipse cx="800" cy="575" rx="270" ry="44" fill="#6d6964"/><ellipse cx="800" cy="580" rx="248" ry="34" fill="url(#${P.lin(ctx, ['#e4f1ef', '#9ccbc7'])})"/>`,
    // 竹の湯口
    `<rect x="560" y="330" width="44" height="240" fill="#6f8f45"/><rect x="560" y="400" width="44" height="8" fill="#56722f"/><rect x="560" y="480" width="44" height="8" fill="#56722f"/>`,
    `<g transform="rotate(14 600 345)"><rect x="590" y="330" width="300" height="36" rx="16" fill="#7d9d50"/><rect x="700" y="330" width="8" height="36" fill="#5f7a35"/><ellipse cx="888" cy="348" rx="12" ry="18" fill="#3d4f24"/></g>`,
    `<path d="M878 420 C 880 480 872 520 868 572" stroke="#e8f6f7" stroke-width="16" fill="none" stroke-linecap="round" opacity="0.9"/>`,
    `<ellipse cx="868" cy="578" rx="40" ry="8" fill="#ffffff" opacity="0.6"/>`,
    P.steam(ctx, { x: 820, y: 560, h: 200, n: 4, spread: 260, opacity: 0.35 }),
    // 湯呑み
    `<path d="M1130 660 L1290 660 L1272 820 Q1210 840 1148 820 Z" fill="#e9e1d2"/><ellipse cx="1210" cy="660" rx="80" ry="18" fill="#9cc7c4"/><path d="M1140 760 L1280 760" stroke="#3d6c8f" stroke-width="14"/>`,
  ].join(''),

  // 日本三古湯：古文書の巻物に描かれた三つの湯と金の霞
  'nihon-sankoto': ctx => [
    P.sky(ctx, ['#1f2a44', '#2d3a5a']),
    P.gold_clouds(ctx, [[60, 120, 520], [980, 90, 560], [140, 860, 640], [1000, 880, 520]]),
    // 巻物
    `<rect x="170" y="230" width="1260" height="560" fill="#efe3c3"/>`,
    `<rect x="140" y="210" width="40" height="600" rx="16" fill="#7a4a2a"/><rect x="1420" y="210" width="40" height="600" rx="16" fill="#7a4a2a"/>`,
    scroll_landscape(ctx),
  ].join(''),

  // 泉質10種類：色の違う10の小さな湯をならべる
  'onsen-sensitsu-10-types': ctx => {
    const waters = [
      ['#eef6f7', '#bcdde3'], ['#f3efe3', '#d8c9a3'], ['#e9f3f8', '#9fc9df'], ['#eef0e6', '#c3c9a5'], ['#dff2ef', '#8fc9bf'],
      ['#e7b48a', '#a7542d'], ['#e8f1d6', '#a9c978'], ['#d6c39b', '#8a6d3c'], ['#f4f6f2', '#d7dccd'], ['#e3ecf5', '#a8bfd8'],
    ];
    const parts = [P.sky(ctx, ['#e9e2d4', '#ddd3c1']), `<rect x="0" y="0" width="${W}" height="${H}" fill="#cfc4ae" opacity="0.35"/>`];
    waters.forEach((w, i) => {
      const col = i % 5, row = Math.floor(i / 5);
      const cx = 240 + col * 280, cy = 370 + row * 270;
      parts.push(P.round_tub(ctx, { cx, cy, rx: 112, ry: 70, water: w, wood: i % 2 ? '#b98652' : '#c4935e' }));
      parts.push(P.steam(ctx, { x: cx, y: cy - 30, h: 150, n: 2, spread: 70, width: 26, opacity: 0.3, color: '#ffffff' }));
    });
    return parts.join('');
  },
  // タトゥーと温泉：夜の貸切風呂（戸と鍵札・行灯）
  'tattoo-onsen-guide': ctx => [
    P.sky(ctx, ['#14263a', '#24405a']),
    `<rect x="0" y="0" width="${W}" height="${H}" fill="#2a3a4a"/>`,
    // 板塀
    ...Array.from({ length: 20 }, (_, i) => `<rect x="${i * 82}" y="120" width="76" height="560" fill="${i % 2 ? '#3b3228' : '#40362b'}"/>`),
    `<rect x="0" y="100" width="${W}" height="30" fill="#2a231c"/>`,
    // 貸切の戸
    `<rect x="1160" y="200" width="300" height="480" fill="#c9b48e"/>`,
    ...[0, 1, 2, 3, 4, 5].map(i => `<line x1="1160" y1="${240 + i * 75}" x2="1460" y2="${240 + i * 75}" stroke="#7a6446" stroke-width="5"/>`),
    `<line x1="1310" y1="200" x2="1310" y2="680" stroke="#7a6446" stroke-width="6"/><rect x="1160" y="200" width="300" height="480" fill="none" stroke="#5a4630" stroke-width="12"/>`,
    `<line x1="1250" y1="300" x2="1250" y2="340" stroke="#d8b25a" stroke-width="4"/><rect x="1225" y="340" width="50" height="90" rx="8" fill="#a86b3a"/><circle cx="1250" cy="356" r="7" fill="#3a2a1a"/>`,
    `<rect x="0" y="680" width="${W}" height="${H - 680}" fill="#4a4540"/>`,
    P.pool(ctx, { cx: 620, cy: 760, rx: 430, ry: 130, water: ['#cfe7ea', '#4d8f9b'], rock: '#3f3b38', seed: 6 }),
    P.steam(ctx, { x: 620, y: 700, h: 360, n: 6, spread: 500, width: 50, opacity: 0.35 }),
    andon(ctx, 160, 700, 110),
    P.yuoke(ctx, 1120, 840, 120, '#c99a62'),
  ].join(''),

  // 子連れ温泉：明るい昼の露天、湯桶とアヒル
  'kids-onsen-guide': ctx => [
    P.sky(ctx, ['#8ccbe8', '#d9f0f7']),
    P.sun(ctx, 260, 200, 70, '#fff5c8'),
    P.ridge(ctx, { base: 470, amp: 90, color: '#8fc48d', seed: 14 }),
    P.ridge(ctx, { base: 560, amp: 50, color: '#6fae74', seed: 15 }),
    P.blob_tree(ctx, 1400, 600, 320, ['#7cbf6a', '#94d07f', '#68aa5a'], 1),
    `<rect x="0" y="600" width="${W}" height="${H - 600}" fill="#c9b99c"/>`,
    P.pool(ctx, { cx: 760, cy: 770, rx: 560, ry: 150, water: ['#e3f6fa', '#6fc0d2'], rock: '#7c766e', seed: 9 }),
    duck(780, 750, 70), duck(990, 800, 46), duck(560, 800, 40),
    P.yuoke(ctx, 1360, 930, 150, '#e8b778', '#4f7fb0'),
    P.yuoke(ctx, 1220, 960, 100, '#f0c58a', '#d0564a'),
  ].join(''),

  // 正しい入り方：砂時計と湯温計、水の入ったコップ
  'onsen-nyuyoku-kaisu-jikan': ctx => [
    P.sky(ctx, ['#dbe9ef', '#f2f6f6']),
    `<rect x="0" y="560" width="${W}" height="${H - 560}" fill="#d7c7ab"/>`,
    ...Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${580 + i * 50}" x2="${W}" y2="${580 + i * 50}" stroke="#c4b293" stroke-width="3"/>`),
    P.wood_tub(ctx, { x: 120, y: 470, w: 760, h: 300, wood: '#d1a36c', water: ['#eef8f8', '#8ccbd0'] }),
    P.steam(ctx, { x: 500, y: 470, h: 330, n: 6, spread: 600, width: 50, opacity: 0.4 }),
    hourglass(1060, 640, 260),
    thermometer(1300, 640, 300),
    glass(1460, 640, 150),
  ].join(''),

  // 雪見露天：夜の雪と雪をかぶった石灯籠
  'yukimi-rotenburo-onsen': ctx => [
    P.sky(ctx, ['#0f1c33', '#2a3f62']),
    P.sun(ctx, 1260, 180, 60, '#f3f1e6', '#cfd8ea'),
    P.ridge(ctx, { base: 470, amp: 140, color: '#c9d4e3', color2: '#8e9fba', seed: 22, jag: 30 }),
    P.cedars(ctx, { y: 620, h: 220, color: '#22344a', seed: 11, snow: true }),
    `<rect x="0" y="620" width="${W}" height="${H - 620}" fill="#e8eef5"/>`,
    P.pool(ctx, { cx: 800, cy: 780, rx: 520, ry: 140, water: ['#bfdbe6', '#3f6f8a'], rock: '#4b4f57', seed: 12 }),
    P.steam(ctx, { x: 800, y: 720, h: 380, n: 7, spread: 600, width: 56, opacity: 0.38 }),
    P.stone_lantern(ctx, 200, 760, 150, true),
    P.flakes(ctx, { n: 140, seed: 3 }),
  ].join(''),

  // 日本三名泉：金の三曲屏風に三つの湯（湯畑・金泉・川辺の湯）
  'nihon-sanmeisen': ctx => {
    const parts = [P.sky(ctx, ['#2b2622', '#3a322b']), `<rect x="0" y="830" width="${W}" height="${H - 830}" fill="#5a4636"/>`];
    const panels = [[130, '#e0bd6a'], [580, '#dcb764'], [1030, '#e0bd6a']];
    panels.forEach(([x, c]) => parts.push(`<rect x="${x}" y="170" width="440" height="660" fill="${c}"/><rect x="${x}" y="170" width="440" height="660" fill="none" stroke="#3b2a1e" stroke-width="12"/>`));
    // 1. 湯畑（木の樋）
    for (let i = 0; i < 6; i++) parts.push(`<rect x="${170 + i * 62}" y="420" width="44" height="300" fill="#7a5233"/><rect x="${176 + i * 62}" y="428" width="32" height="284" fill="#7fd0c3"/>`);
    parts.push(P.steam(ctx, { x: 350, y: 440, h: 230, n: 5, spread: 300, width: 40, opacity: 0.55 }));
    // 2. 金泉
    parts.push(P.pool(ctx, { cx: 800, cy: 620, rx: 170, ry: 70, water: ['#e3a46a', '#9b4a24'], rock: '#5a4e45', seed: 31 }));
    parts.push(P.steam(ctx, { x: 800, y: 580, h: 260, n: 4, spread: 200, width: 40, opacity: 0.5 }));
    // 3. 川辺の湯
    parts.push(`<path d="M1040 700 Q1250 640 1460 720 L1460 820 L1040 820 Z" fill="#8ec5d6"/>`);
    parts.push(`<path d="M1040 560 Q1150 470 1250 540 Q1350 470 1460 560 L1460 700 L1040 700 Z" fill="#5f8f5a"/>`);
    parts.push(P.pool(ctx, { cx: 1250, cy: 690, rx: 140, ry: 40, water: ['#eef8f8', '#9fd0d6'], rock: '#6a645e', seed: 33 }));
    parts.push(P.steam(ctx, { x: 1250, y: 660, h: 200, n: 3, spread: 150, width: 34, opacity: 0.5 }));
    parts.push(P.gold_clouds(ctx, [[160, 220, 260, 34], [640, 250, 300, 34], [1100, 220, 260, 34]], '#f2d998', 0.9));
    return parts.join('');
  },

  // 源泉かけ流し：木の湯口からあふれる湯
  'gensenkakenagashi-guide': ctx => [
    P.sky(ctx, ['#e7dccb', '#f3ece0']),
    `<rect x="0" y="0" width="${W}" height="${H}" fill="#cbb594" opacity="0.4"/>`,
    ...Array.from({ length: 16 }, (_, i) => `<rect x="${i * 104}" y="0" width="98" height="520" fill="${i % 2 ? '#b99a70' : '#c2a37a'}"/>`),
    `<rect x="0" y="520" width="${W}" height="${H - 520}" fill="#8f877c"/>`,
    P.wood_tub(ctx, { x: 300, y: 560, w: 1000, h: 260, wood: '#cf9f66', water: ['#e9f6f3', '#86c4c0'] }),
    // 湯口（木の樋）
    `<rect x="900" y="380" width="460" height="64" fill="#8a5f3c"/><rect x="900" y="384" width="460" height="22" fill="#a77950"/>`,
    `<path d="M905 430 C 880 480 870 520 866 566" stroke="#dff3f2" stroke-width="40" fill="none" stroke-linecap="round" opacity="0.9"/>`,
    // あふれる湯
    ...[360, 520, 700, 880, 1060, 1220].map(x => `<path d="M${x} 560 C ${x - 6} 620 ${x + 8} 700 ${x} 820" stroke="#d9f0ee" stroke-width="16" fill="none" opacity="0.7" stroke-linecap="round"/>`),
    `<ellipse cx="800" cy="850" rx="620" ry="40" fill="#d9f0ee" opacity="0.5"/>`,
    P.steam(ctx, { x: 800, y: 560, h: 380, n: 7, spread: 800, width: 56, opacity: 0.4 }),
  ].join(''),

  // 一人旅：縁側の座布団と本・お茶、山の夕暮れ
  'solo-travel-onsen': ctx => [
    P.sky(ctx, ['#f1b680', '#f7d9a8', '#e9c9a0']),
    P.sun(ctx, 820, 470, 80, '#fff1cc'),
    P.ridge(ctx, { base: 500, amp: 120, color: '#a5739a', seed: 41 }),
    P.ridge(ctx, { base: 580, amp: 70, color: '#7c5a7e', seed: 42 }),
    // 縁側
    `<rect x="0" y="0" width="${W}" height="70" fill="#3a2a20"/><rect x="0" y="0" width="90" height="${H}" fill="#3a2a20"/><rect x="${W - 90}" y="0" width="90" height="${H}" fill="#3a2a20"/>`,
    `<polygon points="0,${H} ${W},${H} ${W},680 0,680" fill="#a8774c"/>`,
    ...Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${700 + i * 55}" x2="${W}" y2="${700 + i * 55}" stroke="#8c6040" stroke-width="3"/>`),
    `<rect x="560" y="760" width="300" height="120" rx="24" fill="#3e5a8a"/><rect x="580" y="772" width="260" height="96" rx="20" fill="#4b6ba0"/>`,
    `<rect x="920" y="800" width="190" height="40" fill="#efe7d6"/><rect x="920" y="790" width="190" height="14" fill="#8a3a2e"/>`,
    `<path d="M1160 780 L1230 780 L1222 850 Q1195 860 1168 850 Z" fill="#6e7d63"/><ellipse cx="1195" cy="780" rx="35" ry="8" fill="#a9b77a"/>`,
    P.steam(ctx, { x: 1195, y: 770, h: 100, n: 2, spread: 20, width: 12, opacity: 0.5 }),
  ].join(''),

  // 絶景露天：雲海と渓谷を見下ろす崖の上の湯
  'zekke-rotenburo-guide': ctx => [
    P.sky(ctx, ['#5d86b8', '#a9c6e2', '#f2d3b4']),
    P.sun(ctx, 1420, 190, 60, '#fff2cf'),
    P.ridge(ctx, { base: 420, amp: 120, color: '#6f7f9f', seed: 51, jag: 40 }),
    P.mist(ctx, 520, { opacity: 0.85, h: 120, n: 7, seed: 3 }),
    P.ridge(ctx, { base: 560, amp: 60, color: '#58698a', seed: 52 }),
    P.mist(ctx, 610, { opacity: 0.9, h: 120, n: 7, seed: 9 }),
    `<path d="M0 640 L1040 640 Q1120 650 1150 720 L1200 ${H} L0 ${H} Z" fill="#4a4038"/>`,
    P.pool(ctx, { cx: 560, cy: 720, rx: 480, ry: 90, water: ['#d6ecf5', '#5e9cc0'], rock: '#3e3732', seed: 4 }),
    P.steam(ctx, { x: 560, y: 680, h: 300, n: 5, spread: 500, width: 50, opacity: 0.35 }),
    P.pine(ctx, 1080, 700, 360),
  ].join(''),

  // 関東から日帰り：山あいを走る電車と、谷の湯けむり
  'kanto-hirogari-onsen': ctx => [
    P.sky(ctx, ['#9fd0ee', '#e6f3f8']),
    P.ridge(ctx, { base: 420, amp: 130, color: '#86ad9c', seed: 61 }),
    P.ridge(ctx, { base: 520, amp: 80, color: '#6c9a7f', seed: 62 }),
    P.steam(ctx, { x: 420, y: 600, h: 260, n: 5, spread: 200, opacity: 0.45 }),
    P.steam(ctx, { x: 1180, y: 610, h: 240, n: 4, spread: 160, opacity: 0.45 }),
    P.inn(ctx, { x: 330, y: 640, w: 200, floors: 2, fh: 50, seed: 3 }),
    P.inn(ctx, { x: 1090, y: 650, w: 180, floors: 2, fh: 46, seed: 4 }),
    `<rect x="0" y="640" width="${W}" height="${H - 640}" fill="#5e8a62"/>`,
    // 鉄橋と電車
    `<rect x="0" y="690" width="${W}" height="18" fill="#7a3a30"/>`,
    ...Array.from({ length: 17 }, (_, i) => `<path d="M${i * 100} 708 L${i * 100 + 50} 800 L${i * 100 + 100} 708" stroke="#7a3a30" stroke-width="8" fill="none"/>`),
    train(ctx, 380, 690, 840),
    `<path d="M0 860 Q400 820 800 870 T1600 850 L1600 1000 L0 1000 Z" fill="#78b6cf"/>`,
  ].join(''),

  // 東北の名湯・秘湯：雪の茅葺きの宿と乳白色の湯
  'tohoku-meito-hito': ctx => [
    P.sky(ctx, ['#b9c6d6', '#e3e8ef']),
    P.ridge(ctx, { base: 430, amp: 110, color: '#d9e1ec', color2: '#aebccf', seed: 71 }),
    P.cedars(ctx, { y: 600, h: 260, color: '#33473f', seed: 21, snow: true }),
    `<rect x="0" y="600" width="${W}" height="${H - 600}" fill="#eef2f7"/>`,
    P.thatched(ctx, { x: 820, y: 640, w: 560, h: 340 }),
    P.pool(ctx, { cx: 520, cy: 790, rx: 400, ry: 120, water: ['#f6f6ef', '#d3d7cf'], rock: '#4e4b48', seed: 22 }),
    P.steam(ctx, { x: 520, y: 740, h: 340, n: 6, spread: 450, width: 54, opacity: 0.45 }),
    P.flakes(ctx, { n: 70, seed: 8, r1: 2, r2: 6 }),
  ].join(''),

  // 温泉の健康効果：朝日の差す内湯（大きな窓と緑）
  'onsen-kenko-nyuyokuho': ctx => [
    P.sky(ctx, ['#d8ecd2', '#f4f6e6']),
    // 窓の外
    `<rect x="200" y="120" width="1200" height="520" fill="url(#${P.lin(ctx, ['#bfe0b8', '#f6f1d2'])})"/>`,
    P.blob_tree(ctx, 420, 640, 420, ['#7fb56a', '#98c77f', '#6aa35a'], 5),
    P.blob_tree(ctx, 1180, 640, 460, ['#86bb70', '#a2cf86', '#6ea85c'], 6),
    `<rect x="200" y="120" width="1200" height="520" fill="#ffffff" opacity="0.12"/>`,
    ...[600, 1000].map(x => `<rect x="${x - 8}" y="120" width="16" height="520" fill="#6b4a33"/>`),
    `<rect x="200" y="370" width="1200" height="14" fill="#6b4a33"/>`,
    `<rect x="0" y="0" width="${W}" height="120" fill="#8a6446"/><rect x="0" y="0" width="200" height="${H}" fill="#9a7352"/><rect x="1400" y="0" width="200" height="${H}" fill="#9a7352"/>`,
    // 光の筋
    `<polygon points="700,120 1000,120 1300,${H} 700,${H}" fill="#fff6d8" opacity="0.18"/>`,
    `<rect x="0" y="640" width="${W}" height="${H - 640}" fill="#7d7a73"/>`,
    `<rect x="120" y="660" width="1360" height="230" fill="url(#${P.lin(ctx, ['#dff1ee', '#7fb9b5'])})"/>`,
    `<rect x="100" y="640" width="1400" height="30" fill="#a17e5a"/>`,
    P.steam(ctx, { x: 800, y: 660, h: 300, n: 6, spread: 1000, width: 60, opacity: 0.32 }),
    P.towel(1220, 600, 180, 50, '#ffffff', '#6aa35a'),
  ].join(''),

  // 九州の温泉：噴煙を上げる火山と海、いくつもの湯けむり
  'kyushu-onsen-guide': ctx => [
    P.sky(ctx, ['#f0a86c', '#f7d8a6', '#e8e3c8']),
    P.volcano(ctx, 1080, 600, 900, 380, '#6a5a5a'),
    P.ridge(ctx, { base: 610, amp: 60, color: '#5a7a5a', seed: 81 }),
    P.sea(ctx, 640, '#5e9bb5', '#2f6a88', { lines: 50 }),
    `<path d="M0 760 Q300 700 640 740 L640 ${H} L0 ${H} Z" fill="#4c6e4a"/>`,
    ...[120, 260, 400, 520].map((x, i) => P.steam(ctx, { x, y: 760 - i * 6, h: 280, n: 3, spread: 60, width: 36, opacity: 0.55, seed: i })),
  ].join(''),

  // 信州・長野：北アルプスの峰と高原の湖、黄葉のカラマツ
  'shinshu-nagano-onsen': ctx => [
    P.sky(ctx, ['#6da6d6', '#c4def0']),
    P.ridge(ctx, { base: 420, amp: 160, color: '#e9eff6', color2: '#8fa3bd', seed: 91, jag: 90, freq: 1.6, step: 10 }),
    P.ridge(ctx, { base: 560, amp: 70, color: '#5f7d6b', seed: 92 }),
    `<path d="M200 640 Q800 600 1400 650 L1400 760 Q800 790 200 750 Z" fill="#7fb1cc"/>`,
    `<path d="M300 690 Q800 670 1300 700" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" fill="none"/>`,
    `<rect x="0" y="740" width="${W}" height="${H - 740}" fill="#9a8a4a"/>`,
    P.cedars(ctx, { y: 960, from: -40, to: 520, h: 300, color: '#d9a43a', seed: 4 }),
    P.cedars(ctx, { y: 980, from: 1160, to: 1680, h: 320, color: '#d29a34', seed: 5 }),
    P.pool(ctx, { cx: 820, cy: 860, rx: 300, ry: 80, water: ['#eaf6f6', '#7fbfc6'], rock: '#5b5650', seed: 7 }),
    P.steam(ctx, { x: 820, y: 820, h: 260, n: 4, spread: 300, opacity: 0.4 }),
  ].join(''),

  // 食が充実した温泉地：お膳（刺身・小鉢・ご飯・汁物）
  'onsen-gurume-travel': ctx => [
    P.sky(ctx, ['#6b4a35', '#4a3326']),
    // 畳
    `<rect x="0" y="0" width="${W}" height="${H}" fill="#b7b37a"/>`,
    ...Array.from({ length: 9 }, (_, i) => `<line x1="${i * 200}" y1="0" x2="${i * 200}" y2="${H}" stroke="#9c985f" stroke-width="5"/>`),
    `<rect x="230" y="200" width="1140" height="640" rx="20" fill="#3a1f18"/><rect x="250" y="220" width="1100" height="600" rx="14" fill="#8b2a22"/>`,
    // 刺身の皿
    `<ellipse cx="560" cy="420" rx="200" ry="120" fill="#efe9de"/><ellipse cx="560" cy="420" rx="170" ry="96" fill="#2e5a7a"/>`,
    ...[0, 1, 2, 3].map(i => `<path d="M${450 + i * 55} 460 Q${470 + i * 55} 360 ${510 + i * 55} 380 Q${505 + i * 55} 450 ${480 + i * 55} 470 Z" fill="${i % 2 ? '#f27a5e' : '#e9654a'}"/>`),
    `<path d="M440 360 l40 -30 l10 40 Z" fill="#6fae4a"/>`,
    // 小鉢
    ...[[900, 380, '#b85a3a'], [1110, 400, '#5d7b3a']].map(([x, y, c]) => `<ellipse cx="${x}" cy="${y + 20}" rx="90" ry="50" fill="#2a2a2a"/><ellipse cx="${x}" cy="${y}" rx="90" ry="44" fill="#3c3c3c"/><ellipse cx="${x}" cy="${y}" rx="64" ry="30" fill="${c}"/>`),
    // ご飯・汁物
    `<ellipse cx="560" cy="690" rx="120" ry="70" fill="#f4f1ea"/><ellipse cx="560" cy="672" rx="96" ry="44" fill="#ffffff"/>`,
    `<ellipse cx="900" cy="700" rx="120" ry="70" fill="#2b1612"/><ellipse cx="900" cy="680" rx="100" ry="46" fill="#b47a3c"/>`,
    P.steam(ctx, { x: 560, y: 650, h: 160, n: 2, spread: 60, width: 20, opacity: 0.55 }),
    P.steam(ctx, { x: 900, y: 660, h: 160, n: 2, spread: 60, width: 20, opacity: 0.55 }),
    // 箸
    `<rect x="1080" y="560" width="14" height="260" rx="6" transform="rotate(-18 1080 560)" fill="#2b2b2b"/><rect x="1110" y="560" width="14" height="260" rx="6" transform="rotate(-14 1110 560)" fill="#2b2b2b"/>`,
  ].join(''),

  // 北海道の温泉：噴気が立ちのぼる地獄谷
  'hokkaido-onsen-top5': ctx => [
    P.sky(ctx, ['#8fb7d9', '#dce9f1']),
    P.ridge(ctx, { base: 380, amp: 100, color: '#7d9a7a', seed: 101 }),
    `<path d="M0 420 Q400 380 800 470 Q1200 380 1600 430 L1600 ${H} L0 ${H} Z" fill="#b08a62"/>`,
    `<path d="M200 520 Q800 640 1400 520 L1600 ${H} L0 ${H} Z" fill="#c69a6a"/>`,
    `<path d="M520 640 Q800 700 1080 640 L1180 ${H} L420 ${H} Z" fill="#d9b48a"/>`,
    `<ellipse cx="800" cy="840" rx="220" ry="50" fill="#9fc7c4"/>`,
    ...[[420, 600], [640, 680], [960, 690], [1180, 610], [800, 820], [300, 760], [1300, 760]].map(([x, y], i) => P.steam(ctx, { x, y, h: 300, n: 3, spread: 50, width: 40, opacity: 0.6, seed: i * 3 })),
    `<path d="M0 ${H} L0 900 L160 860 L260 900 L200 ${H} Z" fill="#6b4a33"/>`,
    ...[[1360, 900], [1460, 880]].map(([x, y]) => `<rect x="${x}" y="${y}" width="10" height="100" fill="#5a3b28"/>`),
    `<rect x="1300" y="880" width="260" height="14" fill="#7a5233"/>`,
  ].join(''),

  // 美肌の湯：花びらの浮かぶやわらかな湯
  'bijin-no-yu-guide': ctx => [
    P.sky(ctx, ['#f2dce6', '#fbf1ef']),
    `<rect x="0" y="420" width="${W}" height="${H - 420}" fill="#cfc4c4"/>`,
    P.pool(ctx, { cx: 800, cy: 700, rx: 680, ry: 240, water: ['#fbf7f2', '#cfe3e3'], rock: '#8a7f80', seed: 15 }),
    P.petals(ctx, { n: 34, colors: ['#e86a7e', '#f29aa8', '#f7c2c9'], y1: 560, y2: 840, seed: 9, s1: 12, s2: 22 }),
    camellia(560, 640, 56), camellia(1020, 760, 46), camellia(860, 600, 38),
    P.steam(ctx, { x: 800, y: 620, h: 360, n: 7, spread: 900, width: 60, opacity: 0.38 }),
    P.blob_tree(ctx, 160, 460, 300, ['#3f6b4a', '#4f7d58', '#c8394a'], 9),
  ].join(''),

  // 初めての温泉旅行：湯屋の入口に並ぶ下駄と、たたんだ浴衣
  'hajimete-onsen-guide': ctx => [
    P.sky(ctx, ['#e9d6b8', '#f4e9d6']),
    `<rect x="0" y="0" width="${W}" height="${H}" fill="#7a5233"/>`,
    `<rect x="100" y="60" width="1400" height="640" fill="#efe3cc"/>`,
    `<rect x="440" y="120" width="720" height="460" fill="#2a1d15"/>`,
    ...[0, 1, 2].map(i => `<rect x="${450 + i * 236}" y="120" width="226" height="300" fill="#b8402e"/>`),
    P.onsen_mark(800, 260, 150, '#ffffff'),
    `<rect x="430" y="104" width="740" height="22" fill="#4e3423"/>`,
    `<rect x="0" y="700" width="${W}" height="${H - 700}" fill="#8f877c"/>`,
    `<rect x="0" y="700" width="${W}" height="40" fill="#a69d90"/>`,
    ...[[520, 820], [700, 830], [900, 815], [1080, 830]].map(([x, y]) => geta(x, y, 70)),
    // たたんだ浴衣
    `<rect x="1230" y="780" width="260" height="90" rx="8" fill="#2c4a7a"/>`,
    ...[0, 1, 2, 3, 4].map(i => `<circle cx="${1265 + i * 48}" cy="825" r="12" fill="#ffffff" opacity="0.8"/>`),
    `<rect x="1230" y="770" width="260" height="22" rx="6" fill="#c8a24a"/>`,
    P.yuoke(ctx, 260, 880, 140, '#d6a46a'),
  ].join(''),

  // 箱根モデルコース：富士山と芦ノ湖、湖に立つ鳥居
  'course-hakone-1night': ctx => [
    P.sky(ctx, ['#7fb0de', '#d7e8f4']),
    P.fuji(ctx, 1050, 560, 980, 420, '#5c7aa8'),
    P.ridge(ctx, { base: 560, amp: 70, color: '#4f7a5e', seed: 111 }),
    P.sea(ctx, 600, '#6aa0c8', '#2f5f86', { lines: 40 }),
    `<path d="M0 600 Q260 560 480 620 L480 ${H} L0 ${H} Z" fill="#3e6a4c"/>`,
    P.torii(380, 780, 260),
    `<rect x="190" y="780" width="380" height="20" fill="#2f5f86" opacity="0.6"/>`,
    P.cedars(ctx, { y: 640, from: -20, to: 360, h: 200, color: '#2e5240', seed: 3 }),
  ].join(''),

  // 草津モデルコース：夜の湯畑（木の樋と灯り）
  'course-kusatsu-2night': ctx => {
    const parts = [P.sky(ctx, ['#16213a', '#2f3e5e']), P.ridge(ctx, { base: 380, amp: 60, color: '#232c45', seed: 121 })];
    parts.push(P.inn(ctx, { x: 60, y: 520, w: 380, floors: 3, fh: 60, seed: 1, wall: '#d8c6a8' }));
    parts.push(P.inn(ctx, { x: 1160, y: 520, w: 380, floors: 3, fh: 60, seed: 2, wall: '#d8c6a8' }));
    parts.push(`<rect x="0" y="520" width="${W}" height="${H - 520}" fill="#4a4540"/>`);
    // 湯畑の木樋（遠近で広がる）
    for (let i = 0; i < 7; i++) {
      const x1 = 560 + i * 80, x2 = 240 + i * 190;
      parts.push(`<polygon points="${x1},540 ${x1 + 50},540 ${x2 + 130},${H} ${x2},${H}" fill="#6b4a33"/>`);
      parts.push(`<polygon points="${x1 + 8},540 ${x1 + 42},540 ${x2 + 110},${H} ${x2 + 20},${H}" fill="#6fd1bf"/>`);
    }
    parts.push(P.steam(ctx, { x: 800, y: 700, h: 420, n: 8, spread: 1000, width: 60, opacity: 0.4 }));
    [[200, 600], [1400, 600], [120, 820], [1480, 820]].forEach(([x, y]) => parts.push(P.chochin(ctx, x, y, 50, '#e9d9b0')));
    return parts.join('');
  },

  // 有馬＋京都：金泉の湯と、紅葉の向こうの五重塔
  'course-arima-kyoto-2night': ctx => [
    P.sky(ctx, ['#f3c98f', '#f8e6c4']),
    P.ridge(ctx, { base: 470, amp: 80, color: '#b77b5c', seed: 131 }),
    P.pagoda(1180, 560, 360),
    P.blob_tree(ctx, 980, 640, 300, ['#d9502e', '#e8743a', '#c33a2a'], 2),
    P.blob_tree(ctx, 1420, 660, 320, ['#e0882e', '#d9502e', '#f0a03a'], 5),
    `<rect x="0" y="620" width="${W}" height="${H - 620}" fill="#8a7a6a"/>`,
    P.pool(ctx, { cx: 620, cy: 780, rx: 520, ry: 150, water: ['#e7a467', '#93421f'], rock: '#4f4741', seed: 13 }),
    P.steam(ctx, { x: 620, y: 730, h: 360, n: 6, spread: 600, width: 54, opacity: 0.4 }),
    P.petals(ctx, { n: 26, colors: ['#d9502e', '#e8743a', '#f0a03a'], y1: 300, y2: 900, seed: 4, s1: 10, s2: 18 }),
  ].join(''),

  // 別府・由布院：街のあちこちから上がる湯けむりと、双耳峰の由布岳
  'course-beppu-yufuin-3night': ctx => {
    const parts = [P.sky(ctx, ['#b8cde6', '#eef1ef']),
      `<path d="M300 560 Q520 300 640 330 Q720 250 800 300 Q1000 360 1300 560 Z" fill="#6f8a8a"/>`,
      P.ridge(ctx, { base: 570, amp: 50, color: '#5a7a6a', seed: 141 }),
      P.mist(ctx, 560, { opacity: 0.7, seed: 6 })];
    const r = P.rng(5);
    for (let i = 0; i < 22; i++) {
      const x = 40 + i * 72, h = 40 + r() * 70;
      parts.push(`<rect x="${x}" y="${720 - h}" width="60" height="${h}" fill="${P.shade('#8a8f99', (r() - 0.5) * 0.3)}"/><polygon points="${x - 8},${720 - h} ${x + 68},${720 - h} ${x + 30},${700 - h}" fill="#3e4048"/>`);
    }
    parts.push(`<rect x="0" y="720" width="${W}" height="${H - 720}" fill="#4f6a5a"/>`);
    [120, 330, 520, 760, 980, 1180, 1420].forEach((x, i) => parts.push(P.steam(ctx, { x, y: 660, h: 360, n: 3, spread: 60, width: 44, opacity: 0.6, seed: i })));
    parts.push(`<ellipse cx="800" cy="880" rx="520" ry="60" fill="#9fc0c8"/>`);
    parts.push(P.mist(ctx, 870, { opacity: 0.6, seed: 2, h: 40 }));
    return parts.join('');
  },

  // 東北秘湯めぐり：雪の川沿いに並ぶ木造旅館とガス灯
  'course-tohoku-hito-3night': ctx => [
    P.sky(ctx, ['#1d2a44', '#3a4e70']),
    P.ridge(ctx, { base: 360, amp: 80, color: '#cdd6e2', color2: '#8a98ae', seed: 151 }),
    P.inn(ctx, { x: 80, y: 600, w: 460, floors: 4, fh: 66, snow: true, seed: 3, wall: '#d9c7a4' }),
    P.inn(ctx, { x: 1060, y: 600, w: 460, floors: 4, fh: 66, snow: true, seed: 4, wall: '#d9c7a4' }),
    `<rect x="0" y="600" width="${W}" height="60" fill="#eef2f7"/>`,
    `<polygon points="560,600 1040,600 1300,${H} 300,${H}" fill="#3d6a86"/>`,
    `<polygon points="560,600 1040,600 1300,${H} 300,${H}" fill="url(#${P.lin(ctx, ['#2b4e66', '#5a8aa6'])})" opacity="0.8"/>`,
    `<polygon points="0,660 560,600 300,${H} 0,${H}" fill="#e8eef5"/><polygon points="1600,660 1040,600 1300,${H} 1600,${H}" fill="#e8eef5"/>`,
    P.gas_lamp(ctx, 470, 760, 170), P.gas_lamp(ctx, 1130, 760, 170), P.gas_lamp(ctx, 330, 900, 210), P.gas_lamp(ctx, 1270, 900, 210),
    `<path d="M600 700 Q800 660 1000 700" stroke="#7a3a2e" stroke-width="14" fill="none"/>`,
    P.flakes(ctx, { n: 120, seed: 6 }),
  ].join(''),

  // 北海道3泊：夜の洞爺湖に上がる花火と、湖の中の島
  'course-hokkaido-onsen-3night': ctx => [
    P.sky(ctx, ['#0d1428', '#1f2d4d']),
    fireworks(ctx, 560, 260, 150, '#ffcf6a'), fireworks(ctx, 1040, 220, 120, '#ff7a8a'), fireworks(ctx, 820, 330, 90, '#8fd0ff'),
    P.ridge(ctx, { base: 540, amp: 70, color: '#1a243c', seed: 161 }),
    P.sea(ctx, 560, '#1d3050', '#0e1a30', { lines: 60, line: '#ffd98a' }),
    `<path d="M640 600 Q760 540 900 590 Q980 600 1000 610 Z" fill="#141c30"/>`,
    P.inn(ctx, { x: 60, y: 900, w: 360, floors: 5, fh: 60, seed: 7, wall: '#c8b898' }),
    P.inn(ctx, { x: 1200, y: 900, w: 340, floors: 4, fh: 60, seed: 8, wall: '#c8b898' }),
    `<rect x="0" y="900" width="${W}" height="100" fill="#141c30"/>`,
  ].join(''),

  // 伊豆日帰り：海辺の崖の湯と、海の向こうの富士山
  'course-izu-daytrip': ctx => [
    P.sky(ctx, ['#f6b98a', '#fbe2c0', '#dfeaf0']),
    P.fuji(ctx, 520, 520, 640, 260, '#7a8fb8'),
    P.sea(ctx, 520, '#7fb4cf', '#2f6e93', { lines: 70 }),
    `<path d="M900 520 Q1100 470 1300 520 Q1500 540 1600 600 L1600 ${H} L800 ${H} Q860 700 900 520 Z" fill="#5a4a3e"/>`,
    P.pine(ctx, 1380, 560, 340),
    P.pool(ctx, { cx: 1180, cy: 800, rx: 320, ry: 100, water: ['#e3f3f7', '#6fb3c9'], rock: '#3e352f', seed: 17 }),
    P.steam(ctx, { x: 1180, y: 760, h: 280, n: 5, spread: 320, opacity: 0.4 }),
    `<path d="M0 860 Q300 820 760 880" stroke="#ffffff" stroke-width="10" stroke-opacity="0.6" fill="none"/>`,
  ].join(''),

  // 加賀温泉郷：紅葉の渓谷にかかる木の橋
  'course-kaga-noto-2night': ctx => [
    P.sky(ctx, ['#e9d3b0', '#f5ead6']),
    `<path d="M0 0 L620 0 Q560 500 680 ${H} L0 ${H} Z" fill="#6a5a46"/>`,
    `<path d="M1600 0 L980 0 Q1040 500 920 ${H} L1600 ${H} Z" fill="#5f5040"/>`,
    P.blob_tree(ctx, 200, 420, 400, ['#d9502e', '#e8743a', '#c33a2a', '#f0a03a'], 3),
    P.blob_tree(ctx, 1420, 420, 400, ['#e0882e', '#d9502e', '#f0a03a', '#c33a2a'], 4),
    P.blob_tree(ctx, 420, 700, 300, ['#d9502e', '#f0a03a'], 6),
    `<path d="M620 ${H} Q700 620 800 560 Q900 620 980 ${H} Z" fill="#5f9fb0"/>`,
    ...[0, 1, 2, 3].map(i => `<path d="M${700 + i * 40} ${700 + i * 60} q30 -8 60 0" stroke="#ffffff" stroke-opacity="0.5" stroke-width="4" fill="none"/>`),
    // 橋
    `<path d="M440 470 Q800 380 1160 470" stroke="#6b4a33" stroke-width="40" fill="none"/>`,
    ...Array.from({ length: 13 }, (_, i) => { const x = 460 + i * 55; const y = 470 - Math.sin((i / 12) * Math.PI) * 88; return `<rect x="${x}" y="${y - 70}" width="10" height="70" fill="#5a3b28"/>`; }),
    `<path d="M440 400 Q800 310 1160 400" stroke="#5a3b28" stroke-width="10" fill="none"/>`,
    P.petals(ctx, { n: 30, colors: ['#d9502e', '#e8743a', '#f0a03a'], seed: 7, s1: 10, s2: 18 }),
  ].join(''),

  // 城崎モデルコース：柳並木の川と石の太鼓橋、夜の灯り
  'course-kinosaki-1night': ctx => [
    P.sky(ctx, ['#1b2238', '#3b3f5e']),
    P.inn(ctx, { x: 40, y: 560, w: 420, floors: 3, fh: 64, seed: 11 }),
    P.inn(ctx, { x: 1140, y: 560, w: 420, floors: 3, fh: 64, seed: 12 }),
    `<rect x="0" y="560" width="${W}" height="80" fill="#6f6a66"/>`,
    `<rect x="0" y="640" width="${W}" height="${H - 640}" fill="#24344e"/>`,
    P.sea(ctx, 640, '#2e4466', '#1a2840', { lines: 60, line: '#ffcf73' }),
    // 石の太鼓橋
    `<path d="M480 640 Q800 420 1120 640 L1060 640 Q800 500 540 640 Z" fill="#9b958c"/>`,
    `<path d="M470 600 Q800 380 1130 600" stroke="#7d776f" stroke-width="16" fill="none"/>`,
    P.willow(ctx, 330, 640, 380), P.willow(ctx, 1270, 640, 380),
    P.chochin(ctx, 640, 480, 34, '#e9d9b0'), P.chochin(ctx, 960, 480, 34, '#e9d9b0'),
    geta(760, 590, 40), geta(830, 588, 40),
  ].join(''),

  // 特集：国民保養温泉地（高原に湯治場の屋根が並ぶ）
  'kokumin-hoyo-onsenchi': ctx => {
    const parts = [P.sky(ctx, ['#7fb6d8', '#d6ecf2']),
      P.ridge(ctx, { base: 380, amp: 140, color: '#9fb8c9', seed: 171, jag: 40 }),
      P.ridge(ctx, { base: 500, amp: 70, color: '#8fb07a', seed: 172 }),
      `<rect x="0" y="560" width="${W}" height="${H - 560}" fill="#a9c47e"/>`];
    [[200, 700, 300], [560, 680, 260], [900, 720, 340], [1280, 690, 260]].forEach(([x, y, w], i) => {
      parts.push(P.inn(ctx, { x, y, w, floors: 2, fh: 56, seed: 20 + i, wall: '#e2d2b0' }));
      parts.push(P.steam(ctx, { x: x + w + 20, y: y - 20, h: 220, n: 3, spread: 50, width: 34, opacity: 0.5, seed: i }));
    });
    parts.push(`<rect x="0" y="720" width="${W}" height="${H - 720}" fill="#8eb36a"/>`);
    parts.push(`<path d="M700 ${H} Q760 840 800 720 Q840 840 900 ${H} Z" fill="#c9b48a"/>`);
    parts.push(P.cedars(ctx, { y: 1000, from: -40, to: 380, h: 280, color: '#3f6b55', seed: 5 }));
    parts.push(P.cedars(ctx, { y: 1000, from: 1260, to: 1680, h: 280, color: '#3f6b55', seed: 6 }));
    return parts.join('');
  },

  // 特集：硫黄泉（白濁の湯と黄色い湯の花の岩、噴気の山肌）
  'iousen-onsenchi': ctx => [
    P.sky(ctx, ['#a6b8c6', '#e6e8e0']),
    `<path d="M0 520 Q300 300 700 380 Q1100 260 1600 460 L1600 ${H} L0 ${H} Z" fill="#b5a68a"/>`,
    `<path d="M0 620 Q500 520 900 600 Q1300 520 1600 600 L1600 ${H} L0 ${H} Z" fill="#c8b98e"/>`,
    ...[[380, 430], [1000, 380], [1300, 470]].map(([x, y], i) => P.steam(ctx, { x, y, h: 260, n: 3, spread: 60, width: 40, opacity: 0.6, seed: i })),
    P.pool(ctx, { cx: 800, cy: 790, rx: 560, ry: 150, water: ['#f2f5ec', '#b9d6cf'], rock: '#8a7a52', seed: 19 }),
    sulfur(ctx, 800, 790, 560, 150),
    P.steam(ctx, { x: 800, y: 740, h: 360, n: 7, spread: 700, width: 56, opacity: 0.42 }),
  ].join(''),

  // 特集：アルカリ性単純温泉（底の石まで見える澄んだ湯と川）
  'alkaline-simple-onsen': ctx => [
    P.sky(ctx, ['#bfe2ef', '#eef7f6']),
    P.ridge(ctx, { base: 430, amp: 110, color: '#7fb39a', seed: 181 }),
    P.blob_tree(ctx, 220, 560, 320, ['#76b36a', '#90c77d', '#5f9f58'], 8),
    P.blob_tree(ctx, 1400, 560, 320, ['#76b36a', '#90c77d', '#5f9f58'], 9),
    `<path d="M0 560 Q800 520 1600 560 L1600 640 Q800 610 0 640 Z" fill="#8cc8d6"/>`,
    `<rect x="0" y="600" width="${W}" height="${H - 600}" fill="#b7aa96"/>`,
    P.pool(ctx, { cx: 800, cy: 790, rx: 600, ry: 170, water: ['#f2fbfc', '#9fd7e0'], rock: '#7b7268', seed: 23 }),
    clear_stones(ctx, 800, 790, 600, 170),
    P.steam(ctx, { x: 800, y: 740, h: 300, n: 5, spread: 700, width: 54, opacity: 0.3 }),
  ].join(''),

  // 特集：海辺の温泉（夕日の海と岩場の露天）
  'umibe-onsen': ctx => [
    P.sky(ctx, ['#f08a5a', '#f7c27f', '#fbe2b8']),
    P.sun(ctx, 800, 470, 90, '#ffe7b0'),
    P.sea(ctx, 520, '#e59a6a', '#3d5f86', { lines: 70, line: '#ffe0a8' }),
    `<rect x="760" y="520" width="80" height="300" fill="#ffd79a" opacity="0.25"/>`,
    `<path d="M0 680 Q200 620 420 700 L520 ${H} L0 ${H} Z" fill="#3a2e2a"/>`,
    `<path d="M1600 660 Q1400 620 1200 700 L1080 ${H} L1600 ${H} Z" fill="#3a2e2a"/>`,
    P.pool(ctx, { cx: 800, cy: 880, rx: 560, ry: 110, water: ['#f5d9b8', '#6f8fa8'], rock: '#2f2724', seed: 29 }),
    P.steam(ctx, { x: 800, y: 840, h: 260, n: 5, spread: 600, width: 50, opacity: 0.35 }),
    `<path d="M380 700 q60 -40 120 0 q60 40 120 0" stroke="#ffffff" stroke-width="8" fill="none" opacity="0.6"/>`,
  ].join(''),

};

// ── この絵だけで使う部品 ─────────────────────────────
function coin(ctx, x, y, r, c1, c2, hole) {
  let s = `<ellipse cx="${x}" cy="${y + 10}" rx="${r}" ry="${r * 0.98}" fill="${P.shade(c2, -0.25)}"/>
    <circle cx="${x}" cy="${y}" r="${r}" fill="url(#${P.rad(ctx, [c1, c2], 0.4, 0.35, 0.8)})"/>
    <circle cx="${x}" cy="${y}" r="${r * 0.86}" fill="none" stroke="${c2}" stroke-width="4"/>`;
  if (hole) s += `<circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#4a3a2e"/>`;
  else {
    // 桜の花の模様（100円玉）
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
      s += `<ellipse cx="${x + Math.cos(a) * r * 0.28}" cy="${y + Math.sin(a) * r * 0.28}" rx="${r * 0.2}" ry="${r * 0.14}" transform="rotate(${(a * 180) / Math.PI} ${x + Math.cos(a) * r * 0.28} ${y + Math.sin(a) * r * 0.28})" fill="${c2}" opacity="0.7"/>`;
    }
  }
  return s;
}

function stone_wall(ctx, x, y, w, h) {
  const r = P.rng(41);
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#b9b2a5"/>`;
  for (let yy = y; yy < y + h; yy += 70) {
    for (let xx = x - (yy / 70 % 2) * 60; xx < x + w; xx += 120) {
      s += `<rect x="${xx + 4}" y="${yy + 4}" width="${112}" height="62" rx="18" fill="${P.shade('#a9a194', (r() - 0.5) * 0.2)}"/>`;
    }
  }
  return s;
}

// 巻物の中の景色：三つの湯（四国・関西・南紀）を山と海で
function scroll_landscape(ctx) {
  const ink = '#3c4a5e';
  let s = `<g>`;
  // 遠山
  s += `<path d="M180 600 Q330 420 470 560 Q560 470 660 580 Q800 430 960 570 Q1080 470 1200 580 Q1320 470 1420 600 L1420 790 L180 790 Z" fill="#c9cbb8"/>`;
  // 海
  s += `<rect x="180" y="650" width="1240" height="140" fill="#a9c2c3"/>`;
  for (let i = 0; i < 14; i++) s += `<path d="M${220 + i * 85} ${700 + (i % 3) * 20} q20 -10 40 0 q20 10 40 0" stroke="${ink}" stroke-width="3" fill="none" opacity="0.5"/>`;
  // 三つの湯
  [[400, 610], [800, 600], [1200, 615]].forEach(([x, y], i) => {
    s += P.pool(ctx, { cx: x, cy: y, rx: 110, ry: 34, water: ['#f1ead5', i === 1 ? '#b8704a' : '#9cc4c2'], rock: '#6a6058', seed: 50 + i, ripples: 1 });
    s += P.steam(ctx, { x, y: y - 20, h: 230, n: 3, spread: 90, width: 26, opacity: 0.55, color: '#ffffff' });
  });
  s += P.gold_clouds(ctx, [[220, 300, 360, 30], [700, 280, 300, 30], [1060, 310, 320, 30]], '#d9b45a', 0.9);
  s += `<circle cx="1290" cy="330" r="46" fill="#c8402e"/>`;
  return s + '</g>';
}

function andon(ctx, x, y, h) {
  const gg = P.rad(ctx, [['#ffcf7a', 0.6], ['#ffcf7a', 0]]);
  return `<circle cx="${x}" cy="${y - h * 0.6}" r="${h}" fill="url(#${gg})"/>
    <rect x="${x - h * 0.28}" y="${y - h}" width="${h * 0.56}" height="${h * 0.8}" fill="#f6dfa6" stroke="#3a2a1a" stroke-width="6"/>
    <line x1="${x}" y1="${y - h}" x2="${x}" y2="${y - h * 0.2}" stroke="#3a2a1a" stroke-width="3"/>
    <rect x="${x - h * 0.34}" y="${y - h * 0.22}" width="${h * 0.68}" height="${h * 0.22}" fill="#3a2a1a"/>`;
}

function duck(x, y, s) {
  return `<ellipse cx="${x}" cy="${y}" rx="${s}" ry="${s * 0.55}" fill="#f6cf3a"/>
    <circle cx="${x + s * 0.55}" cy="${y - s * 0.55}" r="${s * 0.38}" fill="#f6cf3a"/>
    <path d="M${x + s * 0.88} ${y - s * 0.6} l${s * 0.32} ${s * 0.08} l${-s * 0.32} ${s * 0.12} Z" fill="#ef8a2a"/>
    <circle cx="${x + s * 0.66} " cy="${y - s * 0.66}" r="${s * 0.06}" fill="#2b2b2b"/>
    <path d="M${x - s * 0.5} ${y - s * 0.1} q${s * 0.4} ${-s * 0.3} ${s * 0.7} 0" stroke="#e0b52a" stroke-width="${s * 0.08}" fill="none"/>`;
}

function hourglass(x, y, h) {
  const w = h * 0.5;
  return `<rect x="${x - w * 0.6}" y="${y - h}" width="${w * 1.2}" height="${h * 0.07}" fill="#7a5233"/>
    <rect x="${x - w * 0.6}" y="${y - h * 0.07}" width="${w * 1.2}" height="${h * 0.07}" fill="#7a5233"/>
    <path d="M${x - w * 0.45} ${y - h * 0.93} L${x + w * 0.45} ${y - h * 0.93} Q${x + w * 0.45} ${y - h * 0.62} ${x + w * 0.06} ${y - h * 0.5} Q${x + w * 0.45} ${y - h * 0.38} ${x + w * 0.45} ${y - h * 0.07} L${x - w * 0.45} ${y - h * 0.07} Q${x - w * 0.45} ${y - h * 0.38} ${x - w * 0.06} ${y - h * 0.5} Q${x - w * 0.45} ${y - h * 0.62} ${x - w * 0.45} ${y - h * 0.93} Z" fill="#e8f4f6" stroke="#9ab7bf" stroke-width="4"/>
    <path d="M${x - w * 0.3} ${y - h * 0.8} L${x + w * 0.3} ${y - h * 0.8} L${x} ${y - h * 0.53} Z" fill="#e2b36a"/>
    <path d="M${x - w * 0.4} ${y - h * 0.08} L${x + w * 0.4} ${y - h * 0.08} L${x} ${y - h * 0.3} Z" fill="#e2b36a"/>
    <line x1="${x}" y1="${y - h * 0.53}" x2="${x}" y2="${y - h * 0.3}" stroke="#e2b36a" stroke-width="3"/>
    <rect x="${x - w * 0.58}" y="${y - h * 0.93}" width="8" height="${h * 0.86}" fill="#8a5f3c"/><rect x="${x + w * 0.58 - 8}" y="${y - h * 0.93}" width="8" height="${h * 0.86}" fill="#8a5f3c"/>`;
}

function thermometer(x, y, h) {
  return `<rect x="${x - 26}" y="${y - h}" width="52" height="${h}" rx="26" fill="#f4f1ea" stroke="#9a8f80" stroke-width="5"/>
    <circle cx="${x}" cy="${y - 34}" r="30" fill="#d94a3a"/>
    <rect x="${x - 9}" y="${y - h * 0.6}" width="18" height="${h * 0.55}" fill="#d94a3a"/>
    ${[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8].map(t => `<line x1="${x + 12}" y1="${y - h * t}" x2="${x + 24}" y2="${y - h * t}" stroke="#6a6258" stroke-width="3"/>`).join('')}`;
}

function glass(x, y, h) {
  const w = h * 0.55;
  return `<path d="M${x - w / 2} ${y - h} L${x + w / 2} ${y - h} L${x + w * 0.4} ${y} L${x - w * 0.4} ${y} Z" fill="#e6f3f6" opacity="0.8" stroke="#9ab7bf" stroke-width="4"/>
    <path d="M${x - w * 0.47} ${y - h * 0.65} L${x + w * 0.47} ${y - h * 0.65} L${x + w * 0.4} ${y} L${x - w * 0.4} ${y} Z" fill="#a9d6e3"/>`;
}

function train(ctx, x, y, w) {
  const h = 110;
  let s = '';
  const cars = 3, cw = w / cars;
  for (let i = 0; i < cars; i++) {
    const cx = x + i * cw;
    s += `<rect x="${cx + 6}" y="${y - h}" width="${cw - 12}" height="${h}" rx="${i === 0 ? 40 : 14}" fill="#e9e4da"/>`;
    s += `<rect x="${cx + 6}" y="${y - h * 0.32}" width="${cw - 12}" height="${h * 0.12}" fill="#c8402e"/>`;
    for (let k = 0; k < 4; k++) s += `<rect x="${cx + 30 + k * (cw - 60) / 4}" y="${y - h * 0.8}" width="${(cw - 60) / 4 - 14}" height="${h * 0.34}" rx="6" fill="#4a6a8a"/>`;
  }
  return s;
}

function camellia(x, y, s) {
  let p = '';
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    p += `<circle cx="${x + Math.cos(a) * s * 0.5}" cy="${y + Math.sin(a) * s * 0.32}" r="${s * 0.5}" fill="#d63a4e"/>`;
  }
  return p + `<circle cx="${x}" cy="${y}" r="${s * 0.3}" fill="#f2c23a"/>`;
}

function geta(x, y, s) {
  return `<rect x="${x}" y="${y}" width="${s * 0.9}" height="${s * 2}" rx="${s * 0.2}" fill="#c9a06a" transform="rotate(-8 ${x} ${y})"/>
    <path d="M${x + s * 0.15} ${y + s * 0.5} Q${x + s * 0.45} ${y + s * 0.1} ${x + s * 0.75} ${y + s * 0.5}" stroke="#b8402e" stroke-width="${s * 0.12}" fill="none" transform="rotate(-8 ${x} ${y})"/>`;
}

function fireworks(ctx, x, y, r, color) {
  let s = '';
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    s += `<line x1="${x + Math.cos(a) * r * 0.25}" y1="${y + Math.sin(a) * r * 0.25}" x2="${x + Math.cos(a) * r}" y2="${y + Math.sin(a) * r}" stroke="${color}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>`;
    s += `<circle cx="${x + Math.cos(a) * r * 1.08}" cy="${y + Math.sin(a) * r * 1.08}" r="5" fill="${color}"/>`;
  }
  const gg = P.rad(ctx, [[color, 0.35], [color, 0]]);
  return `<circle cx="${x}" cy="${y}" r="${r * 1.4}" fill="url(#${gg})"/>` + s;
}

// 硫黄の湯の花（湯船のふちの黄色）
function sulfur(ctx, cx, cy, rx, ry) {
  const r = P.rng(77);
  let s = '';
  for (let i = 0; i < 26; i++) {
    const a = r() * Math.PI * 2;
    s += `<ellipse cx="${cx + Math.cos(a) * rx * 1.02}" cy="${cy + Math.sin(a) * ry * 1.05}" rx="${20 + r() * 26}" ry="${8 + r() * 10}" fill="${r() > 0.5 ? '#e6cf4a' : '#d9bd3a'}" opacity="0.85"/>`;
  }
  return s;
}

// 透明な湯の底に見える石
function clear_stones(ctx, cx, cy, rx, ry) {
  const r = P.rng(88);
  let s = '';
  for (let i = 0; i < 40; i++) {
    const a = r() * Math.PI * 2, d = Math.sqrt(r()) * 0.8;
    s += `<ellipse cx="${cx + Math.cos(a) * rx * d}" cy="${cy + Math.sin(a) * ry * d}" rx="${16 + r() * 22}" ry="${7 + r() * 8}" fill="${P.shade('#8a9a8a', (r() - 0.5) * 0.4)}" opacity="0.35"/>`;
  }
  return s;
}
