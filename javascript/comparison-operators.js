//used to determine the difference between variables and values. good example is if and else conditional statements

//conditional statement:

//== equal to (two equals compares the values) can be dangerous because it allows you to compare data types
//!== not equal to
//> greater than
//<less than
//>= greater than or equal to
//<= less than or equal to

if (1 === 1) {
  console.log("holy smokes its true!!");
} else {
  console.log("hey thats not right");
}

//best to use strict values like three === because itll compare data types like strings and numbers

//real world examples

var currenctAccountBalance = 300;
var purchase = 74.99;
var freeCoupon = true;

if (purchase <= currenctAccountBalance) {
  console.log("Transaction Complete");
} else if (freeCoupon) {
  console.log("Free stuff");
} else {
  console.log("Transaction Declined");
}
