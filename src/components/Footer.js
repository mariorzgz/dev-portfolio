import React from "react";

export default function Footer() {
  return(
    <section id="footer" className="width-100">
      <div className="footer-laptop d-flex padding-x justify-content-between align-items-end">
        <p className="text-left">Mario Rodríguez<br></br>Fullstack Developer</p>
        <p className="text-center">
          <a data-cursor="click" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mariorzgz/">Linkedin</a> /
          <a data-cursor="click" target="_blank" rel="noreferrer" href="https://github.com/mariorzgz"> Github</a> /
          <a data-cursor="click" target="_blank" rel="noreferrer" href="https://www.behance.net/mariorzgz"> Behance</a>
        </p>
        <p className="text-right">Made with ♥ by<br></br>Mario Rodríguez</p>
      </div>

      <div className="footer-mobile">
        <ul className="">
          <li><a data-cursor="click" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mariorzgz/">Linkedin</a></li>
          <li><a data-cursor="click" target="_blank" rel="noreferrer" href="https://github.com/mariorzgz">Github</a></li>
          <li><a data-cursor="click" target="_blank" rel="noreferrer" href="https://www.behance.net/mariorzgz">Behance</a></li>
        </ul>
        <p className="text-center">Made with ♥ by<br></br>Mario Rodríguez</p>
      </div>

    </section>
  );
}
