import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";
import "./styles.scss";

class Auth extends React.Component {
    state = {
            isLoggedIn: false,
        }

    handleLogin = () => {
        this.setState({
            isLoggedIn: null
        })   
        setTimeout(() => {
            this.setState({
                isLoggedIn: true,
        });    
    }, 3000);
        }
        
    handleLogout = () => {
           return this.setState({
                isLoggedIn: false
                })
            }

    chooseAction() {
     if (this.state.isLoggedIn) {
     return (<Logout onLogout={this.handleLogout}/>)
       } 
    if (this.state.isLoggedIn === null ) {
       return (<Spinner setSize={this.props.setSize}/>)
       } 
       else { return (<Login onLogin={this.handleLogin}/>) }
    }

    render() {
        let rightButton = this.chooseAction();
        return (
         <div className="panel">
        {rightButton}         
        </div>
        )
    }
}

export default Auth;

