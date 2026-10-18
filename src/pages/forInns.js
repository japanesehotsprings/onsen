/**
 * 宿の方へ（旅館・ホテル向け）
 * 日本温泉が運営するホームページ制作サービス「YADO WEB」の案内と、無料相談への導線
 * 料金・内容は YADO WEB のLP（yado-web.pages.dev）と同じ表記にする
 */
import { updateSEO } from '../seo.js';
import { YADO_WEB_FORM, yado_web_url } from '../config.js';
import { faq_section, faq_ld } from '../components/answer.js';

const faqs = [
  { q: '本当に初期費用はかからないのですか？', a: 'はい、制作費・初期費用は0円です。お支払いは月額10,000円（税込）のみです。撮影や予約機能、SNSでのPRなどのオプションをご希望の場合のみ、別途費用がかかります。' },
  { q: '最低利用期間と解約について教えてください。', a: '最低利用期間は12ヶ月です。13ヶ月目以降は1ヶ月単位で解約いただけます。' },
  { q: 'いまの予約システムはそのまま使えますか？', a: 'はい。お使いの予約システムやOTA（じゃらん・楽天トラベル・Yahoo!トラベル 等）の宿ページに、予約ボタンからつなげます。' },
  { q: 'いまのドメイン（URL）は使えますか？', a: '使えます。お持ちのドメインのまま、これまでのURLで公開できます。' },
  { q: '更新はどのように依頼すればよいですか？', a: '差し替えたい写真や文章を、LINEまたはメールでお送りください。月2回までの更新は月額に含まれています。' },
];

export function renderForInns() {
  updateSEO(
    '旅館・ホテルの方へ｜ホームページ制作 YADO WEB',
    '温泉メディア「日本温泉」が運営する旅館・ホテル専門のホームページ制作「YADO WEB」。初期費用0円・月額10,000円（税込）で、制作から公開後の更新までおまかせいただけます。',
    faq_ld(faqs)
  );

  const lp = yado_web_url('for-inns');

  document.getElementById('app').innerHTML = `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <span>宿の方へ</span>
        </nav>
        <h1 class="page-title">旅館・ホテルの方へ</h1>
        <p class="page-subtitle">温泉メディア「日本温泉」がつくる、宿専門のホームページ制作「YADO WEB」</p>
      </div>
    </div>

    <section class="section">
      <div class="container inn-container">

        <div class="inn-hero-card">
          <p class="inn-eyebrow">YADO WEB（運営：日本温泉）</p>
          <h2 class="inn-hero-title">宿の魅力が伝わる公式ホームページを、<br class="pc-only">初期費用0円・月額1万円で。</h2>
          <p class="inn-hero-text">
            予約サイトの宿ページは、どこも同じ形です。お部屋の広さ、湯の肌ざわり、朝の景色、おかみの人柄。
            決められた枠では伝えきれない魅力を、まっすぐ届ける場所が宿の公式ホームページです。
            YADO WEB は、温泉旅行を探す人に向けて毎日発信している「日本温泉」の運営チームがつくります。
          </p>
          <div class="inn-price">
            <div><span class="inn-price-label">初期費用</span><span class="inn-price-value">0<small>円</small></span></div>
            <div><span class="inn-price-label">月額（税込）</span><span class="inn-price-value">10,000<small>円</small></span></div>
          </div>
          <p class="inn-price-note">最低利用期間12ヶ月。13ヶ月目以降は1ヶ月単位で解約できます。</p>
          <div class="inn-cta">
            <a href="${YADO_WEB_FORM}" class="btn btn-primary inn-cta-main" target="_blank" rel="noopener">無料で相談する</a>
            <a href="${lp}" class="btn inn-cta-sub" target="_blank" rel="noopener">YADO WEB の詳細・制作イメージを見る</a>
          </div>
          <p class="inn-cta-note">お問い合わせはGoogleフォームから（入力は2分ほど）。3営業日以内にご連絡します。</p>
        </div>

        <h2 class="inn-heading">こんなお悩みはありませんか？</h2>
        <div class="inn-grid inn-grid-3">
          <div class="inn-card"><h3>予約サイトだけでは魅力が伝わらない</h3><p>OTAの宿ページは決まった形。宿のこだわりや雰囲気まで伝えきれない。</p></div>
          <div class="inn-card"><h3>サイトが古く、スマホで見づらい</h3><p>何年も前に作ったまま。写真も料金も、今の宿の姿と合っていない。</p></div>
          <div class="inn-card"><h3>制作費に何十万円は厳しい</h3><p>作り直したいけれど、見積もりを見て止まってしまう。更新のたびに費用もかかる。</p></div>
        </div>

        <h2 class="inn-heading">月額に含まれるもの</h2>
        <ul class="inn-includes">
          <li><strong>5〜7ページの制作</strong>お部屋・温泉・お料理・アクセスなど</li>
          <li><strong>月2回までの更新</strong>写真や文章をLINEで送るだけ</li>
          <li><strong>スマホ対応</strong>どの端末でも見やすく表示</li>
          <li><strong>サーバー・SSL</strong>サーバー管理と常時https</li>
          <li><strong>予約ボタン設置</strong>今の予約システムへ接続</li>
          <li><strong>Googleマップ</strong>アクセスをわかりやすく</li>
          <li><strong>基本のSEO</strong>検索で見つかる設定</li>
          <li><strong>日本温泉で紹介</strong>公開記念の投稿1回（PR表記つき）</li>
        </ul>
        <p class="inn-small">撮影・予約機能・SNSでのPRなどは、必要な宿だけオプションで追加できます。</p>

        <h2 class="inn-heading">ご相談から公開までの流れ</h2>
        <ol class="inn-flow">
          <li><strong>無料相談</strong>オンラインで30分ほど。宿の状況やご希望をうかがいます。</li>
          <li><strong>ご提案・お申し込み</strong>構成とデザインの方向をご提案。ご納得いただけた場合のみお申し込みください。</li>
          <li><strong>制作・公開</strong>写真や料金表などの素材をもとに制作し、ご確認と修正を経て公開します。</li>
          <li><strong>更新・紹介投稿</strong>日本温泉で公開記念の紹介投稿。その後の更新はLINEで送るだけです。</li>
        </ol>
        <p class="inn-small">お申し込みから公開まで、目安は1ヶ月です。</p>

        ${faq_section('よくあるご質問', faqs)}

        <div class="inn-bottom-cta">
          <p>イメージのすり合わせや、いまのホームページの改善案を一緒に考えます。検討段階のご相談も歓迎です。</p>
          <a href="${YADO_WEB_FORM}" class="btn btn-primary inn-cta-main" target="_blank" rel="noopener">無料で相談する</a>
        </div>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

/**
 * 宿ページの下に置く、宿の関係者向けの小さな案内
 * 旅行者の邪魔にならないよう控えめに出す
 */
export function inn_owner_note(hotel_name) {
  return `
    <aside class="inn-note">
      <p class="inn-note-title">${hotel_name}の関係者の方へ</p>
      <p class="inn-note-text">公式ホームページの制作・リニューアルは、日本温泉が運営する「YADO WEB」へ。初期費用0円・月額10,000円（税込）で、制作から更新までおまかせいただけます。</p>
      <a href="/for-inns" class="inn-note-link">宿の方へのご案内を見る →</a>
    </aside>
  `;
}
