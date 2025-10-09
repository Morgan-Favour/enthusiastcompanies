'use client'

import React from 'react'
import { motion } from 'framer-motion'

import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='text-center pt-20 px-8 md:px-15'>
            <motion.h2
                className="text-4xl font-bold text-eh-accent mt-4"
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>
            <p className='max-w-2xl mx-auto mt-4 text-eh-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora praesentium, quibusdam explicabo beatae omnis sed exercitationem nemo est repellendus veritatis totam modi perspiciatis! Corporis similique eum illo quam nesciunt perspiciatis.</p>
            <ProjectCard />
        </div>

    )
}

export default Projects
