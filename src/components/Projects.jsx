'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import projects from '@/constants'

const Projects = () => {
    return (
        <div className='text-center my-30 '>
            <motion.h2
                className="text-4xl font-bold text-eh-accent mt-4"
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-6 md:px-20 py-20 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.3}
                            scale={1.05}
                            transitionSpeed={2500}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group"
                        >
                            {/* Make the whole card clickable */}
                            <Link href={'/projects'} className="block h-full">
                                <div className="flex flex-col h-full">
                                    <Image
                                        src={project.projectImage}
                                        alt={project.projectTitle}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-5 flex flex-col justify-between flex-grow">
                                        <div>
                                            <h2 className="text-lg font-semibold text-eh-black mb-2 group-hover:text-eh-accent transition">
                                                {project.projectTitle}
                                            </h2>
                                            <p className="text-sm text-gray-600 line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Learn More Button */}
                                        <div className="mt-4">
                                            <span className="inline-block border-eh-accent text-eh-primary px-4 py-2 text-sm rounded-md shadow-lg  transition">
                                                Learn More
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </div>

    )
}

export default Projects
