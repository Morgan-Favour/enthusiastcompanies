"use client"

import { animatePageOut } from "@/utils/animation"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

// Prop types are not needed in JS files; consider using PropTypes for type checking if desired.

const TransitionLink = ({ href, label, className, handleClick }) => {
  const router = useRouter()
  const pathname = usePathname()

  const animatePage = () => {
    animatePageOut(href, router)
  }

  return (
    <Link
      className={className}
      onClick={() => {
        animatePage();
        if (handleClick) handleClick();
      }}
      href={href}
    >
      {label}
    </Link>
  )
}

export default TransitionLink