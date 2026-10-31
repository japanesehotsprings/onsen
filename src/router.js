const routes = [];

export function addRoute(path, handler) {
    routes.push({ path, handler });
}

const BASE = '';

function getCurrentPath() {
    // 静的HTML（/onsen/xxx.html や末尾スラッシュ）でも同じルートに当たるよう正規化する
    let path = window.location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
    if (path.length > 1) path = path.replace(/\/$/, '');
    const stripped = path.startsWith(BASE) ? path.slice(BASE.length) || '/' : '/';
    return stripped + window.location.search;
}

function matchRoute(pattern, path) {
    const patternParts = pattern.split('/');
    const pathParts = path.split('?')[0].split('/');

    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
            params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
        } else if (patternParts[i] !== pathParts[i]) {
            return null;
        }
    }
    return params;
}

function parseQuery(path) {
    const queryString = path.split('?')[1];
    if (!queryString) return {};
    const params = {};
    queryString.split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return params;
}

export function resolveRoute() {
    const path = getCurrentPath();
    const query = parseQuery(path);

    for (const route of routes) {
        const params = matchRoute(route.path, path);
        if (params !== null) {
            route.handler({ params, query });
            return;
        }
    }

    renderNotFound();
}

// どのルートにも当たらないときは404表示（トップへ飛ばさない）
function renderNotFound() {
    if (notFoundHandler) notFoundHandler();
}

let notFoundHandler = null;
export function setNotFound(handler) {
    notFoundHandler = handler;
}

export function navigateTo(path) {
    history.pushState({}, '', BASE + path);
    resolveRoute();
    // 新しいページは一番上から見せる（#付きならその見出しへ）。ページ側で戻し忘れても効くようにここで行う
    // html の scroll-behavior: smooth だと元の位置から流れて見えるので、瞬時に移動する
    const anchor = window.location.hash && document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (anchor) anchor.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    track_page_view();
}

// サイト内で画面を切り替えたときも、GA4にページ閲覧を送る
function track_page_view() {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_title: document.title,
    });
}

export function initRouter() {
    window.addEventListener('popstate', resolveRoute);
    resolveRoute();
}
