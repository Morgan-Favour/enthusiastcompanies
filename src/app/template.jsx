"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { animatePageIn } from "@/utils/animation"

export default function Template({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    animatePageIn()
  }, [])

  // Define colors for different routes
  const pageColors = {
    "/": "eh-power-red",
    "/hydrogen": "eh-primary",
    "/power": "eh-power-red",
    "/product": "eh-primary",
    "/contact": "eh-primary",
  }

  // Pick the color based on the current path (fallback to default)
  const bannerColor = pageColors[pathname] || "eh-primary"

  return (
    <div >
      <div
        id="banner-1"
        className={`bg-${bannerColor} min-h-screen z-999 fixed top-0 left-0 w-1/4`}
      />
      <div
        id="banner-2"
        className={`bg-${bannerColor} min-h-screen z-999 fixed top-0 left-1/4 w-1/4`}
      />
      <div
        id="banner-3"
        className={`bg-${bannerColor} min-h-screen z-999 fixed top-0 left-2/4 w-1/4`}
      />
      <div
        id="banner-4"
        className={`bg-${bannerColor} min-h-screen z-999 fixed top-0 left-3/4 w-1/4`}
      />
      {children}
    </div>
  )
}