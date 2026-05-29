//looping over objects different than arrays and for loops because theyre made with keys unlike strings and arrays
//OBJECTS ARE NOT ITERABLE BY DEFAULT
//You must turn it into an iterable shape first:
// - Object.entries()
// - Object.values()
// - Object.keys()
// - each one turned into an array which is iterable
// - you can deconstruct this and use array methods

//example:

const exampleObject = {
  andrew: "handsome",
  drew: "handsomer",
  drewski: "handsome AND smart",
};

Object.enteries(exampleObject).reduce((acc, [key, value]) => {
  return 0 + key + value;
});

//another:

Object.entries(exampleObject).forEach(([key, value]) => {
  console.log(key, value);
});

const devslopesDiner = {
  name: "Devslopes Diner", //string
  cuisine: "American", //string
  address: "555 Main St.", //string
  reviews: [{}, {}, {}], //array and object
  ratings: [0, 3, 4, 5, 5], //array of numbers
  passedInspection: true, //boolean
  //10 other key value pairs
};

//for .. in loop
//iterates over all properties of the object, includes anything the object inherits
//use keys of an object in iteration
//we do it when we want to iterate over EVERY property

for (const key in devslopesDiner) {
  console.log(key, devslopesDiner[key]);
}

//for .. of loop
//better for iterating what you add. Gives the user more control
//iterates over values of an object, array, or other special object
//excludes inherited values
//creates an array of keys
//better option for iterating over complex objects and controlling

for (const key of Object.keys(devslopesDiner)) {
  console.log(key, devslopesDiner[key]);
}

//objects are technically not iterable thing just for storing key value pairs

//Object.entries(), Object.values() - other ways to iterate

const person = {
  id: 252,
  username: "dcode",
  age: 32,
  hobbies: ["Software Dev", "Gardening"],
  active: true,
};

//Object.keys() is a function that gives you an array of all keys in your object
//comes from global Object model

const keys = Object.keys(person);

//for of loops with objects

const skater = {
  name: "Andrew",
  stance: "Goofy",
  fractures: 5,
  bonesBroken: 0,
  ankleInjuries: 50,
};

//type error - skater object not iterable

// for (const prop of skater) {
//   console.log(prop);
// }

//this will work by using the Object prototype and will give you keys
//prop, skater[prop] will give you values
//also kind of sketchy

for (const prop of Object.keys(skater)) {
  console.log(prop, skater[prop]);
}

//two methods for iterating object effectively - Object.values() - Object.entries()

for (const prop of Object.values(skater)) {
  console.log(prop);
}

for (const prop of Object.entries(skater)) {
  console.log(prop);
}

//can also destructure this

for (const [prop, value] of Object.entries(skater)) {
  console.log([prop, value]);
}
