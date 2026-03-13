//[...array] spread operator allows you to spread items for anything thats an iterable.
//three dots and a variable
//arrays strings objects are iterables

const skatePants = ["Volcome", "Matix", "RVCA"];
const skateShoes = ["Emerica", "Nike SB", "Vans"];

//let combineIsh = skatePants.concat(skateShoes); classic way to concatenate these

let combineIsh = [...skatePants, "Santa Cruz", ...skateShoes]; //adding them all using spread operator

console.log(...combineIsh);

const skaterDude = {
  name: "Bro",
  shoes: ["Dcs", "Supras"],
};

skaterDude.shoes = [...skaterDude.shoes, ...skateShoes]; //adding the skaterShoes to skaterDude + his existing shoes

console.log(...skaterDude.shoes[2]); //using spread operator on skaterDude string index[2]

const comments = [
  { id: 1, comment: "You keep shredding dude, keep it up" },
  { id: 2, comment: "Youre my hero!, I live vicariously through you!" },
  {
    id: 3,
    comment: "A giraffe skates better than you, and you look like one too",
  },
  { id: 4, comment: "I love you long time" },
];

const id = 3;

const commentIndex = comments.findIndex((comment) => comment.id === id);

console.log(commentIndex);

const niceComments = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex + 1),
];

//spread operations into functions

const dogs = ["Husky", "German Shepard", "Bulldog"];
const moreDogs = ["Labradoodle", "Golden Retriever", "Great Dane"];

//normal .push() method will just add this moreDogs array into the dogs array instead of combining arrays
//instead you can dogs.push(...moreDogs); to combine crrays

const greeting = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

const name = ["Andrew", "Rebbe"];

// greeting(name[0], name[1]);

greeting(...name);

//assuming you want to call greeting() however, your data example is in a weird format. Normally
//you could call it by its indexed position but you can spread via spread operator
