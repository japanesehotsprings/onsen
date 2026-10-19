import { getSpringTypeById } from '../data/springTypes.js';
import { onsenList } from '../data/onsen.js';
import { updateSEO } from '../seo.js';
import { faq_section, faq_ld, sentence } from '../components/answer.js';

export function renderSpringTypeDetail({ params }) {
    const app = document.getElementById('app');
    const st = getSpringTypeById(params.id);

    if (!st) {
        app.innerHTML = `<div class="page-header"><div class="container"><h1 class="page-title">ページが見つかりません</h1><a href="/spring-types" class="btn btn-primary">泉質一覧へ</a></div></div>`;
        return;
    }


    // 掲載温泉地は springTypes.js の onsen_ids（裏取り済みの泉質から自動割り当て）だけを使う
    const relatedOnsen = onsenList.filter(o => st.onsen_ids.includes(o.id)).slice(0, 6);

    const faqs = build_spring_faqs(st, relatedOnsen);
    updateSEO(`${st.name}とは？効能・特徴・おすすめ温泉地`, st.description, faq_ld(faqs));

    app.innerHTML = `
        <div class="prefecture-hero onsen-hero" style="${st.image ? '' : `background:${st.color}33`}">
            ${st.image ? `<img src="${st.image}" alt="${st.name}" class="prefecture-hero-bg">` : ''}
            <div class="prefecture-hero-overlay"></div>
            <div class="prefecture-hero-content">
                <nav class="breadcrumb breadcrumb-light">
                    <a href="/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <a href="/spring-types">泉質から探す</a>
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
                            <span class="onsen-meta-label">泉質別の適応症（浴用）</span>
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

        <section class="section">
            <div class="container">${faq_section(`${st.name}のよくある質問`, faqs)}</div>
        </section>
    `;
    window.scrollTo(0, 0);
}

/**
 * 泉質ページのよくある質問をデータから組み立てる
 */
function build_spring_faqs(st, relatedOnsen) {
  const faqs = [
    { q: `${st.name}とはどんな温泉ですか？`, a: sentence(st.description) },
    { q: `${st.name}の効能は？`, a: st.effects[0].startsWith('（')
        ? `環境省の掲示基準では、${st.name}に泉質別の浴用の適応症はありません。${st.effects.slice(1).join('、')}が挙げられています。`
        : `環境省の掲示基準では、泉質別の浴用の適応症として${st.effects.join('・')}が挙げられています。効き方には個人差があり、持病のある方は医師に相談してください。` },
  ];
  if (st.suitable_for) faqs.push({ q: `${st.name}はどんな人に向いていますか？`, a: sentence(`${st.suitable_for}に向いています`) });
  if (st.caution) faqs.push({ q: `${st.name}に入るときの注意点は？`, a: sentence(st.caution) });
  if (relatedOnsen.length) {
    faqs.push({
      q: `${st.name}が楽しめる温泉地は？`,
      a: `日本温泉では${relatedOnsen.slice(0, 8).map(o => o.name).join('、')}${relatedOnsen.length > 8 ? ' など' : ''}を紹介しています。`,
    });
  }
  return faqs;
}
