/**
 * 都道府県詳細ページ
 * 都道府県ごとの温泉一覧を表示。各温泉地をクリックすると温泉地詳細ページへ遷移する。
 */

import { getPrefectureById } from '../data/prefectures.js';
import { getOnsenByPrefecture } from '../data/onsen.js';
import { getHotelsByOnsen } from '../data/hotels.js';
import { updateSEO } from '../seo.js';
import { summary_box, faq_section, faq_ld } from '../components/answer.js';

/**
 * 都道府県詳細ページのHTMLを生成して表示する
 * @param {object} context - ルーターから渡されるコンテキスト
 */
export function renderPrefectureDetail({ params }) {
  const app = document.getElementById('app');
  const prefecture = getPrefectureById(params.id);

  if (!prefecture) {
    updateSEO('ページが見つかりません', '');
    app.innerHTML = `
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">ページが見つかりません</h1>
          <a href="/" class="btn btn-primary">トップに戻る</a>
        </div>
      </div>
    `;
    return;
  }

  const onsenItems = getOnsenByPrefecture(params.id);
  const answer = build_prefecture_answer(prefecture, onsenItems);

  updateSEO(`${prefecture.name}の温泉地一覧`, `${prefecture.name}（${prefecture.kana}）のおすすめ温泉地・秘湯の一覧です。泉質や特徴からお気に入りの温泉旅行を見つけよう。`, faq_ld(answer.faqs), { image: prefecture.image });

  app.innerHTML = `
    <div class="prefecture-hero">
      <img src="${prefecture.image}" alt="${prefecture.name}" class="prefecture-hero-bg">
      <div class="prefecture-hero-overlay"></div>
      <div class="prefecture-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <a href="/prefectures">都道府県一覧</a>
          <span class="breadcrumb-separator">›</span>
          <span>${prefecture.name}</span>
        </nav>
        <h1 class="prefecture-hero-title">♨ ${prefecture.name}の温泉</h1>
        <p class="prefecture-hero-kana">${prefecture.kana}・${onsenItems.length}件の温泉地</p>
      </div>
    </div>

    <section class="section prefecture-detail-section">
      <div class="container">
        ${onsenItems.length > 0 ? `
          <div style="margin-bottom: var(--spacing-lg)">${summary_box(`${prefecture.name}の温泉の要点`, answer.lead, answer.facts)}</div>
          <div class="card-grid">
            ${onsenItems.map(onsen => {
    const hotels = getHotelsByOnsen(onsen.id);
    return renderOnsenCard(onsen, hotels.length);
  }).join('')}
          </div>
        ` : `
          <div class="empty-state-container">
            <div class="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2C8 2 4 5.5 4 10c0 3 1.5 5.5 4 7v3h8v-3c2.5-1.5 4-4 4-7 0-4.5-4-8-8-8z"/>
                <line x1="9" y1="22" x2="15" y2="22"/>
              </svg>
            </div>
            <h3>温泉情報は準備中です</h3>
            <p>この都道府県の温泉情報は近日公開予定です</p>
          </div>
        `}
        <div style="margin-top: var(--spacing-lg)">${faq_section(`${prefecture.name}の温泉のよくある質問`, answer.faqs)}</div>
      </div>
    </section>
  `;

  // アニメーション設定
  setupDetailAnimations();
  // ページトップにスクロール
  window.scrollTo(0, 0);
}

/**
 * 温泉地カードのHTMLを生成（温泉地詳細ページへのリンク付き）
 * @param {object} onsen - 温泉データ
 * @param {number} hotelCount - 掲載中の宿数
 * @returns {string} カードのHTML文字列
 */
function renderOnsenCard(onsen, hotelCount) {
  return `
    <a href="/onsen/${onsen.id}" class="card onsen-card onsen-card-link">
      <div class="card-image">
        <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
        ${onsen.category ? `<span class="card-badge onsen">${onsen.category}</span>` : ''}
        ${hotelCount > 0 ? `<span class="hotel-count-badge">宿 ${hotelCount}件</span>` : ''}
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span class="spring-type-badge">♨ ${onsen.spring_type}</span>
        </div>
        <h3 class="card-title">${onsen.name}</h3>
        <p class="card-desc">${onsen.description}</p>
        <div class="card-tags">
          ${onsen.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-link-hint">宿一覧を見る →</div>
      </div>
    </a>
  `;
}

/**
 * 詳細ページのアニメーション設定
 */
function setupDetailAnimations() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 100);
  });
}

// 泉質の傾向を一言で（同数の泉質があるときに「最も多い」と言わない）
function spring_phrase(springs, unknown = 0) {
  if (!springs.length) return '泉質は施設によって異なります。';
  const prefix = unknown ? '泉質を確認できた温泉地では、' : '';
  const note = unknown ? `（ほか${unknown}か所は施設により異なる）` : '';
  if (springs.length === 1) return unknown ? `${prefix}${springs[0][0]}です${note}。` : `泉質はすべて${springs[0][0]}です。`;
  const max = springs[0][1];
  const top = springs.filter(([, v]) => v === max).map(([k]) => k);
  if (top.length === 1) return `${prefix || '泉質は'}${prefix ? top[0] + 'が最も多くなっています' : top[0] + 'が最も多くなっています'}${note}。`;
  return `${prefix || '泉質は'}${top.join('・')}がそれぞれ${max}か所です${note}。`;
}

// 名前の列挙（多いときは先頭だけ＋「など」）
function list_names(items, max = 6) {
  return items.slice(0, max).map(o => o.name).join('、') + (items.length > max ? ' など' : '');
}

/**
 * 都道府県ページの要約・早見表・よくある質問をデータから組み立てる
 */
function build_prefecture_answer(prefecture, onsenItems) {
  const pref = prefecture.name;
  if (!onsenItems.length) return { lead: '', facts: [], faqs: [] };

  // 泉質の内訳（多い順）
  const counts = {};
  onsenItems.filter(o => o.category).forEach(o => { counts[o.category] = (counts[o.category] || 0) + 1; });
  const springs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const spring_text = springs.map(([k, v]) => `${k}${v}か所`).join('・');

  const hotel_count = onsenItems.reduce((n, o) => n + getHotelsByOnsen(o.id).length, 0);

  const lead = `${pref}で日本温泉が紹介している温泉地は${onsenItems.length}か所です（${list_names(onsenItems)}）。`
    + spring_phrase(springs, onsenItems.filter(o => !o.category).length);

  const facts = [
    { label: '掲載温泉地', value: `${onsenItems.length}か所` },
    { label: '主な温泉地', value: list_names(onsenItems) },
    { label: '泉質の内訳', value: spring_text },
    { label: '掲載宿', value: hotel_count ? `${hotel_count}軒` : '' },
  ];

  const faqs = [];
  faqs.push({
    q: `${pref}にはどんな温泉地がありますか？`,
    a: `日本温泉では${pref}の温泉地を${onsenItems.length}か所紹介しています。` + onsenItems.slice(0, 4).map(o => `${o.name}${o.category ? `（${o.category}）` : ''}は、${o.description}`).join(' ') ,
  });
  if (springs.length) faqs.push({ q: `${pref}の温泉はどんな泉質が多いですか？`, a: `掲載している温泉地では、${spring_text}です（泉質が施設ごとに異なる温泉地を除く）。` });
  return { lead, facts, faqs };
}
