const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
    console.log(`😡️😡️😡️ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(arr1, arr2) {
  //Filter array 1 to items that are not in array 2 
  let filteredArr = arr1.filter(function (item) {
    return arr2.indexOf(item) === -1;
  });
  return filteredArr
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

assertArraysEqual(without([1, 2, 3],[1]),[2,3])
assertArraysEqual(without([1, "2", 3],[1]),[2,3])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);