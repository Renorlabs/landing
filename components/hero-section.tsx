"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { ExpressionDot } from "@/components/ui/expression-dot"

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const words = ["faster", "stable", "sleeky", "robust"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background grid-pattern-light">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[20vw] font-black tracking-tighter">RENOR</span>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 lg:px-8">
        <div className="relative z-10 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-baseline justify-center"
          >
            <h1 className="font-heading text-[12rem] font-black leading-none tracking-tighter text-foreground sm:text-[16rem] md:text-[20rem]">
              r<span className="inline-flex align-baseline ml-[0.02em]"><ExpressionDot className="h-[0.10em] w-[0.10em]" /></span>
            </h1>

            {/* Painted effect */}
            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 z-[-1] -rotate-12 mix-blend-multiply dark:mix-blend-screen left-[-7%] top-[-13%]"
            >
              <svg
                viewBox="0 0 400 400"
                className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 text-[var(--renor-orange)]"
              >
                <motion.path
                  d="M100,200 Q150,50 200,200 T300,200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="70"
                  strokeLinecap="round"
                  filter="url(#noise)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                />
                <defs>
                  <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    <feDisplacementMap in="SourceGraphic" scale="10" />
                  </filter>
                </defs>
              </svg>

              {/* Scribble Overlay */}
              <svg
                viewBox="0 0 200 200"
                className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-[var(--renor-orange)] opacity-80"
              >
                <motion.path
                  d="M50,180 C60,100 40,50 90,40 C120,30 150,60 140,150 C135,180 110,190 80,170"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                  filter="url(#chalk)"
                />
                <defs>
                  <filter id="chalk">
                    <feTurbulence type="turbulence" baseFrequency="0.15" numOctaves="5" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"
          >
            Design Studio Estd 2025
          </motion.div>
        </div>

        <div className="flex max-w-3xl flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-8 text-balance text-2xl font-medium leading-relaxed text-foreground md:text-3xl"
          >
            We help early teams ship better product{" "}
            <span className="relative inline-flex w-[6ch] justify-start sm:w-auto">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 inline-block text-[var(--renor-orange)]"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-12 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
          >
            Renor helps founders shape early ideas into solid products with a focus on clarity, structure and speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Reverted the animated vertical line to a static, subtle one */}
            <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

            {/* Reverted the animated text to simple static text */}
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
