// 10-api/api.test.js
const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  // Existing tests for the index page
});

describe('Cart page', () => {
  // Existing tests for the cart page
});

describe('/available_payments endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct payment methods', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return welcome message with username', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: {
        userName: 'Betty'
      }
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

