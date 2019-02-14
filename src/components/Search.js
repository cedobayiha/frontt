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
      // <div
      //   className= "blue-grey darken-1"
      //   style={{
      //     display: "flex",
      //     // justifyContent: "space-between",
      //     // width: "200px",
      //     // marginTop: "2px",
      //     paddingBottom: "5px",
      //     borderRadius: "10px",
      //     border: "none",
      //     Color: "#fff"
      //   }}
      // >
      <div className= "blue-grey darken-3" onSubmit={this.handleSubmit} style={{ display: "flex", backgroundColor: "beige"}}>
        <input
          className= "blue-grey darken-3"
          onChange={this.handleTitle}
          type="text"
          placeholder="Search..."
          style={{ color: "white", display: "flex", width: "175px", textAlign: "left", paddingLeft: "4px" }}
        />
        <input 
          
          className= "blue-grey darken-3"
          type="submit"
          value="Search"
          style={{width: "60px", border: "none", color: "white", height: "7vh" }}
        /><i class="material-icons">search</i>
      </div>
      //</div>
    );
  }
}
export default withRouter(Search);
