/**
 * 検索結果ページ
 * 温泉のテキスト検索と泉質カテゴリフィルタリング
 */

import { prefectures } from '../data/prefectures.js';
import { searchOnsen, getOnsenCategories, onsenList } from '../data/onsen.js';
import { navigateTo } from '../router.js';

/**
 * 検索結果ページのHTMLを生成して表示する
 * @param {object} context - ルーターから渡されるコンテキスト
 */
export function renderSearchResults({ query }) {
  const app = document.getElementById('app');
  const searchQuery = query.q || '';

  // 温泉検索実行
  const onsenResults = searchQuery ? searchOnsen(searchQuery) : [];
  const totalResults = onsenResults.length;

  // 泉質カテゴリ一覧（フィルター用）
  const categories = getOnsenCategories();

  app.innerHTML = `
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="#/">トップ</a>
          <span class="breadcrumb-separator">›</span>
          <span>検索結果</span>
        </nav>
        <h1 class="page-title">温泉を検索</h1>
        <div class="search-box search-box-page">
          <div class="search-input-wrapper">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" id="search-input" class="search-input" placeholder="温泉名・泉質・地域を入力..." value="${searchQuery}" autocomplete="off">
          </div>
          <button class="search-btn" id="search-btn">検索</button>
        </div>
        ${searchQuery ? `<p class="search-result-count">「${searchQuery}」の検索結果：<strong>${totalResults}件</strong></p>` : ''}
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="search-filter" id="search-filter">
          <button class="filter-btn active" data-filter="all">すべて <span class="filter-count">${totalResults}</span></button>
          ${categories.map(cat => {
    const count = onsenResults.filter(o => o.category === cat).length;
    if (count === 0) return '';
    return `<button class="filter-btn" data-filter="${cat}">${cat} <span class="filter-count">${count}</span></button>`;
  }).join('')}
        </div>

        ${totalResults === 0 && searchQuery ? `
          <div class="empty-state-container">
            <div class="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3>温泉が見つかりませんでした</h3>
            <p>キーワードを変えて検索してみてください</p>
            <div class="search-suggestions">
              <p>おすすめ検索ワード：</p>
              <div class="suggestion-tags">
                <span class="hero-tag" data-q="秘湯">秘湯</span>
                <span class="hero-tag" data-q="硫黄泉">硫黄泉</span>
                <span class="hero-tag" data-q="美肌の湯">美肌の湯</span>
                <span class="hero-tag" data-q="露天風呂">露天風呂</span>
              </div>
            </div>
          </div>
        ` : ''}

        <div class="search-results" id="search-results">
          ${totalResults > 0 ? `
            <div class="card-grid" id="onsen-results">
              ${onsenResults.map(onsen => renderSearchCard(onsen)).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    </section>
  `;

  // イベント設定
  setupSearchPageEvents();
  setupFilterEvents(onsenResults);
  setupSuggestionTags();
  // ページトップにスクロール
  window.scrollTo(0, 0);
}

/**
 * 検索カードのHTMLを生成
 * @param {object} onsen - 温泉データ
 * @returns {string} カードのHTML文字列
 */
function renderSearchCard(onsen) {
  const prefName = prefectures.find(p => p.id === onsen.prefecture)?.name || '';
  return `
    <article class="card" data-category="${onsen.category}">
      <div class="card-image">
        <img src="${onsen.image}" alt="${onsen.name}" loading="lazy">
        <span class="card-badge onsen">${onsen.category}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span class="card-prefecture">
            <a href="#/prefecture/${onsen.prefecture}">${prefName}</a>
          </span>
          <span class="spring-type-badge">♨ ${onsen.spring_type}</span>
        </div>
        <h3 class="card-title">${onsen.name}</h3>
        <p class="card-desc">${onsen.description}</p>
        <div class="card-tags">
          ${onsen.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

/**
 * 検索ページの検索イベント設定
 */
function setupSearchPageEvents() {
  const input = document.getElementById('search-input');
  const btn = document.getElementById('search-btn');

  function doSearch() {
    const newQuery = input.value.trim();
    if (newQuery) {
      navigateTo(`/search?q=${encodeURIComponent(newQuery)}`);
    }
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

/**
 * 泉質カテゴリフィルタのイベント設定
 * @param {Array} onsenResults - 検索結果の温泉データ
 */
function setupFilterEvents(onsenResults) {
  const filterContainer = document.getElementById('search-filter');
  const resultsGrid = document.getElementById('onsen-results');

  if (!filterContainer || !resultsGrid) return;

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    // ボタンの状態を変更
    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // カードの表示を切り替え
    resultsGrid.querySelectorAll('.card').forEach(card => {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        card.style.display = card.dataset.category === filter ? '' : 'none';
      }
    });
  });
}

/**
 * 提案タグのクリックイベント設定
 */
function setupSuggestionTags() {
  document.querySelectorAll('.suggestion-tags .hero-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.dataset.q;
      navigateTo(`/search?q=${encodeURIComponent(q)}`);
    });
  });
}
