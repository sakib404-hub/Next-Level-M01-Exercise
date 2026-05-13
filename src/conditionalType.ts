//? those type that are dependent on a particular or on multiple condition
//? jodi ekta type ar ekta type er opor depend kore tahole takei amra coditional type boli

type A = null;
type B = undefined;

type C = A extends null ? string : false;
type D = A extends number ? true : B extends undefined ? true : false;


interface RichPeopleVechile  {
    bike : string;
    car : string;
    ship : string
}

type CheckVechile<T> = T extends (keyof RichPeopleVechile) ? true : false;
type HasBike = CheckVechile<'tractor'>