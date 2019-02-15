import React, { Component } from "react";

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
        // console.log(responseBody);
        let parsed = JSON.parse(responseBody);
        // console.log("the parsed response", parsed);
        this.setState({ items: parsed });
      });
  }

  renderList = () => {
    // console.log(this.state.items);
    return this.state.items.map(item => {
      console.log(item);
      return (
        <>
          <div
            style={{
              height: "470px",
              display: "inline-block",
              width: "400px",
              border: "dotted 1px blue",
              backgroundColor: "#F8F8FF",
              marginLeft: "20px",
              
            }}
          >Title: {item.title}
            <img
              alt=""
              style={{
                display: "inline-block",
                maxHeight: "300px",
                minHeight: "150px",
                maxWidth: "385px",
                minWidth: "90px",
                listStyle: "none",
                justifyContent: "space-between",
                padding: "10px"
              }}
              src={"http://165.227.42.84:80/" + item.image}
            />Category: {item.category}<div style={{overflow: "scroll"}}>{item.description}</div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "Space-between"}}><h5 style={{ display: "flex", justifyContent: "flex-end" }}>
              {item.price}
              <button style={{display: "flex", float: "right"}}>
                Buy
              </button>
            </h5></div>
            
          </div>
        </>
      );
    });
  };

  render() {
    return (
      <>
        {" "}
        <span>
          <div
            style={{
              display: "flex",
              height: "650px",
              width: "500px",
              justifyContent: "space-between",
              minWidth: "1em",
              
            }}
          >
            {this.renderList()}
          </div>
        </span>
        {/* </div></span><span><div
        style={{
          display: "flex",
          height: "550px",
          width: "250px"
        }}
      >
        {this.renderList()}
      </div></span> */}
      </>
    );
  }
}

export default Home;

/*
         {/* <div style={{
           display: "flex",
      height: "85vh",
      width: "85vh"
      }}>
      <div
            style={{
              display: "flex",
              height: "523px",
              width: "400px"
            }} >
            <img style={{
                    display: "block",
                    maxHeight: "360px",
                    minHeight: "150px",
                    maxWidth: "385px",
                    minWidth: "90px",
                    listStyle: "none"
                  }}
                  src={"http://165.227.42.84:80/" + item.image}/>

                   <ul style={{
              height: "523px",
              width: "397px"
            }}>
            <li
                style={{
                  display: "block",
                  maxHeight: "100px",
                  minHeight: "40px",
                  maxWidth: "385px",
                  minWidth: "90px",
                  listStyle: "none"
                }}
              >{item.title}</li>
            <li style={{display: "block",
            maxHeight: "90px",
                  minHeight: "40px",
                  maxWidth: "385px",
                  minWidth: "90px", listStyle: "none"}}>{item.price}</li>
            </ul>
             </div>
       </div> */
