//object oriented programming:

//recap: objects being a data type - can store other data types inside - key value pairs

//notionally making something like yelp / ubereats
//use case - if you have thousands of restaurants you need a more efficient way of doing it
//solution: OOP

const restaurant1 = {
  name: "The Spicy Spoon",
  cuisine: "Thai",
  rating: 4.5,
};

const restaurant2 = {
  name: "The Pizza Place",
  cuisine: "Italian",
  rating: 4.0,
  getRating: function () {
    return `${this.name} has a rating of`;
  },
};

//one solution is to function it ex: a function that returns an object
//this is a factory function
//this solves one thing but now you have other problems
//for example you still need to invoke the function many times
//it also repeatedly stores the same code on each object - which means youre still creating thousands and thousands of objects

function createRestaurant(name, cuisine, rating) {
  return {
    name,
    cuisine,
    rating,
    getRating: function () {
      return `${this.name} has a rating of`;
    },
  };
}

const restaurant3 = createRestaurant("Spice man", "Asian", 4.5);

console.log(restaurant3);

//the solution is called a constructor or constructor function + prototype chain
//itll take the benefits of a factory function but also solve repeated information
//allows objects to be dynamic without bloating

//constructors , New, This:

//constructor: what does it look like?
// - function starts with a capital letter
// - name of the function is a name of the object
// - the function does not return anything in the body of the code
// - you will see the .this keyword in the body of the function
// - .this keyword represents the object being created

function Restaurant(name, cuisine, rating) {
  this.name = name;
  this.cuisine = cuisine;
  this.rating = rating;
}

// we use "new" keyword with constructor functions

const rest1 = new Restaurant("Devslopes Diner", "American", 4.5);

//new automates creation and return - they are always used together
//js considers Restaurant function to be special

//The prototype Chain - the connection between constructor function and objects it creates
//allows us to store information thats accessible elsewhere
//instead of creating getRating function inside each object well attach it to prototype chain

//prototype chain is just a property of the object - can add functions / methods to this object

Restaurant.prototype.getRating = function () {
  return `${this.name} has a rating of ${this.rating}`;
};

//even though the constructor has no getRating function because its added to the chain its still accessible

const rest2 = new Restaurant("Pizza place", "Italian", 3);

console.log(rest2.getRating());
