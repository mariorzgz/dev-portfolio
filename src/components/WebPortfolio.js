import React from "react";
import { webprojects } from "../data";

export default function WebPortfolio() {
  return (
    <section id="projects" className="body-font">

      <div>
        <div>
          <h2>
            Web Portfolio
          </h2>
          <p>

            I've worked for 1 year in Spain and I've done an intensive Ruby on Rails bootcamp in Munich.
            I also like to learn on my own about other coding languages and I have tons of personal projects.

          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {webprojects.map((project) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-orange-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <p className="py-2 leading-relaxed">{project.year}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
