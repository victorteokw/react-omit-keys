const omitKeys = require('./index');

describe('omit keys', () => {
  it('omits keys', () => {
    expect(omitKeys({
      a: 1,
      b: 2
    }, 'a')).toEqual({
      b: 2
    });
  });
});
