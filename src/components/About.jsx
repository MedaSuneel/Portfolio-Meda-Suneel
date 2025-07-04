import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen  px-6 py-20 bg-indigo-100 flex items-center justify-center">
      <motion.div
        className="bg-white max-w-6xl w-full p-8 rounded-2xl shadow-xl text-center transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-blue-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Me</h2>
        <p className="text-md md:text-xl md:font-semibold text-black leading-relaxed">
          I'm a passionate B.Tech Computer Science Engineering student from VVIT (2022–2026) with a CGPA of 9.0. I enjoy full-stack development,
          crafting clean UI/UX experiences, and solving real-world problems using modern technologies. My journey includes building feature-rich web applications
          with React, Firebase, Tailwind CSS, and backend integrations using PHP and MySQL. I am an active participant in tech events and competitions and love to
          build community-driven projects that make an impact.
        </p>
      </motion.div>
    </section>
  );
}
