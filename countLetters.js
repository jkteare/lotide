const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputStr) {
  const results = {};

  for (const letter of inputStr) {
    if (letter === ' ') continue;
    else if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

//Test
console.log(countLetters('missi ssippi'));
console.log(countLetters('Potato'));

let results1 = countLetters("Mississippi");

assertEqual(results1.s, 4);
