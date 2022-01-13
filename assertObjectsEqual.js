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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected))  {

    console.log(`☑️ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

//Testing True;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);

//Testing False;

const ef = { a: "1", c: "3" };

assertObjectsEqual(ab, ef);
