"use strict";
/**
 * ? unknown ---> meaning i don't know the type yet.
 * ? But unlike any , we must check the type before using it
 */
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = 12;
value = true;
value = 'hellow world!';
//? so far it is looking like any type but there is a slight difference
// problem with  any
let val = 'hellow';
console.log(val.toUpperCase());
//? no error but doing this without knowing type is risky with type unknown we will be getting an error
//? therefore typescript stops us because it does not know the type yet 
//? for this to stop happening we must check the type before using it
//? this is known as the type narrowing
if (typeof value === 'string') {
    //? checking type before it is happening is known as the type narrowing
    console.log(value.toUpperCase());
}
else if (typeof value === 'number') {
    console.log(value * 10);
}
else {
    console.log(value);
}
//? another example of type narrowing 
//? unknown types 
const discountCalculator = (input) => {
    if (typeof input === 'number') {
        const discountedPrice = input - (input * 0.1);
        console.log(`Discounted Price : ${discountedPrice}`);
    }
    else if (typeof input === 'string') {
        const [price] = input.split(' ');
        const discountedPrice = Number(price) - Number(price) * 0.1;
        console.log(`Discounted Price : ${discountedPrice}`);
    }
    else {
        console.log('Invalid Input');
    }
};
discountCalculator(100);
discountCalculator('100 TK');
discountCalculator(null);
//# sourceMappingURL=unKnown.js.map