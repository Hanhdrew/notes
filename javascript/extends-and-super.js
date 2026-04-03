//class syntax refresh
//class is a way to have cleaner - dryer code with the use of constructors and the prototype chain
//instance methods declared on class are automatically set to prototype chain
//static methods declared on class are automatically set to class (constructor function)

class Circle {
  //constructor function
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  //instance method attached to prototype object / chain
  calcCircumference() {
    return Math.PI * this.radius ** 2;
  }
  //another instance method - declared with .this
  calcCircumference() {
    return 2 * this.radius * Math.PI;
  }
  //were going to override this method
  describe() {
    return console.log("hey bud");
  }
  //static method - declared with static keyword
  static isValidRadius(radius) {
    return radius > 0 && typeof radius === "number";
  }
}

//what happens when two classes overlap?
//for example Circle and Sphere
//solution is EXTENDS (extension of a class) keyword extend
// - gives options to add or overwrite properties
// - use terms parent and child to determine who came first
// - use super keyword to call constructor function before adding any additional properties
// - you can override methods of the parent with methods named the same thing

//will have to add extends keyword
// - still requires a constructor
class Sphere extends Circle {
  //we can add more arguments (nicknames)
  //we can also add the original constructor function
  constructor(radius, color, nicknames) {
    //super keyword invokes the constructor function of whatever were extending
    // - use super keyword to call parent constructor BEFORE adding or removing properties
    // - not using super gives you an error
    // - you have to define what to do with the previous constructor
    super(radius, color);
    this.nicknames = nicknames;
  }
  //method talk: can still add static and instance methods
  getVolume() {
    return (4 / 3) * Math.PI * this.radius ** 3;
  }
  //overwritten method
  describe() {
    console.log("new info instead");
  }
}

const mySphere = new Sphere(4, "blue", "Earth");
console.log(mySphere.describe);

//we now get an object returned with those three properties
