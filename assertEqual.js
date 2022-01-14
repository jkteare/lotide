const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Blue-Forty-Two", "Blue-Forty-Two");
assertEqual("Blue-Forty-Two", "Blue-Forty-Three");
assertEqual(1234, 1234);
assertEqual(1234, 1235);