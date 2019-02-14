import React, { Component } from "react";
import { withRouter } from "react-router-dom";



class PostButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleSubmit(event){
  return this.props.history.push("/post")
}
  render(){
  return(
    <div  style={{display: "flex", float: "right", paddingBottom:"3px"}}>
    <form onSubmit={this.handleSubmit} >
    <input className= "blue-grey darken-2" type="submit"  style={{display: "block", color:"#fff", padding: "13px", borderRadius: "5px"}} value="Post Ad" />
    </form>
    </div>
  )
}
}
export default withRouter(PostButton);