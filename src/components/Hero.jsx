'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
   <main className="relative w-full min-h-[100svh] flex items-center justify-center text-center">
      {/* Background video */}
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


      {/* Gradient overlay */}
      

      {/* Content */}
      <div className="relative z-20 px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase mb-6 text-eh-white">
            Enthusiast <br />
            <span className="bg-gradient-to-r from-eh-white to-eh-primary bg-clip-text text-transparent">
              Hydrogen
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Driving the future of clean hydrogen energy
          </p>
        </motion.div>

        {/* Animated CTA Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 10,
            delay: 1,
          }}
          className="relative px-8 py-4 text-xl text-eh-white font-semibold rounded-full overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            Explore
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </span>
          {/* Cool animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-eh-primary to-eh-black opacity-90 group-hover:opacity-100 transition-all duration-500"></div>
        </motion.button>
      </div>
    </main>
  )
}

export default Hero
