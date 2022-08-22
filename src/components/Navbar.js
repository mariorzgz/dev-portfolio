import React from "react";

export default function Navbar() {
  return (
    <header className="container navbar">

        <div className="">

          <a href="#intro" className="">
            Mario Rodríguez
          </a>

        </div>

        <nav className="">

          <a data-cursor="click" href="#contact" className="contrast">
            Contact
          </a>

        </nav>

    </header>
  );
}
