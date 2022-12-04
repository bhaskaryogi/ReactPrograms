import React from "react";
import Matching from "./Matching";
import NotMatching from "./NotMatching";
const  SlotM = (props) => {
    let x =props.x;
    let y =props.y;
    let z =props.z;
    if(x===y && y===z){
        return(
         <div className='slotHead'>
        <Matching x={x} y={y} z={z}/>
        <hr/>
         </div>
        );
    }else{
        return(
            
            <div className='slotHead'>
            <NotMatching x={x} y={y} z={z} />
            <hr/>
            </div>
            );
    }
}
export default SlotM