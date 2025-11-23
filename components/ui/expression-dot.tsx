"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"

type Expression = 
  | "smile" 
  | "laugh" 
  | "sad" 
  | "angry" 
  | "cool" 
  | "surprise" 
  | "shocked" 
  | "confused"
  | "upsideDown"
  | "wink"
  | "skeptical"
  | "confounded"
  | "rollingEyes"

const EXPRESSIONS: Expression[] = [
  "smile", "laugh", "sad", "angry", "cool", "surprise", "shocked", "confused",
  "upsideDown", "wink", "skeptical", "confounded", "rollingEyes"
]

export function ExpressionDot({ className }: { className?: string }) {
  const [currentExpression, setCurrentExpression] = useState<Expression>("smile")
  const controls = useAnimation()
  
  // Refs for eye tracking
  const dotRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(dotRef)
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })

  const changeExpression = () => {
    // Get a random expression that isn't the current one
    let next = currentExpression
    while (next === currentExpression) {
      next = EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)]
    }
    setCurrentExpression(next)
    
    // Trigger animation
    const isUpsideDown = next === "upsideDown"
    
    controls.start({
      scale: [1, 1.1, 1],
      rotate: isUpsideDown ? 180 : [0, -5, 5, 0],
      transition: { duration: 0.3 }
    })
  }

  // Handle scroll back logic - change expression when component re-enters view
  useEffect(() => {
    if (isInView) {
      changeExpression()
    }
  }, [isInView])

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Eye Tracking Logic
      if (dotRef.current) {
        const rect = dotRef.current.getBoundingClientRect()
        const dotCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        }
        
        const dx = e.clientX - dotCenter.x
        const dy = e.clientY - dotCenter.y
        
        // Max shift 6px in SVG space
        const maxShift = 6
        const sensitivity = 0.01 
        
        const shiftX = Math.max(-maxShift, Math.min(maxShift, dx * sensitivity))
        const shiftY = Math.max(-maxShift, Math.min(maxShift, dy * sensitivity))
        
        setEyeOffset({ x: shiftX, y: shiftY })
      }
    }

    window.addEventListener("mousemove", handleGlobalMouseMove)
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove)
  }, [])

  return (
    <motion.div
      ref={dotRef}
      className={`relative inline-flex items-center justify-center rounded-full border-[0.005em] border-black cursor-pointer ${className}`}
      style={{ backgroundColor: "color-mix(in srgb, var(--renor-orange), transparent 15%)" }}
      onMouseEnter={changeExpression}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Interactive expression dot"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-[12%] overflow-visible">
         <FaceFeatures expression={currentExpression} eyeOffset={eyeOffset} />
      </svg>
    </motion.div>
  )
}

