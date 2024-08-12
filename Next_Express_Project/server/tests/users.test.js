const request = require('supertest');
const app = require('../server'); // Adjust the path according to your structure

describe('GET /api/v1/users', () => {
  it('should return object of users in an array ', async () => {
    const res = await request(app).get('/api/v1/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
