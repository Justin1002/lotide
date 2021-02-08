const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4];
const numbers2 = [2,4,6,8];
const assertArraysEqual = require('./assertArraysEqual')

const map = function(array,callbackFunc) {
  const results = [];
  for (let item of array) {
    results.push(callbackFunc(item));
  }
  return results;
};

module.exports = map

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
// assertArraysEqual(map(numbers, num => num * 2), [2,4,6,8]);
// assertArraysEqual(map(numbers2, num => num % 2), [0,0,0,0]);