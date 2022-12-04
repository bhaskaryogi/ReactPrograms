import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
const MainCard=(props)=>{
    const [note, setNote]=useState({title:"" ,content:"",})

    const inputEvent=(event)=>{
        const {name,value} =event.target;
        setNote((preval)=>{
            return { ...preval,
            [name]:value,
            };
        });
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({title:"" ,content:"",});
     
    }

    return(
        <div className="container row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card" >
          
          <input className="title" name="title" type="text" value={note.title} onChange={inputEvent} placeholder="Title" />
          <textarea type="text" name="content" row="" column="" value={note.content} onChange={inputEvent} placeholder="Write a note..." className="inputData"/>
          <button onClick={addEvent}><AddIcon/></button>
          </div>
          </div>
        <div className="col-md-4"> </div>
         </div> 
    );
}
export default MainCard