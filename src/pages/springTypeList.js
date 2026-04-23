import { springTypeList } from '../data/springTypes.js';
import { updateSEO } from '../seo.js';

export function renderSpringTypeList() {
    updateSEO('泉質から温泉を探す', '硫黄泉・美肌の湯・炭酸泉など泉質の種類と効能を解説。自分に合った温泉を泉質から探せます。');
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-header">
            <div class="container">
                <nav class="breadcrumb">
                    <a href="/onsen/">ホーム</a>
                    <span class="breadcrumb-separator">›</span>
                    <span>泉質から探す</span>
                </nav>
                <h1 class="page-title">泉質から温泉を探す</h1>
                <p class="page-desc">温泉の種類（泉質）と効能を解説。目的に合った温泉を見つけよう。</p>
            </div>
        </div>
        <section class="section">
            <div class="container">
                <div class="hotel-grid">
                    ${springTypeList.map(st => `
                        <a href="/onsen/spring-type/${st.id}" class="hotel-card hotel-card-link">
                            ${st.image
                                ? `<div class="hotel-card-image"><img src="${st.image}" alt="${st.name}" loading="lazy"><span class="hotel-type-badge">${st.name}</span></div>`
                                : `<div class="hotel-card-image" style="background:linear-gradient(135deg,${st.color}18 0%,${st.color}40 100%);display:flex;align-items:center;justify-content:center;height:200px;"><span style="font-size:4.5rem;filter:drop-shadow(0 6px 16px ${st.color}88)">${st.icon}</span></div>`
                            }
                            <div class="hotel-card-body">
                                <h3 class="hotel-card-name">${st.name}</h3>
                                <p class="hotel-card-desc">${st.description.slice(0, 60)}…</p>
                                <div class="hotel-card-tags">
                                    ${st.effects.slice(0, 3).map(e => `<span class="tag">${e}</span>`).join('')}
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
