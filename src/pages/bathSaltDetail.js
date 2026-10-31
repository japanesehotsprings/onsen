/**
 * 温泉地ごとの入浴剤の比較ページ /nyuyokuzai/:id（:id は温泉地 id）
 * 本物の湯 → 商品（本物に近い順） → 本物に行くなら → 出典 → よくある質問
 */
import { bathSaltList } from '../data/bath_salts.js';
import { bathSaltResolved } from '../data/bath_salts_resolved.js';
import { get_salts_by_onsen, TIER_LABELS } from '../data/bath_salts_lib.js';
import { onsenList } from '../data/onsen.js';
import { getPrefectureById } from '../data/prefectures.js';
import { visible_salts, salt_card } from '../components/salt_card.js';
import { AD_NOTICE_PAGE } from '../components/ad_notice.js';
import { esc, faq_section, faq_ld } from '../components/answer.js';
import { updateSEO } from '../seo.js';

// 区分ごとの件数から、事実だけで答えるFAQを作る
function build_faqs(onsen, salts) {
  const counts = [1, 2, 3].map(t => ({ t, n: salts.filter(s => s.tier === t).length })).filter(c => c.n);
  return [
    {
      q: `${onsen.name}の入浴剤は本物の温泉と同じですか？`,
      a: `このページで紹介している${onsen.name}の商品は、${counts.map(c => `「${TIER_LABELS[c.t]}」が${c.n}点`).join('、')}です。どれも家庭のお風呂用の入浴剤で、温泉そのものではありません。商品ごとの区分の根拠は各商品の説明と出典にまとめています。`,
    },
    {
      q: `${onsen.name}の入浴剤はどこで買えますか？`,
      a: 'このページの各商品から楽天市場の販売ページへ移動できます。最新の価格や在庫は楽天で確認してください。',
    },
  ];
}

// 各商品の出典を、重複を除いて1つの一覧にする
function merged_sources(salts) {
  const seen = new Map();
  for (const s of salts) for (const r of s.sources) if (!seen.has(r.url)) seen.set(r.url, r);
  return [...seen.values()];
}

export function build_detail_html(onsen, salts, resolved) {
  const prefecture = getPrefectureById(onsen.prefecture);
  const sources = merged_sources(salts);
  return `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">ホーム</a>
          <span class="breadcrumb-separator">›</span>
          <a href="/nyuyokuzai">家で入る名湯</a>
          <span class="breadcrumb-separator">›</span>
          <span>${esc(onsen.name)}</span>
        </nav>
        <h1 class="page-title">${esc(onsen.name)}の入浴剤・湯の花</h1>
        <p class="page-desc">${esc(prefecture?.name || '')}の${esc(onsen.name)}の名前がついた商品を、本物の温泉に近い順に並べました</p>
        <p class="ad-notice">${AD_NOTICE_PAGE}</p>
      </div>
    </div>

    <section class="section">
      <div class="container salt-detail">
        <div class="onsen-detail-card">
          <h2 class="onsen-detail-heading">本物の湯：${esc(onsen.name)}</h2>
          <p class="salt-real-spring">泉質：${esc(onsen.spring_type)}</p>
          <p class="onsen-detail-desc">${esc(onsen.intro || onsen.description)}</p>
        </div>

        <h2 class="section-title salt-section-title">${esc(onsen.name)}の名前がついた商品</h2>
        <div class="salt-grid">${salts.map(s => salt_card(s, resolved[s.id])).join('')}</div>
        <p class="salt-note">最新の価格は楽天で確認してください。</p>

        <div class="onsen-detail-card">
          <h2 class="onsen-detail-heading">本物に行くなら</h2>
          <p>${esc(onsen.name)}の見どころ・日帰り入浴・宿は、温泉地のページにまとめています。</p>
          <a href="/onsen/${onsen.id}" class="btn btn-primary">${esc(onsen.name)}のページへ</a>
        </div>

        <div class="onsen-detail-card onsen-sources">
          <h2 class="onsen-detail-heading">区分の根拠にした情報</h2>
          <ul class="onsen-related-links">
            ${sources.map(r => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)}</a></li>`).join('')}
          </ul>
        </div>

        ${faq_section(`${onsen.name}の入浴剤のよくある質問`, build_faqs(onsen, salts))}
      </div>
    </section>
  `;
}

export function renderBathSaltDetail({ params }) {
  const app = document.getElementById('app');
  const onsen = onsenList.find(o => o.id === params.id);
  const salts = onsen ? visible_salts(get_salts_by_onsen(onsen.id, bathSaltList), bathSaltResolved) : [];
  if (!onsen || !salts.length) {
    updateSEO('ページが見つかりません', '');
    app.innerHTML = `
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">ページが見つかりません</h1>
          <a href="/nyuyokuzai" class="btn btn-primary">家で入る名湯へ</a>
        </div>
      </div>
    `;
    return;
  }
  updateSEO(
    `${onsen.name}の入浴剤・湯の花｜家で入る名湯`,
    `${onsen.name}の名前がついた入浴剤・湯の花を、本物の温泉成分・温泉地公認の再現・名前と香りの3つに分けて紹介。区分の根拠と出典つき。`,
    [faq_ld(build_faqs(onsen, salts))].filter(Boolean),
  );
  app.innerHTML = build_detail_html(onsen, salts, bathSaltResolved);
}
