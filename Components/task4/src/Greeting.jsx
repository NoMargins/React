import React from "react";
import countAge from "./countAge.js";
import "./index.scss";

const Greeting = (props) => {
    return (
         <div className="greeting">
    My name is {props.firstName} {props.lastName}. I'm {countAge(props.birthDate)} years old
</div> 
    )
}

export default Greeting;