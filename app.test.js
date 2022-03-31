const { expect } = require('@jest/globals');
const stringLength = require('./app');

test('Takes the string "Wuletaw" and returns 7', () => {
  expect(stringLength('Wuletaw')).toBe(7);
})