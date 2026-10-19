/**
 * 温泉宿詳細ページ
 * 宿の基本情報・設備情報・予約サイトへのリンクを表示する
 */

import { getHotelById } from '../data/hotels.js';
import { onsenList } from '../data/onsen.js';
import { getPrefectureById } from '../data/prefectures.js';
import { updateSEO, absolute_url } from '../seo.js';
import { getHotelsByOnsen } from '../data/hotels.js';
import { summary_box, faq_section, faq_ld } from '../components/answer.js';
import { inn_owner_note } from './forInns.js';

/**
 * 予約サイトのURLを生成する
 * @param {object} hotel - 宿データ
 * @returns {Array} 予約サイトの情報配列
 */
function buildBookingLinks(hotel) {
  const encoded = encodeURIComponent(hotel.name);
  // 未設定（空・"#"）のリンクは各サイトの宿名検索にする
  const urls = Object.fromEntries(Object.entries(hotel.bookingUrls || {}).filter(([, u]) => u && u !== '#'));
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

  const onsen = onsenList.find(o => o.id === hotel.onsen_id);
  const prefecture = onsen ? getPrefectureById(onsen.prefecture) : null;
  const bookingLinks = buildBookingLinks(hotel);

  const answer = build_hotel_answer(hotel, onsen, prefecture, bookingLinks);

  updateSEO(`${hotel.name}（${onsen?.name || '温泉宿'}）の宿泊情報・予約`, hotel.description, [{
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    'name': hotel.name,
    'description': hotel.description,
    ...(hotel.address ? { 'address': { '@type': 'PostalAddress', 'streetAddress': hotel.address, 'addressRegion': prefecture?.name || '', 'addressCountry': 'JP' } } : {}),
    'image': absolute_url(hotel.image),
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': prefecture?.name || '',
      'addressCountry': 'JP'
    },
    ...(onsen ? { 'containedInPlace': { '@type': 'TouristAttraction', 'name': onsen.name } } : {})
  }, faq_ld(answer.faqs)].filter(Boolean), { image: hotel.image });

  app.innerHTML = `
    <div class="hotel-detail-hero">
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-detail-hero-bg">
      <div class="hotel-detail-hero-overlay"></div>
      <div class="hotel-detail-hero-content">
        <nav class="breadcrumb breadcrumb-light">
          <a href="/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          ${prefecture ? `<a href="/prefecture/${onsen.prefecture}">${prefecture.name}の温泉</a><span class="breadcrumb-separator">›</span>` : ''}
          ${onsen ? `<a href="/onsen/${onsen.id}">${onsen.name}</a><span class="breadcrumb-separator">›</span>` : ''}
          <span>${hotel.name}</span>
        </nav>
        ${hotel.type ? `<div class="hotel-detail-type-badge">${hotel.type}</div>` : ''}
        <h1 class="hotel-detail-title">${hotel.name}</h1>
        ${onsen ? `<p class="hotel-detail-onsen">♨ ${onsen.name}（${onsen.spring_type}）</p>` : ''}
      </div>
    </div>

    <section class="section hotel-detail-info-section">
      <div class="container">
        <div class="hotel-detail-grid">

          <!-- 基本情報カード -->
          <div class="hotel-detail-main">
            ${hotel.notice ? `<p class="hotel-notice" role="note">${hotel.notice}</p>` : ''}
            ${summary_box(`${hotel.name}の要点`, answer.lead, answer.facts, '料金・空室・設備は予約サイトや宿の公式情報でご確認ください。')}

            ${onsen ? `
            <div class="hotel-detail-card hotel-detail-onsen-card">
              <h2 class="hotel-detail-card-title">温泉地情報</h2>
              <div class="hotel-onsen-info">
                <img src="${onsen.image}" alt="${onsen.name}" class="hotel-onsen-thumb">
                <div class="hotel-onsen-text">
                  <h3 class="hotel-onsen-name">
                    <a href="/onsen/${onsen.id}">${onsen.name}</a>
                  </h3>
                  <p class="hotel-onsen-spring">♨ ${onsen.spring_type}</p>
                  <p class="hotel-onsen-desc">${onsen.description}</p>
                </div>
              </div>
            </div>
            ` : ''}
            ${faq_section(`${hotel.name}のよくある質問`, answer.faqs)}
            ${inn_owner_note(hotel.name)}
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
                  <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="booking-link-btn" data-site="${link.name}" style="--booking-color: ${link.color};">
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
                ※ 料金・空室はリンク先の予約サイトでご確認ください。
              </p>
            </div>


            ${onsen ? `
            <div class="back-to-onsen">
              <a href="/onsen/${onsen.id}" class="btn-back-onsen">
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

/**
 * 宿ページの要約・早見表・よくある質問をデータから組み立てる
 * 宿名と所在地はじゃらんの宿ページで確認したもの。料金・設備などの裏取りできない項目は載せない
 */
function build_hotel_answer(hotel, onsen, prefecture, bookingLinks) {
  const pref = prefecture?.name || '';
  const ac = onsen?.access || {};
  const place = onsen ? `${pref}の${onsen.name}${hotel.near ? 'の周辺' : ''}` : pref;
  const lead = `${hotel.name}は${place}にある宿です。` + (hotel.address ? `所在地は${hotel.address}。` : '') + (hotel.notice ? hotel.notice : '');

  const facts = [
    { label: '温泉地', value: onsen ? `${onsen.name}${hotel.near ? 'の周辺' : ''}（${pref}）` : pref },
    { label: '所在地', value: hotel.address },
    { label: '温泉地の泉質', value: onsen?.category && !hotel.near ? onsen.spring_type : '' },
    { label: '最寄り駅', value: ac.nearest_station },
  ];

  const faqs = [];
  if (onsen) {
    faqs.push({
      q: `${hotel.name}はどこの温泉地にありますか？`,
      a: `${place}にあります。` + (hotel.address ? `所在地は${hotel.address}です。` : '') + (onsen.category && !hotel.near ? `${onsen.name}の泉質は${onsen.spring_type}です（宿によって源泉が異なる場合があります）。` : ''),
    });
  }
  if (ac.by_train) {
    faqs.push({
      q: `${hotel.name}への行き方は？`,
      a: `${onsen.name}へは、${ac.by_train.replace(/。$/, '')}が目安です。宿までの送迎や詳しい道順は宿にご確認ください。`,
    });
  }
  faqs.push({
    q: `${hotel.name}の料金や空室はどこで確認できますか？`,
    a: `${bookingLinks.map(b => b.name).join('・')}で最新の料金と空室を確認できます。このページの「予約サイトで確認」から各サイトへ移動できます。`,
  });
  const others = onsen ? getHotelsByOnsen(onsen.id).filter(h => h.id !== hotel.id) : [];
  if (others.length) {
    faqs.push({
      q: `${onsen.name}にはほかにどんな宿がありますか？`,
      a: `日本温泉では${others.slice(0, 5).map(h => h.name).join('、')}${others.length > 5 ? ' など' : ''}も掲載しています。`,
    });
  }
  return { lead, facts, faqs };
}
