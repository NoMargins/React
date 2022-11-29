import React from "react";
import "./styles.scss";

const NumbersList = (props) => {
        const numbList = props.numbers;
        return (
        <ul>
        { numbList.map((el) => <li key={el}>{el}</li>) }
        </ul> 
        )
}

export default NumbersList;