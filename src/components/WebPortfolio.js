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

    return (

      <section id="projects" className="body-font">

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

          <div className="">

          <Viewer
            // title={this.state.title}
            description={this.state.description}
            subtitle={this.state.subtitle}
          />

            {webprojects.map((project) => (

              <div>

                <h2 className="">
                        {project.title}
                </h2>

                <button onClick={this.handleProjects}
                        id={project.title}
                        data-title={project.title}
                        data-description={project.description}
                        data-subtitle={project.subtitle}
                        data-year={project.year}
                        data-link={project.link}
                        data-image={project.image}
                        >

                {project.title}

                </button>

              </div>

            ))}
          </div>

        </div>
      </section>
    );


  }


}

export default WebPortfolio
