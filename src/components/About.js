import React from "react";

export default function About() {
  return (
    <section id="about" className="padding-top">

      <div className="d-flex padding-x">

        <div className="width-33">

          <h2>About me</h2>

          <p className="width-100">

            I'm a Spanish Graphic Designer that started coding thanks to tumblr, when I was 12 years old.
            <br></br>
            <br></br>
            I'm really passionate about food, science, art and philosophy (basically, a nerd).
            <br></br>
            <br></br>
            I moved to Munich for love and I fell in love with the city too.

          </p>

        </div>

        <div className="width-66 padding-x">

          <div className="first-photo">

            <img
              className="first-photo-img"
              alt="That's me in Munich Pride '22"
              src="foto1.png">
            </img>

            <img className="flecha" src="flecha.svg" alt="flecha"></img>

            <p className="first-photo-text contrast">
            That's me in<br></br>Munich Pride '22
            </p>

          </div>

          <div className="second-photo">

            <p className="second-photo-text contrast">
            I love Bretzen<br></br>(and Bier too)
            </p>

            <img
              className="second-photo-img"
              alt="A sunny day on the Olympiapark eating one bretzel, one schnitzel with french fries, one potato with quark and two beers"
              src="foto2.png">
            </img>

          </div>

        </div>

      </div>
    </section>
  );
}
