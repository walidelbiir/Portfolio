import React from "react";
import './nav.css'
import logo from './logo.png';
import 'animate.css';


const Nav = () => {
  return ( 
    <>
    <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div  className="links">
          <a href="#1" className="link">
            Home
          </a> 
          <a href="#2" className="link">
            Works
          </a>
          <a href="#3" className="link">
            About
          </a>
        </div>
        <a id="contact" className="link" href="#4">
          Let's Chat
        </a>
        
    </nav>
    <hr className="under_nav" />
    </>
 );
 }




export  {Nav};