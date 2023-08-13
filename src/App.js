import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<About/>} />
        <Route path = "/projects" element = {<Projects />}/>
        <Route path = "/skills" element = {<Skills />}/>
      </Routes>
    </main>

  );
}

