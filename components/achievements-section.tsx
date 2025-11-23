"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    title: "Projects Delivered with Care",
    description: "Every build follows a structured process focused on clarity and reliability.",
    metric: 15,
    suffix: "+",
  },
  {
    title: "Years of Combined Expertise",
    description: "A team shaped by experience in product design, engineering, and AI systems.",
    metric: 2,
    suffix: "",
  },
  {
    title: "Founders Supported",
    description: "Helping early teams validate ideas and move toward a stable first version.",
    metric: 10,
    suffix: "+",
  },
]

function MoodEmoji() {
  const [mood, setMood] = useState<"neutral" | "happy" | "angry" | "laugh">("neutral")
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center to mouse
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      // Limit the movement radius
      const maxDistance = 5
      const distance = Math.sqrt(dx * dx + dy * dy)
      const scale = Math.min(distance, 100) / 100 // Scale effect based on distance

      const limitedX = (dx / distance) * Math.min(distance, maxDistance) || 0
      const limitedY = (dy / distance) * Math.min(distance, maxDistance) || 0

      mouseX.set(limitedX)
      mouseY.set(limitedY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const toggleMood = () => {
    const moods: ("neutral" | "happy" | "laugh" | "angry")[] = ["neutral", "happy", "laugh", "angry"]
    const currentIndex = moods.indexOf(mood)
    const nextMood = moods[(currentIndex + 1) % moods.length]
    setMood(nextMood)
  }

  // Mouth paths for different moods
  const mouthPaths = {
    neutral: "M 9 22 Q 16 22 23 22", // Straight line
    happy: "M 9 20 Q 16 28 23 20", // Smile
    laugh: "M 9 20 Q 16 30 23 20 Z", // Open mouth
    angry: "M 9 24 Q 16 18 23 24", // Frown
  }

  return (
    <motion.div
      ref={ref}
      className="cursor-pointer p-2"
      onClick={(e) => {
        e.stopPropagation()
        toggleMood()
      }}
      onHoverStart={() => mood === "neutral" && setMood("happy")}
      onHoverEnd={() => mood === "happy" && setMood("neutral")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" className="stroke-[var(--renor-orange)] stroke-[2px] fill-none">
        {/* Face Outline - Minimal circle */}
        <circle cx="16" cy="16" r="15" className="opacity-20" />

        {/* Eyes Container */}
        <motion.g style={{ x, y }}>
          {/* Left Eye */}
          <circle cx="10" cy="12" r="2" className="fill-[var(--renor-orange)] stroke-none" />
          {/* Right Eye */}
          <circle cx="22" cy="12" r="2" className="fill-[var(--renor-orange)] stroke-none" />

          {/* Angry Eyebrows */}
          <motion.path
            initial={false}
            animate={{ opacity: mood === "angry" ? 1 : 0, pathLength: mood === "angry" ? 1 : 0 }}
            d="M 7 9 L 13 11 M 19 11 L 25 9"
            className="stroke-[var(--renor-orange)] stroke-[1.5px]"
          />
        </motion.g>

        {/* Mouth */}
        <motion.path
          d={mouthPaths[mood]}
          initial={false}
          animate={{ d: mouthPaths[mood] }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`stroke-[var(--renor-orange)] stroke-[2px] ${mood === "laugh" ? "fill-[var(--renor-orange)]/10" : "fill-none"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix
      }
    })
    return unsubscribe
  }, [springValue, suffix])

  return (
    <div
      ref={ref}
      className="font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight tabular-nums text-foreground z-10 relative"
    >
      0{suffix}
    </div>
  )
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">
            By the Numbers
          </h2>
          <p className="text-lg text-muted-foreground">Proven track record of delivering excellence</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="group dot-pattern relative h-full border-border bg-card p-8 transition-all hover:shadow-lg">
                  {/* Added MoodEmoji to the 3rd card (index 2) */}
                  {index === 2 && (
                    <div className="absolute top-4 right-4 z-30">
                      <MoodEmoji />
                    </div>
                  )}

                  <div className="relative flex h-full flex-col items-center justify-between">
                    <div className="mb-6 flex h-48 w-full items-center justify-center overflow-hidden">
                      <div className="relative flex items-center justify-center">
                        {/* Background Number */}
                        <div className="absolute select-none font-[family-name:var(--font-heading)] text-9xl font-black text-muted-foreground/10">
                          {achievement.metric}
                          {achievement.suffix}
                        </div>

                        {/* Foreground Number */}
                        <AnimatedCounter value={achievement.metric} suffix={achievement.suffix} />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="mb-4 text-center font-[family-name:var(--font-heading)] text-xl font-bold">
                        {achievement.title}
                      </h3>
                      <p className="text-center text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
