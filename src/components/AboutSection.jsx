"use client";

import React, { useEffect, useRef } from 'react'
import Title from './Title'

import { useAnimation, useScroll } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform } from 'framer-motion';
import StatementCard from './StatementCard';

const mission = [
    {
        title: "Our Mission",
        description: "To revolutionize the hydrogen industry through innovative solutions and sustainable practices.",
        imageSrc: "/mission.png"
    },
    {
        title: "Our Vision",
        description: "To create a sustainable future powered by hydrogen energy.",
        imageSrc: "/vision.png"
    }
]


function AboutSection() {

    const { scrollYProgress: completionProgress } = useScroll();

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const slideLeft = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    const slideRight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);



    return (
        <div className="py-20 px-4 md:px-15 w-full h-fit flex flex-col items-center justify-center">
            <div className="w-full h-full flex md:flex-row flex-col items-center justify-center gap-10" ref={containerRef}>
                <motion.div
                    className="w-full md:w-1/2 flex flex-col gap-6 items-start justify-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                        viewport={{ once: true }}
                        className="">
                        <Title title="Who We Are"
                            textAligment="left"
                            text1="We are a team of passionate individuals"
                            text2=" dedicated to advancing hydrogen technology"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                        viewport={{ once: true }}
                        // style={{ x: slideRight }} 
                        className="w-full md:hidden md:w-1/2 h-auto flex justify-center items-center mb-5">
                        <img src="/image1.jpg" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                        viewport={{ once: true }}
                        className="text-normal text-eh-black text-lg mb-5">
                        At Enthusiast Hydrogen Company, we are committed to pioneering innovative hydrogen solutions that drive sustainable energy practices worldwide. Our team of experts collaborates across various disciplines to develop cutting-edge technologies that harness the power of hydrogen for a cleaner, greener future.
                    </motion.p>
                    <div className="w-full flex flex-col items-start justify-start gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                            viewport={{ once: true }}>
                            <StatementCard imageSrc={mission[0].imageSrc} title={mission[0].title} description={mission[0].description} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                            viewport={{ once: true }}>
                            <StatementCard imageSrc={mission[1].imageSrc} title={mission[1].title} description={mission[1].description} />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                    viewport={{ once: true }}
                    // style={{ x: slideRight }} 
                    className="w-full hidden md:w-1/2 h-auto md:flex justify-center items-center">
                    <img src="/image3.jpg" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </motion.div>
            </div>
        </div>
    )
}

export default AboutSection