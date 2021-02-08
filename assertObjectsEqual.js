const { assert } = require('console');
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertObjectsEqual(ab, ba);

module.exports = assertObjectsEqual