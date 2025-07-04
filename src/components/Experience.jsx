import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Java Developer Intern",
    company: "Oasis Infobyte",
    duration: "1 Month",
    description: "Worked on Java-based programming tasks and implemented mini-projects focused on object-oriented principles and file handling.",
    certificateLink: "https://drive.google.com/file/d/1sM8-YSKr9Z7zOLqpniJ9Rf7S__I73l_a/view?usp=sharing"
  },
  {
    title: "Web Developer Intern",
    company: "Codsoft",
    duration: "1 Month",
    description: "Built responsive web pages using HTML, CSS, JavaScript. Integrated basic forms and handled client-side validation and DOM manipulation.",
    certificateLink: "https://drive.google.com/file/d/1mOY--DuVgUG_pfw4PU8IACGkoXpcTIus/view?usp=sharing"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-blue-400">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-800">{exp.title}</h3>
              <p className="text-sm md:text-lg font-semibold text-purple-800">{exp.company} ({exp.duration})</p>
              <p className="text-sm font-semibold md:text-lg text-gray-600 mt-2">{exp.description}</p>
              <a href={exp.certificateLink} target="_blank"  className="text-sm md:text-lg font-semibold border-2 border-amber-500 rounded-4xl p-2 text-orange-600 hover:bg-orange-500 hover:text-white mt-2 inline-block">
                View Certificate ↗
              </a>
              
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
