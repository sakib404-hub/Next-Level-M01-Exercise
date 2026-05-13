"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const masalaChai = {
    flavour: 'masala',
    price: 30
};
console.log(masalaChai);
const shop = {
    id: 1,
    name: 'ChaiCode Cafe'
};
const applyDiscount = (taka) => taka * 0.5;
console.log(applyDiscount(80));
const teamachine = {
    start() {
        console.log('start'); //? method declearation
    },
    stop() {
        console.log('stop');
    }
};
teamachine.start();
teamachine.stop();
const ratings = {
    masala: 2.7,
    milk: 2.8,
    ginger: 2.8
};
const u = {
    name: 'Shakib',
    age: 53,
    role: 'admin'
};
const isAdmin = true;
console.log(isAdmin);
const person4 = {
    id: '1234',
    name: 'Mr 1',
    age: 1,
    role: 'admin',
    isActive: true
};
const arrMaker = (x, y) => {
    return [x, y];
};
console.log(arrMaker(9, 2));
const friends = ['A', 'B', 'C', 'D'];
console.log(friends);
const marks = {
    // key that will be string : value that will be number
    math: 89,
    physics: 78,
    chemistry: 90
};
console.log(marks);
//# sourceMappingURL=interface3.js.map