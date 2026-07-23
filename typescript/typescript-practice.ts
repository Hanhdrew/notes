//first typescript program:

//we now declared age as a number
let age: number = 20;

//javascript types:
// - typical boolean, string, number

//typescript adds types

//typescript types:
// - any => any type of value
// - unknown
// - never
// - enum
// - tuple

//variables:

let sales: number = 16_48_43; //you can break numbers with an underscore
let course: string = "typescript";
let is_published: boolean = true;
let level; // not declared this is type "any" you want to avoid any because this defeats the purpose

// - typescript can infer types as well. you dont need annotations

function render(document: any) {
  console.log(document);
}

//arrays:

let numbersArray = [1, 2, 4, "5"]; //valid javascript => dynamic => breaks a function that expects numbers
let numbersArrayFix: number[] = [1, 2, 3, 4];

//tuples:
// - fixed length array
// - try to restrict your tuples to two values or itll get very compicated

let user: [number, string] = [1, "andrew"];
// - we add two things a number and a string you put what it expects can be any length but you define it

//enums:
// - represents a list of related constants
const small = 1;
const medium = 2;
const large = 3;

// - use PascalCase for some reason
// - assigning it to a constant will optimize compiled javascript code
const enum Size {
  SmallEnum = 1,
  MediumEnum = 2,
  LargeEnum = 3,
}

let mySize: Size = Size.MediumEnum;

//functions:

// - assign return type after parameters type: number => void if youre not returning value
// - compiler will expect number only. undefined => error
// - ? will make parameter optional
// - you should always just use a default value for your parameter
function calculateTax(income: number, taxYear?: number): number {
  if (income < 50_000) {
    return income * 1.2;
  } else {
    return 0;
  }
  // - undefined causes an error so we put else return 0
}

//objects:

// - just like a function define types using curly braces
// - made name optional and gave name an empty string
// - you should avoid doing it this way
// - make it conceptually accurate => every employee will have a name

let employee: {
  readonly id: number;
  name?: string;
  //object method:
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//type alias for objects: will make them easier to understand, keep it clean, and more maintainable

// - use pascal case
// - creates the shape of the structure our objects will use
// - this can be used in multiple places
type NewEmployee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// - now you can assign type NewEmployee instead of defining it for each object
let newEmployee: NewEmployee = {
  id: 1,
  name: "andrew",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types:
// - a union type you can give a variable / function parameter more than one type

// - this function can take two kinds of parameters
function kgToLbs(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

//intersection types:
// - another technique for intersecting types
// - its & and means BOTH

let bigWeight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal types:
// - limits the amount of assignable types to a variable
// - makes type literal

let quantity: 50 | 100 = 50;
// now quantity can be 50 or 100 only

type Metric = "cm" | "inch";
let measurement: Metric = "inch";

//nullable types:
// - ts is strict about null and undefined
// - by default you cant pass null into function wo a union type

function greet(name: string | null | undefined) {
  return name ? name.toLowerCase() : "uh oh no name here";
}

greet(null);

//optional chaining:
