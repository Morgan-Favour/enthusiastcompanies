'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { points } from "../constants/index.js"

export default function InnovationSection() {
  return (
    <section className="relative bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a] py-24 px-6 text-[var(--color-eh-white)] overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_5px_rgba(230,50,61,0.25)]"
        >
          <Image
            src="/innovation-lab.png"
            alt="Innovation and Research Lab"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-eh-power-black)]/70 to-transparent" />
        </motion.div>

        {/* Right - Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-eh-power-red)]"
          >
            Driving the Future of Sustainable Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8 leading-relaxed"
          >
            Our 20th anniversary in 2025 is proving to be exciting. We're publicly launching our biggest projects to date — Enthusiast Hydrogen Corporation, Enthusiast Power Corporation, and Enthusiast Products Corporation. These entities are working to safely locate, develop, and produce natural hydrogen resources for energy, heat, and industrial feedstock products.
          </motion.p>

          <div className="space-y-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 text-[var(--color-eh-power-yellow)]">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-eh-white)]">{p.title}</h4>
                  <p className="text-sm text-gray-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-eh-power-red)]/15 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-[var(--color-eh-power-yellow)]/10 rounded-full blur-3xl" />
    </section>
  )
}
