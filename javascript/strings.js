// javascript strings

var make = "Toyota";
var model = "Prius";
var year = 2025;

// if you use a number you dont need quotes js will treat quoted numbers as a string

// string Concatenation - ability to join strings together

var myRide = make + " " + model;
var myBraggingRight = "I drive a" + " " + year + " " + myRide;

console.log(typeof myBraggingRight);
console.log(make.length);

// concat(); means concatenation is the same as + ex: var myRide = make + model;

// indexOf(); allows you to find the position of something in a string or array it is case sensitive ex for strings:

let someMessage = "hello, world!";
let position = someMessage.indexOf("world");

// lastIndexOf();
// replace();
// toString();
// toUpperCase();
// toLowerCase();

// string length

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(text.length);

// char - is a method that will return a character at a specified inedex or position

let word = "Hello";
let firstChar = word.charAt(0);

// will return the letter H

// final notes

// strings will be used anytime to display Text
// if you concatenate with a number the number will be turned into a string
// there is a length property to determine the length of the string

// devs nowadays use template literals instead of cocatenation

// ex instead of var myRide = make + " " + year; you use backticks

let firstName = "Andrew";
let message = `Hello, ${firstName}!`;

// string assignment

var dateOfBirth = "February 27th, 1996";
var age = "29";
var isOrganDonor = false;
var streetAddress = "6028 Gulf Island Ave";
var city = "Las Vegas";
var state = "Nevada";
var zip = 89156;
var idNumber = 3372923;

var myPassport =
  "Hi, my name is Andrew and here is my info: " +
  "I was born on, " +
  dateOfBirth +
  " and my age is " +
  age +
  "." +
  " My address is " +
  streetAddress;
console.log(myPassport);

// .length — Returns the number of characters in the string.

// .toLowerCase() — Returns a lowercase version of the string.

// .toUpperCase() — Returns an uppercase version of the string.

// .includes(sub) — Checks whether the string contains the given substring.

// .indexOf(sub) — Returns the index of the first match or -1 if not found.

// .slice(start, end) — Returns a substring from start to end (non‑inclusive).

// .trim() — Removes whitespace from both ends of the string.

// .replace(a, b) — Returns a new string with the first match replaced.

// .replaceAll(a, b) — Returns a new string with all matches replaced.

// .split(delimiter) — Converts the string into an array using the delimiter.

// .startsWith(sub) — Checks if the string begins with the given substring.

// .endsWith(sub) — Checks if the string ends with the given substring.

// .charAt(i) — Returns the character at the given index.

// .repeat(n) — Returns the string repeated n times.
