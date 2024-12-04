import React from "react";

const projects = [
  {
    title: "OwlJudge App",
    description: "Event scoring app with real-time synchronization using Firebase.",
    image: "https://via.placeholder.com/300x640", // Replace with your project screenshot URL
    link: "#", // Add link to live project or GitHub
  },
  {
    title: "Owl Books",
    description: "React-based project management tool with real-time collaboration.",
    image: "https://via.placeholder.com/300x640", // Replace with your project screenshot URL
    link: "#", // Add link to live project or GitHub
  },
  {
    title: "ClosetApp",
    description: "Wardrobe management app with a user-friendly interface.",
    image: "https://via.placeholder.com/300x640", // Replace with your project screenshot URL
    link: "#", // Add link to live project or GitHub
  },
];

const Projects = () => {
  return (
    <div className="bg-white text-primary py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-lg"
            >
              {/* iPhone Emulator */}
              <div className="iphone-frame">
                <div className="iphone-screen">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="iphone-notch"></div>
                <div className="iphone-camera"></div>
                <div className="iphone-home-button"></div>
              </div>

              {/* Project Title and Description */}
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-accent underline hover:text-blue-600"
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
