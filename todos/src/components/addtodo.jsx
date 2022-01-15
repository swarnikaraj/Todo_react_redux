import { Greenbtn } from "../styledComponents/buttons";
import { RightP } from "../styledComponents/parents";
import { useState } from "react";

export const Formtodo=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    return <RightP>
    <div className='form'>

    <input value={title} type="text" placeholder='Todo Title'  onChange={(e)=>setTitle(e.target.value)}/>
    <textarea value={description} placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
    <Greenbtn
    onClick={()=>{
     


    }}
    
    
    >Add Task</Greenbtn>
    
    </div>
    </RightP>
}