function FaceFeatures({ expression, eyeOffset }: { expression: Expression, eyeOffset: { x: number, y: number } }) {
  // Common transition for all features
  const transition = { type: "spring" as const, stiffness: 200, damping: 20 }
  
  // Feature variants - same as before
  const variants = {
    eyes: {
      smile: { d: "M 30 40 Q 30 40 30 40 M 70 40 Q 70 40 70 40", strokeWidth: 12, scaleY: 1 },
      laugh: { d: "M 25 40 L 35 35 L 25 30 M 75 40 L 65 35 L 75 30", strokeWidth: 5, scaleY: 1 },
      sad: { d: "M 30 45 Q 30 45 30 45 M 70 45 Q 70 45 70 45", strokeWidth: 12, scaleY: 1 },
      angry: { d: "M 30 40 Q 30 40 30 40 M 70 40 Q 70 40 70 40", strokeWidth: 10, scaleY: 1 },
      cool: { d: "M 20 40 L 40 40 M 60 40 L 80 40", strokeWidth: 10, scaleY: 1 },
      surprise: { d: "M 30 35 Q 30 35 30 35 M 70 35 Q 70 35 70 35", strokeWidth: 12, scaleY: 1 },
      shocked: { d: "M 30 35 Q 30 35 30 35 M 70 35 Q 70 35 70 35", strokeWidth: 10, scaleY: 1.5 },
      confused: { d: "M 30 40 Q 30 40 30 40 M 65 40 L 75 40", strokeWidth: 10, scaleY: 1 },
      upsideDown: { d: "M 30 40 Q 30 40 30 40 M 70 40 Q 70 40 70 40", strokeWidth: 12, scaleY: 1 },
      wink: { d: "M 30 40 Q 30 40 30 40 M 65 40 L 75 40", strokeWidth: 10, scaleY: 1 },
      skeptical: { d: "M 30 40 Q 30 40 30 40 M 70 40 Q 70 40 70 40", strokeWidth: 12, scaleY: 1 },
      confounded: { d: "M 25 40 L 35 35 L 25 30 M 75 40 L 65 35 L 75 30", strokeWidth: 5, scaleY: 1 },
      rollingEyes: { d: "M 30 30 Q 30 30 30 30 M 70 30 Q 70 30 70 30", strokeWidth: 12, scaleY: 1 },
    },
    brows: {
      smile: { d: "M 30 30 Q 30 30 30 30 M 70 30 Q 70 30 70 30", opacity: 0 },
      laugh: { d: "M 30 25 Q 30 25 30 25 M 70 25 Q 70 25 70 25", opacity: 0 },
      sad: { d: "M 25 30 L 35 25 M 75 30 L 65 25", opacity: 1, strokeWidth: 5 },
      angry: { d: "M 25 25 L 40 32 M 75 25 L 60 32", opacity: 1, strokeWidth: 6 },
      cool: { d: "M 25 30 Q 50 25 75 30", opacity: 0 },
      surprise: { d: "M 25 25 Q 30 20 35 25 M 65 25 Q 70 20 75 25", opacity: 1, strokeWidth: 5 },
      shocked: { d: "M 25 20 L 35 20 M 65 20 L 75 20", opacity: 1, strokeWidth: 5 },
      confused: { d: "M 25 25 L 35 28 M 65 25 Q 70 20 75 25", opacity: 1, strokeWidth: 5 },
      upsideDown: { d: "M 30 30 Q 30 30 30 30 M 70 30 Q 70 30 70 30", opacity: 0 },
      wink: { d: "M 30 30 Q 30 30 30 30 M 70 30 Q 70 30 70 30", opacity: 0 },
      skeptical: { d: "M 25 35 L 35 35 M 65 25 Q 70 20 75 25", opacity: 1, strokeWidth: 5 },
      confounded: { d: "M 25 30 L 35 25 M 75 30 L 65 25", opacity: 1, strokeWidth: 5 },
      rollingEyes: { d: "M 25 25 L 75 25", opacity: 1, strokeWidth: 5 },
    },
    mouth: {
      smile: { d: "M 30 65 Q 50 80 70 65", fill: "transparent", strokeWidth: 8 },
      laugh: { d: "M 30 60 Q 50 90 70 60", fill: "transparent", strokeWidth: 8 },
      sad: { d: "M 30 75 Q 50 60 70 75", fill: "transparent", strokeWidth: 8 },
      angry: { d: "M 35 70 L 65 70", fill: "transparent", strokeWidth: 8 },
      cool: { d: "M 35 70 Q 50 75 65 65", fill: "transparent", strokeWidth: 7 },
      surprise: { d: "M 45 65 Q 45 75 55 75 Q 65 75 65 65 Q 65 55 55 55 Q 45 55 45 65", fill: "transparent", strokeWidth: 7 },
      shocked: { d: "M 40 65 Q 40 85 60 85 Q 80 85 80 65 Q 80 45 60 45 Q 40 45 40 65", fill: "currentColor", strokeWidth: 0 },
      confused: { d: "M 35 70 Q 50 65 65 75", fill: "transparent", strokeWidth: 7 },
      upsideDown: { d: "M 30 65 Q 50 80 70 65", fill: "transparent", strokeWidth: 8 },
      wink: { d: "M 35 70 Q 50 80 65 70", fill: "transparent", strokeWidth: 8 },
      skeptical: { d: "M 35 70 L 65 70", fill: "transparent", strokeWidth: 8 },
      confounded: { d: "M 30 70 L 40 65 L 50 70 L 60 65 L 70 70", fill: "transparent", strokeWidth: 6 },
      rollingEyes: { d: "M 35 70 L 65 70", fill: "transparent", strokeWidth: 8 },
    }
  }

  // Special handling
  const isCool = expression === "cool"
  const isShocked = expression === "shocked"

  return (
    <g className="stroke-background fill-background" strokeLinecap="round" strokeLinejoin="round">
      {/* Eyes Group - Tracks full offset */}
      <motion.path
        initial={false}
        animate={{ 
            ...variants.eyes[expression],
            x: eyeOffset.x, 
            y: eyeOffset.y 
        }}
        transition={transition}
        fill="transparent"
        stroke="currentColor"
      />
      
      {/* Brows Group - Tracks 50% offset for depth */}
      <motion.path
        initial={false}
        animate={{
            ...variants.brows[expression],
            x: eyeOffset.x * 0.5, 
            y: eyeOffset.y * 0.5
        }}
        transition={transition}
        fill="transparent"
        stroke="currentColor"
      />

      {/* Glasses for Cool - Tracks full offset */}
      <motion.path
         initial={{ opacity: 0, scale: 0 }}
         animate={{ 
            opacity: isCool ? 1 : 0,
            d: isCool ? "M 20 40 L 80 40 L 75 55 L 60 55 L 60 45 L 40 45 L 40 55 L 25 55 Z" : "M 20 40 L 80 40",
            x: eyeOffset.x,
            y: eyeOffset.y
         }}
         transition={transition}
         fill="currentColor"
         stroke="none"
      />

      {/* Mouth Group - Static (no tracking) */}
      <motion.path
        initial={false}
        animate={{
            ...variants.mouth[expression],
            fill: isShocked ? "currentColor" : "transparent",
            stroke: isShocked ? "none" : "currentColor"
        }}
        transition={transition}
      />
    </g>
  )
}
