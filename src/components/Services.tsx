import { motion, AnimatePresence } from 'framer-motion'
import { useState, memo } from 'react'
import { easing, durations, delays } from '../styles/tokens'
import { useLenis } from 'lenis/react'
import { useScrollStack } from '../hooks/useScrollStack'

const services = [
  { 
    name: 'Building the Foundation', 
    number: '1',
    description: 'Every product begins with clarity. We shape identity systems that give your idea a strong foundation and a clear point of view. The goal is simple. Create a brand that feels intentional and grows with the product you are building.',
    tags: [
      'Logo Design',
      'Identity Systems',
      'Brand Guidelines',
      'Typography and Color Systems',
      'Naming and Voice',
      'Brand Strategy'
    ],
    images: [
      './rock.png',
    ]
  },

  { 
    name: 'Designing the Product', 
    number: '2',
    description: 'We design products that feel structured and effortless. Every screen, interaction and flow is crafted with intention. The result is a digital experience that users trust and engineering teams can build on without friction.',
    tags: [
      'Product Design',
      'Web and App Interfaces',
      'UI and UX Design',
      'Design Systems',
      'Prototyping',
      'User Research'
    ],
    images: [
      'https://cosmos.so/api/image/980384645',
      'https://cosmos.so/api/image/867651876'
    ]
  },

  { 
    name: 'Engineering the System', 
    number: '3',
    description: 'A clear idea needs a dependable system behind it. We help founders define strategy, map technical architecture and build with clean engineering practices. From AI first workflows to long term planning, we make sure what you ship can grow.',
    tags: [
      'Product Strategy',
      'Technical Architecture',
      'AI First Development',
      'System Planning',
      'Workshops and Discovery',
      'Long Term Product Roadmaps'
    ],
    images: [
      'https://cosmos.so/api/image/1935260750',
      'https://cosmos.so/api/image/1516216588'
    ]
  },

  { 
    name: 'Preparing for Growth', 
    number: '4',
    description: 'Once the product is built, we help you bring it to the world with confidence. Positioning, messaging, growth systems and content shaped through Keizer. Everything crafted to help your product reach the right audience and scale with clarity.',
    tags: [
      'Go To Market Strategy',
      'Positioning and Messaging',
      'Growth Systems',
      'Content and Campaigns',
      'Pitch and Funding Prep',
      'Market Research'
    ],
    images: [
      'https://cosmos.so/api/image/1877684951',
      'https://cosmos.so/api/image/1067858081'
    ]
  }
];


