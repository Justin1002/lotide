const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {

  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    if ((/[a-zA-Z]/).test(sentence[i])) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

let result1 = letterPositions("lighthouse in the house");

assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["t"], [4,14]);
assertArraysEqual(letterPositions("hello").e, [1]);
