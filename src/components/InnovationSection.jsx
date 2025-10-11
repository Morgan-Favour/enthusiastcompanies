'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InnovationSection() {
  

  return (
    <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24 px-6 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/mocks/innovation-lab.jpg"
            alt="Innovation and Research Lab"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </motion.div>

        {/* Right - Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Driving the Future of Sustainable Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-300 mb-8 leading-relaxed"
          >
            At Enthusiast Company LLC, innovation isn’t just a goal — it’s our
            identity. From hydrogen breakthroughs to smart power networks and
            sustainable products, we’re shaping the future of global energy and
            technology.
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
                <div className="flex-shrink-0">{p.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  <p className="text-sm text-slate-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  )
}
