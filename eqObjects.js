const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }

  for (let key in objectOne) {
    if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }
  return true;
};

//First Round Testing

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// Second Rount Testing
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false