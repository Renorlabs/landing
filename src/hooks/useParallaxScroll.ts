/**
 * Parallax Scroll Hook
 * Subtle parallax effects for depth and premium feel
 * Used for background elements, images, and layered content
 */

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxOptions {
  speed?: number
  direction?: 'up' | 'down'
  start?: string
  end?: string
  scrub?: boolean | number
}

export function useParallaxScroll(
  options: ParallaxOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null)
  const {
    speed = 0.5,
    direction = 'up',
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
  } = options

  useGSAP(
    () => {
      if (!elementRef.current) return

      const multiplier = direction === 'up' ? -1 : 1

      gsap.to(elementRef.current, {
        y: `${multiplier * speed * 100}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          end,
          scrub,
        },
      })
    },
    { scope: elementRef, dependencies: [speed, direction] }
  )

  return elementRef as React.RefObject<HTMLElement>
}











