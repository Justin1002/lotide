const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const items of Object.keys(object1)) {
      if (Array.isArray(object1[items]) && Array.isArray(object2[items])) {
        let val = eqArrays(object1[items],object2[items]);
        if (val === true) {
          continue;
        } else {
          return false;
        }
      }
      if (object1[items] !== object2[items]) {
        return false;
      }
    }
    return true;
  }
  return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, abc),false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
