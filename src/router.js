/**
 * ハッシュベースのシンプルなSPAルーター
 * ページ遷移とURLの管理を行う
 */

// ルート定義を保持する配列
const routes = [];

/**
 * ルートを登録する
 * @param {string} path - ルートのパスパターン（例: '/prefecture/:id'）
 * @param {Function} handler - ルートに一致した場合に呼び出される関数
 */
export function addRoute(path, handler) {
    routes.push({ path, handler });
}

/**
 * 現在のハッシュからパスを取得
 * @returns {string} 現在のパス
 */
function getCurrentPath() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
}

/**
 * パスパターンとURLを照合し、パラメータを抽出する
 * @param {string} pattern - ルートパターン（例: '/prefecture/:id'）
 * @param {string} path - 実際のパス（例: '/prefecture/tokyo'）
 * @returns {object|null} パラメータオブジェクト、またはマッチしない場合はnull
 */
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

/**
 * クエリパラメータを解析する
 * @param {string} path - クエリ文字列を含むパス
 * @returns {object} クエリパラメータオブジェクト
 */
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

/**
 * 現在のパスに一致するルートを見つけて実行する
 */
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

    // マッチするルートがない場合はトップページにリダイレクト
    navigateTo('/');
}

/**
 * 指定したパスに遷移する
 * @param {string} path - 遷移先のパス
 */
export function navigateTo(path) {
    window.location.hash = path;
}

/**
 * ルーターを初期化する
 * hashchangeイベントのリスナーを登録し、初回のルート解決を行う
 */
export function initRouter() {
    window.addEventListener('hashchange', resolveRoute);
    resolveRoute();
}
