const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculate number', () => {
  describe('type === SUM', () => {
    it('a and b are whole number floats', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
    });
    it('round down a', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.0), 4);
    });
    it('round down b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 3.4), 4);
    });
    it('round down a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.4), 4);
    });
    it('round up a', () => {
      assert.strictEqual(calculateNumber('SUM', 1.6, 3.0), 5);
    });
    it('round up b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 3.6), 5);
    });
    it('round up a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.6, 3.6), 6);
    });
    it('round up rucurring a and b', () => {
      assert.strictEqual(calculateNumber('SUM', 1.999, 3.333), 5);
    });
  });
  describe('type === SUBTRACT', () => {
    it('a less than b', () => {
       assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.6), -3);
    });
    it('a greater than b', () => {
       assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 2.6), 0);
    });
    it('a and b *both negative*', () => {
       assert.strictEqual(calculateNumber('SUBTRACT', -1.9, -3.2), 1);
    });
  });
  describe('type === DIVIDE', () => {
    it('b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0.4), 'Error');
    });
    it('a negative b positive', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, 3.8), -2);
    });
    it('a negative b negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, -3.8), 2);
    });
    it('a is zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -0.4, -3.8), 0);
    });
  });
});
