import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { Routes, Route } from "react-router-dom";




export default function App() {
  return (
    <main className="body-font">
      <About />
      <Projects />
      <Skills />
    </main>

  );
}

