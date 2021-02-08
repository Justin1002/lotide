const letterPositions = require('../letterPositions')
const assert = require('chai').assert;

describe("#letterPositions", () => {
  
  it("returns index 0 when looking at key `l` for letterPositions(`lighthouse in the house`)", () => {
    const result = letterPositions("lighthouse in the house");
    
    assert.deepEqual(result["l"], [0]);
  });

  it("returns index [4,14] when looking at key `t` for letterPositions(`lighthouse in the house`)", () => {
    const result = letterPositions("lighthouse in the house");
    
    assert.deepEqual(result["t"], [4,14]);
  });

});