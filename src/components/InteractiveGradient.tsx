import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { useRef, useEffect, useCallback } from 'react'

interface InteractiveGradientProps {
  time: string
  isLoaded?: boolean
}

export function InteractiveGradient({ time, isLoaded = false }: InteractiveGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse position tracking
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  
  // Very smooth spring physics - slower, more organic
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 40, mass: 1 })
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 40, mass: 1 })
  
  // Even slower layer for depth
  const slowX = useSpring(mouseX, { stiffness: 15, damping: 50, mass: 1.5 })
  const slowY = useSpring(mouseY, { stiffness: 15, damping: 50, mass: 1.5 })
  
  // Transform mouse position to gradient positions
  const gradient1X = useTransform(smoothX, [0, 1], [10, 50])
  const gradient1Y = useTransform(smoothY, [0, 1], [20, 80])
  const gradient2X = useTransform(slowX, [0, 1], [50, 90])
  const gradient2Y = useTransform(slowY, [0, 1], [80, 20])
  const gradient3X = useTransform(smoothX, [0, 1], [30, 70])
  const gradient3Y = useTransform(slowY, [0, 1], [40, 60])
  
  // Subtle hue shift
  const rotateHue = useTransform(smoothX, [0, 1], [-5, 10])
  
  // Main gradient mesh - using wide ellipses instead of circles
  const gradientBackground = useMotionTemplate`
    radial-gradient(ellipse 120% 80% at ${gradient1X}% ${gradient1Y}%, rgba(232, 180, 184, 0.7) 0%, transparent 60%),
    radial-gradient(ellipse 100% 120% at ${gradient2X}% ${gradient2Y}%, rgba(125, 143, 163, 0.6) 0%, transparent 60%),
    radial-gradient(ellipse 140% 70% at ${gradient3X}% ${gradient3Y}%, rgba(168, 197, 168, 0.5) 0%, transparent 60%),
    linear-gradient(135deg, #1e2a24 0%, #2d3a34 50%, #1e2a24 100%)
  `
  
  const filterStyle = useMotionTemplate`hue-rotate(${rotateHue}deg)`
  
  // Layer movement - subtle
  const layerX = useTransform(slowX, [0, 1], [-30, 30])
  const layerY = useTransform(slowY, [0, 1], [-15, 15])
  
  // Throttle mouse move handler to reduce update frequency
  let lastUpdateTime = 0
  const throttleDelay = 16 // ~60fps
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = performance.now()
    if (now - lastUpdateTime < throttleDelay) return
    lastUpdateTime = now
    
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    mouseX.set(Math.max(0, Math.min(1, x)))
    mouseY.set(Math.max(0, Math.min(1, y)))
  }, [mouseX, mouseY])
  
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <motion.div 
      ref={containerRef}
      initial={{ y: 100, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 1.2, delay: isLoaded ? 1.0 : 0, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[130px] md:h-[160px] overflow-hidden mt-auto rounded-t-[1rem]"
    >
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a24] via-[#2d3a34] to-[#1e2a24]" />
      
      {/* Main animated gradient mesh */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: gradientBackground,
          filter: filterStyle,
        }}
      />
      
      {/* Secondary moving layer - wide horizontal bands */}
      <motion.div
        className="absolute inset-[-50%]"
        style={{
          x: layerX,
          y: layerY,
        }}
      >
        <div 
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: `
              radial-gradient(ellipse 200% 60% at 30% 40%, rgba(232, 180, 184, 0.5) 0%, transparent 50%),
              radial-gradient(ellipse 180% 50% at 70% 60%, rgba(125, 143, 163, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 160% 70% at 50% 50%, rgba(168, 197, 168, 0.35) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>
      
      {/* Soft color wash overlay */}
      <motion.div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background: `
            linear-gradient(
              120deg,
              rgba(232, 180, 184, 0.3) 0%,
              rgba(168, 197, 168, 0.2) 50%,
              rgba(125, 143, 163, 0.3) 100%
            )
          `,
          x: useTransform(smoothX, [0, 1], [-20, 20]),
        }}
      />
      
      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a24]/40 via-transparent to-[#1e2a24]/20 pointer-events-none" />
      
      {/* Dark overlay behind text for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 pointer-events-none" />
      
      {/* Overlay Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-7 md:px-12 text-white text-[10px] md:text-xs font-medium tracking-wider uppercase pointer-events-none">
        <div className="flex items-center h-full pt-4">
          <span className="drop-shadow-md">{time || "00:00 AM"}</span>
        </div>
        <div className="flex items-center h-full pt-4 ml-15">
          <span className="drop-shadow-md">The System Grid</span>
        </div>
        <div className="flex flex-col items-end justify-center h-full pt-4 text-right">
          <span className="drop-shadow-md">37°49'11.6"N</span>
          <span className="drop-shadow-md">—38.0" N⊕ 122°28'42.9"W</span>
        </div>
      </div>
    </motion.div>
  )
}
