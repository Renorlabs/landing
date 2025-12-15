'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'How do you approach a new project',
    answer: 'We begin by understanding the idea. From there we bring structure to it. Clarity first. Systems next. Design and engineering follow once the foundation feels right.',
  },
  {
    question: 'How long does the process take',
    answer: 'Most journeys take 6 to 12 weeks. The timeline shifts based on how deep the product goes. We move with intention and keep the pace steady and predictable.',
  },
  {
    question: 'Do you work with early stage founders',
    answer: 'Yes. Renor is built around early ideas that need guidance and structure. We help founders move from uncertainty to a clear path forward.',
  },
  {
    question: 'What kind of products do you work on',
    answer: 'Any product that values clarity and strong systems. SaaS, consumer tools, AI products, education platforms and emerging ideas that need direction.',
  },
  {
    question: 'Do you also build the product',
    answer: 'Yes. Design and engineering happen together. We build with clean systems, AI first workflows and a long term plan so what we ship can grow.',
  }
];


export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col px-4 md:px-12 lg:px-24 pt-12 md:pt-16 pb-24 md:pb-32">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex justify-between items-center w-full mb-12 md:mb-16"
      >
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            FAQ
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (08)
        </span>
      </motion.div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
        >
          Common questions{' '}
          <span className="text-[#252525]/40">you might have</span>
        </motion.h2>
      </div>

      {/* Box Container */}
      <div className="bg-[#262626] rounded-2xl md:rounded-3xl px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Two Column Layout: CTA Left, FAQ Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT: CTA Card with Rotating Gradient */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative flex h-[500px] w-full max-w-[490px] items-center justify-center overflow-hidden rounded-3xl mx-auto lg:mx-0"
          >
            {/* Rotating conic gradient glow */}
            <div className="absolute -inset-10 flex items-center justify-center">
              <div
                className="
                  h-[120%] w-[120%] rounded-[36px] blur-3xl opacity-90
                  bg-[conic-gradient(from_0deg,theme(colors.emerald.400),theme(colors.cyan.400),theme(colors.blue.500),theme(colors.violet.600),theme(colors.red.500),theme(colors.emerald.400))]
                  animate-[spin_8s_linear_infinite]
                "
              />
            </div>

            {/* Black card inside the glow */}
            <Card className="w-full max-w-[280px] z-10 rounded-2xl border border-white/10 bg-[#252525]/95 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Ready to start?</h3>
                  <p className="text-sm text-white/70">
                    Let's build something amazing together.
                  </p>
                </div>

                <Button
                  className="mt-4 w-full rounded-lg bg-white text-[#252525] hover:bg-white/90 font-semibold"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://cal.com/renorlabs/talk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT: FAQ Accordion */}
          <div className="w-full h-[500px] flex flex-col justify-center">
            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isExpanded = expandedIndex === index
                const isLast = index === faqs.length - 1
                
                return (
                  <motion.div
                    key={index}
                    initial={false}
                    className={`flex flex-col ${!isLast ? 'border-b border-white/10' : ''} ${index === 0 ? '' : 'pt-6'} ${isLast ? '' : 'pb-6'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between text-left group"
                    >
                        <h3 className="text-2xl md:text-3xl font-medium text-white pr-4 flex-1 min-w-0">
                        {faq.question}
                      </h3>
                        <div className="flex-shrink-0 ml-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-md group-hover:bg-white/15 transition-colors">
                          <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ 
                          duration: 0.4, 
                              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                          type: "spring",
                          stiffness: 300,
                          damping: 25
                        }}
                            className="text-white text-xl md:text-2xl font-light"
                      >
                            +
                          </motion.span>
                        </div>
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            duration: 0.4, 
                              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                            opacity: { duration: 0.3 }
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                              className="pt-4"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                          >
                              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  )
}

