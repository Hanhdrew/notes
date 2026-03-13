var name = "Andrew";
console.log(name);

if (name === "Andrew") {
  console.log("hello");
}

//comparison operators

// === equal to
// !== not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

//logical operators - are conditions

//&& and - both conditions need to be true
//|| or - at least one condition needs to be true
//! not

var skater1 = 9.5;
var skater2 = 9;
var skater3 = 8.5;
var jackedUpOnCaffeine = true;

if (skater2 > skater3 && skater2 <= skater1 && skater1 < 100) {
  console.log("Move skater 2 to next round");
} else if (skater3 > skater2 || skater3 === skater2) {
  console.log("my bawls");
} else if (skater3 > 5 && jackedUpOnCaffeine) {
  console.log("takes home the gold");
}

const temp = 90;

if (temp >= 90 || temp <= 32) {
  console.log("the weather stinks");
} else {
  console.log("the weather is good");
}

//exercise

const users = [
  { name: "Bobby", hobby: "Skateboarding" },
  { name: "Kyle", hobby: "Music" },
  { name: "Sarah", hobby: "Hang-gliding" },
  { name: "Jose", hobby: "Snowboarding" },
  { name: "Phillip" },
  { name: "Charles", hobby: "Rock Climbing" },
  { name: "Tabatha", hobby: "Art" },
];

function logUser(user) {
  if (!user.hobby) {
    console.log("Hi, ${user.name}");
  } else {
    console.log(`Hi, ${user.name}. I'm stoked you enjoy ${user.hobby}`);
  }
}

users.forEach((user) => {
  logUser(user);
});

console.log("Hello World");

// PART 2
let userInputCelsius = 100;
let degreesK = userInputCelsius + 273.15;

console.log("Degrees Kelvin:", degreesK); // Expected: 373.15
