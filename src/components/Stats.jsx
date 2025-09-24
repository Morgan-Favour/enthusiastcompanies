'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { statsData } from '../constants/index.js'

const Stats = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
            }}
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-20 my-20 px-15 shadow-2xl mx-15 p-10 rounded-4xl' >
            <div className='space-y-6'>
                <h1 className='font-bold text-3xl text-eh-black'>Let's build something together.</h1>
                <p className='text-lg text-eh-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure consequatur debitis assumenda maxime, minima minus cupiditate provident vero animi. Ullam quam rem sint repudiandae unde, provident mollitia omnis sed.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {statsData.map((stats, index) => (
                    <motion.div
                        key={stats.id}
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-eh-accent mb-2">
                            <CountUp end={stats.number} duration={4} suffix={stats.suffix} />
                        </h2>
                        <p>{stats.title}</p>
                    </motion.div>
                ))}

            </div>
        </motion.section>
    )
}

export default Stats