// primitives: number, string, boolean
// more complex types: arrays, objects
// functions types, parameters

//* primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//* more complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true
// };

let people: {
  name: string;
  age: number;
}[];

// type inference

let course = "React - The Complete Guide";

course = 1234;
