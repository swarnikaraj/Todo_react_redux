import { Parentdiv } from "../styledComponents/parents"
import { Bluebtn, Greenbtn } from "../styledComponents/buttons"
import { Link, useParams } from "react-router-dom"

import { useState ,useEffect} from "react"
import { Formtodo } from "./addtodo"

export const Edittodo=()=>{

    const style={textDecoration:'none'}
   
   const {id}=useParams()
    const [item,setItem]=useState({})
    const [title,setTitle]=useState("");
    const [des,setDes]=useState("");
    const [status,setStatus]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3001/todos/${id}`).then(d=>d.json()).then(d=>{setItem(d)})
    
        },[id])

return <>
    <h1>My React-redux Todo Application</h1>
    <Parentdiv>
    <div ><Bluebtn><Link to={"/"} style={style}>Home</Link></Bluebtn></div>
    
         <div style={{border:"2px solid"}}>
            
           <p> <input type="text" placeholder="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} /></p> 

           <p> <input type="text" placeholder="description" name="description" value={des}  onChange={(e)=>{setDes(e.target.value)}}/></p> 
           <p><input type="text" placeholder="status" name="status" value={status} onChange={(e)=>{setStatus(e.target.value)}}/></p>
           <Greenbtn
           
           onClick={()=>{

           fetch(`http://localhost:3001/todos/${id}`,{

               method:"PUT",
               body:JSON.stringify({
                   title:title,
                   status:status,
                   description:des,

               }),
               headers:{
                   "Content-Type":"application/json"
               }

            }).then(d=>d.json()).then((res)=>{console.log(res)})

            setTitle("");setDes("");setStatus("")
           
           
           }

           }
           
           >Edit</Greenbtn>
         
            
         </div>
    


    </Parentdiv>


</>



}