/**
 * ?  Generic ---> Meaning keeping everything simple and normal
 * ? Generic ----> Dynamically generalize things 
 */

type GenericArray<T> = Array<T> 

const names : string[] = ['sakib', 'tamim', 'imran', 'badsha', 'biplop', 'sagoto']

const friends : GenericArray<string> = ['sakib', 'adu', 'boby', 'tonima'];

const rollNumbers : GenericArray<number> = [10, 12, 82, 1];

const isEligible : GenericArray<boolean> = [true, false, false, true];


type Coordinates<X, Y> = [X, Y]
const coordinatees : Coordinates<string, number> = ['20', 30]
console.log(coordinatees);

const coordinates2 : Coordinates<string, string> = ['hellow', 'world'];
console.log(coordinates2);

