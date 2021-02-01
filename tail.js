const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️🤑️🤑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡️😡️😡️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let modArr = [];
  for (let i = 1; i < arr.length; i++) {
    modArr.push(arr[i]);
  }
  return modArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const test = tail([1]);
assertEqual(test.length, 0);