import React from "react";

const Resume = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">Resume</h1>
      <p className="text-lg mt-4">
        Download my resume for more details.
      </p>
      <a href="/resume.pdf" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
