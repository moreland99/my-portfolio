import React from "react";

const Resume = () => {
  return (
    <div className="bg-secondary text-primary py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Resume</h2>
        <embed
          src="/Resume2024.pdf" // Ensure the PDF is in the public folder
          className="w-full h-screen"
        />
        <a
          href="/Resume2024.pdf"
          download
          className="mt-8 inline-block bg-primary text-secondary px-6 py-3 rounded-full border border-primary hover:bg-secondary hover:text-primary transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
