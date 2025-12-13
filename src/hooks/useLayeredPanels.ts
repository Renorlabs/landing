/**
 * Layered Panels Hook
 * Creates depth through layered panel reveals
 * Perfect for Testimonials, Pricing, and card-based sections
 */

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LayeredPanelsOptions {
  stagger?: number
  scale?: boolean
  rotate?: boolean
  depth?: number
  start?: string
}

export function useLayeredPanels(
  selector: string,
  options: LayeredPanelsOptions = {}
) {
  const containerRef = useRef<HTMLElement>(null)
  const {
    stagger = 0.2,
    scale = true,
    rotate = false,
    depth = 20,
    start = 'top 80%',
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      const panels = containerRef.current.querySelectorAll(selector)

      panels.forEach((panel, index) => {
        const zIndex = panels.length - index
        const zOffset = (panels.length - index - 1) * depth

        gsap.set(panel, {
          opacity: 0,
          y: 80,
          scale: scale ? 0.9 : 1,
          rotation: rotate ? 5 : 0,
          z: -zOffset,
          zIndex,
        })

        gsap.to(panel, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          z: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * stagger,
          scrollTrigger: {
            trigger: panel,
            start,
            toggleActions: 'play none none reverse',
          },
        })
      })
    },
    { scope: containerRef, dependencies: [selector] }
  )

  return containerRef as React.RefObject<HTMLElement>
}