export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const lenis = useLenis()
  const servicesStackRef = useScrollStack('.service-item-wrapper', {
    stagger: 0.2,
    duration: 0.9,
    ease: 'power3.out',
    start: 'top 80%',
  })

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    const scrollToPricing = () => {
      const pricingElement = document.getElementById('pricing')
      
      if (!pricingElement) {
        // Retry after delay if element not found (for lazy loading)
        setTimeout(scrollToPricing, 200)
        return
      }

      if (lenis) {
        // Use Lenis smooth scroll
        lenis.scrollTo(pricingElement, {
          duration: 1.5,
          offset: -100,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      } else {
        // Fallback to native smooth scroll with offset
        const elementPosition = pricingElement.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - 100
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    
    // Small delay to ensure Pricing component is mounted
    setTimeout(scrollToPricing, 50)
  }

  return (
    <section className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col px-4 md:px-12 lg:px-24 py-16 md:py-24">
      {/* Section Label */}
      <div className="flex justify-between items-center w-full mb-12 md:mb-16">
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Services
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (02)
        </span>
      </div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
        >
          From first step to{' '}
          <span className="text-[#252525]/40">full scale</span>
        </motion.h1>
      </div>

      {/* Box Container */}
      <div ref={servicesStackRef as React.RefObject<HTMLDivElement>} className="bg-[#1a1a1a] rounded-2xl md:rounded-3xl px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Services List */}
        <div className="mb-12 md:mb-16">
          {services.map((service, i) => (
            <div key={service.name} className="service-item-wrapper">
              <ServiceItem
                service={service}
                index={i}
                expandedIndex={expandedIndex}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                toggleExpand={toggleExpand}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <motion.a 
            href="#pricing"
            onClick={handlePricingClick}
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: { scale: 1.08 },
              tap: { scale: 0.96 }
            }}
            transition={{ duration: durations.quick, ease: easing.smooth }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#faf8f5] text-[#262626] text-sm font-medium rounded-full hover:bg-white transition-colors cursor-pointer overflow-hidden relative group"
          >
            <motion.span
              variants={{
                hover: { x: 2 }
              }}
              transition={{ duration: durations.quick, ease: easing.smooth }}
              className="inline-flex items-center gap-2"
            >
              <motion.span
                variants={{
                  hover: { letterSpacing: '0.08em', x: 2 }
                }}
                transition={{ duration: durations.quick, ease: easing.smooth }}
                className="inline-block"
              >
                See pricing
              </motion.span>
              <motion.span 
                variants={{
                  hover: { rotate: 90, scale: 1.2, x: 2 }
                }}
                transition={{ duration: durations.quick, ease: easing.smooth }}
                className="text-base leading-none inline-block origin-center"
              >
                +
              </motion.span>
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}

const ServiceItem = memo(({
  service,
  index,
  expandedIndex,
  hoveredIndex,
  setHoveredIndex,
  toggleExpand
}: {
  service: typeof services[0]
  index: number
  expandedIndex: number | null
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  toggleExpand: (index: number) => void
}) => {
  return (
    <div className="relative">
      {/* Service Header */}
      <div className="relative h-fit w-full overflow-visible">
        <button
          onClick={() => toggleExpand(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group w-full flex justify-between items-center py-3 md:py-4 cursor-pointer relative z-10"
        >
          <div className="relative">
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5] tracking-tight text-left transition-all duration-500 group-hover:opacity-40 relative"
            >
              {service.name}
            </h3>
            
            {/* Hover Images - Background Card */}
            {expandedIndex !== index && (
              <div className="absolute right-8 -top-1 z-40 h-[56px] w-[45px] md:h-[78px] md:w-[56px] lg:h-[90px] lg:w-[67px] pointer-events-none">
                <div className="relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-[45px] h-[45px] md:w-[56px] md:h-[56px] lg:w-[67px] lg:h-[67px] overflow-hidden transition-all rounded-md">
                  <img 
                    src={service.images[1]} 
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
            
            {/* Hover Images - Foreground Card */}
            {expandedIndex !== index && (
              <div className="absolute right-8 -top-1 z-40 h-[56px] w-[45px] md:h-[78px] md:w-[56px] lg:h-[90px] lg:w-[67px] translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12 pointer-events-none">
                <div className="relative duration-200 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-[45px] h-[45px] md:w-[56px] md:h-[56px] lg:w-[67px] lg:h-[67px] overflow-hidden transition-all rounded-md">
                  <img 
                    src={service.images[0]} 
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Number / Plus / X indicator */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {expandedIndex === index ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 45, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  transition={{ 
                    duration: durations.moderate, 
                    ease: easing.bounce,
                    opacity: { duration: durations.quick }
                  }}
                  className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5]/50"
                >
                  +
                </motion.span>
              ) : hoveredIndex === index ? (
                <motion.span
                  key="plus"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ 
                    duration: durations.default, 
                    ease: easing.bounce,
                    opacity: { duration: durations.fast }
                  }}
                  className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5]/50"
                >
                  +
                </motion.span>
              ) : (
                <motion.span
                  key="number"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ 
                    duration: durations.quick, 
                    ease: easing.smooth,
                    opacity: { duration: durations.fast }
                  }}
                  className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5]/20"
                >
                  {service.number}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence mode="wait">
        {expandedIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: durations.slow, ease: easing.smooth },
                opacity: { duration: durations.moderate, delay: delays.default, ease: easing.smooth }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: durations.moderate, delay: delays.quick, ease: easing.smooth },
                opacity: { duration: durations.quick, ease: easing.smooth }
              }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: durations.moderate, delay: delays.default, ease: easing.smooth }}
              className="pt-6 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: durations.moderate, delay: delays.moderate, ease: easing.smooth }}
                className="text-base md:text-lg text-[#faf8f5]/70 leading-relaxed max-w-xl"
              >
                {service.description}
              </motion.p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 lg:justify-end lg:content-start">
                {service.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: durations.moderate, 
                      delay: 0.4 + (tagIndex * 0.06), 
                      ease: easing.smooth 
                    }}
                    className="px-4 py-2 bg-[#faf8f5] text-[#262626] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})
