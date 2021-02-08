const eqObjects = require('../eqObjects')
const assert = require('chai').assert;

describe("#eqObjects", () => {
  
  it("returns true when comparing two equal objects", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba),true);
  });

    
  it("returns true when comparing two equal nested objects", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: {x: 2, y: 3} }, b: 2 }, { a: { y: 0, z: {x: 2, y: 3} }, b: 2 }),true);
  });

  it("returns false when comparing two unequal objects", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2),false);
  });

});

