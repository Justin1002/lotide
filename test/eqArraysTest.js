const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

describe("#eqArrays", () => {
  
  it("returns true when comparing [1,2,3] and [1,2,3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]), true)
  });

  it("returns false when comparing two unequal arrays", () => {
    assert.strictEqual(eqArrays([1,2], [1,2,3]), false)
  });

});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([[1,2,3], 2, 3], [[1,2,3], 2, 3]), true);
// assertEqual(eqArrays([[[1,2,3],2,3], 2, 3], [[[1,2],2,3], 2, 3]), false);

