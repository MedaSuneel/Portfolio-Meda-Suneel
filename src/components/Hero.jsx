import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-200 to-purple-200"
    >
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-indigo-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Hi, I'm <span className="text-purple-600">Suneel</span>
      </motion.h1>

      <motion.div
        className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-blue-500 to-green-900 bg-clip-text text-transparent font-bold md:text-2xl">Aspiring 
          <span className="text-indigo-700 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "ML Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </span>
        </span>
      </motion.div>

      

      <motion.div
        className="mt-12 animate-bounce text-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowDown size={20} />
      </motion.div>
    </section>
  );
}
