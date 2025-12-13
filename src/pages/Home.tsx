import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Testimonials } from '../components/Testimonials'
import { MobileHome } from '../components/MobileHome'
import { MobileFooter } from '../components/MobileFooter'
import { SmoothScroll } from '../components/SmoothScroll'
import { useInView } from 'framer-motion'
import { useRef, lazy, Suspense } from 'react'

// Lazy load heavy components for code splitting
const WhyUs = lazy(() => import('../components/WhyUs').then(m => ({ default: m.WhyUs })))
const Services = lazy(() => import('../components/Services').then(m => ({ default: m.Services })))
const Process = lazy(() => import('../components/Process').then(m => ({ default: m.Process })))
const StudioReveal = lazy(() => import('../components/StudioReveal').then(m => ({ default: m.StudioReveal })))
const OurWork = lazy(() => import('../components/OurWork').then(m => ({ default: m.OurWork })))
const Pricing = lazy(() => import('../components/Pricing').then(m => ({ default: m.Pricing })))
const FAQ = lazy(() => import('../components/FAQ').then(m => ({ default: m.FAQ })))
const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })))

// Loading fallback component
const ComponentLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#252525]/20 border-t-[#252525] rounded-full animate-spin" />
  </div>
)

export function Home() {
  const studioRevealRef = useRef<HTMLDivElement>(null)
  const isStudioRevealInView = useInView(studioRevealRef, { amount: 0.3 })

  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-[#faf8f5] text-[#252525] font-sans selection:bg-[#252525] selection:text-[#faf8f5]">
        {/* Mobile/Tablet Version - Shows on small and medium screens (mobile, iPad, tablets), hidden on lg and above */}
        <div className="lg:hidden">
          <MobileHome isLoaded={true} />
          <Suspense fallback={<ComponentLoader />}>
            <MobileFooter />
          </Suspense>
        </div>

        {/* Desktop Version - Hidden on small/medium screens, shows on lg and above (desktop/laptop) */}
        <div className="hidden lg:block">
          <Navbar visible={!isStudioRevealInView} isLoaded={true} />
          <main>
            <Hero isLoaded={true} />
            <div ref={studioRevealRef}>
              <Suspense fallback={<ComponentLoader />}>
                <StudioReveal />
              </Suspense>
            </div>
            <About />
            <Suspense fallback={<ComponentLoader />}>
              <Services />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <Process />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <WhyUs />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <OurWork />
            </Suspense>
            <Testimonials />
            <Suspense fallback={<ComponentLoader />}>
              <Pricing />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <Footer />
            </Suspense>
          </main>
        </div>
      </div>
    </SmoothScroll>
  )
}
