console.log("Hello World");

//function block of code to do something specific - activated when called

//naming like variable

function calcArea(w, l) {
  //parameters
  return w * l;
}

var kitchenArea = calcArea(15, 18); //arguments
var bedroomArea = calcArea(12, 10);

console.log(kitchenArea);
console.log(bedroomArea);

function toCelsius(f) {
  var temp = (5 / 9) * (f - 32);
  return temp.toFixed(2);
}

var cel = toCelsius(46);
var weather = `The temperature outside is ${cel} Celsius`;
console.log(cel);
console.log(weather);

//simple function to convert F to C

var warrior = {
  name: "Super Tuffy",
  attack: 70,
  defense: 55,
  mana: 100,
};

// warrior.attack += 2; shorthand version + adds and = uses the initial value
// warrior.defense += 6;
// warrior.mana += 12;

function levelUp(prop, val) {
  warrior[prop] += val;
}

levelUp("attack", 2);
levelUp("defense", 17);
levelUp("mana", 8);

console.log(warrior);

//function to level up instead of writing it out

function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet("Andrew", "Rebbe");

//inside curly braces is the body

//function declaration / keyword - classic hoisted version - acts as a main character

function helloFunction(a, b) {
  return a + b;
}

//function expression - a function assigned to a variable

const anotherFunction = function (a, b) {
  return a + b;
};

//arrow function - modern / clean - concise and lexical - use for callbacks - brackets mean you have to use return

const addTogether = (a, b) => {
  return a + b;
};

//arrow function explicit return - small / compact use for very small functions / callbacks - does not need return

const anotherAdd = (a, b) => a + b;

//arrow function with one parameter - does not require parenthesis

const letsMultiply = (x) => x * x;
