/**
 * アプリケーションのエントリーポイント
 * ルーターの初期化とページの切り替えを管理する
 */

import { addRoute, initRouter, navigateTo, setNotFound } from './router.js';
import { route_table, renderNotFoundPage } from './routes.js';

// DOMの準備完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('日本温泉 - 起動');

    // ルート定義（routes.js がビルド時の静的HTML書き出しと共通の正本）
    route_table.forEach(r => addRoute(r.path, r.handler));
    setNotFound(renderNotFoundPage);

    // 内部リンクのクリックをインターセプトしてSPA遷移
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a) return;
        const href = a.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//') && !a.target) {
            e.preventDefault();
            navigateTo(href);
        }
    });

    // ルーター初期化
    initRouter();

    // ヘッダースクロールエフェクト
    setupHeaderScroll();

    // モバイルメニュー
    setupMobileMenu();

    // ヘッダーナビゲーションの検索
    setupHeaderSearch();
});

/**
 * ヘッダーのスクロールエフェクトを設定
 */
function setupHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * モバイルメニューの開閉を設定
 */
function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }
}

/**
 * ヘッダーの検索ボックスの設定
 */
function setupHeaderSearch() {
    const input = document.getElementById('header-search-input');
    const btn = document.getElementById('header-search-btn');

    if (input && btn) {
        function doSearch() {
            const query = input.value.trim();
            if (query) {
                navigateTo(`/search?q=${encodeURIComponent(query)}`);
                input.value = '';
            }
        }

        btn.addEventListener('click', doSearch);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') doSearch();
        });
    }
}
