import { hotelList } from '../data/hotels.js';
import { prefectures } from '../data/prefectures.js';
import { updateSEO } from '../seo.js';

export function renderHotelList() {
  updateSEO('全国の温泉宿・旅館一覧', '全国の有名温泉旅館やリゾートホテル、秘湯の宿からこだわりの宿泊先を見つけて旅行の計画を立てよう。');
  const app = document.getElementById('app');

  const prefMap = {};
  prefectures.forEach(p => { prefMap[p.id] = p.name; });

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/onsen/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <span>温泉宿一覧</span>
        </nav>
        <h1 class="page-title">温泉宿一覧</h1>
        <p class="page-subtitle">全国の名旅館・リゾートホテルを探そう</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="hotel-grid">
          ${hotelList.map(hotel => `
            <a href="/onsen/hotel/${hotel.id}" class="hotel-card animate-on-scroll">
              <div class="hotel-card-image">
                <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
                <div class="hotel-card-badge">${prefMap[hotel.prefecture] || ''}</div>
              </div>
              <div class="hotel-card-content">
                <h3 class="hotel-card-name">${hotel.name}</h3>
                <p class="hotel-card-type">${hotel.type}</p>
                <div class="hotel-card-tags">
                  ${hotel.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;

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
