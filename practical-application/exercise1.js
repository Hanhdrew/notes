// Write a function called logLongWords that:
// - takes an array of strings
// - logs only the words that are longer than 5 characters
// - uses a for...of loop

const words = ["Andrew", "hat", "Goodbye"];

const logLongWords = (arr) => {
  let array = [];
  for (let x of arr) {
    if (x.length > 5) {
      array.push(x);
    }
  }
  return console.log(array);
};

logLongWords(words);

//can still refactor this

// Write a function called doubleValues that:
// - takes an object with numeric values
// - returns a new object where each value is doubled
// - uses a for...in loop
// - uses an implicit return arrow function

// returns { a: 4, b: 10, c: 20 }

const doubleValues = (obj) => {
  let newObj = {};
  for (let keys in obj) {
    obj[keys] * 2;
  }
  return console.log(object);
};

doubleValues({ a: 2, b: 5, c: 10 });
