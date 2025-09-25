'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'


const Hero = () => {

  return (
    <main className="w-full relative min-h-[90vh]">
      {/* Background image */}
      <Image
        src="/hero-bg.jpeg"
        alt="Hero Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-eh-primary to-eh-black/90 z-10"></div>

      {/* Content */}
      <div className="container text-white relative z-10">
        <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[90vh]">
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
                duration: 0.4
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:7xl font-bold leading-tight uppercase">
                Enthusiast <br />
                <span className='text-transparent text-outline'>Hydrogen</span>
              </h1>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
                duration: 0.5
              }}
              viewport={{ once: true }}
              className="outline-btn flex justify-center items-center gap-5 text-xl group">
              Explore
              <ArrowRight className='group-hover:translate-x-2 transition' />
            </motion.button>
          </div>
          <div>
            <motion.img 
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            src="/truck.png" alt="Truck" className='w-[100%]' />
          </div>
        </section>
      </div >
    </main >


  )
}

export default Hero