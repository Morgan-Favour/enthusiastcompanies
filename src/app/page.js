import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
// import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-[#F9F6EE]">
      <Hero />
      <WhatWeDo />
      <Stats />
      <Projects />
      <WhyUs />
    </div>
  );
}