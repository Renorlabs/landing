import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

export function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      // Use Lenis smooth scroll to top
      lenis.scrollTo(0, {
        duration: 0.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    } else {
      // Fallback to native scroll
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  return null
}
