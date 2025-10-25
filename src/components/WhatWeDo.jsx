"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Keep the default data external so it can be edited easily in constants/index.js
import { whatWeDoCards as defaultCards } from '../constants/index.js'


const SECTION_VARIANTS = {
  initial: { opacity: 0, y: 100, rotate: -5, scale: 0.95 },
  enter: { opacity: 1, y: 0, rotate: 0, scale: 1 },
}

const CARD_LIST_VARIANTS = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18 } },
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({ title, logoSrc }) {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, rotate: 360 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ once: true }}
    >
      <Image src={logoSrc} alt="Logo icon" width={100} height={50} priority />
      <motion.h2
        className="text-4xl font-bold text-eh-accent mt-4"
        whileHover={{ scale: 1.03, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  )
}

function Intro({ text, ctaLabel, ctaHref }) {
  return (
    <motion.div
      className="w-full md:w-2/3 h-auto mx-auto space-y-6 text-lg text-eh-white"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.18 }}
      viewport={{ once: true }}
    >
      <p>{text}</p>
      <Link href={ctaHref} className="inline-block text-eh-white px-6 py-3 rounded-lg bg-eh-primary hover:bg-eh-accent transition">
        {ctaLabel}
      </Link>
    </motion.div>
  )
}

function ServiceCard({ title, desc, icon }) {
  return (
    <motion.div
      className="bg-slate-800/60 border border-slate-700 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all rounded-2xl p-8 space-y-6 w-80 group"
      variants={CARD_VARIANTS}
    >
      <div className="flex justify-center" aria-hidden>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-eh-white group-hover:text-eh-accent transition">{title}</h3>
      <p className="text-white">{desc}</p>
    </motion.div>
  )
}

/**
 * Props:
 * - title: section title
 * - introText: short paragraph
 * - ctaLabel / ctaHref: call to action
 * - cards: array of { id, title, desc, icon }
 */



const WhatWeDo = ({
  title = 'What We Do',
  introText = 'We are building the hydrogen economy of the future — providing clean, reliable, and scalable energy solutions that reduce emissions and unlock new opportunities for industries worldwide.',
  ctaLabel = 'Learn More',
  ctaHref = '/about',
  cards = defaultCards,
}) => {
  return (
    <motion.section
      className="w-full my-20 px-6 space-y-14 text-center"
      initial="initial"
      whileInView="enter"
      transition={{ duration: 0.8, ease: 'easeOut' }}
      variants={SECTION_VARIANTS}
      viewport={{ once: true }}
    >
      <SectionHeading title={title} logoSrc="/logo-icon.png" />

      <Intro text={introText} ctaLabel={ctaLabel} ctaHref={ctaHref} />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:mt-20 place-items-center"
        initial="hidden"
        whileInView="show"
        variants={CARD_LIST_VARIANTS}
        viewport={{ once: true }}
      >
        {cards.map((card) => (
          <ServiceCard key={card.id} title={card.title} desc={card.desc} icon={card.icon} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default WhatWeDo
