import { useState } from "react";

    const Count =()=>{
    const [one , setOne] = useState(0);
    const IncNum  = ()=>{
        setOne(one + 1);
    }


    return(
        <>
        <h1>{one}</h1>
        <button>click</button>
        </>
        )

}
export default Count