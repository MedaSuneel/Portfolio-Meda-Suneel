import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaStar, FaTrophy, FaMedal, FaCrown } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-500 text-4xl" />, 
    title: "Top 50 Participant",
    subtitle: "Ranked among the Top 50 Participants, FuelEd and Fountane Wealth Map Challenge 2025 – Received branded merchandise for outstanding performance."
  },
  
  {
    icon: <FaStar className="text-purple-500 text-4xl" />, 
    title: "Former Technical Head",
    subtitle: "IUCEE @ VVIT – Led technical initiatives and mentored peers in tech-based student programs."
  },
  {
    icon: <FaCrown className="text-indigo-600 text-4xl" />, 
    title: "Chairman’s Club Member",
    subtitle: "Recognized among academic toppers for consistent high performance."
  },
  {
    icon: <FaMedal className="text-gray-500 text-4xl" />, 
    title: "Silver Medal, Academic Excellence",
    subtitle: "Awarded for top performance in 2nd Year (2024)."
  },
  {
    icon: <FaMedal className="text-amber-600 text-4xl" />, 
    title: "Bronze Medal, Academic Excellence",
    subtitle: "Awarded for top performance in 1st Year (2023)."
  },
  
];

export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen px-6 py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-10 text-center">Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-blue-400">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
