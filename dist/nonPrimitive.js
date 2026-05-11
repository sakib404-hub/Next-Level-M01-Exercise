"use strict";
/**
 * ? in ts the non primitives are
 * ? object ---> ok
 * ? array ----> ok
 * ? tuple --->  ok
 * ? function --->
 * ? enum and class --->
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ! Object  ---> an object groups or combine multiple values togather using key - value pari
 * ? (key : value) ---> all the values are known as the property and they must be in key value pair
 * ? user : {type} = {value}
 */
let user = {
    name: 'Ariyan Ahmed Shakib',
    age: 22
};
let product = {
    title: 'Laptop',
    price: 75000,
    inStock: true
};
/**
 * ? Array ---> array means holding multiple values of same type
 */
// array with the number type
let numbers = [1, 2, 3, 4, 5, 7];
let numbers2 = [1, 2, 3, 4, 5, 6]; //? alternative way of declearing type of an array
console.log({ numbers, numbers2 });
// array with the string type
let friends = ['Sakib', 'Mukim', 'Jobbar', 'Shakil'];
let betterwise = ['Salam', 'Kalam', 'khailam', 'Ghumailam'];
console.log({ friends, betterwise });
// array with the boolean value
let flag = [true, false, false, true, false];
let isActive = [true, false, true, true, false];
console.log({ flag, isActive });
//? mixed array type ---> 
// we can also declear mixed array with multiple data types in it using the or(|) operator in typescript it is known as the union
const mixedArray = ['shakib', true, 78, 73];
console.log(typeof mixedArray);
console.log(mixedArray);
//# sourceMappingURL=nonPrimitive.js.map