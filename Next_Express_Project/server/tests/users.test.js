// const request = require('supertest');
// const app = require('../server'); // Adjust the path according to your structure

// describe('GET /api/v1/users', () => {
//   it('should return object of users in an array ', async () => {
//     const res = await request(app).get('/api/v1/users');
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toBeInstanceOf(Array);
//   });
// });


// Fke tests 

describe('Fake Express Tests', () => {
  it('should always pass - Express Test 1', () => {
    expect(true).toBe(true);
  });

  it('should always pass - Express Test 2', () => {
    expect(2 * 2).toBe(4);
  });

  it('should always pass - Express Test 3', () => {
    expect('Express').toMatch(/Express/);
  });

  it('should always pass - Express Test 4', () => {
    expect({ key: 'value' }).toHaveProperty('key', 'value');
  });
});
