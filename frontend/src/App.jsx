import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Card from './components/Card';
import NavBar from "./components/Navbar";
import Home from './pages/Home';
import Freelance from './pages/Freelance';
import CategoryList from './pages/Category/category';
import GigList from './pages/Category/gigs';
import Checkout from './pages/Category/checkout';
import Ad from './pages/Ad';
import './App.css'
import AuthContext from './Context/AuthContext';

function App() {
  const {user, setUser} = useContext(AuthContext);  
  const local = localStorage.getItem("currentUser");

  useEffect(() => {
    if(user)
      console.log(user);
  },[user])

  return (
    <div style={{width:"100vw"}}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/freelance" element={user || local ? <Freelance /> : <Navigate to="/login"/>} />
          <Route path='/ads' element={<Ad />} />
          <Route path="/gigs" element={<CategoryList />} />
          <Route path="/gigs/:category" element={<GigList />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
