const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const items of Object.keys(object1)) {
    //If the value of that item is an object
    if (object1[items] instanceof Object && Array.isArray(object1[items]) === false) {
      if (!eqObjects(object1[items],object2[items])) {
        return false;
      }
    } else {
      if (Array.isArray(object1[items]) && Array.isArray(object2[items])) {
        let val = eqArrays(object1[items],object2[items]);
        if (val === false) {
          return false;
        }
      }
      if (object1[items] !== object2[items] && !Array.isArray(object1[items])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true

// assertEqual(eqObjects(ab, ba),true);

// const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, abc),false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: {x: 2, y: 3} }, b: 2 }, { a: { y: 0, z: {x: 2, y: 3} }, b: 2 }), true);

