'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { divisions } from "../constants/index.js"

export default function DivisionsSection() {
  return (
    <section
      id="divisions"
      className="relative bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a] py-24 px-6 text-[var(--color-eh-white)]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-eh-power-red)]"
        >
          Our Divisions
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Each Enthusiast division is built on innovation, engineering excellence,
          and a shared mission to power a cleaner, smarter world.
        </motion.p>

        {/* Division Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
          {divisions.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  bg-gradient-to-b from-[#1c1c1c] to-[var(--color-eh-power-black)]
                  border border-[var(--color-eh-power-red)]/20
                  hover:border-[var(--color-eh-power-red)]/60
                  hover:shadow-[0_0_25px_var(--color-eh-power-red)/30]
                  transition-all duration-300
                  rounded-2xl p-8
                  flex flex-col items-center text-center
                  h-full
                "
              >
                <div className="mb-6 text-[var(--color-eh-power-yellow)] text-5xl">
                  {d.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[var(--color-eh-white)]">
                  {d.name}
                </h3>

                <p className="text-sm text-gray-400 mb-8">
                  {d.desc}
                </p>

                <Button
                  asChild
                  className="
                    bg-[var(--color-eh-power-red)]
                    hover:bg-[#c82831]
                    z-10
                    text-[var(--color-eh-white)]
                    font-medium
                    transition-all
                    shadow-md shadow-[var(--color-eh-power-red)]/30
                  "
                >
                  <a href={d.link}>Learn More</a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle glowing background accent */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-eh-power-red)]/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
