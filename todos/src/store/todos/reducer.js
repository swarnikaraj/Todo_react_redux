import { ADD_TODO, ADD_TODO_LOADING, GET_ALL_TODOS, GET_TODO, MARK_COMPLETE,ADD_TODO_SUCCESS,ADD_TODO_ERROR, GET_NEW, GET_COMPLETED, GET_TODO_SUCCESS } from "./actionTypes";
import { REMOVE_TODO,EDIT_TODO } from "./actionTypes";

const init={todos:[],loading:false,error:false}
export const reducer=(state=init,{type,payload})=>{

switch(type){

    case ADD_TODO:
        return {
            ...state,
            todos:[...state.todos,payload],
        };

    case ADD_TODO_LOADING:
        return {
            ...state,
            loading:true,
            error:false
        };
    case ADD_TODO_ERROR:
            return {
                ...state,
                error:true,
                loading:false
            }   ;

            case ADD_TODO_SUCCESS:
                return {
                    ...state,
            todos:[...state.todos,payload],
            error:false,
            loading:false
                } 
            
            
    
    case REMOVE_TODO:
            return {...state,
                todos:state.todos.filter((e)=>(e.id!==payload))
            };   
            
    case EDIT_TODO:
                return {
                    ...state,
                    todos:state.todos.filter((e)=>(e.id===payload))
                };        
    
    case MARK_COMPLETE:
                return {
                    ...state,
                    todos:[...state,payload]
                }
    case GET_NEW:
          return {
              ...state,
              todos:state.todos.filter((e)=>(e.status===false))
          };
    case GET_COMPLETED:
        return {
            ...state,
            todos:state.todos.filter((e)=>(e.status===true))
        }  ;    
            

    case GET_TODO:
        return {
            ...state,
            todos:state.todos.filter((e)=>(e.id===payload))
        }

    case GET_ALL_TODOS:
        return {
            ...state,
            todos:[...state.todos,...payload]
        }
    case GET_TODO_SUCCESS:
        return {
            ...state,
            todos:payload,
            loading:false
        }        
                
    default:
        return state;    

}





};