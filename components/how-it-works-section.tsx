"use client"

import { motion } from "framer-motion"
import { Zap, Search, CheckCircle2, Code2, ShieldCheck, Gauge, Check, Terminal } from "lucide-react"
import { useState, useEffect } from "react"

const steps = [
  {
    number: 1,
    title: "Understanding the Problem",
    description:
      "We study the product space, user needs, and constraints to build a clear foundation for what needs to be created.",
    visual: <Step1Visual />,
  },
  {
    number: 2,
    title: "Design and Technical Planning",
    description:
      "We map the system, define user flows, and design clean interfaces supported by a stable technical plan.",
    visual: <Step2Visual />,
  },
  {
    number: 3,
    title: "Build and Iterate",
    description:
      "We create the product in focused cycles with ongoing refinement to maintain clarity, stability, and speed.",
    visual: <Step3Visual />,
  },
  {
    number: 4,
    title: "Launch and Support",
    description: "We deploy the product with care and provide structured support as it begins to scale.",
    visual: <Step4Visual />,
  },
]

function Step1Visual() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "renorlabs"

  useEffect(() => {
    if (isExpanded) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 150) // Typing speed

      return () => clearInterval(typingInterval)
    }
  }, [isExpanded])

  return (
    <div className="relative h-full flex items-center justify-center p-8 w-full">
      <div className="relative w-full max-w-[280px] h-14">
        {/* Silver Glow Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full blur-xl transition-opacity duration-1000 ${isExpanded ? "opacity-80" : "opacity-0"}`}
        />

        {/* Search Bar Container */}
        <motion.div
          className="relative w-full h-full bg-white rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-neutral-100 flex items-center px-4 overflow-hidden"
          initial={{ width: 56 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
          onAnimationComplete={() => setIsExpanded(true)}
        >
          <Search className="w-5 h-5 text-neutral-400 flex-shrink-0 mr-3" />
          <div className="relative flex-1 h-full flex items-center overflow-hidden">
            {/* Implemented real typing effect */}
            <span className="text-neutral-800 font-medium text-lg whitespace-nowrap">{typedText}</span>
            {/* Cursor always blinks when expanded */}
            <motion.div
              className="h-5 w-[2px] bg-[var(--renor-orange)] ml-0.5"
              initial={{ opacity: 0 }}
              animate={isExpanded ? { opacity: [0, 1, 0] } : { opacity: 0 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Moving Mouse Cursor */}
        <motion.div
          className="absolute z-20 top-10 left-10 pointer-events-none drop-shadow-md"
          initial={{ x: 0, y: 0, opacity: 0 }}
          whileInView={{
            x: [0, 80, 80],
            y: [0, -15, -15],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            times: [0, 0.4, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black fill-black"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

function Step2Visual() {
  return (
    <div className="relative h-full flex flex-col items-center justify-center gap-4 p-8 w-full">
      {/* Design System Pill */}
      <motion.div
        className="relative bg-white rounded-full px-6 py-3 border border-neutral-200 shadow-sm w-full max-w-[260px] flex items-center gap-3 overflow-hidden group"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.02, borderColor: "var(--renor-orange)" }}
      >
        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[var(--renor-orange)]/10 transition-colors">
          <Zap className="w-4 h-4 text-neutral-600 group-hover:text-[var(--renor-orange)] transition-colors" />
        </div>
        <span className="text-sm font-medium text-neutral-700">Design System Setup</span>

        {/* Scanning Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
      </motion.div>

      {/* Connection Line */}
      <motion.div
        className="h-8 w-[2px] bg-neutral-200"
        initial={{ height: 0 }}
        whileInView={{ height: 32 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      />

      {/* Component Dev Pill */}
      <motion.div
        className="bg-neutral-900 rounded-full px-6 py-3 shadow-md w-full max-w-[260px] flex items-center gap-3"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
          <Code2 className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Component Development</span>
      </motion.div>
    </div>
  )
}

function Step3Visual() {
  const [status, setStatus] = useState<"idle" | "running" | "success">("idle")

  useEffect(() => {
    if (status === "running") {
      const timer = setTimeout(() => setStatus("success"), 2000)
      return () => clearTimeout(timer)
    }
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <div className="relative h-full flex items-center justify-center p-8 w-full">
      <motion.div
        className="relative w-full max-w-[280px] bg-neutral-950 rounded-xl overflow-hidden shadow-xl border border-neutral-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>

        {/* Terminal Content */}
        <div
          className="p-4 font-mono text-xs h-[100px] flex flex-col justify-between cursor-pointer"
          onClick={() => setStatus("running")}
        >
          {status === "idle" && (
            <motion.div
              className="text-neutral-400 flex items-center justify-center h-full gap-2 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="p-2 rounded-lg bg-neutral-900 group-hover:bg-neutral-800 transition-colors border border-neutral-800">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="group-hover:text-white transition-colors">Run Quality Tests</span>
            </motion.div>
          )}

          {status === "running" && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-[var(--renor-orange)]">➜</span>
                <span>running tests...</span>
              </div>
              <motion.div
                className="h-1 bg-neutral-800 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-[var(--renor-orange)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
              <div className="text-neutral-500">Compiling assets...</div>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <motion.div
                className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <Check className="w-5 h-5 text-[var(--renor-orange)]" />
              </motion.div>
              <span className="text-[var(--renor-orange)] font-medium">Tests Passed</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function Step4Visual() {
  return (
    <div className="relative h-full flex items-center justify-center p-8 w-full">
      <div className="relative w-full max-w-sm">
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              label: "Code Quality",
              icon: Code2,
              status: "Pass",
              color: "text-neutral-900", // Consistent black theme
              bg: "bg-neutral-100",
            },
            {
              label: "Security Scan",
              icon: ShieldCheck,
              status: "Secure",
              color: "text-neutral-900",
              bg: "bg-neutral-100",
            },
            {
              label: "Performance",
              icon: Gauge,
              status: "100/100",
              color: "text-neutral-900",
              bg: "bg-neutral-100",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between bg-white p-3 rounded-lg border border-neutral-100 shadow-sm group hover:border-[var(--renor-orange)]/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${item.bg} group-hover:bg-[var(--renor-orange)]/10 transition-colors`}>
                  <item.icon
                    className={`w-4 h-4 ${item.color} group-hover:text-[var(--renor-orange)] transition-colors`}
                  />
                </div>
                <span className="text-sm font-medium text-neutral-900">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-neutral-500 group-hover:text-[var(--renor-orange)] transition-colors">
                  {item.status}
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--renor-orange)]" />
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Updated Operational Indicator - Consistent with Brand */}
          <motion.div
            className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-neutral-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--renor-orange)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--renor-orange)]"></span>
            </span>
            All systems operational
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-4">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground max-w-3xl mx-auto">
            From concept to launch in four streamlined steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 h-full hover:border-neutral-300 transition-colors shadow-sm">
                <div className="mb-6">
                  <span className="text-[var(--renor-orange)] text-sm font-semibold tracking-wider uppercase">
                    STEP {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-3 font-heading">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="mt-8 min-h-[200px]">{step.visual}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
