//arrays are used to store a collection of values or data in a single variable

//make your variables plural because it stores multiple

var tvShows = ["The Walking Dead", "Breaking Bad", "The Office"];

console.log(tvShows[0]);

//logging index zero aka the walking dead

var savedMovies = [];

savedMovies.push("Star Wars");
savedMovies.push("SpaceBalls");
savedMovies.pop();

console.log(savedMovies);

//.push is a method of adding to an array
//.pop method removes

console.log(tvShows.length);

const fruit = ["apples", "oranges", "pineapples", "bananas"];

//array methods

//array.forEach(callbackFunction); applies callback function to all elements in an array. returns undefined is used for side effects
fruit.forEach((item) => {
  console.log(item);
});

//array.map(callBackFunction); returns a new array populated with new elements. it transforms the elements and returns a new array (does not modify the previous array)
const bananas = fruit.map((item) => {
  return "banana";
});
//turns all fruit into banana

const duplicateFood = fruit.map((duplicate) => {
  return duplicate + duplicate;
});
//creates pairs of fruit

//array.filter() selects elements by a condition and returns a new array. (it does not modify the previous arrays)

var numbers = [2, 5, 7, 1];

var filtered = numbers.filter(function (n, index) {
  //takes a callback function and a parameter (parameters can take multiple parameters)
  return n <= 5;
});

console.log(filtered);

//creating an array of objects:

var classRoom = {
  grade: "third",
  students: [
    { name: "james", score: 93 },
    { name: "mike", score: 90 },
    { name: "jenny", score: 70 },
    { name: "carl", score: 30 },
  ],
};

var gradeAStudents = classRoom.students.filter(function (student) {
  return student.score >= 90;
});

console.log(gradeAStudents);

//array.reduce() takes elements in an array and reduces into a single value. takes two arguments. one callback function and an argument

var moreNumbers = [2, 4, 6, 7];

var sumOfNumbers = moreNumbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); //0 determines where you want it to start at

var scoreTotal = classRoom.students.reduce(function (acc, val) {
  return acc + val.score;
}, 0);

console.log(scoreTotal);

// array.find(); vs array.filter();

const originalNumbers = [1, 2, 3, 4, 5];

// let doubledNumbers = [];
// for (let number of originalNumbers) {
//   doubledNumbers.push(number * 2);
// }
// console.log(doubledNumbers);
//for loop doesnt really convey the intent

let doubledNumbers = originalNumbers.map((number) => {
  return number * 2;
});

//array method chaining:

const newClassRoom = {
  grade: "3rd",
  students: [
    { name: "susan", score: 90 },
    { name: "johnny", score: 83 },
    { name: "michael", score: 95 },
    { name: "joe", score: 43 },
  ],
};

const starStudents = newClassRoom.students
  .filter(function (student) {
    return student.score >= 80;
  })
  .map(function (value) {
    value.score += 5;
    return value;
  })
  .reduce(
    function (acc, val, index, array) {
      const total = acc.sum + val.score;
      return {
        sum: total,
        arr: array,
      };
    },
    { sum: 0, arr: [] },
  );

var studentAverage = starStudents.sum / starStudents.arr.length;

console.log(starStudents, studentAverage);

//more es6 array methods - Array.from() - Array.of()
//what this does is turns an iterable into an array

//these two array methods do NOT exist on the array prototype
//to expand on this: every array method you create inherits methods from the array.prototype
//ie: arr.map(), arr.filter(), arr.reduce() etc.
//these are called instance methods - they belong to arrays after you create them.
//Array.from() and Array.of() exist on the constructor itself and are static methods
//they are an Array class not an array instance
//this is the key difference: prototype methods operate on existing arrays, static methods create something new entirely

//array.from() takes an iterable and turns it into a true array

const shoes = ["Nike SB", "Emericas", "Supra", "Vans"];

const fake = "const headers = document.querySelectorAll(h5)"; //notionally grabbing header 5 tags - creates an array-like structure but not a true array

headers.map((node) => console.log(node.textContent)); //wont work because .map() wont work an an array-like

//fix:

const headersArray = Array.from(headers, (node) =>
  console.log(node.textContent),
); //array.from() can take two arguments one for the input another for a mapping function ie: arr.map()

function addTotal() {
  const numbers = Array.from(arguments);
  return numbers.reduce((prev, next) => prev + next, 0);
}

const total = addTotal(12, 34, 45, 56, 68);

console.log(total);

const nums = Array.of(23, 5, 64, 65); //creates an array from arguments

console.log(nums);

//more arrays:
//Array.find() and Array.findIndex()

const comments = [
  {
    id: 1,
    comment: "I love to code.",
    likes: 102,
    user: "jradness",
  },
  {
    id: 2,
    comment: "Something something.",
    likes: 12,
    user: "joemom",
  },
  {
    id: 3,
    comment: "Hello, world.",
    likes: 10,
    user: "Mike",
  },
  {
    id: 4,
    comment: "I was watching a movie.",
    likes: 1042,
    user: "Mrcoolguy",
  },
];

//you could directly access the property like comments[4].id but you dont always know it so you can use the .find() method
//.find() is a callback method that returns a boolean => loops array , creates boolean, and stores in an object

const id = 3;
const comment = comments.find((item) => item.id === id); //youll get full object with id === 3. can be any property on the object

console.log(comment);

//array.findIndex() finds index , helpful for slicing out of an array

const commentIndex = comments.findIndex((item) => item.id === id);

//Sets:

//Set() - is a unique array that only stores unique values. it includes strings, numbers, objects, arrays, and functions
// - while arrays are great they allow duplicates
// - also using methods like includes are slow for large data sets
