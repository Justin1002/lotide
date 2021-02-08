const assertArraysEqual = require('./assertArraysEqual')

const without = function(arr1, arr2) {
  //Filter array 1 to items that are not in array 2
  let filteredArr = arr1.filter(function(item) {
    return arr2.indexOf(item) === -1;
  });
  return filteredArr;
};

module.exports = without

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// assertArraysEqual(without([1, 2, 3],[1]),[2,3]);
// assertArraysEqual(without([1, "2", 3],[1]),[2,3]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);