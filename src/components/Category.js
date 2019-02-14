import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Navbar";

class Category extends Component {
  constructor(props) {
    super(props);
    this.handleSubCat = this.handleSubCat.bind(this);
    // this.handleChange = this.handleChange.bind(this)
  }
  // handleChange(event){
  //   this.setState({category: event.target.value})
  // }

  handleSubCat(event) {
    event.preventDefault();
    
    let category = event.target.value;

    let c = JSON.stringify({
      category
    });
    if (category === "Choose Category") {
      return alert("Please choose a category");
    } else if (category === "Accounting") {
      fetch("http://165.227.42.84:80/accounting", { method: "POST", body: c })
        .then(function(x) {
          return x.text();
        })
        .then(response => {
          let body = JSON.parse(response);
          if (body.status === true) {
            this.props.history.push("/Accounting");
          }
        });
    } else if (category === "Marketing") {
      fetch("http://165.227.42.84:80/marketing", { method: "POST", body: c })
        .then(function(x) {
          return x.text();
        })
        .then(response => {
          let body = JSON.parse(response);
          if (body.status === true) {
            this.props.history.push("/Marketing");
          }
        });
    } else if (category === "Finance") {
      fetch("http://165.227.42.84:80/finance", { method: "POST", body: c })
        .then(function(x) {
          return x.text();
        })
        .then(response => {
          let body = JSON.parse(response);
          if (body.status === true) {
            this.props.history.push("/Finance");
          }
        });
    } else if (category === "Poli sci") {
      fetch("http://165.227.42.84:80/polispi", { method: "POST", body: c })
        .then(function(x) {
          return x.text();
        })
        .then(response => {
          let body = JSON.parse(response);
          if (body.status === true) {
            this.props.history.push("/Polispi");
          }
        });
    } else if (category === "All Category") {
      this.props.history.push("/Home");
    }
  }
  render() {
    return (
      <div
        className="search-box"
        style={{
          display: "flex",
          width: "600px",
          marginTop: "10px",
          borderRadius: "5px"
        }}
      >
        <select
          onChange={this.handleSubCat}
          style={{ display: "block", width: "150px", backgroundColor: "beige" }}
        >
          <option value="Choose Category" selected disabled>
            Choose Category
          </option>
          <option value="All Category">All Categories</option>
          <option value="Accounting">Accounting</option>
          <option value="Marketing">Marketing</option>
          <option value="Poli Sci">Poli sci</option>
          <option value="finance">Finance</option>
        </select>
      </div>
    );
  }
}

export default withRouter(Category);
