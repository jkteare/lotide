const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(inputObject, callback) {
  let objectKeysArr = Object.keys(inputObject);
  for (let key of objectKeysArr) {
    if (callback(inputObject[key])) {
      return key;
    }
  }
};

//Test 1

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

// Test 2
let heros = {
  "Superman": { strenght: 750 },
  "Spiderman":   { strenght: 250 },
  "Wonderwoman":      { strenght: 4500 },
  "theFlash":   { strenght: 2 },
  "thatTinyRedGuy":       { strenght: 1 },
  "myAngryTwoYearOld":  {strenght: 5000 }
};

assertEqual(findKey(heros, x => x.strenght > 4500), 'myAngryTwoYearOld');