const arrayOfNumbers : Array<number> = [1, 2, 3, 4, 5, 6 ];
const arrayOfString : Array<string> = ['1', '2', '3', '4', '5', '6']

const arryOfStringUsingMap : Array<string> = arrayOfNumbers.map((num)=> num.toString())
console.log(arryOfStringUsingMap);


interface AreaOfNumber  {
    height : number;
    width : number;
}

//? by object string notation we can get a type from another type

type Height = AreaOfNumber['height'] //? therfore we will get a number here

interface AreaOfString {
    height : string;
    width : string;
}

type AreaOfStringUsingMap =  {
    [key in 'height' | 'width'] : string
}

type AeraOfNumberUsingMapAndkeyOf = {
    [key in keyof AreaOfNumber] : boolean
}

//with generic we can apply this also
type Area<T> = {
    [key in keyof T] : T[key]
}

type Area2 = {
    height : string;
    width : number
}

const area1 : Area<Area2> = {
    height : '50k',
    width : 10
}