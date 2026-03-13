const movies = ["Gladiator", "Elf", "Maze Runner"];

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);

const [movie1, movie2, movie3] = movies;

//takes position of index

console.log(movie1);

const students = "Nathan, Jacob, Jeremy, Bobby";

const studentArray = students.split(",");

//turning a student string into an array

const testString = "Animal";

console.log(testString.split(" "));

const moreStudents = ["Nathan", "jacob", "Jeremy", "Bobby"];

const [dev1, dev2, ...rest] = moreStudents;
const [skater1, skater2] = rest;

//using the spread operator for the rest since we only want the first two devs
//rest is the temp variable
