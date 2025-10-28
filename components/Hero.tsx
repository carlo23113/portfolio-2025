"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated vignette */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.1, 0.03],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.06, 0.02],
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.01, 0.04, 0.01],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <div className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-500 font-light mb-4">
              Frontend Developer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
          >
            <motion.span
              className="text-white leading-none block overflow-hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block">Jan Carlo</span>
            </motion.span>
            <motion.span
              className="text-white leading-none block overflow-hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block">Espiritu</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Crafting beautiful, responsive web experiences with modern
            technologies. Specialized in Vue.js & Nuxt.js, with expertise in
            full-stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-10 py-5 bg-white rounded-none font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <span className="relative z-20 text-black transition-colors duration-400">
                View My Work
              </span>
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-10 py-5 border-2 border-white rounded-none text-white font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                whileHover={{ clipPath: "circle(150% at 50% 50%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ backgroundColor: "#fff" }}
              />
              <span className="relative z-10 transition-colors duration-500">
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
