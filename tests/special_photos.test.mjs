import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { specialList } from '../src/data/specials.js';
import { specialPhotos } from '../src/data/special_photos.js';
import { renderSpecialDetail } from '../src/pages/specialDetail.js';
import { render_with_dom } from './helpers/dom.mjs';

const THEMES = ['kokumin-hoyo-onsenchi', 'iousen-onsenchi', 'alkaline-simple-onsen', 'umibe-onsen'];

test('theme_specials_use_photos', () => {
  for (const id of THEMES) {
    const s = specialList.find(x => x.id === id);
    assert.equal(s.image, `./special-photos/${id}.webp`);
    assert.ok(existsSync(new URL(`../public/special-photos/${id}.webp`, import.meta.url)), id);
    assert.ok(specialPhotos[id]?.artist && specialPhotos[id]?.page, id);
  }
});

test('special_page_shows_photo_credit', () => {
  const doc = render_with_dom(renderSpecialDetail, { id: 'umibe-onsen' });
  const credit = doc.querySelector('.article-photo-credit');
  assert.ok(credit);
  assert.match(credit.textContent, /Wikimedia Commons/);
  assert.equal(doc.querySelector('.prefecture-hero-bg').getAttribute('alt'), specialPhotos['umibe-onsen'].alt);
});

test('special_without_photo_has_no_credit', () => {
  const doc = render_with_dom(renderSpecialDetail, { id: 'yukimi-roten' });
  assert.equal(doc.querySelector('.article-photo-credit'), null);
});
