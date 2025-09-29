'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <main className="relative w-full min-h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-eh-primary to-eh-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container text-white px-10 md:px-15">
        <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[80vh] mt-25 md:mt-20 pt-10 md:pt-20">
          {/* Left content */}
          <div className="space-y-8 order-2 md:order-1 text-center md:text-left items-center justify-center flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 1,
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase mb-4">
                Enthusiast <br />
                <span className="text-transparent text-outline">Hydrogen</span>
              </h1>
              <p className="text-lg">
                Driving the future of clean hydrogen energy
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 1.2,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="outline-btn flex justify-center items-center gap-5 text-xl group"
            >
              Explore
              <ArrowRight className="group-hover:translate-x-2 transition" />
            </motion.button>
          </div>

          {/* Right image */}
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/truck.png"
            alt="Truck"
            className="w-3/4 order-1 md:w-[400px]"
          />
        </section>
      </div>
    </main>
  )
}

export default Hero
  