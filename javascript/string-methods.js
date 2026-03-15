//.startsWith()
//.endsWith()
//.includes()
//.repeat()

const devslopes = "Web Academy"; //check if first word starts with Web

console.log(devslopes.startsWith("Web", 1)); //false - returns boolean - and is case sensitive - takes two arguments you can specify what index in the string to check

const accountNumber = "34234324SAV";

console.log(accountNumber.endsWith("SAV")); //true - return boolean - similar to startswith - can add a second argument for specific index

console.log(accountNumber.includes(3)); // true - return boolean - just checks if its included - is also case sensitive

const monkey = "emoji";

console.log(monkey.repeat(10)); //itll make it 10x

const academy = "web";
const numWeeks = "16";
const exp = "beginner";

console.log([academy, numWeeks, exp]);

//lets create a function to create padding on the left:

const padLeft = (str, pad = 12) => {
  return `${" ".repeat(10)}${str}`;
};

//this will give them 10 spaces left
