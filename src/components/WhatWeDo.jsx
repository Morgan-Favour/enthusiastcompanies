'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { whatWeDoCards } from '../constants/index.js'


const WhatWeDo = () => {
  

  return (
    <motion.section
      className="container my-20 px-6 space-y-14 text-center"
      initial={{ opacity: 0, y: 100, rotate: -5, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut', type: 'spring', bounce: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      
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
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
      </motion.div>

      {/* Intro text */}
      <motion.div
        className="w-full md:w-2/3 h-[100px] mx-auto space-y-6 text-lg text-eh-black"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          We are building the hydrogen economy of the future — providing clean, 
          reliable, and scalable energy solutions that reduce emissions and 
          unlock new opportunities for industries worldwide.
        </p>
        <Link 
          href="/about" 
          className="inline-block text-eh-white px-6 py-3 rounded-lg bg-eh-primary hover:bg-eh-accent transition"
        >
          Learn More
        </Link>
      </motion.div>

      {/* Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 place-items-center"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        viewport={{ once: true }}
      >
        {whatWeDoCards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white p-8 space-y-6 w-80 shadow-xl rounded-2xl hover:shadow-2xl transition group"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <div className="flex justify-center">{card.icon}</div>
            <h2 className="text-2xl font-bold text-eh-black group-hover:text-eh-accent transition">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default WhatWeDo
