const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let cctv;
  beforeEach( () => {
    if (!cctv) {
      cctv = sinon.spy(console);
    }
  });
  afterEach( () => {
    cctv.log.resetHistory();
  });
  it('console is logging the string The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(cctv.log.calledWith('The total is: 120')).to.be.true;
    expect(cctv.log.callCount).to.equal(1);
  });
  it('console is logging the string The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(cctv.log.calledWith('The total is: 20')).to.be.true;
    expect(cctv.log.callCount).to.equal(1);
  });
});
