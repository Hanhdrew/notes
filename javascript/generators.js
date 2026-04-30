//normally when running a function it goes from top to bottom
//a generator function allows you to pause a function, return value, and continue running
// - a generator function is not "actually" a function that runs, it returns a generator object
// - it acts as an iterable / a state machine with a pause button
// - you have to use a function keyword and add an asterisk after ie: function*
// - use the yield keyword to mark pause points
// - .next() advances it to the next step

function* listOfHumans() {
  yield "andrew";
  yield "bob";
  yield "balls";
}

const humans = listOfHumans();
//you have to assign to a variable to get second value because the state will be stored

console.log(humans.next());
// - using .next() to call

//not exclusive to hard values ex:
function* addingNumbers() {
  let num = 0;
  yield num;
  num += 1;
  yield num;
  num += 1;
}

//imitating a for loop using a generator function:
// - here we are pausing between iterations

const namesArray = ["Andrew", "Blob", "Goy"];

function* moreNames() {
  for (let i = 0; i < namesArray.length; i++) {
    yield namesArray[i];
  }
}

const iterableNames = moreNames();

console.log(iterableNames.next());
console.log(iterableNames.next());
console.log(iterableNames.next());
