"use client"

import { animatePageOut } from "@/utils/animation"
import { usePathname, useRouter } from "next/navigation"

// Prop types are not needed in JS files; consider using PropTypes for type checking if desired.

const TransitionLink = ({ href, label, className }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    animatePageOut(href, router)
  }

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TransitionLink