import React from "react";
import { designprojects } from "../data";

class DesignViewer extends React.Component{
  closeViewer(){
    console.log("close design")
    const viewer = document.getElementById("design-viewer");
    const body = document.querySelector("body");
    viewer.classList.remove("open-viewer");
    body.classList.remove("no-scroll")
    setTimeout(function () {
      viewer.close();
    }, 400);
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
      <>
        <dialog id="design-viewer" 
            className={this.props.type} 
            aria-modal="true">

          <div className="box">

          <div role="button" tabIndex={0} id="close" data-cursor="close" 
            className="close-icon" 
            onClick={this.closeViewer}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                this.closeViewer(e)
            }}
            >
              ✕
            </div>

            {project.link.length > 0 &&
                <a className="project-link" target="_blank" rel="noreferrer" href={project.link}>Visit link</a>
            }

            <div className="project-data width-33">

              <h2 id="title" className="">{project.title}</h2>
              <p id="description" className="margin-0">{project.description}</p>
              <div className="padding-top">
                <p>Coauthor: {project.coauthor}</p>
                <p>Year: {project.year}</p>
              </div>

            </div>

            <div className="gallery">
              {gallery}
            </div>

          </div>
        </dialog>
      </>
    )
  }

}

export default DesignViewer;
