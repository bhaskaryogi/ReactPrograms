import React,{useContext} from "react";
import {Fname ,Lname} from "../App"
const File3=()=>{
    const fname = useContext(Fname);
    const lname =useContext(Lname);
    return(
        <>

        <h1>My Name is {fname}{lname}</h1>
        
        </>

    );
}
export default File3