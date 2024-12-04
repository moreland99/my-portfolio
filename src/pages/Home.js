import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <img
        src="/profile.jpg"
        alt="Your Name"
        className="rounded-full w-40 h-40 mb-4"
      />
      <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="text-xl mt-2">
        A Junior Software Engineer passionate about impactful technology.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/projects"
          className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-500 hover:text-white transition"
        >
          View My Projects
        </a>
        <a
          href="/resume"
          className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-500 hover:text-white transition"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
