import React, { Component } from "react";


class Finance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    return fetch("http://165.227.42.84:80/getitem")
      .then(function(x) {
        return x.text();
      })
      .then(responseBody => {
        console.log(responseBody);
        let parsed = JSON.parse(responseBody);
        console.log("the parsed response", parsed);
        this.setState({ items: parsed });
      });
  }

  renderList = () => {
    console.log(this.state.items);
    return this.state.items.map(item => {
      return (
    <>
    <img style={{
                    display: "block",
                    maxHeight: "360px",
                    minHeight: "150px",
                    maxWidth: "385px",
                    minWidth: "90px",
                    listStyle: "none"
                  }}
                  src={"http://165.227.42.84:80/" + item.image}/>
    </>)
})
}


  render() {
    
  return (<div>{this.renderList()}</div>);
  }
}

export default Finance;