const supertest = require('supertest');
const server = require('./server.js');

describe('GET /', () => {
  it('should return http 200', async () => {
    const response = await supertest(server).get('/');
    expect(response.status).toEqual(200)
  });
  it('should return json object', async () => {
    const response = await supertest(server).get('/');
    // tomatch uses a regular expression to check the value
    expect(response.type).toMatch(/json/i)
  });
});