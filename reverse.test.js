const reverseString = require('./reverse');

test('Reverse a given string', () => {
  expect(reverseString('Jeff')).toBe('ffeJ');
})