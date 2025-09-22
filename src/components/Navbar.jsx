"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/impact", label: "Impact" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/projects", label: "Projects" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href) =>
    pathname === href
      ? "text-blue-600 font-semibold underline"
      : "text-gray-700 hover:text-blue-600"

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-20 shadow-sm">
      {/* Logo */}
      <Link href="/">
        <div className="flex justify-center items-center">
          <Image
          width={120}
          height={100}
          src="/logo.png"
          alt="Logo"
          priority
        />
        {/* <h2 className="space-grotesk text-2xl">Enthusiast <br /> Hydrogen</h2> */}
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {links.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} className={isActive(href)}>
                  {label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pl-10">
            <nav className="flex flex-col gap-4 mt-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={isActive(href)}
                  onClick={() => setOpen(false)} // closes sheet after click
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
