import { onsenList } from '../data/onsen.js';
import { getHotelsByOnsen } from '../data/hotels.js';
import { getPrefectureById } from '../data/prefectures.js';
import { updateSEO } from '../seo.js';

export function renderOnsenDetail({ params }) {
  const app = document.getElementById('app');
  const onsen = onsenList.find(o => o.id === params.id);

  if (!onsen) {
    updateSEO('ページが見つかりません', '');
    app.innerHTML = `
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">ページが見つかりません</h1>
          <a href="/onsen/" class="btn btn-primary">トップに戻る</a>
        </div>
      </div>
    `;
    return;
  }

  const prefecture = getPrefectureById(onsen.prefecture);
  const hotels = getHotelsByOnsen(onsen.id);

  updateSEO(`${onsen.name}（${prefecture?.name || ''}）の温泉宿・詳細情報`, onsen.description, {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    'name': onsen.name,
    'description': onsen.description,
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': prefecture?.name || '',
      'addressCountry': 'JP'
    },
    'amenityFeature': { '@type': 'LocationFeatureSpecification', 'name': '温泉', 'value': true }
  });

  const hasDayTrip = onsen.day_trip?.available;
  const hasFootbath = onsen.footbath?.available;

  app.innerHTML = `
    <div class="prefecture-hero onsen-hero">
      <img src="${onsen.image}" alt="${onsen.name}" class="prefecture-hero-bg">
      <div class="prefecture-hero-overlay"></div>
      <div class="prefecture-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="/onsen/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <a href="/onsen/prefecture/${onsen.prefecture}">${prefecture?.name || ''}の温泉</a>
          <span class="breadcrumb-separator">›</span>
          <span>${onsen.name}</span>
        </nav>
        <div class="onsen-hero-badge">♨ ${onsen.category}</div>
        <h1 class="prefecture-hero-title">${onsen.name}</h1>
        <p class="prefecture-hero-kana">${onsen.spring_type}</p>
        <div class="onsen-hero-badges">
          ${hasDayTrip ? '<span class="onsen-feature-badge">日帰り入浴可</span>' : ''}
          ${hasFootbath ? '<span class="onsen-feature-badge">足湯あり</span>' : ''}
          ${onsen.drinkable ? '<span class="onsen-feature-badge">飲泉可</span>' : ''}
        </div>
      </div>
    </div>

    <section class="section onsen-detail-section">
      <div class="container">
        <div class="onsen-detail-grid">

          <div class="onsen-detail-main">
            <div class="onsen-detail-card">
              <h2 class="onsen-detail-heading">この温泉地について</h2>
              <p class="onsen-detail-desc">${onsen.description}</p>
              <div class="onsen-info-tags">
                ${onsen.tags.map(t => `<span class="tag">${t}</span>`).join('')}
              </div>
            </div>

            ${onsen.history ? `
            <div class="onsen-detail-card">
              <h2 class="onsen-detail-heading">
                <span class="onsen-heading-icon">📜</span>歴史・由来
              </h2>
              <p class="onsen-detail-history">${onsen.history}</p>
            </div>
            ` : ''}
          </div>

          <div class="onsen-detail-sidebar">
            <div class="onsen-sidebar-card">
              <h3 class="onsen-sidebar-title">基本情報</h3>
              <div class="onsen-info-list">
                <div class="onsen-info-row">
                  <span class="onsen-info-label">泉質</span>
                  <span class="onsen-info-value">♨ ${onsen.spring_type}</span>
                </div>
                <div class="onsen-info-row">
                  <span class="onsen-info-label">エリア</span>
                  <span class="onsen-info-value">${prefecture?.name || ''}</span>
                </div>
                ${onsen.effects ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">主な効能</span>
                  <span class="onsen-info-value onsen-effects">${onsen.effects.map(e => `<span class="effect-tag">${e}</span>`).join('')}</span>
                </div>` : ''}
                <div class="onsen-info-row">
                  <span class="onsen-info-label">掲載宿</span>
                  <span class="onsen-info-value">${hotels.length > 0 ? `${hotels.length}件` : '準備中'}</span>
                </div>
              </div>
            </div>

            ${hasDayTrip ? `
            <div class="onsen-sidebar-card onsen-sidebar-card--highlight">
              <h3 class="onsen-sidebar-title">
                <span class="onsen-heading-icon">🛁</span>日帰り入浴
              </h3>
              <div class="onsen-info-list">
                <div class="onsen-info-row">
                  <span class="onsen-info-label">利用</span>
                  <span class="onsen-info-value onsen-available">利用可能</span>
                </div>
                ${onsen.day_trip.price ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">料金</span>
                  <span class="onsen-info-value">${onsen.day_trip.price}</span>
                </div>` : ''}
                ${onsen.day_trip.hours ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">時間</span>
                  <span class="onsen-info-value">${onsen.day_trip.hours}</span>
                </div>` : ''}
              </div>
            </div>
            ` : ''}

            ${hasFootbath ? `
            <div class="onsen-sidebar-card">
              <h3 class="onsen-sidebar-title">
                <span class="onsen-heading-icon">🦶</span>足湯
              </h3>
              <div class="onsen-info-list">
                <div class="onsen-info-row">
                  <span class="onsen-info-label">場所</span>
                  <span class="onsen-info-value">${onsen.footbath.location}</span>
                </div>
                <div class="onsen-info-row">
                  <span class="onsen-info-label">料金</span>
                  <span class="onsen-info-value">${onsen.footbath.free ? '<span class="onsen-free">無料</span>' : '有料'}</span>
                </div>
              </div>
            </div>
            ` : ''}

            ${onsen.access ? `
            <div class="onsen-sidebar-card">
              <h3 class="onsen-sidebar-title">
                <span class="onsen-heading-icon">🚃</span>アクセス
              </h3>
              <div class="onsen-info-list">
                ${onsen.access.nearest_station ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">最寄り駅</span>
                  <span class="onsen-info-value">${onsen.access.nearest_station}</span>
                </div>` : ''}
                ${onsen.access.by_train ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">電車</span>
                  <span class="onsen-info-value">${onsen.access.by_train}</span>
                </div>` : ''}
                ${onsen.access.by_car ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">車</span>
                  <span class="onsen-info-value">${onsen.access.by_car}</span>
                </div>` : ''}
                <div class="onsen-info-row">
                  <span class="onsen-info-label">駐車場</span>
                  <span class="onsen-info-value">${onsen.access.parking ? 'あり' : 'なし'}</span>
                </div>
              </div>
            </div>
            ` : ''}
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
                <path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 21v-4h6v4"/>
              </svg>
            </div>
            <h3>宿情報は近日公開予定です</h3>
            <p>この温泉地の宿情報を準備中です。しばらくお待ちください。</p>
          </div>
        `}
      </div>
    </section>
  `;

  setupDetailAnimations();
  window.scrollTo(0, 0);
}

function renderHotelCard(hotel) {
  return `
    <a href="/onsen/hotel/${hotel.id}" class="hotel-card hotel-card-link">
      <div class="hotel-card-image">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
        <span class="hotel-type-badge">${hotel.type}</span>
      </div>
      <div class="hotel-card-body">
        <h3 class="hotel-card-name">${hotel.name}</h3>
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
