export const DRAWER_OPEN = 'DRAWER_OPEN';
export const TOGGLE_LOGINWINDOW='TOGGLE_LOGINWINDOW';
export const ID_ONCHANGE = 'ID_ONCHANGE';
export const PW_ONCHANGE = 'PW_ONCHANGE';
export const LOGGEDIN = 'LOGGEDIN';
export const TOKEN = 'TOKEN';
export const LOGIN_ERROR ='LOGIN_ERROR';
export const TODO_ITEM1='TODO_ITEM1';
export const TODO_ITEM2='TODO_ITEM2';
export const TODO_ITEM3='TODO_ITEM3';
export const NEW_TODO='NEW_TODO';
export const DIALOG_OPEN='DIALOG_OPEN';
export const FAB_OPEN = 'FAB_OPEN';
export const TRASH_OPEN = 'TRASH_OPEN';

export function drawerOpen(bool){
    return {
        type: DRAWER_OPEN,
        bool
    }
}

export function toggleLoginWindow(bool){
    return{
        type:TOGGLE_LOGINWINDOW,
        bool
    }
}

export function idOnchange(text){
    return{
        type:ID_ONCHANGE,
        text
    }
}

export function pwOnchange(text){
    return{
        type:PW_ONCHANGE,
        text
    }
}

export function loggedIn(bool){
    return{
        type:LOGGEDIN,
        bool
    }
}

export function token(text){
    return{
        type:TOKEN,
        text
    }
}

export function LoginError(bool){
    return{
        type:LOGIN_ERROR,
        bool
    }
}

export function todoItem1(arr){
    return{
        type:TODO_ITEM1,
        arr
    }
}
export function todoItem2(arr){
    return{
        type:TODO_ITEM2,
        arr
    }
}
export function todoItem3(arr){
    return{
        type:TODO_ITEM3,
        arr
    }
}

export function addTodo(text){
    return{
        type:NEW_TODO,
        text
    }
}

export function dialogOpen(bool){
    return{
        type:DIALOG_OPEN,
        bool
    }
}

export function fabOpen(bool){
    return{
        type:FAB_OPEN,
        bool
    }
}

export function trashOpen(bool){
    return{
        type:TRASH_OPEN,
        bool
    }
}




