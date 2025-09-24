"use client";
import SubHeader from "@/components/SubHeader";
import { usePathname } from "next/navigation";

export default function SubHeaderWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  if (isHome) return null;
  return <SubHeader />;
}
