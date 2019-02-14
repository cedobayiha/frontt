import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    let title = this.state.title
    console.log(title)
    let c = JSON.stringify({
      title
    });
    
    if (this.state.title === " " || this.state.title === "") {
      return alert("Please enter a something");
    } else {
      fetch("http://165.227.42.84:80/titles", { method: "POST", body: c })
        .then(function(x) {
          return x.text();
        })
        .then(response => {
          let body = JSON.parse(response);
          if (body.status === true) {
            this.props.history.push("/Accounting");
          }
        });
    }
  }

  render() {
    return (
      <div
        className="search-box"
        style={{
          display: "flex",
          float: "right",
          width: "250px",
          marginTop: "10px",
          borderRadius: "10px",
          border: "1px solid green"
        }}
      >
      <form onSubmit={this.handleSubmit} style={{ display: "flex"}}>
        <input
          onChange={this.handleTitle}
          type="text"
          placeholder="search by title"
          style={{ backgroundColor: "white", display: "flex" }}
        />
        <input
          type="submit"
          value="Search"
          style={{width: 60, borderRadius: "100px", border: "none" }}
        />
      </form>
      </div>
    );
  }
}
export default withRouter(Search);
