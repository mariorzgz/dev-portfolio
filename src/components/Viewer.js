import React from "react";

class Viewer extends React.Component{

  render(){
    return(
      <div id="viewer">
      ------------
        <p id="title">{this.props.title}</p>
        <p id="description">{this.props.description}</p>
        <p id="subtitle">{this.props.subtitle}</p>
        <p id="link">{this.props.link}</p>
        <p id="role">{this.props.role}</p>
      ------------
      </div>
    )
  }

}

export default Viewer;
