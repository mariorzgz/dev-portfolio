import React, { Component } from "react";
import Viewer from "./Viewer";
import { designprojects } from "../data";

class DesignPortfolio extends Component{

  constructor(props){
    super(props);
    this.state={
      title: "title",
      description: "description",
      subtitle:"subtitle",
      year: "year",
      link:"link",
      image:"image",
      isViewerOpen: false
    }
    this.handleProjects = this.handleProjects.bind(this)
  }

  handleProjects(e){
    const description = e.target.getAttribute("data-description");
    const title = e.target.getAttribute("data-title");
    const subtitle = e.target.getAttribute("data-subtitle");
    const year = e.target.getAttribute("data-year");
    const link = e.target.getAttribute("data-link");
    const image = e.target.getAttribute("data-image");

    this.setState({
      title: title,
      description: description,
      subtitle: subtitle,
      year: year,
      link: link,
      image: image,
      isViewerOpen: true
    });

    this.operViewer();
  }

  openViewer(){

  }

  render(){

    const projects = designprojects.map(project => {
        return (
          <img className="project"
          key={project.title}
          src={project.image}
          alt={project.title}
          onClick={this.handleProjects}
          id={project.title}
          data-title={project.title}
          data-description={project.description}
          data-subtitle={project.subtitle}
          data-year={project.year}
          data-link={project.link}
          data-image={project.image}
          ></img>
        )
    });

    return (

      <section id="design-portolio" className="padding-y">

        <div className="width-100 text-center">

          <h2>
            Design Portfolio
          </h2>

        </div>

        <div className="d-flex">




          <Viewer
            title={this.state.title}
            description={this.state.description}
            subtitle={this.state.subtitle}
          />


        </div>

      </section>
    );


  }


}

export default DesignPortfolio
