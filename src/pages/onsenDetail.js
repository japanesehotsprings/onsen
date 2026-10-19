import { onsenList } from '../data/onsen.js';
import { getHotelsByOnsen } from '../data/hotels.js';
import { getPrefectureById } from '../data/prefectures.js';
import { updateSEO, absolute_url } from '../seo.js';
import { springTypeList } from '../data/springTypes.js';
import { summary_box, faq_section, faq_ld, sentence, esc, ACCESS_NOTE } from '../components/answer.js';
import { specialList } from '../data/specials.js';
import { articleList } from '../data/articles.js';

export function renderOnsenDetail({ params }) {
  const app = document.getElementById('app');
  const onsen = onsenList.find(o => o.id === params.id);

  if (!onsen) {
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

  const prefecture = getPrefectureById(onsen.prefecture);
  const hotels = getHotelsByOnsen(onsen.id);

  const answer = build_onsen_answer(onsen, prefecture, hotels);

  updateSEO(`${onsen.name}（${prefecture?.name || ''}）の温泉宿・詳細情報`, onsen.description, [{
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    'name': onsen.name,
    'description': onsen.description,
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': prefecture?.name || '',
      'addressCountry': 'JP'
    },
    'image': absolute_url(onsen.image),
    'amenityFeature': { '@type': 'LocationFeatureSpecification', 'name': '温泉', 'value': true }
  }, faq_ld(answer.faqs)].filter(Boolean), { image: onsen.image });

  // この温泉地が載っている特集・コラム（内部リンク）
  const in_specials = specialList.filter(s => s.onsen_ids.includes(onsen.id));
  const in_articles = articleList.filter(a => a.onsen_ids?.includes(onsen.id));

  const hasDayTrip = onsen.day_trip?.available;
  const hasFootbath = onsen.footbath?.available;

  app.innerHTML = `
    <div class="prefecture-hero onsen-hero">
      <img src="${onsen.image}" alt="${onsen.name}" class="prefecture-hero-bg">
      <div class="prefecture-hero-overlay"></div>
      <div class="prefecture-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <a href="/prefecture/${onsen.prefecture}">${prefecture?.name || ''}の温泉</a>
          <span class="breadcrumb-separator">›</span>
          <span>${onsen.name}</span>
        </nav>
        ${onsen.category ? `<div class="onsen-hero-badge">♨ ${onsen.category}</div>` : ''}
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
            ${summary_box(`${onsen.name}の要点`, answer.lead, answer.facts, ACCESS_NOTE)}

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

            ${faq_section(`${onsen.name}のよくある質問`, answer.faqs)}

            ${in_specials.length || in_articles.length ? `
            <div class="onsen-detail-card">
              <h2 class="onsen-detail-heading">
                <span class="onsen-heading-icon">🔖</span>${onsen.name}が載っている特集・コラム
              </h2>
              <ul class="onsen-related-links">
                ${in_specials.map(s => `<li><a href="/special/${s.id}">特集：${esc(s.title)}</a></li>`).join('')}
                ${in_articles.map(a => `<li><a href="/article/${a.id}">コラム：${esc(a.title)}</a></li>`).join('')}
              </ul>
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
                ${typeof onsen.access.parking === 'boolean' ? `
                <div class="onsen-info-row">
                  <span class="onsen-info-label">駐車場</span>
                  <span class="onsen-info-value">${onsen.access.parking ? 'あり' : 'なし'}</span>
                </div>` : ''}
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
    <a href="/hotel/${hotel.id}" class="hotel-card hotel-card-link">
      <div class="hotel-card-image">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
        ${hotel.type ? `<span class="hotel-type-badge">${hotel.type}</span>` : ''}
      </div>
      <div class="hotel-card-body">
        <h3 class="hotel-card-name">${hotel.name}</h3>
        ${hotel.notice ? `<p class="hotel-card-notice">休業中</p>` : ''}
        ${hotel.price ? `<p class="hotel-card-price"><span class="price-label">参考料金：</span><span class="price-value">${hotel.price}</span></p>` : ''}
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

/**
 * 温泉地ページの要約・早見表・よくある質問をデータから組み立てる
 * 載せるのは裏取り済みの項目（泉質・最寄り駅・行き方）と、泉質ページの一般的な説明だけ
 */
function build_onsen_answer(onsen, prefecture, hotels) {
  const pref = prefecture?.name || '';
  const st = springTypeList.find(s => s.onsen_ids?.includes(onsen.id));
  const ac = onsen.access || {};

  const spring_known = !!onsen.category;
  const lead = (spring_known
    ? `${onsen.name}は${pref}にある温泉地で、泉質は${onsen.spring_type}です。`
    : `${onsen.name}は${pref}にある温泉地です。`) + sentence(onsen.description);

  const facts = [
    { label: '所在地', value: pref },
    { label: '泉質', value: onsen.spring_type },
    { label: '最寄り駅', value: ac.nearest_station },
    { label: '行き方', value: ac.by_train },
    { label: '掲載宿', value: hotels.length ? `${hotels.length}軒` : '' },
  ];

  const faqs = [];
  faqs.push({
    q: `${onsen.name}の泉質は何ですか？`,
    a: spring_known
      ? `${onsen.name}の泉質は${onsen.spring_type}です。` + (st ? sentence(`${st.name}は、${st.description}`) : '')
      : `${onsen.name}の泉質は施設によって異なります。入浴する施設の掲示（温泉の成分・泉質）で確認してください。`,
  });
  if (ac.by_train || ac.nearest_station) {
    faqs.push({
      q: `${onsen.name}への行き方は？`,
      a: [ac.by_train && sentence(ac.by_train), ac.nearest_station && `最寄り駅は${ac.nearest_station}です。`].filter(Boolean).join(''),
    });
  }
  if (hotels.length) {
    const names = hotels.slice(0, 5).map(h => h.name).join('、');
    faqs.push({
      q: `${onsen.name}でおすすめの宿は？`,
      a: `日本温泉では${onsen.name}の宿を${hotels.length}軒掲載しています（${names}${hotels.length > 5 ? ' など' : ''}）。料金の目安や特徴は各宿のページで確認できます。`,
    });
  }
  return { lead, facts, faqs };
}
