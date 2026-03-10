/**
 * 温泉宿詳細ページ
 * 宿の基本情報・設備情報・予約サイトへのリンクを表示する
 */

import { getHotelById } from '../data/hotels.js';
import { onsenList } from '../data/onsen.js';
import { getPrefectureById } from '../data/prefectures.js';

/**
 * 予約サイトのURLを生成する
 * @param {object} hotel - 宿データ
 * @returns {Array} 予約サイトの情報配列
 */
function buildBookingLinks(hotel) {
  const encoded = encodeURIComponent(hotel.name);
  const urls = hotel.bookingUrls || {};
  return [
    {
      name: 'じゃらん',
      icon: '🟠',
      color: '#e85c24',
      url: urls.jalan || `https://www.jalan.net/00/search/?keyword=${encoded}`,
      desc: 'ポイントが貯まる・使える旅行予約サイト'
    },
    {
      name: '楽天トラベル',
      icon: '🔴',
      color: '#01B902',
      url: urls.rakuten || `https://travel.rakuten.co.jp/yado/search/?f_keyword=${encoded}`,
      desc: '楽天ポイントで宿泊予約'
    },
    {
      name: '一休.com',
      icon: '🌸',
      color: '#1A4679',
      url: urls.ikyu || `https://www.ikyu.com/search/?keyword=${encoded}`,
      desc: '厳選高級旅館・ホテルの宿泊予約'
    },
    {
      name: 'Yahoo!トラベル',
      icon: '',
      color: '#FF0034',
      url: urls.yahoo || `https://travel.yahoo.co.jp/search/?term=${encoded}`,
      desc: 'PayPayポイントで旅行予約'
    },
  ];
}

/**
 * 温泉宿詳細ページのHTMLを生成して表示する
 * @param {object} context - ルーターから渡されるコンテキスト
 */
