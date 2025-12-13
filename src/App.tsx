import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { SmoothScroll } from './components/SmoothScroll'
import { ScrollToTop } from './components/ScrollToTop'

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse').then(m => ({ default: m.TermsOfUse })))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })))
const ArLinkCaseStudy = lazy(() => import('./pages/ArLinkCaseStudy').then(m => ({ default: m.ArLinkCaseStudy })))
const AnonymousCaseStudy = lazy(() => import('./pages/AnonymousCaseStudy').then(m => ({ default: m.AnonymousCaseStudy })))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#faf8f5]">
    <div className="w-8 h-8 border-2 border-[#252525]/20 border-t-[#252525] rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        } />
        <Route path="/privacy" element={
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<PageLoader />}>
            <TermsOfUse />
          </Suspense>
        } />
        <Route path="/cookies" element={
          <Suspense fallback={<PageLoader />}>
            <CookiePolicy />
          </Suspense>
        } />
        <Route path="/case-study/arlink" element={
          <Suspense fallback={<PageLoader />}>
            <ArLinkCaseStudy />
          </Suspense>
        } />
        <Route path="/case-study/anonymous" element={
          <Suspense fallback={<PageLoader />}>
            <AnonymousCaseStudy />
          </Suspense>
        } />
      </Routes>
    </SmoothScroll>
  )
}

export default App
