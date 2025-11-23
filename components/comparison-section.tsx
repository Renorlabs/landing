"use client"

import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const comparisonData = [
  {
    feature: "Cost",
    renorlabs: "Predictable and efficient",
    fullTime: "$$$$ (High overhead)",
    agencies: "$$ (Variable pricing)",
  },
  {
    feature: "Senior-Level Team",
    renorlabs: "Consistent senior expertise",
    fullTime: "Not guaranteed",
    agencies: "Depends on allocation",
  },
  {
    feature: "Turnaround Speed",
    renorlabs: { icon: true },
    fullTime: { icon: false },
    agencies: { icon: false },
  },
  {
    feature: "Start Time",
    renorlabs: "Immediate onboarding",
    fullTime: "Weeks to recruit",
    agencies: "Days to set up",
  },
  {
    feature: "Revision Flexibility",
    renorlabs: { icon: true },
    fullTime: { icon: false },
    agencies: { icon: false },
  },
  {
    feature: "Design Quality",
    renorlabs: "Clear, structured, product-focused",
    fullTime: "Depends on experience",
    agencies: "Inconsistent across teams",
  },
  {
    feature: "Ongoing Support",
    renorlabs: { icon: true },
    fullTime: "Limited bandwidth",
    agencies: "Shared across clients",
  },
  {
    feature: "Project Management",
    renorlabs: "Streamlined and transparent",
    fullTime: "Managed internally",
    agencies: "Multiple points of contact",
  },
]

export function ComparisonSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section id="comparison" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="renor-section-header"
        >
          <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            WHY CHOOSE US
          </span>
          <h2 className="renor-section-title">Why Choose Us?</h2>
          <p className="renor-section-subtitle">Check out what Renor Labs offers vs employees and other agencies.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-1/4 p-6 text-left font-heading text-lg font-bold">Features</th>
                  <th className="w-1/4 bg-muted/30 p-6 relative overflow-hidden">
                    <div className="relative flex flex-col items-center gap-3">
                      <motion.div
                        className="relative h-12 w-12"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Image src="/images/renor-logo.png" alt="Renor Labs" fill className="object-contain" />
                      </motion.div>
                      <div className="font-heading text-lg font-bold flex items-center gap-2">
                        Renor Labs
                        <Sparkles className="h-4 w-4" />
                      </div>
                    </div>
                  </th>
                  <th className="w-1/4 p-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="font-medium text-muted-foreground">Full-time Designer</div>
                    </div>
                  </th>
                  <th className="w-1/4 p-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="font-medium text-muted-foreground">Other Agencies</div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onHoverStart={() => setHoveredRow(index)}
                    onHoverEnd={() => setHoveredRow(null)}
                    className="border-b border-border last:border-b-0 transition-all"
                  >
                    <td className="p-6 font-medium">
                      <motion.div
                        animate={{ x: hoveredRow === index ? 4 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {row.feature}
                      </motion.div>
                    </td>

                    <td className="bg-muted/30 p-6 text-center relative">
                      {hoveredRow === index && (
                        <motion.div
                          layoutId="highlight"
                          className="absolute inset-0 bg-foreground/5"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="relative"
                        animate={{ scale: hoveredRow === index ? 1.02 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {typeof row.renorlabs === "object" && row.renorlabs.icon ? (
                          <div className="flex justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                              <Check className="h-5 w-5 text-green-600" />
                            </motion.div>
                          </div>
                        ) : (
                          <span className="text-sm font-medium">{row.renorlabs}</span>
                        )}
                      </motion.div>
                    </td>

                    <td className="p-6 text-center">
                      {typeof row.fullTime === "object" && row.fullTime.icon === false ? (
                        <div className="flex justify-center">
                          <X className="h-5 w-5 text-red-600 opacity-50" />
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.fullTime}</span>
                      )}
                    </td>

                    <td className="p-6 text-center">
                      {typeof row.agencies === "object" && row.agencies.icon === false ? (
                        <div className="flex justify-center">
                          <X className="h-5 w-5 text-red-600 opacity-50" />
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.agencies}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
