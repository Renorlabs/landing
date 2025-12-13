import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function StudioReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth the scroll progress for fluid zoom animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Width and height animation using percentage
  // Initial: horizontal pill shape (wider, shorter) - compact size
  const widthPercent = useTransform(smoothProgress, [0, 0.5], [14, 95])
  const heightPercent = useTransform(smoothProgress, [0, 0.5], [6, 90])
  const borderRadius = useTransform(smoothProgress, [0, 0.5], [80, 24])
  
  // Text movement - slide out to sides as image expands
  // Text exits faster than image grows to avoid overlap
  const leftTextX = useTransform(smoothProgress, [0, 0.4], [40, -800])
  const rightTextX = useTransform(smoothProgress, [0, 0.4], [50, 800])
  
  // "Keep Scrolling" indicator fades out - not needed
  
  // Overlay text reveals after expansion
  const overlayOpacity = useTransform(smoothProgress, [0.55, 0.75], [0, 1])
  const overlayY = useTransform(smoothProgress, [0.55, 0.75], [40, 0])
  
  // Image zoom - starts zoomed in, zooms out as container expands
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1.6, 1])

  return (
    <section ref={containerRef} className="relative z-20 h-[300vh] bg-[#faf8f5]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Text Layer - equal gaps on both sides */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <div className="flex items-center">
                <motion.span 
                    style={{ x: leftTextX }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#252525] tracking-tight"
                >
                    We are
                </motion.span>
                
                {/* Equal gap on left */}
                <div className="w-3 md:w-4 shrink-0" />
                
                {/* Invisible spacer matching image width */}
                <div className="w-[14vw] min-w-[160px] max-w-[220px] shrink-0 ml-10" />
                
                {/* Equal gap on right */}
                <div className="w-3 md:w-4 shrink-0" />
                
                <motion.span 
                    style={{ x: rightTextX }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#252525] tracking-tight"
                >
                  Renorlabs
                </motion.span>
            </div>
        </div>

        {/* Expanding Image */}
        <motion.div
            style={{ 
              width: useTransform(widthPercent, (v) => `${v}vw`),
              height: useTransform(heightPercent, (v) => `${v}vh`),
              borderRadius
            }}
            className="relative z-10 overflow-hidden shadow-2xl"
        >
            <motion.img 
                src="./fuji.png" 
                alt="Studio Reveal" 
                style={{ scale: imageScale }}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
            />
            
            {/* Overlay Text */}
            <motion.div
                style={{ opacity: overlayOpacity, y: overlayY }}
                className="absolute inset-0 flex items-center justify-center z-20"
            >
                 <h2 className="text-[#252525] text-4xl md:text-6xl lg:text-7xl font-medium text-center px-4 tracking-tight">
                    Not just a simple studio
                 </h2>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
