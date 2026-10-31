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
import { bathSaltList } from './data/bath_salts.js';
import { bathSaltResolved } from './data/bath_salts_resolved.js';

// 入浴剤コーナーの比較ページ（楽天の出品が見つかった商品のある温泉地だけ）
function bath_salt_onsen_ids() {
  return [...new Set(bathSaltList.filter(s => bathSaltResolved[s.id]).flatMap(s => s.onsen_ids))];
}

export function page_paths() {
  return [
    '/', '/prefectures', '/onsens', '/hotels', '/spring-types', '/specials', '/guide', '/courses', '/articles', '/for-inns', '/nyuyokuzai',
    ...prefectures.map(p => `/prefecture/${p.id}`),
    ...onsenList.map(o => `/onsen/${o.id}`),
    ...hotelList.map(h => `/hotel/${h.id}`),
    ...springTypeList.map(s => `/spring-type/${s.id}`),
    ...specialList.map(s => `/special/${s.id}`),
    ...courseList.map(c => `/course/${c.id}`),
    ...articleList.map(a => `/article/${a.id}`),
    ...bath_salt_onsen_ids().map(id => `/nyuyokuzai/${id}`),
  ];
}
