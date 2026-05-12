type GenericArray<T> =  Array<T>

interface User {
    name : string;
    age : number
}

const userList : GenericArray<User> = [
    {name : 'Sakib Hossen', age : 29},
    {name : 'Akib Hossen', age : 42},
    {name : 'Imran', age : 23},
]

console.log(userList);


interface Developer<X, Y = null> {
    name : string;
    salary : number;
    device : {
        model : string;
        brand : string;
        releasedYear : string;
    }
    isActive : boolean;
    smartWatch ? : X;
    bike ? : Y
}

const poorDeveloper : Developer<string> = {
    name : 'Mr Poor',
    salary : 20000,
    device : {
        model : 'Hp Victus',
        brand : 'HP',
        releasedYear : '2003'
    },
    isActive : true,
    smartWatch : 'Poor Developer do not have any smart watch'
}

const richDeveloper : Developer<boolean> = {
    name : 'Mr Rich',
    salary : 500000,
    device : {
        model : 'Iphone',
        brand : 'Iphone',
        releasedYear : '2002'
    },
    isActive : false,
    smartWatch : true,
}

type SmartWatch = {
    heartRate : string;
    stopWatch : true;
    calculator : boolean;
    aiFeature : boolean
}
interface Bike {
    brand : string,
    engineCapacity : string
}


const richDeveloper2 : Developer<SmartWatch, Bike> = {
    name : 'Mr Rich',
    salary : 500000,
    device : {
        model : 'Iphone',
        brand : 'Iphone',
        releasedYear : '2002'
    },
    isActive : false,
    smartWatch : {
        heartRate : 'You are beating so fast',
        stopWatch : true,
        calculator : false,
        aiFeature : true
    },
    bike : {
        brand : 'Yahamaha',
        engineCapacity : '200cc'
    }
}
console.log({poorDeveloper, richDeveloper, richDeveloper2});