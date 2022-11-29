import React from "react";
import ReactDOM from "react-dom";
import NumbersList from "./NumbersList.jsx";

const rootElem = document.querySelector("#root");


ReactDOM.render(<NumbersList list={list}/>, rootElem)
