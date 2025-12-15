import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface MobileHomeProps {
  isLoaded?: boolean
}

export function MobileHome({ isLoaded = false }: MobileHomeProps) {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#faf8f5] flex flex-col">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-20">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: isLoaded ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2 mb-12 md:mb-16"
        >
          <div className="w-16 h-16 md:w-20 md:h-20">
            <img 
              src="/renor-logo.webp" 
              alt="Renor Logo" 
              className="w-full h-full object-contain" 
              loading="eager" 
              decoding="sync" 
            />
          </div>
          <div className="h-[3px] w-[85%] bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </motion.div>

        {/* Single Line Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: isLoaded ? 0.4 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-medium text-[#252525] text-center leading-tight mb-8 md:mb-10 max-w-md md:max-w-2xl"
        >
          Crafting the experience
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: isLoaded ? 0.6 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-[#252525]/70 text-center mb-12 md:mb-16 max-w-sm md:max-w-xl leading-relaxed"
        >
          We help founders turn ideas into real products. From strategy to launch, we design, build, and scale with you.
        </motion.p>

        {/* Contact CTA */}
        <motion.a
          href="https://cal.com/renorlabs/talk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: isLoaded ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#252525] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl text-base md:text-lg font-medium transition-colors duration-300 hover:bg-[#252525]/90 inline-block"
        >
          Contact Us
        </motion.a>
      </div>

      {/* Time Display - Subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: isLoaded ? 1.2 : 0 }}
        className="px-6 py-4 text-center"
      >
        <p className="text-xs text-[#252525]/40 font-mono">
          {time}
        </p>
      </motion.div>
    </div>
  )
}
