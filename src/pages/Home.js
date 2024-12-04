import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-accent">Moreland Walthour</span>.
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Aspiring Senior Software Engineer specializing in <strong>Web Development</strong>, <strong>Product Design</strong>, and <strong>API Integration</strong>.
      </motion.p>
      <motion.div
        className="mt-6 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <a
          href="/projects"
          className="text-accent border-2 border-accent px-6 py-3 rounded-full hover:bg-accent hover:text-white transition"
        >
          View My Work
        </a>
        <a
          href="/resume"
          className="text-white border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-500 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
