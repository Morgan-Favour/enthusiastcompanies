'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HowItsGoingSection() {
  return (
    <section className="relative bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a] py-24 px-6 text-[var(--color-eh-white)] overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-eh-power-red)]">
            How It’s Going
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Brian continued to develop his vision — and finally, the world
            caught up. There isn’t enough hydrogen{' '}
            <span className="font-semibold text-[var(--color-eh-white)]">on</span> the planet for his
            device, but there are hundreds of years worth{' '}
            <span className="font-semibold text-[var(--color-eh-white)]">in</span> it. It’s
            under your feet almost everywhere.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Several technological, environmental, governmental, and societal
            movements came together perfectly in 2025 to propel him forward with
            his hydrogen dreams. What once seemed impossible became attainable
            through a fusion of science, innovation, and timing.
          </p>

          <p className="text-gray-300 leading-relaxed">
            While hydrogen is not the solution to everything, Brian’s{' '}
            <span className="text-[var(--color-eh-power-yellow)] font-medium">
              25 years of experience
            </span>{' '}
            working with it have led to a scalable ecosystem — built around
            safety devices, baseload energy generation, and clean chemical
            feedstock. The world needs powerful, renewable sources to sustain
            life — and hydrogen is at the heart of that evolution.
          </p>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Red glow behind image */}
            <div className="absolute inset-0 bg-[var(--color-eh-power-red)]/25 rounded-3xl blur-2xl"></div>
            <Image
              src="/how-its-going.png"
              alt="Hydrogen Energy System Concept"
              width={600}
              height={400}
              className="relative z-10 rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-eh-power-red)]/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/3 w-[350px] h-[350px] bg-[var(--color-eh-power-yellow)]/10 rounded-full blur-3xl" />
    </section>
  )
}
