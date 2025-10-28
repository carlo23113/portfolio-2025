"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <PageTransition />
      <main className="relative cursor-none">
        <CustomCursor />
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
    </>
  );
}
