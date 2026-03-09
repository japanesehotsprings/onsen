import { onsenList } from '../data/onsen.js';
import { prefectures } from '../data/prefectures.js';

export function renderOnsenList() {
    const app = document.getElementById('app');

    // 都道府県名を取得するためのマップ
    const prefMap = {};
    prefectures.forEach(p => { prefMap[p.id] = p.name; });

    app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="#/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <span>温泉地一覧</span>
        </nav>
        <h1 class="page-title">温泉地一覧</h1>
        <p class="page-subtitle">全国の名湯・秘湯からお気に入りを見つけよう</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="hotel-grid">
          ${onsenList.map(onsen => `
            <a href="#/onsen/${onsen.id}" class="hotel-card animate-on-scroll">
              <div class="hotel-card-image">
                <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
                <div class="hotel-card-badge">${prefMap[onsen.prefecture] || ''}</div>
              </div>
              <div class="hotel-card-content">
                <h3 class="hotel-card-name">${onsen.name}</h3>
                <p class="hotel-card-type">${onsen.category} | ${onsen.spring_type}</p>
                <div class="hotel-card-tags">
                  ${onsen.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
              </div>
            </a>
          `).join('')}
        </div>
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

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    window.scrollTo(0, 0);
}
