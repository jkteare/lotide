// eqArrays function compares two arrays and return true or false.
const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function prints message based on result of internal eqArrays function.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`☑️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const middle = function(inputArr) {

  // Consider Array that is too short
  if (inputArr.length <= 2) {
    return [];
  }
    
  // Consider Array with Odd Number
  if ((inputArr.length % 2) !== 0) {
    return (inputArr[(inputArr.length - 1) / 2]);
  }

  // Consider Array with even Number
  if ((inputArr.length % 2) === 0) {
    let indexOne = ((inputArr.length / 2) - 1);
    return inputArr.slice(indexOne, indexOne + 2);
  }
};



// Test
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual((middle([1])), []); // => []
assertArraysEqual((middle([1, 2])), []); // => []

assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]);

assertArraysEqual((middle([1, 2, 3, 4])),[2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);