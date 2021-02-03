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

const middle = function(arr) {
  let newArr = [];
  if (arr.length === 1 || arr.length === 2) {
    return newArr;
  } else if (arr.length % 2 !== 0) {
    let middleIndex = Math.floor(arr.length / 2);
    newArr.push(arr[middleIndex]);
    return newArr;
  } else {
    let middleIndex = Math.floor(arr.length / 2 - 1);
    newArr.push(arr[middleIndex]);
    newArr.push(arr[middleIndex + 1]);
    return newArr;
  }
};

console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,3,3,4]), [3,3]);