"use client";
import { PiGreaterThanThin } from "react-icons/pi";
import { usePathname } from "next/navigation";

const pageTitles = {
  "/about": "About Us",
  "/contact": "Contact",
  "/how-it-works": "How It Works",
  "/impact": "Impact",
  "/investor-relations": "Investor Relations",
  "/projects": "Projects",
  // Add more routes and titles as needed
};

export default function SubHeader() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || pathname.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) || "Page";
  return (
    <div className="relative w-full py-[30px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/slide1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50 w-full h-full"></div>
        <div className="z-10 w-full h-full flex flex-col items-center justify-center gap-2">
            <h2 className="text-white text-5xl font-extrabold capitalize">{title}</h2>
            <div className="px-5 py-3 bg-eh-accent w-fit rounded-4xl">
              <div className="w-full h-full flex gap-2 items-center justify-center text-white font-medium text-lg">
                  <a href="/" className="">Home </a>
                  <PiGreaterThanThin />
                  <span>{title}</span>
              </div>
            </div>
        </div>
    </div>
  );
}
