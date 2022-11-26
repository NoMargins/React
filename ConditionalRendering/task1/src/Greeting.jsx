import React from "react";
import GuestGreeting from "./GuestGreeting.jsx";
import UserGreeting from "./UserGreeting.jsx";

const Greeting = ({isLoggedIn}) => {
    return (        
        isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    )
}

export default Greeting;