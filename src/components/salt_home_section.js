/**
 * トップページの「家で入る名湯」セクション
 * 区分ごとに商品画像を数点見せて、コーナーへの入口にする
 * 画像は楽天の商品リンクとセットで出すので、見出しに PR と広告表記を付ける（画像がなければ付けない）
 */
import { bathSaltList } from '../data/bath_salts.js';
import { bathSaltResolved } from '../data/bath_salts_resolved.js';
import { TIER_LABELS } from '../data/bath_salts_lib.js';
import { onsenList } from '../data/onsen.js';
import { visible_salts } from './salt_card.js';
import { esc } from './answer.js';
import { pr_label } from './ad_notice.js';

const MAX_ONSENS = 8;
// 画像で見せる商品の数（区分ごと）：①1点・②3点・③2点
const PICKS_PER_TIER = { 1: 1, 2: 3, 3: 2 };

// 画像のある商品を区分の順に選ぶ
function pick_items(shown, resolved) {
  return [1, 2, 3].flatMap(t => shown.filter(s => s.tier === t && resolved[s.id].image_url).slice(0, PICKS_PER_TIER[t]));
}

export function salt_home_section(salts = bathSaltList, resolved = bathSaltResolved) {
  const shown = visible_salts(salts, resolved);
  if (!shown.length) return '';
  // 商品の多い温泉地から並べる（同数は onsen.js の順）
  const count = {};
  for (const s of shown) for (const id of s.onsen_ids) count[id] = (count[id] || 0) + 1;
  const onsens = onsenList
    .filter(o => count[o.id])
    .sort((a, b) => count[b.id] - count[a.id])
    .slice(0, MAX_ONSENS);
  const items = pick_items(shown, resolved);
  return `
    <section class="section" id="home-onsen">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">家で入る名湯${items.length ? pr_label() : ''}</h2>
          <p class="section-desc">温泉地の名前がついた入浴剤・湯の花を、本物の温泉に近い順に比べる</p>
        </div>
        ${items.length ? `
        <div class="salt-home-items">
          ${items.map(s => `
            <a href="${esc(resolved[s.id].affiliate_url)}" class="salt-home-item" target="_blank" rel="sponsored noopener">
              <img src="${esc(resolved[s.id].image_url)}" alt="${esc(s.name)}" loading="lazy" width="300" height="300">
              <span class="salt-badge salt-badge-${s.tier}">${'①②③'[s.tier - 1]} ${TIER_LABELS[s.tier]}</span>
              <span class="salt-home-item-name">${esc(s.name)}</span>
            </a>
          `).join('')}
        </div>
        <p class="ad-notice salt-home-notice">商品の画像は楽天市場へのリンクです。このセクションには広告（楽天アフィリエイト）を含みます</p>` : ''}
        <div class="salt-home-tiers">
          ${[1, 2, 3].map(t => `<span class="salt-badge salt-badge-${t}">${'①②③'[t - 1]} ${TIER_LABELS[t]}</span>`).join('')}
        </div>
        <div class="salt-pref-onsens salt-home-onsens">
          ${onsens.map(o => `<a href="/nyuyokuzai/${o.id}" class="tag">${esc(o.name)}の入浴剤</a>`).join('')}
        </div>
        <div style="text-align:center;margin-top:1.5rem">
          <a href="/nyuyokuzai" class="btn btn-outline">家で入る名湯を見る</a>
        </div>
      </div>
    </section>
  `;
}
