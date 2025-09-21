import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[url('/footer-bg.jpg')] bg-cover bg-bottom bg-no-repeat h-[400px] w-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-eh-black/70"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center relative z-10 px-15 text-white mx-auto">
                <div className='w-full md:w-1/2 pr-8'>
                    <Image src="/plug-logo.svg" alt="Logo" width={50} height={50} />
                    <p className='mt-4 text-sm leading-relaxed'>
                        Petroleum is the leader in the country sed diam nonumy eirmod tempor invidunt ut labore and efficient strategy.
                        We provide the energy to medium and big company, sadipscing elitr, sed diam nonumy.
                    </p>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className='mb-5 text-3xl font-bold'>GET IN TOUCH</h2>
                    <div className='space-y-2 text-sm'>
                        <p>PHONE: +234 814 454 3193</p>
                        <p>EMAIL: morganfavour85@gmail.com</p>
                        <p>ADDRESS: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minus dolorum iusto in qui dolorem iure, ut saepe distinctin.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer