'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  "Powering the Future with Clean Hydrogen Energy",
  "Innovating the Multi Disc Rotary™ Generator for Zero Emission Power",
  "Transforming Natural Hydrogen into Sustainable Electricity",
  "Driving the Global Shift Toward Renewable Hydrogen Solutions"
]

const PowerHero = () => {
  const [index, setIndex] = React.useState(0)

  // Automatically cycle messages every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center h-[100vh] text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-[00px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        <source src="/bg-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-eh-black/70 z-10"></div>
      {/* Animated text carousel */}
      <div className="relative z-10 max-w-3xl px-6 pt-20">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {messages[index]}
          </motion.h1>
        </AnimatePresence>

        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Enthusiast Hydrogen’s Power Division is revolutionizing how the world generates and distributes clean energy.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {/* <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition">
            Learn More
          </button> */}
          <button className="bg-transparent border border-eh-power-red hover:bg-eh-power-red text-white px-6 py-3 rounded-3xl font-semibold transition">
            Partner With Us
          </button>
        </div>
      </div>

      {/* Decorative animated bubbles */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 opacity-60">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-cyan-300 rounded-full animate-bounce delay-100" />
        <div className="w-3 h-3 bg-cyan-200 rounded-full animate-bounce delay-200" />
      </div>
    </section>
  )
}

export default PowerHero
