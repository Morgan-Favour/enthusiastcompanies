import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-[url('/footer-bg.jpg')] bg-cover bg-bottom bg-no-repeat relative text-white px-6 md:px-20">
            {/* Overlay */}
            <div className="absolute inset-0 bg-eh-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left section */}
                <div className="w-full md:w-100 space-y-4 text-center md:text-left">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image
                                width={100}
                                height={50}
                                src="/logo-icon.png"
                                alt="Logo"
                                priority
                            />
                            <h2 className="space-grotesk text-2xl">Enthusiast <br /> Hydrogen</h2>
                        </div>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Petroleum is the leader in the country sed diam nonumy eirmod tempor invidunt ut labore
                        and efficient strategy. We provide the energy to medium and big company, sadipscing elitr,
                        sed diam nonumy.
                    </p>
                </div>

                {/* Right section */}
                <div className="w-full md:w-100 space-y-5 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">GET IN TOUCH</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>PHONE:</strong> +234 814 454 3193</p>
                        <p><strong>EMAIL:</strong> morganfavour85@gmail.com</p>
                        <p>
                            <strong>ADDRESS:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minus dolorum iusto in qui dolorem iure, ut saepe distinctin.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
