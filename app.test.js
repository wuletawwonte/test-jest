const { expect } = require('@jest/globals');
const sum = require('./app');

test('Add 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})