'use client'

import { motion, useAnimation } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  review: string
}

// Helper function to get initials from name
const getInitials = (name: string): string => {
  const parts = name.trim().split(' ')
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase()
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul',
    position: 'Founder',
    company: 'Keizerworks',
    review:
      'Abhay brings strong product thinking and execution discipline. From early-stage ideas to production-ready systems, he consistently focuses on building practical and scalable products designed for real users.'
  },
  {
    id: 2,
    name: 'Mayank',
    position: 'Founder',
    company: 'Blon AI',
    review:
      'Working with Renorlabs felt like collaborating with a core internal team rather than an external studio. Communication was clear, iterations were fast, and ownership was strong throughout the entire product build.'
  },
  {
    id: 3,
    name: 'Arlink',
    position: 'Product',
    company: 'Web3',
    review:
      'Renorlabs helped turn a complex Web3 idea into a clean and usable product. The team focused on simplicity, performance, and real-world usability instead of overengineering.'
  },
  {
    id: 4,
    name: 'Anonymous',
    position: 'Founder',
    company: 'Obit AI',
    review:
      'Renorlabs understood our product direction quickly and moved fast without cutting corners. Engineering decisions were thoughtful, scalable, and aligned with long-term product goals from day one.'
  }
]



const StarRating = () => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-[#252525]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

// Card size variations for visual interest
const getCardSize = (index: number) => {
  const sizes = [
    { width: 'w-[260px] md:w-[300px]', height: 'min-h-[280px] md:min-h-[320px]' },
    { width: 'w-[300px] md:w-[340px]', height: 'min-h-[300px] md:min-h-[340px]' },
    { width: 'w-[280px] md:w-[320px]', height: 'min-h-[260px] md:min-h-[300px]' },
    { width: 'w-[320px] md:w-[360px]', height: 'min-h-[320px] md:min-h-[360px]' },
    { width: 'w-[270px] md:w-[310px]', height: 'min-h-[290px] md:min-h-[330px]' },
    { width: 'w-[310px] md:w-[350px]', height: 'min-h-[280px] md:min-h-[320px]' },
    { width: 'w-[290px] md:w-[330px]', height: 'min-h-[310px] md:min-h-[350px]' },
    { width: 'w-[260px] md:w-[300px]', height: 'min-h-[270px] md:min-h-[310px]' },
  ]
  return sizes[index % sizes.length]
}

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  // Auto-scroll animation that pauses on hover
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: '-50%',
        transition: {
          duration: 50,
          ease: 'linear',
          repeat: Infinity,
        }
      })
    } else {
      controls.stop()
    }
  }, [isHovered, controls])

  return (
    <section ref={containerRef} className="relative w-full bg-[#faf8f5]">
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
            Testimonials
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
      </motion.div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl">
          What it feels like to{' '}
            <span className="text-[#252525]/40">work with Renor</span>
          </h1>
        </motion.div>
      </div>

      {/* Gray Container for Cards */}
      <div className="bg-[#262626] rounded-2xl md:rounded-3xl px-6 md:px-8 lg:px-12 py-12 md:py-16 mb-12 md:mb-16">
        {/* Testimonials Auto-Scroll with Pause on Hover */}
        <div 
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={marqueeRef}
            className="flex gap-4 md:gap-6 will-change-transform"
            animate={controls}
            initial={{ x: 0 }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const cardSize = getCardSize(index)
              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`flex-shrink-0 ${cardSize.width} ${cardSize.height} bg-[#faf8f5] rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_1px_4px_rgba(0,0,0,0.06)]`}
                >
                  {/* Review Text */}
                  <p className="text-sm md:text-base text-[#252525] leading-relaxed mb-4 flex-1">
                    {testimonial.review}
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#252525]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#252525] text-[#faf8f5] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#252525]">
                          {testimonial.name}, {testimonial.position}
                        </p>
                        <p className="text-xs text-[#252525]/60 mt-0.5">{testimonial.company}</p>
                      </div>
                    </div>
                    <StarRating />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: Stats and CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col gap-2"
        >
          <p className="text-lg md:text-xl font-medium text-[#252525]">
            4.6★ stars out of 5
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://cal.com/renorlabs/talk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#252525] text-[#faf8f5] font-medium rounded-full hover:bg-[#252525]/90 transition-colors"
        >
          Contact us
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Bottom Line */}
      <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}