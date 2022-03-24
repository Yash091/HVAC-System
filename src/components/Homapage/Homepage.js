import React from "react";
import "./Homepage.css";
import {useNavigate} from "react-router";

function Homepage() {

  const navigate = useNavigate();
  const toLogin = () => {
      navigate('/login');
  }

  return (
    <div className="HVAC">
      <h1 className="main-heading">HVAC SYSTEM</h1>
      <h3 className="sub-heading">A project by Group 22</h3>
      <p className="names">
        <h3>Kartik Gupta</h3>
        <h4>⚪</h4>
        <h3>Saloni Doshi</h3>
        <h4>⚪</h4>
        <h3>Anjali Sahu</h3>
        <h4>⚪</h4>
        <h3>Yash Chaurasia</h3>
        <h4>⚪</h4>
        <h3>Mudit Agarwal</h3>
      </p>      
      <div className="image-container">
        <button className="loginButton" onClick={toLogin}>Login</button>
      </div>
    </div>
  );
}

export default Homepage;
