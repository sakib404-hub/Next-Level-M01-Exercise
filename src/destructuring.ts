//decleared a  type of the User
type User = {
    id : number,
    name : {
        firstName : string;
        middleName ? : string,
        lastName : string
    };
    gender : string,
    favouriteColor ? : string
}

//? decleared a variable user of type User
const user  : User = {
    id : 123,
    name : {
        firstName : "Ruhul",
        middleName : 'Amin',
        lastName : 'Badsha'
    },
    gender  : 'Male',
    favouriteColor : "black"
}

console.log(user);
//? destructuring here 
const {id : myId, favouriteColor : myColor, gender : myGender, name : {firstName : fName, lastName : lName}} = user;
console.log({myId, myGender, fName, lName});
console.log({myColor});

const friends  : string [] = ['Salam', 'kalam', 'Aelam', 'Khailam', 'gelam'];
const [,,,myName, ] = friends;
console.log(myName);

const numbers : Array<number> = [10, 12, 19, 28, 37, 82, 28, 29] //? this is another way of giving types to array
console.log(numbers);