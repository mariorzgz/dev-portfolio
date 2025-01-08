import React from "react";
import { useRef, useEffect } from "react";

import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import WebPortfolio from "./components/WebPortfolio";
import Experience from "./components/Experience";
import DesignPortfolio from "./components/DesignPortfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/globals.css";
import './css/MediaQueries.css';

// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

function App() {

  const body = useRef(null);
  const color_dark = "#080708"
  const color_light = "#E6E8E6"
  const color_red = "#DF2935"
  const color_yellow = "#FDCA40"

  /* Scroll Animation */

  /*
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const color_dark = "#080708"
    const color_red = "#DF2935"
    const color_light = "#E6E8E6"

    const element = body.current;

    const contact = element.querySelector("#contact");
    const footer = element.querySelector("#footer");
    const links = element.querySelectorAll("#contact a, #footer a, #scrollTop")


    gsap.set(element, {
      backgroundColor: color_red,
    })

    const contactScroll = gsap.timeline({

        scrollTrigger: {
        trigger: "#contact",
        scrub: 3,
        start: "top center",
        end: "bottom bottom"

      }

    })

    contactScroll
    .to(element, { duration: 1, backgroundColor: color_dark, ease: "none" }, 0)
    .to(footer, { duration: 1, color: color_light, ease: "none" }, 0)
    .to(contact, { duration: 1, color: color_light, ease: "none" }, 0)
    .to(links, { duration: 1, color: color_light, ease: "none" }, 0)

  });
  */

  /* Cursor Effects */

  useEffect(() => {

    const element = body.current;

    const cursor = element.querySelector(".cursor");

    const cursorEnters = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: color_dark,
        mixBlendMode: "normal",
        color: color_light
      })
    }

    const cursorLeaves = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: color_light,
        /*mixBlendMode: "difference",*/
        color: color_dark
      })
    }

    document.body.style.cursor = 'none'

    gsap.set(cursor, { force3D: true });
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      gsap.to(cursor, {
        x: x - 16,
        y: y - 16,
        ease: "power3"
      });
    });


    document.body.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.1,
        ease: "none"
      });
    });

    document.body.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1,
        ease: "none"
      });
    });

    let hoverCursors = document.querySelectorAll('[data-cursor="hover"]');
    let closeCursors = document.querySelectorAll('[data-cursor="close"]');
    let clickCursors = document.querySelectorAll('[data-cursor="click"]');

    /*
    let munichCursor = document.querySelector('[data-cursor="munich"]');
    let spainCursor = document.querySelector('[data-cursor="spain"]');

    munichCursor.addEventListener("mouseenter", () => {
      cursorEnters()
      cursor.innerHTML = "🥨"
    });

    munichCursor.addEventListener("mouseleave", () => {
      cursorLeaves()
      cursor.innerHTML = "🙂"
    });

    spainCursor.addEventListener("mouseenter", () => {
      cursorEnters()
      cursor.innerHTML = "🍻"
    });

    spainCursor.addEventListener("mouseleave", () => {
      cursorLeaves()
      cursor.innerHTML = "🙂"
    });
    */

    hoverCursors.forEach(function (hoverCursor) {
      hoverCursor.addEventListener("mouseenter", () => {
        cursorEnters()
        cursor.innerHTML = "👁️"
      });

      hoverCursor.addEventListener("mouseleave", () => {
        cursorLeaves()
        cursor.innerHTML = "🙂"
      });
    });

    closeCursors.forEach(function (closeCursor) {
      closeCursor.addEventListener("mouseenter", () => {
        cursorEnters()
        cursor.innerHTML = "❌"
      });

      closeCursor.addEventListener("mouseleave", () => {
        cursorLeaves()
        cursor.innerHTML = "🙂"
      });
    });

    clickCursors.forEach(function (clickCursor) {
      clickCursor.addEventListener("mouseenter", () => {
        cursorEnters()
        cursor.innerHTML = "👌"
      });

      clickCursor.addEventListener("mouseleave", () => {
        cursorLeaves()
        cursor.innerHTML = "🙂"
      });
    });

  })

  /* Loading Screen */

  useEffect(() => {

    const body = document.querySelector("body");
    const loadingScreen = document.getElementById("loader");

    body.classList.add("no-scroll");

    setTimeout(loaded, 3000);

    function loaded() {
      body.classList.remove("no-scroll");
      loadingScreen.classList.add("loaded");
      loadingScreen.addEventListener("transitionend",() => {
        loadingScreen.remove();
      });
    }
  })

  return (
    <main className="" ref={body}>

      <div className="cursor">🙂</div>

      <Loader />

      <Navbar />
      <Intro />
      {/* <Experience /> */}
      <WebPortfolio />
      <DesignPortfolio />
      <About />
      <Services />
      <Contact />
      <Footer />

    </main>
  );

}

export default App;
