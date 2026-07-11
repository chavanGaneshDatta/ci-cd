const { add } = require('../utils');

describe('add function', () => {
  test('adds 5 + 3 to equal 8', () => {
    expect(add(5, 3)).toBe(8);
  });

  test('handles negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
});
