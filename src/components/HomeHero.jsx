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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDirection(1)
  //     setIndex((i) => (i + 1) % slides.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [])

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
      id="home-hero"
      className="
        relative 
        bg-gradient-to-b from-eh-power-black via-black to-[#141414] 
        text-white 
        min-h-screen 
        flex items-center justify-left 
        overflow-x-hidden overflow-y-clip
        px-6 pt-24 md:pt-28"
    >
      <div className="max-w-4xl text-left relative z-10 pl-0 md:pl-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            // key={slides[index].title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-start w-full md:w-[80%]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 text-eh-power-red drop-shadow-[0_0_15px_rgba(230,50,61,0.4)]"
            >
             Unlocking Clean Energy from Below
            </motion.h2>

            <p className="text-slate-200 max-w-xl mb-8 text-base md:text-lg leading-relaxed">
              We develop hydrogen, power, and product technologies to meet tomorrow’s demands
            </p>

            <Button
              asChild
              className="bg-transparent border border-eh-power-red hover:bg-eh-power-red text-white text-lg p-6 rounded-3xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(230,50,61,0.4)]"
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glowing background accents */}
      <div className="absolute bottom-[-50px] right-0  w-[400px] h-[400px] bg-eh-power-red/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-0 w-[350px] h-[350px] bg-eh-power-yellow/30 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}
