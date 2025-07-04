import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Structures and Algorithms in Java",
    provider: "NPTEL",
    duration: "2024",
    description: "Studied fundamental data structures and algorithms with real-world applications in Java.",
    link: "https://drive.google.com/file/d/1fekNFXKQz9EjD8LMvzRYBPDYW1btRDBH/view?usp=sharing"
  },
  {
    title: "Problem Solving using Python",
    provider: "CodeTantra",
    duration: "2023",
    description: "Developed logical reasoning and coding techniques for problem-solving using Python.",
    link: "https://drive.google.com/file/d/1C9MBXJWNQLex2M2s15nTHUU-DjHJci85/view?usp=sharing"
  },
  {
    title: "Programming in Java",
    provider: "edX, NPTEL",
    duration: "2023",
    description: "Explored object-oriented concepts, syntax, and core principles in Java programming.",
    link: "https://drive.google.com/file/d/1zCbnBZi_dcIzazoOUKncpcxV3xt5rCrr/view?usp=sharing"
  },
  {
    title: "Web Development (HTML, CSS, JavaScript)",
    provider: "edX, Infosys Springboard",
    duration: "2023",
    description: "Built interactive websites using modern frontend technologies and design principles.",
    link: "https://courses.edx.org/certificates/7219958868b444a7b198cd43c07b5742"
  },
  {
    title: "ReactJS",
    provider: "Infosys Springboard",
    duration: "2024",
    description: "Developed reusable UI components and managed application state using ReactJS.",
    link: "https://drive.google.com/file/d/1Q3ehFKLsccfyeJ1Q13F-zyaZgqycn53_/view?usp=sharing"
  },
  {
    title: "Git & GitHub",
    provider: "edX",
    duration: "2023",
    description: "Learned version control and collaborative workflows with Git and GitHub.",
    link: "https://courses.edx.org/certificates/912183a5aec74503bae2451142de10d3"
  },
  {
    title: "Database and SQL",
    provider: "Infosys Springboard",
    duration: "2023",
    description: "Mastered relational database concepts and performed queries using SQL.",
    link: "https://drive.google.com/file/d/1OMTjEga8ui_A7OqvppsLLJeiA6jZdYL2/view?usp=sharing"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    provider: "Postman",
    duration: "2024",
    description: "Acquired skills in API testing, automation, and collaboration using Postman.",
    link: "https://drive.google.com/file/d/1t6iwNEdSuybw9dCfwKWh3yazjtQGo2EX/view?usp=sharing"
  },
  {
    title: "UI/UX Design with Figma",
    provider: "Infosys Springboard",
    duration: "2024",
    description: "Learned to design intuitive user interfaces and create interactive prototypes in Figma.",
    link: "https://drive.google.com/file/d/1w_vQoi4hxqUyphLXfLuCSm3N-RBlSzo2/view?usp=drive_link"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 py-20 bg-purple-100">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-indigo-800 mb-10 text-center">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-blue-400"
            >
              <div >
                <h3 className="text-lg font-semibold text-indigo-800 mb-1">{cert.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-md font-semibold text-purple-600  ">{cert.provider}</p>
                  <p className="text-sm font-semibold text-gray-500 ">{cert.duration}</p>
                </div>
                <p className="text-md font-semibold text-gray-700 mb-4 leading-snug line-clamp-2">{cert.description}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-white bg-purple-700 hover:bg-purple-900 px-4 py-2 rounded-md text-center w-fit"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
