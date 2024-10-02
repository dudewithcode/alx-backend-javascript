const request = require('request');
const expect = require('chai').expect

describe('Basic Integration testing', () => {
  const url = 'http://localhost:7865'
  it('test get route /',  (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
