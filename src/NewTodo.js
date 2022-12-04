import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const NewTodo=(props)=>{
    const [line , setLine] = useState()
    const cutIt=()=>{
        setLine("true")
    }
    return(
        <>
        <span onClick={cutIt}>
        <DeleteIcon/>
        </span>
        <li style={{textDecoration:line ? "line-through": "none"}}>  {props.text}</li>
        </>
        );
}
export default NewTodo;