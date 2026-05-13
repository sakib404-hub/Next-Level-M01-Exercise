
const UserRole2 = {
    Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer',
    User : 'User' 
} as const;


const getPermission = (role : typeof UserRole2[keyof typeof UserRole2]) =>{
    if(role === UserRole2.Admin || role === UserRole2.Editor || role === UserRole2.User){
        return 'you have the permission to edit';
    }else{
        return 'You do not have the permission to edit';
    }
}

console.log(getPermission(UserRole2['Admin']));