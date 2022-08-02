import React, { Component } from "react";
import DesignViewer from "./DesignViewer";
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
    const viewer = document.getElementById("design-viewer");
    const body = document.querySelector("body");
    viewer.classList.add("open-viewer");
    body.classList.add("no-scroll");
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

        <DesignViewer
          id={this.state.id}
          type="design"
        />

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
