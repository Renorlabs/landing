import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { InteractiveGradient } from './InteractiveGradient'

// Pre-compute marquee words array to avoid creating on every render
const MARQUEE_WORDS = Array(16).fill(null).flatMap(() => ["Start.", "Build.", "Scale."])

interface HeroProps {
  isLoaded?: boolean
}

export function Hero({ isLoaded = false }: HeroProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -400])

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
    <motion.div id="home" style={{ y }} className="sticky top-0 z-0 min-h-screen w-full flex flex-col pt-32">
      
      {/* Main Content */}
      <div className="flex-1 px-6 md:px-12 lg:px-24 flex flex-col relative">
        
        {/* Huge Text & Right Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 lg:mb-12">
            <h1 className="text-[20vw] leading-[0.8] font-bold text-[#262626] tracking-tight -ml-[0.05em] flex overflow-hidden">
                {"Renor".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: isLoaded ? 0.1 + i * 0.08 : 0,
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="inline-block"
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 1.2, delay: isLoaded ? 0.3 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 lg:mt-0 text-right text-[#252525] font-medium text-sm md:text-base max-w-xs ml-auto"
            >
                <p>RE•NOR SYSTEMS</p>
                <p>— ESTD 2025 —</p>
                <p>PRODUCT DESIGN + ENGINEERING</p>
            </motion.div>
        </div>

        {/* Description */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: isLoaded ? 0.5 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-[#252525] text-lg md:text-xl font-medium leading-relaxed mb-12 md:mb-16 ml-2"
        >
            <p>Renorlabs crafts clear brands and durable digital products with design and engineering in balance.</p>
        </motion.div>

        {/* Marquee Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: isLoaded ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="w-full py-6 md:py-8 flex items-center justify-between relative mb-4 md:mb-8 gap-8"
        >
             {/* Marquee Track */}
             <div className="relative flex-1 flex flex-col gap-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                {/* First Row - Moving Left */}
                <div className="flex overflow-hidden w-full">
                    <motion.div 
                        className="flex whitespace-nowrap gap-2 md:gap-4 lg:gap-6 will-change-transform"
                        initial={{ x: "0%" }}
                        animate={{ x: "-50%" }}
                        transition={{ 
                            repeat: Infinity, 
                            ease: "linear", 
                            duration: 80 
                        }}
                    >
                        {MARQUEE_WORDS.map((word, i) => (
                            <span key={i} className="text-lg md:text-xl lg:text-2xl font-bold text-[#5f6163]/50 tracking-widest">
                                {word}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Second Row - Moving Right */}
                <div className="flex overflow-hidden w-full">
                    <motion.div 
                        className="flex whitespace-nowrap gap-2 md:gap-4 lg:gap-6 will-change-transform"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ 
                            repeat: Infinity, 
                            ease: "linear", 
                            duration: 80 
                        }}
                    >
                        {MARQUEE_WORDS.map((word, i) => (
                            <span key={`row2-${i}`} className="text-lg md:text-xl lg:text-2xl font-bold text-[#5f6163]/40 tracking-widest">
                                {word}
                            </span>
                        ))}
                    </motion.div>
                </div>
             </div>

             {/* Trusted By Label - Static */}
             <div className="shrink-0 z-10 pl-4 text-right min-w-[200px]">
                <p className="text-sm md:text-base font-medium text-[#252525] whitespace-nowrap">
                    → Trusted by <span className="font-bold">15+</span> Products
                </p>
             </div>
        </motion.div>

      </div>

      {/* Bottom Interactive Gradient Section */}
      <InteractiveGradient time={time} isLoaded={isLoaded} />

    </motion.div>
  )
}
