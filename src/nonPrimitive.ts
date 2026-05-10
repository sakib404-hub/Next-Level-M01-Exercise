/**
 * ? in ts the non primitives are 
 * ? object ---> ok
 * ? array ----> ok 
 * ? tuple --->  ok
 * ? function --->
 * ? enum and class ---> 
 */

/**
 * ! Object  ---> an object groups or combine multiple values togather using key - value pari
 * ? (key : value) ---> all the values are known as the property and they must be in key value pair
 * ? user : {type} = {value}
 */

let user : {
    name : string,
    age : number
} = {
    name : 'Ariyan Ahmed Shakib',
    age : 22
}

type Product = {
    title : string,
    price : number,
    inStock : boolean
}
let product : Product = {  // ? this is known as the type alias we will get introduice with them sometime latter 
    title : 'Laptop',
    price : 75000,
    inStock : true
}



/**
 * ? Array ---> array means holding multiple values of same type
 */

// array with the number type
let numbers : number[] = [1, 2, 3, 4, 5, 7];
let numbers2 : Array<number> = [1, 2, 3, 4, 5, 6]; //? alternative way of declearing type of an array
console.log({ numbers, numbers2});

// array with the string type
let friends : string[] = ['Sakib', 'Mukim', 'Jobbar', 'Shakil'];
let betterwise : Array<string> = ['Salam', 'Kalam','khailam' , 'Ghumailam'];
console.log({friends, betterwise});

// array with the boolean value
let flag : boolean[] = [true, false, false, true, false];
let isActive : Array<boolean> = [true, false, true, true, false];
console.log({flag, isActive});

//? mixed array type ---> 
// we can also declear mixed array with multiple data types in it using the or(|) operator in typescript it is known as the union

const mixedArray : (string | number | boolean)[] = ['shakib', true, 78, 73];
console.log(typeof mixedArray);
console.log(mixedArray);