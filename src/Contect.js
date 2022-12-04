import React,{useEffect, useState} from "react";
const Contect=()=>{
   
    const [count, setCount]=useState(10)
    useEffect(()=>{
          
    const dataid = setInterval(()=>{ 
        if(count > 0){
            setCount(count-1)
        }else{
            clearInterval(dataid)

        }
    },1000);
    },[count]);

return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(10)}}>onClick</button>
  
    </>
); 

}
export default Contect