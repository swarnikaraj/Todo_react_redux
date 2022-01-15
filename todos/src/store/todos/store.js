

import {createStore} from "redux";

import { reducer  as todosReducer }  from "./reducer.js";

export const store=createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__());