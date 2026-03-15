//allows you to extract data from objects into variables

const andrew = {
  firstName: "Andrew",
  lastName: "Rebbe",
  urls: {
    facebook: "facebook.com/andrew",
    instagram: "instagram.com/andrew",
  },
  web: {
    website: "website",
    blog: "blog/andrew",
  },
};

// console.log(andrew.firstName); traditional
// console.log(andrew.urls.instagram);

const { firstName, lastName } = andrew; //deconstructured syntax
const { facebook: fb, instagram } = andrew.urls; //example with nested whatever - you can rename property via colon

console.log(fb, instagram); //same result but cleaner

//how do set default values:
const shape = {
  width: 200,
  height: 400,
};

const { width, height, bgColor = "red", borderR } = shape; //bgColor = "red" is a default value - logging would return undefined otherwise
console.log(width, height, bgColor);

// Practice: Take the following object and store the name and youtube properties in their own variable.

const person = {
  name: "Harry Mack",
  age: 30,
  expertise: "jaw-dropping visual freestyle rapping",
  youtube: "www.youtube.com/harrymack",
};

const { name, youtube } = person;
