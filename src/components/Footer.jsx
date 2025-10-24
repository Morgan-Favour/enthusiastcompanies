'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const logoMap = {
"/": "/companies-logo.png",
"/hydrogen": "/logo-2.png",
"/power": "/power-logo.png",
"/product": "/product-logo-2.png",
}


const Footer = () => {
  const pathname = usePathname()

  const logoSrc = logoMap[pathname] || "/companies-logo.png"


  return (
    <motion.footer
      className="bg-eh-black bg-cover bg-center bg-no-repeat relative text-white px-6 md:px-20 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-eh-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left section */}
        <motion.div
          className="w-full space-y-4 text-center md:text-left"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <Link href="/">
            <motion.div
              className="flex items-center justify-center md:justify-start"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                width={200}
                height={100}
                src={logoSrc}
                alt="Logo"
                className='mb-5'
                priority
              />
              
            </motion.div>
          </Link>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam atque repellat sed, laboriosam possimus veniam porro sequi inventore nihil ullam quis nesciunt officiis similique, veritatis quibusdam consectetur. Tenetur, at.
          </p>
        </motion.div>

        {/* Right section */}
        <motion.div
          className="w-full space-y-5 text-center md:text-left"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">GET IN TOUCH</h2>
          <motion.div
            className="space-y-2 text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p><strong>PHONE:</strong> <a href="tel:+2344543193">+234 567 8910</a></p>
            <p><strong>EMAIL:</strong> <a href="mailto:contact@enthusiastcompanies.com"> contact@enthusiastcompanies.com</a></p>
            <p><strong>ADDRESS:</strong> <a href="https://www.google.com/maps?q=Enthusiast+Hydrogen+Nigeria" target="_blank"rel="noopener noreferrer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum! Delectus sint sed tempora minima eveniet praesentium impedit expedita, obcaecati veritatis non ex, quaerat explicabo vero cupiditate nam quibusdam nobis.</a></p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
