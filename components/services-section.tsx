"use client"

import type React from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"
import { MousePointer2 } from "lucide-react"

const workWithTags = [
  "AI",
  "Fintech",
  "SaaS",
  "Deep Tech",
  "Web3",
  "E-commerce",
  "HealthTech",
  "Real Estate",
  "B2B Platforms",
]

const whatWeDoTags = [
  "Product strategy",
  "UX/UI design",
  "Design systems",
  "MVP design",
  "Web app design",
  "Mobile app design",
  "Brand identity",
  "Pitch decks",
  "Micro-interactions",
  "Motion design",
  "Webflow/Framer builds",
  "Copywriting (UX)",
]

const howFastTags = [
  "Brand sprint: 1-2 weeks",
  "MVP design: 3-8 weeks",
  "Design system: 2-6 weeks",
  "Product website: 2-6 weeks",
  "UX audit: 1-2 weeks",
]

const DashboardMockup = () => (
  <div className="h-full w-full overflow-hidden rounded-lg bg-gray-50 p-3 font-sans relative">
    {/* Cursor for the Dashboard */}
    <motion.div
      animate={{
        x: [0, 80, 80, 0, 0],
        y: [0, 0, 60, 60, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="absolute top-10 left-10 z-20 pointer-events-none"
    >
      <MousePointer2 className="h-4 w-4 fill-black text-black" />
    </motion.div>

    {/* Header */}
    <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
      <div className="flex gap-1.5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="h-2.5 w-2.5 rounded-full bg-red-400/80"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="h-2.5 w-2.5 rounded-full bg-amber-400/80"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="h-2.5 w-2.5 rounded-full bg-green-400/80"
        />
      </div>
      <div className="h-1.5 w-20 rounded-full bg-gray-200" />
    </div>
    {/* Content */}
    <div className="flex gap-3">
      {/* Sidebar */}
      <div className="w-12 space-y-2 border-r border-gray-200 pr-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`h-8 w-full rounded-md ${i === 1 ? "bg-white shadow-sm border border-gray-100" : "bg-transparent"}`}
          >
            {i === 1 && <div className="mx-auto mt-3 h-2 w-2 rounded-full bg-[var(--renor-orange)]" />}
          </motion.div>
        ))}
      </div>
      {/* Main Area */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-gray-900" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="h-6 w-16 rounded-md bg-[var(--renor-orange)] shadow-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="rounded-lg bg-white p-2 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-1 h-1.5 w-8 rounded-full bg-gray-200" />
              <div className="h-3 w-12 rounded-full bg-gray-900" />
            </motion.div>
          ))}
        </div>
        <div className="h-16 w-full rounded-lg bg-white p-2 shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--renor-orange)]/10 to-transparent" />
          <svg className="w-full h-full text-[var(--renor-orange)]" viewBox="0 0 100 40" preserveAspectRatio="none">
            <motion.path
              d="M0 40 L0 30 Q 20 10 40 25 T 80 20 T 100 5 L 100 40 Z"
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <motion.path
              d="M0 30 Q 20 10 40 25 T 80 20 T 100 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
)

