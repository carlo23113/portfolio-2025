"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring
} from "framer-motion";
import { useRef, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Mouse parallax effect
  const mouseX = useSpring(0, { stiffness: 300, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 50 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-2deg", "2deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Split text into characters for animation
  const name1 = "Jan Carlo".split("");
  const name2 = "Espiritu".split("");

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      style={{ perspective: "1500px" }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating particles */}
      <FloatingParticles />

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
        style={{ opacity, scale, rotateX, rotateY }}
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
            <div className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-500 font-light mb-4 overflow-hidden">
              {[
                "S",
                "E",
                "N",
                "I",
                "O",
                "R",
                " ",
                "F",
                "R",
                "O",
                "N",
                "T",
                "E",
                "N",
                "D",
                " ",
                "D",
                "E",
                "V",
                "E",
                "L",
                "O",
                "P",
                "E",
                "R"
              ].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.02, duration: 0.3 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight relative"
          >
            {/* Background text shadow effect */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-5 blur-sm pointer-events-none">
              <div className="text-white leading-none">Jan Carlo</div>
              <div className="text-white leading-none">Espiritu</div>
            </div>

            {/* First line with character reveal */}
            <motion.span className="text-white leading-none block overflow-hidden relative">
              <span className="inline-block">
                {name1.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.05,
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block origin-bottom hover:text-gray-400 transition-colors cursor-default"
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.span>

            {/* Second line with character reveal */}
            <motion.span className="text-white leading-none block overflow-hidden relative">
              <span className="inline-block">
                {name2.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.9 + i * 0.05,
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block origin-bottom hover:text-gray-400 transition-colors cursor-default"
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.span>
          </motion.h1>

          <motion.p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light">
            {[
              "Crafting",
              "beautiful,",
              "responsive",
              "web",
              "experiences",
              "with",
              "modern",
              "technologies.",
              "Specialized",
              "in",
              "Vue.js",
              "&",
              "Nuxt.js,",
              "with",
              "expertise",
              "in",
              "full-stack",
              "development."
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 1.3 + i * 0.05,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
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

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div className="text-xs uppercase tracking-[0.3em] text-gray-600 font-light">
          {["S", "C", "R", "O", "L", "L"].map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.05, duration: 0.3 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="relative w-[1px] h-16">
          {/* Animated traveling dot */}
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[0.5px]"
            style={{ left: "-1.5px" }}
          />
          {/* Static line */}
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
