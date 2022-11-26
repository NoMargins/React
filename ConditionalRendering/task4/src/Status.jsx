import React from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";
import "./styles.scss";

class Status extends React.Component {
      state = {
        isOnline: false
      }
    
    reconnect = () => {
      this.setState({
        isOnline: !this.state.isOnline
      })
    }

    render() {
        return (
          <div className="status">
            {this.state.isOnline ? <Online /> : <Offline handleClick={this.reconnect}/>}
          </div> 
        )
      }
}

export default Status;