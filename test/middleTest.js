assertArraysEqual = require('../assertArraysEqual')
middle = require('../middle')

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,3,3,4]), [3,3]);