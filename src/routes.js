/**
 * ルート定義の正本
 * ブラウザのルーター（main.js）とビルド時の静的HTML書き出し（scripts/prerender.mjs）の両方がここを読む
 */
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
import { renderForInns } from './pages/forInns.js';
import { updateSEO } from './seo.js';

export const route_table = [
    { path: '/', handler: renderHome },
    { path: '/prefectures', handler: renderPrefectureList },
    { path: '/prefecture/:id', handler: renderPrefectureDetail },
    { path: '/onsen/:id', handler: renderOnsenDetail },
    { path: '/hotel/:id', handler: renderHotelDetail },
    { path: '/onsens', handler: renderOnsenList },
    { path: '/hotels', handler: renderHotelList },
    { path: '/search', handler: renderSearchResults },
    { path: '/spring-types', handler: renderSpringTypeList },
    { path: '/spring-type/:id', handler: renderSpringTypeDetail },
    { path: '/specials', handler: renderSpecialList },
    { path: '/special/:id', handler: renderSpecialDetail },
    { path: '/guide', handler: renderGuide },
    { path: '/courses', handler: renderCourseList },
    { path: '/course/:id', handler: renderCourseDetail },
    { path: '/articles', handler: renderArticleList },
    { path: '/article/:id', handler: renderArticleDetail },
    { path: '/for-inns', handler: renderForInns },
];

// どのルートにも当たらないページ
export function renderNotFoundPage() {
    updateSEO('ページが見つかりません', '', null, { noindex: true });
    document.getElementById('app').innerHTML = `
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">ページが見つかりません</h1>
          <p class="page-subtitle">お探しのページは移動または削除された可能性があります。</p>
          <a href="/" class="btn btn-primary">トップに戻る</a>
        </div>
      </div>
    `;
}
