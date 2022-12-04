import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";
import MyAccordion from "./MyAccordian";
const Accordion = ()=>{
    const [data , setData] =useState(questions);
    
    return(
        <>
        {data.map((val)=>{
        return <MyAccordion text = {val}/>
        })}
        
        </>
    );

}
export default Accordion;