import logo from './logo.svg';
import './App.css';

import {Parentdiv, LeftP,RightP} from "./styledComponents/parents"
import {Bluebtn, Greenbtn} from "./styledComponents/buttons"
import {Formtodo} from "./components/addtodo"



function App() {
  return (
    <div className="App">
    <h1>My React-redux Todo Application</h1>
    <Parentdiv>
    <div className='btns'><Bluebtn>All</Bluebtn>
    
         <Bluebtn>Completed</Bluebtn>
         <Bluebtn>New Task</Bluebtn>
    </div>
    
    
    <div className='parent'>
    
    <LeftP>
    
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    
  
    </LeftP>

     
    <Formtodo/>
     </div>

    </Parentdiv>
     
    </div>
  );
}

export default App;
