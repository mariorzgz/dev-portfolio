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
      image:"image"
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
      image: image
    });
  }

  render(){

    const size = 6
    const firstHalf = webprojects.map(project => {
        return (
          <img className="project slide"
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

    const secondHalf = webprojects.map(project => {
      return (
        <img className="project slide"
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

          <div className="width-50 padding">

            <h2>
              Web Portfolio
            </h2>

            <p>

              I've worked for 1 year in Spain and I've done an intensive Ruby on Rails bootcamp in Munich.
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
