import React, { Component } from "react";
import Viewer from "./Viewer";
import { designprojects } from "../data";

class DesignPortfolio extends Component{

  constructor(props){
    super(props);
    this.state={
      id: 0,
      isViewerOpen: false
    }
    this.handleProjects = this.handleProjects.bind(this)
  }

  handleProjects(e){
    const id = e.target.getAttribute("id");

    this.setState({
      id: id,
      isViewerOpen: true
    });

    this.openViewer();
  }

  openViewer(){

  }

  render(){

    const projects = designprojects.map(project => {
        return (
          <img className="project hvr-grow" data-cursor="hover"
          key={project.id}
          id={project.id}
          src={project.image}
          alt={project.title}
          onClick={this.handleProjects}
          ></img>
        )
    });

    return (

      <section id="design-portfolio" className="padding-y">

        <div className="width-100 text-center">

          <h2>
            Design Portfolio
          </h2>

        </div>

        <div className="d-flex">

          { <Viewer
            id={this.state.id}
          /> }

        </div>

        <div className="emoji contrast first-emoji">😲</div>

        <div className="padding-y d-flex design-projects">

          {projects}

        </div>

        <div className="emoji contrast second-emoji">😊</div>

      </section>
    );


  }


}

export default DesignPortfolio
