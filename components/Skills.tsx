"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`inline-block bg-gradient-to-r ${category.color} px-4 py-2 rounded-lg mb-6`}
                >
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
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
