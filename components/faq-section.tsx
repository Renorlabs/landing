"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

// Grouped FAQs for the new category layout
const faqCategories = [
  {
    id: "general",
    label: "General Information",
    questions: [
      {
        id: "focus",
        question: "What does Renor focus on?",
        answer:
          "We help founders build AI-first products with clear systems, practical UX, and reliable engineering. Our work covers strategy, design, development, and long-term product support.",
      },
      {
        id: "engagement",
        question: "How does engagement work?",
        answer:
          "We scope each project based on product goals and technical needs. Most engagements start with an MVP phase and continue into iteration and growth cycles.",
      },
    ],
  },
  {
    id: "process",
    label: "Process & Timeline",
    questions: [
      {
        id: "mvp-time",
        question: "How long does an MVP take?",
        answer:
          "A focused MVP usually takes between 4 and 8 weeks depending on complexity and integrations. You receive a clear timeline before we begin.",
      },
      {
        id: "tracking",
        question: "How do you keep projects on track?",
        answer:
          "We work in simple weekly cycles with clear communication, shared documentation, and predictable delivery rhythms.",
      },
    ],
  },
  {
    id: "support",
    label: "Support & Growth",
    questions: [
      {
        id: "founders",
        question: "Do you work with early-stage founders?",
        answer:
          "Yes. We work closely with first-time founders and small teams who need structure, clarity, and a fast path to validation.",
      },
      {
        id: "post-launch",
        question: "What happens after launch?",
        answer:
          "We offer ongoing iteration, product improvements, performance reviews, and support for scaling the system as new requirements appear.",
      },
    ],
  },
]

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openQuestion, setOpenQuestion] = useState<string | null>("focus")
  const [isContactHovered, setIsContactHovered] = useState(false)

  const activeQuestions = faqCategories.find((c) => c.id === activeCategory)?.questions || []

  const [typingState, setTypingState] = useState<"idle" | "typing" | "sent">("idle")
  const [visibleChars, setVisibleChars] = useState(0)

  const text = "Hey, Renorlabs! Let's Build Together"

  useEffect(() => {
    if (isContactHovered) {
      setTypingState("typing")
      setVisibleChars(0)

      // Type characters one by one
      const charCount = text.length
      const typingInterval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= charCount) {
            clearInterval(typingInterval)
            setTimeout(() => setTypingState("sent"), 300)
            return prev
          }
          return prev + 1
        })
      }, 50) // 50ms per character for smooth typing

      return () => clearInterval(typingInterval)
    } else {
      setTypingState("idle")
      setVisibleChars(0)
    }
  }, [isContactHovered, text.length])

  return (
    <section id="faqs" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header with Clean Mini Heading */}
        <div className="relative mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h3 className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Common Questions
            </h3>
            <h2 className="text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about Renor Labs and how we help.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Sidebar: Categories */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-4 px-4">Categories</h3>
              <div className="space-y-1 relative">
                {/* Active Indicator Line - Animated */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-100" />

                {faqCategories.map((category) => {
                  const isActive = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`group relative flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-zinc-900 bg-zinc-50/80"
                          : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50"
                      } rounded-r-lg`}
                    >
                      <span className="relative z-10">{category.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="active-category-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--renor-orange)] rounded-r-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content: Questions & CTA */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <AnimatePresence mode="wait">
                {activeQuestions.map((item) => {
                  const isOpen = openQuestion === item.id
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => setOpenQuestion(isOpen ? null : item.id)}
                        className={`w-full text-left transition-all duration-300 rounded-xl border ${
                          isOpen
                            ? "bg-white border-[var(--renor-orange)] shadow-lg shadow-orange-500/5 scale-[1.01]"
                            : "bg-zinc-50 border-transparent hover:bg-zinc-100"
                        } overflow-hidden`}
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <span
                              className={`text-lg font-medium transition-colors ${isOpen ? "text-zinc-900" : "text-zinc-600"}`}
                            >
                              {item.question}
                            </span>
                            <div
                              className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-[var(--renor-orange)]" : "text-zinc-400"}`}
                            >
                              {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </div>
                          </div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <p className="text-zinc-600 leading-relaxed">{item.answer}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>

            {/* Still have a question card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 rounded-2xl bg-zinc-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 group"
            >
              <div className="flex items-center">
                <motion.div
                  className="hidden sm:flex h-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md text-zinc-900 overflow-hidden relative"
                  animate={{
                    width: typingState === "idle" ? 56 : 400,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.8,
                  }}
                >
                  {typingState === "idle" && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageCircle className="h-6 w-6 text-zinc-600" />
                    </motion.div>
                  )}

                  {typingState === "typing" && (
                    <motion.div
                      className="flex items-center px-5 whitespace-nowrap text-sm font-medium text-zinc-700 tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <span className="flex">
                        {text.split("").map((char, i) => (
                          <span
                            key={i}
                            className="inline-block"
                            style={{
                              opacity: i < visibleChars ? 1 : 0,
                              transition: "opacity 0.1s ease",
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 0.9,
                          ease: "easeInOut",
                        }}
                        className="inline-block w-0.5 h-4 bg-[var(--renor-orange)] ml-0.5 rounded-full"
                        style={{
                          opacity: visibleChars >= text.length ? 0 : 1,
                        }}
                      />
                    </motion.div>
                  )}

                  {typingState === "sent" && (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-[var(--renor-orange)] font-semibold text-sm px-5"
                    >
                      <span>Sent</span>
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  className="text-center sm:text-left"
                  animate={{
                    opacity: isContactHovered ? 0 : 1,
                    width: isContactHovered ? 0 : "auto",
                    marginLeft: isContactHovered ? 0 : 16,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                >
                  <h4 className="text-lg font-semibold text-zinc-900">Still have a question?</h4>
                  <p className="mt-1 text-sm text-zinc-600">If you didn't find your answer, feel free to reach out.</p>
                </motion.div>
              </div>
              <Button
                variant="outline"
                className="shrink-0 bg-white text-zinc-900 border-zinc-200 shadow-sm rounded-full px-8 py-2.5 font-medium transition-all duration-300 hover:bg-[var(--renor-orange)] hover:text-white hover:border-[var(--renor-orange)] hover:shadow-lg hover:shadow-orange-500/20"
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >
                Contact us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
