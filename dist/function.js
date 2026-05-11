"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num1, num2 = 0) {
    return num1 + num2;
}
console.log(addTwo(2, 8));
const subTwo = (num1, num2) => {
    return num1 + num2;
};
console.log(subTwo(78, 2));
//? we will be now declearing a fuinction in an object that is known as method in typescript . For accessing this method we would be using this keyword
const poorUser = {
    name: 'Shakib Hossen',
    balance: 0,
    addBalance(money) {
        this.balance += money;
        return this.balance;
    }
};
poorUser.addBalance(1020);
console.log(poorUser);
//? getting the square array from an array
const number = [10, 2, 4, 7, 8, 9, 25];
const squareArr = number.map((num) => num * num);
console.log(squareArr);
//# sourceMappingURL=function.js.map