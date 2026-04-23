/**
 * アプリケーションのエントリーポイント
 * ルーターの初期化とページの切り替えを管理する
 */

import { addRoute, initRouter, navigateTo } from './router.js';
import { renderHome } from './pages/home.js';
import { renderPrefectureList } from './pages/prefectureList.js';
import { renderPrefectureDetail } from './pages/prefectureDetail.js';
import { renderSearchResults } from './pages/searchResults.js';
import { renderOnsenDetail } from './pages/onsenDetail.js';
import { renderHotelDetail } from './pages/hotelDetail.js';
import { renderOnsenList } from './pages/onsenList.js';
import { renderHotelList } from './pages/hotelList.js';
import { renderSpringTypeList } from './pages/springTypeList.js';
import { renderSpringTypeDetail } from './pages/springTypeDetail.js';
import { renderSpecialList } from './pages/specialList.js';
import { renderSpecialDetail } from './pages/specialDetail.js';
import { renderGuide } from './pages/guide.js';
import { renderCourseList } from './pages/courseList.js';
import { renderCourseDetail } from './pages/courseDetail.js';
import { renderArticleList } from './pages/articleList.js';
import { renderArticleDetail } from './pages/articleDetail.js';

// DOMの準備完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('日本温泉 - 起動');

    // ルート定義
    addRoute('/', renderHome);
    addRoute('/prefectures', renderPrefectureList);
    addRoute('/prefecture/:id', renderPrefectureDetail);
    addRoute('/onsen/:id', renderOnsenDetail);
    addRoute('/hotel/:id', renderHotelDetail);
    addRoute('/onsens', renderOnsenList);
    addRoute('/hotels', renderHotelList);
    addRoute('/search', renderSearchResults);
    addRoute('/spring-types', renderSpringTypeList);
    addRoute('/spring-type/:id', renderSpringTypeDetail);
    addRoute('/specials', renderSpecialList);
    addRoute('/special/:id', renderSpecialDetail);
    addRoute('/guide', renderGuide);
    addRoute('/courses', renderCourseList);
    addRoute('/course/:id', renderCourseDetail);
    addRoute('/articles', renderArticleList);
    addRoute('/article/:id', renderArticleDetail);

    // 内部リンクのクリックをインターセプトしてSPA遷移
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a) return;
        const href = a.getAttribute('href');
        if (href && href.startsWith('/onsen/')) {
            e.preventDefault();
            navigateTo(href.slice('/onsen'.length) || '/');
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
