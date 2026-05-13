type GenericArray<T> =  Array<T>

type User = {
    name : string;
    age : number
}

const userList : GenericArray<User> = [
    {name : 'Sakib Hossen', age : 29},
    {name : 'Akib Hossen', age : 42},
    {name : 'Imran', age : 23},
]

console.log(userList);