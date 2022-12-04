import React, { useEffect, useState } from "react";
const About=()=>{
    const [count, setCount]=useState(10)

        useEffect(()=>{
        if(count>0){
        setTimeout(()=>{
        setCount(count-1)
        },1000)
        }
        },[count])

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(10)}}>onClick</button>
      
        </>
    ); 
}
export default About 