// App.jsx (Main One-Page Portfolio Layout)
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-w-full ">
      <Navbar />
      <main className=" scroll-smooth overflow-y-auto">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
