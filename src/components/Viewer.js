import React from "react";

class Viewer extends React.Component{

  render(){
    return(
      <div id="output">
      ------------
        <p id="description">{this.props.description}</p>
        <p id="subtitle">{this.props.subtitle}</p>
        <p id="link">{this.props.link}</p>
      ------------
      </div>
    )
  }

}

export default Viewer;
