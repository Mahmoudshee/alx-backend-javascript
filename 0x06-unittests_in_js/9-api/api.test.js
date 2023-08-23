// 9-api/api.test.js
const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  // Existing tests for the index page
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code and result when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is not a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

