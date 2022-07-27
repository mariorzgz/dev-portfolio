import React from "react";
import { webprojects } from "../data";

class Viewer extends React.Component{



  closeViewer(){
    const viewer = document.getElementById("viewer");
    viewer.classList.remove("open-viewer");
    const body = document.querySelector("body");
    body.classList.remove("no-scroll")
  }

  render(){

    const id = this.props.id
    const project = webprojects[id]

    const skills = project.skills.map(skill => {
      return(
      <li key={skill}>{skill}</li>
      )
    });

    return(
      <div id="viewer">

        <div className="box">

          <p id="close" className="close-icon" onClick={this.closeViewer}>✕</p>

          <div className="d-flex align-items-center padding-x">

            <div className="width-33">


              <h2 id="title">{project.title}</h2>
              <p id="description">{project.description}</p>

            </div>

            <div className="width-66 padding-x text-right">
              <img src={project.image} alt={project.title}></img>
            </div>

          </div>

          <div className="padding-x align-items-center project-attributes">

            <p>Year: {project.year}</p>


            <ul className="skills justify-content-around">
              {skills}
            </ul>

            <a target="_blank" rel="noreferrer" href={project.link}>Visit page</a>

          </div>



        </div>

      </div>
    )
  }

}

export default Viewer;
