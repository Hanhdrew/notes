/* js datatypes

use single quotes considered better practice 

primitive / value types (prior to ES62015 - more were added) - simple data structures
- string
- number
- boolean 
- undefined
- null 

reference types / structural types more complex structures to it
- objects
- arrays 
- functions 

*/

// string anything in text format
var firstName = "Andrew";
var age = 29;
console.log("Value ", age);
console.log("Type: ", typeof age);

// boolean true or false value

var recedingHairline = false;
console.log("Value ", recedingHairline);
console.log("Type: ", typeof recedingHairline);

// undefined variable without a defined value

var favFood;
console.log("Value ", favFood);
console.log("Type: ", typeof favFood);

// null means nothing type is object can be reassigned
var toiletPaper = null;
toiletPaper = 25;
toiletPaper = null;
toiletPaper = "Triple Ply";
console.log("Value ", toiletPaper);
console.log("Type: ", typeof toiletPaper);

// objects used for more complex data

var person = {
  firstName: "Mary",
  age: "27",
  recedingHairline: false,
  favFood: undefined,
  toiletPaper: 206,
};

console.log("Value ", person);
console.log("Type: ", typeof person);

// arrays a way to store a list of values length property of 4 and can index first item starts at 0 is a type object and not array

var students = ["Orian", "kingston", "Shayla", "Chloe"];
console.log("Value ", students);
console.log("Type ", typeof students);

// function way to create action or run logic or run code
var myFunc = function () {};

console.log("Value ", myFunc);
console.log("Type ", typeof myFunc);

// variable exercise

var car = {
  make: "special",
  model: "fusion",
  year: 2016,
  color: "blue",
};

var isManualTransmission = false;
var numSeats = "4";
var mileage = "100,000";
