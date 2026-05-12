/**
 * ? we know better type then the typescript
 * ? telling the typescript about the type of the string
 * ? it is needed when using with the any and unknown type , Dom Element and the Api response 
 * ? let anything : any;
 * ? syntax 01 --------> anything as number
 * ? syntax 02 --------> <string>anything
 * ? Type assertion do not change the type it just convince typescript that it has this type
 * ? type assertion is developer trust 
 */

let anything : any;
anything = 222; 
console.log(anything);
console.log((anything as number).toString()); //? as i am sure that the type of the anything will be number therfore we can say to typeScript that assume anything as number

let unknown : any;
unknown = 'Shakib';
console.log((unknown as string).toUpperCase());

function kgToGmConverter(input : string | number) : string | number | undefined{
    if(typeof input === 'number'){
        return input * 100
    }else if(typeof input === 'string'){
        let [value] = input.split(' ');
        return `Converted Output is : ${(value)}`
    }else {
        console.log('Invalid Input');
    }
}

const result1 = kgToGmConverter(90) as number; //? narrowing down the type by calling the type as number

const result2 = kgToGmConverter('90 kg') as string;
//? narrowing down the type by calling it string as we know the type of the returned output

console.log({ result1, result2});


type CustomError = {
    message : string;
}
try{

}catch(err){
    console.log((err as CustomError).message);
}

let data : any = 'Programming Hero';
console.log((data as string).length);

const value : unknown = 10.2278282;
console.log(Number((value as number).toFixed(2)));