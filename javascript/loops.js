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
