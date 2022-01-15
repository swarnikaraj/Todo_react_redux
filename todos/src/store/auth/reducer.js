import { ADD_TODO } from "./actionTypes";
import { REMOVE_TODO,EDIT_TODO } from "./actionTypes";

export const reducer=(state,{type,payload})=>{

switch(type){

    case ADD_TODO:
        return {
            ...state,
            todos:[...state.todos,payload],
        };
    default:
        return state;    

}





};