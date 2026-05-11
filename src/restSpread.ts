//? spread operator
const friends : string[] = ["Shakib", "Hossen", "Sakib", "Sabbir"];
const schoolFriends : string[] = ["Rafi", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul'];
const collageFriends : string[] = ['Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar'];

const allFriends : Array<string> = [...friends, ...collageFriends, ...schoolFriends];
console.log(allFriends);

const allFriends2 : Array<string> = [...friends];
allFriends2.push(...schoolFriends);
allFriends2.push(...collageFriends);
console.log(allFriends2);


type User = {
    name : string;
    mobileNo ? : number
}

type OtherInfo = {
    hobbies : Array<string>;
    profession : string;
}

const user : User = {
    name : 'Ariyan Ahmed Shakib',
}
const otherInformation : OtherInfo = {
    hobbies : ['playing cricket', 'football', 'vollyball', 'badminton'],
    profession : 'student'
}

const userInformation = { ...user, ...otherInformation};
console.log(userInformation);

//? rest 
const sendInvite = (...friends : Array<string>) =>{
    friends.forEach((friend : string)=>{
        console.log(`Dear ${friend}, you are invited to my birthday party`);
    })
}
sendInvite("Shakib", "Naim", "Niloy", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul', 'Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar')