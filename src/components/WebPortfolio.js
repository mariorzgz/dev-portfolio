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
    body.classList.add("no-scroll")
  }

  render(){

    const allProjects = webprojects.map(project => {
      return(
        <img className="project project-mobile"
          key={project.id}
          src={project.image}
          alt={project.title}
          onClick={this.handleProjects}
          id={project.id}
          data-title={project.title}
          ></img>
      )
    })

    const firstHalf = webprojects.slice(0,2).map(project => {
        return (
          <img className="project slide hvr-grow"
          data-cursor="hover"
          key={project.id}
          src={project.image}
          alt={project.title}
          onClick={this.handleProjects}
          id={project.id}
          data-title={project.title}
          ></img>
        )
    });

    const secondHalf = webprojects.slice(2, webprojects.length).map(project => {
      return (
        <img className="project slide hvr-grow"
        data-cursor="hover"
        key={project.id}
        src={project.image}
        alt={project.title}
        onClick={this.handleProjects}
        id={project.id}
        data-title={project.title}
        ></img>
      )
  });

    return (

      <section id="web-portfolio" className="padding-y">

        <div className="d-flex">

          <div className="width-33 padding">

            <h2>
              Web Portfolio
            </h2>

            <p className="width-66">

              I've worked for 1 year in <span data-cursor="spain" id="spain" className="contrast">Spain</span> and I've done an intensive Ruby on Rails bootcamp in <span data-cursor="munich" id="munich" className="contrast">Munich</span> at Le Wagon.

              <br></br>
              <br></br>
              I also like to learn on my own about other coding languages and I have tons of personal projects.

            </p>

          </div>


          <Viewer
            id={this.state.id}
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

          <div className="web-projects-mobile">

            {allProjects}

          </div>

        </div>

      </section>
    );


  }


}

export default WebPortfolio
