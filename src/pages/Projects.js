import React from "react";

const projects = [
  {
    title: "OwlJudge App",
    description: "Event scoring app with real-time synchronization using Firebase.",
    image: "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png", // Replace with actual screenshot for iMac
    live: "https://owljudge.example.com", // Link to live project
    repo: "https://github.com/yourusername/owljudge", // Link to GitHub repo
    mockup: "imac", // Use "imac" to indicate iMac layout
  },
  {
    title: "Owl Books",
    description: "React-based project management tool with real-time collaboration.",
    image: "https://your-image-url-here.png",
    live: "https://owlbooks.example.com",
    repo: "https://github.com/yourusername/owlbooks",
    mockup: "iphone", // Use "iphone" to indicate iPhone layout
  },
  {
    title: "ClosetApp",
    description: "Wardrobe management app with a user-friendly interface.",
    image: "https://your-image-url-here.png",
    live: "https://closetapp.example.com",
    repo: "https://github.com/yourusername/closetapp",
    mockup: "iphone",
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
              className="flex flex-col items-center justify-center space-y-4"
            >
              {/* Dynamic Mockup */}
              {project.mockup === "iphone" ? (
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[272px] h-[572px]"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {/* iMac Mockup */}
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                  <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                </div>
              )}

              {/* Project Details */}
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  Live Project
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
