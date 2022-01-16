
import { Navigate } from "react-router-dom";
import { loadData } from "../utils/localstore";
import { useSelector } from "react-redux";



export const PrivateRoute=({children})=>{

    const {token,isAuth}=useSelector(state=> ({token:state.auth.token, isAuth:state.auth.isAuth }));
    

    if(!isAuth) {return <Navigate to={"/login"}/>}


    return children;
}