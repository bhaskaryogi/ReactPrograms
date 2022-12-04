import React from "react";
import {Link , useHistory,useLocation}  from "react-router-dom"
const Menu=()=>{
        const history= useHistory();
        const location = useLocation();
        return(
            <>
     <h1>Manu page</h1>
     <Link to="/">home</Link> <br></br>
     <Link to="/contect">contect</Link>
       <button onClick={()=>{history.goBack()}}>go back</button>
        <h1>{location.pathname}</h1>
        </>
        );
}
export default Menu