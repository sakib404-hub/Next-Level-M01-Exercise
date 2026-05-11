"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? decleared a variable user of type User
const user = {
    id: 123,
    name: {
        firstName: "Ruhul",
        middleName: 'Amin',
        lastName: 'Badsha'
    },
    gender: 'Male',
    favouriteColor: "black"
};
console.log(user);
//? destructuring here 
const { id: myId, favouriteColor: myColor, gender: myGender, name: { firstName: fName, lastName: lName } } = user;
console.log({ myId, myGender, fName, lName });
console.log({ myColor });
const friends = ['Salam', 'kalam', 'Aelam', 'Khailam', 'gelam'];
const [, , , myName,] = friends;
console.log(myName);
const numbers = [10, 12, 19, 28, 37, 82, 28, 29]; //? this is another way of giving types to array
console.log(numbers);
//# sourceMappingURL=destructuring.js.map