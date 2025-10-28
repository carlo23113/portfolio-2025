"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-32 relative bg-black overflow-hidden"
    >
      {/* Parallax background element */}
      <motion.div
        style={{ y }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20">
            <div className="text-sm tracking-[0.3em] uppercase text-gray-600 font-light mb-4">
              About Me
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Who I Am
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Decorative element */}
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white via-gray-500 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                style={{ transformOrigin: "top" }}
              />

              <div className="relative pl-8 space-y-6">
                {[
                  "Hello! I'm Jan Carlo Espiritu, a Senior Frontend Web Developer with a strong foundation in creating beautiful, performant, and user-friendly web applications.",
                  "I specialize in modern frontend technologies like Vue.js, Nuxt.js, and TypeScript, while also having comprehensive knowledge of backend development and full-stack architectures.",
                  "My goal is to bridge the gap between design and functionality, creating seamless digital experiences that users love and businesses value."
                ].map((text, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                    className="text-gray-400 text-lg leading-loose font-light relative group"
                  >
                    <motion.span
                      className="absolute -left-8 top-0 w-4 h-4 border border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {text.split(" ").map((word, wordIdx) => {
                      const highlightWords = [
                        "Jan",
                        "Carlo",
                        "Espiritu,",
                        "Vue.js,",
                        "Nuxt.js,",
                        "TypeScript,"
                      ];
                      const isHighlight = highlightWords.includes(word);
                      return (
                        <motion.span
                          key={wordIdx}
                          className={
                            isHighlight ? "text-white font-normal" : ""
                          }
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{
                            delay: 0.5 + idx * 0.1 + wordIdx * 0.02
                          }}
                        >
                          {word}{" "}
                        </motion.span>
                      );
                    })}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  num: "01",
                  title: "Frontend Development",
                  desc: "Expert in Vue.js, Nuxt.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks"
                },
                {
                  num: "02",
                  title: "Backend Development",
                  desc: "Understanding of PHP, Laravel, databases, APIs, and server-side architecture"
                },
                {
                  num: "03",
                  title: "UI/UX Focus",
                  desc: "Creating intuitive, accessible, and visually appealing user interfaces"
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                  className="group cursor-default"
                >
                  <div className="flex items-start gap-6 p-8 border border-gray-800 hover:border-white transition-all duration-500 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <div className="text-4xl relative z-10 group-hover:text-gray-800 transition-colors duration-500">
                      {item.num}
                    </div>
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-800 transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
