import React from "react";
import Objdata from "./Objdata"

function ObjProps() {
    let obj= {
        name: "rashid ali",
        salary: 1200,
        age: 23,
        city:"Narowal"
    }
 
    return(
        <>
        <h1>hello object props</h1>
      <Objdata user = {obj}/>
        </>
      
    )
}



export default ObjProps;