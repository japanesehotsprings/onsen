import { getSpecialById, specialList } from '../data/specials.js';
import { onsenList } from '../data/onsen.js';
import { hotelList } from '../data/hotels.js';
import { prefectures } from '../data/prefectures.js';
import { springTypeList } from '../data/springTypes.js';
import { articleList } from '../data/articles.js';
import { updateSEO, absolute_url } from '../seo.js';
import { SITE_URL } from '../config.js';
import { summary_box, faq_section, faq_ld, esc, ACCESS_NOTE } from '../components/answer.js';

const pref_name = Object.fromEntries(prefectures.map(p => [p.id, p.name]));

// 特集の要点・よくある質問（掲載データから組み立てる。新しい事実は足さない）
function build_special_answer(special, onsens) {
    const names = onsens.map(o => o.name);
    const pref_count = new Set(onsens.map(o => o.prefecture)).size;
    const regions = [...new Set(onsens.map(o => pref_name[o.prefecture]).filter(Boolean))];
    const lead = `「${special.title}」では、日本温泉に掲載している温泉地から${onsens.length}か所を紹介しています。${special.description.split('。')[0]}。`;
    const facts = [
        { label: '掲載温泉地', value: `${onsens.length}か所（${pref_count}都道府県）` },
        { label: '主な温泉地', value: names.slice(0, 6).join('、') + (names.length > 6 ? ' ほか' : '') },
        { label: '都道府県', value: regions.slice(0, 10).join('・') + (regions.length > 10 ? ' ほか' : '') },
    ];
    const faqs = [
        ...(special.faqs || []),
        names.length ? { q: `「${special.title}」で紹介している温泉地は？`, a: `${names.join('、')}の${names.length}か所です。それぞれの泉質や最寄り駅は各温泉地のページで確認できます。` } : null,
    ].filter(Boolean);
    return { lead, facts, faqs };
}

export function renderSpecialDetail({ params }) {
    const app = document.getElementById('app');
    const special = getSpecialById(params.id);

    if (!special) {
        updateSEO('ページが見つかりません', '');
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/specials" class="btn btn-primary">特集一覧へ</a></div></div>`;
        return;
    }

    // 掲載順は onsen_ids の並び（泉質で集めたものは北から順）
    const relatedOnsen = special.onsen_ids.map(id => onsenList.find(o => o.id === id)).filter(Boolean);
    const relatedHotels = hotelList.filter(h =>
        special.hotel_ids.includes(h.id) ||
        (special.scene && h.scenes?.includes(special.scene))
    ).slice(0, 6);
    const relatedArticles = (special.article_ids || []).map(id => articleList.find(a => a.id === id)).filter(Boolean);
    const spring = special.spring_type_id ? springTypeList.find(s => s.id === special.spring_type_id) : null;
    const otherSpecials = specialList.filter(s => s.id !== special.id).slice(0, 8);
    const answer = build_special_answer(special, relatedOnsen);
    const path = `/special/${special.id}`;

    const collection_ld = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': special.title,
        'description': special.description,
        'url': SITE_URL + path,
        'inLanguage': 'ja',
        'image': absolute_url(special.image),
        'isPartOf': { '@type': 'WebSite', 'name': '日本温泉', 'url': SITE_URL },
        'mainEntity': {
            '@type': 'ItemList',
            'numberOfItems': relatedOnsen.length,
            'itemListElement': relatedOnsen.map((o, i) => ({
                '@type': 'ListItem',
                'position': i + 1,
                'name': o.name,
                'url': `${SITE_URL}/onsen/${o.id}`,
            })),
        },
        ...(special.sources?.length ? { 'citation': special.sources.map(s => ({ '@type': 'CreativeWork', 'name': s.name, 'url': s.url })) } : {}),
    };
    updateSEO(special.title, special.description, [collection_ld, faq_ld(answer.faqs)].filter(Boolean), { image: special.image });

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero" style="${special.image ? '' : `background:${special.color}44`}">
            ${special.image ? `<img src="${special.image}" alt="${esc(special.title)}" class="prefecture-hero-bg">` : ''}
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/specials">特集</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>${special.title}</span>
                </nav>
                <div class="onsen-hero-badge">${special.icon} ${special.subtitle}</div>
                <h1 class="prefecture-hero-title"${special.title.length > 14 ? ' style="font-size:clamp(1.4rem,3.6vw,2.2rem)"' : ''}>${special.title}</h1>
            </div>
        </div>

        <section class="section onsen-info-section">
            <div class="container" style="max-width:860px">
                <p style="font-size:1.1rem;line-height:1.9;color:var(--color-text-muted)">${special.description}</p>
                ${summary_box(`${special.title}の要点`, answer.lead, answer.facts, ACCESS_NOTE)}
                ${spring ? `<p style="margin-top:1rem">泉質の特徴や注意点は「<a href="/spring-type/${spring.id}">${spring.name}</a>」のページでくわしく解説しています。</p>` : ''}
                ${special.note ? `<p class="answer-box-note" style="margin-top:1rem">${special.note}</p>` : ''}
            </div>
        </section>

        ${relatedOnsen.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">おすすめ温泉地（${relatedOnsen.length}か所）</h2>
                </div>
                <div class="hotel-grid">
                    ${relatedOnsen.map(o => `
                        <a href="/onsen/${o.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${o.image}" alt="${esc(o.name)}" loading="lazy">
                                ${o.category ? `<span class="hotel-type-badge">${o.category}</span>` : ''}
                            </div>
                            <div class="hotel-card-body">
                                <span style="font-size:0.75rem;color:var(--color-primary);font-weight:600">${pref_name[o.prefecture] || ''}</span>
                                <h3 class="hotel-card-name">${o.name}</h3>
                                <p class="hotel-card-desc">${o.description.slice(0, 60)}…</p>
                                <p class="hotel-card-desc" style="font-size:0.8rem;margin-top:0.4rem">泉質：${esc(o.spring_type)}${o.access?.nearest_station ? `<br>最寄り駅：${esc(o.access.nearest_station)}` : ''}</p>
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
                        <a href="/hotel/${h.id}" class="hotel-card hotel-card-link">
                            <div class="hotel-card-image">
                                <img src="${h.image}" alt="${esc(h.name)}" loading="lazy">
                                ${h.type ? `<span class="hotel-type-badge">${h.type}</span>` : ''}
                            </div>
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${h.name}</h3>
                                <p class="hotel-card-desc">${h.description}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

        <section class="section">
            <div class="container" style="max-width:860px">
                ${faq_section('よくある質問', answer.faqs)}
                ${relatedArticles.length ? `
                <section class="article-sources">
                    <h2 class="article-sources-title">あわせて読みたいコラム</h2>
                    <ul>
                        ${relatedArticles.map(a => `<li><a href="/article/${a.id}">${esc(a.title)}</a></li>`).join('')}
                    </ul>
                </section>` : ''}
                ${special.sources?.length ? `
                <section class="article-sources">
                    <h2 class="article-sources-title">参考資料</h2>
                    <ul>
                        ${special.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`).join('')}
                    </ul>
                </section>` : ''}
                <section class="article-sources">
                    <h2 class="article-sources-title">ほかの特集</h2>
                    <ul>
                        ${otherSpecials.map(s => `<li><a href="/special/${s.id}">${esc(s.title)}</a></li>`).join('')}
                    </ul>
                </section>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
