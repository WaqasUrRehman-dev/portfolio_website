import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-[#640D5F]">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
    </div>
  );
}
