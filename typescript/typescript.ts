//typescript vs javascript

//at its core typescript is a superset of javascript
// - typescript is basically javascript with type checking
// - it is used for large code bases to solve problems javascript production has
// - the main difference is typescript errors are caught at compiled time not runtime
// - meaning errors are caught much sooner
// - at its core all typescript is converted to javascript at compiled time to be used by js engines
// - its on the developer to include compilers for typescript

//benefits of typescript:
// - its basically javascript
// - its easy to learn
// - can easily dump into existing code bases
// - has a lsp language server protocol

// TypeScript exists because JavaScript became too large, too dynamic, and too unpredictable for building big, maintainable applications. TypeScript adds static typing, better tooling, and safer architecture while still compiling down to plain JavaScript

//what this means?

//compiled means when code is analyzed and transformed not when its executed
//runtime is code execution

//coding examples of typescript and js comparisons:

function regurgitateAMessage(message: string) {
  console.log(message);
}

regurgitateAMessage("hey");

//this typescript would be compiled without the message type (string)
//if you tried to run it as normal javascript it wouldnt work

type User = {
  info: {
    name: string;
    role: "admin" | "standard";
  };
};

function logUserInformation(user: User) {
  console.log(
    `This user is ${user.info.name}, and their role is ${user.info.role}`,
  );
}

// logUserInformation({
//   name: "jon";
//   role: "admin"
// })

//corrected version:

logUserInformation({
  info: {
    name: "andrew",
    role: "admin",
  },
});

//this also wouldnt work because youre not using the .info key normal js wouldnt wouldnt catch this

//in real world application if a user tried to run this code their app would crash because javascript errors are caught at runtime / execution

//Assigning a variable type in typescript:
// - normally you dont need to because typescript and javascript will infer it
// - infer means what the compiler assumes to be true of a value
// ex - let x = 5; (5 meaning number instead of: let x: number = 5;) 5 is inferred as a number not string
// pattern: let variableName: type = value;
// - thing: Type

//examples of type variables:

let x: number = 5;
let someName: string = "andrew";
let isActive: boolean = true;

//examples for function parameters:

function greetHere(name: string) {
  console.log(`Hello, ${name}`);
  //must pass in a string or typescript will not allow it
}

// * you can also assign types to function return values

function add(a: number, b: number): number {
  return a + b;
  // as you can see the third :number represents the return value
}

//examples for object types:

let thisUser: { name: string; age: number } = {
  name: "andrew",
  age: 25,
};

//assigning types to arrays:

let theseNums: number[] = [1, 2, 3];
let names: string[] = ["alex", "same"];

// * generic form:

let moreNums: Array<number> = [1, 2, 3];

//assigning types to classes:

class PersonClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//using type aliases (custom types)

type AnotherUser = {
  name: string;
  age: number;
};

//using interfaces

interface ThirdUser {
  name: string;
  age: number;
}

//assigning types to unions

let identification: number | string;

//assigning types to generics:

function wrap<T>(value: T): T {
  return value;
}

//typescript is statically-typed
// - static types are declared on the spot

//javascript is dynamic-typed
// - determined at runtime meaning it can change
// - ex
// let number = 10;
// number = "a"
// - in javascript thats fine but if you try to pass that into a function for example bad

//
