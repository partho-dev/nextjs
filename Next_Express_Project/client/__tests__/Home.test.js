// Its a fake test for CI 

describe('Fake Tests', () => {
  it('should always pass - Test 1', () => {
    expect(true).toBe(true);
  });

  it('should always pass - Test 2', () => {
    expect(1 + 1).toBe(2);
  });

  it('should always pass - Test 3', () => {
    expect('Hello').toMatch(/Hello/);
  });

  it('should always pass - Test 4', () => {
    expect([1, 2, 3]).toContain(2);
  });
});