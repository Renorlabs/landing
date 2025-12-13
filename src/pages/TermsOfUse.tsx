'use client'

import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TermsOfUse() {
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
            Terms of Use
          </h1>
          <div className="flex flex-col gap-2 text-sm text-[#252525]/60">
            <p><strong>Effective Date:</strong> 01 Dec 2025</p>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">1. Acceptance of Terms</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              By accessing renorlabs.com, you agree to these Terms of Use.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              If you do not agree, do not use the website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">2. Ownership and Intellectual Property</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              All content on renorlabs.com including text, graphics, branding, logos, layouts, designs, and digital assets is owned or licensed by Renorlabs.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              You may not copy, reproduce, modify, or distribute any content without written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">3. Permitted Use</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              You may use the website only for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4 mb-4">
              <li>Learning about Renorlabs</li>
              <li>Contacting us for services</li>
              <li>Viewing published resources</li>
            </ul>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Any misuse such as scraping, attempting to hack, duplicating content, or interfering with the website is prohibited.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">4. No Warranties</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              This website is provided on an "as is" basis.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We do not guarantee accuracy, completeness, uninterrupted access, or error-free content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">5. Limitation of Liability</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              Renorlabs is not liable for any direct, indirect, incidental, or consequential damages resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4 mb-4">
              <li>Use of the website</li>
              <li>Inability to use the website</li>
              <li>Errors or omissions in content</li>
              <li>Loss of data or profits</li>
            </ul>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Our total liability will not exceed INR 1,000.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">6. Third-Party Tools and Integrations</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              We may use third-party tools such as analytics and embedded content.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              These are governed by their individual terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">7. Links to Third-Party Sites</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Renorlabs is not responsible for content on external sites.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">8. Governing Law</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              These Terms are governed by laws of India.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Disputes will be resolved in courts of Bengaluru, Karnataka, unless otherwise agreed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">9. Changes to Terms</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Renorlabs may update these Terms at any time. Continued use of the website indicates acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">10. Contact</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              For any issues or clarifications: <a href="mailto:legal@renorlabs.com" className="underline hover:text-[#252525]">legal@renorlabs.com</a>
            </p>
          </section>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}
