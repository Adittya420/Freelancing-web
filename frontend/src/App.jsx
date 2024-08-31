import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Card from './components/Card';
import NavBar from "./components/Navbar";
import Home from './pages/Home';
import MiddleHome from './pages/MiddleHome';
import CategoryList from './pages/Category/category';
import GigList from './pages/Category/gigs';
import Checkout from './pages/Category/checkout';
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
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={user || local ? <Home /> : <Navigate to="/login"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gigs" element={<CategoryList />} />
          <Route path="/gigs/:category" element={<GigList />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </Router>      
    </>
  );
}

export default App;
