//what are methods? another word for describing functions that live inside object
//methods are built in and can be built on your own
//the difference between a method and function is method is property of an object and a function is designed to perform a task

const devslopesDiner = {
  name: "Devslopes Diner", //string
  cuisine: "American", //string
  address: "555 Main St.", //string
  avgPrice: 15, //number
  reviews: [{}, {}, {}], //array
  ratings: [9, 5, 7, 10], //array
  passedInspection: true, //boolean
};

//4 main and common object methods:

console.log("Object.keys", Object.keys(devslopesDiner)); //takes object and returns an array of all keys in an object
console.log("Object.values", Object.values(devslopesDiner)); //takes object and returns an array of all values
console.log("Object.entries", Object.entries(devslopesDiner)); //takes object and returns an array of arrays containing the key value pair and value
console.log(
  "has own property, cuisine:",
  devslopesDiner.hasOwnProperty("cuisine")
); //to check if a key exists

//creating our own object methods:
//just by storing a function on an object and invoking it
//you can use dot notation

//dot notation of creating a method
//this is called an anonymous function
//printAd is the key
devslopesDiner.printAd = function () {
  console.log(
    `Welcome to the ${devslopesDiner.name}! We serve ${devslopesDiner.cuisine} food and are located at ${devslopesDiner.address}. Come visit us!`
  );
};

//calling it:
devslopesDiner.printAd();

//nesting it within an object literal
//uses a colon instead of the assignment operator

const andrewObj = {
  name: "andrew",
  age: 29,
  displayName: function () {
    console.log(andrewObj.name);
  },
};

//two types of methods different syntax

//static methods: lives on a capitalized objects given by javascript
Object.keys(devslopesDiner);

//instance methods: called on instances and from objects or arrays we have made
devslopesDiner.hasOwnProperty("founded");

//you can make your own
