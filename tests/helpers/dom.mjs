/**
 * テスト用の DOM（scripts/prerender.mjs の setup_dom と同じグローバルを立てる）
 */
import { JSDOM } from 'jsdom';

export function render_with_dom(handler, params = {}, path = '/') {
  const dom = new JSDOM('<!doctype html><html><head><title></title></head><body><div id="app"></div></body></html>', { url: 'https://japan-onsen-web.pages.dev' + path });
  const w = dom.window;
  w.scrollTo = () => {};
  w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  globalThis.window = w;
  globalThis.document = w.document;
  globalThis.history = w.history;
  globalThis.location = w.location;
  globalThis.IntersectionObserver = w.IntersectionObserver;
  globalThis.HTMLElement = w.HTMLElement;
  globalThis.Node = w.Node;
  handler({ params, query: {} });
  return w.document;
}
