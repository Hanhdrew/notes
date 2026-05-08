//typescript vs javascript

//at its core typescript is a superset of javascript
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
