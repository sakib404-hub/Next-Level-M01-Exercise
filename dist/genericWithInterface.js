"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userList = [
    { name: 'Sakib Hossen', age: 29 },
    { name: 'Akib Hossen', age: 42 },
    { name: 'Imran', age: 23 },
];
console.log(userList);
const poorDeveloper = {
    name: 'Mr Poor',
    salary: 20000,
    device: {
        model: 'Hp Victus',
        brand: 'HP',
        releasedYear: '2003'
    },
    isActive: true,
    smartWatch: 'Poor Developer do not have any smart watch'
};
const richDeveloper = {
    name: 'Mr Rich',
    salary: 500000,
    device: {
        model: 'Iphone',
        brand: 'Iphone',
        releasedYear: '2002'
    },
    isActive: false,
    smartWatch: true,
};
const richDeveloper2 = {
    name: 'Mr Rich',
    salary: 500000,
    device: {
        model: 'Iphone',
        brand: 'Iphone',
        releasedYear: '2002'
    },
    isActive: false,
    smartWatch: {
        heartRate: 'You are beating so fast',
        stopWatch: true,
        calculator: false,
        aiFeature: true
    },
    bike: {
        brand: 'Yahamaha',
        engineCapacity: '200cc'
    }
};
console.log({ poorDeveloper, richDeveloper, richDeveloper2 });
//# sourceMappingURL=genericWithInterface.js.map