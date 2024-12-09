import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
