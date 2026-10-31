import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate_salts, get_salts_by_onsen, TIER_LABELS } from '../src/data/bath_salts_lib.js';

const ONSENS = new Set(['o-gunma-1', 'o-oita-1']);
const base = () => ({
  id: 's-test-1', name: 'テスト湯', maker: 'テスト社', onsen_ids: ['o-gunma-1'], tier: 2,
  tier_basis: '温泉地の公認', ingredients_note: '', tags: [], rakuten_item_codes: ['shop:1'],
  is_gift: false, sources: [{ title: '公式', url: 'https://example.com' }], checked_at: '2026-11-01',
});

test('valid_salt_passes', () => {
  assert.deepEqual(validate_salts([base()], ONSENS), []);
});

test('tier1_requires_source', () => {
  const errs = validate_salts([{ ...base(), tier: 1, sources: [] }], ONSENS);
  assert.equal(errs.length, 1);
  assert.match(errs[0], /s-test-1/);
});

test('tier_out_of_range', () => {
  assert.ok(validate_salts([{ ...base(), tier: 4 }], ONSENS).length > 0);
});

test('unknown_onsen_id', () => {
  const errs = validate_salts([{ ...base(), onsen_ids: ['o-xxx-9'] }], ONSENS);
  assert.ok(errs.some(e => e.includes('o-xxx-9')));
});

test('requires_item_code', () => {
  assert.ok(validate_salts([{ ...base(), rakuten_item_codes: [] }], ONSENS).length > 0);
});

test('duplicate_id', () => {
  assert.ok(validate_salts([base(), base()], ONSENS).length > 0);
});

test('sorted_by_tier', () => {
  const salts = [{ ...base(), id: 'c', tier: 3 }, { ...base(), id: 'a', tier: 1 }, { ...base(), id: 'b', tier: 2 }];
  assert.deepEqual(get_salts_by_onsen('o-gunma-1', salts).map(s => s.tier), [1, 2, 3]);
  assert.deepEqual(get_salts_by_onsen('o-oita-1', salts), []);
});

test('tier_labels', () => {
  assert.deepEqual(TIER_LABELS, { 1: '本物の温泉成分', 2: '温泉地公認の再現', 3: '名前と香り・色' });
});
