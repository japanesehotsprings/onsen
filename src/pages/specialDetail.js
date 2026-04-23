import { getSpecialById } from '../data/specials.js';
import { onsenList } from '../data/onsen.js';
import { hotelList } from '../data/hotels.js';
import { updateSEO } from '../seo.js';

export function renderSpecialDetail({ params }) {
    const app = document.getElementById('app');
    const special = getSpecialById(params.id);

    if (!special) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/specials" class="btn btn-primary">特集一覧へ</a></div></div>`;
        return;
    }

    updateSEO(special.title, special.description);

    const relatedOnsen = onsenList.filter(o => special.onsen_ids.includes(o.id));
    const relatedHotels = hotelList.filter(h =>
        special.hotel_ids.includes(h.id) ||
        (special.scene && h.scenes?.includes(special.scene))
    ).slice(0, 6);

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero" style="background:${special.color}44">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/specials">特集</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${special.title}</span>
                </nav>
                <div class="onsen-hero-badge">${special.icon} ${special.subtitle}</div>
                <h1 class="prefecture-hero-title">${special.title}</h1>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container">
                <p style="font-size:1.1rem;line-height:1.9;max-width:800px;color:var(--color-text-muted)">${special.description}</p>
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">おすすめ温泉地</h2>
                </div>
                <div class="hotel-grid">
                    ${relatedOnsen.map(o => `
                        <a href="/onsen/onsen/${o.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${o.image}" alt="${o.name}" loading="lazy">
                                <span class="hotel-type-badge">${o.category}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${o.name}</h3>
                                <p class="hotel-card-desc">${o.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

        ${relatedHotels.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">おすすめ温泉宿</h2>
                </div>
                <div class="hotel-grid">
                    ${relatedHotels.map(h => `
                        <a href="/onsen/hotel/${h.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${h.image}" alt="${h.name}" loading="lazy">
                                <span class="hotel-type-badge">${h.type}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${h.name}</h3>
                                <p class="hotel-card-desc">${h.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
    window.scrollTo(0, 0);
}
