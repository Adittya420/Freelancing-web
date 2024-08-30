import React, { useState } from "react";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const newRequest = axios.create({
    baseURL: "http://localhost:4000/api/",
    withCredentials: true,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newRequest.post("/auth/register", {
        ...user      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSignUpClick = () => {
    navigate("/login"); // Assuming "/register" is the route to the Register component
  };
  return (
   /* From Uiverse.io by SteeveeG */ 
<div className="container">
  <form className="SignInForms">
    <div className="font header">Join Us...</div>
    <input type="text" className="Input" placeholder="Name" onChange={handleChange}/>
    <input type="email" className="Input" placeholder="Email address" onChange={handleChange}/>
    <input type="password" className="Input" placeholder="Password" onChange={handleChange}/>
    <input type="password" className="Input" placeholder="Confirm password" onChange={handleChange} />
    <div className="Buttons">
      <button className="SignInUp" style={{width:'150px '}}>Create a account</button>
    </div>
    <div className="font header" style={{marginTop:'20px'}}>Already have an account?</div>
    <button className="SignInUp" onClick={handleSignUpClick}>Sign in</button>
  </form>
</div>

  );
}

export default Register;