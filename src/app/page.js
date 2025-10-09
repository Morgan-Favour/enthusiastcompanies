import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
// import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-[#1c1c1c] w-full overflow-hidden">
      <Hero />
      <WhatWeDo />
      <Stats />
      <Projects />
      <WhyUs />
    </div>
  );
}