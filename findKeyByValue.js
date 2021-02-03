const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, key) {
  let str = undefined;
  for (const item in obj) {
    if (obj[item] === key) {
      str = item;
      return str;
    }
  }
  return str;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");