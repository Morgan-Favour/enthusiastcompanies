import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
// import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhatWeDo />
      <Stats />
      <Projects />
      
    </div>
  );
}