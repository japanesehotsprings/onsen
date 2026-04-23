/**
 * トップページ
 * ヒーローセクション・地域選択・おすすめ温泉宿ピックアップを表示
 * ※「都道府県一覧」セクションを削除し「おすすめ温泉宿」セクションを追加
 */

import { regions, prefectures, getPrefecturesByRegion } from '../data/prefectures.js';
import { onsenList } from '../data/onsen.js';
import { getRandomHotels } from '../data/hotels.js';
import { specialList } from '../data/specials.js';
import { articleList } from '../data/articles.js';
import { navigateTo } from '../router.js';
import { updateSEO } from '../seo.js';

/**
 * おすすめ温泉をランダムに取得
 * @returns {Array} ランダムに並び替えた温泉データ8件
 */
function getPickupOnsen() {
  const shuffled = [...onsenList].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

/**
 * トップページのHTMLを生成して表示する
 */
export function renderHome() {
  updateSEO('全国47都道府県の温泉地を探そう', '日本全国47都道府県の温泉地やおすすめの温泉宿を検索できる温泉専門メディア。泉質・地域・特徴から全国の名湯・秘湯を探そう。');
  const app = document.getElementById('app');
  const pickupOnsen = getPickupOnsen();
  const featuredHotels = getRandomHotels(8);

  app.innerHTML = `
    <section class="hero" id="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-sub"></span>
          日本温泉
        </h1>
        <p class="hero-subtitle">♨ 47都道府県の温泉地・温泉宿を探す</p>
        <div class="search-box" id="hero-search">
          <div class="search-input-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" id="search-input" class="search-input" placeholder="温泉地・泉質・宿名を検索" autocomplete="off">
          </div>
          <button class="search-btn" id="search-btn">検索</button>
        </div>
        <div class="hero-tags">
          <span class="hero-tag" data-q="秘湯">秘湯</span>
          <span class="hero-tag" data-q="硫黄泉">硫黄泉</span>
          <span class="hero-tag" data-q="美肌の湯">美肌の湯</span>
          <span class="hero-tag" data-q="露天風呂">露天風呂</span>
          <span class="hero-tag" data-q="日本三名泉">日本三名泉</span>
          <span class="hero-tag" data-q="インクルーシブ">インクルーシブ</span>
        </div>
      </div>
    </section>

    <section class="section region-section" id="regions">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">地域から探す</h2>
          <p class="section-desc">全国8つの地域から行きたい温泉地を見つける</p>
        </div>
        <div class="region-grid">
          ${regions.map(region => {
    const prefs = getPrefecturesByRegion(region.id);
    return `
              <div class="region-card" data-region="${region.id}">
                <div class="region-card-header">
                  <h3 class="region-name">${region.name}</h3>
                  <span class="region-count">${prefs.length}都道府県</span>
                </div>
                <div class="region-prefectures">
                  ${prefs.map(p => `
                    <a href="/onsen/prefecture/${p.id}" class="prefecture-chip">${p.name}</a>
                  `).join('')}
                </div>
              </div>
            `;
  }).join('')}
        </div>
      </div>
    </section>

    <section class="section pickup-section" id="pickup">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">注目の温泉地</h2>
          <p class="section-desc">今おすすめの名湯・秘湯をご紹介</p>
        </div>
        <div class="card-grid onsen-pickup-grid">
          ${pickupOnsen.map(onsen => `
            <a href="/onsen/onsen/${onsen.id}" class="card onsen-card-link">
              <div class="card-image">
                <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
                <span class="card-badge onsen">${onsen.category}</span>
              </div>
              <div class="card-content">
                <div class="card-meta">
                  <span class="spring-type">♨ ${onsen.spring_type}</span>
                  <span class="card-prefecture">${prefectures.find(p => p.id === onsen.prefecture)?.name || ''}</span>
                </div>
                <h3 class="card-title">${onsen.name}</h3>
                <p class="card-desc">${onsen.description}</p>
                <div class="card-tags">
                  ${onsen.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section hotel-feature-section" id="featured-hotels">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">おすすめ温泉宿</h2>
          <p class="section-desc">全国の名旅館・温泉ホテルをピックアップ</p>
        </div>
        <div class="hotel-grid">
          ${featuredHotels.map(hotel => {
    const onsen = onsenList.find(o => o.id === hotel.onsen_id);
    return `
              <a href="/onsen/hotel/${hotel.id}" class="hotel-card hotel-card-link">
                <div class="hotel-card-image">
                  <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
                  <span class="hotel-type-badge">${hotel.type}</span>
                </div>
                <div class="hotel-card-content">
                  <p class="hotel-onsen-name">♨ ${onsen?.name || '温泉地'}</p>
                  <h3 class="hotel-card-title">${hotel.name}</h3>
                  <p class="hotel-card-price">${hotel.price}</p>
                  <p class="hotel-card-desc">${hotel.description}</p>
                  <div class="hotel-card-tags">
                    ${hotel.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                  </div>
                </div>
              </a>
            `;
  }).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="specials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">特集・テーマ別温泉</h2>
          <p class="section-desc">季節やシーンで選ぶ、とっておきの温泉旅行</p>
        </div>
        <div class="hotel-grid">
          ${specialList.slice(0, 4).map(s => `
            <a href="/onsen/special/${s.id}" class="hotel-card hotel-card-link">
              <div class="hotel-card-image" style="background:${s.color}33;display:flex;align-items:center;justify-content:center;min-height:160px">
                <span style="font-size:3.5rem">${s.icon}</span>
              </div>
              <div class="hotel-card-body">
                <span style="font-size:0.75rem;color:var(--color-text-muted)">${s.subtitle}</span>
                <h3 class="hotel-card-name">${s.title}</h3>
              </div>
            </a>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:1.5rem">
          <a href="/onsen/specials" class="btn btn-outline">特集をもっと見る</a>
        </div>
      </div>
    </section>

    <section class="section" id="articles">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">温泉コラム・記事</h2>
          <p class="section-desc">温泉の楽しみ方をもっと深く知る</p>
        </div>
        <div class="hotel-grid">
          ${articleList.slice(0, 4).map(a => `
            <a href="/onsen/article/${a.id}" class="hotel-card hotel-card-link">
              <div class="hotel-card-image">
                <img src="${a.image}" alt="${a.title}" loading="lazy">
                <span class="hotel-type-badge">${a.categoryLabel}</span>
              </div>
              <div class="hotel-card-body">
                <span style="font-size:0.75rem;color:var(--color-text-muted)">${a.published}</span>
                <h3 class="hotel-card-name" style="font-size:0.9rem">${a.title}</h3>
              </div>
            </a>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:1.5rem">
          <a href="/onsen/articles" class="btn btn-outline">記事をもっと見る</a>
        </div>
      </div>
    </section>
  `;

  // 検索イベントの設定
  setupSearchEvents();
  // ヒーロータグの設定
  setupHeroTags();
  // アニメーションの設定
  setupAnimations();
}

/**
 * 検索イベントをセットアップ
 */
function setupSearchEvents() {
  const input = document.getElementById('search-input');
  const btn = document.getElementById('search-btn');

  function doSearch() {
    const query = input.value.trim();
    if (query) {
      navigateTo(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

/**
 * ヒーローセクションのクイックタグをセットアップ
 */
function setupHeroTags() {
  document.querySelectorAll('.hero-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.dataset.q;
      navigateTo(`/search?q=${encodeURIComponent(q)}`);
    });
  });
}

/**
 * スクロールアニメーションをセットアップ
 */
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.card, .hotel-card, .region-card, .section-header').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}
