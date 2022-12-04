import React from "react";
import {Fname,Lname} from "..App";
const File2=()=>{
    return(
        <>
        <Fname.Consumer>
        {
            (fname)=>{
                return(
                    <Lname.Consumer>
                    {
                        (lname)=>{
                            return(
                                <h1>Hello My name Is (fname)(lname)</h1>
                            );
                        }
                    }
                    </Lname.Consumer>
                );
            }
        }
        </Fname.Consumer>
        
        </>
    );
    }
    export default File2