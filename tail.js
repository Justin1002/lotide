const tail = function(arr) {
  let modArr = [];
  for (let i = 1; i < arr.length; i++) {
    modArr.push(arr[i]);
  }
  return modArr;
};

module.exports = tail