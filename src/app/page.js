import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
        <main>
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 w-full overflow-hidden">
            <Hero />
            <WhatWeDo />
            <Stats />
            <Projects />
            <WhyUs />
          </div>
        </main>
      <Footer />
    </>
  );
}
