import React from "react";

const Home = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center bg-primary text-secondary">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-accent">Moreland Walthour</span>.
        </h1>
        <p className="text-xl md:text-2xl mt-4">
          I design & develop exceptional websites and applications.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/projects"
            className="text-accent border-2 border-accent px-6 py-3 rounded-full hover:bg-accent hover:text-white transition"
          >
            My Work
          </a>
          <a
            href="/contact"
            className="text-secondary border-2 border-secondary px-6 py-3 rounded-full hover:bg-secondary hover:text-primary transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    );
  };
  

export default Home;
