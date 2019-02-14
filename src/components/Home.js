import React, { Component } from "react";
import WrapperH from "../WrapperH.js";

class Home extends Component {
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
  renderList =() => { console.log(this.state.items)
      return this.state.items.map((item=>{
        return(
          <>
           <img src={item.image} />
           <div>{item.title}</div>
           <div style={{display: "flex", justifyContent: "space-beteen"}}><div>{item.price}</div>
           </div>
   
         </>
        )
      }
     ))
     
  }
  render() {
    console.log(this.state.items);
  return (<div>{this.renderList()}</div>)
}

}
  export default Home