const MobileMockup = () => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full w-full rounded-[1.5rem] bg-gray-900 p-2 shadow-2xl ring-4 ring-gray-900/10">
      <div className="h-full w-full overflow-hidden rounded-xl bg-white relative">
        <div className="bg-[var(--renor-orange)] h-32 p-4 text-white flex flex-col justify-end relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-1"
          >
            <span className="font-['Space_Grotesk'] font-bold text-xl tracking-tight">RenorLabs</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1.5 rounded-full bg-white/60"
          />
        </div>
        <div className="p-3 space-y-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors relative overflow-hidden"
            >
              {/* Shimmer effect for loading state simulation */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              />
              <div className="h-8 w-8 rounded-md bg-gray-100" />
              <div className="flex-1">
                <div className="h-1.5 w-20 bg-gray-900 rounded-full mb-1" />
                <div className="h-1 w-12 bg-gray-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Floating FAB with popping animation */}
        <motion.div
          animate={{ scale: [1, 0.8, 1.1, 1] }}
          transition={{ duration: 0.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-black shadow-lg flex items-center justify-center text-white z-10 cursor-pointer hover:bg-gray-800"
        >
          +
        </motion.div>

        {/* Cursor for mobile */}
        <motion.div
          animate={{
            x: [100, 80, 80, 100],
            y: [200, 230, 230, 200],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.2, 0.8, 1],
          }}
          className="absolute top-0 left-0 z-20 pointer-events-none"
        >
          <MousePointer2 className="h-5 w-5 fill-black text-black drop-shadow-md" />
        </motion.div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const leftCardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 50, damping: 10 })
  const mouseY = useSpring(y, { stiffness: 50, damping: 10 })

  const moveX = useTransform(mouseX, [-300, 300], [-15, 15])
  const moveY = useTransform(mouseY, [-300, 300], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = leftCardRef.current?.getBoundingClientRect()
    if (rect) {
      const xPos = e.clientX - rect.left - rect.width / 2
      const yPos = e.clientY - rect.top - rect.height / 2
      x.set(xPos)
      y.set(yPos)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            WHAT WE DO
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            THE ESSENCE OF RENOR
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Card - White */}
          <motion.div
            ref={leftCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ perspective: 1000 }}
            className="group/card relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-border bg-white p-8 shadow-sm lg:p-10"
          >
            {/* Floating UI Mockups */}
            <div className="relative mb-12 h-[320px] w-full perspective-1000">
              {/* Back Card - Dashboard */}
              <motion.div
                style={{ rotateX, rotateY, z: 50 }}
                // Reduced the hover translation and scale to keep the dashboard card more contained
                className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-[60%] -translate-y-1/2 rotate-[-8deg] rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-1000 ease-out group-hover/card:rotate-[-10deg] group-hover/card:-translate-x-[55%] group-hover/card:scale-102"
              >
                <DashboardMockup />
              </motion.div>

              {/* Front Card - Mobile App */}
              <motion.div
                style={{ rotateX, rotateY, z: 100, x: moveX, y: moveY }}
                // Reduced the hover translation percentage and scale to prevent the mobile card from exiting the container bounds
                className="absolute left-1/2 top-1/2 h-[280px] w-[160px] -translate-x-[30%] -translate-y-[40%] rotate-[6deg] transition-all duration-1000 ease-out group-hover/card:rotate-[10deg] group-hover/card:translate-x-[5%] group-hover/card:scale-102 z-10"
              >
                <MobileMockup />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute right-12 top-12 hidden lg:block"
              >
                <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg border border-gray-100 animate-bounce">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Live Build</span>
                </div>
              </motion.div>
            </div>

            <div className="mt-auto space-y-12">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WHO WE WORK WITH:</h4>
                <div className="flex flex-wrap gap-2">
                  {workWithTags.map((tag) => (
                    <motion.div
                      key={tag}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default rounded-full border border-dashed border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-[var(--renor-orange)] hover:text-[var(--renor-orange)]"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-black">Recent work</h3>
                  <p className="text-muted-foreground">We're talking about high level quality.</p>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="group relative h-12 overflow-hidden rounded-full bg-black px-8 text-white shadow-lg hover:bg-black">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative flex items-center gap-2">
                      SEE RECENT WORK
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Black */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group/black relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-black p-8 shadow-xl lg:p-10"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 opacity-0 transition-opacity duration-700 group-hover/black:opacity-100 z-0">
              <span className="font-['Space_Grotesk'] text-[20rem] font-bold leading-none text-zinc-900">r.</span>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-700 group-hover/black:opacity-[0.08] z-0 whitespace-nowrap">
              <span className="font-['Space_Grotesk'] text-6xl lg:text-8xl font-bold uppercase tracking-tighter text-white">
                THE SYSTEM GRID
              </span>
            </div>

            <div className="relative z-10 space-y-6 mb-12">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">WHAT WE DO:</h4>
              <div className="flex flex-wrap gap-3">
                {whatWeDoTags.map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    className="group relative cursor-default rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all hover:border-[var(--renor-orange)]/50 hover:text-white hover:shadow-[0_0_15px_rgba(255,117,31,0.3)]"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 space-y-6 mt-auto">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">HOW FAST WE DO IT:</h4>
              <div className="flex flex-wrap gap-3">
                {howFastTags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-xl border border-white/10 bg-zinc-900/30 px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white hover:border-white/20 hover:bg-white/5"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
