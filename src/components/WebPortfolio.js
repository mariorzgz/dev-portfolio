import React, { Component } from "react";
import Viewer from "./Viewer";
import { webprojects } from "../data";

class WebPortfolio extends Component{

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

    const firstHalf = webprojects.slice(0,2).map(project => {
        return (
          <img className="project slide hvr-grow"
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

    const secondHalf = webprojects.slice(2, webprojects.length).map(project => {
      return (
        <img className="project slide hvr-grow"
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

      <section id="web-portolio" className="padding-y">

        <div className="d-flex">

          <div className="width-33 padding">

            <h2>
              Web Portfolio
            </h2>

            <p className="width-66">

              I've worked for 1 year in <span id="spain" className="contrast">Spain</span> and I've done an intensive Ruby on Rails bootcamp in <span id="munich" className="contrast">Munich</span>.
              <br></br>
              <br></br>
              I also like to learn on my own about other coding languages and I have tons of personal projects.

            </p>

          </div>


          <Viewer
            title={this.state.title}
            description={this.state.description}
            subtitle={this.state.subtitle}
          />

          <div className="web-projects slider">

            <div className="projects-cta">
              Click on the projects!
            </div>

            <div className="d-flex slider-wrap animation-top">

              {firstHalf}{firstHalf}

            </div>

            <div className="d-flex slider-wrap animation-down">

              {secondHalf}{secondHalf}

            </div>

          </div>

        </div>

      </section>
    );


  }


}

export default WebPortfolio
