const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculate number', () => {
  describe('type === SUM', () => {
    it('a and b are whole number floats', () => {
      expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
    });
    it('round down a', () => {
      expect(calculateNumber('SUM', 1.4, 3.0)).to.equal(4);
    });
    it('round down b', () => {
      expect(calculateNumber('SUM', 1.0, 3.4)).to.equal(4);
    });
    it('round down a and b', () => {
      expect(calculateNumber('SUM', 1.4, 3.4)).to.equal(4);
    });
    it('round up a', () => {
      expect(calculateNumber('SUM', 1.6, 3.0)).to.equal(5);
    });
    it('round up b', () => {
      expect(calculateNumber('SUM', 1.0, 3.6)).to.equal(5);
    });
    it('round up a and b', () => {
      expect(calculateNumber('SUM', 1.6, 3.6)).to.equal(6);
    });
    it('round up rucurring a and b', () => {
      expect(calculateNumber('SUM', 1.999, 3.333)).to.equal(5);
    });
  });
  describe('type === SUBTRACT', () => {
    it('a less than b', () => {
       expect(calculateNumber('SUBTRACT', 1.4, 3.6)).to.equal(-3);
    });
    it('a greater than b', () => {
       expect(calculateNumber('SUBTRACT', 3.2, 2.6)).to.equal(0);
    });
    it('a and b *both negative*', () => {
       expect(calculateNumber('SUBTRACT', -1.9, -3.2)).to.equal(1);
    });
  });
  describe('type === DIVIDE', () => {
    it('b is 0', () => {
      expect(calculateNumber('DIVIDE', 8.0, 0.4)).to.equal('Error');
    });
    it('a negative b positive', () => {
      expect(calculateNumber('DIVIDE', -8.0, 3.8)).to.equal(-2);
    });
    it('a negative b negative', () => {
      expect(calculateNumber('DIVIDE', -8.0, -3.8)).to.equal(2);
    });
    it('a is zero', () => {
      expect(calculateNumber('DIVIDE', -0.4, -3.8)).to.equal(0);
    });
  });
});
