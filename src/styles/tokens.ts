/**
 * Design Tokens
 * Centralized design system values for consistent styling across the application
 * These tokens maintain visual consistency while allowing for easy maintenance
 */

// Color Palette
export const colors = {
  dark: {
    primary: '#252525',    // Main dark color (most common)
    secondary: '#1a1a1a',   // For dark cards/containers (Services, FAQ)
    tertiary: '#1a1a1a',     // Subtle dark variation (WhyUs, entropy - visually similar to primary)
  },
  light: {
    primary: '#faf8f5',     // Main background
    secondary: '#f0efeb',   // Subtle background variation (WhyUs cards)
  },
  text: {
    primary: '#252525',
    muted: '#5f6163',       // Navbar background
    light: '#faf8f5',
  },
  gradient: {
    orange: '#ff4d00',
    yellow: '#ffea00',
    blue: '#0066ff',
  },
  interactive: {
    gradient: {
      dark1: '#1e2a24',
      dark2: '#2d3a34',
    }
  }
}

// Text Opacity Scale
export const textOpacity = {
  subtle: 0.4,    // Very subtle text (WhyUs:37)
  muted: 0.5,     // Muted text (WhyUs icons, Services numbers)
  secondary: 0.6,  // Secondary text (most common for muted text)
  tertiary: 0.7,   // Tertiary text (Pricing descriptions, Services descriptions)
  primary: 0.8,   // Primary muted text (About, Process paragraphs)
  default: 1.0,   // Default text
}

// Spacing Scale
export const spacing = {
  section: {
    horizontal: 'px-6 md:px-12 lg:px-24',
    vertical: 'py-24 md:py-32',           // Standard section padding
    verticalCompact: 'py-16 md:py-24',   // Compact variant (Services)
  },
  container: {
    padding: 'p-6 md:p-12 lg:p-16',
    paddingLarge: 'p-8 md:p-12 lg:p-20',
  },
  margins: {
    sectionLabel: 'mb-12 md:mb-16',      // Standard section label
    sectionLabelLarge: 'mb-16 md:mb-20', // For sections with more spacing (Process, WhyUs)
    heading: 'mb-12 md:mb-16',           // Main headings
    headingLarge: 'mb-16 md:mb-20',      // Large headings (WhyUs, Testimonials)
    content: 'mb-8 md:mb-12',            // Content blocks
  },
  gaps: {
    xs: 'gap-2',   // Tight spacing (tags, small items)
    sm: 'gap-3',   // Small spacing
    md: 'gap-4',   // Medium spacing (default)
    lg: 'gap-6',   // Large spacing
    xl: 'gap-8',   // Extra large spacing (sections)
    '2xl': 'gap-12', // 2x extra large
    '3xl': 'gap-16', // 3x extra large
  }
}

// Typography Scale
export const typography = {
  h1: {
    hero: 'text-[20vw]', // Special case for Hero (viewport-based)
    display: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl', // StudioReveal
    default: 'text-4xl md:text-5xl lg:text-6xl', // Most main headings
    compact: 'text-4xl sm:text-5xl', // Pricing (slightly more compact)
  },
  h2: {
    section: 'text-sm md:text-base', // Section labels (consistent across all)
    default: 'text-3xl md:text-4xl lg:text-5xl',
  },
  h3: {
    default: 'text-2xl md:text-3xl lg:text-4xl', // Subheadings (WhyUs, Process)
    compact: 'text-xl md:text-2xl lg:text-3xl',
  },
  h4: {
    default: 'text-lg md:text-xl lg:text-2xl',
    card: 'text-3xl', // Pricing card titles
  },
  body: {
    large: 'text-lg md:text-xl',
    default: 'text-base md:text-lg',
    small: 'text-sm md:text-base',
    xs: 'text-xs md:text-sm',
    '2xs': 'text-[10px] md:text-xs', // InteractiveGradient
  },
  marquee: {
    default: 'text-lg md:text-xl lg:text-2xl', // Hero marquee
  }
}

// Font Weights
export const fontWeights = {
  light: 'font-light',      // 300 (FAQ plus sign)
  normal: 'font-normal',    // 400
  medium: 'font-medium',    // 500 - default for headings and body
  semibold: 'font-semibold', // 600 - emphasis (Services, Process headings)
  bold: 'font-bold',        // 700 - strong emphasis (Hero, Pricing, WhyUs)
}

