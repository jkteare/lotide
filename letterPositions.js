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

const letterPositions = function (sentence) {
const results = {}

  for (j = 0; j < sentence.length; j++) {
    if (sentence[j]=== ' ') continue

    else if (results[sentence[j]]) {
      results[sentence[j]].push(j)

    } else {
      results[sentence[j]] = [j]
    }
}
return results
}

assertArraysEqual((letterPositions('hello').e), [1])