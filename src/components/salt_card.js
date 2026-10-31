/**
 * 入浴剤の商品カード（家で入る名湯コーナー・温泉地ページの枠で共通）
 * 価格は出さない。楽天の出品が見つからない商品（resolved が null）は出さない
 */
import { esc } from './answer.js';
import { TIER_LABELS } from '../data/bath_salts_lib.js';

// 楽天の出品が見つかった商品だけを返す
export function visible_salts(salts, resolved) {
  return salts.filter(s => resolved[s.id]);
}

export function salt_card(salt, resolved) {
  if (!resolved) return '';
  const img = resolved.image_url
    ? `<img src="${esc(resolved.image_url)}" alt="${esc(salt.name)}" class="salt-card-img" loading="lazy" width="150" height="150">`
    : '';
  return `
    <article class="salt-card salt-tier-${salt.tier}">
      ${img}
      <div class="salt-card-body">
        <span class="salt-badge salt-badge-${salt.tier}">${'①②③'[salt.tier - 1]} ${TIER_LABELS[salt.tier]}</span>
        <h3 class="salt-card-name">${esc(salt.name)}</h3>
        <p class="salt-card-maker">${esc(salt.maker)}${salt.district ? `／${esc(salt.district)}地区` : ''}</p>
        <p class="salt-card-basis">${esc(salt.tier_basis)}</p>
        ${salt.ingredients_note ? `<p class="salt-card-note">${esc(salt.ingredients_note)}</p>` : ''}
        <a href="${esc(resolved.affiliate_url)}" class="btn btn-primary salt-card-link" target="_blank" rel="sponsored noopener">楽天市場で見る</a>
      </div>
    </article>
  `;
}
