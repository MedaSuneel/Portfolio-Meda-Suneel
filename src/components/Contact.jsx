import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-indigo-100 flex items-center justify-center">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-indigo-800 mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          I'm always open to collaborations, opportunities, or just a friendly hello.
          Feel free to reach out to me through any of the platforms below:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
          <a
            href="mailto:suneelmeda123@gmail.com"
            className="flex items-center gap-2 text-indigo-700 hover:underline"
          >
            <MdEmail className="text-xl" /> suneelmeda123@gmail.com
          </a>
          <a
            href="https://github.com/MedaSuneel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-700 hover:underline"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/meda-suneel-ba4984269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-700 hover:underline"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
