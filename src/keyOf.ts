//? keyof is a type operator that only works on the type of the typescript 


interface RichPeopleVechile {
    car : string; //? key -  value pair
    bike : string; //? key - value
    cng : string;
}

//? this is a type that has the string as keys in another type
type MyVechile = 'bike' | 'car' | 'cng';
type MyVechile2 = keyof RichPeopleVechile;

const myVechile : MyVechile2 = 'car';

//? keyof constrain ------> 


interface User {
    id : number;
    name : string;
    address :{
        city : string
    }
}


const user : User = {
    id : 222,
    name : 'Mezba',
    address : {
        city : 'ctg'
    }
}


const myId = user['id'];
const myName = user['name'];
const myAddress = user['address'].city;
console.log({myId, myName, myAddress});

const getPropertyFromObj = (obj : User, key : keyof User) =>{
    return obj[key]
}
console.log(getPropertyFromObj(user, 'name'));
console.log(getPropertyFromObj(user, 'id'));
console.log(getPropertyFromObj(user, 'address'));

const product = {
    brand : 'Hp',
    model :'Hp victus'
}

const s1 = {
    id : 123,
    name : 'Fardin Shuvo',
    class : '11'
}

const genericPropertyFromObj = <T>(obj : T, key : keyof T)=>{
    return obj[key]
}


const result2 = genericPropertyFromObj(product, 'model') 
const result3 = genericPropertyFromObj(s1, 'class')
console.log({result2, result3});

type Lighter = {
    id : number;
    name : string;
    color : string;
    hasGas : boolean
}

const lighter : Lighter = {
    id : 1,
    name : 'sunlight',
    color : 'blue',
    hasGas : true
}

type Keys = keyof Lighter; //? 'id' | 'name' | 'color' | 'hasGas'