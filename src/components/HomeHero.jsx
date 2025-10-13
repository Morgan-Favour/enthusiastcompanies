'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: 'Enthusiast Hydrogen',
    desc: 'Pioneering hydrogen innovation for a cleaner, more sustainable world.',
    cta: 'Explore Hydrogen',
    link: '/enthusiast-hydrogen',
  },
  {
    title: 'Enthusiast Power',
    desc: 'Delivering next-generation energy solutions that empower communities.',
    cta: 'Discover Power',
    link: '/enthusiast-power',
  },
  {
    title: 'Enthusiast Products',
    desc: 'Building smart, efficient, and future-ready technologies for daily life.',
    cta: 'View Products',
    link: '/enthusiast-products',
  },
]

export default function HomeHero() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="relative bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a] text-[var(--color-eh-white)] min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6 pt-50">
      <div className="max-w-5xl mx-auto text-center relative z-10 mt-10 mb-30">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[index].title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 text-[var(--color-eh-power-red)]"
            >
              {slides[index].title}
            </motion.h2>

            <p className="text-gray-200 max-w-lg mx-auto mb-8 text-base md:text-lg">
              {slides[index].desc}
            </p>

            <Button
              asChild
              className="bg-[var(--color-eh-power-red)] hover:bg-[#c82831] text-[var(--color-eh-white)] font-medium shadow-lg shadow-[var(--color-eh-power-red)]/30 transition-all"
            >
              <a href={slides[index].link}>{slides[index].cta}</a>
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background glow (subtle yellow + red energy) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-eh-power-red)]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[var(--color-eh-power-yellow)]/10 rounded-full blur-3xl" />
    </section>
  )
}