export function renderHotelDetail({ params }) {
  const app = document.getElementById('app');
  const hotel = getHotelById(params.id);

  if (!hotel) {
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

  const onsen = onsenList.find(o => o.id === hotel.onsen_id);
  const prefecture = onsen ? getPrefectureById(onsen.prefecture) : null;
  const bookingLinks = buildBookingLinks(hotel);

  app.innerHTML = `
    <div class="hotel-detail-hero">
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-detail-hero-bg">
      <div class="hotel-detail-hero-overlay"></div>
      <div class="hotel-detail-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="#/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          ${prefecture ? `<a href="#/prefecture/${onsen.prefecture}">${prefecture.name}の温泉</a><span class="breadcrumb-separator">›</span>` : ''}
          ${onsen ? `<a href="#/onsen/${onsen.id}">${onsen.name}</a><span class="breadcrumb-separator">›</span>` : ''}
          <span>${hotel.name}</span>
        </nav>
        <div class="hotel-detail-type-badge">${hotel.type}</div>
        <h1 class="hotel-detail-title">${hotel.name}</h1>
        ${onsen ? `<p class="hotel-detail-onsen">♨ ${onsen.name}（${onsen.spring_type}）</p>` : ''}
      </div>
    </div>

    <section class="section hotel-detail-info-section">
      <div class="container">
        <div class="hotel-detail-grid">

          <!-- 基本情報カード -->
          <div class="hotel-detail-main">
            <div class="hotel-detail-card">
              <h2 class="hotel-detail-card-title">基本情報</h2>
              <div class="hotel-info-list">
                <div class="hotel-info-row">
                  <span class="hotel-info-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 21v-4h6v4"/>
                    </svg>
                    宿の種類
                  </span>
                  <span class="hotel-info-value">${hotel.type}</span>
                </div>
                <div class="hotel-info-row">
                  <span class="hotel-info-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    参考料金
                  </span>
                  <span class="hotel-info-value price-highlight">${hotel.price}</span>
                </div>
                ${onsen ? `
                <div class="hotel-info-row">
                  <span class="hotel-info-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M8 2h8l2 6-10 4-10-4 2-6z"/><path d="M12 12v10"/>
                    </svg>
                    温泉地
                  </span>
                  <span class="hotel-info-value">
                    <a href="#/onsen/${onsen.id}" class="hotel-info-link">${onsen.name}</a>
                  </span>
                </div>
                <div class="hotel-info-row">
                  <span class="hotel-info-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2C8 2 4 5.5 4 10c0 3 1.5 5.5 4 7v3h8v-3c2.5-1.5 4-4 4-7 0-4.5-4-8-8-8z"/>
                    </svg>
                    泉質
                  </span>
                  <span class="hotel-info-value spring-type-highlight">♨ ${onsen.spring_type}</span>
                </div>
                ` : ''}
                ${prefecture ? `
                <div class="hotel-info-row">
                  <span class="hotel-info-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    エリア
                  </span>
                  <span class="hotel-info-value">
                    <a href="#/prefecture/${onsen.prefecture}" class="hotel-info-link">${prefecture.name}</a>
                  </span>
                </div>
                ` : ''}
              </div>
            </div>

            <div class="hotel-detail-card">
              <h2 class="hotel-detail-card-title">宿の紹介</h2>
              <p class="hotel-detail-desc">${hotel.description}</p>
              <div class="hotel-detail-tags">
                ${hotel.tags.map(t => `<span class="tag tag-highlight">${t}</span>`).join('')}
              </div>
            </div>

            ${onsen ? `
            <div class="hotel-detail-card hotel-detail-onsen-card">
              <h2 class="hotel-detail-card-title">温泉地情報</h2>
              <div class="hotel-onsen-info">
                <img src="${onsen.image}" alt="${onsen.name}" class="hotel-onsen-thumb">
                <div class="hotel-onsen-text">
                  <h3 class="hotel-onsen-name">
                    <a href="#/onsen/${onsen.id}">${onsen.name}</a>
                  </h3>
                  <p class="hotel-onsen-spring">♨ ${onsen.spring_type}</p>
                  <p class="hotel-onsen-desc">${onsen.description}</p>
                </div>
              </div>
            </div>
            ` : ''}
          </div>

          <!-- サイドバー：予約リンク -->
          <aside class="hotel-detail-sidebar">
            <div class="booking-card">
              <div class="booking-card-header">
                <h2 class="booking-card-title">予約サイトで確認</h2>
                <p class="booking-card-desc">下記の予約サイトから空室状況・最新料金・プランをご確認ください（掲載がない場合はリンクなし）</p>
              </div>
              <div class="booking-links">
                ${bookingLinks.map(link => `
                  <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="booking-link-btn" style="--booking-color: ${link.color};">
                    <div class="booking-link-info">
                      <span class="booking-link-name">${link.name}</span>
                      <span class="booking-link-desc">${link.desc}</span>
                    </div>
                    <svg class="booking-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                `).join('')}
              </div>
              <p class="booking-notice">
                ※ 料金・空室はリンク先予約サイトにてご確認ください。
                表示価格は参考価格（税別・サービス料別の場合あり）です。
              </p>
            </div>

            <div class="hotel-price-card">
              <h3 class="hotel-price-card-title">参考料金</h3>
              <p class="hotel-price-large">${hotel.price}</p>
              <p class="hotel-price-note">※ 1名あたり・シーズン・プランにより変動します</p>
            </div>

            ${onsen ? `
            <div class="back-to-onsen">
              <a href="#/onsen/${onsen.id}" class="btn-back-onsen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                ${onsen.name}の宿一覧に戻る
              </a>
            </div>
            ` : ''}

          </aside>

        </div>
      </div>
    </section>
  `;

  // アニメーション設定
  setupAnimations();
  // ページトップへスクロール
  window.scrollTo(0, 0);
}

/**
 * フェードインアニメーション設定
 */
function setupAnimations() {
  const cards = document.querySelectorAll('.hotel-detail-card, .booking-card, .hotel-price-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 100);
  });
}
