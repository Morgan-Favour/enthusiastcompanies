'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const HomePartnershipSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
            Partner with Enthusiast
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            At Enthusiast Company LLC, we believe true innovation happens when
            bright minds come together. Whether you are an investor, researcher,
            or organization looking to scale sustainable technology, our door is
            open.
          </p>
          <p className="text-slate-400 mb-10 leading-relaxed">
            We collaborate with governments, industries, and innovators to
            develop breakthrough hydrogen, power, and smart product solutions
            for the next century. Join us in building a cleaner, smarter world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
              asChild
            >
              <a href="/contact">Become a Partner</a>
            </Button>
            
          </div>
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/home-patnership-img.png"
            alt="Partnership and Collaboration"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
          />
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-2xl -z-10" />
        </motion.div>
      </div>

      {/* background glow accent */}
      <div className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  )
}

export default HomePartnershipSection
