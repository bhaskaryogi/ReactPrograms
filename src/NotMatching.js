import React from "react";
function NotMatching(props){    
        return(
        <div className='slotHead'>
        <p>  {props.x}{props.y}{props.z}<br/>This Is Not Matching</p>
        <hr/>
         </div>
         );
         }
  export default NotMatching;