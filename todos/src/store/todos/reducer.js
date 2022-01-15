import { ADD_TODO } from "./actionTypes";
import { REMOVE_TODO,EDIT_TODO } from "./actionTypes";

const init={todos:[]}
export const reducer=(state=init,{type,payload})=>{

switch(type){

    case ADD_TODO:
        return {
            ...state,
            todos:[...state.todos,payload],
        };
    
    case REMOVE_TODO:
            return {...state,
                todos:state.todos.filter((e)=>(e.id!==payload))
            };   
            
    case EDIT_TODO:
                return {
                    ...state,
                    todos:state.todos.filter((e)=>(e.id===payload))
                };        
    
    

    default:
        return state;    

}





};