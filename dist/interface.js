"use strict";
/**
 * ? In typescript --> Interface is used to define the structure or shape of an object . It can be called as a blueprint that is telling what properties and types should have in an object
 * ? interface made sure that ---> object always follow the correct structure
 * ? Better readablity ---> we clearly understand what properties the object should contain
 * ? Reuseablity
 */
Object.defineProperty(exports, "__esModule", { value: true });
const person1 = {
    //? if something is missing from, the bluePrint it will give us an error or the type script will give us an error
    name: 'Boby Akther',
    age: 28
};
function makeChai(order) {
    console.log(order);
}
function serverChai(order) {
    console.log(order);
}
class MasalaChai {
    water = 100;
    milk = 28;
}
class Chai {
    size = 'large';
}
function orderKorbo(tea) {
    console.log(tea);
}
const cup = {
    teaLeaves: 2,
    masala: 2
};
console.log(cup);
const cfg = {
    appName: 'Chai Code',
    version: 1,
    releasedDate: '22-10-2027'
};
//# sourceMappingURL=interface.js.map