"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? spread operator
const friends = ["Shakib", "Hossen", "Sakib", "Sabbir"];
const schoolFriends = ["Rafi", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul'];
const collageFriends = ['Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar'];
const allFriends = [...friends, ...collageFriends, ...schoolFriends];
console.log(allFriends);
const allFriends2 = [...friends];
allFriends2.push(...schoolFriends);
allFriends2.push(...collageFriends);
console.log(allFriends2);
const user = {
    name: 'Ariyan Ahmed Shakib',
};
const otherInformation = {
    hobbies: ['playing cricket', 'football', 'vollyball', 'badminton'],
    profession: 'student'
};
const userInformation = { ...user, ...otherInformation };
console.log(userInformation);
//? rest 
const sendInvite = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Dear ${friend}, you are invited to my birthday party`);
    });
};
sendInvite("Shakib", "Naim", "Niloy", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul', 'Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar');
//# sourceMappingURL=restSpread.js.map