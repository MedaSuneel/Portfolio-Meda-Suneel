import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-200 h-full font-sans w-[100%] overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-700">Meda Suneel</h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 cursor-pointer ">
          <a href="#about" className="hover:text-indigo-600  ">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#experience" className="hover:text-indigo-600">Experience</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm Suneel 👋
        </motion.h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-800 max-w-2xl">
          Full-Stack Developer | Passionate about UI Design & Real-world Tech Solutions
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform">
            <h4 className="text-lg font-semibold text-indigo-700">Languages</h4>
            <p className="text-sm text-gray-600 mt-2">C, Java, Python</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform">
            <h4 className="text-lg font-semibold text-indigo-700">Frontend</h4>
            <p className="text-sm text-gray-600 mt-2">HTML, CSS, JavaScript, ReactJS, Tailwind CSS</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform">
            <h4 className="text-lg font-semibold text-indigo-700">Backend</h4>
            <p className="text-sm text-gray-600 mt-2">PHP, Firebase, MySQL, Tomcat (XAMPP)</p>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="px-6 py-16">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6">About Me</h3>
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto text-gray-800">
          <p>
            I’m a B.Tech CSE student at VVIT with a CGPA of 9.0, passionate about full-stack development and building software that solves real-world problems. I’ve built impactful web apps like Teacher’s Diary and Wealth Map, and enjoy working with modern tools like React, Firebase, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 py-20 min-h-screen bg-indigo-50 flex items-center">
        <div className="w-full max-w-6xl mx-auto">
            <h3 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">Projects</h3>
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between transition duration-300">
                <div>
                    <h4 className="text-2xl font-bold mb-2 text-indigo-800">Teacher's Diary</h4>
                    <p className="text-md text-gray-700 leading-relaxed mb-4">
                    A full-stack classroom management tool designed for teachers to organize timetables, notes, attendance, syllabus, and student performance records. Tailored for up to 70 students using HTML, CSS, JS, PHP, and MySQL. Ensures simplified academic tracking and classroom efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">HTML</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">CSS</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">JavaScript</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">PHP</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">MySQL</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://medasuneel-teachersdiary.netlify.app" target="_blank" className="text-indigo-600 text-sm font-medium hover:underline">Live Demo ↗</a>
                    <a href="https://github.com/MedaSuneel/teachers-diary" target="_blank" className="text-sm text-gray-500 hover:text-indigo-600">GitHub ↗</a>
                </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between transition duration-300">
                <div>
                    <h4 className="text-2xl font-bold mb-2 text-indigo-800">Wealth Map</h4>
                    <p className="text-md text-gray-700 leading-relaxed mb-4">
                    A React + Firebase application designed to promote financial literacy. Users can set savings goals, track expenses, and learn money management. Developed for the FuelEd & Fountane Challenge and ranked among the Top 50 submissions nationwide.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">React</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">Firebase</span>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">Tailwind CSS</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <a href="https://medasuneel-wealthmap.netlify.app" target="_blank" className="text-indigo-600 text-sm font-medium hover:underline">Live Demo ↗</a>
                    <a href="https://github.com/MedaSuneel/wealth-map" target="_blank" className="text-sm text-gray-500 hover:text-indigo-600">GitHub ↗</a>
                </div>
                </motion.div>
            </div>
        </div>
    </section>


      {/* Experience Section */}
      <section id="experience" className="px-6 py-16">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6">Experience</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h4 className="text-lg font-semibold text-indigo-800">Java Developer Intern</h4>
            <p className="text-sm text-gray-600">Oasis Infobyte | 1 Month Internship</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h4 className="text-lg font-semibold text-indigo-800">Web Developer Intern</h4>
            <p className="text-sm text-gray-600">Codsoft | 1 Month Internship</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen px-6 py-20 bg-indigo-50 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Certifications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Problem Solving (Python) – CodeTantra</li>
            <li>Java Programming – edX, NPTEL</li>
            <li>Web Development – edX, Infosys Springboard</li>
            <li>ReactJS – Infosys Springboard</li>
            <li>Git & GitHub – edX</li>
            <li>DSA (Java) – NPTEL</li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen px-6 py-20 bg-white flex items-center justify-center">
        <div className="max-w-3xl w-full bg-indigo-50 p-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Achievements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Top 50 Participant – FuelEd & Fountane Wealth Map Challenge 2025</li>
            <li>Member – Chairman’s Club (Topper)</li>
            <li>Former Technical Head – IUCEE @ VVIT</li>
            <li>Bronze Medal – 1st Year Academic Excellence (2023)</li>
            <li>Silver Medal – 2nd Year Academic Excellence (2024)</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-indigo-100">
        <h3 className="text-3xl font-bold text-indigo-800 mb-10 text-center">Contact</h3>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center text-center">
          <a href="mailto:suneelmeda123@gmail.com" className="text-gray-700 hover:text-indigo-700 flex items-center gap-2 text-lg">
            <MdEmail className="text-2xl" /> suneelmeda123@gmail.com
          </a>
          <a href="https://github.com/MedaSuneel" target="_blank" className="text-gray-700 hover:text-indigo-700 flex items-center gap-2 text-lg">
            <FaGithub className="text-2xl" /> GitHub
          </a>
          <a href="https://linkedin.com/in/meda-suneel-ba4984269" target="_blank" className="text-gray-700 hover:text-indigo-700 flex items-center gap-2 text-lg">
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6">
        &copy; {new Date().getFullYear()} Meda Suneel. Built with React + Tailwind CSS + Framer Motion.
      </footer>
    </div>
  );
}
