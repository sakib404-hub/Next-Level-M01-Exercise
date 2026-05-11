/**
 * ? In typescript --> Interface is used to define the structure or shape of an object . It can be called as a blueprint that is telling what properties and types should have in an object 
 * ? interface made sure that ---> object always follow the correct structure
 * ? Better readablity ---> we clearly understand what properties the object should contain
 * ? Reuseablity
 */

interface User { //? creating the bluePrint of the object
    name : string,
    age : number
}

const person1 : User = {
    //? if something is missing from, the bluePrint it will give us an error or the type script will give us an error
    name : 'Boby Akther',
    age : 28
}

type ChaiOrder = {
    type : string;
    suger : number,
    strong : boolean
}

function makeChai(order : ChaiOrder){
    console.log(order);
}


//? therefore we understand that same task can be done by type or the interface but interface actually lacks some of the comatability 
interface  ChaiServe {  
    type : string;
    suger : number,
    strong : boolean
}

function serverChai(order : ChaiServe){
    console.log(order);
}


type TeaRecipe = {
    water : number;
    milk : number;
}
interface ChaiRecipe  {
    milk : number;
    water : number;
}
class MasalaChai implements ChaiRecipe {
    water = 100;
    milk = 28;
}

interface CupSize {
    size : 'small' | 'large'
}
class Chai implements CupSize {
    size: "small" | "large" = 'large'; 
}

type Response = {ok : true } | {ok : false }
type TeaType = 'masala' | 'ginger' | 'lemon' //? literal types

function orderKorbo(tea : TeaType){
    console.log(tea);
}

type BaseChai = {
    teaLeaves : number
}
type Extra = {
    masala : number
}
type MasalaChai2 = BaseChai & Extra ; //? this is known as the intersection of an object

const cup : MasalaChai2 = {
    teaLeaves : 2,
    masala : 2
}
console.log(cup);

type Config = {
    readonly appName : string;
    version : number;
    releasedDate : string;
}

const cfg : Config = {
    appName : 'Chai Code',
    version : 1,
    releasedDate : '22-10-2027'
}