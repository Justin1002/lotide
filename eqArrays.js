const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
//console.log(eqArrays([1, 2, 3], [3, 2, 1]));

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([[1,2,3], 2, 3], [[1,2,3], 2, 3]), true);
assertEqual(eqArrays([[[1,2,3],2,3], 2, 3], [[[1,2],2,3], 2, 3]), false);