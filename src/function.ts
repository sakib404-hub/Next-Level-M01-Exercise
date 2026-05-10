function addTwo (num1 : number, num2 : number = 0) : number {
    return num1 + num2;
}
console.log(addTwo(2, 8));

const subTwo = (num1 : number, num2 : number) : number =>{
    return num1 + num2;
}
console.log(subTwo(78, 2));

//? we will be now declearing a fuinction in an object that is known as method in typescript . For accessing this method we would be using this keyword

const poorUser : {
    name : string,
    balance : number,
    addBalance(money : number) : number
} = {
    name : 'Shakib Hossen',
    balance : 0,
    addBalance(money : number) : number{
        this.balance += money;
        return this.balance;
    }
}

poorUser.addBalance(1020);
console.log(poorUser);


//? getting the square array from an array
const number : number[] = [10, 2, 4, 7, 8, 9, 25]
const squareArr = number.map((num : number) => num * num);
console.log(squareArr); 