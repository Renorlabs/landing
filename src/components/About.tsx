import { motion } from 'framer-motion'
import { Entropy } from '@/components/ui/entropy'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const contentRef = useScrollReveal('.about-content-block', {
    direction: 'up',
    distance: 40,
    stagger: 0.1,
    duration: 0.8,
  })

  return (
    <section 
      ref={contentRef}
      id="about"
      className="relative z-10 w-full bg-[#faf8f5]"
    >
      <div className="flex flex-col px-4 md:px-12 lg:px-24 py-24 md:py-32">
        
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
              About us
            </h2>
            <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
          </div>
          <span className="text-sm md:text-base font-medium text-[#252525]/60">
            (01)
          </span>
        </motion.div>

        {/* Header Section */}
        <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
          >
            Meet Renor,{' '}
            <span className="text-[#252525]/40">a studio shaped by intention</span>
          </motion.h1>
        </div>

        {/* Content Container - 12 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1">
          
          {/* Left Side - Entropy Animation (flipped) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="transform scale-x-[-1]">
              <Entropy size={360} className="rounded-lg" />
            </div>
            <p className="mt-4 text-sm text-[#252525]/60 italic tracking-wide">
              "Renor - Where Chaos Finds Form"
            </p>
          </div>

          {/* Right Side - Paragraphs */}
          <div className="lg:col-span-7 lg:pl-8">
            
            {/* Scroll-revealed paragraph */}
            <p className="about-content-block text-lg md:text-xl text-[#252525]/80 leading-relaxed mb-6">
              Renor builds digital systems shaped with intention. We design and engineer products that are structured, dependable, and built to scale.
            </p>
            {/* Scroll-revealed paragraph */}
            <p className="about-content-block text-lg md:text-xl text-[#252525]/80 leading-relaxed">
              Our approach is rooted in clarity and reduction. We remove noise, create predictable flows, and craft interfaces that feel balanced and precise. Each product is grounded in strong design logic and clean engineering practices that last beyond the first release.
            </p>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}

