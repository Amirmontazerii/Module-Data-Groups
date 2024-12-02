// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a : 1 }
// invertedObj[key] = value;

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 1 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of an object's enumerable string-keyed property [key, value] pairs.

// d) Explain why the current return value is different from the target output
// this sets the key of invertedObj to the string "key" (literally), rather than dynamically using the value of key from the object. This means the invertedObj ends up with a fixed key "key", and it overwrites the value in every loop iteration

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
