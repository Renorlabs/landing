/**
 * Scroll Reveal Hook
 * Precise, minimal reveal animations for text and content blocks
 * Used across all sections for consistent reveal patterns
 */

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  distance?: number
  duration?: number
  ease?: string
  stagger?: number
  start?: string
  end?: string
  once?: boolean
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { y: 0, x: 60 },
  right: { y: 0, x: -60 },
  fade: { y: 0, x: 0 },
}

export function useScrollReveal(
  selector: string,
  options: RevealOptions = {}
) {
  const containerRef = useRef<HTMLElement>(null)
  const {
    direction = 'up',
    distance = 60,
    duration = 0.8,
    ease = 'power2.out',
    stagger = 0.1,
    start = 'top 85%',
    end = 'bottom 20%',
    once = true,
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      const elements = containerRef.current.querySelectorAll(selector)
      const dir = directionMap[direction]

      elements.forEach((element, index) => {
        gsap.set(element, {
          opacity: 0,
          y: dir.y !== 0 ? dir.y * (distance / 60) : 0,
          x: dir.x !== 0 ? dir.x * (distance / 60) : 0,
        })

        gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          ease,
          delay: index * stagger,
          scrollTrigger: {
            trigger: element,
            start,
            end,
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        })
      })
    },
    { scope: containerRef, dependencies: [selector, direction] }
  )

  return containerRef as React.RefObject<HTMLElement>
}











