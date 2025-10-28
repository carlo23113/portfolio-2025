"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-gray-600 to-gray-700",
    skills: [
      { name: "Vue.js", level: 95 },
      { name: "Nuxt.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 98 }
    ]
  },
  {
    title: "Backend & Full Stack",
    color: "from-gray-600 to-gray-700",
    skills: [
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 75 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "SQL", level: 70 },
      { name: "Git", level: 90 }
    ]
  },
  {
    title: "Tools & Others",
    color: "from-gray-600 to-gray-700",
    skills: [
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Contentful", level: 95 },
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 85 },
      { name: "Accessibility", level: 85 }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-32 relative bg-black overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.03 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.02 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20">
            <div className="text-sm tracking-[0.3em] uppercase text-gray-600 font-light mb-4">
              My Expertise
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="space-y-8 group"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-white"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.6 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-gray-800 group-hover:border-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.08,
                        duration: 0.5
                      }}
                    >
                      <div className="flex justify-between items-baseline mb-3 group cursor-default">
                        <span className="text-white font-light text-lg group-hover:text-gray-400 transition-colors">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-gray-600 text-sm font-light tabular-nums"
                          initial={{ opacity: 0 }}
                          animate={
                            isInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                            duration: 0.3
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-[2px] bg-gray-900 overflow-hidden relative rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }}
                          className="h-full bg-gradient-to-r from-gray-500 via-white to-gray-500 relative rounded-full"
                        >
                          <motion.div
                            className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white to-transparent"
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              x: [-10, 0, -10]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
