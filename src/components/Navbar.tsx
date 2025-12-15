import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import { useLenis } from 'lenis/react'
import { useLocation, useNavigate } from 'react-router-dom'

interface NavbarProps {
  visible?: boolean
  isLoaded?: boolean
}

export function Navbar({ visible = true, isLoaded = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lenis = useLenis()
  const location = useLocation()
  const navigate = useNavigate()

  type NavSection = 'home' | 'about' | 'pricing'

  const handleNavClick = (section: NavSection) => (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault()

    const offset = section === 'home' ? 0 : -100
    const isOnHomePage = location.pathname === '/'

    // If we're not on the home page, navigate there first
    if (!isOnHomePage) {
      navigate('/')
      // Wait for navigation and page load, then scroll to section
      setTimeout(() => {
        scrollToSection(section, offset)
      }, 100)
    } else {
      // We're already on home page, just scroll to section
      scrollToSection(section, offset)
    }

    setIsMenuOpen(false)
  }

  const scrollToSection = (section: NavSection, offset: number) => {
    if (lenis) {
      // For the sticky hero, scroll directly to the top so "Home" always works
      if (section === 'home') {
        lenis.scrollTo(0, {
          duration: 1.2,
          offset,
          easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        })
      } else {
        // Try to find the element, with retry logic for lazy-loaded content
        const tryScroll = (attempts = 0) => {
          const targetElement = document.getElementById(section)
          if (!targetElement) {
            if (attempts < 10) {
              // Retry up to 10 times (1 second total) for lazy-loaded content
              setTimeout(() => tryScroll(attempts + 1), 100)
            }
            return
          }

          lenis.scrollTo(targetElement, {
            duration: 1.2,
            offset,
            easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          })
        }
        tryScroll()
      }
    } else {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const tryScroll = (attempts = 0) => {
          const targetElement = document.getElementById(section)
          if (!targetElement) {
            if (attempts < 10) {
              setTimeout(() => tryScroll(attempts + 1), 100)
            }
            return
          }

          const rect = targetElement.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const targetY = rect.top + scrollTop + offset

          window.scrollTo({ top: targetY, behavior: 'smooth' })
        }
        tryScroll()
      }
    }
  }

  const navItems: { label: string; section: NavSection }[] = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Pricing', section: 'pricing' },
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={isLoaded ? { y: visible ? 0 : -100, opacity: visible ? 1 : 0 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-start pointer-events-none"
      >
        {/* Logo Section - Pointer events auto to allow clicking if needed */}
        <div className="flex flex-col items-center gap-0.3 pointer-events-auto">
          <div className="w-8 h-8 relative">
             <img src="/renor-logo.webp" alt="Renor Logo" className="w-full h-full object-contain" loading="eager" decoding="sync" />
          </div>
          {/* Gradient Line */}
          <div className="h-[2.5px] w-[85%] bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>

        {/* Desktop Menu */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: isLoaded ? 0.5 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center bg-[#5f6163] rounded-2xl p-1.5 pl-6 pr-1.5 gap-4 pointer-events-auto"
        >
          <div className="flex gap-5 text-[#faf8f5] font-medium text-base leading-[1.4]">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                type="button"
                onClick={handleNavClick(item.section)}
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={isLoaded ? { duration: 0.5, delay: 0.8 + (index * 0.1), ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
                className="relative hover:text-white transition-colors group inline-block cursor-pointer bg-transparent border-none p-0"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                style={{ transformOrigin: 'center' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#faf8f5] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>
          <motion.a 
              href="https://cal.com/renorlabs/talk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { 
                  opacity: 1, 
                  scale: 1 
              } : {
                  opacity: 0,
                  scale: 0.9
              }}
              transition={isLoaded ? { 
                  duration: 0.5, 
                  delay: 1.1,
                  ease: [0.16, 1, 0.3, 1]
              } : { duration: 0 }}
              whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "#faf8f5",
                  color: "#252525",
                  transition: { duration: 0.1 }
              }}
              className="relative bg-[#252525] text-white px-3 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer leading-[1.4] overflow-hidden inline-block"
          >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                CONTACT
              </motion.span>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-[#252525] bg-white/50 backdrop-blur-sm rounded-full pointer-events-auto"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#faf8f5] flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#252525]"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-medium text-[#252525]">
              <button type="button" onClick={handleNavClick('home')}>
                Home
              </button>
              <button type="button" onClick={handleNavClick('about')}>
                About
              </button>
              <button type="button" onClick={handleNavClick('pricing')}>
                Pricing
              </button>
              <a 
                href="https://cal.com/renorlabs/talk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#252525] text-white px-8 py-3 rounded-full mt-4 inline-block"
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

