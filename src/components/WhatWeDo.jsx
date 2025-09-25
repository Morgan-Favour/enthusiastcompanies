'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


const WhatWeDo = () => {
  return (
    <motion.section
      className="container my-20 px-6 space-y-10 text-center"
      initial={{ opacity: 0, y: 100, rotate: -5, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut', type: 'spring', bounce: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, type: 'spring', stiffness: 200 }}
        viewport={{ once: true }}
      >
        <Image
          src="/logo-icon.png"
          alt="Logo icon"
          width={100}
          height={50}
          priority
        />
        <motion.h2
          className="text-4xl font-bold text-eh-accent mt-4"
          whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 mx-auto space-y-10 text-lg text-eh-black"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste ipsam aliquid harum maxime tempore quaerat culpa possimus, commodi nihil magnam iure vitae corporis sapiente optio blanditiis animi unde? Accusamus.
        </p>
        <Link href="/about" className='text-eh-white px-6 py-2 rounded-lg bg-eh-primary'>Learn More</Link>
      </motion.div>
    </motion.section>
  )
}

export default WhatWeDo
