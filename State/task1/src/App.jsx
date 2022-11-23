import React from "react";
import Counter from "./Counter.jsx"
import "./index.scss";

const App = () => {
    return (
        <>
        <Counter start={18} interval={1000}/>
        <Counter start={-50} interval={500}/>
        </>
    )
}

export default App;