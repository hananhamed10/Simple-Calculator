const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./calculator');

test('2 + 3 should equal 5', () => {
  assert.equal(add(2, 3), 5);
});

test('7 + 0 should equal 7', () => {
  assert.equal(add(7, 0), 7);
});

test('-2 + 3 should equal 1', () => {
  assert.equal(add(-2, 3), 1);
});
