"use strict";
/**
 * ? Normally typescript doesn't allow null unless it is explicitly said
 * ? Sometime a value might not exist yet like data from api that is not loaded, user hasn't entered input, or optional values therefore we use null to represent intentional empty values
 * ? Nullable type = a type that allows null as a value using union(| null)
 */
Object.defineProperty(exports, "__esModule", { value: true });
let name = null; //? name that can be either string or null called as a union type
console.log(name);
name = 'Ariyan Ahmed Shakib';
console.log(name);
const user = {
    name: 'Ariyan Ahmed Shakib',
    email: null
};
console.log(user);
const getUser = (input) => {
    input ? console.log(`User from database : ${input}`) : console.log('User from database : All User');
};
getUser(null);
getUser('shakib');
//# sourceMappingURL=nullable.js.map