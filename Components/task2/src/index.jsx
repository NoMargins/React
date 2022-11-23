import React from "react";
import ReactDOM from "react-dom";
import SearchFeld from "./Search.jsx";
import "./index.scss";

const rootElem = document.querySelector('#root');


ReactDOM.render(<SearchFeld name="David"/>, rootElem)