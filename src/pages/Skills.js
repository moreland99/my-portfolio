import React from "react";

const Skills = () => {
  return (
    <div className="bg-secondary text-primary py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {["React", "Node.js", "TailwindCSS", "JavaScript"].map((skill) => (
            <div
              key={skill}
              className="p-4 bg-primary text-secondary rounded-lg text-center shadow hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills;
