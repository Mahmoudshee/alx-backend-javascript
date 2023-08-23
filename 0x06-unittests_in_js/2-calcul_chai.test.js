const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber function', () => {
  it('should sum rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should subtract rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should divide rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.311, 0.001);
  });

  it('should throw error for invalid operation type', () => {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error);
  });
});

