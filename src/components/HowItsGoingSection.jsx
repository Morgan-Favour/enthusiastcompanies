'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HowItsGoingSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-24 px-6 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            How It’s Going
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            Brian continued to develop his vision — and finally, the world
            caught up. There isn’t enough hydrogen <span className="font-semibold text-white">on</span> the planet for his
            device, but there are hundreds of years worth <span className="font-semibold text-white">in</span> it. It’s
            under your feet almost everywhere.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            Several technological, environmental, governmental, and societal
            movements came together perfectly in 2025 to propel him forward with
            his hydrogen dreams. What once seemed impossible became attainable
            through a fusion of science, innovation, and timing.
          </p>

          <p className="text-slate-300 leading-relaxed">
            While hydrogen is not the solution to everything, Brian’s
            <span className="text-cyan-300"> 25 years of experience </span>
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
            <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-2xl"></div>
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

      {/* Decorative glowing element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  )
}
