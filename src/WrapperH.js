import React from "react";
export default props => (
  <div style={{
    display: "flex",
    height: "530px",
    width: "100%"
  }}>
  <ul class="tt"
    style={{
    display: "flex",
    maxHeight: "520px",
    minHeight: "170px",
    maxWidth: "400px",
    minWidth: "100px",

  }}>
   <li class="image" style={{
    display: "flex",
    maxHeight: "360px",
    minHeight: "150px",
    maxWidth: "385px",
    minWidth: "90px",
   }}>{props.children}
   </li>
   <li class="title"
   style={{
     display: "flex",
     maxHeight: "100px",
     minHeight: "50px",
     maxWidth: "385px",
     minWidth: "90px"
    }}
     >
     {props.children}
   </li>
   <li class="price details"
   style={{
     display: "flex",
     maxHeight: "60px",
     minHeight: "20px",
     maxWidth: "385px",
     minWidth: "90px"
    }}
     >
     <div class="price" style={{
       display: "flex",
       float: "right"
     }}>{props.children}</div>
     <button class="details"
    //  onClick= {showDetails()}
     style={{
       display: "flex",
       padding: "45px",
       backgroundColor: "blue",
       float: "left"
     }}>details</button>

   </li>

  </ul>
  </div>
)
