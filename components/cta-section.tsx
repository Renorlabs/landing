"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Star } from "lucide-react"

// A custom Stamp component to create the perforated edge look
function Stamp({
  className,
  rotation,
  children,
  delay = 0,
}: {
  className?: string
  rotation: number
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.5 }}
      viewport={{ once: true }}
      className={`absolute z-20 flex items-center justify-center bg-white p-1 shadow-lg ${className}`}
      style={{
        // CSS trick for perforated stamp edge
        // We use a radial gradient mask to "cut out" the circles along the edge
        maskImage: `radial-gradient(circle at 6px 6px, rgba(0,0,0,0.15) 6px, black 6.5px)`,
        maskPosition: "-6px -6px",
        maskSize: "24px 24px",
        maskComposite: "exclude",
        WebkitMaskImage: `radial-gradient(circle at 6px 6px, rgba(0,0,0,0.15) 6px, black 6.5px)`,
        WebkitMaskPosition: "-6px -6px",
        WebkitMaskSize: "24px 24px",
        WebkitMaskComposite: "destination-in",
      }}
    >
      <div className="flex h-full w-full items-center justify-center border border-dashed border-zinc-300 bg-zinc-50 p-2">
        {children}
      </div>
    </motion.div>
  )
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative">
          {/* Decorative Stamps */}
          <Stamp
            rotation={-6}
            delay={0.2}
            className="hidden h-32 w-28 -translate-x-16 -translate-y-12 md:flex lg:h-40 lg:w-36"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-violet-100/50 p-2 text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-violet-800">Est. 2025</div>
              <div className="font-serif text-3xl font-bold text-violet-900">Rn.</div>
              <div className="h-px w-12 bg-violet-300" />
              <div className="text-[8px] uppercase text-violet-600">Premium Design</div>
            </div>
          </Stamp>

          <Stamp
            rotation={12}
            delay={0.4}
            className="bottom-0 right-0 hidden h-32 w-28 translate-x-12 translate-y-12 md:flex lg:h-40 lg:w-36"
          >
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-orange-100/50">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Star className="h-12 w-12 fill-orange-400 text-orange-500 opacity-80" />
              </motion.div>
              <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] font-bold uppercase tracking-wider text-orange-800">
                Certified
              </div>
            </div>
          </Stamp>

          {/* Main Business Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ filter: "contrast(320%) brightness(100%)" }}>
              <svg className="h-full w-full">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 px-8 py-16 text-center md:px-16 md:py-24">
              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--renor-orange)]" />
                  Open for new projects
                </span>
                <h2 className="font-heading text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl lg:text-6xl">
                  Let's build something <br />
                  <span className="text-zinc-400">extraordinary.</span>
                </h2>
              </div>

              <p className="max-w-lg text-balance text-lg text-zinc-600">
                Transform your ideas into polished, high-performance digital products with our dedicated team.
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-zinc-900 px-10 py-7 text-lg text-white shadow-xl transition-all hover:bg-black hover:shadow-2xl hover:shadow-zinc-500/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book a call
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  {/* Silver glow effect */}
                  <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-[100%] group-hover:opacity-100" />
                  {/* Button border glow */}
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                </Button>
              </motion.div>

              {/* Minimal Contact Info */}
              <div className="mt-4 flex items-center gap-8 text-sm font-medium text-zinc-400">
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  hello@renorlabs.com
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
                <span>Est. 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
