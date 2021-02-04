const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {

  for (const items in obj) {
    if (callback(obj[items])) {
      return items;
    }
  }
  return undefined;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5);

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars > 0);

assertEqual(result, undefined);
assertEqual(result2, "Blue Hill");