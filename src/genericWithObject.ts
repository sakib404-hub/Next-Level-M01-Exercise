type GenericArray<T> =  Array<T>

const userList : GenericArray<{name : string, age : number}> = [
    {name : 'Sakib Hossen', age : 29},
    {name : 'Akib Hossen', age : 42},
    {name : 'Imran', age : 23},
]

console.log(userList);