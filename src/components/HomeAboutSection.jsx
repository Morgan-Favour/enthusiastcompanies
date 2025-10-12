'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Leaf, Network } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
    const values = [
        {
            icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
            title: 'Innovation',
            desc: 'Pushing boundaries in clean technology, energy systems, and smart product design.',
        },
        {
            icon: <Leaf className="w-6 h-6 text-cyan-400" />,
            title: 'Sustainability',
            desc: 'Driving eco-conscious advancements that power the world responsibly.',
        },
        {
            icon: <Network className="w-6 h-6 text-cyan-400" />,
            title: 'Integration',
            desc: 'Connecting hydrogen, power, and products into a seamless ecosystem of progress.',
        },
    ]

    return (
        <section
            id="about"
            className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24 px-6 text-white"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        About Enthusiast Company LLC
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-slate-300 leading-relaxed mb-8"
                    >
                        Enthusiast Companies™ LLC - a holding and development company for our founder Brian Peck, was created in Atlanta in 2005 to develop an insurance product to protect Automotive Enthusiasts like him. The company has since created, operated, and consulted several business in the insurance, automotive, electronics, blockchain, and energy industries.
                    </motion.p>

                    <div className="space-y-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-4"
                            >
                                <div className="flex-shrink-0">{v.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold">{v.title}</h4>
                                    <p className="text-sm text-slate-400">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                    <Image
                        src="/enthusiast-hq.png"
                        alt="Enthusiast Company Headquarters"
                        width={600}
                        height={400}
                        className="object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
