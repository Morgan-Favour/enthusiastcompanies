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
  SheetTitle
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import TransitionLink from "./TransitionLink"
import { animatePageOut } from "@/utils/animation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  const isActive = (href) =>
    pathname === href
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600"

  return (
    <header className="fixed top-0 left-0 w-full bg-eh-white/70 backdrop-blur-md shadow-sm z-50 flex justify-between items-center py-4 px-6 md:px-20">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center">
          <Image
            width={120}
            height={100}
            src="/logo.png"
            alt="Logo"
            priority
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:block text-eh-accent">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {links.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <TransitionLink href={href} label={label} className={isActive(href)} handleClick={handleClick} />
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
              <Menu className="h-7 w-7 text-eh-accent" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 pl-10 h-full overflow-y-auto backdrop-blur-md bg-white/70"
          >
            <SheetTitle>
              <VisuallyHidden>Mobile Menu</VisuallyHidden>
            </SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {links.map(({ href, label }) => (
                <TransitionLink key={href} href={href} label={label} className={isActive(href)} handleClick={handleClick} />
              ))}
            </nav>
          </SheetContent>


        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
