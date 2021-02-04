const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4];
const numbers2 = [2,4,6,8];
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

const map = function(array,callbackFunc) {
  const results = [];
  for (let item of array) {
    results.push(callbackFunc(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
assertArraysEqual(map(numbers, num => num * 2), [2,4,6,8]);
assertArraysEqual(map(numbers2, num => num % 2), [0,0,0,0]);