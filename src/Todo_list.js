import React from "react";

const Todo_list=(props)=>{
    return(
        <>
        <ul type="radio">
        {
        
            <li className="fa fa-times" area-hidden="true" onClick={()=>{
                props.select(props.id)
            }}>{props.text} </li>

           


        }
        </ul>
        </>

    );

}
export default Todo_list