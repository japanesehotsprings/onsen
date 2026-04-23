import { getSpringTypeById } from '../data/springTypes.js';
import { onsenList } from '../data/onsen.js';
import { updateSEO } from '../seo.js';

export function renderSpringTypeDetail({ params }) {
    const app = document.getElementById('app');
    const st = getSpringTypeById(params.id);

    if (!st) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/spring-types" class="btn btn-primary">泉質一覧へ</a></div></div>`;
        return;
    }

    updateSEO(`${st.name}とは？効能・特徴・おすすめ温泉地`, st.description);

    const relatedOnsen = onsenList.filter(o =>
        st.onsen_ids.includes(o.id) ||
        o.spring_type?.includes(st.name.split('（')[0]) ||
        o.category?.includes(st.name.split('（')[0])
    ).slice(0, 6);

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero" style="background:${st.color}33">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/spring-types">泉質から探す</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${st.name}</span>
                </nav>
                <div class="onsen-hero-badge">${st.icon} 泉質ガイド</div>
                <h1 class="prefecture-hero-title">${st.name}</h1>
                <p class="prefecture-hero-kana">${st.nameEn}</p>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container">
                <div class="onsen-info-card">
                    <div class="onsen-info-text">
                        <h2 class="onsen-info-title">${st.name}とは</h2>
                        <p class="onsen-info-desc">${st.description}</p>
                    </div>
                    <div class="onsen-info-meta">
                        <div class="onsen-meta-item">
                            <span class="onsen-meta-label">主な効能</span>
                            <span class="onsen-meta-value">${st.effects.join(' / ')}</span>
                        </div>
                        <div class="onsen-meta-item">
                            <span class="onsen-meta-label">こんな方におすすめ</span>
                            <span class="onsen-meta-value">${st.suitable_for}</span>
                        </div>
                        <div class="onsen-meta-item">
                            <span class="onsen-meta-label">注意事項</span>
                            <span class="onsen-meta-value">${st.caution}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${st.name}の代表的な温泉地</h2>
                    <p class="section-desc">${st.name}が楽しめる全国の温泉地</p>
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
    `;
    window.scrollTo(0, 0);
}
