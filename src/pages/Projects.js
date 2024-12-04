import React from "react";

const Projects = () => {
  return (
    <div className="bg-primary text-secondary py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-secondary text-primary p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Project Title</h3>
              <p className="mt-2">Short description of the project.</p>
              <a
                href="#"
                className="text-accent mt-4 inline-block underline hover:text-primary"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;
