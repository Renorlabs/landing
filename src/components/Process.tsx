'use client'

import { motion } from 'framer-motion'
import { useScrollStack } from '../hooks/useScrollStack'

const processes = [
  {
    category: 'Experiential',
    title: 'Seed',
    description:
      'We begin by shaping clarity. Your idea is explored, understood and refined into a focused product direction. The essentials are defined with intention so the product can grow with stability.',
    gradient: 'from-[#ff4d00] to-[#ff6d33]',
    color: '#ff4d00',
    pastelColor: '#1a1a1a',
    frontImage: '/p1.png'
  },
  {
    category: 'Digital',
    title: 'Shape',
    description:
      'We turn direction into structure. Design, architecture and early functionality take form as the product begins to look and behave like something real. The system gains shape and definition.',
    gradient: 'from-[#0066ff] to-[#3385ff]',
    color: '#0066ff',
    pastelColor: '#1a1a1a',
    frontImage: '/p2.png'
  },
  {
    category: 'Brand',
    title: 'Bloom',
    description:
      'We bring the full product to life. A complete and dependable system is delivered with clarity. Stable, precise and ready for long term growth.',
    gradient: 'from-[#ffea00] to-[#fff033]',
    color: '#ffea00',
    pastelColor: '#1a1a1a',
    frontImage: '/p3.png'
  }
];


export function Process() {
  const processStackRef = useScrollStack('.process-card-section', {
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    start: 'top 75%',
  })

  return (
    <section ref={processStackRef} className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col px-4 md:px-12 lg:px-24 py-24 md:py-32">
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
            Process
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (03)
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
          Our approach{' '}
          <span className="text-[#252525]/40">to building great products.</span>
        </motion.h1>
      </div>

      {/* Card Area - matches original CSS */}
      <div className="process-card-area mt-16 md:mt-24">
        {processes.map((process, index) => (
          <ProcessCard key={process.category} process={process} index={index} />
        ))}
      </div>

      <style>{`
        .process-card-area {
          align-items: center;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
        }

        .process-card-section {
          align-items: center;
          display: flex;
          height: 20rem;
          justify-content: center;
          width: auto;
          flex-shrink: 0;
          border: none;
          outline: none;
        }

        .process-card-section * {
          outline: none;
        }

        .process-card-section *:focus {
          outline: none;
          box-shadow: none;
        }

        .process-card {
          background-color: rgba(0, 0, 0, 0.05);
          box-shadow: -0.1rem 1.7rem 6.6rem -3.2rem rgba(0, 0, 0, 0.5);
          height: 24rem;
          position: relative;
          transition: all 1s ease;
          width: 20rem;
          border: none;
          outline: none;
          border-radius: 1rem;
          overflow: hidden;
        }

        .process-card:hover {
          box-shadow: -0.1rem 1.7rem 6.6rem -3.2rem rgba(0, 0, 0, 0.75);
          width: 40rem;
        }

        .process-flip-card {
          height: 24rem;
          perspective: 100rem;
          position: absolute;
          right: 0;
          transition: all 1s ease;
          visibility: hidden;
          width: 20rem;
          z-index: 100;
        }

        .process-flip-card > * {
          visibility: visible;
        }

        .process-flip-card__container {
          height: 100%;
          position: absolute;
          right: 0;
          transform-origin: left;
          transform-style: preserve-3d;
          transition: all 1s ease;
          width: 100%;
        }

        .process-card:hover .process-flip-card__container {
          transform: rotateY(-180deg);
        }

        .process-card-front,
        .process-card-back {
          backface-visibility: hidden;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .process-card-front {
          background-color: #faf8f5;
          height: 24rem;
          width: 20rem;
          border-radius: 1rem;
          overflow: hidden;
        }

        .process-card-front__tp {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 24rem;
          justify-content: center;
          padding: 0;
        }

        .process-card-front__bt {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .process-card-back {
          background-color: #faf8f5;
          transform: rotateY(180deg);
          border-radius: 1rem;
          overflow: hidden;
        }

        .process-card-back img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .process-inside-page {
          background-color: #faf8f5;
          box-shadow: inset 20rem 0px 5rem -2.5rem rgba(0, 0, 0, 0.25);
          height: 100%;
          padding: 1.5rem;
          position: absolute;
          right: 0;
          transition: all 1s ease;
          width: 20rem;
          z-index: 1;
          border-radius: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .process-card:hover .process-inside-page {
          box-shadow: inset 1rem 0px 5rem -2.5rem rgba(0, 0, 0, 0.1);
          width: 20rem;
        }

        .process-inside-page__container {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: center;
          width: 100%;
          overflow: hidden;
          justify-content: center;
        }

        .process-inside-page__btn {
          background-color: transparent;
          border: 3px solid;
          border-radius: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 2rem;
          overflow: hidden;
          padding: 0.7rem 0.75rem;
          position: relative;
          text-decoration: none;
          transition: all 0.3s ease;
          width: 90%;
          z-index: 10;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .process-inside-page__btn:focus {
          outline: none;
          box-shadow: none;
        }

        .process-inside-page__btn::before {
          content: "";
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          transform: scaleY(0);
          transition: all 0.3s ease;
          width: 100%;
          z-index: -1;
          background-color: var(--btn-color, #1a1a1a);
        }

        .process-inside-page__btn:hover {
          color: #faf8f5 !important;
        }

        .process-inside-page__btn:hover::before {
          transform: scaleY(1);
          background-color: var(--btn-color, #1a1a1a) !important;
        }
      `}</style>

      {/* Bottom Line */}
      <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}

function ProcessCard({ process, index }: { process: typeof processes[0], index: number }) {
  return (
    <div className="process-card-section">
      <div className="process-card">
        {/* Flip Card */}
        <div className="process-flip-card">
          <div className="process-flip-card__container">
            {/* Card Front */}
            <div className="process-card-front">
              <div className="process-card-front__tp relative overflow-hidden">
                <img
                  src={process.frontImage}
                  alt={process.category}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Card Back */}
            <div className="process-card-back">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={index === 0 ? '/f1.png' : index === 1 ? '/f2.png' : '/f3.png'}
                  alt={process.title}
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Inside Page */}
        <div className="process-inside-page">
          <div className="process-inside-page__container">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 inside-page__heading" style={{ color: process.pastelColor }}>
              {process.title}
            </h3>
            <p className="text-[#252525] text-base md:text-lg leading-relaxed mb-0 inside-page__text">
              {process.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
