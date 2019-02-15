import React, { Component } from "react";

class Accounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  componentDidMount() {
    return fetch("http://165.227.42.84:80/getitem", { method: "POST" })
      .then(function(x) {
        return x.text();
      })
      .then(responseBody => {
        console.log(responseBody);
        let parsed = JSON.parse(responseBody);
        console.log("the parsed response", parsed);
        this.setState({ category: parsed });
      });
  }

  renderList = () => {
    console.log(this.state.category);
    return this.state.category.map(categorie => {
      return (
        <>
          <img
            alt=""
            style={{
              display: "block",
              maxHeight: "360px",
              minHeight: "150px",
              maxWidth: "385px",
              minWidth: "90px",
              listStyle: "none"
            }}
            src={"http://165.227.42.84:80/" + categorie.image}
          />
        </>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default Accounting;
