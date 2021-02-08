const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(arr) {
  let newArr = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      for (let j = 0; j < elem.length; j++) {
        newArr.push(elem[j]);
      }
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

module.exports = flatten
// console.log(flatten([1, 2, [3, 4], 5, [6]]));

// assertArraysEqual(flatten([1,[2,3,4],5]),[1,2,3,4,5]);
