import React, { Component } from "react";
import DesignViewer from "./DesignViewer";
import { designprojects } from "../data";

class DesignPortfolio extends Component{

  constructor(props){
    super(props);
    this.state={
      id: 0,
      isViewerOpen: false
    }
    this.handleProjects = this.handleProjects.bind(this)
  }

  handleProjects(e){
    console.log("open design")
    const id = e.target.getAttribute("id");    
    this.setState({
      id: id,
      isViewerOpen: true
    });

    this.openViewer();
  }

  openViewer(){
    const viewer = document.getElementById("design-viewer");
    const body = document.querySelector("body");
    viewer.showModal();
    viewer.classList.add("open-viewer");
    body.classList.add("no-scroll");
  }

  render(){

    const projects = designprojects.map(project => {
        return (
          <div className="project hvr-grow" 
          data-cursor="hover" tabIndex={0}
          key={project.id}
          id={project.id}
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // height: "300px",
            // width: "300px"
          }}
          alt={project.title}
          onClick={this.handleProjects}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              this.handleProjects(e)
          }}
          >
            <p>{project.title}</p>
          </div>
        )
    });

    return (

      <section id="design-portfolio" className="d-flex">
          <div className="flex-small-half flex-shrink width-100 padding text">
            <h2>
              Design Portfolio
            </h2>
            <p className="width-100">
            I've also worked as a Graphic Designer and Art Director with responsibilites such as:
            <br/><br/>
            Develop comprehensive branding strategies tailored to the unique needs and goals of various companies.
            <br/><br/>
            Design visual identities, including logos, typography, and colour schemes, to establish strong brand recognition.
            </p>
        </div>

        <div className="flex-big-half width-100 design-projects">
          {projects}
        </div>

        <DesignViewer
          id={this.state.id}
          type="design"
        />
      </section>
    );


  }


}

export default DesignPortfolio
