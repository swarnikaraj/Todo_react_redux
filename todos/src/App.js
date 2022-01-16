
import './App.css';




import {Route, Routes} from "react-router-dom"
import {Home} from "./components/home"
import {Singletodo} from "./components/singleTodo"
import {Edittodo} from "./components/edittodo"
import {Login} from "./components/loginuser"
import {PrivateRoute} from "./components/PrivateRoute"



function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element ={
         <PrivateRoute>
            <Home/>
     
            </PrivateRoute> 
     }/>
     <Route path="/todos/:id" element ={<Singletodo/>}/>
     <Route path="/todos/:id/edit" element ={<Edittodo/>}/>
     <Route path="/login" element ={<Login/>}/>
     <Route path="*" element ={<div>Page not found</div>}/>
     </Routes> 
     
    </div>
  );
}

export default App;
