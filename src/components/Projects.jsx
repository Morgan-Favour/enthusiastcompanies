'use client'

import React from 'react'
import { motion } from 'framer-motion'

import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='text-center py-30 '>
            <motion.h2
                className="text-4xl font-bold text-eh-accent mt-4"
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>
            <ProjectCard />
        </div>

    )
}

export default Projects
