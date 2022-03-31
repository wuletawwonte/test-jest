const { expect } = require('@jest/globals');
const {stringLength, reverseString} = require('./app');

test('Takes the string "Wuletaw" and returns 7', () => {
  expect(stringLength('Wuletaw')).toBe(7);
})

test('Takes a string longer than 10 or shorter than 1 and throws error', () => {
  expect(() => stringLength('Wuletawwonte')).toThrow();
})

test('Takes a string "Samuel" and returns the reversed string "leumaS"', () => {
  expect(reverseString('Samuel')).toBe('leumaS');
})