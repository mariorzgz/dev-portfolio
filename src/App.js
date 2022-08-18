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

import CookieConsent from "react-cookie-consent";


import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import './css/App.css';
import './css/Intro.css';
import './css/Viewer.css';
import './css/WebPortfolio.css';
import './css/DesignPortfolio.css';
import './css/About.css';
import './css/Contact.css';
import './css/Services.css';
import './css/MediaQueries.css';
// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

function App() {

  const body = useRef(null);

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

  });

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
