/**
 * 都道府県一覧ページ
 * 地域ごとにグリッド表示する
 */

import { regions, getPrefecturesByRegion } from '../data/prefectures.js';
import { updateSEO } from '../seo.js';

/**
 * 都道府県一覧ページのHTMLを生成して表示する
 */
export function renderPrefectureList() {
    updateSEO('都道府県から温泉地を探す', '47都道府県の地域別温泉地一覧。北海道から沖縄まで、人気の名湯や秘湯を見つけて旅行の計画を立てよう。');
    const app = document.getElementById('app');

    app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="#/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <span>都道府県一覧</span>
        </nav>
        <h1 class="page-title">都道府県一覧</h1>
        <p class="page-subtitle">47都道府県から旅先を探そう</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        ${regions.map(region => {
        const prefs = getPrefecturesByRegion(region.id);
        return `
            <div class="region-block" id="region-${region.id}">
              <h2 class="region-block-title">
                <span class="region-block-accent"></span>
                ${region.name}
              </h2>
              <div class="prefecture-grid">
                ${prefs.map(p => `
                  <a href="#/prefecture/${p.id}" class="prefecture-card">
                    <div class="prefecture-card-image">
                      <img src="${p.image}" alt="${p.name}" loading="lazy">
                      <div class="prefecture-card-overlay"></div>
                    </div>
                    <div class="prefecture-card-content">
                      <h3 class="prefecture-card-name">${p.name}</h3>
                      <span class="prefecture-card-kana">${p.kana}</span>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          `;
    }).join('')}
      </div>
    </section>
  `;

    // アニメーション設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.prefecture-card, .region-block-title').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // ページトップにスクロール
    window.scrollTo(0, 0);
}
