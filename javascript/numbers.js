console.log("Hello");

var totalUsers = 42;
var purchase = 46.99;

// can be written with or without decimals in js its the same in other languages theyre treated differently

// supports scientific notation and small decimals

var scientificNotation = 123e5;
var numVal = 5 - 5;

// regular mathematical operations

// javascript is only accurate up to 15 numbers

var bigNumber = 999999999999999;

// decimals are accurate up to 17 - PEMDAS does work

var bigDecimals = 0.1 + 0.2;
var accurateDecimals = (0.1 * 10 + 0.2 * 10) / 10;
console.log(bigDecimals);
console.log(accurateDecimals);

// numerical strings gets concatenated. if you use + it will get concatenated but others wont like *

var numString = 10 + "5 years";
console.log(numString);

// javascript number methods

//toString(); Returns a number as a string

// toFixed(); lets you control how many decimal places a number has ex:

var exampleDecimal = 3.14159;
let roundedNumber = exampleDecimal.toFixed(2);
console.log(roundedNumber);

// Number(); converts a value into a number ex:

Number("42"); //returns 42
Number(true); //returns a 1
Number(false); //returns a 0
Number("hello"); //returns a NaN (not a number)

// parseInt(); converts a string into an integer

parseInt(3.14); //will drop the .14

// parseFloat(); converts a string into a floating point number meaning will have decimals

parseFloat(3.14); //returns 3.14

// exercise

let itemPrice = 78.5 / 6;
roundedNumber = itemPrice.toFixed(0);
console.log(roundedNumber);
