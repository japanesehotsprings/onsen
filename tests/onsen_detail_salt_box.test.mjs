import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { salt_box, renderOnsenDetail } from '../src/pages/onsenDetail.js';
import { onsenList } from '../src/data/onsen.js';
import { render_with_dom } from './helpers/dom.mjs';
import { bathSaltList } from '../src/data/bath_salts.js';

const kusatsu = onsenList.find(o => o.id === 'o-gunma-1');
const mk = (id, tier) => ({
  id, name: `商品${id}`, maker: 'm', onsen_ids: ['o-gunma-1'], tier, tier_basis: 'b', ingredients_note: '',
  tags: [], rakuten_item_codes: ['s:1'], is_gift: false, sources: [{ title: 't', url: 'https://e.com' }], checked_at: '2026-11-01',
});
const res = { item_code: 's:1', image_url: '', affiliate_url: 'https://hb.afl.rakuten.co.jp/a', fetched_at: '2026-11-01' };

test('box_shown_with_salts', () => {
  const html = salt_box(kusatsu, [mk('c', 3), mk('a', 1), mk('b', 2)], { a: res, b: res, c: res });
  assert.match(html, /家で味わうなら/);
  assert.match(html, /PR/);
  assert.equal((html.match(/class="salt-card /g) || []).length, 2);
  assert.ok(html.includes('商品a') && html.includes('商品b') && !html.includes('商品c'));
  assert.ok(html.includes('href="/nyuyokuzai/o-gunma-1"'));
});

test('box_hidden_without_salts', () => {
  assert.equal(salt_box(kusatsu, [mk('a', 1)], { a: null }), '');
  const empty = onsenList.find(o => !bathSaltList.some(s => s.onsen_ids.includes(o.id)));
  const doc = render_with_dom(renderOnsenDetail, { id: empty.id });
  assert.ok(!doc.getElementById('app').textContent.includes('家で味わうなら'));
});

test('box_before_faq', () => {
  const src = readFileSync(new URL('../src/pages/onsenDetail.js', import.meta.url), 'utf-8');
  const box = src.indexOf('${salt_box(');
  assert.ok(box > 0 && box < src.indexOf('${faq_section('));
});
