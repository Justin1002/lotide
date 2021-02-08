middle = require('../middle')
const assert = require('chai').assert;

describe("#middle", () => {
  it ("returns an empty array when a single array is input", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it ("returns [2] when we input [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });

  it ("returns [3,3] when we input [1,3,3,4]", () => {
    assert.deepEqual(middle([1,3,3,4]),[3,3]);
  });

});