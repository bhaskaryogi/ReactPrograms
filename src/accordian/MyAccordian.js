import React, { useState } from "react";
import "./accordian.css";
const MyAccordion=(props)=>{
    const [ans , setAns] =useState()
    const dataclick=()=>{
        setAns(props.text.answar)
        
        }
    return (
        <>
       
        <h2 >{props.text.id}.{props.text.question}</h2>
        <p>{ans}</p>
        <button onClick={dataclick}>+</button>
       
       
        </>
        );
}
export default MyAccordion