interface Chai {
    flavour : string;
    price : number;
    milk ? : boolean
}

const masalaChai : Chai = {
    flavour : 'masala',
    price : 30
}
console.log(masalaChai);


interface chaiShop {
    readonly id : number;
    name : string
}

const shop : chaiShop = {
    id : 1,
    name : 'ChaiCode Cafe'
}
// shop.id = 2; not allowed as it is readonly

interface DiscountCalculator {
    (price : number ) : number
}

const applyDiscount : DiscountCalculator = (taka) => taka * 0.5;
console.log(applyDiscount(80));

interface TeaMachine {
    start() : void //? method decleration blueprint
    stop() : void
}
const teamachine  : TeaMachine = {
    start(){
        console.log('start'); //? method declearation
    },
    stop(){
        console.log('stop');
    }
}
teamachine.start();
teamachine.stop();

interface ChaiRating { //? index signature 
    [ flavor : string] : number
}

const ratings  : ChaiRating = {
    masala : 2.7,
    milk : 2.8,
    ginger : 2.8
}

interface User {
    name : string;
}
interface User {
    age : number;
    role : 'admin' | 'guest';
}
const u : User = {
    name : 'Shakib',
    age : 53,
    role : 'admin'
}

interface A {
    a : string
}
interface B { b : string}

interface C extends A, B {
    isActive : boolean
}

type IsAdmin = boolean;
const isAdmin : IsAdmin = true;
console.log(isAdmin);

//? interface useage is best with the non-primitive data types like array, function, object 

type Address = {
    city : string;
    postalCode : string;
}
interface IUser  {
    id : string;
    name : string;
    age : number;
    address ? : Address
}
interface IRole {
    role : 'admin' | 'user' | 'guest'
}
interface IUserWithRole extends IUser, IRole{
    isActive ? : boolean
}
const person4 : IUserWithRole = {
    id : '1234',
    name : 'Mr 1',
    age : 1,
    role : 'admin',
    isActive : true
}

type Add = (n1 : number, n2 : number) => number[]; 
//? type alias known

interface IAdd {   
    //? this is a interface type
    (n1 : number, n2 : number) : number[];
}

const arrMaker : IAdd = (x, y) =>{
    return [x, y]
}
console.log(arrMaker(9, 2));

interface IFriends {
    [index : number] : string
}

interface IFun {
    (n1 : number, n2 : number) : number[]
}

type Friends = string[];
const friends : Friends = ['A', 'B', 'C', 'D']
console.log(friends);


interface Obj {
    [value : string] : number
}

const marks : Obj = {
    // key that will be string : value that will be number
    math : 89,
    physics : 78,
    chemistry : 90
}
console.log(marks);

