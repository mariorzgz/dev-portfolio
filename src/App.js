import React from "react";
import { useRef, useEffect } from "react";

import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import WebPortfolio from "./components/WebPortfolio";
import DesignPortfolio from "./components/DesignPortfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import CookieConsent from "react-cookie-consent";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './css/App.css';
import './css/Intro.css';
import './css/Viewer.css';
import './css/WebPortfolio.css';
import './css/DesignPortfolio.css';
import './css/About.css';
import './css/Contact.css';
import './css/Services.css';
import './css/MediaQueries.css';
import "./css/Loader.css";
// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

function App() {

  const body = useRef(null);

  /* Scroll Animation */

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const element = body.current;

    const contact = element.querySelector("#contact");
    const footer = element.querySelector("#footer");

    const links = element.querySelectorAll("#contact a, #footer a, #scrollTop")


    gsap.set(element, {
      backgroundColor: '#FFF3E2',
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
    .to(element, { duration: 1, backgroundColor: '#000000', ease: "none" }, 0)
    .to(footer, { duration: 1, color: "#ffffff", ease: "none" }, 0)
    .to(contact, { duration: 1, color: "#ffffff", ease: "none" }, 0)
    .to(links, { duration: 1, color: "#ffffff", ease: "none" }, 0)

  });

  /* Cursor Effects */

  useEffect(() => {

    const element = body.current;

    const cursor = element.querySelector(".cursor");

    const cursorEnters = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "blue",
        mixBlendMode: "normal",
        color: "white"
      })
    }

    const cursorLeaves = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        mixBlendMode: "difference",
        color: "black"
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
    <main className="App body-bg" ref={body}>

      <div className="cursor">🙂</div>

      <CookieConsent
        location="none"
        buttonText="I understand"
        cookieName="CookieConsent"
        disableStyles={true}
        expires={150}
      >
        This website uses basic cookies to enhance the user experience.{" "}
      </CookieConsent>

      <Loader />

      <Navbar />
      <Intro />
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
