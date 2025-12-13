# Premium Scroll Effects Implementation Guide

## Overview
This guide outlines the high-end scroll interactions implemented across the Renor product studio website. All animations follow principles of precision, minimalism, and engineered motion.

## Scroll Effect Types

### 1. Scroll Stacking
**Use Case:** Sequential reveals with layered depth
**Sections:** Process, Services, WhyUs
**Implementation:** `useScrollStack` hook

**Characteristics:**
- Elements reveal in sequence with controlled stagger
- Creates sense of progression and assembly
- Minimal, precise timing (0.15s stagger default)
- Optional pinning for first element

### 2. Section Pinning
**Use Case:** Immersive full-screen experiences
**Sections:** Hero, StudioReveal, key transitions
**Implementation:** `useSectionPin` hook

**Characteristics:**
- Pins section during scroll
- Creates focused attention moments
- Smooth transitions with scrub
- Callbacks for enter/leave states

### 3. Scroll Reveal
**Use Case:** Text and content block reveals
**Sections:** All sections (About, Services, FAQ, etc.)
**Implementation:** `useScrollReveal` hook

**Characteristics:**
- Directional reveals (up, down, left, right, fade)
- Configurable distance and timing
- Once or repeatable
- Consistent easing (power2.out)

### 4. Parallax Scroll
**Use Case:** Background depth and layered content
**Sections:** Hero backgrounds, image sections
**Implementation:** `useParallaxScroll` hook

**Characteristics:**
- Subtle depth through speed differential
- Configurable direction and speed
- Smooth scrubbing
- Never exaggerated

### 5. Layered Panels
**Use Case:** Card-based sections with depth
**Sections:** Testimonials, Pricing, OurWork
**Implementation:** `useLayeredPanels` hook

**Characteristics:**
- 3D depth through z-index and transforms
- Optional scale and rotation
- Sequential reveal with stagger
- Premium card interactions

## Section-Specific Recommendations

### Hero
- **Current:** Sticky parallax with marquee
- **Enhancement:** Add subtle background parallax layers
- **Effect:** `useParallaxScroll` for background elements

### About
- **Current:** Basic fade-in reveals
- **Enhancement:** Word-by-word reveal with scroll progress
- **Effect:** `useScrollReveal` with stagger for text blocks

### StudioReveal
- **Current:** Scroll-based expansion (already excellent)
- **Enhancement:** Keep as-is, it's a perfect example

### Services
- **Current:** Basic reveals
- **Enhancement:** Scroll stacking with service cards
- **Effect:** `useScrollStack` for sequential service reveals

### Process
- **Current:** Static cards
- **Enhancement:** Scroll stacking with pinned first card
- **Effect:** `useScrollStack` with pin option

### WhyUs
- **Current:** Grid layout
- **Enhancement:** Layered panel reveals
- **Effect:** `useLayeredPanels` for bento grid items

### OurWork
- **Current:** Basic fade-in
- **Enhancement:** Scroll-triggered image reveals with parallax
- **Effect:** `useScrollReveal` + `useParallaxScroll` for images

### Testimonials
- **Current:** Marquee animation
- **Enhancement:** Layered panel reveals for cards
- **Effect:** `useLayeredPanels` for testimonial cards

### Pricing
- **Current:** Basic layout
- **Enhancement:** Scroll stacking for pricing tiers
- **Effect:** `useScrollStack` for pricing cards

### FAQ
- **Current:** Basic accordion
- **Enhancement:** Scroll reveal for FAQ items
- **Effect:** `useScrollReveal` for FAQ entries

## Animation Principles

### Timing
- **Fast:** 0.3-0.5s (micro-interactions)
- **Default:** 0.6-0.8s (standard reveals)
- **Slow:** 1.0-1.2s (major transitions)

### Easing
- **Standard:** `power2.out` (most reveals)
- **Smooth:** `power3.out` (premium feels)
- **Linear:** Only for scrubbed animations

### Stagger
- **Tight:** 0.05-0.1s (related items)
- **Default:** 0.15-0.2s (standard sequences)
- **Loose:** 0.3-0.4s (major sections)

### Distance
- **Subtle:** 20-40px (refined)
- **Default:** 60px (standard)
- **Prominent:** 80-100px (emphasis)

## Performance Considerations

1. **Will-change:** Applied to animated elements
2. **GPU Acceleration:** Transform and opacity only
3. **ScrollTrigger Refresh:** Automatic on resize
4. **Cleanup:** All ScrollTriggers cleaned up on unmount
5. **Lazy Loading:** Heavy animations load on demand

## Integration with Lenis

All scroll effects work seamlessly with Lenis smooth scrolling:
- ScrollTrigger automatically detects Lenis
- Smooth scrubbing enabled by default
- No conflicts with smooth scroll behavior

## Code Structure

```
src/
  hooks/
    useScrollStack.ts      # Sequential reveals
    useSectionPin.ts       # Section pinning
    useScrollReveal.ts     # Content reveals
    useParallaxScroll.ts   # Parallax effects
    useLayeredPanels.ts    # Layered cards
  components/
    [sections with effects applied]
```

## Usage Examples

See individual section implementations for detailed examples of each scroll effect type.











