'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useParallaxScroll } from '../hooks/useParallaxScroll'

interface Project {
  id: number
  label: string
  title: string
  subtitle?: string
  description: string
  location?: string
  date?: string
  image: string
  alt: string
  ctaText?: string
  path?: string
}

const projects: Project[] = [
  {
    id: 1,
    label: 'Web3 Platform',
    title: 'ArLink',
    subtitle: 'Permanent Deployments, Reimagined',
    description: 'We partnered with ArLink to design and build a seamless deployment platform for the Arweave ecosystem. From early concept to a polished, production ready product, we shaped the brand, the landing experience, and the entire dashboard interface. ArLink later secured a 10k ecosystem grant as a result of the clarity and strength of the product.',
    image: '/project1.webp',
    alt: 'ArLink deployment platform',
    ctaText: 'View Case Study: ArLink',
    path: '/case-study/arlink'
  },
  {
    id: 2,
    label: 'ANONYMOUS CASE STUDY',
    title: 'Building the Interaction Layer for Human AI Communication',
    subtitle: 'Designing an intelligent messaging infrastructure from the ground up',
    description: 'A confidential engagement with an AI startup working on a protocol layer that enables text, voice, and generated media interactions. We shaped the system architecture, designed the dashboard, and helped build early distribution channels.',
    image: '/project2.webp',
    alt: 'AI communication platform',
    ctaText: 'View Case Study: Anonymous',
    path: '/case-study/anonymous'
  }
]

export function OurWork() {
  const projectsContainerRef = useScrollReveal('.project-item', {
    direction: 'up',
    distance: 60,
    stagger: 0.15,
    duration: 0.8,
  })

  return (
    <section ref={projectsContainerRef} className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col">
      {/* Section Label */}
      <div className="relative z-10 px-4 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 md:pb-16 flex-shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex justify-between items-center w-full mb-12 md:mb-16"
        >
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-sm md:text-base font-medium text-[#252525]">
              Our Work
            </h2>
            <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
          </div>
          <span className="text-sm md:text-base font-medium text-[#252525]/60">
            (05)
          </span>
        </motion.div>

        {/* Header Section */}
        <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
          >
            Winning Projects{' '}
            <span className="text-[#252525]/40">we've delivered</span>
          </motion.h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 md:px-12 lg:px-24 pb-24 md:pb-32 flex-1">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="px-4 md:px-12 lg:px-24">
        <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
      </div>
    </section>
  )
}

function ProjectItem({ project, isLast }: { project: typeof projects[0], index: number, isLast: boolean }) {
  const textRef = useParallaxScroll({
    speed: 0.15,
    direction: 'up',
  }) as React.RefObject<HTMLElement>

  const imageRef = useParallaxScroll({
    speed: 0.3,
    direction: 'up',
  }) as React.RefObject<HTMLElement>

  return (
    <div
      className={`project-item ${!isLast ? 'pb-12 md:pb-16 mb-12 md:mb-16' : ''}`}
    >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Text */}
        <div ref={textRef as React.RefObject<HTMLDivElement>} className="flex flex-col gap-6 justify-center h-full">
          <div className="flex flex-col gap-4">
            <p className="text-xs md:text-sm font-medium text-[#252525]/60 uppercase tracking-wider">
              {project.label}
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#252525] leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#252525]/80 leading-tight">
                {project.subtitle}
              </p>
            )}
          </div>
          <p className="text-sm md:text-base text-[#252525]/60 leading-relaxed">
            {project.description}
          </p>
          {(project.location || project.date) && (
            <p className="text-sm md:text-base text-[#252525]/60">
              {project.location && project.date ? `${project.location} • ${project.date}` : project.location || project.date}
            </p>
          )}
        </div>

        {/* Right Column - Image (parallax on image only to avoid layout shift) */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
            <img
              ref={imageRef as React.RefObject<HTMLImageElement>}
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            {/* View More Details Button */}
            {project.path ? (
              <Link to={project.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 right-4 bg-[#faf8f5]/95 backdrop-blur-sm text-[#252525] px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg border border-[#252525]/10 hover:bg-[#faf8f5] transition-colors cursor-pointer"
                >
                  {project.ctaText || 'View More Details'}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 bg-[#faf8f5]/95 backdrop-blur-sm text-[#252525] px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg border border-[#252525]/10 hover:bg-[#faf8f5] transition-colors"
              >
                {project.ctaText || 'View More Details'}
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

