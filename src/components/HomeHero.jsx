'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const texts = [
  'Hydrogen Innovation',
  'Clean Power Systems',
  'Smart Product Solutions',
]

export default function HomeHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      3000
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Enthusiast Company LLC
        </motion.h1>

        <div className="relative h-10 md:h-14 mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 text-cyan-400 text-2xl md:text-4xl font-semibold"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-slate-300 max-w-2xl mx-auto mb-10"
        >
          We are a global innovation hub driving sustainable technology through our sub-companies — Enthusiast Hydrogen, Enthusiast Power, and Enthusiast Products. Together, we redefine the future of clean energy and smart living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button size="lg" asChild>
            <a href="#divisions" className="text-eh-white font-semibold">
              Explore Divisions
            </a>
          </Button>
        </motion.div>
      </div>

      {/* subtle background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  )
}
