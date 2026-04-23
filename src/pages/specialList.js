import { specialList } from '../data/specials.js';
import { updateSEO } from '../seo.js';

export function renderSpecialList() {
    updateSEO('特集・テーマ別温泉', '季節・シーン別の温泉特集。雪見露天・紅葉温泉・一人旅・カップル向けなど目的別に温泉地・温泉宿を紹介。');
    const app = document.getElementById('app');

    const seasonal = specialList.filter(s => s.season);
    const scene = specialList.filter(s => s.scene);

    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>特集</span>
                </nav>
                <h1 class="page-title">特集・テーマ別温泉</h1>
                <p class="page-desc">季節やシーンに合わせた、とっておきの温泉特集</p>
            </div>
        </div>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">季節の特集</h2>
                    <p class="section-desc">四季折々の温泉の楽しみ方</p>
                </div>
                <div class="hotel-grid">
                    ${seasonal.map(s => renderSpecialCard(s)).join('')}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">シーン・目的別特集</h2>
                    <p class="section-desc">旅のスタイルで選ぶ温泉</p>
                </div>
                <div class="hotel-grid">
                    ${scene.map(s => renderSpecialCard(s)).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function renderSpecialCard(s) {
    const imageArea = s.image
        ? `<div class="hotel-card-image">
               <img src="${s.image}" alt="${s.title}" loading="lazy">
               <span class="hotel-type-badge">${s.subtitle}</span>
           </div>`
        : `<div class="hotel-card-image" style="background:linear-gradient(135deg,${s.color}18 0%,${s.color}44 100%);display:flex;align-items:center;justify-content:center;height:200px;">
               <span style="font-size:4.5rem;filter:drop-shadow(0 6px 16px ${s.color}88)">${s.icon}</span>
           </div>`;
    return `
        <a href="/onsen/special/${s.id}" class="hotel-card hotel-card-link">
            ${imageArea}
            <div class="hotel-card-body">
                <span style="font-size:0.72rem;color:var(--color-primary);font-weight:600;letter-spacing:0.06em">${s.subtitle}</span>
                <h3 class="hotel-card-name">${s.title}</h3>
                <p class="hotel-card-desc">${s.description.slice(0, 60)}…</p>
            </div>
        </a>
    `;
}
