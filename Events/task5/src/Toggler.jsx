import React from "react";
import "./index.scss";

class Toggler extends React.Component {
    // *On/Off status here*
constructor(props) {
    super(props);
    this.state = {
    innerText: "Off",
    }

this.togglerChange = this.togglerChange.bind(this)
}

togglerChange(e) {
    if (e.target.innerText == "On") {
        this.setState({
        innerText: "Off"
        })
    }
    if (e.target.innerText == "Off") {
        this.setState({
        innerText: "On"
     })
    }
    }

render() {
    
    return (
        <div className="toggler" onClick={this.togglerChange}>{this.state.innerText}
            </div>
    )
}
}

export default Toggler;