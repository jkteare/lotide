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

// without function which create a new array after removing specified elements. 

const without = function (inputArray, itemsToRemove) {
  let filteredResults = inputArray.slice();

  for (i = 0; i < inputArray.length; i++ ) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (inputArray[i] === itemsToRemove[j]) {
        filteredResults.splice(i, 1)
      }
    }
  }
  return filteredResults
} 
  
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["a", "b", "c"], ['a', 'b', 'c'])) // []

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);