"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = {
    name: 'Sakib Hossen',
    working: 'Yes i am working right now',
    finished: true
};
const responseTwo = {
    name: 'Akib Hossen',
    working: true,
    finished: false
};
console.log(response);
console.log(responseTwo);
//? task - 01
function wrapInArray(n1) {
    return [n1];
}
//? task - 02
const returnLat = (arr) => {
    const lastIndex = arr.length;
    return arr[lastIndex - 1];
};
console.log(returnLat([1, 2, 4, 19]));
// ============================= i have to study about generics and type more
//# sourceMappingURL=genericTask.js.map