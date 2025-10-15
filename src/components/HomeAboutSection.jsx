'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Leaf, Network } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[var(--color-eh-power-red)]" />,
      title: 'Innovation',
      desc: 'Pushing boundaries in clean technology, energy systems, and smart product design.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[var(--color-eh-power-red)]" />,
      title: 'Sustainability',
      desc: 'Driving eco-conscious advancements that power the world responsibly.',
    },
    {
      icon: <Network className="w-6 h-6 text-[var(--color-eh-power-red)]" />,
      title: 'Integration',
      desc: 'Connecting hydrogen, power, and products into a seamless ecosystem of progress.',
    },
  ]

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a] py-24 px-6 text-[var(--color-eh-white)]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-eh-power-red)]"
          >
            About Enthusiast Companies LLC
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed mb-10"
          >
            Enthusiast Companies™ LLC — a holding and development company founded by Brian Peck in 2005 in Atlanta — began with a mission to protect Automotive Enthusiasts through innovative insurance solutions. Since then, it has expanded into industries including automotive, electronics, blockchain, and energy — fostering a legacy of technological advancement and visionary leadership.
          </motion.p>

          <div className="space-y-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">{v.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-eh-white)]">
                    {v.title}
                  </h4>
                  <p className="text-sm text-gray-400">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_var(--color-eh-power-red)]"
        >
          <Image
            src="/enthusiast-hq.png"
            alt="Enthusiast Companies Headquarters"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-eh-power-red)/15,transparent_70%)]" />
        </motion.div>
      </div>

      {/* Background glow accent */}
      <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] bg-[var(--color-eh-power-red)]/20 rounded-full blur-3xl" />
    </section>
  )
}
