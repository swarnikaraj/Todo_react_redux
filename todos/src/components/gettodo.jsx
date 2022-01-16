import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useEffect } from "react";
import { getAllTodos, getTodoSuccess, getTodoError, markComplete, removeTodo } from "../store/todos/action";
import { Link } from "react-router-dom";

import { Donebtn,Delbtn,Yellowbtn } from "../styledComponents/buttons";



export const GetAllTodos=()=>{
    const dispatch=useDispatch()
    const {loading,todos,error}=useSelector(state=> ({loading:state.app.loading, todos:state.app.todos,error:state.app.loading }));
  
   
   const delhandle=async(id)=>{
      try{
     await fetch(`http://localhost:3001/todos/${id}`,{method:"DELETE"}).then(d=>d.json()).then((res)=>{dispatch(removeTodo(res.id))})
     
     getdata();
     }
      catch(err){console.log(err)}
    }


   const changestatus= (e)=>{
  console.log(e ,"me")
      fetch(`http://localhost:3001/todos/${e.id}`,{
        method:"PUT",
      
      body:JSON.stringify({
        title:e.title,
        status:!e.status,
        description:e.description,
        id:e.id
      }),
      headers:{
          "Content-Type":"application/json"
      }
     
    }).then(d=>d.json()).then((res)=>{console.log(res)})
      
    
     getdata();

  }
   
    
    

    useEffect(() => {
       
        getdata();
         
    }, [])


    const getdata= async()=>{
            
        try{
            const  data=await fetch("http://localhost:3001/todos").then((d)=>d.json())
            
            dispatch(getTodoSuccess(data))
            console.log(data)
        }
       catch(err){dispatch(getTodoError(err))}
    };
  
    
  return <>
        {todos.map(e=><div ><p>{e.title}</p><p>{e.status?<Donebtn onClick={()=>changestatus(e)}>{e.status ? "Done":"Not Done"}</Donebtn>:<Yellowbtn onClick={()=>{changestatus(e)}}>{e.status ? "Done":"Not Done"}</Yellowbtn>}</p>
           <p>
            <Delbtn onClick={()=>{delhandle(e.id)}}>Delete</Delbtn>
            <Delbtn><Link to={`/todos/${e.id}`} style={{"text-decoration":"none", "color":"#282C34"}}>Explore</Link></Delbtn>
            <Delbtn><Link to={`/todos/${e.id}/edit`} style={{"text-decoration":"none", "color":"#282C34"}}>Edit</Link></Delbtn>
            </p>
        
        </div>)}
     </>


}