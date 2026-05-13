"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constrain ---> meaning we are giving rules to something or applying the strict rules and regulations
 */
//? this portion is the constrain part meaning id and name must be in the object 
const addCourse = (value) => {
    return {
        course: 'Next level web development',
        ...value
    };
};
const s1 = {
    id: 123,
    name: 'shakib Hosen',
    hasPen: true
};
const s2 = {
    id: 262,
    name: 'Jhanker Mahbub',
    hasCar: true,
    isMarried: true
};
const s3 = {
    hasWatch: true
};
console.log(addCourse(s1));
console.log(addCourse(s2));
const enrollStudent = (value) => {
    if (value.hasClearence === true) {
        return {
            addCourse: 'Computer Graphics',
            ...value
        };
    }
    else {
        return { status: 'you do not have the clearence' };
    }
};
const s4 = {
    id: 12,
    name: 'Sirajhum Munir',
    hasClearence: true,
    hasHighCg: false
};
const s5 = {
    id: 23,
    name: 'Modhusudhon Roy',
    hasClearence: false,
};
console.log(enrollStudent(s4));
console.log(enrollStudent(s5));
//# sourceMappingURL=constrain.js.map