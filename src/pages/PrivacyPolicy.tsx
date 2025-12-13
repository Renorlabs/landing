'use client'

import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <div className="flex flex-col gap-2 text-sm text-[#252525]/60">
            <p><strong>Last Updated:</strong> 01 Dec 2025</p>
            <p><strong>Entity:</strong> Renorlabs Private Limited ("Renorlabs", "we", "our", "us")</p>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">1. Introduction</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              This Privacy Policy explains how Renorlabs collects, uses, stores, shares, and protects personal information when you visit renorlabs.com or interact with us.
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              We follow global data protection requirements including the India DPDP Act 2023, GDPR (EU), and CCPA (California, USA).
            </p>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              By using our website, you agree to this Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">2. What Information We Collect</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              We collect two types of information:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#252525] mb-3">A. Information you provide directly</h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4">
                <li>Name</li>
                <li>Email</li>
                <li>Company name</li>
                <li>Project details shared through contact forms</li>
                <li>Any materials shared voluntarily</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#252525] mb-3">B. Information collected automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type</li>
                <li>Pages viewed</li>
                <li>Time spent</li>
                <li>Cookies and analytics data (Google Analytics, Meta Pixel or similar tools)</li>
              </ul>
            </div>

            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We do not collect sensitive personal data unless you voluntarily submit it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">3. How We Use Your Information</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4 mb-4">
              <li>Respond to enquiries</li>
              <li>Provide service proposals</li>
              <li>Improve website performance</li>
              <li>Understand visitor behaviour</li>
              <li>Maintain website security</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We do not sell or rent your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              For visitors from the EU/UK, we process personal data on the basis of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4">
              <li>Legitimate interest</li>
              <li>Performance of a contract (when we engage with you)</li>
              <li>Consent (for cookies and newsletter opt-ins)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">5. How We Share Information</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              We may share information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4 mb-4">
              <li>Hosting providers</li>
              <li>Analytics platforms</li>
              <li>Email and CRM tools (e.g., Google Workspace, Notion, HubSpot etc.)</li>
              <li>Legal, accounting, or compliance advisors</li>
            </ul>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We do not share data with third parties for advertising without consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">6. International Data Transfers</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Your data may be processed outside your jurisdiction. We ensure appropriate safeguards such as contractual protections and secure data storage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">7. Data Retention</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              We keep personal data only for as long as required:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4">
              <li>Website analytics: 12–24 months</li>
              <li>Contact form submissions: 3 years</li>
              <li>Legal compliance: as required by law</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">8. Your Rights</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#252525]/80 leading-relaxed ml-4 mb-4">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Request a copy of your data</li>
              <li>Object to processing</li>
              <li>File a complaint with a data authority</li>
            </ul>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              To exercise your rights, contact us at: <a href="mailto:legal@renorlabs.com" className="underline hover:text-[#252525]">legal@renorlabs.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">9. Cookies</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We use cookies to improve user experience, analyze traffic, and optimize website performance. See our <Link to="/cookies" className="underline hover:text-[#252525]">Cookie Policy</Link> for more details.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">10. Data Security</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We use reasonable technical and organizational measures including encryption, access controls, and secure storage systems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">11. Third-Party Links</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              Our website may link to external websites. We are not responsible for how those websites handle data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">12. Updates to this Policy</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              We may update this Policy from time to time. Updates will be posted on this page with a new "Last Updated" date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#252525] mb-4">13. Contact Us</h2>
            <p className="text-base md:text-lg text-[#252525]/80 leading-relaxed">
              For any questions regarding privacy, write to: <a href="mailto:legal@renorlabs.com" className="underline hover:text-[#252525]">legal@renorlabs.com</a>
            </p>
          </section>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}
