import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";

const rootElem = document.querySelector('#root');


// const user = {
//    firstName: "Olenka",
//    lastName: "Riabenko",
//    birthDate: "8 Mar 1993",
// }

const App = () => <Greeting firstName={'Tom'} lastName={'Moore'} birthDate={new Date('1993-06-12')} />

ReactDOM.render(<App />, rootElem);