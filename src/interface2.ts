// task - 01

interface Person {
    name : string;
    age : number;
    dob ? : string;
}

const person1 : Person = {
    name : "Shakib Hossen",
    age : 25
}
console.log(person1);

// task - 02
interface Student  {
    id : number;
    name : string;
    rollNumber : number;
    grade ? : string 
}

const s1 : Student = { id : 123, name : 'Student 1', rollNumber : 1}
const s2 : Student = { id : 12, name : 'Student 2', rollNumber : 2, grade : 'C'};
console.log({s1, s2});

// task - 03
interface Car {
    readonly id : number;
    brand : string;
}
const cevot : Car= {
    id : 123,
    brand : 'M2'
}
console.log(cevot);

// task - 04
interface MathOperation {
    (n1 : number, n2:number) : number
}

const mathOpration : MathOperation = (x, y) =>{
    return x + y;
}
const addition : MathOperation = ( a , b) => a + b;
const sustraction : MathOperation = (x, y) => x - y;

console.log(sustraction(788, 9));
console.log(addition(5, 6));
console.log(mathOpration(9, 6));



// task - 05 
interface User  {
    name : string;
    age : number;
}
const user : User = {
    name : 'Umaid Hasan',
    age : 42
}
function printUser(user : User){
    console.log(user);
}
printUser(user);

// task - 06
interface  Address {
    city : string;
    country : string;
}
interface User1 {
    name : string ;
}

interface User2 {
    name : string,
    age : number,
    address : Address
}

interface UserWithAddress extends  User1, Address {
    isActive ? : boolean;
}
const u1 : UserWithAddress = {
    name : 'Shakib Hossen',
    city : 'Dhaka',
    country : 'Bangladesh'
}

// task - 07 
interface Product {
    title : string ;
    price : number ;
}
const products : Array<Product> = [
    {title : 'Laptop', price : 80000},
    { title: "Phone", price: 30000 },
    { title: "Headphone", price: 2000 }
]
console.log(products);

//? index signaturing 
//? in typescript , an index signature is used when we don't know the exact property name in advance , but we know the type of keys and values
//? directly saying ---> we don't know the property name but we do know the type of keys and values

interface Dictionary {
    [key : string] : number //? this meaning the keys will be string and the value will be number 
}

const marks : Dictionary = {
    math  : 90,
    physics : 78,
    chemistry : 89
}
console.log(marks);
//? we didn't declear the math, physics or chemistry earlier but we have decleared the type of keys and values the dictionary type will hold
interface IFriends  {
    [index : number] : string  
}
const friends : IFriends = ['Shakib', 'tamim', 'Niloy', 'Imran' , 'Kalam', 'gelam', 'Khailam'];
console.log(friends);