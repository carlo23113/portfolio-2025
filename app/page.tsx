import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Jan Carlo Espiritu | Senior Frontend Developer Portfolio",
  description:
    "Portfolio of Jan Carlo Espiritu, Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript. View my projects and get in touch."
};

export default function Home() {
  return (
    <>
      {/* Hidden semantic HTML for crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h1>Jan Carlo Espiritu - Senior Frontend Developer</h1>
        <p>
          Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js,
          React, Next.js, and TypeScript. Building beautiful, responsive web
          applications with modern technologies.
        </p>
        <h2>About Me</h2>
        <p>
          Passionate Senior Frontend Developer with expertise in Vue.js ecosystem
          and modern JavaScript frameworks. Experienced in building scalable web
          applications and SaaS platforms.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Vue.js and Nuxt.js</li>
          <li>React and Next.js</li>
          <li>TypeScript and JavaScript</li>
          <li>Tailwind CSS and Vuetify</li>
          <li>Full Stack Development</li>
        </ul>
        <h2>Projects</h2>
        <ul>
          <li>Vehicle Rental Management SaaS</li>
          <li>Winona - Telemedicine Platform</li>
          <li>Casa Del Mar Haven - Resort Website</li>
        </ul>
        <h2>Contact</h2>
        <p>Get in touch for collaboration opportunities.</p>
      </div>

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
