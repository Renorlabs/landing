import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function MobileFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-30 bg-[#252525]"
    >
      <div className="px-6 md:px-12 py-12 md:py-16 flex flex-col items-center gap-8 md:gap-10">
        
        {/* Logo & Copyright */}
        <motion.div 
          className="flex flex-col items-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 md:w-10 md:h-10">
              <img 
                src="/renor-logo.webp" 
                alt="Renor Logo" 
                className="w-full h-full object-contain brightness-0 invert" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="h-[2px] w-[85%] bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
          </div>
          <span className="text-xs md:text-sm text-[#faf8f5]/50">
            © {currentYear} Renor Systems
          </span>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-[#faf8f5] leading-tight mb-4 md:mb-6">
            Let's build something together.
          </h3>
          <motion.a 
            href="mailto:hello@renor.systems" 
            className="group inline-flex items-center gap-2 text-base md:text-lg font-medium text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            hello@renor.systems
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

        {/* Social Links */}
        <motion.div 
          className="flex gap-6 md:gap-8 text-sm md:text-base font-medium text-[#faf8f5]/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href="https://x.com/renorlabs"
            target="_blank"
            rel="noopener noreferrer"
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
            whileHover={{ y: -2, color: '#faf8f5' }}
            transition={{ duration: 0.2 }}
            className="transition-colors duration-300"
          >
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Bottom Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-[#faf8f5]/50 pt-4 md:pt-6 border-t border-[#faf8f5]/10 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/privacy" className="hover:text-[#faf8f5] transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-[#faf8f5] transition-colors duration-300">
            Terms of Use
          </Link>
          <Link to="/cookies" className="hover:text-[#faf8f5] transition-colors duration-300">
            Cookies
          </Link>
          <span>Based in India</span>
        </motion.div>
      </div>
    </motion.footer>
  )
}
