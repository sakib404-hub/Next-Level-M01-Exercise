/**
 * ? In typescript --> type alias is a way through which we give a new name to a type. Through using this complex type are reused easily
 * ? or simply think it like using a type again ana again therefore we give that type a name and use it this is known as the type alias
 * ? type aliasName = type ---> this is the syntax for the type alias
 * ? type alias is flexiable and can be used for defining primitive , union, tuple and in others case also
 */

//? primitive type
type Username = string;
let name : Username = 'Md. Sakib Hossen' //? this is known as the string type alias

type IsAdmin = boolean;
const isAdmin : IsAdmin = true; 

type MyString = string;
const name2 : MyString = 'Ariyan Ahmed Shakib';
console.log({isAdmin, name2});


//object type
type User = { // definig a custom type using the type Alias or a structure of user is defined
    //? mane kono user thakle tar ei properties gula thakbei
    id : number;
    name : string;
    isActive : boolean;
}
const user : User = {
    id : 123,
    name : 'Md. Sakib Hossen',
    isActive : false
}
console.log(user);

//? Union type 
type status = 'failed' | 'success' | 'loading';  //? this is known as the type alias with the union of string literal type. (|) this is known as the union
let currentStatus : status = 'failed'
console.log(currentStatus)


//? function type 

type Add = (n1: number, n2 : number) => number;
const addtion2 : Add = (x, y) => x + y;
console.log(addtion2(2, 8));

type Subs = (x : number, y : number) => number; //? this is a function type that is defined previouisly or firstly 

const subs = (x : number, y : number) : number =>{
    return x -y;
}
const subs2 : Subs = (x, y) =>{ //? then assigning the function type to this function
    return x - y;
}