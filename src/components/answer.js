/**
 * AI検索・検索エンジン向けの「要約ボックス」と「よくある質問」
 * - 中身はすべて src/data/ の既存データから組み立てる（新しい事実は足さない）
 * - 要約の1文目は、そのまま引用されても意味が通る「◯◯は〜」の形にする
 */

// HTMLに入れる文字のエスケープ（データ由来の文字列用）
export function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// 文末に句点がなければ付ける
export function sentence(s) {
  const t = String(s || '').trim();
  if (!t) return '';
  return /[。！？]$/.test(t) ? t : t + '。';
}

/**
 * 要約ボックス
 * @param {string} heading - 見出し（例: 草津温泉の要点）
 * @param {string} lead - 1〜3文の要約
 * @param {{label: string, value: string}[]} facts - 早見表
 * @param {string} note - 注記（料金・時間が変わる可能性など）
 */
export function summary_box(heading, lead, facts = [], note = '') {
  const rows = facts.filter(f => f.value);
  return `
    <section class="answer-box" aria-label="${esc(heading)}">
      <h2 class="answer-box-title">${esc(heading)}</h2>
      <p class="answer-box-lead">${esc(lead)}</p>
      ${rows.length ? `
      <table class="answer-box-table">
        <tbody>
          ${rows.map(f => `<tr><th scope="row">${esc(f.label)}</th><td>${esc(f.value)}</td></tr>`).join('')}
        </tbody>
      </table>` : ''}
      ${note ? `<p class="answer-box-note">${esc(note)}</p>` : ''}
    </section>
  `;
}

/**
 * よくある質問（開閉式）
 * @param {string} heading
 * @param {{q: string, a: string}[]} faqs - a はプレーンテキスト
 */
export function faq_section(heading, faqs) {
  if (!faqs.length) return '';
  return `
    <section class="faq-section">
      <h2 class="faq-title">${esc(heading)}</h2>
      <div class="faq-list">
        ${faqs.map((f, i) => `
          <details class="faq-item"${i === 0 ? ' open' : ''}>
            <summary class="faq-q">${esc(f.q)}</summary>
            <p class="faq-a">${esc(f.a)}</p>
          </details>
        `).join('')}
      </div>
    </section>
  `;
}

// FAQPage の構造化データ
export function faq_ld(faqs) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export const PRICE_NOTE = '料金・営業時間は変わることがあります。お出かけ前に公式情報でご確認ください。';

export const ACCESS_NOTE = '行き方やバスの所要時間・運行は変わることがあります。お出かけ前に公式情報でご確認ください。';
