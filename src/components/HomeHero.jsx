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
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-45 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">


        <div className="relative h-[180px] md:h-[200px] mb-8 mt-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slides[index].title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold mb-6"
              >
                {slides[index].title}
              </motion.h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-6 text-base md:text-lg">
                {slides[index].desc}
              </p>
              <Button
                asChild
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium"
              >
                <a href={slides[index].link}>{slides[index].cta}</a>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Glowing cyan background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  )
}
