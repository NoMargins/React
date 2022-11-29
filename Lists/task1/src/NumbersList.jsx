import React from "react";
import renderList from "./RenderList.jsx";
import "./styles.scss";

const NumbersList = ({list}) => {
        return (
        <ul>
        { renderList(list) }
        </ul>
        )
}

export default NumbersList;