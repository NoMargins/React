import React from "react";
import "./styles.scss";

class GoodButton extends React.Component { 
    showAlert(e) {
        alert(e.target.innerText)
    }

    render() {
    return (
        <button className="fancy-button" onClick={this.showAlert}>Click me!</button>
    )
   }
}


export default GoodButton;