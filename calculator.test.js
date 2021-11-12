const { test, expect } = require('@jest/globals');
const calculator = require('./calculator');

describe('My Calculator Methods', () => {
  test('Sum of num1 and num2', () => {
    expect(calculator.add(3, 5)).toBe(8)
  })

  test('Difference of num1 and num2', () => {
    expect(calculator.subtract(10, 3)).toBe(7)
  })

  test('Quotient of num1 and num2', () => {
    expect(calculator.divide(12, 3)).toBe(4)
  })

  test('Prodect of num1 and num2', () => {
    expect(calculator.multiply(3, 5)).toBe(15)
  })
})