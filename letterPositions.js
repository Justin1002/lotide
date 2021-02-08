const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {

  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    if ((/[a-zA-Z]/).test(sentence[i])) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions
// console.log(letterPositions("lighthouse in the house"));

// let result1 = letterPositions("lighthouse in the house");

// assertArraysEqual(result1["l"], [0]);
// assertArraysEqual(result1["t"], [4,14]);
// assertArraysEqual(letterPositions("hello").e, [1]);
