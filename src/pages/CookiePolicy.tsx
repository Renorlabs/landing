'use client'

import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CookiePolicy() {
  return (
    <div className="min-h-screen w-full bg-[#faf8f5] text-[#252525]">
      <Navbar visible={true} isLoaded={true} />
      
      <article className="max-w-4xl mx-auto px-4 md:px-12 lg:px-24 py-24 md:py-32">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#252525]/70 hover:text-[#252525] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] mb-4">
            Cookie Policy
          </h1>
          <div className="flex flex-col gap-2 text-sm text-[#252525]/60">
            <p><strong>Entity:</strong> Renorlabs Private Limited</p>
            <p><strong>Website:</strong> renorlabs.com</p>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-none space-y-10"
        >
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">1. What Are Cookies</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Cookies are small files stored on your device to help websites function effectively and analyze usage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">2. How We Use Cookies</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              Renorlabs uses cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4">
              <li>Improve website speed and performance</li>
              <li>Analyze traffic</li>
              <li>Customize experience</li>
              <li>Run security features</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4">
              <li>Essential cookies</li>
              <li>Analytics cookies (Google Analytics or similar)</li>
              <li>Functional cookies</li>
              <li>Marketing cookies (only if implemented later)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">4. Managing Cookies</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              You can control or disable cookies through your browser settings.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Visitors from the EU/UK will see a cookie consent banner as required by GDPR.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">5. Updates</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              This Cookie Policy may be updated periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">Contact</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              For questions about our use of cookies, contact us at: <a href="mailto:legal@renorlabs.com" className="underline hover:text-[#252525]">legal@renorlabs.com</a>
            </p>
          </section>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}