// Line Heights
export const lineHeights = {
  tight: 'leading-tight',        // 1.25 - for headings
  snug: 'leading-snug',          // 1.375
  normal: 'leading-normal',      // 1.5 - default
  relaxed: 'leading-relaxed',    // 1.625 - for body text
  loose: 'leading-loose',        // 2.0
  custom: {
    hero: 'leading-[0.8]',       // Special for Hero
    display: 'leading-[1.1]',    // For display text (WhyUs, Testimonials)
  }
}

// Letter Spacing
export const letterSpacing = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',      // For large headings (most common)
  normal: '',                   // Default
  wide: 'tracking-wide',        // For labels (About quote)
  wider: 'tracking-wider',      // For uppercase labels (Process, InteractiveGradient)
  widest: 'tracking-widest',
  custom: {
    uppercase: 'tracking-[0.3em]', // For uppercase text (StudioReveal)
  }
}

// Border Radius
export const borderRadius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',        // Small cards (Services hover images)
  lg: 'rounded-lg',       // Medium cards (About entropy, FAQ button)
  xl: 'rounded-xl',       // Large cards (WhyUs cards)
  '2xl': 'rounded-2xl',   // Extra large cards (default for most cards)
  '3xl': 'rounded-3xl',   // Containers (Services, FAQ containers, FAQ CTA)
  full: 'rounded-full',    // Pills, buttons
  custom: {
    gradient: 'rounded-[1rem]', // Special case (InteractiveGradient)
  }
}

// Animation Easing
// Note: These are cubic-bezier values for framer-motion
export const easing = {
  default: [0.16, 1, 0.3, 1] as [number, number, number, number], // Smooth, elegant (most common - standardize to this)
  bounce: [0.34, 1.56, 0.64, 1] as [number, number, number, number], // Bouncy (Services animations - keep for playful interactions)
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number], // Alias for default (same as default)
  linear: 'linear' as const, // For marquee animations
}

// Animation Durations
export const durations = {
  instant: 0.1,
  fast: 0.2,
  quick: 0.3,      // Quick interactions
  default: 0.4,     // Default transitions (FAQ, Pricing)
  moderate: 0.6,    // Moderate animations (WhyUs, Services)
  slow: 0.8,        // Section reveals (most common - standardize to this)
  slower: 1.0,      // Slower reveals (Footer)
  slowest: 1.2,     // Slowest reveals (Hero, Footer, InteractiveGradient)
  marquee: 80,      // Special case for marquee
  verySlow: 1.5,    // Hero marquee fade
}

// Animation Delays
export const delays = {
  immediate: 0,
  quick: 0.1,      // Quick staggers (Pricing)
  default: 0.2,    // Default stagger (most common)
  moderate: 0.3,    // Moderate delays (Hero, WhyUs)
  slow: 0.5,        // Slow delays (Hero, Navbar)
  slower: 0.8,      // Slower delays (Hero, Navbar)
  slowest: 1.0,    // Slowest delays (InteractiveGradient)
  verySlow: 1.1,   // Navbar button
}

// Z-Index Scale
export const zIndex = {
  base: 0,
  content: 10,
  overlay: 20,
  modal: 30,
  navbar: 50,
  dropdown: 40,
}

// Viewport Settings for Scroll Animations
export const viewport = {
  default: { once: true },
  early: { once: true, amount: 0.1 },
  moderate: { once: true, amount: 0.2 }, // Footer
  late: { once: true, amount: 0.3 },    // About, OurWork
}

// Container Max Widths
export const containers = {
  narrow: 'max-w-4xl mx-auto',
  default: 'max-w-6xl mx-auto',
  wide: 'max-w-7xl mx-auto', // Pricing
  full: 'w-full', // No constraint (most sections)
}

// Grid Patterns
export const grids = {
  '1-col': 'grid-cols-1',
  '2-col': 'grid-cols-1 lg:grid-cols-2',
  '3-col': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  '12-col': 'grid-cols-1 lg:grid-cols-12',
}

