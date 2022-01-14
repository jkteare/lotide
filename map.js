//eqArrays Function to Evaluate if two arrays are equal
const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual Function to test
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`☑️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const myMap = function(array, callback) {
  const results = [];
  for (let word of words) {
    results.push(callback(word));
  }
  return results;
};


//Test Case 1.0 = Long Function Form;
const testCase10 = myMap(words, function(word) {
  return word += 's';
});
assertArraysEqual(testCase10,[ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);

// Test Case 1.1 with Long Arrow Function;
const testCase11 = myMap(words, (word) => {
  return word += 's';
});
assertArraysEqual(testCase11,[ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);

// Test Case 1.2 with Short Arrow Function;
const testCase12 = myMap(words, word => word += 's');
assertArraysEqual(testCase12,[ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);

//Test Case 2;
const testCase2  = myMap(words, word => word.toUpperCase());
assertArraysEqual(testCase2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);

//Test Case 3;
const testCase3  = myMap(words, word => word.replace('o', '😎'));
assertArraysEqual(testCase3,[ 'gr😎und', 'c😎ntrol', 't😎', 'maj😎r', 't😎m' ]);

// Code Directly From Assignment;
const results1 = myMap(words, word => word[0]);
console.log(results1);