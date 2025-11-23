"use client"

import { motion, useInView, useMotionValue, useSpring, useAnimation, animate } from "framer-motion"
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

function AnalogClock() {
  const hourRotate = useMotionValue(0)
  const minuteRotate = useMotionValue(0)
  const secondRotate = useMotionValue(0)
  
  const [isAnimating, setIsAnimating] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (isAnimating) return

    const updateTime = () => {
      const now = new Date()
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000
      const minutes = now.getMinutes() + seconds / 60
      const hours = (now.getHours() % 12) + minutes / 60

      secondRotate.set(seconds * 6)
      minuteRotate.set(minutes * 6)
      hourRotate.set(hours * 30)
    }

    const interval = setInterval(updateTime, 16) // ~60fps
    updateTime() // Initial set

    return () => clearInterval(interval)
  }, [isAnimating, secondRotate, minuteRotate, hourRotate])

  const handleHover = async () => {
    if (isAnimating) return
    setIsAnimating(true)

    // 1. Animate to 12 o'clock (360 or 0 degrees visually)
    // We animate to the next full rotation + 0 relative to current to avoid counter-clockwise spin
    const currentSec = secondRotate.get()
    const currentMin = minuteRotate.get()
    const currentHour = hourRotate.get()

    // Calculate target: nearest 360 multiple that is "12 o'clock" (0 deg mod 360)
    // Actually, simpler to just animate to a fixed "12:00:00" visual state.
    // Let's spin them all fast to a clean 0/360 state.
    
    await Promise.all([
      animate(secondRotate, currentSec + 360 - (currentSec % 360), { duration: 0.6, ease: "easeInOut" }),
      animate(minuteRotate, currentMin + 360 - (currentMin % 360), { duration: 0.6, ease: "easeInOut" }),
      animate(hourRotate, currentHour + 360 - (currentHour % 360), { duration: 0.6, ease: "easeInOut" })
    ])

    // Pause at 12
    await new Promise(r => setTimeout(r, 200))

    // 2. Reset to correct time
    const now = new Date()
    const s = now.getSeconds() + now.getMilliseconds() / 1000
    const m = now.getMinutes() + s / 60
    const h = (now.getHours() % 12) + m / 60

    // Ensure we rotate *forward* to the time, or just snap/spring back?
    // "reset to correct time" - let's spring back smoothly.
    // We need to animate to the absolute values. 
    // Since we are at (N * 360), we calculate the target rotation relative to that base.
    // e.g. target = (currentBase) + timeRotation
    
    const baseSec = Math.ceil(secondRotate.get() / 360) * 360
    const baseMin = Math.ceil(minuteRotate.get() / 360) * 360
    const baseHour = Math.ceil(hourRotate.get() / 360) * 360

    await Promise.all([
      animate(secondRotate, baseSec + (s * 6), { duration: 0.8, type: "spring", bounce: 0.4 }),
      animate(minuteRotate, baseMin + (m * 6), { duration: 0.8, type: "spring", bounce: 0.4 }),
      animate(hourRotate, baseHour + (h * 30), { duration: 0.8, type: "spring", bounce: 0.4 })
    ])

    setIsAnimating(false)
  }

  return (
    <motion.div
      className="cursor-pointer p-2"
      onMouseEnter={handleHover}
      whileTap={{ scale: 0.9 }}
      aria-label="Real-time analog clock"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" className="overflow-visible">
        {/* Clock Face */}
        <circle cx="20" cy="20" r="19" className="fill-background stroke-[var(--renor-orange)] stroke-[1.5px]" />
        
        {/* Ticks */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="20" y1="4" x2="20" y2={i % 3 === 0 ? "7" : "5"}
            transform={`rotate(${i * 30} 20 20)`}
            className={i % 3 === 0 ? "stroke-foreground stroke-[1.5px]" : "stroke-muted-foreground stroke-[1px]"}
          />
        ))}

        {/* Hour Hand */}
        <motion.line
          x1="20" y1="20" x2="20" y2="10"
          style={{ rotate: hourRotate, originX: 0.5, originY: 1 }}
          className="stroke-foreground stroke-[2px] stroke-linecap-round"
        />

        {/* Minute Hand */}
        <motion.line
          x1="20" y1="20" x2="20" y2="6"
          style={{ rotate: minuteRotate, originX: 0.5, originY: 1 }}
          className="stroke-foreground stroke-[1.5px] stroke-linecap-round"
        />

        {/* Second Hand */}
        <motion.line
          x1="20" y1="24" x2="20" y2="5"
          style={{ rotate: secondRotate, originX: 0.5, originY: 15/19 }}
          className="stroke-[var(--renor-orange)] stroke-[1px]"
        />
        
        {/* Center Pin */}
        <circle cx="20" cy="20" r="1.5" className="fill-[var(--renor-orange)]" />
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
                  {/* Added AnalogClock to the 3rd card (index 2) */}
                  {index === 2 && (
                    <div className="absolute top-4 right-4 z-30">
                      <AnalogClock />
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
