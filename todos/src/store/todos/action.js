import { ADD_TODO ,REMOVE_TODO,EDIT_TODO} from "./actionTypes"

export const addTodo=(data)=>{

return {
    type:ADD_TODO,
    payload:data
}};


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


