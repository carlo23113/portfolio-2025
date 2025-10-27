"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Hello! I&apos;m{" "}
                    <span className="text-white font-semibold">
                      Jan Carlo Espiritu
                    </span>
                    , a Senior Frontend Web Developer with a strong foundation
                    in creating beautiful, performant, and user-friendly web
                    applications.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I specialize in modern frontend technologies like{" "}
                    <span className="text-blue-400">Vue.js</span>,
                    <span className="text-purple-400"> Nuxt.js</span>, and{" "}
                    <span className="text-cyan-400">TypeScript</span>, while
                    also having comprehensive knowledge of backend development
                    and full-stack architectures.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My goal is to bridge the gap between design and
                    functionality, creating seamless digital experiences that
                    users love and businesses value.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Frontend Development
                  </h3>
                </div>
                <p className="text-gray-400">
                  Expert in Vue.js, Nuxt.js, TypeScript, Tailwind CSS, and
                  modern JavaScript frameworks
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend Knowledge
                  </h3>
                </div>
                <p className="text-gray-400">
                  Understanding of PHP, Laravel, databases, APIs, and
                  server-side architecture
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    UI/UX Focus
                  </h3>
                </div>
                <p className="text-gray-400">
                  Creating intuitive, accessible, and visually appealing user
                  interfaces
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
