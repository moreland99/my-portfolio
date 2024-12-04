import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink } from "react-router-dom"; // For routing

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 py-4 shadow-lg">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
