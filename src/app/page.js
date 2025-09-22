import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WhatWeDo from "@/components/WhatWeDo";
// import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhatWeDo />
      <Projects />
    </div>
  );
}