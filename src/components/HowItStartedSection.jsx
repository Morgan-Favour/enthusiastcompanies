'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { timeline } from '../constants/index.js'

export default function HowItStartedSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a] py-24 px-6 text-[var(--color-eh-white)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-eh-power-red)]"
        >
          How It Started
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          A story of persistence, inspiration, and innovation — tracing the origins of Enthusiast Hydrogen from one man’s vision to a company reshaping the future of energy.
        </motion.p>

        <div className="relative">
          {/* Static center line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-800 transform md:-translate-x-1/2 rounded-full" />

          {/* Animated glowing energy line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[var(--color-eh-power-red)] via-[var(--color-eh-power-yellow)] to-transparent transform md:-translate-x-1/2 rounded-full"
          />

          <div className="space-y-20 relative z-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Text block */}
                  <div
                    className={`md:w-1/2 ${
                      isLeft
                        ? 'md:pr-10 md:text-right'
                        : 'md:pl-10 md:text-left'
                    } text-left pl-10 md:pl-0`}
                  >
                    <h3 className="text-xl font-semibold text-[var(--color-eh-power-red)] mb-2">
                      {item.year}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Glowing energy node */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[var(--color-eh-power-red)] rounded-full shadow-[0_0_25px_8px_rgba(255,0,0,0.45)] animate-pulse transform md:-translate-x-1/2 border-2 border-[var(--color-eh-power-yellow)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Ambient red glow background */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[var(--color-eh-power-red)]/15 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-eh-power-yellow)]/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
