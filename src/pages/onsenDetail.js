/**
 * 温泉地詳細ページ
 * 特定の温泉地に属する宿一覧を表示する
 */

import { onsenList } from '../data/onsen.js';
import { getHotelsByOnsen } from '../data/hotels.js';
import { getPrefectureById } from '../data/prefectures.js';

/**
 * 温泉地詳細ページのHTMLを生成して表示する
 * @param {object} context - ルーターから渡されるコンテキスト
 */
export function renderOnsenDetail({ params }) {
  const app = document.getElementById('app');
  const onsen = onsenList.find(o => o.id === params.id);

  if (!onsen) {
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

  const prefecture = getPrefectureById(onsen.prefecture);
  const hotels = getHotelsByOnsen(onsen.id);

  app.innerHTML = `
    <div class="prefecture-hero onsen-hero">
      <img src="${onsen.image}" alt="${onsen.name}" class="prefecture-hero-bg">
      <div class="prefecture-hero-overlay"></div>
      <div class="prefecture-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="#/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <a href="#/prefecture/${onsen.prefecture}">${prefecture?.name || ''}の温泉</a>
          <span class="breadcrumb-separator">›</span>
          <span>${onsen.name}</span>
        </nav>
        <div class="onsen-hero-badge">♨ ${onsen.category}</div>
        <h1 class="prefecture-hero-title">${onsen.name}</h1>
        <p class="prefecture-hero-kana">${onsen.spring_type}</p>
      </div>
    </div>

    <section class="section onsen-info-section">
      <div class="container">
        <div class="onsen-info-card">
          <div class="onsen-info-text">
            <h2 class="onsen-info-title">この温泉地について</h2>
            <p class="onsen-info-desc">${onsen.description}</p>
            <div class="onsen-info-tags">
              ${onsen.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="onsen-info-meta">
            <div class="onsen-meta-item">
              <span class="onsen-meta-label">泉質</span>
              <span class="onsen-meta-value">♨ ${onsen.spring_type}</span>
            </div>
            <div class="onsen-meta-item">
              <span class="onsen-meta-label">エリア</span>
              <span class="onsen-meta-value">${prefecture?.name || ''}</span>
            </div>
            <div class="onsen-meta-item">
              <span class="onsen-meta-label">宿泊施設数</span>
              <span class="onsen-meta-value">${hotels.length > 0 ? `${hotels.length}件掲載中` : '準備中'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section hotel-list-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${onsen.name}の温泉宿</h2>
          <p class="section-desc">${hotels.length > 0 ? `${hotels.length}件の宿をご紹介` : 'この温泉地の宿情報は近日公開予定です'}</p>
        </div>

        ${hotels.length > 0 ? `
          <div class="hotel-grid">
            ${hotels.map(hotel => renderHotelCard(hotel)).join('')}
          </div>
        ` : `
          <div class="empty-state-container">
            <div class="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 21h18"/>
                <path d="M5 21V7l8-4 8 4v14"/>
                <path d="M9 21v-4h6v4"/>
              </svg>
            </div>
            <h3>宿情報は近日公開予定です</h3>
            <p>この温泉地の宿情報を準備中です。しばらくお待ちください。</p>
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
 * 温泉宿カードのHTMLを生成
 * @param {object} hotel - 宿データ
 * @returns {string} カードのHTML文字列
 */
function renderHotelCard(hotel) {
  return `
    <a href="#/hotel/${hotel.id}" class="hotel-card hotel-card-link">
      <div class="hotel-card-image">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
        <span class="hotel-type-badge">${hotel.type}</span>
      </div>
      <div class="hotel-card-content">
        <h3 class="hotel-card-title">${hotel.name}</h3>
        <p class="hotel-card-price">
          <span class="price-label">参考料金：</span>
          <span class="price-value">${hotel.price}</span>
        </p>
        <p class="hotel-card-desc">${hotel.description}</p>
        <div class="hotel-card-tags">
          ${hotel.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
}

/**
 * カードのアニメーション設定
 */
function setupDetailAnimations() {
  const cards = document.querySelectorAll('.hotel-card');
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
