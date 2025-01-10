import React from "react";

export default function About() {
  return (
    <section id="about" className="padding-top d-flex width-100">
      <div className="flex-small-half width-100 text padding">
        <h2>About me</h2>
        <p className="width-100">
          I've been living in Munich for 3 years. The first thing I did when I arrived here was a Ruby on Rails bootcamp with Le Wagon.
          <br/><br/>
          Prior to that, I was a Web Developer and Graphic Designer in Spain.
          <br/><br/>
          In my free time I love cooking and baking. Some other interests of mine are drawing, reading and learning about science.
        </p>
      </div>
      <div className="flex-big-half media width-100 align-items-center padding-bottom">
        <img src="images/portrait.webp" alt="A portrait of me standing in a field of tulips, in a sunny day."/>
      </div>
    </section>
  );
}
