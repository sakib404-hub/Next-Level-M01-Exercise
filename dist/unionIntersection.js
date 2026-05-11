"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? type alias with union of string literal type
const getDashboard = (role) => {
    if (role === 'admin') {
        return 'admin dashboard';
    }
    else if (role === 'user') {
        return 'user dashboard';
    }
    else {
        return 'guest dashboard';
    }
};
const dash = getDashboard('guest');
console.log(dash);
const chowdhury = {
    id: '101',
    name: 'Shakib Hossen',
    phnNo: '017xxxxxxxx',
    designation: 'Software Engineer',
    teamSize: 5
};
console.log(chowdhury);
const person1 = {
    id: 123,
    name: 'Anything',
    associateId: 12345,
    designation: 'Student Associate',
    phnNo: 181919181
};
console.log(person1);
/**
 * ?  ? ----> this is used a ternary operator
 * ? ?? ----? this is used as nullish coalescing operator
 * ? ? ----> in object declearation it is used to make a property optional
 */ 
//# sourceMappingURL=unionIntersection.js.map