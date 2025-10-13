'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { partnerships } from '../constants/index.js'

export default function PartnerSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-eh-power-black to-[#1a1a1a] py-24 px-6 text-white overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-eh-power-red/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-eh-power-yellow/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <Badge className="mb-6 bg-eh-power-red text-eh-white border-eh-power-red text-lg px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(230,50,61,0.4)]">
          Partnerships
        </Badge>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          Partner With <span className="text-eh-power-red">Enthusiast Hydrogen Power</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Collaboration fuels innovation. Join us in building a sustainable hydrogen future through
          investment, research, and global energy partnerships.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partnership, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gradient-to-b from-[#1f1f1f]/70 to-eh-power-black/70 border border-eh-power-red/50 hover:border-eh-power-red transition-all rounded-2xl h-full text-left shadow-md hover:shadow-[0_0_20px_rgba(230,50,61,0.2)] hover:-translate-y-1 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eh-power-red text-white shadow-[0_0_12px_rgba(230,50,61,0.5)]">
                      {partnership.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {partnership.title}
                  </h3>
                  <p className="text-sm text-slate-300">{partnership.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <Button
            size="lg"
            className="bg-transparent border border-eh-power-red hover:bg-eh-power-red text-white px-6 py-3 rounded-3xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(230,50,61,0.4)]"
            asChild
          >
            <a href="#contact" className="text-eh-white font-semibold">
              Become a Partner
            </a>
          </Button>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <span className="w-28 h-0.5 bg-gradient-to-r from-eh-power-red to-eh-power-yellow rounded-full block" />
        </div>
      </div>
    </section>
  )
}
