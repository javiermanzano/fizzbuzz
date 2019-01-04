const expect = require('expect.js');
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  let result;
  beforeEach(() => result = fizzbuzz());

  it('creates a 100 length array', () => {
    expect(result.length).to.equal(100);
  });
  it('shows number from 1 to 100', () => {
    expect(result[0]).to.equal(1);
    expect(result[48]).to.equal(49);
    expect(result[97]).to.equal(98);
  });
  it('prints fizz on multiples of 3', () => {
    expect(result[2]).to.equal('fizz');
    expect(result[3]).to.equal(4);
    expect(result[5]).to.equal('fizz');
    expect(result[6]).to.equal(7);
    expect(result[98]).to.equal('fizz');
  });
  it('prints buzz on multiples of 5', () => {
    expect(result[4]).to.equal('buzz');
    expect(result[9]).to.equal('buzz');
  });
  it('prints fizzbuzz if multiple of 5 and 3', () => {
    expect(result[14]).to.equal('fizzbuzz');
    expect(result[29]).to.equal('fizzbuzz');
  });
});