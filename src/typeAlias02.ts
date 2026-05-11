type Point = [number, number]; //? fixed length and order therefore this is a tuple type declearation. 1st value must be number and the second value also must be number

const p : Point = [10, 20];
console.log(p);

type Tuple = [string, boolean, number];
const anything : Tuple = ['Shakib', false, 20]
console.log(anything);


//? practice task 2
type Student = { //? decleared a type of student means if an object is this type . The object has to follow the properties decleared here
    id : number;
    name : string;
    age : number;
    address ? : {
        city : string ;
        postalCode : number
    }
    isStudent  : boolean
}

const student : Student = {
    id : 123,
    name : 'Ariyan Ahmed Shakib',
    age : 24,
    address : {
        city  : 'Dhaka',
        postalCode : 1236
    },
    isStudent : true
}

console.log(student);


//? practice 03

type UserRole = 'admin' | 'guest' | 'user' //? this is known as the type alias with union of string literal type

type User = {
    name : string;
    role : UserRole
}

const user : User = {
    name : 'Imran Bhuyan',
    role : 'guest'
}
console.log(user);


//? practice - 04

type Mult = (n1 : number, n2 : number) => number;
const multiplication : Mult = (x, y)=> x * y;
console.log(multiplication(2, 8));

//? task - 05

type ID = number | string;
type Emp = {
    id : ID,
    name : string
}

const emp : Emp = {
    id : 123,
    name : 'Employee 1'
}

const emp2 : Emp = {
    id : '1234',
    name : 'Employee 2'
}
console.log({emp, emp2});