'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, memo } from 'react'

interface PricingPlan {
  id: number
  name: string
  brand: string
  price: number | string
  priceUnit?: string
  description: string
  features: string[]
  addon?: string
  addonPrice?: number
  delivery: string
  cta: string
}

interface PricingCardProps {
  plan: PricingPlan
  addonEnabled: boolean
  onAddonToggle: () => void
}

const PricingCard = memo(function PricingCard({ plan, addonEnabled, onAddonToggle }: PricingCardProps) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden">
      {/* Black Card - Base (Full Width) */}
      <div className="w-full bg-[#252525] text-white rounded-2xl flex flex-col justify-between min-h-[480px]">
        {/* Content positioned on the right side */}
        <div className="pl-0 md:pl-[54%] lg:pl-[52%] p-8 sm:p-10 md:pr-12 lg:pr-16 flex flex-col justify-between min-h-[480px]">
          <div>
            <h3 className="text-lg font-semibold mb-6">What's included:</h3>
            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#faf8f5] mt-0.5 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#252525]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Delivery & CTA */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-white/80 mb-1">Estimated delivery:</p>
              <p className="text-sm font-medium">{plan.delivery}</p>
            </div>
            <a
              href="https://cal.com/renorlabs/talk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#faf8f5] text-[#252525] hover:bg-[#faf8f5]/90 rounded-full px-6 py-3 font-semibold transition-all whitespace-nowrap inline-block text-center"
            >
              {plan.cta} +
            </a>
          </div>
        </div>
      </div>

      {/* White Card - Overlay (Positioned on top) */}
      <div className="absolute top-4 left-4 md:top-4 md:left-4 w-full md:w-[48%] lg:w-[46%] bg-[#faf8f5] grainy p-6 sm:p-8 rounded-2xl border-2 border-[#252525]/10 shadow-lg flex flex-col justify-between min-h-[440px] md:min-h-[445px]">
        <div>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wide text-[#252525]/40 mb-2">Brand</p>
            <h2 className="text-3xl font-bold text-[#252525] mb-4">{plan.name}</h2>
            <p className="text-xs font-medium text-[#252525]/70 mb-4">{plan.brand}</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-4">
              {typeof plan.price === 'number' ? (
                <>
                  <motion.span 
                    key={addonEnabled && plan.addonPrice ? plan.price + plan.addonPrice : plan.price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold text-[#252525]"
                  >
                    ${addonEnabled && plan.addonPrice ? plan.price + plan.addonPrice : plan.price}
                  </motion.span>
                  <span className="text-[#252525]/60 text-sm">{plan.priceUnit || '/month'}</span>
                </>
              ) : (
                <span className="text-5xl font-bold text-[#252525]">{plan.price}</span>
              )}
            </div>
            <p className="text-sm text-[#252525]/70 leading-relaxed">{plan.description}</p>
          </div>
        </div>
        <div>
          {plan.addon && (
            <>
              <div className="flex items-center justify-between gap-3 mb-2">
                <label htmlFor={`addon-${plan.id}`} className="text-sm font-medium text-[#252525] cursor-pointer">
                  ({plan.addonPrice}/m) {plan.addon}
                </label>
                <button
                  type="button"
                  id={`addon-${plan.id}`}
                  onClick={onAddonToggle}
                  className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#252525] focus:ring-offset-2 ${
                    addonEnabled ? 'bg-[#252525]' : 'bg-[#252525]/10'
                  }`}
                  role="switch"
                  aria-checked={addonEnabled}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      addonEnabled ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
})

const plans: PricingPlan[] = [
  {
    id: 1,
    name: "Start",
    brand: "Renor",
    price: 1500,
    priceUnit: "/month",
    description: "Best for founders who need a fast and polished launch.",
    features: [
      "2 to 3 week timeline",
      "Logo and basic brand identity",
      "Wireframes for landing",
      "Full Figma landing page design",
      "Website development in Framer or custom code",
      "Fully responsive experience",
      "Two revision cycles"
    ],
    addon: "Priority support",
    addonPrice: 300,
    delivery: "2-3 weeks",
    cta: "Get started"
  },
  {
    id: 2,
    name: "Build",
    brand: "Renor",
    price: 2500,
    priceUnit: "/month",
    description: "Best for founders building their first real product.",
    features: [
      "Product design and development",
      "Ideation and initial market research",
      "Bi-weekly progress meetings",
      "SEO setup and ongoing management",
      "Blogs and content support",
      "Pitch deck creation",
      "Promotional content for social media"
    ],
    addon: "SEO optimization Add-on",
    addonPrice: 800,
    delivery: "1-2 months",
    cta: "Get started"
  },
  {
    id: 3,
    name: "Scale",
    brand: "Renor",
    price: "Custom",
    priceUnit: "/month",
    description: "Designed for high growth startups and enterprises.",
    features: [
      "Full product development support",
      "Two dedicated developers for the product",
      "Daily progress updates",
      "Structured product management",
      "User testing and iteration",
      "Growth and marketing support",
      "Funding support through Keizer collaboration"
    ],
    delivery: "24 hours",
    cta: "Get started"
  }
]

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>('Start')
  const [addonsEnabled, setAddonsEnabled] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
  })

  const toggleAddon = (planId: number) => {
    setAddonsEnabled((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }))
  }

  const currentPlan = plans.find(plan => plan.name === selectedPlan) || plans[0]

  return (
    <section id="pricing" className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col px-4 md:px-12 lg:px-24 pt-0 md:pt-0 pb-12 md:pb-16">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex justify-between items-center w-full mb-12 md:mb-16"
      >
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Pricing
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (07)
        </span>
      </motion.div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
        >
          Pricing Plans,{' '}
          <span className="text-[#252525]/40">Choose what works for you</span>
        </motion.h1>
      </div>

      {/* Toggle Switch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-end mb-8 mr-1"
      >
        <div className="relative inline-flex items-center gap-1 bg-[#252525]/5 rounded-full p-2 border border-[#252525]/10">
          {/* Sliding Background Indicator */}
          <motion.div
            layoutId="toggle-indicator"
            className="absolute rounded-full bg-[#252525] z-0"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.5
            }}
            style={{
              // Provide breathing room so the highlight doesn't touch the border
              top: '6px',
              bottom: '6px',
              width: `calc((100% - 52px) / ${plans.length})`,
              left: `calc(12px + ${plans.findIndex(p => p.name === selectedPlan)} * ((100% - 15px) / ${plans.length}))`
            }}
          />
          
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.name
            
            return (
              <motion.button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.name)}
                className="relative z-10 px-6 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              >
                <motion.span
                  className="relative z-10 block"
                  animate={{
                    color: isSelected ? '#ffffff' : 'rgba(37, 37, 37, 0.6)'
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {plan.name}
                </motion.span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Single Pricing Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPlan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <PricingCard
            plan={currentPlan}
            addonEnabled={addonsEnabled[currentPlan.id]}
            onAddonToggle={() => toggleAddon(currentPlan.id)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Bottom Line */}
      <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}
