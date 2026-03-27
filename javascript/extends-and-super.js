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
  //static method - declared with static keyword
  static isValidRadius(radius) {
    return radius > 0 && typeof radius === "number";
  }
}

//what happens when two classes overlap?
//for example Circle and Sphere
//solution is EXTEND (extension of a class) keyword extend
// - gives options to add or overwrite properties

//will have to add extends keyword
// - still requires a constructor
//
class Sphere extends Circle {
  //we can add more arguments (nicknames)
  //we can also add the original constructor function
  constructor(radius, color, nicknames) {
    //super keyword invokes the constructor function of whatever were extending
    super(radius, color);
    this.nicknames = nicknames;
  }
}

const mySphere = new Sphere(4, "blue", "Earth");
console.log(mySphere);

//we now get an object returned with those three properties
