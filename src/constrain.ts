/**
 * Constrain ---> meaning we are giving rules to something or applying the strict rules and regulations
 */

const addCourse = <T extends {id : number, name : string}>(value : T) : T & { course : string} =>{
    return {
        course : 'Next level web development',
        ...value
    }
}

const s1 = {
    id : 123,
    name : 'shakib Hosen',
    hasPen : true
}

const s2 = {
    id : 262,
    name : 'Jhanker Mahbub',
    hasCar : true,
    isMarried : true
}

const s3 = {
    hasWatch : true
}
console.log(addCourse(s1));
console.log(addCourse(s2));
