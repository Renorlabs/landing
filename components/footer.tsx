"use client"

import { motion } from "framer-motion"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  product: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Support", href: "/contact" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
  social: [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookies Settings", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="group/footer relative bg-background overflow-hidden border-t border-border">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex items-end select-none">
          <motion.span
            className="font-[family-name:var(--font-heading)] text-[clamp(8rem,25vw,20rem)] font-black text-foreground/[0.03] tracking-tight leading-none transition-colors duration-700 group-hover/footer:text-foreground/[0.06]"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            renor
          </motion.span>
          <motion.div
            className="ml-[1vw] mb-[3vw] h-[3vw] w-[3vw] rounded-full bg-[var(--renor-orange)]"
            aria-hidden="true"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.5,
              boxShadow: "0 0 30px var(--renor-orange)",
            }}
            animate={{
              boxShadow: ["0 0 0px var(--renor-orange)", "0 0 20px var(--renor-orange)", "0 0 0px var(--renor-orange)"],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              scale: { duration: 0.2 },
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Logo and Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative h-8 w-8"
              >
                <Image src="/images/renor-logo.svg" alt="Renor" fill className="object-contain" />
              </motion.div>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold">Renorlabs</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Renor empowers teams to transform raw data into clear, compelling visuals — making insights easier to
              share, understand, and act on.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-foreground/70"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 pt-8 text-sm text-muted-foreground sm:flex-row"
        >
          <p>© 2025 Renor. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="transition-colors hover:text-foreground">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
