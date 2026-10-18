/**
 * 静的HTMLとして書き出すページの一覧（prerender.mjs と旧サイトの転送ページ生成で共通）
 * 検索ページは中身が検索語しだいなので含めない
 */
import { prefectures } from './data/prefectures.js';
import { onsenList } from './data/onsen.js';
import { hotelList } from './data/hotels.js';
import { springTypeList } from './data/springTypes.js';
import { specialList } from './data/specials.js';
import { courseList } from './data/courses.js';
import { articleList } from './data/articles.js';

export function page_paths() {
  return [
    '/', '/prefectures', '/onsens', '/hotels', '/spring-types', '/specials', '/guide', '/courses', '/articles',
    ...prefectures.map(p => `/prefecture/${p.id}`),
    ...onsenList.map(o => `/onsen/${o.id}`),
    ...hotelList.map(h => `/hotel/${h.id}`),
    ...springTypeList.map(s => `/spring-type/${s.id}`),
    ...specialList.map(s => `/special/${s.id}`),
    ...courseList.map(c => `/course/${c.id}`),
    ...articleList.map(a => `/article/${a.id}`),
  ];
}
