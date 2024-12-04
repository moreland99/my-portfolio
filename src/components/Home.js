import React from "react";
import bitpfp from "../assets/images/bitpfp.png"; // Adjust the path based on your directory structure
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-6">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={bitpfp}
            alt="Profile Picture"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-2 -right-2 bg-blue-500 w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-gray-800 shadow-lg flex items-center justify-center"
          >
            <span className="text-white font-bold text-xl md:text-1xl">MW</span>
          </motion.div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-8"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-400">Moreland Walthour</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-300">
            I’m a Junior Software Engineer with a passion for creating innovative and impactful technology. Let's build something amazing together.
          </p>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex space-x-6 mt-8"
        >
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Floating Background Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-25"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-25"
      ></motion.div>
    </section>
  );
};

export default Home;