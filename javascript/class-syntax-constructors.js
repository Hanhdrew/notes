//quick recap

//javascript classes are a wrapper, grouping mechanism, prototype generator, constructor function generator, and inheritence mechanism
//under the hood its just the constructor function and prototype object

function Restaurant(name, cuisine, rating) {
  //constructor function
  this.name = name; //this refers to objects it creates
  this.cuisine = cuisine; //semi colons are used because its a statement
  this.rating = rating; //objects are created from "new" keyword
}

Restaurant.prototype.getRating = function () {
  //added method to prototype chain
  return `${this.name} has a rating of ${this.rating}.`;
};

//problems with this include if you want multiple methods can become confusing
//the solution is classes

//class syntax is used to organize and maintain constructors and methods more formally

class Circle {
  // - every time an instance of Circle is created the constructor will be called
  // - anything IN the constructor will be stored on the instance of the object (stored directly on the object)
  // - declare a method after your constructor
  // - declared the same way you declare on an object literal
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  calcArea() {
    return Math.PI * this.radius ** 2;
  }
  calcCircumference() {
    return 2 * this.radius * Math.PI;
  }
  // - using this keyword is because the method is shared and stored on the object prototype not the object instance
  static isValidRadius(radius) {
    return radius > 0 && typeof radius === "number";
  }
  //static methods
  //has to be accessed as a static method
  //Circle.isValidRadius()
  //you cannot invoke or call it like a instance method
}

//create a new circle object
const myCircle = new Circle(10, "red");

//now we can call it with myCircle.calArea() invoked by parenthesis
console.log(myCircle.calcArea());

//a few key notes:
//the reason class methods still use this keyword is because javascript stores the methods on the object prototype NOT the object instance. myCircle = {radius: 10, color: "red" there is no calcArea}
//if you call myCircle.calcArea() JS will look for calcArea() on myCircle object which doesnt exist
//meaning it will go up the prototype chain and call this bound to myCircle

//creating instance and static methods

//instance methods - called on an instance exists on the object
// - ex: calcArea() is called on myCircle which is an instance of the circle class
// - ex: array methods nameOfAnArray.map()
// - array methods like .map() filter() reduce() are instance methods because theyre inherited from the Array.prototype() they are not a part of every array
// - instance methods are specific
// - calcArea() for example needs this.radius and this.color which are specific values of that circle instance

//static methods - exist on the class doesnt need object
// - these methods are for logic that does not depend on an instance ie: radius > 0
// - it does not need .this in order to function or an instance
// - communicate intent
// - used for factories, utilities and class level operations

//Set() constructor:

//Set() - is a built in constructor function
// - acts like a unique array that only stores unique values. it includes strings, numbers, objects, arrays, and functions
// - while arrays are great they allow duplicates
// - also using methods like includes are slow for large data sets
// - also not index based
// - you can pass an iterable into a Set() to add value
// - ex: const newSet = new Set(["iterable"]);

const carNames = new Set();

carNames.add("Acura NSX");
carNames.add("Honda CRV");
carNames.add("Cevy Impalla");

//set methods:

//carNames.keys (set iterator can use next())
//carNames.entries (set iterator can use next())
//carNames.values (set iterator can use next())
// - keys and values are the same thing
//carNames.add (adds items)
//carNames.delete (delete items)
//carNames.clear (clears the array)
//carNames.has("whatever") lets you search
// - you dont have to loop or map through it
// - can loop through iterables

console.log(carNames);
console.log(carNames.size);

//logs set(3)

//Set example:

const competitors = new Set();

competitors.add("Chris");
competitors.add("John");
competitors.add("Mike");

const competed = competitors.values();
// - turned this into a set iterable

competed.next();
// - you can iterate through it individually
// - it removes one at a time from set iterator

// WeakSet() constructor notes:

// WeakSet() - is a special set that can only store objects. those objects are held weakly meaning if nothing references them anymore theyll be deleted
// - you cannot loop this
// - no .clear method
// - is garbage collected

let personOne = { id: 1, name: "bob" };
let personTwo = { id: 2, name: "girl" };
let personThree = { id: 3, name: "joe" };

const weakPeople = new WeakSet([personOne, personTwo, personThree]);
// - adding multiple via iterable (array)

//Map() constructor notes:

//Map() are similar to sets but its for objects

const people = new Map();

people.set("Andrew", 1);
people.set("Andrew", 1);
people.set("Andrew", 1);

// - instead of .add() its .set()
// - requires two values for argument: key and value
// - must also be unique

console.log(people.get("Andrew"));
// - get is a way to get keys

//two ways to loop over a map():
// - first way is a forEach() loop
// - for of loop
