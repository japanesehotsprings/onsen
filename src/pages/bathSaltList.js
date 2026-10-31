/**
 * 家で入る名湯（入浴剤コーナーのトップ）/nyuyokuzai
 * 温泉地から探す・好みから探す・贈り物向け
 */
import { bathSaltList } from '../data/bath_salts.js';
import { bathSaltResolved } from '../data/bath_salts_resolved.js';
import { PREF_TAGS, TIER_LABELS } from '../data/bath_salts_lib.js';
import { onsenList } from '../data/onsen.js';
import { prefectures } from '../data/prefectures.js';
import { visible_salts, salt_card } from '../components/salt_card.js';
import { salt_tiers_svg } from '../components/salt_tiers_svg.js';
import { AD_NOTICE_PAGE } from '../components/ad_notice.js';
import { esc } from '../components/answer.js';
import { updateSEO } from '../seo.js';

// 商品のある温泉地を、都道府県の並び順でまとめる
function onsens_by_prefecture(salts) {
  const ids = new Set(salts.flatMap(s => s.onsen_ids));
  return prefectures
    .map(p => ({ pref: p, onsens: onsenList.filter(o => o.prefecture === p.id && ids.has(o.id)) }))
    .filter(g => g.onsens.length);
}

const onsen_link = o => `<a href="/nyuyokuzai/${o.id}" class="tag">${esc(o.name)}</a>`;

export function build_list_html(salts, resolved) {
  const shown = visible_salts(salts, resolved);
  const groups = onsens_by_prefecture(shown);
  const gifts = shown.filter(s => s.is_gift);
  const by_tag = PREF_TAGS.map(tag => {
    const ids = new Set(shown.filter(s => s.tags.includes(tag)).flatMap(s => s.onsen_ids));
    return { tag, onsens: onsenList.filter(o => ids.has(o.id)) };
  }).filter(t => t.onsens.length);

  return `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">ホーム</a>
          <span class="breadcrumb-separator">›</span>
          <span>家で入る名湯</span>
        </nav>
        <h1 class="page-title">家で入る名湯</h1>
        <p class="page-desc">温泉地の名前がついた入浴剤・湯の花を、温泉地ごとに整理しました</p>
        <p class="ad-notice">${AD_NOTICE_PAGE}</p>
      </div>
    </div>

    <section class="section">
      <div class="container salt-intro">
        <div class="section-header">
          <h2 class="section-title">温泉地名の入浴剤は3種類あります</h2>
          <p class="section-desc">同じ「◯◯温泉」の名前でも、中身の成り立ちが違います。このコーナーでは、商品ごとにどれに当たるかを出典つきで示しています。</p>
        </div>
        ${salt_tiers_svg()}
        <ul class="salt-tier-list">
          <li><strong>① ${TIER_LABELS[1]}</strong>：製造元や成分表示で、温泉から採った成分を使っていると確かめられたもの。</li>
          <li><strong>② ${TIER_LABELS[2]}</strong>：温泉地（観光協会・自治体）の公認や共同開発だと、メーカーが公表しているもの。</li>
          <li><strong>③ ${TIER_LABELS[3]}</strong>：温泉地の名前をテーマにした香りや湯の色のもの。温泉を再現した商品ではありません。</li>
        </ul>
        <p class="salt-note">どれも家庭のお風呂用の入浴剤で、温泉そのものではありません。最新の価格は楽天で確認してください。</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">温泉地から探す</h2>
        </div>
        ${groups.map(g => `
          <div class="salt-pref">
            <h3 class="salt-pref-name">${esc(g.pref.name)}</h3>
            <div class="salt-pref-onsens">${g.onsens.map(onsen_link).join('')}</div>
          </div>
        `).join('')}
      </div>
    </section>

    ${by_tag.length ? `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">好みから探す</h2>
        </div>
        ${by_tag.map(t => `
          <div class="salt-pref">
            <h3 class="salt-pref-name">${esc(t.tag)}</h3>
            <div class="salt-pref-onsens">${t.onsens.map(onsen_link).join('')}</div>
          </div>
        `).join('')}
      </div>
    </section>` : ''}

    ${gifts.length ? `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">贈り物向けの詰め合わせ</h2>
        </div>
        <div class="salt-grid">${gifts.map(s => salt_card(s, resolved[s.id])).join('')}</div>
      </div>
    </section>` : ''}
  `;
}

export function renderBathSaltList() {
  updateSEO('家で入る名湯｜温泉地の入浴剤・湯の花を温泉地ごとに比較', '温泉地の名前がついた入浴剤・湯の花を、温泉地ごとに整理。本物の温泉成分を使ったもの、温泉地公認の再現品、名前と香りのものの3つに分けて、出典つきで紹介します。');
  document.getElementById('app').innerHTML = build_list_html(bathSaltList, bathSaltResolved);
}
