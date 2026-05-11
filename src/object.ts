type User = {
    readonly organization : 'Programming Hero';
    //? accessModifiers propertyName : literal type
    //  this way of fixing a property value is known as literal type and it is done by the access modifiers
    name : string;
    age : number;
    dob ? : string;
    isActive : boolean,
    bacth : number
}


const user : User = {
    organization : 'Programming Hero',
    name : 'Shakib Hossen',
    age : 24,
    isActive : true,
    bacth : 7
}
console.log(user);