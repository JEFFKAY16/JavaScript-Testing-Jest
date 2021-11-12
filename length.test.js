const stringLength = require('./length');

test('Display number of characters', () => {
  expect(stringLength('abcd')).toBe(4);
})

test('Check if condition is not met', () => {
  expect(() =>{
    stringLength('abcdjvbdhagyaHJXBJWvd')
  }).toThrow();
})