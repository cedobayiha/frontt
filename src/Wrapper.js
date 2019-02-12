import React, { Component } from "react";
export default props => (
  <div
    className="App"
    style={{
      display: "flex",
      alignItems: "center",
      height: "100vh",
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
          margin: "auto"
        }}
      >
        {props.children}
      </div>
    </div>
  </div>
);

