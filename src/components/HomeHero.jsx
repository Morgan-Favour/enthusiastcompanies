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
    <section className="h-screen relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center h-full w-full flex justify-center flex-col items-center ">
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Enthusiast Company LLC
        </motion.h1> */}

        <div className="relative h-full mb-8 w-full">
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
              <h2 className="text-4xl md:text-6xl font-semibold text-cyan-400 mb-3">
                {slides[index].title}
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-6 text-base md:text-lg">
                {slides[index].desc}
              </p>
              <Button className='bg-transparent border border-eh-primary hover:bg-eh-primary text-eh-primary hover:text-white px-6 py-3 rounded-3xl font-semibold transition'>
                <a href={slides[index].link} className="inline-flex items-center gap-2">
                  {slides[index].cta}
                </a>
              </Button>
              
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <p className="text-slate-400 max-w-2xl mx-auto">
          Innovating across hydrogen, power, and product technologies — shaping
          a sustainable future under one vision.
        </p> */}
      </div>

      {/* Glowing cyan background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  )
}
