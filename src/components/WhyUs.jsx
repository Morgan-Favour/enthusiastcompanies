'use client';
import { whyUsData } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between items
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const WhyUs = () => {
  return (
    <section className=" px-6 md:px-20 max-w-7xl mx-auto py-10 md:py-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* Left side - Heading + Image */}
        <motion.div variants={item} className="space-y-6">
          <motion.h2
            className="text-4xl font-bold text-eh-accent text-center md:text-left"
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h2>

          <motion.div
            variants={item}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              width={600}
              height={200}
              src="/image2.jpg"
              alt="Growth Infographic"
              className="mx-auto rounded-2xl"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              width={600}
              height={200}
              src="/image3.jpg"
              alt="Growth Infographic"
              className="mx-auto rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 p-6 md:p-10"
          variants={container}
        >
          {whyUsData.map((data) => (
            <motion.div
              key={data.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-eh-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-eh-black mb-2">
                {data.title}
              </h3>
              <p className="text-gray-600">{data.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyUs
