const capitalize = require('./capitalize');

test('Capitalize string', () => {
  expect(capitalize('kayombo')).toBe('KAYOMBO');
})