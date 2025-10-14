"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import TransitionLink from "./TransitionLink"
import { animatePageOut } from "@/utils/animation"

const links = [
  { href: "/", label: "Home" },
  { href: "/hydrogen", label: "Enthusiast Hydrogen" },
  { href: "/power", label: "Enthusiast Power" },
  { href: "/product", label: "Enthusiast Product" },
  { href: "/contact", label: "Contact" },
]

const logoMap = {
  "/": "/companies-logo-2.png",
  "/hydrogen": "/logo.png",
  "/power": "/power-logo.png",
  "/product": "/product-logo.png",
}

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const logoSrc = logoMap[pathname] || "/companies-logo-2.png"

  const isActive = (href) =>
    pathname === href
      ? "text-blue-600 text-2xl font-semibold"
      : "text-white text-2xl hover:text-blue-600"

  return (
    <header className="fixed top-0 left-0 w-full bg-eh-white/70 backdrop-blur-md shadow-sm z-50 flex justify-between items-center py-4 px-6 md:px-20">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center">
          <Image
            width={120}
            height={100}
            src={logoSrc}
            alt="Logo"
            priority
          />
        </div>
      </Link>

      {/* Mobile/Universal Menu */}
      <div className="flex w-[50%]">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="ml-auto">
              <Menu className="h-10 w-10 text-eh-black" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full md:w-[500px] pl-10 h-full overflow-y-auto backdrop-blr-md bg-eh-black border-none"
          >
            <SheetTitle>
              <VisuallyHidden>Menu</VisuallyHidden>
            </SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {links.map(({ href, label }) => (
                <TransitionLink
                  key={href}
                  href={href}
                  label={label}
                  className={isActive(href)}
                  handleClick={() => setOpen(false)}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
