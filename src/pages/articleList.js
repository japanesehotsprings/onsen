import { articleList } from '../data/articles.js';
import { updateSEO } from '../seo.js';

export function renderArticleList() {
    updateSEO('温泉コラム・特集記事', '温泉のランキング・泉質ガイド・旅行記など、温泉に関するコラム・特集記事一覧。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>コラム・記事</span>
                </nav>
                <h1 class="page-title">温泉コラム・特集記事</h1>
                <p class="page-desc">温泉ランキング・泉質ガイド・旅行記など</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="hotel-grid">
                    ${articleList.map(a => `
                        <a href="/onsen/article/${a.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${a.image}" alt="${a.title}" loading="lazy">
                                <span class="hotel-type-badge">${a.categoryLabel}</span>
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name" style="font-size:0.98rem;line-height:1.5">${a.title}</h3>
                                <p class="hotel-card-desc">${a.description.slice(0, 60)}…</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
