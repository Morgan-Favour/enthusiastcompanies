'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { statsData } from '../constants/index.js'

const Stats = () => {
  return (
    <section className='w-full flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 my-12 md:my-20 p-12 lg:px-20 py-10 shadow-2xl mx-6 md:mx-15 rounded-3xl bg-eh-white"
      >
        {/* Left Side: Heading + Description */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-eh-black">
            Let's build something together.
          </h1>
          <p className="text-base md:text-lg text-eh-black leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
            consequatur debitis assumenda maxime, minima minus cupiditate
            provident vero animi. Ullam quam rem sint repudiandae unde, provident
            mollitia omnis sed.
          </p>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 text-center">
          {statsData.map((stats, index) => (
            <motion.div
              key={stats.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-eh-primary mb-1">
                <CountUp
                  end={stats.number}
                  duration={4}
                  suffix={stats.suffix}
                />
              </h2>
              <p className="text-sm md:text-base text-gray-700">{stats.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>



  )
}

export default Stats
