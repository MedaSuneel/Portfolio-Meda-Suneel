import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Teacher's Diary",
    description:
      "A web platform designed to help teachers efficiently manage class schedules, attendance records, academic notes, and student performance in one centralized system. It streamlines daily tasks and enhances classroom organization for educators.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    live: "https://www.linkedin.com/posts/meda-suneel-ba4984269_webdevelopment-firstproject-teacherdiary-activity-7296431496821620736-GHc6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHRZawBEGS7IqHLm-PGIYPEaYtXK9NbfDA",
    github: "https://github.com/MedaSuneel/Teachers_Diary",
  },
  {
    title: "Wealth Map",
    description:
      "A property management platform with an interactive U.S. map that lets employees and admins explore and manage properties by hovering over locations and filtering by property type and city.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    live: "https://www.linkedin.com/posts/meda-suneel-ba4984269_wealthmap-fueled-fountane-activity-7342519113178632192-XHm7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHRZawBEGS7IqHLm-PGIYPEaYtXK9NbfDA",
    github: "https://github.com/MedaSuneel/wealth-map",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-purple-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-indigo-50 rounded-2xl shadow-xl p-6 text-left flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-blue-400"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-indigo-800 mb-2">{project.title}</h3>
                <p className="text-sm md:text-lg font-semibold text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-indigo-200 text-indigo-600 text-xs md:text-lg font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg text-indigo-600 hover:underline font-medium"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg text-gray-800 hover:text-indigo-600 hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
