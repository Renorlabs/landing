import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + (i * 0.1),
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  }

  const bottomBarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-30 bg-[#252525]"
    >
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left - Image (full height, edge to edge) */}
        <motion.div
          variants={imageVariants}
          className="lg:col-span-4 p-6 md:p-8 lg:p-0"
        >
          <img 
            src="/footer.webp" 
            alt="Renor Systems" 
            className="w-full h-full object-contain lg:object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-8 flex flex-col justify-between px-6 md:px-12 lg:px-14 py-12 lg:py-16"
        >
          {/* Large Renor Text */}
          <motion.div variants={itemVariants} className="mb-auto">
            <h2 className="text-[32vw] sm:text-[26vw] md:text-[22vw] lg:text-[18vw] xl:text-[16vw] font-bold text-[#faf8f5] leading-[0.85] tracking-tight text-left lg:-ml-5">
              Renor
            </h2>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* CTA */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-medium text-[#faf8f5] leading-tight mb-4">
                Let's build something together.
              </h3>
              <motion.a 
                href="https://cal.com/renorlabs/talk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-medium text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                hello@renorlabs.com
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Links */}
            <div className="flex gap-5 text-sm font-medium text-[#faf8f5]/60 mr-4">
              <motion.a 
                href="https://x.com/renorlabs"
                target="_blank"
                rel="noopener noreferrer"
                custom={0}
                variants={linkVariants}
                whileHover={{ y: -2, color: '#faf8f5' }}
                transition={{ duration: 0.2 }}
                className="transition-colors duration-300"
              >
                Twitter
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/renorlabs"
                target="_blank"
                rel="noopener noreferrer"
                custom={1}
                variants={linkVariants}
                whileHover={{ y: -2, color: '#faf8f5' }}
                transition={{ duration: 0.2 }}
                className="transition-colors duration-300"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        variants={bottomBarVariants}
        className="border-t border-[#faf8f5]/10"
      >
        <div className="px-6 md:px-12 lg:px-24 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            
            {/* Logo & Copyright */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-5 h-5">
                  <img src="/renor-logo.png" alt="Renor Logo" className="w-full h-full object-contain brightness-0 invert" />
                </div>
                <div className="h-[2px] w-[85%] bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
              </div>
              <span className="text-xs text-[#faf8f5]/50">
                © {currentYear} Renor Systems
              </span>
            </motion.div>

            {/* Bottom Links */}
            <motion.div 
              className="flex gap-5 text-xs text-[#faf8f5]/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/privacy" className="hover:text-[#faf8f5] transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#faf8f5] transition-colors duration-300">Terms of Use</Link>
              <Link to="/cookies" className="hover:text-[#faf8f5] transition-colors duration-300">Cookies</Link>
              <span>Based in India</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

