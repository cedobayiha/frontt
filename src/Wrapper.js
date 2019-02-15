import React, { Component } from "react";
export default props => (
  <div
    className="App"
    style={{
      display: "flex",
      alignItems: "center",
      height: "90vh",
      // backgroundColor: "red",
      backgroundImage: "./img/watches1"
    }}
  >
    <div
      style={{
        width: "100%"
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          minWidth: "40px",
          margin: "auto",
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </div>
    </div>
  </div>
);

