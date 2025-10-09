'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MonitorPlay, Cpu, Wind, Sparkles } from 'lucide-react'
import { features } from '../constants/index.js'

export default function TechnologySection() {
  
  return (
    <section
      aria-labelledby="tech-heading"
      className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Visual */}
        <motion.figure
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/hydrogen-tank.png"
            alt="Multi Disc Rotary generator render"
            className="w-full h-[420px] object-cover bg-slate-800"
          />

          {/* floating card */}
          <Card className="absolute -bottom-8 left-6 w-72 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-cyan-50">
                  <Sparkles className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Prototype Status</h4>
                  <p className="mt-1 text-xs text-slate-600">Validated bench tests • Field pilots planned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.figure>

        {/* Right: Content */}
        <div>
          <Badge className="mb-4">Our Technology</Badge>

          <motion.h2
            id="tech-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-extrabold leading-tight"
          >
            Engineered systems for extracting and converting natural hydrogen into clean power
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-slate-600 max-w-xl"
          >
            Our Power Division combines novel mechanical design, advanced sensing, and end-to-end processing to turn naturally occurring hydrogen into dispatchable energy — with safety, efficiency, and scale in mind.
          </motion.p>

          {/* features */}
          <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.li
                key={feature.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.55 }}
                className="flex gap-4 items-start bg-gradient-to-r from-slate-50 to-white p-4 rounded-2xl shadow-sm"
              >
                <div className="flex-none w-11 h-11 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                  {feature.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{feature.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/contact" className="inline-flex items-center gap-2">
                Partner With Us
              </a>
            </Button>

            {/* <Button variant="ghost" asChild>
              <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Download Whitepaper
              </a>
            </Button> */}
          </div>
        </div>
      </div>

      {/* subtle divider */}
      <div className="mt-12 flex justify-center">
        <span className="w-28 h-0.5 bg-gradient-to-r from-cyan-400 to-slate-300 rounded-full block" />
      </div>
    </section>
  )
}
