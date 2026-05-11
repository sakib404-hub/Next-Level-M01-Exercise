function wrapInArray<T>(item : T) : T[] {
    return [item];
}
console.log(wrapInArray('masala'));
console.log(wrapInArray(56));
console.log(wrapInArray(true));
console.log(wrapInArray({flavor : 'ginger'}));

function pari<A, B>(a :A, b : B) : [A, B] {
    return [a, b];
}


const pair2 = <A, B>(a : A, b : B) : [A, B]=>{
    return [a, b];
}
console.log(pair2('helow', false));
console.log(pair2(53, false));

interface Box<T>{
    content : T 
}

const numberBox : Box<string> = {
    content : '10'
}
console.log(numberBox);

interface Person <X, Y> {
    name : X;
    email : Y;
}
const person : Person<string, string> = {
    name : 'Shakib Hosssen',
    email :'akibhossainsakib801@gmail.com'
}
const person2 : Person<string, boolean> = {
    name : 'Akib Khan',
    email : false
}
console.log(person);
console.log(person2);

interface ApiPromise<T> {
    status : boolean,
    data : T 
}
const res : ApiPromise<{flavor : string}> = {
    status : true,
    data : {
        flavor : 'masla'
    }
}
console.log(res);
