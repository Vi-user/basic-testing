// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 1, b: 2, action: Action.Add });
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 1, b: 2, action: Action.Subtract });
    expect(result).toBe(-1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 4, b: 13, action: Action.Multiply });
    expect(result).toBe(52);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 8, b: 2, action: Action.Divide });
    expect(result).toBe(4);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 8, b: 2, action: Action.Exponentiate });
    expect(result).toBe(64);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 8, b: 2, action: 'doSth' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({ a: '8', b: 2, action: Action.Add });
    expect(result).toBeNull();
  });
});
