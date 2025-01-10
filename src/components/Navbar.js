import React from "react";

import { useRef, useEffect } from "react";

export default function Navbar() {

  const navbar = useRef(null);

  useEffect(() => {

    const element = navbar.current;
    const footer = document.getElementById("footer");

    //Get the button:
    const scrollTop = element.querySelector("#scrollTop");
    const scrollBottom = element.querySelector("#scrollBottom");

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    function bottomFunction() {
      footer.scrollIntoView();
    }

    scrollTop.addEventListener("click", () => {
      topFunction()
    });

    scrollBottom.addEventListener("click", () => {
      bottomFunction()
    });

  });


  return (
    <header className="container navbar" ref={navbar} id="navbar">

        <div className="">

          <div className="scrollTop" id="scrollTop">
            Mario Rodríguez
          </div>

        </div>

        <nav className="">

          <div role="button" tabIndex={0} className="contrast" id="scrollBottom" data-cursor="click">
            Contact
          </div>

        </nav>

    </header>
  );
}
