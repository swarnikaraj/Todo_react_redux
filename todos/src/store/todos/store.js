

import {createStore, combineReducers} from "redux";

import { reducer  as todosReducer }  from "./reducer.js";
import {reducer as authReducer}  from "../auth/reducer.js";


const rootReducer=combineReducers({
    auth:authReducer,
    app:todosReducer
})



export const store=createStore(rootReducer);

console.log(store.getState())