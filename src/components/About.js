import React from "react";

export default function About() {
  return (
    <section id="about">

      <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mario.
            <br className="hidden lg:inline-block" /> Fullstack Developer
          </h1>

          <p className="mb-8 leading-relaxed">
            I'm a curious and creative person. I love cooking and art.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>

        </div>

        <div className="md:w-1/2 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center">
          <img
            alt="me"
            className="w-full h-48 object-contain object-right"
            src="./profile-pic.png" />
        </div>

      </div>
    </section>
  );
}
