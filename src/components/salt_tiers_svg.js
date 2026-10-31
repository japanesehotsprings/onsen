/**
 * 「温泉地名の入浴剤は3種類ある」の図（インラインSVG）
 */
import { TIER_LABELS } from '../data/bath_salts_lib.js';

const NOTES = {
  1: '温泉から採った成分（湯の花など）を使ったもの',
  2: '温泉地が公認し、湯の色や香りを近づけたもの',
  3: '温泉地の名前をテーマにした香り・色のもの',
};

export function salt_tiers_svg() {
  const rows = [1, 2, 3].map((t, i) => `
    <g transform="translate(0 ${i * 70})">
      <rect class="salt-svg-bar salt-svg-bar-${t}" x="0" y="0" width="360" height="56" rx="8"/>
      <text class="salt-svg-title" x="16" y="24">${'①②③'[i]} ${TIER_LABELS[t]}</text>
      <text class="salt-svg-note" x="16" y="44">${NOTES[t]}</text>
    </g>`).join('');
  return `
    <svg class="salt-tiers-svg" viewBox="0 0 360 210" role="img" aria-label="温泉地名の入浴剤の3つの区分。上ほど本物の温泉に近い">
      ${rows}
    </svg>
  `;
}
