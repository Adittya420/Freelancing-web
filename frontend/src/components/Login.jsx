import React, { useContext, useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/AuthContext";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {user, setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const newRequest = axios.create({
    baseURL: "http://localhost:4000/api/",
    withCredentials: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleSignUpClick = () => {
    navigate("/register"); // Assuming "/register" is the route to the Register component
  };
  return (
   /* From Uiverse.io by SteeveeG */ 
<div className="flex flex-col h-screen w-screen bg-cover bg-center" 
  style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/01/65/56/31/360_F_165563150_xf0IOGuQtpY7Xzd0dfFpbVkqJCnr74Tv.jpg')` }}>
  <form className="SignInForms" style={{height:'330px'}}>
    <div className="font header">Sign in with existing account</div>
     <input
     className="Input"
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
    <input
    className="Input"
          name="password"
           placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
    <div className="Buttons">
      <button className="SignInUp" onClick={handleSubmit}>Sign in</button>
      <button className="ForgotPassword">Forgot password?</button>
    </div>
    
    <div className="font header" style={{marginTop:'20px'}}>Not registerd yet?</div>
    <button className="SignInUp" onClick={handleSignUpClick}>Sign Up</button>
  </form>
</div>

  );
}

export default Login;