//? An enum or enumeration is a way to define a set of named constant values
//? enum makes our code more readable , structured and safe by avoiding m,agic values like random string or number 

//? set of fixed string leteral ek jaigai rakhe 

//? enum is a set of type that we can use as value

type UserRoles = 'admin' | 'user' | 'guest' | 'editor'

const canEditAccess =  ( role : UserRoles) =>{
    if(role === 'admin' || role === 'editor' || role  === 'guest' || role ==='user'){
        return true;
    }else{
        return false;
    }
}
const isEditPermissable = canEditAccess('admin');
console.log(isEditPermissable);

//? in this we create a type as well as a object therefore it is easir to use

enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
    User = 'User'
}


const getPermission = (role : UserRole) =>{
    if(role === UserRole.Admin || role === UserRole.Editor || role === UserRole.User){
        return 'you have the permission to edit';
    }else{
        return 'You do not have the permission to edit';
    }
}

console.log(getPermission(UserRole.Admin));

//? but there is a flow enum create an extra bit of code in the js codebase therefore we use as const to fix this issue its working procedure is as same as enum. for enum js create an ifi(immediately invoke fuction) therefore it makes havier the bundlesize 

