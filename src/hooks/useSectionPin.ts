/**
 * Section Pinning Hook
 * Pins sections during scroll for immersive experiences
 * Used for Hero, StudioReveal, and key transition moments
 */

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionPinOptions {
  pinSpacing?: boolean
  start?: string
  end?: string | number
  scrub?: boolean | number
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

export function useSectionPin(
  options: SectionPinOptions = {}
) {
  const sectionRef = useRef<HTMLElement>(null)
  const {
    pinSpacing = true,
    start = 'top top',
    end = '+=100%',
    scrub = false,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  } = options

  useGSAP(
    () => {
      if (!sectionRef.current) return

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start,
        end,
        pin: true,
        pinSpacing,
        scrub,
        onEnter,
        onLeave,
        onEnterBack,
        onLeaveBack,
      })
    },
    { scope: sectionRef, dependencies: [start, end] }
  )

  return sectionRef
}











