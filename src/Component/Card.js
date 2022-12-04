import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Card=(props)=>{
  const deletecard=()=>{
    props.deleteItem(props.id);

  }
    return(

      <div className="container text-center row">
        <div className="col-md-4">
        <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <br/>
          <p className="card-text">{props.content}</p>
       <button onClick={deletecard}>
          <DeleteIcon/>
        </button>
          </div>
      </div>
        </div>
    </div>
    );
}
export default Card