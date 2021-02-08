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

module.exports = flatten
