import React from "react";
import { designprojects } from "../data";

class DesignViewer extends React.Component{
  closeViewer(){
    const viewer = document.getElementById("design-viewer");
    viewer.classList.remove("open-viewer");
    const body = document.querySelector("body");
    body.classList.remove("no-scroll")
  }
  render(){

    const id = this.props.id
    const project = designprojects[id]

    const gallery = project.gallery.map(image => {
      return(
      <li key={image}>
        <img className="project-image"
        key={image}
        src={image}
        alt={image}
        ></img>
      </li>
      )
    });
    return(
      <div id="design-viewer" className={this.props.type}>

        <div className="box">

          <p id="close" data-cursor="close" className="close-icon" onClick={this.closeViewer}>✕</p>

          {project.link.length > 0 &&
              <a className="project-link" target="_blank" rel="noreferrer" href={project.link}>Visit link</a>
          }

          <div className="project-data width-33">

            <h2 id="title">{project.title}</h2>
            <div className="width-50">
              <p id="description">{project.description}</p>
            </div>
            <div>
              <p>Coauthor: {project.coauthor}</p>
              <p>Year: {project.year}</p>
            </div>

          </div>

          <div className="gallery">
            {gallery}
          </div>

        </div>

      </div>
    )
  }

}

export default DesignViewer;
