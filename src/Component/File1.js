import React from "react";
import {Fname,Lname} from "./App.js";
const File1=()=>{
    return(
        <>
        <Fname.Consumer>
        {
            (Fname)=>{
                return(
                    <Lname.Consumer>{
                    (Lname)=>{
                        return(
                            <h1>My name is{Fname}{Lname}</h1>

                        );
                    }
                }</Lname.Consumer>
                );
            }
        }
        </Fname.Consumer>
        
        </>

    );
}
export default File1