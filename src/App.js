import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import WebPortfolio from "./components/WebPortfolio";
import DesignPortfolio from "./components/DesignPortfolio";
import Services from "./components/Services";
import './css/App.css';
import './css/Intro.css';
import './css/Viewer.css';
import './css/WebPortfolio.css';
import './css/DesignPortfolio.css';

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
