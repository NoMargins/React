import React from "react";
import "./styles.scss";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

class Colors extends React.Component {

    setBodyColor  = (color) => {
        document.body.style.backgroundColor = color;
    }

render() {
    return (
        <div className="colors">
            <button className="colors__button" style={{backgroundColor: RED}} onClick={() => this.setBodyColor(RED)}></button>
            <button className="colors__button" style={{backgroundColor: GREEN}} onClick={() => this.setBodyColor(GREEN)}></button>
            <button className="colors__button" style={{backgroundColor: BLUE}} onClick={() => this.setBodyColor(BLUE)}></button>
        </div>
    )
}
}

export default Colors;