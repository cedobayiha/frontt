import React, { Component } from "react";
import About from "./components/About";
import Contact from "./components/Contact";

import { Link, NavLink } from "react-router-dom";

class Footer extends Component{
  render(){
   return(
     <footer className="footer text-center">
     <div className="container">
     <ul><li>
            <About />
          </li>
          <li>
            
            <Contact />
          </li></ul>
     <p className="footer-text">Copyright 2019 Book'Bae</p>
     </div>
     </footer>
   )
  }
}

export default Footer