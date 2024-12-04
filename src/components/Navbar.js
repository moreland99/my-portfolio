import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};

<button
  onClick={toggleDarkMode}
  className="text-secondary ml-4 border border-secondary px-2 py-1 rounded"
>
  Toggle Dark Mode
</button>


export default Navbar;
