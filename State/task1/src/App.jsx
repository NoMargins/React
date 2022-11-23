import React from "react";
import Counter from "./Counter.jsx"
import "./index.scss";

const App = () => {
    return (
        <>
        <Counter start={5} interval={1000}/>
        <Counter start={12} interval={500}/>
        <Counter start={-21} interval={500}/>
        </>
    )
}

export default App;