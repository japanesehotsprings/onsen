import { test } from 'node:test';
import assert from 'node:assert/strict';
import { render_with_dom } from './helpers/dom.mjs';
import { addRoute, navigateTo } from '../src/router.js';

test('navigate_scrolls_to_top', () => {
  render_with_dom(() => {}, {}, '/');
  const calls = [];
  window.scrollTo = (...a) => calls.push(a);
  addRoute('/nyuyokuzai', () => { document.getElementById('app').innerHTML = '<h1>x</h1>'; });
  navigateTo('/nyuyokuzai');
  assert.deepEqual(calls.at(-1), [{ top: 0, left: 0, behavior: 'instant' }]);
});
