import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
// import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className= "blue-grey darken-4" style={{display: "flex", justifyContent: "space-between", }}>
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        <a  className="brand-logo" href="http://localhost:3002">
          Book'Bae
        </a>
        </div>
        <div style={{display: "flex", justifyContent: "space"}}>
        <ul >
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/sign">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          
        </ul>
        </div>
        <div ><Search /></div>
    </nav>
  );
};

export default Navbar;
