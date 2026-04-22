const routes = [];

export function addRoute(path, handler) {
    routes.push({ path, handler });
}

const BASE = '/onsen';

function getCurrentPath() {
    const path = window.location.pathname;
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

    navigateTo('/');
}

export function navigateTo(path) {
    history.pushState({}, '', BASE + path);
    resolveRoute();
}

export function initRouter() {
    window.addEventListener('popstate', resolveRoute);
    resolveRoute();
}
