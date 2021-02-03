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

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1,[2,3,4],5]),[1,2,3,4,5]);