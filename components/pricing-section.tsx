"use client"

import { Check, Flame, ArrowRight } from "lucide-react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const plans = [
  {
    name: "Prototype",
    price: "$1,499",
    description: "For founders who want a clear and fast starting point.",
    features: [
      "AI-first MVP design",
      "Core screens and flows",
      "Light technical planning",
      "One round of revisions",
      "Delivery in 10 to 14 days",
    ],
    buttonText: "Start your prototype",
    popular: false,
    dark: false,
    period: "one-time payment",
  },
  {
    name: "Growth",
    price: "$3,200",
    description: "For teams ready to refine, iterate, and prepare for scale.",
    features: [
      "End-to-end product design",
      "System mapping and UX architecture",
      "Component library",
      "Weekly iterations",
      "Priority support",
    ],
    buttonText: "Start with Growth",
    popular: true,
    dark: false,
    period: "per month",
  },
  {
    name: "Venture Partnership",
    price: "Custom",
    description: "For founders who want a long-term product partner.",
    features: [
      "Full design and engineering support",
      "Deeper system strategy",
      "Technical advisory",
      "Flexible monthly scope",
      "Access to founder network",
    ],
    buttonText: "Request partnership",
    popular: false,
    dark: true,
    period: "tailored to you",
  },
]

function ShatteringBadge() {
  const [crackLevel, setCrackLevel] = useState(0)
  const [isShattered, setIsShattered] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; rot: number; scale: number; color: string }[]>([])
  const [debris, setDebris] = useState<{ id: number; x: number; y: number; rot: number; scale: number; velocityX: number; velocityY: number }[]>([])
  const controls = useAnimation()

  const handleHover = async () => {
    if (isShattered) return

    // Increment crack level
    const nextLevel = crackLevel + 1
    setCrackLevel(nextLevel)

    // Trigger shake/crack animation - more violent as it progresses
    await controls.start({
      x: [0, -2 * nextLevel, 2 * nextLevel, -1 * nextLevel, 1 * nextLevel, 0],
      y: [0, -1 * nextLevel, 1 * nextLevel, 0],
      rotate: [0, -1, 1, 0],
      transition: { duration: 0.2 }
    })

    // Spawn dropping dust particles (falling to "floor" and accumulating)
    const newParticles = Array.from({ length: 2 + nextLevel }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: (Math.random() - 0.5) * 100, // Wider spread
      y: 0,
      rot: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      color: Math.random() > 0.7 ? "var(--renor-orange)" : "rgba(0,0,0,0.5)"
    }))
    setParticles(prev => [...prev, ...newParticles])

    // Shatter condition
    if (nextLevel >= 5) {
      setIsShattered(true)
      setParticles([]) // Clear dust immediately on shatter
      
      // Generate explosive debris
      const debrisCount = 24
      const newDebris = Array.from({ length: debrisCount }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / debrisCount + (Math.random() * 0.5 - 0.25)
        const force = 100 + Math.random() * 150 // Explosive force
        return {
          id: i,
          x: 0,
          y: 0,
          rot: Math.random() * 360,
          scale: 0.4 + Math.random() * 0.6,
          velocityX: Math.cos(angle) * force,
          velocityY: Math.sin(angle) * force - 50 // Upward bias initially
        }
      })
      setDebris(newDebris)

      // Reset after a delay
      setTimeout(() => {
        setCrackLevel(0)
        setIsShattered(false)
        setParticles([]) // Clear dust pile on reset
        setDebris([])
      }, 3500)
    }
  }

  // Fire Intensity Logic
  const fireColor = crackLevel === 0 ? "white" : 
                    crackLevel <= 2 ? "#ffe0cc" : 
                    crackLevel <= 4 ? "#ff8533" : "#ff4500" // Redder at the end
  
  // Grows aggressively at the end
  const fireScale = 1 + (crackLevel * 0.35) // Up to ~2.75x
  const fireFilter = crackLevel >= 3 ? "drop-shadow(0 0 12px var(--renor-orange)) brightness(1.2)" : "none"

  return (
    <div className="absolute top-6 right-6 z-20" onMouseEnter={handleHover}>
      {/* Floor/Ground for particles to land on */}
      <div className="absolute top-full left-1/2 w-0 h-0 overflow-visible">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: p.x, y: 0, opacity: 1, rotate: 0 }}
              animate={{ 
                y: 45 + (Math.random() * 5), // Pile up on floor
                rotate: p.rot,
                opacity: [1, 1, 0.8] 
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{ backgroundColor: p.color }}
              className="absolute w-1 h-1 rounded-sm"
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {!isShattered ? (
          <motion.div
            key="badge"
            animate={controls}
            className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm cursor-pointer relative overflow-visible origin-center border border-transparent"
            style={{ 
              borderColor: crackLevel >= 4 ? "rgba(255, 69, 0, 0.3)" : "transparent",
              boxShadow: crackLevel >= 4 ? "0 0 15px rgba(255, 69, 0, 0.2)" : "none"
             }}
          >
            {/* Cracks Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 120 30" preserveAspectRatio="none">
              {crackLevel >= 1 && <path d="M10,0 L15,10 L12,15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />}
              {crackLevel >= 2 && <path d="M40,30 L45,20 L42,10" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />}
              {crackLevel >= 3 && <path d="M80,0 L75,12 L85,18" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />}
              {crackLevel >= 4 && <path d="M100,30 L95,20 L105,15 L100,5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />}
              
              {/* Magma Fissures */}
              {crackLevel >= 3 && <path d="M40,30 L45,20" stroke="var(--renor-orange)" strokeWidth="1.5" opacity="1" filter="drop-shadow(0 0 2px orange)" />}
              {crackLevel >= 4 && <path d="M100,30 L95,20" stroke="var(--renor-orange)" strokeWidth="1.5" opacity="1" filter="drop-shadow(0 0 2px orange)" />}
            </svg>

            <motion.div 
              animate={{ scale: fireScale, filter: fireFilter }}
              transition={{ type: "spring", bounce: 0.6, stiffness: 200 }}
              className="relative z-10"
            >
              {/* Intense Inner Core */}
              <div className="absolute inset-0 bg-orange-500 blur-md opacity-60 rounded-full scale-110" />
              <div className="absolute inset-0 bg-white blur-sm opacity-80 rounded-full scale-50 animate-pulse" />
              
              <Flame 
                className="w-3 h-3 transition-colors duration-100 relative z-10" 
                style={{ fill: fireColor, color: fireColor }}
              />
              
              {/* Dark Smoke */}
              {crackLevel >= 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 0.8, 0], y: -25, x: [0, 5, -5], scale: [0.5, 2.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -top-3 left-0 w-full h-full flex justify-center"
                >
                   <div className="w-2 h-2 bg-gray-800/60 rounded-full blur-sm" />
                </motion.div>
              )}
            </motion.div>
            
            <span className="relative z-10 tracking-wide">Most Popular</span>
          </motion.div>
        ) : (
          <div className="relative w-[120px] h-[30px] flex items-center justify-center"> 
            {/* High-Impact Explosion Debris */}
            {debris.map((d) => (
              <motion.div
                key={d.id}
                initial={{ x: 0, y: 0, scale: d.scale, opacity: 1, rotate: 0 }}
                animate={{ 
                  x: d.velocityX, 
                  y: d.velocityY + 200, // Add gravity over time
                  rotate: d.rot + 720, // Fast spin
                  opacity: 0
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut"
                }}
                className="absolute w-3 h-3 bg-black rounded-sm"
                style={{
                   width: Math.random() * 8 + 4 + "px",
                   height: Math.random() * 4 + 2 + "px",
                   backgroundColor: Math.random() > 0.8 ? "var(--renor-orange)" : "black"
                }}
              />
            ))}

            {/* Flash Shockwave */}
            <motion.div
               initial={{ scale: 0.5, opacity: 1 }}
               animate={{ scale: 4, opacity: 0 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full blur-lg mix-blend-overlay"
            />
            
            {/* Orange Explosion Core */}
            <motion.div
               initial={{ scale: 0, opacity: 1 }}
               animate={{ scale: 3, opacity: 0 }}
               transition={{ duration: 0.5 }}
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--renor-orange)] rounded-full blur-md"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern-light opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="renor-section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Added consistent mini heading matching services section style */}
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              PRICING
            </span>
            <h2 className="renor-section-title">Plans and Pricing</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="renor-section-subtitle"
          >
            Transparent pricing for every stage of your product journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border group animate-fade-in-up ${
                plan.dark
                  ? "bg-foreground text-background border-transparent shadow-xl"
                  : plan.popular
                    ? "bg-background text-foreground border-[var(--renor-orange)]/30 shadow-lg hover:border-[var(--renor-orange)] hover:shadow-xl"
                    : "bg-background text-foreground border-border shadow-sm hover:shadow-xl hover:border-black/5"
              } flex flex-col transition-all duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <ShatteringBadge />
              )}

              <div className="mb-8 mt-2">
                <h3 className={`text-xl font-medium mb-4 ${plan.dark ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold tracking-tight ${plan.popular ? "text-[var(--renor-orange)]" : ""}`}>{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm font-normal ${plan.dark ? "text-gray-400" : "text-muted-foreground"}`}>
                      / {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <p
                  className={`font-medium mb-6 leading-relaxed ${plan.dark ? "text-gray-300" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
                <div className={`h-px w-full mb-6 ${plan.dark ? "bg-white/10" : "bg-black/5"}`} />
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.popular 
                            ? "bg-[var(--renor-orange)] text-white" 
                            : plan.dark 
                              ? "bg-white/10 text-white" 
                              : "bg-black/5 text-black"
                        }`}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className={plan.dark ? "text-gray-300" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  className={`w-full h-12 rounded-xl font-medium transition-all duration-300 group-hover:scale-[1.02] ${
                    plan.dark
                      ? "bg-white text-black hover:bg-gray-100 border-0"
                      : "bg-black text-white hover:bg-black/90 shadow-sm"
                  }`}
                  variant="default"
                >
                  {plan.buttonText}
                  <ArrowRight
                    className={`w-4 h-4 ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
