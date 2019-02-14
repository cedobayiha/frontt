import React, { Component } from "react";
export default props => (
  <div
    className="App"
    style={{
      display: "flex",
      // flexWrap: "wrap",
      alignItems: "justify",
      height: "85%",
      flexDirection: "column",
    }}
  > 
   <ul style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        height: "420px",
        
      }}>
         <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          maxHeight: "",
          margin: "auto"

        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

        }}
      >
        {props.children}
      </li>
       <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

        }}
      >
        {props.children}
      </li>

       <li
        style={{
          maxWidth: "395px",
          minWidth: "40px",
          margin: "auto"

        }}
      >
        {props.children}
      </li>
      
      </ul>
    <ul
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        height: "420px"
      
      }}
    >
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
    </ul>

     {/* <ul style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        height: "420px"
      }}>
         <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      </ul>
     
      <ul style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        height: "420px"
      }}>
         <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"

          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      <li
        style={{
          maxWidth: "390px",
          minWidth: "40px",
          margin: "auto"
          // backgroundColor: "red"
        }}
      >
        {props.children}
      </li>
      </ul> */}
  </div>
);
