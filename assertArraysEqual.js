const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected) === true) {
    console.log(`☑️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Test assertArraysEqual
assertArraysEqual([1,2,3], [1,2,4], true);
