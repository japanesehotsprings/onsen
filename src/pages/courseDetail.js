import { getCourseById } from '../data/courses.js';
import { onsenList } from '../data/onsen.js';
import { getHotelById } from '../data/hotels.js';
import { spots } from '../data/spots.js';
import { gourmet } from '../data/gourmet.js';
import { updateSEO } from '../seo.js';

export function renderCourseDetail({ params }) {
    const app = document.getElementById('app');
    const course = getCourseById(params.id);

    if (!course) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/courses" class="btn btn-primary">コース一覧へ</a></div></div>`;
        return;
    }

    updateSEO(course.title, course.description);

    const onsen = onsenList.find(o => o.id === course.onsen_id);
    const hotel = getHotelById(course.hotel_id);
    const courseSpots = spots.filter(s => course.spot_ids.includes(s.id));
    const courseGourmet = gourmet.filter(g => course.gourmet_ids.includes(g.id));

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero">
            <img src="${course.image}" alt="${course.title}" class="prefecture-hero-bg">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/courses">モデルコース</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${course.title}</span>
                </nav>
                <div class="onsen-hero-badge">🗓 ${course.days}日間プラン</div>
                <h1 class="prefecture-hero-title">${course.title}</h1>
                <p class="prefecture-hero-kana">${course.subtitle}</p>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container">
                <p style="font-size:1.1rem;line-height:1.9;max-width:800px;color:var(--color-text-muted)">${course.description}</p>
            </div>
        </section>

        <section class="section">
            <div class="container" style="max-width:800px">
                <h2 class="section-title">スケジュール</h2>
                ${course.itinerary.map(day => `
                    <div style="margin-bottom:2rem">
                        <h3 style="color:var(--color-primary);margin-bottom:1rem">${day.day}日目</h3>
                        <div style="border-left:2px solid var(--color-primary);padding-left:1.5rem">
                            ${day.items.map(item => `
                                <div style="margin-bottom:1rem;display:flex;gap:1rem">
                                    <span style="min-width:3.5rem;color:var(--color-primary);font-weight:600">${item.time}</span>
                                    <span style="color:var(--color-text-muted)">${item.label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        ${onsen ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">温泉地</h2>
                <a href="/onsen/onsen/${onsen.id}" class="hotel-card hotel-card-link" style="max-width:400px;display:block">
                    <div class="hotel-card-image">
                        <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
                        <span class="hotel-type-badge">${onsen.category}</span>
                    </div>
                    <div class="hotel-card-body">
                        <h3 class="hotel-card-name">${onsen.name}</h3>
                        <p class="hotel-card-desc">${onsen.description.slice(0, 60)}…</p>
                    </div>
                </a>
            </div>
        </section>
        ` : ''}

        ${hotel ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">おすすめの宿</h2>
                <a href="/onsen/hotel/${hotel.id}" class="hotel-card hotel-card-link" style="max-width:400px;display:block">
                    <div class="hotel-card-image">
                        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
                        <span class="hotel-type-badge">${hotel.type}</span>
                    </div>
                    <div class="hotel-card-body">
                        <h3 class="hotel-card-name">${hotel.name}</h3>
                        <p class="hotel-card-desc">${hotel.description.slice(0, 60)}…</p>
                    </div>
                </a>
            </div>
        </section>
        ` : ''}

        ${courseGourmet.length > 0 ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">地元グルメ</h2>
                <div class="hotel-grid">
                    ${courseGourmet.map(g => `
                        <div class="hotel-card">
                            <div class="hotel-card-image">
                                <img src="${g.image}" alt="${g.name}" loading="lazy">
                                <span class="hotel-type-badge">${g.category}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${g.name}</h3>
                                <p class="hotel-card-desc">${g.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;
    window.scrollTo(0, 0);
}
