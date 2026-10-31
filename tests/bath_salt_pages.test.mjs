import { test } from 'node:test';
import assert from 'node:assert/strict';
import { salt_card, visible_salts } from '../src/components/salt_card.js';
import { build_list_html } from '../src/pages/bathSaltList.js';
import { build_detail_html, renderBathSaltDetail } from '../src/pages/bathSaltDetail.js';
import { AD_NOTICE_PAGE } from '../src/components/ad_notice.js';
import { onsenList } from '../src/data/onsen.js';
import { page_paths } from '../src/page_list.js';
import { render_with_dom } from './helpers/dom.mjs';

const kusatsu = onsenList.find(o => o.id === 'o-gunma-1');
const mk = (id, tier, extra = {}) => ({
  id, name: `商品${id}`, maker: 'メーカー', onsen_ids: ['o-gunma-1'], tier, tier_basis: `根拠${id}`,
  ingredients_note: '成分メモ', tags: ['にごり湯'], rakuten_item_codes: ['s:1'], is_gift: false,
  sources: [{ title: `出典${id}`, url: `https://example.com/${id}` }], checked_at: '2026-11-01', ...extra,
});
const res = { item_code: 's:1', image_url: 'https://thumbnail.image.rakuten.co.jp/a.jpg', affiliate_url: 'https://hb.afl.rakuten.co.jp/a', fetched_at: '2026-11-01' };

test('card_shows_tier_badge', () => {
  const html = salt_card(mk('a', 1), res);
  assert.match(html, /本物の温泉成分/);
  assert.match(html, /根拠a/);
  assert.match(html, /<img[^>]+thumbnail\.image\.rakuten/);
  assert.match(html, /href="https:\/\/hb\.afl\.rakuten\.co\.jp\/a"[^>]*rel="sponsored noopener"[^>]*target="_blank"|target="_blank"[^>]*rel="sponsored noopener"/);
});

test('card_hidden_when_unresolved', () => {
  assert.equal(salt_card(mk('a', 1), null), '');
  assert.deepEqual(visible_salts([mk('a', 1), mk('b', 2)], { a: res, b: null }).map(s => s.id), ['a']);
});

test('card_without_image', () => {
  const html = salt_card(mk('a', 2), { ...res, image_url: '' });
  assert.ok(!html.includes('<img'));
  assert.match(html, /温泉地公認の再現/);
  assert.match(html, /hb\.afl\.rakuten/);
});

test('card_escapes_html', () => {
  const html = salt_card(mk('a', 3, { name: 'A<b>&' }), res);
  assert.ok(html.includes('A&lt;b&gt;&amp;'));
  assert.ok(!html.includes('<b>'));
});

test('card_has_no_price', () => {
  const html = salt_card(mk('a', 1), res);
  assert.ok(!/円|¥/.test(html));
});

test('list_page_has_notice_and_tiers', () => {
  const html = build_list_html([mk('a', 1)], { a: res });
  assert.ok(html.includes(AD_NOTICE_PAGE));
  for (const t of ['本物の温泉成分', '温泉地公認の再現', '名前と香り・色']) assert.ok(html.includes(t));
  assert.ok(html.includes('href="/nyuyokuzai/o-gunma-1"'));
});

test('detail_page_order', () => {
  const html = build_detail_html(kusatsu, [mk('a', 1), mk('b', 3)], { a: res, b: res });
  const pos = ['本物の湯', '商品b', '本物に行くなら', '出典a'].map(s => html.indexOf(s));
  assert.ok(pos.every(p => p >= 0), JSON.stringify(pos));
  assert.deepEqual([...pos].sort((x, y) => x - y), pos);
  assert.ok(html.includes('href="/onsen/o-gunma-1"'));
  assert.ok(html.indexOf('商品a') < html.indexOf('商品b'));
  assert.ok(html.includes(AD_NOTICE_PAGE));
});

test('detail_unknown_or_empty_is_404', () => {
  const doc = render_with_dom(renderBathSaltDetail, { id: 'o-xxx-9' });
  assert.match(doc.getElementById('app').textContent, /ページが見つかりません/);
  assert.match(doc.querySelector('meta[name="robots"]').getAttribute('content'), /noindex/);
});

test('page_list_includes_corner', () => {
  const paths = page_paths();
  assert.ok(paths.includes('/nyuyokuzai'));
  assert.ok(!paths.includes('/nyuyokuzai/o-xxx-9'));
});
