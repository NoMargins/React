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

 toUpperCaseFunct = (string) => {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const rest = string.slice(1, string.length);
    return firstLetter.concat(rest);
 }

   showColor(e) {
    this.setState({
        innerText: this.toUpperCaseFunct(e.target.style.backgroundColor)
})
   }

   clear = () => {
    this.setState({
        innerText: ""
    })
   }

    render() {
        return(
    <>
    <div className="picker__title">{this.state.innerText}</div>
    <div>
    <button className="picker__button picker__button_coral"  style={{backgroundColor: CORAL}} onMouseEnter={this.showColor} onMouseLeave={this.clear}></button>
    <button className="picker__button picker__button_aqua" style={{backgroundColor: AQUA}} onMouseEnter={this.showColor} onMouseLeave={this.clear}></button>
    <button className="picker__button picker__button_bisque" style={{backgroundColor: BISQUE}} onMouseEnter={this.showColor} onMouseLeave={this.clear}></button>
    </div>
    </>
        )
    }
}

export default ColorPicker;