"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [activeLink, setActiveLink] = useState("")
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      setActiveLink(sectionId)
    }
  }

  const navItems = [
    { label: "Achievements", id: "achievements" },
    { label: "Our Work", id: "services" },
    { label: "Comparison", id: "comparison" },
    { label: "FAQs", id: "faqs" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-lg"
      style={{ backgroundColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center justify-center w-10 h-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="/images/renor-logo.png" alt="Renor Labs" width={32} height={32} className="object-contain" />
          </motion.button>

          <nav className="hidden gap-8 md:flex relative ml-20">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                {activeLink === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            onClick={() => scrollToSection("pricing")}
          >
            Plans and Pricing
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
