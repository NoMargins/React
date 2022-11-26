import React from "react";
import Greeting from "./Greeting.jsx";
import OnLogin from "./Login.jsx";
import OnLogout from "./Logout.jsx";
import "./styles.scss";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin = () => {
           return this.setState({
                isLoggedIn: true
            })
        }
        
    handleLogout = () => {
           return this.setState({
                isLoggedIn: false
                })
            }

    render() {
        return (
         <div className="panel">
         <Greeting isLoggedIn={this.state.isLoggedIn}/>
        {this.state.isLoggedIn ? <OnLogout onClick={this.handleLogout}/> : <OnLogin onClick={this.handleLogin}/> }
         </div>
        )
    }
}

export default Auth;

