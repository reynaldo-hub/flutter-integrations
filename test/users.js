const { describe, it } = require('mocha');
const { expect } = require('chai');
let request = require('supertest-as-promised');
const host = require('../app');

request = request(host);

describe('should get a user', () => {
  it('Should get', (done) => {
    request
      .get('/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        const { body } = response;
        expect(body).to.have.property('firstName');
        expect(body).to.have.property('lastName');
        expect(body).to.have.property('urlPicture');
        done(error);
      });
  });
});
