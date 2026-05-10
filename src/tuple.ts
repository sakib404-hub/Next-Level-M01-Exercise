/**
 * ? Tuple ---> it is a special type(dhoron) of typescript,where we declear a fixed length array and assign type to every position of the array
 * ? tuple ---> fixed element + type for every element 
 * ? there are multiple reasons why we should use the tuple 
 * ? maintains a fixed structure, made sure the data are in sam,e order and structure
 * ? lessen the chance of type mistake
 * ? improves the readability
 */

let user : [string, number] = ['Shakib Hossen', 24]; //? first value must be string and the second value must be number
console.log(user);

let user2 : [string , number];
// user2 = [22, 'Shakib']  ---> this is wrong type is mismatched
// user2 = ['Shakib] ----> this is wrong because the length seems to be smller

let httpStatus : [number, string] = [404, 'Not Found'];
let coordinates : [number, number] = [20, 30];

let student : [string, number, boolean] = ['Ariyan Ahmed Shakib', 24, true];

//? length is fixed, every position with fixed type, data becomes more structured and safe
