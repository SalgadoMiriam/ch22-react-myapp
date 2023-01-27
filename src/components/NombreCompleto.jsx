import React from "react";
import "../App.css";
import { Edad } from "./edad";

export const NombreCompleto = (props) => {
  console.log("props", props);
    return (
   <> {/*React fragment*/}
   <h3 className="App">Me llamo {props.name} </h3>
  <Edad edad={props.age} show={props.show}/>
   
    </> 
  );
};

