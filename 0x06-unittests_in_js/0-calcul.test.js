const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('round a and b them sum', () => {
  it('a and b are whole number floats', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('round down a', () => {
    assert.strictEqual(calculateNumber(1.4, 3.0), 4);
  });
  it('round down b', () => {
    assert.strictEqual(calculateNumber(1.0, 3.4), 4);
  });
  it('round down a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });
  it('round up a', () => {
    assert.strictEqual(calculateNumber(1.6, 3.0), 5);
  });
  it('round up b', () => {
    assert.strictEqual(calculateNumber(1.0, 3.6), 5);
  });
  it('round up a and b', () => {
    assert.strictEqual(calculateNumber(1.6, 3.6), 6);
  });
  it('round up rucurring a and b', () => {
    assert.strictEqual(calculateNumber(1.999, 3.333), 5);
  });
});
