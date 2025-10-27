"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Vehicle Rental Management SaaS",
    description:
      "Multi-tenant platform for managing vehicle rental businesses with fleet tracking, customer management, analytics, dashboard, and automated contract generation.",
    tech: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind", "Vuetify"],
    color: "from-blue-500 to-cyan-500",
    icon: "🚗",
    liveUrl: "https://vehicle-rental-iota.vercel.app"
  },
  {
    title: "Winona",
    description:
      "Marketing website for a telemedicine company offering menopause care solutions. Features interactive health quizzes, symptom trackers, educational content, and product showcases. Built with Nuxt 3, Vue 3, TypeScript, and integrated with Contentful CMS for dynamic content management.",
    tech: [
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "Tailwind",
      "Contentful",
      "Figma",
      "GraphQL"
    ],
    color: "from-purple-500 to-pink-500",
    icon: "💊",
    liveUrl: "https://bywinona.com"
  },
  {
    title: "UAU Fatherhood Matters",
    description:
      "Built a responsive and user-friendly website for UAU Fatherhood Matters using HTML, CSS and Javascript. The platform showcases program information, upcoming events, and success stories, while providing an intuitive online application system to help fathers easily join the program and stay engaged with the community.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-orange-500 to-red-500",
    icon: "👨‍👧‍👦",
    liveUrl: "https://uaufatherhoodmatters.com/"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-6xl mb-4">{project.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-sm rounded-full text-gray-300 border border-gray-700`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          project.githubUrl ? "flex-1" : "w-full"
                        } px-4 py-2 bg-gradient-to-r ${
                          project.color
                        } rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-center`}
                      >
                        View Project
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300"
                          aria-label="View on GitHub"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
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
