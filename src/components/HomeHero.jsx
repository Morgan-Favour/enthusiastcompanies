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
    <section
      className="
        relative 
        bg-gradient-to-b from-eh-power-black via-black to-[#141414] 
        text-white 
        min-h-screen 
        flex items-center justify-center 
        overflow-x-hidden overflow-y-clip
        px-6 pt-24 md:pt-28"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
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
              className="text-4xl md:text-6xl font-extrabold mb-6 text-eh-power-red drop-shadow-[0_0_15px_rgba(230,50,61,0.4)]"
            >
              {slides[index].title}
            </motion.h2>

            <p className="text-slate-200 max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              {slides[index].desc}
            </p>

            <Button
              asChild
              className="bg-eh-power-red hover:bg-[#c82831] text-white font-medium shadow-[0_0_20px_rgba(230,50,61,0.4)] hover:shadow-[0_0_35px_rgba(230,50,61,0.6)] transition-all rounded-full px-8 py-3 text-lg"
            >
              <a href={slides[index].link}>{slides[index].cta}</a>
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glowing background accents */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-eh-power-red/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-1/3 w-[300px] h-[300px] bg-eh-power-yellow/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}
