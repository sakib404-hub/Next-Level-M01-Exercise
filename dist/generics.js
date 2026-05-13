"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? Generic ----> Dynamically Generealize things
/**
 * ? Generic is a type of feature that allow us to type reuseable code where  type is not fixed it is decided when needed
 * ? Meaning using the 'type perameter' writing fleible code
 * ?
 */
function identity(value) {
    //? here the type of the variable and return value is fixed as string it can not be use without the string
    //? to do this we need  --> generics
    return value;
}
console.log(identity('hellow'));
function identity2(value) {
    console.log(typeof value);
    return value;
}
console.log(identity2(2));
console.log(identity2('2'));
console.log(identity2(true));
//! SYNTAX : function functionName <Type variable>(value : Type variable ) : Type variable{}
//? Generic array example
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([2, 8, 9]));
console.log(getFirstElement(['2', '8', '9']));
console.log(getFirstElement([true, false, true]));
//# sourceMappingURL=generics.js.map