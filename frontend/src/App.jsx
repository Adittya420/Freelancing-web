import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Card from './components/Card';
import NavBar from "./components/Navbar";
import Home from './pages/Home';
import MiddleHome from './pages/MiddleHome';
import './App.css'
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <MiddleHome />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
