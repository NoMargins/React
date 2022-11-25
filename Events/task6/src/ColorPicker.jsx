import React from "react";
import "./styles.scss";

// const CORAL = "#FF7F50";
// const AQUA = "#00FFFF";
// const BISQUE = "#F2D2BD";

const CORAL = "coral";
const AQUA = "aqua";
const BISQUE = "bisque";

class ColorPicker extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    innerText: "",
    }

this.showColor = this.showColor.bind(this)
}

   showColor(e) {
    this.setState({
        innerText: e.target.style.backgroundColor,
    })
   }

    render() {
        return(
    <>
    <div className="picker__title">{this.state.innerText}</div>
    <div>
    <button className="picker__button picker__button_coral"  style={{backgroundColor: CORAL}} onMouseOver={this.showColor} ></button>
    <button className="picker__button picker__button_aqua" style={{backgroundColor: AQUA}} onMouseOver={this.showColor}></button>
    <button className="picker__button picker__button_bisque" style={{backgroundColor: BISQUE}} onMouseOver={this.showColor}></button>
    </div>
    </>
        )
    }
}

export default ColorPicker;