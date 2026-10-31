import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { salt_home_section } from '../src/components/salt_home_section.js';
import { renderHome } from '../src/pages/home.js';
import { render_with_dom } from './helpers/dom.mjs';

const mk = (id, onsen_ids) => ({ id, tier: 2, onsen_ids });
const res = { item_code: 's:1', image_url: '', affiliate_url: 'https://hb.afl.rakuten.co.jp/a', fetched_at: '2026-11-01' };

test('home_section_links_corner', () => {
  const html = salt_home_section([mk('a', ['o-oita-1', 'o-gunma-1']), mk('b', ['o-oita-1'])], { a: res, b: res });
  assert.match(html, /家で入る名湯/);
  assert.ok(html.includes('href="/nyuyokuzai"'));
  assert.ok(html.indexOf('/nyuyokuzai/o-oita-1') < html.indexOf('/nyuyokuzai/o-gunma-1'));
  for (const t of ['本物の温泉成分', '温泉地公認の再現', '名前と香り・色']) assert.ok(html.includes(t));
});

test('home_section_shows_product_images_with_pr', () => {
  const img = { ...res, image_url: 'https://thumbnail.image.rakuten.co.jp/x.jpg' };
  const salts = [1, 1, 2, 2, 2, 2, 3, 3, 3].map((t, i) => ({ ...mk(`s${i}`, ['o-oita-1']), tier: t, name: `商品${i}` }));
  const resolved = Object.fromEntries(salts.map(s => [s.id, img]));
  const html = salt_home_section(salts, resolved);
  const tiles = html.match(/class="salt-home-item"/g) || [];
  assert.equal(tiles.length, 6);
  // 区分ごとに 1・3・2 点（①は1点、②3点、③2点）
  assert.deepEqual(['商品0', '商品2', '商品3', '商品4', '商品6', '商品7'].map(n => html.includes(n)), [true, true, true, true, true, true]);
  assert.match(html, /<img[^>]+thumbnail\.image\.rakuten/);
  assert.match(html, /rel="sponsored noopener"/);
  assert.match(html, /class="pr-label"/);
  assert.match(html, /広告（楽天アフィリエイト）/);
});

test('home_section_skips_items_without_image', () => {
  const html = salt_home_section([mk('a', ['o-oita-1'])], { a: res });
  assert.equal((html.match(/class="salt-home-item"/g) || []).length, 0);
  assert.ok(!html.includes('pr-label'));
});

test('home_section_hidden_when_no_products', () => {
  assert.equal(salt_home_section([mk('a', ['o-oita-1'])], { a: null }), '');
});

test('home_section_between_specials_and_articles', () => {
  const doc = render_with_dom(renderHome);
  const ids = [...doc.querySelectorAll('#app > section')].map(s => s.id);
  assert.deepEqual(ids.slice(ids.indexOf('specials'), ids.indexOf('specials') + 3), ['specials', 'home-onsen', 'articles']);
});

test('header_nav_has_corner', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
  const nav = html.slice(html.indexOf('<ul class="nav-links">'), html.indexOf('</ul>', html.indexOf('<ul class="nav-links">')));
  assert.ok(nav.includes('<li><a href="/nyuyokuzai">家で入る名湯</a></li>'));
});
