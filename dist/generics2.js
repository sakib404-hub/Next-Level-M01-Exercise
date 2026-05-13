"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray('masala'));
console.log(wrapInArray(56));
console.log(wrapInArray(true));
console.log(wrapInArray({ flavor: 'ginger' }));
function pari(a, b) {
    return [a, b];
}
const pair2 = (a, b) => {
    return [a, b];
};
console.log(pair2('helow', false));
console.log(pair2(53, false));
const numberBox = {
    content: '10'
};
console.log(numberBox);
const person = {
    name: 'Shakib Hosssen',
    email: 'akibhossainsakib801@gmail.com'
};
const person2 = {
    name: 'Akib Khan',
    email: false
};
console.log(person);
console.log(person2);
const res = {
    status: true,
    data: {
        flavor: 'masla'
    }
};
console.log(res);
//# sourceMappingURL=generics2.js.map