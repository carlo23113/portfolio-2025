"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Vehicle Rental Management SaaS",
    description:
      "Multi-tenant platform for managing vehicle rental businesses with fleet tracking, customer management, analytics, dashboard, and automated contract generation.",
    tech: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind", "Vuetify"],
    icon: "🚗",
    liveUrl: "https://vehicle-rental-iota.vercel.app",
    githubUrl: null
  },
  {
    title: "Portfolio Builder",
    description:
      "An online portfolio builder that allows users to create professional portfolios. Users can customize their portfolio, add projects and experience, and download the generated HTML for deployment on any hosting platform.",
    tech: ["Nuxt.js", "Vue.js", "Typescript", "Tailwind"],
    icon: "💼",
    liveUrl: "https://portfolio-builder.jancarloespiritu.com/",
    githubUrl: "https://github.com/carlo23113/portfolio-builder"
  },
  {
    title: "Casa Del Mar Haven",
    description:
      "A modern and inviting website designed for a private resort. It showcases the resort's amenities, accommodations, and booking details with a clean, user-friendly interface that highlights the relaxing seaside experience.",
    tech: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind"],
    icon: "🏖️",
    liveUrl: "https://casadelmar.jancarloespiritu.com/",
    githubUrl: "https://github.com/carlo23113/casa-del-mar-haven"
  },
  {
    title: "Weather Forecast",
    description:
      "A real-time weather forecast application integrated with OpenWeather API. Users can search for any city worldwide to view current weather conditions, temperature, humidity, wind speed, and a 5-day forecast with detailed weather information and dynamic weather icons.",
    tech: ["React", "JavaScript", "OpenWeather API", "CSS"],
    icon: "🌤️",
    liveUrl: "https://weather-forecast.jancarloespiritu.com/",
    githubUrl: "https://github.com/carlo23113/weather-forecast"
  },
  {
    title: "Code Editor",
    description:
      "An interactive online code editor that supports HTML, CSS, and JavaScript with real-time live preview. Features syntax highlighting, auto-completion, and instant rendering of code changes, providing a seamless development environment for quick prototyping and experimentation directly in the browser.",
    tech: ["React", "JavaScript", "CodeMirror", "CSS"],
    icon: "💻",
    liveUrl: "https://code-editor.jancarloespiritu.com/",
    githubUrl: "https://github.com/carlo23113/code-editor"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20 text-center md:text-left">
            <motion.div
              className="text-sm tracking-[0.3em] uppercase text-gray-600 font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Selected Work
            </motion.div>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Personal Projects
            </motion.h2>
            <motion.div
              className="mt-4 h-1 w-24 bg-white mx-auto md:mx-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative"
                whileHover={{
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card background */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 md:p-10 border border-gray-800 group-hover:border-white transition-all duration-500 overflow-hidden">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start relative z-10">
                  {/* Project Number & Icon */}
                  <motion.div
                    className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <motion.div
                      className="text-5xl md:text-6xl font-light text-gray-800 group-hover:text-white transition-colors duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      0{index + 1}
                    </motion.div>
                    <motion.div
                      className="text-4xl md:text-5xl"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {project.icon}
                    </motion.div>
                  </motion.div>

                  {/* Project Info */}
                  <motion.div
                    className="md:col-span-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  >
                    <motion.h3
                      className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-400 font-light leading-relaxed md:leading-loose mb-6 text-sm md:text-base"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            delay: index * 0.1 + 0.4 + techIdx * 0.05
                          }}
                          className="text-xs md:text-sm text-gray-500 font-light px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full hover:border-white hover:text-white transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <div className="md:col-span-4 flex flex-row md:flex-col gap-3 md:gap-4 md:items-end mt-4 md:mt-0">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-white relative px-4 py-2 border border-gray-800 rounded-lg hover:border-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-light text-sm md:text-base">View Project</span>
                        <motion.svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-white px-4 py-2 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
                        aria-label="View on GitHub"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-light text-sm md:text-base">GitHub</span>
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Want to see more?</p>
            <button className="px-8 py-3 border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all duration-300">
              View All Projects
            </button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
