import ReactDOM from "react-dom";
import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      price: ""
    };
    this.handlePrice = this.handlePrice.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleCategory = this.handleCategory.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handlePrice(event) {
    this.setState({ price: event.target.value });
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleCategory(event){
    this.setState({category: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ signedUp: true });
    let c = JSON.stringify({
      price: this.state.price,
      description: this.state.description,
      title: this.state.title,
      category: this.state.category
    });
    fetch("http://165.227.42.84:80/post", { method: "POST", body: c });
  }
  render() {
    return (
      <div style={{ marginLeft: "300px", marginTop: "100px" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={{ fontWeight: "bold" }}> Title: </label>
          </div>
          <textarea
            onChange={this.handleTitle}
            style={{ width: "60%", height: "30px", border: "1px solid" }}
            type="text"
          />

          <div>
            <label style={{ fontWeight: "bold" }}> Price: </label>
          </div>
          <input
            onChange={this.handlePrice}
            style={{ width: "6%", height: "30px", border: "1px solid" }}
            type="text"
          />
          <div>
            <label style={{ fontWeight: "bold" }}><h6>Select Category</h6></label>
          <select style={{ display: "block", width: "60%", border: "1px solid" }} onChange={this.handleCategory}>
            <option value="Accounting">Accounting</option>
            <option value="Marketing">Marketing</option>
            <option value="Poli Sci">Poli sci</option>
            <option value="finance">Finance</option>
          </select>
          </div>
          <div>
            <label style={{ fontWeight: "bold" }}><h5>Description</h5></label>
          </div>
          <div>
            <textarea
              onChange={this.handleDescription}
              style={{ width: "60%", height: "180px", border: "1px solid" }}
              type="text"
            />
          </div>
          <div>
            <input
              style={{
                marginTop: "10px",
                height: "40px",
                fontWeight: "bold",
                padding: "10px"
              }}
              type="submit"
              value="Publish"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
