import ReactDOM from "react-dom";
import React, { Component } from "react";
import Wrapper from '../Wrapper.js';


import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({signedUp : true})
    let c = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });
    fetch("http://165.227.42.84:80/login", { 
      method: "POST", body: c })
    .then(function(x){
      return x.text();
    })
    .then(responseBody => {
      let body = JSON.parse(responseBody);
      if (!body.success) {
        alert("login failed");
        return;
      }
      this.props.dispatch({ type: "login-success"})
    })
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h5>Username</h5>
          </div>
          <div>
            <input style={{ width: "100%" }} type="text" onChange={this.handleUsername} />
          </div>
          <div>
            <h5>Password</h5>
          </div>
          <div>
            <input style={{ width: "100%" }} type="text" onChange={this.handlePassword} />
          </div>
          <div>
            <input
              style={{ width: "100%", }}
              className="btn btn-primary"
              type="submit"
              value="Login"
            />
          </div>
        </form>
       </Wrapper>
    );
  }
}

export default Login;
