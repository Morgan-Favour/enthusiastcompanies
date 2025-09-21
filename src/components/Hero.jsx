'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'


const Hero = () => {

  return (
    <main className="w-full relative min-h-[90vh]">
      {/* Background image */}
      <Image
        src="/hero-bg.jpeg"
        alt="Hero Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-eh-primary to-eh-black/90 z-10"></div>

      {/* Content */}
      <div className="container text-white relative z-10">
        <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[90vh]">
          <div>
            <h1 className="text-5xl lg:7xl font-bold leading-tight uppercase">Enthusiast <br /> <span className='text-transparent text-outline'>Hydrogen</span></h1>
            <button className="outline-btn flex justify-center items-center gap-5 text-xl mt-10">
              Explore
             <ArrowRight />
            </button>
          </div>
          <div>
            <img src="/truck.png" alt="Truck" className='w-[100%]' />
          </div>
        </section>
      </div>
    </main>


  )
}

export default Hero