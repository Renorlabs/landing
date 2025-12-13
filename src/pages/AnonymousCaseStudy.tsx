'use client'

import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AnonymousCaseStudy() {
  return (
    <div className="min-h-screen w-full bg-[#faf8f5] text-[#252525]">
      <Navbar visible={true} isLoaded={true} />
      
      <article className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24 py-24 md:py-32">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#252525]/70 hover:text-[#252525] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs md:text-sm font-medium text-[#252525]/60 uppercase tracking-wider mb-6">
            ANONYMOUS CASE STUDY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#252525] leading-[1.1] mb-4">
            Building the Interaction Layer for Human AI Communication
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#252525]/80 leading-tight mb-6">
            Designing an intelligent messaging infrastructure from the ground up
          </p>
          <p className="text-base md:text-lg text-[#252525]/60 leading-relaxed max-w-3xl">
            A confidential engagement with an AI startup working on a protocol layer that enables text, voice, and generated media interactions. We shaped the system architecture, designed the dashboard, and helped build early distribution channels.
          </p>
        </motion.header>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center min-h-[50vh] py-24 pb-32"
        >
          <h2 className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.95] font-bold text-[#262626] tracking-tight -ml-[0.05em] flex overflow-visible">
            {"Coming Soon".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}
