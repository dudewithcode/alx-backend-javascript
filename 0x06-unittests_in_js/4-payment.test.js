const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('spy and stub calculateNumber', () => {
    const cctv = sinon.spy(console);
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.equal(1);
    expect(cctv.log.calledWith('The total is: 10')).to.be.true;
    expect(cctv.log.callCount).to.equal(1);
    cctv.log.restore();
    stub.restore();
  });
});
