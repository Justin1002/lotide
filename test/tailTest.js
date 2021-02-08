assertEqual = require('../assertEqual')
tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {
  it ("returns an array of size two given an array of size 3", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2)
  });

  it ("returns 'lighthouse' as the first element in an array ['Hello','Lighthouse','Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0],"Lighthouse")
  });

  it ("returns 'labs' as the second element in an array ['Hello','Lighthouse','Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1],"Labs")
  });

});