"use client";

import { useEffect, useRef } from "react";
import Title from "../Title"

import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';



const teamMembers = [
    {
        name: 'Mo',
        role: 'Project Manager'
    },
    {
        name: 'John Doe',
        role: 'Manager'
    },
    {
        name: 'Gabriel Thankgod',
        role: 'Solar Expert'
    },
    {
        name: 'Gabriel thankgod',
        role: 'Lead Developer'
    },
    {
        name: 'Ezekiel Etim',
        role: 'Items officer'
    },
    
]

function TeamMembers() {

    const { scrollYProgress: completionProgress } = useScroll();

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const slideLeft = useTransform(scrollYProgress, [0, 1], ["-60%", "0%"]);

    const slideRight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);



    return (
        <div className="py-20 px-4 md:px-15 w-full h-fit flex flex-col items-center justify-center bg-[#f2f2f2]">
            <div className="w-full h-full flex flex-col md:flex-row gap-5 items-center justify-start" ref={containerRef}>
                <motion.div className="flex flex-col items-start justify-start gap-5 w-full md:w-[40%]">
                    <motion.div
                        // initial={{ opacity: 0, x: -50 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                        // viewport={{ once: true }}
                        style={{ x: slideLeft }}
                        className="">
                        <Title title="Our Experts"
                            textAligment="left"
                            text1="Meet a Team"
                            text2=" of Industry Leaders"
                        />
                    </motion.div>
                    <motion.p
                        // initial={{ opacity: 0, x: -50 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                        // viewport={{ once: true }}
                        style={{ x: slideLeft }}
                        className="text-normal text-eh-black text-lg mb-5">
                        Our team comprises seasoned professionals with extensive experience in hydrogen technology, renewable energy, and sustainable development. Together, we are committed to driving innovation and making a positive impact on the world.
                    </motion.p>
                </motion.div>
                <motion.div className="p-3 flex  justify-start items-startw-full md:w-[60%]">
                    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 items-center justify-start gap-5">
                        <div className="flex flex-col gap-5 items-center justify-center shadow-lg rounded-2xl overflow-hidden">
                            <div className="overflow-hidden h-[200px] w-full mb-4">
                                <img src="/slide4.jpg" alt="Team Member 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out" />
                            </div>
                            <h2 className="text-2xl font-bold text-eh-black capitalize">
                                {teamMembers.name[0]}
                            </h2>

                        </div>
                        
                        
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TeamMembers