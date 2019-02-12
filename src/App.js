import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

import "./App.css";

class App extends Component {

  renderSignup = () => {
    return <Sign />
  }

  renderLogin = () => {
    return <Login />
  }

  render

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/Home" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign" exact={true} render={this.renderSignup} component={Sign} />
          <Route path="/login" exact={true} render={this.renderLogin} component={Login} />
          <Route path="/post" component={Post} />
          ....
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
