// 8-api/api.test.js
const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code and result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

