import { loadData, saveData } from "../../utils/localstore";
import { ADD_TODO, LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER } from "./actionTypes";
import { REMOVE_TODO,EDIT_TODO } from "./actionTypes";

const initState={token:loadData("token")||"",isAuth:false}

export const reducer=(state=initState,{type,payload})=>{

switch(type){

    case LOGIN_SUCCESS:
        saveData("token",payload)
        return {
            ...state,
            isAuth:true,
            token:payload,
            
        };
    case LOGIN_FAILURE:{
         return {
             ...state,
             isAuth:false,
             token:""
         }
    }    
    default:
        return state;   
    
}





};