import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll"; // For section scrolling
import Navbar from "./components/Navbar"; // Navigation bar
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails"; // Project details page

const App = () => {
  return (
    <Router>
      {/* Main Navbar */}
      <Navbar />
      <Routes>
        {/* Home Page with One-Page Scroll */}
        <Route
          path="/"
          element={
            <div>
              <Element name="home">
                <Home />
              </Element>
              <Element name="projects">
                <Projects />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
              <Element name="resume">
                <Resume />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </div>
          }
        />
        {/* Individual Project Details */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
