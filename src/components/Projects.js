import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SwishLens",
      description:
        "A React Native app that leverages an NBA API to display real-time player stats. It features a sleek, intuitive design and integrates Firebase for smooth functionality and performance.",
      image: require("../assets/images/SLprofile.png"),
      live: "https://live-swishlens.com", // Replace with live demo URL
      repo: "https://github.com/yourusername/swishlens", // Replace with GitHub repo URL
    },
    {
      id: 2,
      title: "ClosetApp",
      description:
        "A virtual closet organizer that allows users to take pictures of clothing, automatically remove the background, and categorize the items. The app also lets users randomize clothing categories to create outfits effortlessly.",
      image: require("../assets/images/SLprofile.png"),
      live: "https://live-closetapp.com", // Replace with live demo URL
      repo: "https://github.com/yourusername/closetapp", // Replace with GitHub repo URL
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto mb-8">
              <div className="relative mx-auto border-gray-700 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-lg">
                <div className="w-[100px] h-[15px] bg-gray-800 top-0 rounded-b-[0.5rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Live Project
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
                >
                  View Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
