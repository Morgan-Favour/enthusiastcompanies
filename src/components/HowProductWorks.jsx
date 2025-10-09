'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { productCards } from '../constants/index.js'


export default function HowProductWorks() {
  
  return (
    <section className="relative bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Badge className="mb-4">Our Product Divisions</Badge>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-slate-900"
        >
          From natural hydrogen beneath the earth to clean energy above it
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-600 max-w-2xl mx-auto"
        >
          Our hydrogen power process combines exploration, safe extraction, and cutting-edge conversion to bring renewable energy to the world.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center w-full">
          {productCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-shadow rounded-2xl h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-cyan-50">
                  {card.icon}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <span className="w-28 h-0.5 bg-gradient-to-r from-cyan-400 to-slate-300 rounded-full block" />
        </div>
      </div>
    </section>
  )
}
