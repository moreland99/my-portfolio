import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "SwishLens",
      description:
        "SwishLens is a React Native app leveraging an NBA API to display real-time player stats.",
      image: require("../assets/images/SLprofile.png"),
    },
    {
      id: 2,
      title: "ClosetApp",
      description:
        "ClosetApp is a virtual closet organizer that allows users to take pictures of clothing, organize them, and create outfits.",
      image: require("../assets/images/SLprofile.png"),
    },
  ];

  const project = projects.find((proj) => proj.id === parseInt(id));

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-lg text-gray-300">{project.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
