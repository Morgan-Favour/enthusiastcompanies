'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Factory, Mountain, Truck, Home } from 'lucide-react'
import { applications } from '../constants/index.js'

export default function Applications() {
  

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Badge className="mb-4">Applications</Badge>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-slate-900"
        >
          Powering industries, communities, and the future of mobility
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-600 max-w-2xl mx-auto"
        >
          Enthusiast Hydrogen Power adapts to multiple environments — delivering sustainable energy wherever it’s needed most.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all rounded-2xl h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-cyan-50">
                  {app.icon}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-slate-900">{app.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{app.desc}</p>
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