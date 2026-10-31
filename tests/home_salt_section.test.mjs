import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { salt_home_section } from '../src/components/salt_home_section.js';
import { renderHome } from '../src/pages/home.js';
import { render_with_dom } from './helpers/dom.mjs';

const mk = (id, onsen_ids) => ({ id, tier: 2, onsen_ids });
const res = { item_code: 's:1', image_url: '', affiliate_url: 'https://hb.afl.rakuten.co.jp/a', fetched_at: '2026-11-01' };

test('home_section_links_corner_without_affiliate', () => {
  const html = salt_home_section([mk('a', ['o-oita-1', 'o-gunma-1']), mk('b', ['o-oita-1'])], { a: res, b: res });
  assert.match(html, /家で入る名湯/);
  assert.ok(html.includes('href="/nyuyokuzai"'));
  assert.ok(html.indexOf('/nyuyokuzai/o-oita-1') < html.indexOf('/nyuyokuzai/o-gunma-1'));
  for (const t of ['本物の温泉成分', '温泉地公認の再現', '名前と香り・色']) assert.ok(html.includes(t));
  assert.ok(!html.includes('hb.afl.rakuten'));
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
