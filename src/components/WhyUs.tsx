import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const

export function WhyUs() {
  return (
    <section className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col px-4 md:px-12 lg:px-24 py-24 md:py-32">
      
      {/* Section Label */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center w-full mb-12 md:mb-16"
      >
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Why us
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (04)
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
          Timeless products born from{' '}
          <span className="text-[#252525]/40">discipline and focus</span>
        </motion.h1>
      </div>

      {/* Bento Grid */}
      <div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
        
          {/* Column 1 - Poster Style Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="bg-[#f0efeb] rounded-2xl p-4 flex flex-col"
        >
          {/* Top Image Section */}
          <div className="w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden">
            <img 
              src="/orbit.jpeg" 
              alt="Orbit" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Year */}
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="text-2xl md:text-3xl font-bold text-[#252525] uppercase tracking-tight">
              Renor
            </h3>
            <span className="text-base text-[#252525]/60">2025</span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 mb-4">
          <p className="text-sm text-[#252525]/70 mb-2 italic opacity-50">(Product Design + Engineering)</p>
            <p className="text-sm text-[#252525]/70 mb-2">
              We help founders build the right product from the<br />
              ground up.
            </p>
            <ul className="flex flex-col gap-1.5 mt-2">
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Shape the idea into a clear product direction</span>
              </li>
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Design the full experience with intention</span>
              </li>
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Engineer a reliable and scalable system</span>
              </li>
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Deliver a polished product ready for launch</span>
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="mt-auto pt-4">
            <p className="text-sm text-[#252525]/70 leading-relaxed italic">
              "Creation is shaped through clarity, discipline, and thoughtful execution."
            </p>
          </div>
        </motion.div>

          {/* Column 2 - Image Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="bg-[#f0efeb] rounded-2xl p-4 flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img 
              src="/image.png" 
              alt="Infinity symbol" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Commented out: Custom Infinity Symbol and Keizer Growth Content */}
          {/* 
          <div className="bg-[#1a1a1a] rounded-xl p-5 flex flex-col min-h-[50px]">
            <div className="flex-1 min-h-[120px] mb-4 flex items-center justify-center relative overflow-hidden">
              <svg>...</svg>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center">
            <p>Continuous creation → continuous growth</p>
            <h4>We Plan. We Build. Keizer Grows.</h4>
            <p>A complete 0→1→100 ecosystem for founders</p>
            <div>Timeline progression...</div>
          </div>
          */}
        </motion.div>

          {/* Column 3 - Poster Style Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="bg-[#f0efeb] rounded-2xl p-4 flex flex-col"
        >
          {/* Top Image Section */}
          <div className="w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden">
            <img 
              src="/Element 2001625943.jpeg" 
              alt="Element" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Year */}
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="text-2xl md:text-3xl font-bold text-[#252525] uppercase tracking-tight">
              Keizer
            </h3>
            <span className="text-base text-[#252525]/60">2025</span>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 mb-4">
          <p className="text-sm text-[#252525]/70 mb-2 italic opacity-50">(Growth Strategy + Marketing)</p>
            <p className="text-sm text-[#252525]/70 mb-2">We help launched products grow with clarity and consistency.</p>
            <ul className="flex flex-col gap-1.5 mt-2">
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Position the product with the right messaging</span>
              </li>
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Build repeatable growth channels</span>
              </li>
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Strengthen reach through focused marketing</span>
              </li>
              <li className="text-sm text-[#252525]/70 flex items-baseline gap-2">
                <span className="text-[#252525]">•</span>
                <span>Support continuous scaling and improvement</span>
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="mt-auto pt-4">
            <p className="text-sm text-[#252525]/70 leading-relaxed italic">
              "Growth is engineered through focus, consistency, and direction."
            </p>
          </div>
        </motion.div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}
