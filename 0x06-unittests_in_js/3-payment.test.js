const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('spy on calculateNumber', () => {
    const cctv = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(cctv.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(cctv.calculateNumber.callCount).to.equal(1);
    cctv.calculateNumber.restore();
  });
});
