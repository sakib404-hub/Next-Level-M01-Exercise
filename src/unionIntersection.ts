type UserRole = 'admin' | 'user' | 'guest'; 
//? type alias with union of string literal type

const getDashboard = (role : UserRole)=>{
    if(role === 'admin'){
        return 'admin dashboard';
    }else if(role === 'user'){
        return 'user dashboard';
    }else{
        return 'guest dashboard';
    }
}

const dash = getDashboard('guest');
console.log(dash);


//? intersection type
type Emp = {
    id : string,
    name : string,
    phnNo ? : string
}

type Manager = {
    designation : string,
    teamSize : number 
}

type EmpManager = Emp & Manager;
const chowdhury : EmpManager = {
    id : '101',
    name : 'Shakib Hossen',
    phnNo : '017xxxxxxxx',
    designation : 'Software Engineer',
    teamSize : 5
}
console.log(chowdhury);