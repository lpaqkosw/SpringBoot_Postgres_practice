import * as actions from './action';

const LoginInitialState={
    id:"",
    pw:"",
    loginWindow:false,
    loggedIn:false,
    token:"",
    loginError:false
    
};

const MainUIInitialState={
    drawerOpen:false,
}

const TODOInitialState={
    todoItem1:[],
    todoItem2:[],
    todoItem3:[],
    addTodo:"",
    TodoDialogOpen:false,
    loggedIn:false,
    token:"",
    trashOpen:false
}

function Login(state=LoginInitialState,action){
    switch(action.type){
        case actions.ID_ONCHANGE: 
            return{
            
        }
    }
}
