import React from "react";
const CreateNote=()=>{
    return(
        <div className="container row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card" >
          <div className="card-body">
     
          <textarea type="text" placeholder="Write a note..." className="inputData"/>
        </div>
        </div>
        </div>
        <div className="col-md-4"> </div>
         </div> 
    );

}
export default CreateNote