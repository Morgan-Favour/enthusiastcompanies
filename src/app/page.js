
import HomeHero from "@/components/HomeHero";
import HomeAboutSection from "@/components/HomeAboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import InnovationSection from "@/components/InnovationSection";
import HowItStartedSection from "@/components/HowItStartedSection";
import HowItsGoingSection from "@/components/HowItsGoingSection";
import HomePartnershipSection from "@/components/HomePatnershipSection";


export default function Home() {
  return (
    <>
        <HomeHero />
        <DivisionsSection />
        <HomeAboutSection />
        <InnovationSection />
        <HowItStartedSection />
        <HowItsGoingSection />
        <HomePartnershipSection />
    </>
  );
}
