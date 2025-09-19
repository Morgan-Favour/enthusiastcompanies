import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-5'>
            <Image
                width={100}
                height={100}
                src="/plug-logo.svg"
                alt="Description"

            />
            <div>
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-10"> 
                        <NavigationMenuItem>
                            <Link href="/">Home</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about">About</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact">Contact</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact">How It works</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact">Impact</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact">Investot Relations</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact">Projects</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Navbar