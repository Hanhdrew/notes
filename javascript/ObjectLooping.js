//looping over objects different than arrays and for loops because theyre made with keys unlike strings and arrays

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
