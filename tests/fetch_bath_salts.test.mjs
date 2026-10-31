import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve_salt } from '../scripts/fetch_bath_salts.mjs';

const salt = { id: 's1', rakuten_item_codes: ['shop:A', 'shop:B'] };
const item = (code, availability = 1) => ({
  itemCode: code, affiliateUrl: `https://hb.afl.rakuten.co.jp/x/${code}`, availability,
  mediumImageUrls: [`https://thumbnail.image.rakuten.co.jp/${code}.jpg?_ex=128x128`],
});

test('resolve_salt_first_available', async () => {
  const r = await resolve_salt(salt, async c => (c === 'shop:B' ? item(c) : null));
  assert.equal(r.item_code, 'shop:B');
  assert.equal(r.affiliate_url, 'https://hb.afl.rakuten.co.jp/x/shop:B');
  assert.equal(r.image_url, 'https://thumbnail.image.rakuten.co.jp/shop:B.jpg?_ex=300x300');
  assert.match(r.fetched_at, /^\d{4}-\d{2}-\d{2}$/);
});

test('resolve_salt_skips_unavailable', async () => {
  const r = await resolve_salt(salt, async c => item(c, c === 'shop:A' ? 0 : 1));
  assert.equal(r.item_code, 'shop:B');
});

test('resolve_salt_all_missing', async () => {
  assert.equal(await resolve_salt(salt, async () => null), null);
});

test('fetch_failure_keeps_previous', async () => {
  const previous = { item_code: 'shop:A', image_url: '', affiliate_url: 'u', fetched_at: '2026-10-01' };
  const r = await resolve_salt(salt, async () => { throw new Error('network'); }, previous);
  assert.deepEqual(r, previous);
});

test('missing_env_skips_fetch', () => {
  const file = new URL('../src/data/bath_salts_resolved.js', import.meta.url);
  const before = readFileSync(file, 'utf-8');
  const out = execFileSync('node', ['scripts/fetch_bath_salts.mjs'], {
    env: { ...process.env, RAKUTEN_APP_ID: '', RAKUTEN_ACCESS_KEY: '' }, encoding: 'utf-8',
  });
  assert.match(out, /楽天APIのキーがないため取得を飛ばしました/);
  assert.equal(readFileSync(file, 'utf-8'), before);
});
