import { getArticleById } from '../data/articles.js';
import { onsenList } from '../data/onsen.js';
import { updateSEO } from '../seo.js';

export function renderArticleDetail({ params }) {
    const app = document.getElementById('app');
    const article = getArticleById(params.id);

    if (!article) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/onsen/articles" class="btn btn-primary">記事一覧へ</a></div></div>`;
        return;
    }

    updateSEO(article.title, article.description);

    const relatedOnsen = onsenList.filter(o => article.onsen_ids.includes(o.id));

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero">
            <img src="${article.image}" alt="${article.title}" class="prefecture-hero-bg">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/onsen/articles">コラム・記事</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${article.categoryLabel}</span>
                </nav>
                <div class="onsen-hero-badge">📝 ${article.categoryLabel}</div>
                <h1 class="prefecture-hero-title" style="font-size:clamp(1.2rem,3vw,1.8rem)">${article.title}</h1>
                <p class="prefecture-hero-kana">${article.published}</p>
            </div>
        </div>

        <section class="section">
            <div class="container" style="max-width:800px">
                <div style="line-height:1.9;color:var(--color-text-muted)">
                    ${article.body}
                </div>
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">この記事で紹介した温泉地</h2>
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
