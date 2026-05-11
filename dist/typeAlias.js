"use strict";
/**
 * ? In typescript --> type alias is a way through which we give a new name to a type. Through using this complex type are reused easily
 * ? or simply think it like using a type again ana again therefore we give that type a name and use it this is known as the type alias
 * ? type aliasName = type ---> this is the syntax for the type alias
 * ? type alias is flexiable and can be used for defining primitive , union, tuple and in others case also
 */
Object.defineProperty(exports, "__esModule", { value: true });
let name = 'Md. Sakib Hossen'; //? this is known as the string type alias
const isAdmin = true;
const name2 = 'Ariyan Ahmed Shakib';
console.log({ isAdmin, name2 });
const user = {
    id: 123,
    name: 'Md. Sakib Hossen',
    isActive: false
};
console.log(user);
let currentStatus = 'failed';
console.log(currentStatus);
const addtion2 = (x, y) => x + y;
console.log(addtion2(2, 8));
const subs = (x, y) => {
    return x - y;
};
const subs2 = (x, y) => {
    return x - y;
};
//# sourceMappingURL=typeAlias.js.map