import React from "react";

const Login = ({onLogin, visibleBtn}) => {
    
  return (
    <button className="login btn" onClick={onLogin} hidden={visibleBtn}>Login</button>
  )
} 

export default Login;