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
<div class="container">
  <form class="SignInForms">
    <div class="font header">Join Us...</div>
    <input type="text" class="Input" placeholder="Name" onChange={handleChange}/>
    <input type="email" class="Input" placeholder="Email address" onChange={handleChange}/>
    <input type="password" class="Input" placeholder="Password" onChange={handleChange}/>
    <input type="password" class="Input" placeholder="Confirm password" onChange={handleChange} />
    <div class="Buttons">
      <button class="SignInUp" style={{width:'150px '}}>Create a account</button>
    </div>
    <div class="font header" style={{marginTop:'20px'}}>Already have an account?</div>
    <button class="SignInUp" onClick={handleSignUpClick}>Sign in</button>
  </form>
</div>

  );
}

export default Register;