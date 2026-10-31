import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { render_with_dom } from './helpers/dom.mjs';
import { AD_NOTICE_PAGE, AD_NOTICE_SITE, pr_label } from '../src/components/ad_notice.js';
import { renderHotelDetail } from '../src/pages/hotelDetail.js';
import { hotelList } from '../src/data/hotels.js';

test('ad_notice_constants', () => {
  assert.equal(AD_NOTICE_PAGE, 'このページには広告（楽天アフィリエイト）を含みます');
  assert.equal(AD_NOTICE_SITE, '当サイトはアフィリエイト広告（楽天アフィリエイト・A8.net 等）を利用しています。');
  assert.match(pr_label(), /PR/);
});

test('footer_has_site_notice', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
  assert.ok(html.includes(AD_NOTICE_SITE));
});

test('hotel_page_has_notice', () => {
  const doc = render_with_dom(renderHotelDetail, { id: hotelList[0].id });
  assert.match(doc.querySelector('.booking-card').textContent, /広告/);
});

test('footer_has_rakuten_credit', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
  assert.ok(html.includes('<a href="https://developers.rakuten.com/" target="_blank">Supported by Rakuten Developers</a>'));
});
