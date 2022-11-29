import React from "react";
import ReactDOM from "react-dom";
import NumbersList from "./NumbersList.jsx";

const rootElem = document.querySelector("#root");

const list = [1, 3, 5, 7, 8]

ReactDOM.render(<NumbersList list={list}/>, rootElem)
