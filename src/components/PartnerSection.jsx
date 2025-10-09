'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { partnerships } from '../constants/index.js'

export default function PartnerSection() {
  

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <Badge className="mb-4 bg-cyan-600/20 text-cyan-400 border-cyan-400/40">Partnerships</Badge>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-white"
        >
          Partner With Enthusiast Hydrogen Power
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-300 max-w-2xl mx-auto"
        >
          We believe that collaboration fuels innovation. Join us in building a sustainable hydrogen future through investment, research, and global energy partnerships.
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
              <Card className="bg-slate-800/60 border border-slate-700 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all rounded-2xl h-full text-left">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10">
                      {partnership.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{partnership.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{partnership.desc}</p>
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
          <Button size="lg" asChild>
            <a href="#contact" className="text-eh-white font-semibold">
              Become a Partner
            </a>
          </Button>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <span className="w-28 h-0.5 bg-gradient-to-r from-cyan-400 to-slate-500 rounded-full block" />
        </div>
      </div>
    </section>
  )
}