var firstName = "Andrew";
var userName = "Hanhdrew";
// keyword label and content

/* variable rules:
- meaningful name (var userName - var totalWins - var totalLosses etc. be specific)
- cannot contain a hyphen or a space ex(var total-Losses var total losses)
- cannot start with a number ex(1totalLosses) you can add after - but not good practice avoid numbers entirely
- cannot use a reserved word ex(var let if const true false) these are reserved for js 
- variable ARE case sensitive 
- var Prior ES2015 / ES6 its problematic and no longer used
- use let and const */

//variable =  a container that stores a value

//1: declaration
//2: assignment

let x; //declaration
x = 100; //assignment

let y = 123; //both at once - assignment can come later - like user input

let age = 25;
let price = 12.99;
console.log(age, price);
console.log(`You are ${age} years old`); //used a variable in
console.log(typeof age);

let favoriteFood = "pizza";
console.log(`Your favorite food is ${favoriteFood}`);

let online = true; //booleans
console.log(typeof online);
console.log(`Bro is online ${online}`); //booleans used as flags mostly - usually used in ifs statements

//page display

let fullName = "Andrew Rebbe";
let oldAge = 29;
let isStudent = true;

document.getElementById("paragraph1").textContent = `your name is ${fullName}`;
document.getElementById("paragraph2").textContent = oldAge;
document.getElementById("paragraph3").textContent = isStudent;
