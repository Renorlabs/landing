import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.07, 
        duration: 1.2, 
        smoothWheel: true,
        touchMultiplier: 2,
        wheelMultiplier: 1
      }}
    >
      {children}
    </ReactLenis>
  )
}

