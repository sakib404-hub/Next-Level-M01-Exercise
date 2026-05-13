"use strict";
//? An enum or enumeration is a way to define a set of named constant values
//? enum makes our code more readable , structured and safe by avoiding m,agic values like random string or number 
Object.defineProperty(exports, "__esModule", { value: true });
const canEditAccess = (role) => {
    if (role === 'admin' || role === 'editor' || role === 'guest' || role === 'user') {
        return true;
    }
    else {
        return false;
    }
};
//? in this we create a type as well as a object therefore it is easir to use
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
    UserRole["User"] = "User";
})(UserRole || (UserRole = {}));
const getPermission = (role) => {
    if (role === UserRole.Admin || role === UserRole.Editor || role === UserRole.User) {
        return 'you have the permission to edit';
    }
    else {
        return 'You do not have the permission to edit';
    }
};
const isEditPermissable = canEditAccess('admin');
console.log(isEditPermissable);
console.log(getPermission(UserRole.Admin));
//? but there is a flow enum create an extra bit of code in the js codebase therefore we use as const to fix this issue its working procedure is as same as enum
//# sourceMappingURL=enum.js.map