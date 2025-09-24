"use client";

import React, { useEffect, useRef } from 'react'
import Title from './Title'
import StatementCard from './StatementCard'
import { useAnimation, useScroll } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform } from 'framer-motion';

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
    <div className="py-25 px-4 md:px-10 w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex md:flex-row flex-col items-center justify-center gap-10" ref={containerRef}>
            <motion.div style={{ x: slideLeft }} className="w-1/2 flex flex-col gap-6 items-start justify-start">
                <Title title="Who We Are" 
                textAligment="left" 
                text1="We are a team of passionate individuals"
                text2=" dedicated to advancing hydrogen technology"
                />
                <p className="text-normal text-eh-black text-lg mb-5">
                    At Enthusiast Hydrogen Company, we are committed to pioneering innovative hydrogen solutions that drive sustainable energy practices worldwide. Our team of experts collaborates across various disciplines to develop cutting-edge technologies that harness the power of hydrogen for a cleaner, greener future.
                </p>
                <div className="w-full flex flex-col items-start justify-start gap-6">
                    <StatementCard imageSrc={mission[0].imageSrc} title={mission[0].title} description={mission[0].description} />
                    <StatementCard imageSrc={mission[1].imageSrc} title={mission[1].title} description={mission[1].description} />
                    
                </div>
            </motion.div>
            <motion.div style={{ x: slideRight }} className="w-1/2 h-full flex justify-center items-center">
                <img src="/slide2.jpg" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </motion.div>
        </div>
    </div>
  )
}

export default AboutSection