import { getArticleById } from '../data/articles.js';
import { onsenList } from '../data/onsen.js';
import { updateSEO, absolute_url } from '../seo.js';
import { faq_section, faq_ld, esc } from '../components/answer.js';

export function renderArticleDetail({ params }) {
    const app = document.getElementById('app');
    const article = getArticleById(params.id);

    if (!article) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/articles" class="btn btn-primary">記事一覧へ</a></div></div>`;
        return;
    }

    const article_ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'image': absolute_url(article.image),
      'inLanguage': 'ja',
      ...(article.published ? { 'datePublished': article.published } : {}),
      ...(article.updated || article.published ? { 'dateModified': article.updated || article.published } : {}),
      ...(article.sources?.length ? { 'citation': article.sources.map(src => ({ '@type': 'CreativeWork', 'name': src.name, 'url': src.url })) } : {}),
      'publisher': { '@type': 'Organization', 'name': '日本温泉' }
    };
    const faqs = article.faqs || [];
    updateSEO(article.title, article.description, faqs.length ? [article_ld, faq_ld(faqs)] : article_ld, { image: article.image });

    // 公開日・更新日（YYYY-MM-DD → YYYY年M月D日）
    const fmt_date = d => d ? d.replace(/^(\d{4})-0?(\d{1,2})-0?(\d{1,2})$/, '$1年$2月$3日') : '';
    const date_text = [
      article.published && `公開 ${fmt_date(article.published)}`,
      article.updated && article.updated !== article.published && `更新 ${fmt_date(article.updated)}`,
    ].filter(Boolean).join('・');

    const relatedOnsen = onsenList.filter(o => article.onsen_ids.includes(o.id));

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero">
            <img src="${article.image}" alt="${article.title}" class="prefecture-hero-bg">
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/articles">コラム・記事</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${article.categoryLabel}</span>
                </nav>
                <div class="onsen-hero-badge">📝 ${article.categoryLabel}</div>
                <h1 class="prefecture-hero-title" style="font-size:clamp(1.2rem,3vw,1.8rem)">${article.title}</h1>
            </div>
        </div>

        <section class="section">
            <div class="container" style="max-width:760px">
                <div class="article-meta">
                    <span class="article-meta-category">${article.categoryLabel}</span>
                    ${date_text ? `<span class="article-meta-date">${date_text}</span>` : ''}
                </div>
                <p class="article-lead">${article.description}</p>
                <div class="article-body">
                    ${article.body}
                </div>
                ${faq_section('よくある質問', faqs)}
                ${article.sources?.length ? `
                <section class="article-sources">
                    <h2 class="article-sources-title">参考資料</h2>
                    <ul>
                        ${article.sources.map(src => `<li><a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.name)}</a></li>`).join('')}
                    </ul>
                </section>` : ''}
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <h2 class="section-title">この記事で紹介した温泉地</h2>
                <div class="hotel-grid">
                    ${relatedOnsen.map(o => `
                        <a href="/onsen/${o.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${o.image}" alt="${o.name}" loading="lazy">
                                ${o.category ? `<span class="hotel-type-badge">${o.category}</span>` : ''}
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
