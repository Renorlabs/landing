/**
 * Scroll Stacking Hook
 * Creates layered reveal effects where elements stack and reveal sequentially
 * Perfect for Process, Services, and modular assembly flows
 */

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollStackOptions {
  stagger?: number
  duration?: number
  ease?: string
  start?: string
  end?: string
  pin?: boolean
  pinSpacing?: boolean
}

export function useScrollStack(
  selector: string,
  options: ScrollStackOptions = {}
) {
  const containerRef = useRef<HTMLElement>(null)
  const {
    stagger = 0.15,
    duration = 0.8,
    ease = 'power2.out',
    start = 'top 80%',
    end = 'bottom 20%',
    pin = false,
    pinSpacing = true,
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      const elements = containerRef.current.querySelectorAll(selector)

      elements.forEach((element, index) => {
        gsap.set(element, {
          opacity: 0,
          y: 60,
          scale: 0.95,
        })

        const scrollTrigger = {
          trigger: element,
          start,
          end,
          toggleActions: 'play none none reverse',
        }

        if (pin && index === 0) {
          // Pin the first element
          gsap.to(element, {
            scrollTrigger: {
              ...scrollTrigger,
              pin: true,
              pinSpacing,
              end: '+=200%',
            },
          })
        }

        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          ease,
          delay: index * stagger,
          scrollTrigger,
        })
      })
    },
    { scope: containerRef, dependencies: [selector] }
  )

  return containerRef as React.RefObject<HTMLElement>
}











