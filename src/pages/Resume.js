import React from "react";

const Resume = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">My Resume</h1>
      <a
        href="/resume.pdf"
        className="text-blue-500 underline"
        download
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
