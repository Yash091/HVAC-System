import React from "react";
import loginpic from "./loginpic.png"
import "./Login.css"
const Login = () => {
  return (
    <div className="login-page">
      <div className="left">
        <img src ={loginpic} alt = "login"/>
      </div>
      <div className = "right">
        <div className="heading">
          <div className="login">Login</div>
        </div>
        <div className="form">
          <div className="input-fields">
            <div htmlFor="username" className="input-head">Username:</div>
            <input type="text" id="username" name="username" placeholder="Enter your username"/>
          </div>
          <div className="input-fields">
            <div className="input-head" htmlFFor="pass">Password:</div>
            <input type="password" id="pass" name="password" placeholder="Enter your Password"/>
          </div>    
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>  
  );
};

export default Login;
