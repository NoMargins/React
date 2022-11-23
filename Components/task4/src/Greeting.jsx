import React from "react";
import countAge from "./countAge.js";
import "./index.scss";

const Greeting = (props) => {
    return (
         <div className="greeting" name={props.user.name}>
    My name is {props.user.firstName} {props.user.lastName}. I'm {countAge(props.user.birthDate)} years old
</div> 
    )
}

export default Greeting;