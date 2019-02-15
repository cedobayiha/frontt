import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import Category from "./components/Category";
import PostButton from "./components/PostButton"
import Accounting from "./components/Accounting"
import AddressForm from "./components/AddressForm"
import Checkout from "./components/Checkout"
import PaymentForm from "./components/PaymentForm"
import Details from "./components/Details"
// import Footer from "./components/Footer"


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
        <div className="oui">
          <Navbar />
         <div className="oui" style={{display: "flex", justifyContent: "flex-end", alignItems: "strech", marginTop: "8.5px"}}>
         
            <Category />
            <PostButton />
            </div>
          
          
          <Route path="/home" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign" exact={true} render={this.renderSignup} component={Sign} />
          <Route path="/login" exact={true} render={this.renderLogin} component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/accounting" component={Accounting} />
          <Route path="/adressform" component={AddressForm} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={PaymentForm} />
          
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
