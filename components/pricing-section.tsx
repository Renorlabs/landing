"use client"

import { Check, Flame, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Prototype",
    price: "$1,499",
    description: "For founders who want a clear and fast starting point.",
    features: [
      "AI-first MVP design",
      "Core screens and flows",
      "Light technical planning",
      "One round of revisions",
      "Delivery in 10 to 14 days",
    ],
    buttonText: "Start your prototype",
    popular: false,
    dark: false,
    period: "one-time payment",
  },
  {
    name: "Growth",
    price: "$3,200",
    description: "For teams ready to refine, iterate, and prepare for scale.",
    features: [
      "End-to-end product design",
      "System mapping and UX architecture",
      "Component library",
      "Weekly iterations",
      "Priority support",
    ],
    buttonText: "Start with Growth",
    popular: true,
    dark: false,
    period: "per month",
  },
  {
    name: "Venture Partnership",
    price: "Custom",
    description: "For founders who want a long-term product partner.",
    features: [
      "Full design and engineering support",
      "Deeper system strategy",
      "Technical advisory",
      "Flexible monthly scope",
      "Access to founder network",
    ],
    buttonText: "Request partnership",
    popular: false,
    dark: true,
    period: "tailored to you",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern-light opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="renor-section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Added consistent mini heading matching services section style */}
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              PRICING
            </span>
            <h2 className="renor-section-title">Plans and Pricing</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="renor-section-subtitle"
          >
            Transparent pricing for every stage of your product journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`relative rounded-3xl p-8 border group ${
                plan.dark
                  ? "bg-foreground text-background border-transparent shadow-xl"
                  : "bg-background text-foreground border-border shadow-sm hover:shadow-xl hover:border-black/5"
              } flex flex-col transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Flame className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-8 mt-2">
                <h3 className={`text-xl font-medium mb-4 ${plan.dark ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm font-normal ${plan.dark ? "text-gray-400" : "text-muted-foreground"}`}>
                      / {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <p
                  className={`font-medium mb-6 leading-relaxed ${plan.dark ? "text-gray-300" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
                <div className={`h-px w-full mb-6 ${plan.dark ? "bg-white/10" : "bg-black/5"}`} />
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.dark ? "bg-white/10 text-white" : "bg-black/5 text-black"
                        }`}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className={plan.dark ? "text-gray-300" : "text-muted-foreground"}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  className={`w-full h-12 rounded-xl font-medium transition-all duration-300 group-hover:scale-[1.02] ${
                    plan.dark
                      ? "bg-white text-black hover:bg-gray-100 border-0"
                      : "bg-black text-white hover:bg-black/90 shadow-sm"
                  }`}
                  variant="default"
                >
                  {plan.buttonText}
                  <ArrowRight
                    className={`w-4 h-4 ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
