import { ADD_TODO ,REMOVE_TODO,EDIT_TODO, MARK_COMPLETE, GET_ALL_TODOS, GET_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_COMPLETED,GET_NEW,GET_TODO_SUCCESS,GET_TODO_ERROR} from "./actionTypes"

export const addTodo=(data)=>{

return {
    type:ADD_TODO,
    payload:data
}};


export const addTodoLoading=()=>{
    return {
        type:ADD_TODO_LOADING
    }
}

export const addTodoSuccess=(data)=>{
    return {
        type:ADD_TODO_SUCCESS,
        payload:data
    }
}

export const getTodoSuccess=(data)=>{
    return {
        type:GET_TODO_SUCCESS,
        payload:data
    }

}
export const addTodoError=(data)=>{
    return {
        type:ADD_TODO_ERROR,
        payload:data
    }
}


export const removeTodo=(id)=>{

    return {
        type:REMOVE_TODO,
        payload:id
    }};

export const editTodo=(id)=>{

        return {
            type:EDIT_TODO,
            payload:id
        }};


export const markComplete=(id)=>{
    return {
        type:MARK_COMPLETE,
        payload:id
    }
};

export const getCompleted=( )=>{
    return {
        type:GET_COMPLETED,
      
    }
};

export const getNew=( )=>{
    return {
        type:GET_NEW,
        
    }
};


export const getAllTodos=(data)=>{
    return {
        type:GET_ALL_TODOS,
        payload:data
    }
}


export const getTodoError=(data)=>{
    return {
        type:GET_TODO_ERROR,
        payload:data
    }
}


export const getTodo=(id)=>{
    return {
        type:GET_TODO,
        payload:id
    }
}