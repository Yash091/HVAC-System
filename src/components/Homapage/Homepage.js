import React from "react";
import "./Homepage.css";
// import homepic from "./homepic.png";
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
        Kartik Gupta . Saloni Doshi . Anjali Sahu . Yash Chaurasia . MuditAgarwal
      </p>
      <div className="image-container">
        <button className="loginButton" onClick={toLogin}>Login</button>
      </div>
    </div>
  );
}

export default Homepage;
