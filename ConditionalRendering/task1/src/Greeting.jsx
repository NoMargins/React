import React from "react";
import GuestGreeting from "./GuestGreeting.jsx";
import UserGreeting from "./UserGreeting.jsx";

const Greeting = ({isLoggedIn}) => {
    return (       
        <div>
            {
        isLoggedIn ? <UserGreeting /> : <GuestGreeting />
            }
        </div>
    )
}

export default Greeting;