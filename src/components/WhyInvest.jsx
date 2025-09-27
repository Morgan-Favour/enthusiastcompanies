'use client'
import { motion } from 'framer-motion'
import {whyInvestData} from "../constants/index.js"


export default function WhyInvest() {
  return (
    <section className="py-20 px-6 bg-eh-white text-center">
      <h2 className="text-4xl font-bold mb-12">Why Invest Now?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {whyInvestData.map((item, i) => (
          <motion.div
            key={item.id}
            className="p-6 rounded-xl shadow-lg bg-white"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-eh-accent">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
