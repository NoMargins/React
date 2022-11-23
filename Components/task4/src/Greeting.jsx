import React from "react";
import countAge from "./countAge.js";
import "./index.scss";

const Greeting = (props) => {
    return (
         <div className="greeting" name={props.user.name}>
    My name is {props.user.name}. I'm {countAge(props.user.dateBirth)} years old
</div> 
    )
}

export default Greeting;