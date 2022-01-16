import { Greenbtn } from "../styledComponents/buttons";
import { RightP } from "../styledComponents/parents";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoLoading,addTodoSuccess,addTodoError, getAllTodos ,getTodoSuccess,getTodoError} from "../store/todos/action";
import { ADD_TODO_ERROR } from "../store/todos/actionTypes";

export const Formtodo=()=>{
    const [form,setForm]=useState({});
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState('')
    const dispatch=useDispatch()
    const {loading,todos,error}=useSelector(state=> ({loading:state.app.loading, todos:state.app.todos,error:state.app.loading }));
  
   

  const handleinputchange=({target:{name,value}})=>{
      setForm({
          ...form,
          [name]:value,
          status:false
      })
  }

    return loading ? (<div>loading</div>): error? (<div>some is went wrong</div>):(<RightP>
    <div className='form'>

    <input type="text"  placeholder='Todo Title'  onChange={handleinputchange} name="title"/>
    <textarea  placeholder='Description' onChange={handleinputchange} name="description"/>
    <Greenbtn
    onClick={()=>{
       dispatch(addTodoLoading())
      fetch('http://localhost:3001/todos',{
          method:"POST",
          body:JSON.stringify(form),
          headers:{
              "Content-Type":"application/json"
          }
      }).then(d=>d.json()).then((res)=>{dispatch(addTodoSuccess(res))}).catch((err)=>{dispatch(ADD_TODO_ERROR)})

      
        
    }}
    
    
    >Add Task</Greenbtn>
    
    </div>
    </RightP>)
}