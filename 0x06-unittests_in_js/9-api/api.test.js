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
  it('GET /cart/:id id is valid', (done) => {
    request.get(`${url}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('GET /cart/:id id is negative', (done) => {
    request.get(`${url}/cart/-12`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('GET /cart/:id id is string', (done) => {
    request.get(`${url}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
