import React from "react";

const skills = [
  {
    category: "Front-end",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Back-end",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      },
      {
        name: "Illustrator",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-12">Skills</h2>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skills.map((group, index) => (
            <div key={index} className="space-y-10">
              {/* Category Title */}
              <h3 className="text-3xl font-semibold text-center text-gray-100">
                {group.category}
              </h3>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-20 h-20 mb-4"
                    />
                    <p className="text-xl font-medium text-gray-200">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h3 className="text-3xl font-extrabold text-gray-100 mb-6">
              How I Use My Skills
            </h3>
            <p className="text-lg text-gray-300">
              I combine my front-end skills, including JavaScript, React, and
              CSS3, to create dynamic and responsive user interfaces. On the
              back-end, I use Node.js and MongoDB to develop scalable and
              efficient server-side applications. My experience with Git ensures
              smooth collaboration and version control. Additionally, tools like
              Photoshop and Illustrator enable me to bring creative elements
              into my projects.
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Whether it's developing a complex web app or designing an
              intuitive interface, I bring a combination of technical expertise
              and creative problem-solving to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
