const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let obj = {};

  for (const letter of str) {
    if ((/[a-zA-Z]/).test(letter)) {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  }
  return obj;
};

const result1 = countLetters("lighthouse in the house");
console.log(countLetters("lighthouse in the house"));

assertEqual(result1["l"], 1);
assertEqual(result1["n"], 1);