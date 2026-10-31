/**
 * トップページの「家で入る名湯」セクション
 * トップには楽天リンクを置かず、コーナーへの入口だけにする（広告表記の要らない形）
 */
import { bathSaltList } from '../data/bath_salts.js';
import { bathSaltResolved } from '../data/bath_salts_resolved.js';
import { TIER_LABELS } from '../data/bath_salts_lib.js';
import { onsenList } from '../data/onsen.js';
import { visible_salts } from './salt_card.js';
import { esc } from './answer.js';

const MAX_ONSENS = 8;

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
  return `
    <section class="section" id="home-onsen">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">家で入る名湯</h2>
          <p class="section-desc">温泉地の名前がついた入浴剤・湯の花を、本物の温泉に近い順に比べる</p>
        </div>
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
