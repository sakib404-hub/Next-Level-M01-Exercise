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
    start() : void //? method decleration
    stop() : void
}
const teamachine  : TeaMachine = {
    start(){
        console.log('start');
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
}
const u : User = {
    name : 'Shakib',
    age : 53
}

interface A {
    a : string
}
interface B { b : string}

interface C extends A, B {
    isActive : boolean
}

//? Generics 