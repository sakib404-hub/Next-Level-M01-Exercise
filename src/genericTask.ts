//? generic with interface 
interface ApiResponse<X, Y> {
    name : string
    working : X;
    finished : Y;
}

const response  : ApiResponse <string, boolean> = {
    name : 'Sakib Hossen',
    working : 'Yes i am working right now',
    finished : true
}
const responseTwo : ApiResponse<boolean, boolean> = {
    name :'Akib Hossen',
    working : true,
    finished : false
}
console.log(response);
console.log(responseTwo);

//? task - 01
function wrapInArray<T>(n1 : T) : T[]{
    return [n1]
}

//? task - 02
const returnLat = <T>(arr : T[]) : T | undefined =>{
    const lastIndex = arr.length;
    return arr[lastIndex - 1];
}
console.log(returnLat([1, 2, 4, 19]));
// ============================= i have to study about generics and type more


