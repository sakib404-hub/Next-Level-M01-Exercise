"use strict";
//? keyof is a type operator that only works on the type of the typescript 
Object.defineProperty(exports, "__esModule", { value: true });
const myVechile = 'car';
const user = {
    id: 222,
    name: 'Mezba',
    address: {
        city: 'ctg'
    }
};
const myId = user['id'];
const myName = user['name'];
const myAddress = user['address'].city;
console.log({ myId, myName, myAddress });
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
console.log(getPropertyFromObj(user, 'name'));
console.log(getPropertyFromObj(user, 'id'));
console.log(getPropertyFromObj(user, 'address'));
const product = {
    brand: 'Hp',
    model: 'Hp victus'
};
const s1 = {
    id: 123,
    name: 'Fardin Shuvo',
    class: '11'
};
const genericPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result2 = genericPropertyFromObj(product, 'model');
const result3 = genericPropertyFromObj(s1, 'class');
console.log({ result2, result3 });
const lighter = {
    id: 1,
    name: 'sunlight',
    color: 'blue',
    hasGas: true
};
//# sourceMappingURL=keyOf.js.map