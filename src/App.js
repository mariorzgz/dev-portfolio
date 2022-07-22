import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import WebPortfolio from "./components/WebPortfolio";
import DesignPortfolio from "./components/DesignPortfolio";
import Services from "./components/Services";
import './App.css';
import './Intro.css';
import './Viewer.css';
import './WebPortfolio.css';

function App() {
  return (
    <main className="body-bg">
      <Navbar />
      <Intro />
      <WebPortfolio />
      <DesignPortfolio />
      <About />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
