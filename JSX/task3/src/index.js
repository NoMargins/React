import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");


const getTime = time => {

const seconds = new Date(time).getSeconds();
const fontColor = seconds % 2 === 0 ? '#fff': "#000";
const backgroundColor = seconds % 2 === 0 ? "#000" : "#fff";

const styleFunct = {
    color: fontColor,
    backgroundColor
}

const newElem = (
     <div className="seconds" style={styleFunct}>{seconds}
    </div>
)

ReactDOM.render(newElem, rootElem);
}

window.setInterval(() => getTime(new Date()), 1000);


