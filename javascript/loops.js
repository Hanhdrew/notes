//loops are basically running your code again and again until a certain point works well with arrays

var tvShows = ["The Walking Dead", "Game of Thrones", "Stranger Things"];
var savedMovies = ["Interstellar", "Paranormal Activity", "Indiana Jones"];

//for loop

for (var i = 0; i < tvShows.length; i++) {
  console.log(i);
}

//created variable i started at 0 - then returned a boolean if its true it is i++ .
// 0 < 3 = true; 0 + 1 = 1
// 1 < 3 = true; 1 + 1 = 2
// 2 < 3 = true; 2 + 1 = 3
// 3 < 3 = false;
//stopped the iterations

//dont make infinite loops will crash browser

var completedItems = [];

var toDos = [
  { title: "Item 1", completed: true },
  { title: "Item 2", completed: false },
  { title: "Item 3", completed: false },
  { title: "Item 4", completed: true },
];

for (var x = 0; x < toDos.length; x++) {
  if (toDos[x].completed) {
    completedItems.push(toDos[x]);
  }
}

console.log(toDos);
console.log(completedItems);

//while loop will keep iterating while a certain condition is true

var bottles = 99;
while (bottles > 0) {
  if (bottles !== 1) {
    console.log(bottles + " bottles of stuff on the wall");
  } else {
    console.log(bottles + " bottle of stuff on the wall");
  }
  bottles--;
}

var jar = 1;

while (jar < 100) {
  if (jar % 3 === 0 && jar % 5 === 0) {
    console.log("FizzBuzz");
  } else if (jar % 3 === 0) {
    console.log("Fizz");
  } else if (jar % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(jar);
  }
  jar++;
}

//for of loop

//for of loops use cases

const shoes = ["Nike SBs", "Emericas", "Supras", "Vans"];

//traditional for loop
for (let i = 0; i < shoes.length; i++) {
  console.log(shoes[i]);
}

//forEach still works but if you want to break; or continue; you get a syntax error
shoes.forEach((shoe) => {
  return console.log(shoe);
});

//example using for in loop gives back an index. can also break or continue the loop.
//it works but can get unexpected behavior from array.prototype and inherited properties
//for in loops iterates over keys (property names)
//best on objects / object properties
//will return object keys in indexed position ie: [0][2][3]
for (const index in shoes) {
  console.log(shoes[index]);
}

//for of iterates over values - any iterable such as arrays strings maps sets
for (const shoe of shoes) {
  console.log(shoes);
}

//more for of loop examples

console.log(shoes.entries()); //returns array Iterator
//itll give you a function back that allows you to manually iterate through the array
//you can call that function .next() which will return object one by one with your index

//another way to get value and index is by returning the index position ie:

//for (const shoe of shoes.enteries()) {
//console.log(shoe[0], shoe[1])};

//you can destructure as well ex:

//for (const [i, shoe] of shoes.entries()) {
//console.log(`${shoe} is the ${i} index)};

function addTotal() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  console.log(total); //keyword arguments is only functional to named function not arrow function
  return total;
}

addTotal(12, 23, 45, 56);

const name = "Hanhdrew";

for (const char of name) {
  console.log(char);
}

//works on name because its an iterable

//you can iterate through html elements too (ex: notational div tags)

const div = document.querySelectorAll("div");

c;

console.log(div);
