import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaPhp, FaFigma, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase,SiVercel, SiPostman, SiGithubpages  } from "react-icons/si";
import { BsFillPaletteFill } from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-purple-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "Firebase DB", icon: <SiFirebase className="text-yellow-500" /> }
    ]
  },
  {
    title: "Design &  Hosting",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
      { name: "Canva", icon: <BsFillPaletteFill className="text-violet-500" /> },
      { name: "GitHub Pages", icon: <SiGithubpages className="text-gray-800\" /> },
      { name: "Firebase Hosting", icon: <SiFirebase className="text-yellow-500\" /> }, 
      { name: "Vercel", icon: <SiVercel className="text-black" /> }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> }

    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-indigo-200">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-10 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-purple-50 p-6 rounded-xl shadow transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-blue-400">
              <h3 className="text-xl font-semibold text-indigo-800 mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-3 gap-6 place-items-center">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-2">
                    <div className="text-5xl md:text-6xl ">{skill.icon}</div>
                    <span className="text-md font-semibold text-gray-900">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
