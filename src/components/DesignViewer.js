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
        <img className="" style={{width: "700px"}}
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

          <p id="close" className="close-icon" onClick={this.closeViewer}>✕</p>

          <div className="d-flex align-items-center padding-x">

            <div className="width-33">

              <h2 id="title">{project.title}</h2>
              <p id="description">{project.description}</p>

            </div>

            <div className="gallery">
              {gallery}
            </div>

          </div>

          <div className="padding-x align-items-center project-attributes">

            <p>Year: {project.year}</p>

            <ul className="skills justify-content-around">
              <li>aappp</li>
              <li>ooouu</li>
            </ul>
            {project.link.length > 0 &&
              <a target="_blank" rel="noreferrer" href={project.link}>Visit page</a>
            }

          </div>

        </div>

      </div>
    )
  }

}

export default DesignViewer;
