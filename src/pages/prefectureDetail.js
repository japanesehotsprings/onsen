/**
 * 都道府県詳細ページ
 * 都道府県ごとの温泉一覧を表示。各温泉地をクリックすると温泉地詳細ページへ遷移する。
 */

import { getPrefectureById } from '../data/prefectures.js';
import { getOnsenByPrefecture } from '../data/onsen.js';
import { getHotelsByOnsen } from '../data/hotels.js';

/**
 * 都道府県詳細ページのHTMLを生成して表示する
 * @param {object} context - ルーターから渡されるコンテキスト
 */
export function renderPrefectureDetail({ params }) {
  const app = document.getElementById('app');
  const prefecture = getPrefectureById(params.id);

  if (!prefecture) {
    app.innerHTML = `
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">ページが見つかりません</h1>
          <a href="#/" class="btn btn-primary">トップに戻る</a>
        </div>
      </div>
    `;
    return;
  }

  const onsenItems = getOnsenByPrefecture(params.id);

  app.innerHTML = `
    <div class="prefecture-hero">
      <img src="${prefecture.image}" alt="${prefecture.name}" class="prefecture-hero-bg">
      <div class="prefecture-hero-overlay"></div>
      <div class="prefecture-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="#/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <a href="#/prefectures">都道府県一覧</a>
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
    <a href="#/onsen/${onsen.id}" class="card onsen-card onsen-card-link">
      <div class="card-image">
        <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
        <span class="card-badge onsen">${onsen.category}</span>
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
