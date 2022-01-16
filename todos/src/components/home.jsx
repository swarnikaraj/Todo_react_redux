import { Parentdiv,LeftP} from "../styledComponents/parents"
import { GetAllTodos } from "./gettodo"
import { Formtodo } from "./addtodo"
import { Bluebtn, } from "../styledComponents/buttons"
import { useDispatch } from "react-redux"
import {  getCompleted } from "../store/todos/action"
import { getNew } from "../store/todos/action";




export const Home=()=>{

const dispatch=useDispatch()
  return <>
     <h1>My React-redux Todo Application</h1>
    <Parentdiv>
    <div className='btns'><Bluebtn>All</Bluebtn>
    
         <Bluebtn onClick={()=>{dispatch(getCompleted())}}>Completed</Bluebtn>
         <Bluebtn onClick={()=>{dispatch(getNew())}}>New Task</Bluebtn>
    </div>
    
    
    <div className='parent'>
    
    <LeftP id='leftp'>
    
    
     <GetAllTodos/>


    </LeftP>

     
    <Formtodo/>
     </div>

    </Parentdiv>



  </>

  


}