import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";

const rootElem = document.querySelector('#root');


const user = {
   firstName: "Olenka",
   lastName: "Riabenko",
   birthDate: "8 Mar 1993",
}

ReactDOM.render(<Greeting  user={user}/>, rootElem);