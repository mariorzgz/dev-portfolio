import React from "react";

export default function Footer() {
  return(
    <section id="footer" className="width-100">
      <div className="footer-laptop d-flex padding-x justify-content-between align-items-end">
        <p className="text-left">Mario Rodríguez<br></br>Fullstack Developer</p>
        <p className="text-center">Linkedin / Github / Behance</p>
        <p className="text-right">Made with ♥ by<br></br>Mario Rodríguez</p>
      </div>

      <div className="footer-mobile">
        <ul className="">
          <li>Linkedin</li>
          <li>Github</li>
          <li>Behance</li>
        </ul>
        <p className="text-center">Made with ♥ by<br></br>Mario Rodríguez</p>
      </div>

    </section>
  );
}
