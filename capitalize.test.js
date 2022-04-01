const capitalize = require('./capitalize.js');

test("capitalizes the first character of the string wuletaw", () => {
  expect(capitalize('wuletaw')).toBe('Wuletaw');
})
