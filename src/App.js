import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import Search from "./components/Search";
import Category from "./components/Category";
import PostButton from "./components/PostButton"

import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      redirect: false,
      navClass: false,
      showLinks: false
    }
  }
  clickNav = e => {
    this.setState({
      navClass: !this.state.navClass,
      showLinks: !this.state.showLinks
    });
  };

  handleClick = () => {
    this.setState({ navClass: false, showLinks: false });
  };

  renderSignup = () => {
    return <Sign />
  }

  renderLogin = () => {
    return <Login />
  }

  

  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
         <div style={{display: "flex", justifyContent: "flex-end", alignItems: "strech", marginTop: "8.5px"}}>
         
            <Category />
            <PostButton />
            </div>
          
          
          <Route path="/Home" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign" exact={true} render={this.renderSignup} component={Sign} />
          <Route path="/login" exact={true} render={this.renderLogin} component={Login} />
          <Route path="/post" component={Post} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
