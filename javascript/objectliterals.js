// you can use let or const to define an object literal - usually use const as it does not change
//objects are datatypes in js
// they are composite datatypes - acts as a container that stores other data types
// different than arrays by storing data in key value pairs
// key value pairs are like mail - using keys
// can be stored in a variable

const andrewObject = {
  name: "andrew", //string
  dob: 1996, //number
  hobbies: ["writing", "programming", "gaming"], //this is an array
  education: { 2024: "devslopes" }, //this is another object
  lovesDogs: true, //boolean
};

//why does this matter?
//data type that allows us to store information as key value pairs
//this is important for storing data so you dont have to constantly declare variables and provides structure

const canalesRest = {
  name: "Canales",
  cuisine: "Italian",
  address: "555 main st.",
  avgPrice: 20,
  reviews: [
    { reviewOne: "Hello review one" },
    { reviewTwo: "Hello review two" },
    { reviewThree: "Hello review three" },
  ], //object stored inside an array
  ratings: [9, 7, 5, 3],
  passInspection: true,
};

//how do we access objects
//two ways:
//one - dot-notation (helpful when we know the key to access)

console.log(canalesRest.cuisine);

//two - bracket notation: we need to evaluate something before getting the key

const userSearch = "name";

console.log(canalesRest[userSearch]);
console.log(canalesRest["name"]);

//you can add properties ofter using dot and bracket notation

canalesRest.favDish = "chicken parm";

const newObjectProperty = "isDowntown";
canalesRest[newObjectProperty] = false;

//Object literal upgrades in ES6

const make = "Dodge";
const model = "Corvette";
const year = 2021;

const vehicle = {
  make: make,
  model: model,
  year: year,
};

console.log(vehicle);

//es6 brings object shorthand if the property has the same name as variable you can omit redundancy
//example:
//make,
//model,
//year };

const makeVehicle = (make, model, year) => ({
  make,
  model,
  year,
});

const SUV = makeVehicle("Mercedes", "AMG G 63", 2021);

console.log(SUV);

//computed property names

const key = "name";
const value = "Andrew";

const obj = {
  [key]: value,
  [`${key}Reverse`]: reverseString(value),
};

//lets pretend i had a function that reverses string named reverseString(value) and itll
//compute property name value in reverse

console.log(obj);
