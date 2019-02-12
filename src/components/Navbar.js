import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <a className="brand-logo">Book'Bae</a>
        <ul className="right">
          <li>
            <Link to="/Home">Home</Link>
          </li>
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
          <li>
            <Link to="/Post">Post ad</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
