const flatten = require('../flatten')
const assert = require('chai').assert;

describe("#flatten", () => {
  
  it("returns [1,2,3,4,5] when given [1,[2,3,4],5] ", () => {
    assert.deepEqual(flatten([1,[2,3,4],5]), [1,2,3,4,5]);
  });

});
