import React, { Component } from "react";
import Viewer from "./Viewer";
import { webprojects } from "../data";

class WebPortfolio extends Component{

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
    const viewer = document.getElementById("viewer");
    const body = document.querySelector("body");
    viewer.classList.add("open-viewer");
    body.classList.add("no-scroll");
  }

  render(){

    const allProjects = webprojects.map(project => {
      return(
        <video className="project project-mobile"
          key={project.id}
          alt={project.title}
          onClick={this.handleProjects}
          id={project.id}
          data-title={project.title}
          autoPlay muted loop>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    })

    const firstHalf = webprojects.slice(0,3).map(project => {
        return (
          <video className="project project-desktop hvr-grow"
          data-cursor="hover"
          key={project.id}
          alt={project.title}
          onClick={this.handleProjects}
          id={project.id}
          data-title={project.title}
          autoPlay muted loop>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        )
    });

    const secondHalf = webprojects.slice(3, webprojects.length).map(project => {
      return (
        <video className="project project-desktop hvr-grow"
        data-cursor="hover"
        key={project.id}
        alt={project.title}
        onClick={this.handleProjects}
        id={project.id}
        data-title={project.title}
        autoPlay muted loop>
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      )
  });

    return (

      <section id="web-portfolio" className="padding-y d-flex">
          <div className="flex-33 width-100 padding">
            <h2>
              Web Portfolio
            </h2>
            <p className="width-100">
            I’m currently working as a UX Engineer, applying both my Graphic Design and Web Development knowledge into websites, campaigns and landing pages.
            <br/><br/>
            I’m a very passionate and curious person, interested in both art and code. I take accessibility very seriously and I’m always happy to try new ideas and learn new tools.
            <br/><br/>
            I've worked with multiple clients such as Siemens, Samsung and Roche. In the past I've worked with small business and I like to have some projects on the side too.
            </p>
          </div>

          <div className="flex-66 width-100 web-projects slider">
            {/* <div className="projects-cta">
              Click on the projects!
            </div> */}
            <div className="d-flex slider-wrap animation-top">
              {firstHalf}{firstHalf}
            </div>
            <div className="d-flex slider-wrap animation-down">
              {secondHalf}{secondHalf}
            </div>
          </div>

          <div className="web-projects-mobile">
            {allProjects}
          </div>

        <Viewer
            id={this.state.id}
            type="web"
          />

      </section>
    );


  }


}

export default WebPortfolio
