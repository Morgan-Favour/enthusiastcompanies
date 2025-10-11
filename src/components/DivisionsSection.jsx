'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { divisions} from "../constants/index.js"

export default function DivisionsSection() {
  

  return (
    <section
      id="divisions"
      className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Divisions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-slate-300 max-w-2xl mx-auto mb-16"
        >
          Each Enthusiast division is built on innovation, engineering excellence,
          and a shared mission to power a cleaner, smarter world.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {divisions.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/60 border border-slate-700 hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all rounded-2xl overflow-hidden h-full flex flex-col items-center text-center p-6">
                <div className="mb-4">{d.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {d.name}
                </h3>
                <p className="text-sm text-slate-400 mb-6">{d.desc}</p>
                <Button asChild>
                  <a href={d.link} className="font-medium text-eh-white">
                    Learn More
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
