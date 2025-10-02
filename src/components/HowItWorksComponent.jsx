"use client";

import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion';

function HowItWorksComponent() {
  return (
    <div className="py-20 px-4 md:px-15 w-full h-fit flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-start justify-start">
        <div className="w-full flex flex-row md:flex-col">


          
        </div>
        
        
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-start justify-start ">
          

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="text-normal text-eh-black text-lg mb-5 text-left px-2 md:px-20">
            Natural hydrogen, also known as white hydrogen, is hydrogen that is found in nature in its molecular form (H2) rather than being produced through industrial processes. It can be found in various geological formations, such as underground reservoirs, and is often associated with other gases like methane. Natural hydrogen is considered a potential clean energy source because it can be used in fuel cells to generate electricity without producing carbon emissions. However, the extraction and utilization of natural hydrogen are still in the early stages of development, and more research is needed to fully understand its potential and environmental impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            // style={{ x: slideRight }} 
            className="w-full md:hidden md:w-1/2 h-auto flex justify-center items-center mb-5  overflow-hidden">
            <img src="/h2o.jpg" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
          viewport={{ once: true }}
          // style={{ x: slideRight }} 
          className="w-full hidden md:w-1/2 h-auto md:flex justify-center items-center">
          <img src="/h2o.jpg" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  )
}

export default HowItWorksComponent