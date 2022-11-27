import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth.jsx"

const rootElem = document.querySelector("#root");

ReactDOM.render(<Auth setSize={30}/>, rootElem);