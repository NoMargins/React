import React from "react";
import "./index.scss";

class Toggler extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    innerText: "Off",
    }

this.togglerChange = this.togglerChange.bind(this)
}

togglerChange(e) {
    e.target.innerText === "On" ?  this.setState({
        innerText: "Off"
        })
    : this.setState({
        innerText: "On"
    })
    }

render() {
    return (
        <button className="toggler" onClick={this.togglerChange}>{this.state.innerText}
        </button>
    )
}
}

export default Toggler;