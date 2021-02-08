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

module.exports = middle