import { courseList } from '../data/courses.js';
import { updateSEO } from '../seo.js';

export function renderCourseList() {
    updateSEO('エリア別モデルコース', '温泉地を起点にした1泊2日・日帰りのモデルコース。観光スポットやご当地グルメも一緒に楽しめるプランを紹介。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>モデルコース</span>
                </nav>
                <h1 class="page-title">エリア別モデルコース</h1>
                <p class="page-desc">温泉を起点にした旅行プランを紹介。観光・グルメもセットで楽しもう。</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="hotel-grid">
                    ${courseList.map(c => `
                        <a href="/onsen/course/${c.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${c.image}" alt="${c.title}" loading="lazy">
                                <span class="hotel-type-badge">${c.days}日間</span>
                            </div>
                            <div class="hotel-card-body">
                                <span style="font-size:0.75rem;color:var(--color-text-muted)">${c.subtitle}</span>
                                <h3 class="hotel-card-name">${c.title}</h3>
                                <p class="hotel-card-desc">${c.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
