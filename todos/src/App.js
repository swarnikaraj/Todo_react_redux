import logo from './logo.svg';
import './App.css';

import {Parentdiv, LeftP,RightP} from "./styledComponents/parents"
import {Bluebtn, Greenbtn} from "./styledComponents/buttons"
import {Formtodo} from "./components/addtodo";
import {GetAllTodos, getAllTodos} from "./components/gettodo"
import { Path } from 'react-router-dom';
import {Route, Routes} from "react-router-dom"
import {Home} from "./components/home"
import {Singletodo} from "./components/singleTodo"
import {Edittodo} from "./components/edittodo"



function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element ={<Home/>}/>
     <Route path="/todos/:id" element ={<Singletodo/>}/>
     <Route path="/todos/:id/edit" element ={<Edittodo/>}/>

     <Route path="*" element ={<div>Page not found</div>}/>
     </Routes> 
     
    </div>
  );
}

export default App;
