import React, { Component } from "react";
import Viewer from "./Viewer";
import { designprojects } from "../data";

class DesignPortfolio extends Component{

  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      role:"",
      year: "",
      link: "",
      image: "",
      galler: "",
      coauthor: "",
      isViewerOpen: false
    }
    this.handleProjects = this.handleProjects.bind(this)
  }

  handleProjects(e){
    const description = e.target.getAttribute("data-description");
    const title = e.target.getAttribute("data-title");
    const role = e.target.getAttribute("data-role");
    const year = e.target.getAttribute("data-year");
    const link = e.target.getAttribute("data-link");
    const image = e.target.getAttribute("data-image");
    const gallery = e.target.getAttribute("data-gallery");
    const coauthor = e.target.getAttribute("data-coauthor");

    this.setState({
      title: title,
      description: description,
      role: role,
      year: year,
      link: link,
      image: image,
      gallery: gallery,
      coauthor: coauthor,
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
          key={project.title}
          src={project.image}
          alt={project.title}
          onClick={this.handleProjects}
          id={project.title}
          data-title={project.title}
          data-description={project.description}
          data-role={project.role}
          data-year={project.year}
          data-link={project.link}
          data-image={project.image}
          data-gallery={project.gallery}
          data-coauthor={project.coauthor}
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

          <Viewer
            title={this.state.title}
            description={this.state.description}
            subtitle={this.state.subtitle}
            role={this.state.role}
          />

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
