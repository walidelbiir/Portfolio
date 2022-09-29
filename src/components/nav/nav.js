import React from "react";
import './nav.css'
import logo from './logo.png';

const nav = () => {
 return (
    <nav className="navbar">
        <div className="logo">
      <img src={logo} alt="logo" />
        </div>
        <div className="links">
         <a href="#1">About</a> 
         <a href="#2">Work</a>
         <a href="#3">Contact</a>
        </div>
    </nav>
 );
}


export default nav;