const calculator = require('./calculator.js');

describe('calculator adds ', () => {
  let jj;
  beforeEach(() => {
    jj = new calculator();
  });
  test('0 and positive number', () => {
    expect(jj.add(0, 5)).toBe(5);
  });
  test('negative and negative numbers', () => {
    expect(jj.add(-3, -8)).toBe(-11);
  })
  test('negative and positive numbers', () => {
    expect(jj.add(-3, 8)).toBe(5);
  })
})

describe('calculator subtracts ', () => {
  let jj;
  beforeEach(() => {
    jj = new calculator();
  });
  test('0 and positive number', () => {
    expect(jj.subtract(0, 5)).toBe(-5);
  });
  test('negative and negative numbers', () => {
    expect(jj.subtract(-3, -8)).toBe(5);
  })
  test('negative and positive numbers', () => {
    expect(jj.subtract(-3, 8)).toBe(-11);
  })
})