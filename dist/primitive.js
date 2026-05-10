"use strict";
//! string practice with the tsc
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1: Declare your name and print it
let name = 'Shakib Hossen';
console.log(name);
// Task 2: Combine two strings
const firstName = 'Md. Sakib';
const lastName = 'Hossen';
const fullName = firstName + ' ' + lastName;
console.log(fullName);
// Task 3: Use template string
let money = 20;
console.log(`My name is ${fullName} and i have ${money} in my pocket right now`);
//! Number practice 
// Task 1: Basic operations
let a = 100;
let b = 28;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// Task 2: Average of numbers
const x = 19;
const y = 33;
const z = 67;
const avg = Number(((x + y + z) / 3).toFixed(2));
//? when we use toFixed() --> method , this converts the existing into an string
//? therefore for solving this issue we can use the parseFloat, or the Number method
console.log(`Avarage of the numbers is : ${avg}`);
//! Boolean Practice
// Task 1: Check if number is even 
const num = 822;
let isEven = num % 2 === 0 ? true : false;
isEven && console.log(`The number is an even number is ${num}`);
// Task 2: Compare values
let isGreater = 10 > 5 ? true : false;
isGreater && console.log(`The number is a greater number`);
//! Null & Undefined Practice
// Task 1: Assign null
const empty = null;
console.log(empty);
// Task 2: Undefined variable
let notAssigned = undefined;
console.log(notAssigned);
// Task 3: Optional value
let userName = null;
console.log(typeof userName); //? here we are getting object because of a long standing bug in js where null was accidentally given the object type tag
//? null --> intentional absence of any value
userName = 'Md. Sakib Hossen';
console.log(typeof userName);
//! Symbol Practice
// Task 1: Create symbols
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2);
// Task 2: Use symbol as object key
let user = {
    [sym1]: 123
};
console.log(user);
//! BigInt Practice
let bigNumber = 273282262727262627262n;
console.log(bigNumber);
//# sourceMappingURL=primitive.js.map