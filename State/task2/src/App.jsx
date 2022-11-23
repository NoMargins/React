import React from "react";
import Clock from "./Clock.jsx";
import "./index.scss";

const App = () => {
    return (
        <>
        <Clock location="Kyiv" timeOffset={+2}/>
        <Clock location="London" timeOffset={0}/>
        <Clock location="New York" timeOffset={-5}/>
        </>
    )
}

export default App;