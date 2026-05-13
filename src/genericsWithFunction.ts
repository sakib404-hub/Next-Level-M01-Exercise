function printSomething(str : string) {
    console.log(str);
}
printSomething('Hellow world');

// type CreateArrayWithGeneric<T> = Array<T>


const createArray = (value : string) : string[] =>{
    return [value];
}
const createArrayWithNumber  = (value : number) : number[] =>{
    return [value]
}

interface User {
    name :string;
    age : number;
    dob ? : string;
}
const createArrayWithObject = (value : User) : User[] =>{
    return [value]
}

console.log(createArray('shakib'));
console.log(createArrayWithNumber(9));
console.log(createArrayWithObject({name : 'Shakib Hossen', age : 24}));

const createGenericArray = <T>(value : T) : T[] =>{
    return [value];
}

console.log(createGenericArray('shakib Hossen'))
console.log(createGenericArray({name : 'shakib Hossen', age : 24}));;

//? tuple

const createArrayWithTuple = <X, Y>(v1 : X, v2 : Y) : [X, Y] =>{
    return [v1, v2]
}

console.log(createArrayWithTuple('shakib', 80));
console.log(createArrayWithTuple({name : 'shakib hossen', id : 12, age : 24}, 'shakib Hossen'));
console.log(createArrayWithTuple(true, 'shakib'));

const addCourse = <T>(studentInfo : T) : T & {course : string}  => {
    return {
        course : 'Next Level B07',
        ...studentInfo
    }
}

const student1 = {
    id : 123,
    name : 'shakib',
    hasPen : true
}
const student2 = {
    id : 123,
    name : 'Jhanker Mahbub',
    hasCar : true,
    isMarried : true
}

console.log(addCourse(student1));
console.log(addCourse(student2));