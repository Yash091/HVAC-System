import {React , useState} from "react";
import loginpic from "./loginpic.png";
import "./Login.css";
import {useNavigate} from "react-router";

const Login = () => {

  const navigate = useNavigate();
  const initial = {
    username : "",
    password : ""
  }
  const [user , setUser] = useState(initial);
  const handleChange = (e) => {
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  const check = () => {
    if(!user.username || !user.password)
    {
      window.alert("Invalid Credentials");
      setUser(initial);
    }
    else if(user.username !== "Admin" || user.password !== "Admin@123")
    {
      window.alert("Invalid Credentials");
      setUser(initial);
    }
    else  
      navigate("/welcome"); 
  }

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
            <input type="text" id="username" name="username" placeholder="Enter your username" value={user.username} onChange={(e) => (handleChange(e))}/>
          </div>
          <div className="input-fields">
            <div className="input-head" htmlFFor="pass">Password:</div>
            <input type="password" id="pass" name="password" placeholder="Enter your Password" value={user.password} onChange={(e) => (handleChange(e))}/>
          </div>    
        </div>
        <button className="login-button" onClick={check}>Login</button>
      </div>
    </div>  
  );
};

export default Login;
